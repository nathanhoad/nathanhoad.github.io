import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, f as transition_in, t as transition_out, A as destroy_component, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, J as src_url_equal, n as attr, H as append_hydration, C as noop } from "../../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-7cdefdb4.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-828bfacf.js";
const TIMESWEEPER_URL = "" + new URL("../../../assets/timesweeper-d76e803e.jpg", import.meta.url).href;
const TRASH_TREASURE_URL = "" + new URL("../../../assets/trash-treasure-43eabd58.jpg", import.meta.url).href;
function create_default_slot(ctx) {
  let header;
  let h1;
  let t0;
  let t1;
  let aside0;
  let t2;
  let t3;
  let p0;
  let t4;
  let t5;
  let figure0;
  let blockquote0;
  let t6;
  let t7;
  let figcaption0;
  let t8;
  let t9;
  let p1;
  let t10;
  let t11;
  let figure1;
  let blockquote1;
  let t12;
  let t13;
  let figcaption1;
  let t14;
  let t15;
  let p2;
  let t16;
  let t17;
  let p3;
  let t18;
  let t19;
  let figure2;
  let a0;
  let img0;
  let img0_src_value;
  let t20;
  let figcaption2;
  let t21;
  let t22;
  let p4;
  let t23;
  let a1;
  let t24;
  let t25;
  let a2;
  let t26;
  let t27;
  let t28;
  let p5;
  let t29;
  let t30;
  let p6;
  let t31;
  let t32;
  let p7;
  let t33;
  let t34;
  let p8;
  let t35;
  let t36;
  let aside1;
  let figure3;
  let img1;
  let img1_src_value;
  let t37;
  let figcaption3;
  let t38;
  let t39;
  let p9;
  let t40;
  let t41;
  let ol;
  let li0;
  let t42;
  let t43;
  let li1;
  let t44;
  let t45;
  let li2;
  let t46;
  let t47;
  let li3;
  let t48;
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("Publishing prototypes");
      t1 = space();
      aside0 = element("aside");
      t2 = text("August 2021");
      t3 = space();
      p0 = element("p");
      t4 = text("I was recently watching John Romero's talk from GDC 16 when one of his principles stuck out to me:");
      t5 = space();
      figure0 = element("figure");
      blockquote0 = element("blockquote");
      t6 = text(`"No prototypes. Just make the game. Polish as you go. Don't depend on polish happening later. Always maintain constantly shippable\r
      code."`);
      t7 = space();
      figcaption0 = element("figcaption");
      t8 = text("—John Romero");
      t9 = space();
      p1 = element("p");
      t10 = text("When you've had the success that he had with id Software back in the day it's hard to argue. So argue I won't. Instead I will elaborate\r\n    on the point Romero has made with my own interpretation of it.");
      t11 = space();
      figure1 = element("figure");
      blockquote1 = element("blockquote");
      t12 = text('"Publish your prototypes. Test out ideas on smaller games and release them before committing them to bigger projects."');
      t13 = space();
      figcaption1 = element("figcaption");
      t14 = text("—me");
      t15 = space();
      p2 = element("p");
      t16 = text("This way you still technically aren't making 'prototypes' because you're releasing actual games but you're also getting the benefits of\r\n    testing out ideas beforehand.");
      t17 = space();
      p3 = element("p");
      t18 = text("Perhaps not all prototypes make it far enough for them but, for any that do, there is value in the “releasing a game” experience.");
      t19 = space();
      figure2 = element("figure");
      a0 = element("a");
      img0 = element("img");
      t20 = space();
      figcaption2 = element("figcaption");
      t21 = text("Timesweeper is a two-player showdown.");
      t22 = space();
      p4 = element("p");
      t23 = text("I recently published a game on ");
      a1 = element("a");
      t24 = text("Gotm.io");
      t25 = text(" and\r\n    ");
      a2 = element("a");
      t26 = text("Itch");
      t27 = text(" (the Itch version is just the Gotm version embedded) called Timesweeper.");
      t28 = space();
      p5 = element("p");
      t29 = text("Timesweeper began as a quick prototype of the high level multiplayer API in Godot 3, then a quick prototype to see if that would work\r\n    with the Gotm addon.");
      t30 = space();
      p6 = element("p");
      t31 = text("It wasn't long before I had the whole thing functional as a very rough prototype. The game was mostly playable but setting it up each\r\n    time was a bit cumbersome.");
      t32 = space();
      p7 = element("p");
      t33 = text("I figured that I was close enough to having an actual game I should just tidy up the rough edges and actually finish it.");
      t34 = space();
      p8 = element("p");
      t35 = text("I added a title screen and some UI to host/join games as well as the end screen when someone wins.");
      t36 = space();
      aside1 = element("aside");
      figure3 = element("figure");
      img1 = element("img");
      t37 = space();
      figcaption3 = element("figcaption");
      t38 = text("You never know when your trash will become someone's treasure.");
      t39 = space();
      p9 = element("p");
      t40 = text("There are four main reasons I like releasing prototype games:");
      t41 = space();
      ol = element("ol");
      li0 = element("li");
      t42 = text("It makes you solve any actual problems, not just prove the basic idea. If you have to release the game into the wild you have to make\r\n      sure your idea is fully formed. This means you won't have half-baked ideas making their way into your bigger project.");
      t43 = space();
      li1 = element("li");
      t44 = text("Doing something a second time is always better. You can make a small mess of the first implementation while you learn how best to do\r\n      it. Then, with your newfound knowledge, you can implement a cleaner solution into the main project.");
      t45 = space();
      li2 = element("li");
      t46 = text("Even if you don't end up using the idea for anything else you've got something to show for it. In the example of Pixel Beach, I'm not\r\n      sure if I'll end up using the web-app-as-desktop-game method for releasing my bigger project but it was fun to test out and I have a\r\n      full game to show for the effort.");
      t47 = space();
      li3 = element("li");
      t48 = text("You never know when someone will fall in love with your 'throwaway' game.");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Publishing prototypes");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside0 = claim_element(header_nodes, "ASIDE", {});
      var aside0_nodes = children(aside0);
      t2 = claim_text(aside0_nodes, "August 2021");
      aside0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "I was recently watching John Romero's talk from GDC 16 when one of his principles stuck out to me:");
      p0_nodes.forEach(detach);
      t5 = claim_space(nodes);
      figure0 = claim_element(nodes, "FIGURE", {});
      var figure0_nodes = children(figure0);
      blockquote0 = claim_element(figure0_nodes, "BLOCKQUOTE", {});
      var blockquote0_nodes = children(blockquote0);
      t6 = claim_text(blockquote0_nodes, `"No prototypes. Just make the game. Polish as you go. Don't depend on polish happening later. Always maintain constantly shippable\r
      code."`);
      blockquote0_nodes.forEach(detach);
      t7 = claim_space(figure0_nodes);
      figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
      var figcaption0_nodes = children(figcaption0);
      t8 = claim_text(figcaption0_nodes, "—John Romero");
      figcaption0_nodes.forEach(detach);
      figure0_nodes.forEach(detach);
      t9 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t10 = claim_text(p1_nodes, "When you've had the success that he had with id Software back in the day it's hard to argue. So argue I won't. Instead I will elaborate\r\n    on the point Romero has made with my own interpretation of it.");
      p1_nodes.forEach(detach);
      t11 = claim_space(nodes);
      figure1 = claim_element(nodes, "FIGURE", {});
      var figure1_nodes = children(figure1);
      blockquote1 = claim_element(figure1_nodes, "BLOCKQUOTE", {});
      var blockquote1_nodes = children(blockquote1);
      t12 = claim_text(blockquote1_nodes, '"Publish your prototypes. Test out ideas on smaller games and release them before committing them to bigger projects."');
      blockquote1_nodes.forEach(detach);
      t13 = claim_space(figure1_nodes);
      figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
      var figcaption1_nodes = children(figcaption1);
      t14 = claim_text(figcaption1_nodes, "—me");
      figcaption1_nodes.forEach(detach);
      figure1_nodes.forEach(detach);
      t15 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t16 = claim_text(p2_nodes, "This way you still technically aren't making 'prototypes' because you're releasing actual games but you're also getting the benefits of\r\n    testing out ideas beforehand.");
      p2_nodes.forEach(detach);
      t17 = claim_space(nodes);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t18 = claim_text(p3_nodes, "Perhaps not all prototypes make it far enough for them but, for any that do, there is value in the “releasing a game” experience.");
      p3_nodes.forEach(detach);
      t19 = claim_space(nodes);
      figure2 = claim_element(nodes, "FIGURE", {});
      var figure2_nodes = children(figure2);
      a0 = claim_element(figure2_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      img0 = claim_element(a0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a0_nodes.forEach(detach);
      t20 = claim_space(figure2_nodes);
      figcaption2 = claim_element(figure2_nodes, "FIGCAPTION", {});
      var figcaption2_nodes = children(figcaption2);
      t21 = claim_text(figcaption2_nodes, "Timesweeper is a two-player showdown.");
      figcaption2_nodes.forEach(detach);
      figure2_nodes.forEach(detach);
      t22 = claim_space(nodes);
      p4 = claim_element(nodes, "P", {});
      var p4_nodes = children(p4);
      t23 = claim_text(p4_nodes, "I recently published a game on ");
      a1 = claim_element(p4_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t24 = claim_text(a1_nodes, "Gotm.io");
      a1_nodes.forEach(detach);
      t25 = claim_text(p4_nodes, " and\r\n    ");
      a2 = claim_element(p4_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t26 = claim_text(a2_nodes, "Itch");
      a2_nodes.forEach(detach);
      t27 = claim_text(p4_nodes, " (the Itch version is just the Gotm version embedded) called Timesweeper.");
      p4_nodes.forEach(detach);
      t28 = claim_space(nodes);
      p5 = claim_element(nodes, "P", {});
      var p5_nodes = children(p5);
      t29 = claim_text(p5_nodes, "Timesweeper began as a quick prototype of the high level multiplayer API in Godot 3, then a quick prototype to see if that would work\r\n    with the Gotm addon.");
      p5_nodes.forEach(detach);
      t30 = claim_space(nodes);
      p6 = claim_element(nodes, "P", {});
      var p6_nodes = children(p6);
      t31 = claim_text(p6_nodes, "It wasn't long before I had the whole thing functional as a very rough prototype. The game was mostly playable but setting it up each\r\n    time was a bit cumbersome.");
      p6_nodes.forEach(detach);
      t32 = claim_space(nodes);
      p7 = claim_element(nodes, "P", {});
      var p7_nodes = children(p7);
      t33 = claim_text(p7_nodes, "I figured that I was close enough to having an actual game I should just tidy up the rough edges and actually finish it.");
      p7_nodes.forEach(detach);
      t34 = claim_space(nodes);
      p8 = claim_element(nodes, "P", {});
      var p8_nodes = children(p8);
      t35 = claim_text(p8_nodes, "I added a title screen and some UI to host/join games as well as the end screen when someone wins.");
      p8_nodes.forEach(detach);
      t36 = claim_space(nodes);
      aside1 = claim_element(nodes, "ASIDE", { class: true });
      var aside1_nodes = children(aside1);
      figure3 = claim_element(aside1_nodes, "FIGURE", {});
      var figure3_nodes = children(figure3);
      img1 = claim_element(figure3_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t37 = claim_space(figure3_nodes);
      figcaption3 = claim_element(figure3_nodes, "FIGCAPTION", {});
      var figcaption3_nodes = children(figcaption3);
      t38 = claim_text(figcaption3_nodes, "You never know when your trash will become someone's treasure.");
      figcaption3_nodes.forEach(detach);
      figure3_nodes.forEach(detach);
      aside1_nodes.forEach(detach);
      t39 = claim_space(nodes);
      p9 = claim_element(nodes, "P", {});
      var p9_nodes = children(p9);
      t40 = claim_text(p9_nodes, "There are four main reasons I like releasing prototype games:");
      p9_nodes.forEach(detach);
      t41 = claim_space(nodes);
      ol = claim_element(nodes, "OL", {});
      var ol_nodes = children(ol);
      li0 = claim_element(ol_nodes, "LI", {});
      var li0_nodes = children(li0);
      t42 = claim_text(li0_nodes, "It makes you solve any actual problems, not just prove the basic idea. If you have to release the game into the wild you have to make\r\n      sure your idea is fully formed. This means you won't have half-baked ideas making their way into your bigger project.");
      li0_nodes.forEach(detach);
      t43 = claim_space(ol_nodes);
      li1 = claim_element(ol_nodes, "LI", {});
      var li1_nodes = children(li1);
      t44 = claim_text(li1_nodes, "Doing something a second time is always better. You can make a small mess of the first implementation while you learn how best to do\r\n      it. Then, with your newfound knowledge, you can implement a cleaner solution into the main project.");
      li1_nodes.forEach(detach);
      t45 = claim_space(ol_nodes);
      li2 = claim_element(ol_nodes, "LI", {});
      var li2_nodes = children(li2);
      t46 = claim_text(li2_nodes, "Even if you don't end up using the idea for anything else you've got something to show for it. In the example of Pixel Beach, I'm not\r\n      sure if I'll end up using the web-app-as-desktop-game method for releasing my bigger project but it was fun to test out and I have a\r\n      full game to show for the effort.");
      li2_nodes.forEach(detach);
      t47 = claim_space(ol_nodes);
      li3 = claim_element(ol_nodes, "LI", {});
      var li3_nodes = children(li3);
      t48 = claim_text(li3_nodes, "You never know when someone will fall in love with your 'throwaway' game.");
      li3_nodes.forEach(detach);
      ol_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img0.src, img0_src_value = TIMESWEEPER_URL))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "Screenshot of Timesweeper");
      attr(img0, "width", "1920");
      attr(img0, "height", "1080");
      attr(a0, "href", "https://nathanhoad.itch.io/timesweeper");
      attr(a1, "href", "https://gotm.io/nathanhoad/timesweeper");
      attr(a2, "href", "https://nathanhoad.itch.io/timesweeper");
      if (!src_url_equal(img1.src, img1_src_value = TRASH_TREASURE_URL))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Painting of Ibis on a pile of trash.");
      attr(img1, "width", "1600");
      attr(img1, "height", "1351");
      attr(aside1, "class", "right");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, h1);
      append_hydration(h1, t0);
      append_hydration(header, t1);
      append_hydration(header, aside0);
      append_hydration(aside0, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t4);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, figure0, anchor);
      append_hydration(figure0, blockquote0);
      append_hydration(blockquote0, t6);
      append_hydration(figure0, t7);
      append_hydration(figure0, figcaption0);
      append_hydration(figcaption0, t8);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t10);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, figure1, anchor);
      append_hydration(figure1, blockquote1);
      append_hydration(blockquote1, t12);
      append_hydration(figure1, t13);
      append_hydration(figure1, figcaption1);
      append_hydration(figcaption1, t14);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t16);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t18);
      insert_hydration(target, t19, anchor);
      insert_hydration(target, figure2, anchor);
      append_hydration(figure2, a0);
      append_hydration(a0, img0);
      append_hydration(figure2, t20);
      append_hydration(figure2, figcaption2);
      append_hydration(figcaption2, t21);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, p4, anchor);
      append_hydration(p4, t23);
      append_hydration(p4, a1);
      append_hydration(a1, t24);
      append_hydration(p4, t25);
      append_hydration(p4, a2);
      append_hydration(a2, t26);
      append_hydration(p4, t27);
      insert_hydration(target, t28, anchor);
      insert_hydration(target, p5, anchor);
      append_hydration(p5, t29);
      insert_hydration(target, t30, anchor);
      insert_hydration(target, p6, anchor);
      append_hydration(p6, t31);
      insert_hydration(target, t32, anchor);
      insert_hydration(target, p7, anchor);
      append_hydration(p7, t33);
      insert_hydration(target, t34, anchor);
      insert_hydration(target, p8, anchor);
      append_hydration(p8, t35);
      insert_hydration(target, t36, anchor);
      insert_hydration(target, aside1, anchor);
      append_hydration(aside1, figure3);
      append_hydration(figure3, img1);
      append_hydration(figure3, t37);
      append_hydration(figure3, figcaption3);
      append_hydration(figcaption3, t38);
      insert_hydration(target, t39, anchor);
      insert_hydration(target, p9, anchor);
      append_hydration(p9, t40);
      insert_hydration(target, t41, anchor);
      insert_hydration(target, ol, anchor);
      append_hydration(ol, li0);
      append_hydration(li0, t42);
      append_hydration(ol, t43);
      append_hydration(ol, li1);
      append_hydration(li1, t44);
      append_hydration(ol, t45);
      append_hydration(ol, li2);
      append_hydration(li2, t46);
      append_hydration(ol, t47);
      append_hydration(ol, li3);
      append_hydration(li3, t48);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(header);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t5);
      if (detaching)
        detach(figure0);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(figure1);
      if (detaching)
        detach(t15);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t17);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t19);
      if (detaching)
        detach(figure2);
      if (detaching)
        detach(t22);
      if (detaching)
        detach(p4);
      if (detaching)
        detach(t28);
      if (detaching)
        detach(p5);
      if (detaching)
        detach(t30);
      if (detaching)
        detach(p6);
      if (detaching)
        detach(t32);
      if (detaching)
        detach(p7);
      if (detaching)
        detach(t34);
      if (detaching)
        detach(p8);
      if (detaching)
        detach(t36);
      if (detaching)
        detach(aside1);
      if (detaching)
        detach(t39);
      if (detaching)
        detach(p9);
      if (detaching)
        detach(t41);
      if (detaching)
        detach(ol);
    }
  };
}
function create_fragment(ctx) {
  let meta;
  let t0;
  let headersimple;
  let t1;
  let article;
  let t2;
  let footer;
  let current;
  meta = new Meta({
    props: {
      path: "/prototypes",
      title: "Publishing prototypes",
      description: "Going through the release process is good practice and gives you a sense of completing a project"
    }
  });
  headersimple = new Header_simple({});
  article = new Article({
    props: {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    }
  });
  footer = new Footer({});
  return {
    c() {
      create_component(meta.$$.fragment);
      t0 = space();
      create_component(headersimple.$$.fragment);
      t1 = space();
      create_component(article.$$.fragment);
      t2 = space();
      create_component(footer.$$.fragment);
    },
    l(nodes) {
      claim_component(meta.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(headersimple.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(article.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(meta, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(headersimple, target, anchor);
      insert_hydration(target, t1, anchor);
      mount_component(article, target, anchor);
      insert_hydration(target, t2, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p(ctx2, [dirty]) {
      const article_changes = {};
      if (dirty & /*$$scope*/
      1) {
        article_changes.$$scope = { dirty, ctx: ctx2 };
      }
      article.$set(article_changes);
    },
    i(local) {
      if (current)
        return;
      transition_in(meta.$$.fragment, local);
      transition_in(headersimple.$$.fragment, local);
      transition_in(article.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(meta.$$.fragment, local);
      transition_out(headersimple.$$.fragment, local);
      transition_out(article.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(meta, detaching);
      if (detaching)
        detach(t0);
      destroy_component(headersimple, detaching);
      if (detaching)
        detach(t1);
      destroy_component(article, detaching);
      if (detaching)
        detach(t2);
      destroy_component(footer, detaching);
    }
  };
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Page as default
};
