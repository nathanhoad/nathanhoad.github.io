function queryAll(selector, parent) {
  return [].slice.call(document.querySelectorAll(selector, parent));
}

window.addEventListener("DOMContentLoaded", function () {
  //
  // Get the body scrollbar width
  //
  var scroller = document.createElement("div");
  scroller.className = "measure-scrollbar-width";
  document.body.appendChild(scroller);
  var SCROLLBAR_WIDTH = scroller.offsetWidth - scroller.clientWidth;
  document.body.removeChild(scroller);

  //
  // Give the home page header background some depth
  //
  var welcome = document.querySelector(".welcome");
  if (welcome) {
    var background = welcome.firstElementChild;
    var foreground = background.firstElementChild;
    var title = welcome.querySelector("h1");

    function parallax() {
      var bounds = welcome.getBoundingClientRect();
      var scroll = bounds.bottom / window.innerHeight;

      if (scroll > 2 || scroll < -1) return;

      background.style.setProperty("transform", "translateY(" + (scroll * -3 + 10) + "%)");
      foreground.style.setProperty("transform", "translateY(" + (scroll * 8 - 15) + "%)");
      title.style.setProperty("transform", "translate(-50%, " + ((scroll - 0.8) * 40 - 20) + "%)");
    }
    parallax();

    window.addEventListener(
      "scroll",
      function () {
        requestAnimationFrame(parallax);
      },
      { passive: true }
    );
  }

  //
  // Set the year in the footer
  //
  document.querySelector("footer > aside > span").textContent = new Date().getFullYear();

  //
  // YouTube thumbnail links
  //
  queryAll('a[href*="https://youtu"] > img').forEach(function (img) {
    var play = document.createElement("div");
    play.className = "play";
    img.parentElement.appendChild(play);
  });

  //
  // Image captions
  //
  queryAll("img + br + em, a + br + em").forEach(function (em) {
    var p = em.parentElement;
    var figure = document.createElement("figure");

    // Bail out if the main element is a link but not an image
    if (p.firstElementChild.tagName === "A" && !p.firstElementChild.querySelector("img")) return;

    // Add image (or link if it is one)
    figure.appendChild(p.firstElementChild);

    // Add the caption
    var figcaption = document.createElement("figcaption");
    figcaption.innerHTML = em.innerHTML;
    figure.appendChild(figcaption);

    p.parentElement.insertBefore(figure, p);
    p.parentElement.removeChild(p);
  });

  //
  // Quotes
  //
  queryAll("blockquote").forEach(function (quote) {
    var lines = [].slice.call(quote.children);
    var lastLine = lines[lines.length - 1];

    if (lastLine.querySelector('a[href*="twitter.com/nathanhoad/status"]')) {
      quote.className = "tweet";
      quote.removeChild(lastLine);
      lastLine.innerHTML = lastLine.innerHTML.replace("--", "");
      // Published time
      var time = lastLine.querySelector("a");
      time.className = "tweet-time";
      lastLine.removeChild(time);
      quote.appendChild(time);
      // Profile
      var matches = lastLine.innerText.match(/([^\(]+)\(([^\)]+)/, "");
      var name = matches[1].trim();
      var verified = name.endsWith("*");
      name = name.replace(/\*$/, "");
      var handle = matches[2];
      var author = document.createElement("a");
      author.href = "https://twitter.com/" + handle.replace("@", "");
      author.className = "tweet-profile";
      author.innerHTML =
        '<img src="/twitter-profile.jpg" /><strong>' + name + (verified ? " <em>✔</em>" : "") + "</strong> " + handle;
      quote.insertBefore(author, quote.firstElementChild);
    } else if (lastLine.innerText.startsWith("--")) {
      lastLine.className = "author";
      lastLine.innerHTML = lastLine.innerHTML.replace(/^\-\-/, "&mdash;");
    }
  });

  //
  // General sections
  //
  queryAll('section[data-type="wide"]').forEach(function (section) {
    section.className = "section-wide";
  });

  queryAll('section[data-type="full"]').forEach(function (section) {
    section.className = "section-full";
  });

  queryAll('section[data-type="pull-right"]').forEach(function (section) {
    section.className = "section-right";
  });

  queryAll('section[data-type="pull-left"]').forEach(function (section) {
    section.className = "section-left";
  });

  //
  // Full screen scrolly sections
  //
  queryAll('section[data-type="block"]').forEach(function (section) {
    // Adjust the width to account for scrollbars
    section.style.setProperty("width", "calc(100vw - " + SCROLLBAR_WIDTH + "px)");
    section.style.setProperty("margin-left", "calc(-50vw + 50% + " + SCROLLBAR_WIDTH / 2 + "px)");

    // The first element is the background
    var media = section.firstElementChild;
    var caption;

    switch (media.tagName) {
      case "FIGURE":
        caption = media.querySelector("figcaption");
        media = media.querySelector("img");
        break;

      case "VIDEO":
        // Do nothing. We already have the video
        break;

      case "IMG":
      default:
        media = media.querySelector("img");
    }

    // No background found so bail early
    if (!media) return;

    section.className = "section-block";

    section.removeChild(section.firstElementChild);

    // Set up the fixed background
    var background = document.createElement("div");
    background.className = "block-background";
    background.appendChild(media);
    if (caption) {
      background.appendChild(caption);
    }
    section.insertBefore(background, section.firstElementChild);

    // All other children get put into little boxes
    [].slice.call(section.children).forEach(function (child) {
      if (child.tagName !== "P") return;

      var panel = document.createElement("div");
      panel.className = "block-panel";
      if (section.getAttribute("data-colour") === "light") {
        panel.className += " block-panel-light";
      }
      panel.appendChild(child);
      section.appendChild(panel);
    });
  });

  //
  // Galleries
  //
  queryAll('section[data-type="gallery"]').forEach(function (section) {
    section.className = "section-wide section-gallery";

    var items = [].slice.call(section.children);
    items.forEach(function (child) {
      section.removeChild(child);
    });

    // Set up rows
    var rowClasses = ["one", "two", "three", "four"];
    var rowCounts = (section.getAttribute("data-layout") || "").split(",").map(function (n) {
      return parseInt(n, 10);
    });
    for (var r = 0; r < rowCounts.length; r++) {
      var row = document.createElement("div");
      row.className = "row " + rowClasses[rowCounts[r] - 1];
      section.appendChild(row);
      for (var i = 0; i < rowCounts[r]; i++) {
        row.appendChild(items.shift());
      }
    }
  });

  //
  // Collect all images into a global gallery
  //
  var allImages = queryAll("article img").filter(function (image) {
    return image.parentElement.tagName !== "A";
  });

  function openGallery(index) {
    gallery.className = "main-gallery visible";
    currentIndex = index;
    currentImage.src = allImages[currentIndex].src;

    // Stop body scrolling
    document.body.style.top = -window.scrollY + "px";
    document.body.style.position = "fixed";
    document.body.style.width = "calc(100% - " + SCROLLBAR_WIDTH + "px)";
  }

  function closeGallery() {
    gallery.className = "main-gallery";

    // Restore body scrolling
    document.body.style.width = "100%";
    var scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0", 10) * -1);
  }

  function previousImage() {
    currentIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1;
    currentImage.src = allImages[currentIndex].src;
    currentImage.className = currentImage.className.includes("1") ? "jiggle-left-2" : "jiggle-left-1";
  }

  function nextImage() {
    currentIndex = (currentIndex + 1) % allImages.length;
    currentImage.src = allImages[currentIndex].src;
    currentImage.className = currentImage.className.includes("1") ? "jiggle-right-2" : "jiggle-right-1";
  }

  var currentIndex = 0;
  var gallery = document.createElement("div");
  gallery.className = "main-gallery";
  var overlay = document.createElement("div");
  overlay.className = "overlay";
  overlay.addEventListener("click", closeGallery);
  gallery.appendChild(overlay);
  var currentImage = new Image();
  gallery.appendChild(currentImage);

  if (allImages.length > 1) {
    var prevButton = document.createElement("button");
    prevButton.title = "Previous";
    prevButton.innerText = "‹";
    prevButton.className = "previous";
    prevButton.addEventListener("click", previousImage);
    gallery.appendChild(prevButton);

    var nextButton = document.createElement("button");
    nextButton.title = "Next";
    nextButton.innerText = "›";
    nextButton.className = "next";
    nextButton.addEventListener("click", nextImage);
    gallery.appendChild(nextButton);
  }

  var closeButton = document.createElement("button");
  closeButton.title = "Close";
  closeButton.innerText = "×";
  closeButton.className = "close";
  closeButton.addEventListener("click", closeGallery);
  gallery.appendChild(closeButton);

  document.body.appendChild(gallery);

  window.addEventListener("keyup", function (event) {
    if (!gallery.className.includes("visible")) return;

    switch (event.keyCode) {
      case 39:
        event.preventDefault();
        event.stopPropagation();
        return nextImage();

      case 37:
        event.preventDefault();
        event.stopPropagation();
        return previousImage();

      case 27:
        event.preventDefault();
        event.stopPropagation();
        return closeGallery();
    }
  });

  allImages.forEach(function (image, index) {
    // Open the gallery on this index
    image.addEventListener("click", function () {
      openGallery(index);
    });
  });
});
