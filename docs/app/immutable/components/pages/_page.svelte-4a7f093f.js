import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, J as src_url_equal, b as insert_hydration, H as append_hydration, C as noop, x as create_component, y as claim_component, z as mount_component, f as transition_in, t as transition_out, A as destroy_component } from "../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../chunks/footer-7cdefdb4.js";
const headerLarge_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let header;
  let main;
  let h1;
  let t0;
  let t1;
  let aside;
  let a0;
  let img0;
  let img0_src_value;
  let t2;
  let a1;
  let img1;
  let img1_src_value;
  let t3;
  let a2;
  let img2;
  let img2_src_value;
  let t4;
  let a3;
  let img3;
  let img3_src_value;
  let t5;
  let section;
  let img4;
  let img4_src_value;
  return {
    c() {
      header = element("header");
      main = element("main");
      h1 = element("h1");
      t0 = text("Nathan Hoad");
      t1 = space();
      aside = element("aside");
      a0 = element("a");
      img0 = element("img");
      t2 = space();
      a1 = element("a");
      img1 = element("img");
      t3 = space();
      a2 = element("a");
      img2 = element("img");
      t4 = space();
      a3 = element("a");
      img3 = element("img");
      t5 = space();
      section = element("section");
      img4 = element("img");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      main = claim_element(header_nodes, "MAIN", { class: true });
      var main_nodes = children(main);
      h1 = claim_element(main_nodes, "H1", { class: true });
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Nathan Hoad");
      h1_nodes.forEach(detach);
      t1 = claim_space(main_nodes);
      aside = claim_element(main_nodes, "ASIDE", { class: true });
      var aside_nodes = children(aside);
      a0 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      img0 = claim_element(a0_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a0_nodes.forEach(detach);
      t2 = claim_space(aside_nodes);
      a1 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      img1 = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a1_nodes.forEach(detach);
      t3 = claim_space(aside_nodes);
      a2 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      img2 = claim_element(a2_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a2_nodes.forEach(detach);
      t4 = claim_space(aside_nodes);
      a3 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      img3 = claim_element(a3_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      a3_nodes.forEach(detach);
      aside_nodes.forEach(detach);
      main_nodes.forEach(detach);
      t5 = claim_space(header_nodes);
      section = claim_element(header_nodes, "SECTION", { class: true });
      var section_nodes = children(section);
      img4 = claim_element(section_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      section_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(h1, "class", "svelte-1n5m4m");
      if (!src_url_equal(img0.src, img0_src_value = "/youtube-dark.svg"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "YouTube");
      attr(img0, "width", "40");
      attr(img0, "height", "40");
      attr(a0, "href", "https://youtube.com/@nathan_hoad");
      attr(a0, "class", "svelte-1n5m4m");
      if (!src_url_equal(img1.src, img1_src_value = "/discord-dark.svg"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Discord");
      attr(img1, "width", "40");
      attr(img1, "height", "40");
      attr(a1, "href", "/discord");
      attr(a1, "class", "svelte-1n5m4m");
      if (!src_url_equal(img2.src, img2_src_value = "/mastodon-dark.svg"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "Mastodon");
      attr(img2, "width", "40");
      attr(img2, "height", "40");
      attr(a2, "href", "https://mastodon.social/@nathanhoad");
      attr(a2, "class", "svelte-1n5m4m");
      if (!src_url_equal(img3.src, img3_src_value = "/github-dark.svg"))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "GitHub");
      attr(img3, "width", "40");
      attr(img3, "height", "40");
      attr(a3, "href", "https://github.com/nathanhoad");
      attr(a3, "class", "svelte-1n5m4m");
      attr(aside, "class", "svelte-1n5m4m");
      attr(main, "class", "svelte-1n5m4m");
      if (!src_url_equal(img4.src, img4_src_value = "/cliff.gif"))
        attr(img4, "src", img4_src_value);
      attr(img4, "alt", "");
      attr(img4, "width", "1440");
      attr(img4, "height", "810");
      attr(img4, "class", "svelte-1n5m4m");
      attr(section, "class", "svelte-1n5m4m");
      attr(header, "class", "svelte-1n5m4m");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, main);
      append_hydration(main, h1);
      append_hydration(h1, t0);
      append_hydration(main, t1);
      append_hydration(main, aside);
      append_hydration(aside, a0);
      append_hydration(a0, img0);
      append_hydration(aside, t2);
      append_hydration(aside, a1);
      append_hydration(a1, img1);
      append_hydration(aside, t3);
      append_hydration(aside, a2);
      append_hydration(a2, img2);
      append_hydration(aside, t4);
      append_hydration(aside, a3);
      append_hydration(a3, img3);
      append_hydration(header, t5);
      append_hydration(header, section);
      append_hydration(section, img4);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(header);
    }
  };
}
class Header_large extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const _page_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let meta;
  let t0;
  let header;
  let t1;
  let section0;
  let p0;
  let t2;
  let a0;
  let t3;
  let t4;
  let t5;
  let p1;
  let t6;
  let t7;
  let p2;
  let t8;
  let a1;
  let t9;
  let t10;
  let a2;
  let t11;
  let t12;
  let t13;
  let section1;
  let h20;
  let t14;
  let t15;
  let ul0;
  let li0;
  let a3;
  let img0;
  let img0_src_value;
  let t16;
  let span0;
  let t17;
  let t18;
  let li1;
  let a4;
  let img1;
  let img1_src_value;
  let t19;
  let span1;
  let t20;
  let t21;
  let li2;
  let a5;
  let img2;
  let img2_src_value;
  let t22;
  let span2;
  let t23;
  let t24;
  let li3;
  let a6;
  let img3;
  let img3_src_value;
  let t25;
  let span3;
  let t26;
  let t27;
  let li4;
  let a7;
  let img4;
  let img4_src_value;
  let t28;
  let span4;
  let t29;
  let t30;
  let li5;
  let a8;
  let img5;
  let img5_src_value;
  let t31;
  let span5;
  let t32;
  let t33;
  let section2;
  let h21;
  let t34;
  let t35;
  let ul1;
  let li6;
  let a9;
  let t36;
  let t37;
  let span6;
  let t38;
  let t39;
  let li7;
  let a10;
  let t40;
  let t41;
  let span7;
  let t42;
  let t43;
  let li8;
  let a11;
  let t44;
  let t45;
  let span8;
  let t46;
  let t47;
  let li9;
  let a12;
  let t48;
  let t49;
  let span9;
  let t50;
  let t51;
  let li10;
  let a13;
  let t52;
  let t53;
  let span10;
  let t54;
  let t55;
  let li11;
  let a14;
  let t56;
  let t57;
  let span11;
  let t58;
  let t59;
  let li12;
  let a15;
  let t60;
  let t61;
  let span12;
  let t62;
  let t63;
  let li13;
  let a16;
  let t64;
  let t65;
  let span13;
  let t66;
  let t67;
  let li14;
  let a17;
  let t68;
  let t69;
  let span14;
  let t70;
  let t71;
  let footer;
  let current;
  meta = new Meta({
    props: {
      path: "/",
      title: "Nathan Hoad",
      description: "G'day! I'm Nathan hoad and I'm an independent game developer. Right now I'm working on a classic adventure game about our cat, Coco."
    }
  });
  header = new Header_large({});
  footer = new Footer({});
  return {
    c() {
      create_component(meta.$$.fragment);
      t0 = space();
      create_component(header.$$.fragment);
      t1 = space();
      section0 = element("section");
      p0 = element("p");
      t2 = text("G'day! I'm Nathan Hoad and I'm an independent game developer and doer of art stuff with ");
      a0 = element("a");
      t3 = text("Lilly Piri");
      t4 = text(".");
      t5 = space();
      p1 = element("p");
      t6 = text("I love writing code, drawing pictures, composing music, and telling stories and making games combines all of those things.");
      t7 = space();
      p2 = element("p");
      t8 = text("Right now I'm ");
      a1 = element("a");
      t9 = text("building a classic adventure game");
      t10 = text(" about our cat, Coco, as well as working\r\n    on a few ");
      a2 = element("a");
      t11 = text("Godot Engine");
      t12 = text(" addons.");
      t13 = space();
      section1 = element("section");
      h20 = element("h2");
      t14 = text("Projects");
      t15 = space();
      ul0 = element("ul");
      li0 = element("li");
      a3 = element("a");
      img0 = element("img");
      t16 = space();
      span0 = element("span");
      t17 = text("Gamedev Videos");
      t18 = space();
      li1 = element("li");
      a4 = element("a");
      img1 = element("img");
      t19 = space();
      span1 = element("span");
      t20 = text("Dialogue Manager");
      t21 = space();
      li2 = element("li");
      a5 = element("a");
      img2 = element("img");
      t22 = space();
      span2 = element("span");
      t23 = text("Puzzle Dependencies");
      t24 = space();
      li3 = element("li");
      a6 = element("a");
      img3 = element("img");
      t25 = space();
      span3 = element("span");
      t26 = text("Input Helper");
      t27 = space();
      li4 = element("li");
      a7 = element("a");
      img4 = element("img");
      t28 = space();
      span4 = element("span");
      t29 = text("The Definitely Ending Story");
      t30 = space();
      li5 = element("li");
      a8 = element("a");
      img5 = element("img");
      t31 = space();
      span5 = element("span");
      t32 = text("Timesweeper");
      t33 = space();
      section2 = element("section");
      h21 = element("h2");
      t34 = text("Articles");
      t35 = space();
      ul1 = element("ul");
      li6 = element("li");
      a9 = element("a");
      t36 = text("What makes a good puzzle?");
      t37 = space();
      span6 = element("span");
      t38 = text("February 2023");
      t39 = space();
      li7 = element("li");
      a10 = element("a");
      t40 = text("What I use to make games");
      t41 = space();
      span7 = element("span");
      t42 = text("January 2023");
      t43 = space();
      li8 = element("li");
      a11 = element("a");
      t44 = text("Making a dialogue manager for Godot");
      t45 = space();
      span8 = element("span");
      t46 = text("Febrary 2022");
      t47 = space();
      li9 = element("li");
      a12 = element("a");
      t48 = text("Publishing prototypes");
      t49 = space();
      span9 = element("span");
      t50 = text("August 2021");
      t51 = space();
      li10 = element("li");
      a13 = element("a");
      t52 = text("Use finite state machines for NPC behaviour");
      t53 = space();
      span10 = element("span");
      t54 = text("May 2021");
      t55 = space();
      li11 = element("li");
      a14 = element("a");
      t56 = text("Why I'm choosing Godot");
      t57 = space();
      span11 = element("span");
      t58 = text("September 2020");
      t59 = space();
      li12 = element("li");
      a15 = element("a");
      t60 = text("Just start now");
      t61 = space();
      span12 = element("span");
      t62 = text("March 2018");
      t63 = space();
      li13 = element("li");
      a16 = element("a");
      t64 = text("What I Iearned from completing a painting every day for a whole year");
      t65 = space();
      span13 = element("span");
      t66 = text("January 2018");
      t67 = space();
      li14 = element("li");
      a17 = element("a");
      t68 = text("Making a hand-painted puzzle game in 48 hours");
      t69 = space();
      span14 = element("span");
      t70 = text("July 2017");
      t71 = space();
      create_component(footer.$$.fragment);
      this.h();
    },
    l(nodes) {
      claim_component(meta.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(header.$$.fragment, nodes);
      t1 = claim_space(nodes);
      section0 = claim_element(nodes, "SECTION", { class: true });
      var section0_nodes = children(section0);
      p0 = claim_element(section0_nodes, "P", {});
      var p0_nodes = children(p0);
      t2 = claim_text(p0_nodes, "G'day! I'm Nathan Hoad and I'm an independent game developer and doer of art stuff with ");
      a0 = claim_element(p0_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t3 = claim_text(a0_nodes, "Lilly Piri");
      a0_nodes.forEach(detach);
      t4 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach);
      t5 = claim_space(section0_nodes);
      p1 = claim_element(section0_nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "I love writing code, drawing pictures, composing music, and telling stories and making games combines all of those things.");
      p1_nodes.forEach(detach);
      t7 = claim_space(section0_nodes);
      p2 = claim_element(section0_nodes, "P", {});
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "Right now I'm ");
      a1 = claim_element(p2_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t9 = claim_text(a1_nodes, "building a classic adventure game");
      a1_nodes.forEach(detach);
      t10 = claim_text(p2_nodes, " about our cat, Coco, as well as working\r\n    on a few ");
      a2 = claim_element(p2_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t11 = claim_text(a2_nodes, "Godot Engine");
      a2_nodes.forEach(detach);
      t12 = claim_text(p2_nodes, " addons.");
      p2_nodes.forEach(detach);
      section0_nodes.forEach(detach);
      t13 = claim_space(nodes);
      section1 = claim_element(nodes, "SECTION", { class: true });
      var section1_nodes = children(section1);
      h20 = claim_element(section1_nodes, "H2", { class: true });
      var h20_nodes = children(h20);
      t14 = claim_text(h20_nodes, "Projects");
      h20_nodes.forEach(detach);
      t15 = claim_space(section1_nodes);
      ul0 = claim_element(section1_nodes, "UL", { class: true });
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", { class: true });
      var li0_nodes = children(li0);
      a3 = claim_element(li0_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      img0 = claim_element(a3_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t16 = claim_space(a3_nodes);
      span0 = claim_element(a3_nodes, "SPAN", { class: true });
      var span0_nodes = children(span0);
      t17 = claim_text(span0_nodes, "Gamedev Videos");
      span0_nodes.forEach(detach);
      a3_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t18 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", { class: true });
      var li1_nodes = children(li1);
      a4 = claim_element(li1_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      img1 = claim_element(a4_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t19 = claim_space(a4_nodes);
      span1 = claim_element(a4_nodes, "SPAN", { class: true });
      var span1_nodes = children(span1);
      t20 = claim_text(span1_nodes, "Dialogue Manager");
      span1_nodes.forEach(detach);
      a4_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      t21 = claim_space(ul0_nodes);
      li2 = claim_element(ul0_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      a5 = claim_element(li2_nodes, "A", { href: true, class: true });
      var a5_nodes = children(a5);
      img2 = claim_element(a5_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t22 = claim_space(a5_nodes);
      span2 = claim_element(a5_nodes, "SPAN", { class: true });
      var span2_nodes = children(span2);
      t23 = claim_text(span2_nodes, "Puzzle Dependencies");
      span2_nodes.forEach(detach);
      a5_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      t24 = claim_space(ul0_nodes);
      li3 = claim_element(ul0_nodes, "LI", { class: true });
      var li3_nodes = children(li3);
      a6 = claim_element(li3_nodes, "A", { href: true, class: true });
      var a6_nodes = children(a6);
      img3 = claim_element(a6_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t25 = claim_space(a6_nodes);
      span3 = claim_element(a6_nodes, "SPAN", { class: true });
      var span3_nodes = children(span3);
      t26 = claim_text(span3_nodes, "Input Helper");
      span3_nodes.forEach(detach);
      a6_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      t27 = claim_space(ul0_nodes);
      li4 = claim_element(ul0_nodes, "LI", { class: true });
      var li4_nodes = children(li4);
      a7 = claim_element(li4_nodes, "A", { href: true, class: true });
      var a7_nodes = children(a7);
      img4 = claim_element(a7_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t28 = claim_space(a7_nodes);
      span4 = claim_element(a7_nodes, "SPAN", { class: true });
      var span4_nodes = children(span4);
      t29 = claim_text(span4_nodes, "The Definitely Ending Story");
      span4_nodes.forEach(detach);
      a7_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      t30 = claim_space(ul0_nodes);
      li5 = claim_element(ul0_nodes, "LI", { class: true });
      var li5_nodes = children(li5);
      a8 = claim_element(li5_nodes, "A", { href: true, class: true });
      var a8_nodes = children(a8);
      img5 = claim_element(a8_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      t31 = claim_space(a8_nodes);
      span5 = claim_element(a8_nodes, "SPAN", { class: true });
      var span5_nodes = children(span5);
      t32 = claim_text(span5_nodes, "Timesweeper");
      span5_nodes.forEach(detach);
      a8_nodes.forEach(detach);
      li5_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      section1_nodes.forEach(detach);
      t33 = claim_space(nodes);
      section2 = claim_element(nodes, "SECTION", { class: true });
      var section2_nodes = children(section2);
      h21 = claim_element(section2_nodes, "H2", { class: true });
      var h21_nodes = children(h21);
      t34 = claim_text(h21_nodes, "Articles");
      h21_nodes.forEach(detach);
      t35 = claim_space(section2_nodes);
      ul1 = claim_element(section2_nodes, "UL", { class: true });
      var ul1_nodes = children(ul1);
      li6 = claim_element(ul1_nodes, "LI", { class: true });
      var li6_nodes = children(li6);
      a9 = claim_element(li6_nodes, "A", { href: true, class: true });
      var a9_nodes = children(a9);
      t36 = claim_text(a9_nodes, "What makes a good puzzle?");
      a9_nodes.forEach(detach);
      t37 = claim_space(li6_nodes);
      span6 = claim_element(li6_nodes, "SPAN", { class: true });
      var span6_nodes = children(span6);
      t38 = claim_text(span6_nodes, "February 2023");
      span6_nodes.forEach(detach);
      li6_nodes.forEach(detach);
      t39 = claim_space(ul1_nodes);
      li7 = claim_element(ul1_nodes, "LI", { class: true });
      var li7_nodes = children(li7);
      a10 = claim_element(li7_nodes, "A", { href: true, class: true });
      var a10_nodes = children(a10);
      t40 = claim_text(a10_nodes, "What I use to make games");
      a10_nodes.forEach(detach);
      t41 = claim_space(li7_nodes);
      span7 = claim_element(li7_nodes, "SPAN", { class: true });
      var span7_nodes = children(span7);
      t42 = claim_text(span7_nodes, "January 2023");
      span7_nodes.forEach(detach);
      li7_nodes.forEach(detach);
      t43 = claim_space(ul1_nodes);
      li8 = claim_element(ul1_nodes, "LI", { class: true });
      var li8_nodes = children(li8);
      a11 = claim_element(li8_nodes, "A", { href: true, class: true });
      var a11_nodes = children(a11);
      t44 = claim_text(a11_nodes, "Making a dialogue manager for Godot");
      a11_nodes.forEach(detach);
      t45 = claim_space(li8_nodes);
      span8 = claim_element(li8_nodes, "SPAN", { class: true });
      var span8_nodes = children(span8);
      t46 = claim_text(span8_nodes, "Febrary 2022");
      span8_nodes.forEach(detach);
      li8_nodes.forEach(detach);
      t47 = claim_space(ul1_nodes);
      li9 = claim_element(ul1_nodes, "LI", { class: true });
      var li9_nodes = children(li9);
      a12 = claim_element(li9_nodes, "A", { href: true, class: true });
      var a12_nodes = children(a12);
      t48 = claim_text(a12_nodes, "Publishing prototypes");
      a12_nodes.forEach(detach);
      t49 = claim_space(li9_nodes);
      span9 = claim_element(li9_nodes, "SPAN", { class: true });
      var span9_nodes = children(span9);
      t50 = claim_text(span9_nodes, "August 2021");
      span9_nodes.forEach(detach);
      li9_nodes.forEach(detach);
      t51 = claim_space(ul1_nodes);
      li10 = claim_element(ul1_nodes, "LI", { class: true });
      var li10_nodes = children(li10);
      a13 = claim_element(li10_nodes, "A", { href: true, class: true });
      var a13_nodes = children(a13);
      t52 = claim_text(a13_nodes, "Use finite state machines for NPC behaviour");
      a13_nodes.forEach(detach);
      t53 = claim_space(li10_nodes);
      span10 = claim_element(li10_nodes, "SPAN", { class: true });
      var span10_nodes = children(span10);
      t54 = claim_text(span10_nodes, "May 2021");
      span10_nodes.forEach(detach);
      li10_nodes.forEach(detach);
      t55 = claim_space(ul1_nodes);
      li11 = claim_element(ul1_nodes, "LI", { class: true });
      var li11_nodes = children(li11);
      a14 = claim_element(li11_nodes, "A", { href: true, class: true });
      var a14_nodes = children(a14);
      t56 = claim_text(a14_nodes, "Why I'm choosing Godot");
      a14_nodes.forEach(detach);
      t57 = claim_space(li11_nodes);
      span11 = claim_element(li11_nodes, "SPAN", { class: true });
      var span11_nodes = children(span11);
      t58 = claim_text(span11_nodes, "September 2020");
      span11_nodes.forEach(detach);
      li11_nodes.forEach(detach);
      t59 = claim_space(ul1_nodes);
      li12 = claim_element(ul1_nodes, "LI", { class: true });
      var li12_nodes = children(li12);
      a15 = claim_element(li12_nodes, "A", { href: true, class: true });
      var a15_nodes = children(a15);
      t60 = claim_text(a15_nodes, "Just start now");
      a15_nodes.forEach(detach);
      t61 = claim_space(li12_nodes);
      span12 = claim_element(li12_nodes, "SPAN", { class: true });
      var span12_nodes = children(span12);
      t62 = claim_text(span12_nodes, "March 2018");
      span12_nodes.forEach(detach);
      li12_nodes.forEach(detach);
      t63 = claim_space(ul1_nodes);
      li13 = claim_element(ul1_nodes, "LI", { class: true });
      var li13_nodes = children(li13);
      a16 = claim_element(li13_nodes, "A", { href: true, class: true });
      var a16_nodes = children(a16);
      t64 = claim_text(a16_nodes, "What I Iearned from completing a painting every day for a whole year");
      a16_nodes.forEach(detach);
      t65 = claim_space(li13_nodes);
      span13 = claim_element(li13_nodes, "SPAN", { class: true });
      var span13_nodes = children(span13);
      t66 = claim_text(span13_nodes, "January 2018");
      span13_nodes.forEach(detach);
      li13_nodes.forEach(detach);
      t67 = claim_space(ul1_nodes);
      li14 = claim_element(ul1_nodes, "LI", { class: true });
      var li14_nodes = children(li14);
      a17 = claim_element(li14_nodes, "A", { href: true, class: true });
      var a17_nodes = children(a17);
      t68 = claim_text(a17_nodes, "Making a hand-painted puzzle game in 48 hours");
      a17_nodes.forEach(detach);
      t69 = claim_space(li14_nodes);
      span14 = claim_element(li14_nodes, "SPAN", { class: true });
      var span14_nodes = children(span14);
      t70 = claim_text(span14_nodes, "July 2017");
      span14_nodes.forEach(detach);
      li14_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      section2_nodes.forEach(detach);
      t71 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
      this.h();
    },
    h() {
      attr(a0, "href", "https://lillypiri.com");
      attr(a0, "class", "svelte-qoo4w");
      attr(a1, "href", "https://youtube.com/@nathan_hoad");
      attr(a1, "class", "svelte-qoo4w");
      attr(a2, "href", "https://godotengine.org/");
      attr(a2, "class", "svelte-qoo4w");
      attr(section0, "class", "svelte-qoo4w");
      attr(h20, "class", "svelte-qoo4w");
      if (!src_url_equal(img0.src, img0_src_value = "/devlogs-on-youtube.png"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "");
      attr(img0, "width", "960");
      attr(img0, "height", "540");
      attr(img0, "class", "svelte-qoo4w");
      attr(span0, "class", "svelte-qoo4w");
      attr(a3, "href", "https://youtube.com/@nathan_hoad");
      attr(a3, "class", "svelte-qoo4w");
      attr(li0, "class", "svelte-qoo4w");
      if (!src_url_equal(img1.src, img1_src_value = "/dialogue-manager.jpg"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "");
      attr(img1, "width", "960");
      attr(img1, "height", "540");
      attr(img1, "class", "svelte-qoo4w");
      attr(span1, "class", "svelte-qoo4w");
      attr(a4, "href", "https://github.com/nathanhoad/godot_dialogue_manager");
      attr(a4, "class", "svelte-qoo4w");
      attr(li1, "class", "svelte-qoo4w");
      if (!src_url_equal(img2.src, img2_src_value = "/puzzle-dependencies.jpg"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "");
      attr(img2, "width", "960");
      attr(img2, "height", "540");
      attr(img2, "class", "svelte-qoo4w");
      attr(span2, "class", "svelte-qoo4w");
      attr(a5, "href", "https://github.com/nathanhoad/godot_puzzle_dependencies");
      attr(a5, "class", "svelte-qoo4w");
      attr(li2, "class", "svelte-qoo4w");
      if (!src_url_equal(img3.src, img3_src_value = "/input-helper.jpg"))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "");
      attr(img3, "width", "960");
      attr(img3, "height", "540");
      attr(img3, "class", "svelte-qoo4w");
      attr(span3, "class", "svelte-qoo4w");
      attr(a6, "href", "https://github.com/nathanhoad/godot_input_helper");
      attr(a6, "class", "svelte-qoo4w");
      attr(li3, "class", "svelte-qoo4w");
      if (!src_url_equal(img4.src, img4_src_value = "/the-definitely-ending-story.jpg"))
        attr(img4, "src", img4_src_value);
      attr(img4, "alt", "");
      attr(img4, "width", "960");
      attr(img4, "height", "540");
      attr(img4, "class", "svelte-qoo4w");
      attr(span4, "class", "svelte-qoo4w");
      attr(a7, "href", "https://nathanhoad.itch.io/the-definitely-ending-story");
      attr(a7, "class", "svelte-qoo4w");
      attr(li4, "class", "svelte-qoo4w");
      if (!src_url_equal(img5.src, img5_src_value = "/timesweeper.jpg"))
        attr(img5, "src", img5_src_value);
      attr(img5, "alt", "");
      attr(img5, "width", "960");
      attr(img5, "height", "540");
      attr(img5, "class", "svelte-qoo4w");
      attr(span5, "class", "svelte-qoo4w");
      attr(a8, "href", "https://nathanhoad.itch.io/timesweeper");
      attr(a8, "class", "svelte-qoo4w");
      attr(li5, "class", "svelte-qoo4w");
      attr(ul0, "class", "projects svelte-qoo4w");
      attr(section1, "class", "svelte-qoo4w");
      attr(h21, "class", "svelte-qoo4w");
      attr(a9, "href", "/puzzles");
      attr(a9, "class", "svelte-qoo4w");
      attr(span6, "class", "svelte-qoo4w");
      attr(li6, "class", "svelte-qoo4w");
      attr(a10, "href", "/uses");
      attr(a10, "class", "svelte-qoo4w");
      attr(span7, "class", "svelte-qoo4w");
      attr(li7, "class", "svelte-qoo4w");
      attr(a11, "href", "/gdm");
      attr(a11, "class", "svelte-qoo4w");
      attr(span8, "class", "svelte-qoo4w");
      attr(li8, "class", "svelte-qoo4w");
      attr(a12, "href", "/prototypes");
      attr(a12, "class", "svelte-qoo4w");
      attr(span9, "class", "svelte-qoo4w");
      attr(li9, "class", "svelte-qoo4w");
      attr(a13, "href", "/fsm");
      attr(a13, "class", "svelte-qoo4w");
      attr(span10, "class", "svelte-qoo4w");
      attr(li10, "class", "svelte-qoo4w");
      attr(a14, "href", "/godot");
      attr(a14, "class", "svelte-qoo4w");
      attr(span11, "class", "svelte-qoo4w");
      attr(li11, "class", "svelte-qoo4w");
      attr(a15, "href", "/jsn");
      attr(a15, "class", "svelte-qoo4w");
      attr(span12, "class", "svelte-qoo4w");
      attr(li12, "class", "svelte-qoo4w");
      attr(a16, "href", "/365");
      attr(a16, "class", "svelte-qoo4w");
      attr(span13, "class", "svelte-qoo4w");
      attr(li13, "class", "svelte-qoo4w");
      attr(a17, "href", "/hackathon");
      attr(a17, "class", "svelte-qoo4w");
      attr(span14, "class", "svelte-qoo4w");
      attr(li14, "class", "svelte-qoo4w");
      attr(ul1, "class", "articles svelte-qoo4w");
      attr(section2, "class", "svelte-qoo4w");
    },
    m(target, anchor) {
      mount_component(meta, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(header, target, anchor);
      insert_hydration(target, t1, anchor);
      insert_hydration(target, section0, anchor);
      append_hydration(section0, p0);
      append_hydration(p0, t2);
      append_hydration(p0, a0);
      append_hydration(a0, t3);
      append_hydration(p0, t4);
      append_hydration(section0, t5);
      append_hydration(section0, p1);
      append_hydration(p1, t6);
      append_hydration(section0, t7);
      append_hydration(section0, p2);
      append_hydration(p2, t8);
      append_hydration(p2, a1);
      append_hydration(a1, t9);
      append_hydration(p2, t10);
      append_hydration(p2, a2);
      append_hydration(a2, t11);
      append_hydration(p2, t12);
      insert_hydration(target, t13, anchor);
      insert_hydration(target, section1, anchor);
      append_hydration(section1, h20);
      append_hydration(h20, t14);
      append_hydration(section1, t15);
      append_hydration(section1, ul0);
      append_hydration(ul0, li0);
      append_hydration(li0, a3);
      append_hydration(a3, img0);
      append_hydration(a3, t16);
      append_hydration(a3, span0);
      append_hydration(span0, t17);
      append_hydration(ul0, t18);
      append_hydration(ul0, li1);
      append_hydration(li1, a4);
      append_hydration(a4, img1);
      append_hydration(a4, t19);
      append_hydration(a4, span1);
      append_hydration(span1, t20);
      append_hydration(ul0, t21);
      append_hydration(ul0, li2);
      append_hydration(li2, a5);
      append_hydration(a5, img2);
      append_hydration(a5, t22);
      append_hydration(a5, span2);
      append_hydration(span2, t23);
      append_hydration(ul0, t24);
      append_hydration(ul0, li3);
      append_hydration(li3, a6);
      append_hydration(a6, img3);
      append_hydration(a6, t25);
      append_hydration(a6, span3);
      append_hydration(span3, t26);
      append_hydration(ul0, t27);
      append_hydration(ul0, li4);
      append_hydration(li4, a7);
      append_hydration(a7, img4);
      append_hydration(a7, t28);
      append_hydration(a7, span4);
      append_hydration(span4, t29);
      append_hydration(ul0, t30);
      append_hydration(ul0, li5);
      append_hydration(li5, a8);
      append_hydration(a8, img5);
      append_hydration(a8, t31);
      append_hydration(a8, span5);
      append_hydration(span5, t32);
      insert_hydration(target, t33, anchor);
      insert_hydration(target, section2, anchor);
      append_hydration(section2, h21);
      append_hydration(h21, t34);
      append_hydration(section2, t35);
      append_hydration(section2, ul1);
      append_hydration(ul1, li6);
      append_hydration(li6, a9);
      append_hydration(a9, t36);
      append_hydration(li6, t37);
      append_hydration(li6, span6);
      append_hydration(span6, t38);
      append_hydration(ul1, t39);
      append_hydration(ul1, li7);
      append_hydration(li7, a10);
      append_hydration(a10, t40);
      append_hydration(li7, t41);
      append_hydration(li7, span7);
      append_hydration(span7, t42);
      append_hydration(ul1, t43);
      append_hydration(ul1, li8);
      append_hydration(li8, a11);
      append_hydration(a11, t44);
      append_hydration(li8, t45);
      append_hydration(li8, span8);
      append_hydration(span8, t46);
      append_hydration(ul1, t47);
      append_hydration(ul1, li9);
      append_hydration(li9, a12);
      append_hydration(a12, t48);
      append_hydration(li9, t49);
      append_hydration(li9, span9);
      append_hydration(span9, t50);
      append_hydration(ul1, t51);
      append_hydration(ul1, li10);
      append_hydration(li10, a13);
      append_hydration(a13, t52);
      append_hydration(li10, t53);
      append_hydration(li10, span10);
      append_hydration(span10, t54);
      append_hydration(ul1, t55);
      append_hydration(ul1, li11);
      append_hydration(li11, a14);
      append_hydration(a14, t56);
      append_hydration(li11, t57);
      append_hydration(li11, span11);
      append_hydration(span11, t58);
      append_hydration(ul1, t59);
      append_hydration(ul1, li12);
      append_hydration(li12, a15);
      append_hydration(a15, t60);
      append_hydration(li12, t61);
      append_hydration(li12, span12);
      append_hydration(span12, t62);
      append_hydration(ul1, t63);
      append_hydration(ul1, li13);
      append_hydration(li13, a16);
      append_hydration(a16, t64);
      append_hydration(li13, t65);
      append_hydration(li13, span13);
      append_hydration(span13, t66);
      append_hydration(ul1, t67);
      append_hydration(ul1, li14);
      append_hydration(li14, a17);
      append_hydration(a17, t68);
      append_hydration(li14, t69);
      append_hydration(li14, span14);
      append_hydration(span14, t70);
      insert_hydration(target, t71, anchor);
      mount_component(footer, target, anchor);
      current = true;
    },
    p: noop,
    i(local) {
      if (current)
        return;
      transition_in(meta.$$.fragment, local);
      transition_in(header.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(meta.$$.fragment, local);
      transition_out(header.$$.fragment, local);
      transition_out(footer.$$.fragment, local);
      current = false;
    },
    d(detaching) {
      destroy_component(meta, detaching);
      if (detaching)
        detach(t0);
      destroy_component(header, detaching);
      if (detaching)
        detach(t1);
      if (detaching)
        detach(section0);
      if (detaching)
        detach(t13);
      if (detaching)
        detach(section1);
      if (detaching)
        detach(t33);
      if (detaching)
        detach(section2);
      if (detaching)
        detach(t71);
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
