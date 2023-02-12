import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, f as transition_in, t as transition_out, A as destroy_component, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, n as attr, H as append_hydration, C as noop } from "../../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-03ca8822.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-828bfacf.js";
function create_default_slot(ctx) {
  let header;
  let h1;
  let t0;
  let t1;
  let aside;
  let t2;
  let t3;
  let p0;
  let t4;
  let t5;
  let p1;
  let t6;
  let em;
  let t7;
  let t8;
  let t9;
  let h20;
  let t10;
  let t11;
  let ul0;
  let li0;
  let a0;
  let t12;
  let t13;
  let t14;
  let li1;
  let a1;
  let t15;
  let t16;
  let t17;
  let li2;
  let a2;
  let t18;
  let t19;
  let t20;
  let li3;
  let a3;
  let t21;
  let t22;
  let t23;
  let li4;
  let a4;
  let t24;
  let t25;
  let t26;
  let h21;
  let t27;
  let t28;
  let ul1;
  let li5;
  let a5;
  let t29;
  let t30;
  let t31;
  let li6;
  let a6;
  let t32;
  let t33;
  let t34;
  let li7;
  let a7;
  let t35;
  let t36;
  let a8;
  let t37;
  let t38;
  let h22;
  let t39;
  let t40;
  let ul2;
  let li8;
  let a9;
  let t41;
  let t42;
  let t43;
  let li9;
  let a10;
  let t44;
  let t45;
  let t46;
  let li10;
  let a11;
  let t47;
  let t48;
  let t49;
  let li11;
  let a12;
  let t50;
  let t51;
  let t52;
  let h23;
  let t53;
  let t54;
  let ul3;
  let li12;
  let a13;
  let t55;
  let t56;
  let t57;
  let li13;
  let a14;
  let t58;
  let t59;
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("What I use to make games");
      t1 = space();
      aside = element("aside");
      t2 = text("January 2023");
      t3 = space();
      p0 = element("p");
      t4 = text("I've been asked a number of times about what I use to do things so here is a list that I can point people at.");
      t5 = space();
      p1 = element("p");
      t6 = text("This was last updated ");
      em = element("em");
      t7 = text("January 10th, 2023");
      t8 = text(".");
      t9 = space();
      h20 = element("h2");
      t10 = text("Development");
      t11 = space();
      ul0 = element("ul");
      li0 = element("li");
      a0 = element("a");
      t12 = text("Godot");
      t13 = text(" is my game engine of choice");
      t14 = space();
      li1 = element("li");
      a1 = element("a");
      t15 = text("Visual Studio Code");
      t16 = text(" for writing non-gdscript code");
      t17 = space();
      li2 = element("li");
      a2 = element("a");
      t18 = text("Dracula Theme");
      t19 = text(" for everything");
      t20 = space();
      li3 = element("li");
      a3 = element("a");
      t21 = text("GitHub");
      t22 = text(" for hosting my code");
      t23 = space();
      li4 = element("li");
      a4 = element("a");
      t24 = text("Notion");
      t25 = text(" for writing notes and todo lists");
      t26 = space();
      h21 = element("h2");
      t27 = text("Art");
      t28 = space();
      ul1 = element("ul");
      li5 = element("li");
      a5 = element("a");
      t29 = text("Aseprite");
      t30 = text(" for pixel art");
      t31 = space();
      li6 = element("li");
      a6 = element("a");
      t32 = text("Inkscape");
      t33 = text(" for vector art");
      t34 = space();
      li7 = element("li");
      a7 = element("a");
      t35 = text("Krita");
      t36 = text(" for drawing on my\n      ");
      a8 = element("a");
      t37 = text("Surface Pro 9");
      t38 = space();
      h22 = element("h2");
      t39 = text("Sound/Music");
      t40 = space();
      ul2 = element("ul");
      li8 = element("li");
      a9 = element("a");
      t41 = text("Yeti X");
      t42 = text(" microphone");
      t43 = space();
      li9 = element("li");
      a10 = element("a");
      t44 = text("Reaper");
      t45 = text(" for music and sound");
      t46 = space();
      li10 = element("li");
      a11 = element("a");
      t47 = text("Spitfire BBC Symphony Orchestra Discover");
      t48 = text(" for big sounding music");
      t49 = space();
      li11 = element("li");
      a12 = element("a");
      t50 = text("Surge XT");
      t51 = text(" for synth instruments");
      t52 = space();
      h23 = element("h2");
      t53 = text("Video");
      t54 = space();
      ul3 = element("ul");
      li12 = element("li");
      a13 = element("a");
      t55 = text("OBS Studio");
      t56 = text(" to capture game footage");
      t57 = space();
      li13 = element("li");
      a14 = element("a");
      t58 = text("DaVinci Resolve");
      t59 = text(" for editing videos");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "What I use to make games");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside = claim_element(header_nodes, "ASIDE", {});
      var aside_nodes = children(aside);
      t2 = claim_text(aside_nodes, "January 2023");
      aside_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "I've been asked a number of times about what I use to do things so here is a list that I can point people at.");
      p0_nodes.forEach(detach);
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "This was last updated ");
      em = claim_element(p1_nodes, "EM", {});
      var em_nodes = children(em);
      t7 = claim_text(em_nodes, "January 10th, 2023");
      em_nodes.forEach(detach);
      t8 = claim_text(p1_nodes, ".");
      p1_nodes.forEach(detach);
      t9 = claim_space(nodes);
      h20 = claim_element(nodes, "H2", {});
      var h20_nodes = children(h20);
      t10 = claim_text(h20_nodes, "Development");
      h20_nodes.forEach(detach);
      t11 = claim_space(nodes);
      ul0 = claim_element(nodes, "UL", {});
      var ul0_nodes = children(ul0);
      li0 = claim_element(ul0_nodes, "LI", {});
      var li0_nodes = children(li0);
      a0 = claim_element(li0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t12 = claim_text(a0_nodes, "Godot");
      a0_nodes.forEach(detach);
      t13 = claim_text(li0_nodes, " is my game engine of choice");
      li0_nodes.forEach(detach);
      t14 = claim_space(ul0_nodes);
      li1 = claim_element(ul0_nodes, "LI", {});
      var li1_nodes = children(li1);
      a1 = claim_element(li1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t15 = claim_text(a1_nodes, "Visual Studio Code");
      a1_nodes.forEach(detach);
      t16 = claim_text(li1_nodes, " for writing non-gdscript code");
      li1_nodes.forEach(detach);
      t17 = claim_space(ul0_nodes);
      li2 = claim_element(ul0_nodes, "LI", {});
      var li2_nodes = children(li2);
      a2 = claim_element(li2_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t18 = claim_text(a2_nodes, "Dracula Theme");
      a2_nodes.forEach(detach);
      t19 = claim_text(li2_nodes, " for everything");
      li2_nodes.forEach(detach);
      t20 = claim_space(ul0_nodes);
      li3 = claim_element(ul0_nodes, "LI", {});
      var li3_nodes = children(li3);
      a3 = claim_element(li3_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      t21 = claim_text(a3_nodes, "GitHub");
      a3_nodes.forEach(detach);
      t22 = claim_text(li3_nodes, " for hosting my code");
      li3_nodes.forEach(detach);
      t23 = claim_space(ul0_nodes);
      li4 = claim_element(ul0_nodes, "LI", {});
      var li4_nodes = children(li4);
      a4 = claim_element(li4_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t24 = claim_text(a4_nodes, "Notion");
      a4_nodes.forEach(detach);
      t25 = claim_text(li4_nodes, " for writing notes and todo lists");
      li4_nodes.forEach(detach);
      ul0_nodes.forEach(detach);
      t26 = claim_space(nodes);
      h21 = claim_element(nodes, "H2", {});
      var h21_nodes = children(h21);
      t27 = claim_text(h21_nodes, "Art");
      h21_nodes.forEach(detach);
      t28 = claim_space(nodes);
      ul1 = claim_element(nodes, "UL", {});
      var ul1_nodes = children(ul1);
      li5 = claim_element(ul1_nodes, "LI", {});
      var li5_nodes = children(li5);
      a5 = claim_element(li5_nodes, "A", { href: true });
      var a5_nodes = children(a5);
      t29 = claim_text(a5_nodes, "Aseprite");
      a5_nodes.forEach(detach);
      t30 = claim_text(li5_nodes, " for pixel art");
      li5_nodes.forEach(detach);
      t31 = claim_space(ul1_nodes);
      li6 = claim_element(ul1_nodes, "LI", {});
      var li6_nodes = children(li6);
      a6 = claim_element(li6_nodes, "A", { href: true });
      var a6_nodes = children(a6);
      t32 = claim_text(a6_nodes, "Inkscape");
      a6_nodes.forEach(detach);
      t33 = claim_text(li6_nodes, " for vector art");
      li6_nodes.forEach(detach);
      t34 = claim_space(ul1_nodes);
      li7 = claim_element(ul1_nodes, "LI", {});
      var li7_nodes = children(li7);
      a7 = claim_element(li7_nodes, "A", { href: true });
      var a7_nodes = children(a7);
      t35 = claim_text(a7_nodes, "Krita");
      a7_nodes.forEach(detach);
      t36 = claim_text(li7_nodes, " for drawing on my\n      ");
      a8 = claim_element(li7_nodes, "A", { href: true });
      var a8_nodes = children(a8);
      t37 = claim_text(a8_nodes, "Surface Pro 9");
      a8_nodes.forEach(detach);
      li7_nodes.forEach(detach);
      ul1_nodes.forEach(detach);
      t38 = claim_space(nodes);
      h22 = claim_element(nodes, "H2", {});
      var h22_nodes = children(h22);
      t39 = claim_text(h22_nodes, "Sound/Music");
      h22_nodes.forEach(detach);
      t40 = claim_space(nodes);
      ul2 = claim_element(nodes, "UL", {});
      var ul2_nodes = children(ul2);
      li8 = claim_element(ul2_nodes, "LI", {});
      var li8_nodes = children(li8);
      a9 = claim_element(li8_nodes, "A", { href: true });
      var a9_nodes = children(a9);
      t41 = claim_text(a9_nodes, "Yeti X");
      a9_nodes.forEach(detach);
      t42 = claim_text(li8_nodes, " microphone");
      li8_nodes.forEach(detach);
      t43 = claim_space(ul2_nodes);
      li9 = claim_element(ul2_nodes, "LI", {});
      var li9_nodes = children(li9);
      a10 = claim_element(li9_nodes, "A", { href: true });
      var a10_nodes = children(a10);
      t44 = claim_text(a10_nodes, "Reaper");
      a10_nodes.forEach(detach);
      t45 = claim_text(li9_nodes, " for music and sound");
      li9_nodes.forEach(detach);
      t46 = claim_space(ul2_nodes);
      li10 = claim_element(ul2_nodes, "LI", {});
      var li10_nodes = children(li10);
      a11 = claim_element(li10_nodes, "A", { href: true });
      var a11_nodes = children(a11);
      t47 = claim_text(a11_nodes, "Spitfire BBC Symphony Orchestra Discover");
      a11_nodes.forEach(detach);
      t48 = claim_text(li10_nodes, " for big sounding music");
      li10_nodes.forEach(detach);
      t49 = claim_space(ul2_nodes);
      li11 = claim_element(ul2_nodes, "LI", {});
      var li11_nodes = children(li11);
      a12 = claim_element(li11_nodes, "A", { href: true });
      var a12_nodes = children(a12);
      t50 = claim_text(a12_nodes, "Surge XT");
      a12_nodes.forEach(detach);
      t51 = claim_text(li11_nodes, " for synth instruments");
      li11_nodes.forEach(detach);
      ul2_nodes.forEach(detach);
      t52 = claim_space(nodes);
      h23 = claim_element(nodes, "H2", {});
      var h23_nodes = children(h23);
      t53 = claim_text(h23_nodes, "Video");
      h23_nodes.forEach(detach);
      t54 = claim_space(nodes);
      ul3 = claim_element(nodes, "UL", {});
      var ul3_nodes = children(ul3);
      li12 = claim_element(ul3_nodes, "LI", {});
      var li12_nodes = children(li12);
      a13 = claim_element(li12_nodes, "A", { href: true });
      var a13_nodes = children(a13);
      t55 = claim_text(a13_nodes, "OBS Studio");
      a13_nodes.forEach(detach);
      t56 = claim_text(li12_nodes, " to capture game footage");
      li12_nodes.forEach(detach);
      t57 = claim_space(ul3_nodes);
      li13 = claim_element(ul3_nodes, "LI", {});
      var li13_nodes = children(li13);
      a14 = claim_element(li13_nodes, "A", { href: true });
      var a14_nodes = children(a14);
      t58 = claim_text(a14_nodes, "DaVinci Resolve");
      a14_nodes.forEach(detach);
      t59 = claim_text(li13_nodes, " for editing videos");
      li13_nodes.forEach(detach);
      ul3_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://godotengine.org/");
      attr(a1, "href", "https://code.visualstudio.com/");
      attr(a2, "href", "https://draculatheme.com/");
      attr(a3, "href", "https://github.com");
      attr(a4, "href", "https://www.notion.so/");
      attr(a5, "href", "https://www.aseprite.org/");
      attr(a6, "href", "https://inkscape.org/");
      attr(a7, "href", "https://krita.org/");
      attr(a8, "href", "https://www.microsoft.com/en-au/d/surface-pro-9/93vkd8np4fvk?activetab=pivot%3aoverviewtab");
      attr(a9, "href", "https://www.bluemic.com/en-au/products/yeti-x/");
      attr(a10, "href", "https://www.reaper.fm/");
      attr(a11, "href", "https://www.spitfireaudio.com/bbc-symphony-orchestra-discover");
      attr(a12, "href", "https://surge-synthesizer.github.io/");
      attr(a13, "href", "https://obsproject.com/");
      attr(a14, "href", "https://www.blackmagicdesign.com/au/products/davinciresolve/");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, h1);
      append_hydration(h1, t0);
      append_hydration(header, t1);
      append_hydration(header, aside);
      append_hydration(aside, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t4);
      insert_hydration(target, t5, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t6);
      append_hydration(p1, em);
      append_hydration(em, t7);
      append_hydration(p1, t8);
      insert_hydration(target, t9, anchor);
      insert_hydration(target, h20, anchor);
      append_hydration(h20, t10);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, ul0, anchor);
      append_hydration(ul0, li0);
      append_hydration(li0, a0);
      append_hydration(a0, t12);
      append_hydration(li0, t13);
      append_hydration(ul0, t14);
      append_hydration(ul0, li1);
      append_hydration(li1, a1);
      append_hydration(a1, t15);
      append_hydration(li1, t16);
      append_hydration(ul0, t17);
      append_hydration(ul0, li2);
      append_hydration(li2, a2);
      append_hydration(a2, t18);
      append_hydration(li2, t19);
      append_hydration(ul0, t20);
      append_hydration(ul0, li3);
      append_hydration(li3, a3);
      append_hydration(a3, t21);
      append_hydration(li3, t22);
      append_hydration(ul0, t23);
      append_hydration(ul0, li4);
      append_hydration(li4, a4);
      append_hydration(a4, t24);
      append_hydration(li4, t25);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, h21, anchor);
      append_hydration(h21, t27);
      insert_hydration(target, t28, anchor);
      insert_hydration(target, ul1, anchor);
      append_hydration(ul1, li5);
      append_hydration(li5, a5);
      append_hydration(a5, t29);
      append_hydration(li5, t30);
      append_hydration(ul1, t31);
      append_hydration(ul1, li6);
      append_hydration(li6, a6);
      append_hydration(a6, t32);
      append_hydration(li6, t33);
      append_hydration(ul1, t34);
      append_hydration(ul1, li7);
      append_hydration(li7, a7);
      append_hydration(a7, t35);
      append_hydration(li7, t36);
      append_hydration(li7, a8);
      append_hydration(a8, t37);
      insert_hydration(target, t38, anchor);
      insert_hydration(target, h22, anchor);
      append_hydration(h22, t39);
      insert_hydration(target, t40, anchor);
      insert_hydration(target, ul2, anchor);
      append_hydration(ul2, li8);
      append_hydration(li8, a9);
      append_hydration(a9, t41);
      append_hydration(li8, t42);
      append_hydration(ul2, t43);
      append_hydration(ul2, li9);
      append_hydration(li9, a10);
      append_hydration(a10, t44);
      append_hydration(li9, t45);
      append_hydration(ul2, t46);
      append_hydration(ul2, li10);
      append_hydration(li10, a11);
      append_hydration(a11, t47);
      append_hydration(li10, t48);
      append_hydration(ul2, t49);
      append_hydration(ul2, li11);
      append_hydration(li11, a12);
      append_hydration(a12, t50);
      append_hydration(li11, t51);
      insert_hydration(target, t52, anchor);
      insert_hydration(target, h23, anchor);
      append_hydration(h23, t53);
      insert_hydration(target, t54, anchor);
      insert_hydration(target, ul3, anchor);
      append_hydration(ul3, li12);
      append_hydration(li12, a13);
      append_hydration(a13, t55);
      append_hydration(li12, t56);
      append_hydration(ul3, t57);
      append_hydration(ul3, li13);
      append_hydration(li13, a14);
      append_hydration(a14, t58);
      append_hydration(li13, t59);
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
        detach(p1);
      if (detaching)
        detach(t9);
      if (detaching)
        detach(h20);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(ul0);
      if (detaching)
        detach(t26);
      if (detaching)
        detach(h21);
      if (detaching)
        detach(t28);
      if (detaching)
        detach(ul1);
      if (detaching)
        detach(t38);
      if (detaching)
        detach(h22);
      if (detaching)
        detach(t40);
      if (detaching)
        detach(ul2);
      if (detaching)
        detach(t52);
      if (detaching)
        detach(h23);
      if (detaching)
        detach(t54);
      if (detaching)
        detach(ul3);
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
      path: "/uses",
      title: "What I use to make games",
      description: "A list of the things I use to make games"
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
