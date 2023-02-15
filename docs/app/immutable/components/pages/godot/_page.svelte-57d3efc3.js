import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, f as transition_in, t as transition_out, A as destroy_component, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, n as attr, J as src_url_equal, H as append_hydration, C as noop } from "../../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-7cdefdb4.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-828bfacf.js";
const TAVERN_URL = "" + new URL("../../../assets/tavern-lighting-8ef2c72e.jpg", import.meta.url).href;
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
  let t7;
  let p2;
  let t8;
  let a0;
  let t9;
  let t10;
  let t11;
  let figure;
  let img;
  let img_src_value;
  let t12;
  let figcaption;
  let t13;
  let t14;
  let p3;
  let t15;
  let t16;
  let p4;
  let t17;
  let t18;
  let p5;
  let t19;
  let t20;
  let p6;
  let t21;
  let t22;
  let p7;
  let t23;
  let t24;
  let p8;
  let t25;
  let a1;
  let t26;
  let t27;
  let t28;
  let p9;
  let t29;
  let t30;
  let p10;
  let t31;
  let t32;
  let p11;
  let t33;
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("Why I'm choosing Godot");
      t1 = space();
      aside = element("aside");
      t2 = text("September 2020");
      t3 = space();
      p0 = element("p");
      t4 = text("I've been making games here and there for about 25 years but t's only been in the last few years that I've started doing it more\r\n    deliberately.");
      t5 = space();
      p1 = element("p");
      t6 = text("Back in the early days all I had available to me was a copy of The Games Factory I bought from a local computer store but these days\r\n    there's a never-ending supply of game-making tools.");
      t7 = space();
      p2 = element("p");
      t8 = text("So why did I choose ");
      a0 = element("a");
      t9 = text("Godot");
      t10 = text("?");
      t11 = space();
      figure = element("figure");
      img = element("img");
      t12 = space();
      figcaption = element("figcaption");
      t13 = text("Coco's adventures moved to Godot.");
      t14 = space();
      p3 = element("p");
      t15 = text("The first big reason for me is that it's free and open source. Some of the other popular engines have had some scary looking license\r\n    revisions over the years but, based on how the project is structured, Godot is immune from that.");
      t16 = space();
      p4 = element("p");
      t17 = text("Another reason is that it's light.");
      t18 = space();
      p5 = element("p");
      t19 = text("Godot doesn't need much to run and its footprint Is tiny. In less than 100mb you get a full game engine. And there is a surprising\r\n    amount of stuff packed into that size.");
      t20 = space();
      p6 = element("p");
      t21 = text("I like the node-based structure.");
      t22 = space();
      p7 = element("p");
      t23 = text("Before getting into Godot, I had built my own streamline ECS based engine so the node stuff looked like it might be a messy approach.");
      t24 = space();
      p8 = element("p");
      t25 = text("After giving it a go and completing the ");
      a1 = element("a");
      t26 = text("Heartbeast Action RPG tutorial series");
      t27 = text(", however, my misconceptions were broken. The way Godot structures scenes and code is exactly how my brain thinks.");
      t28 = space();
      p9 = element("p");
      t29 = text("One of the biggest reasons for me though is the community.");
      t30 = space();
      p10 = element("p");
      t31 = text("Everybody is passionate about Godot and there is always someone willing to help you out. There are countless high quality tutorials that\r\n    teach everything you need to get started.");
      t32 = space();
      p11 = element("p");
      t33 = text("I've used a long list of game-making software over the years but Godot is the first one that feels like home.");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Why I'm choosing Godot");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside = claim_element(header_nodes, "ASIDE", {});
      var aside_nodes = children(aside);
      t2 = claim_text(aside_nodes, "September 2020");
      aside_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "I've been making games here and there for about 25 years but t's only been in the last few years that I've started doing it more\r\n    deliberately.");
      p0_nodes.forEach(detach);
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "Back in the early days all I had available to me was a copy of The Games Factory I bought from a local computer store but these days\r\n    there's a never-ending supply of game-making tools.");
      p1_nodes.forEach(detach);
      t7 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "So why did I choose ");
      a0 = claim_element(p2_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t9 = claim_text(a0_nodes, "Godot");
      a0_nodes.forEach(detach);
      t10 = claim_text(p2_nodes, "?");
      p2_nodes.forEach(detach);
      t11 = claim_space(nodes);
      figure = claim_element(nodes, "FIGURE", {});
      var figure_nodes = children(figure);
      img = claim_element(figure_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t12 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
      var figcaption_nodes = children(figcaption);
      t13 = claim_text(figcaption_nodes, "Coco's adventures moved to Godot.");
      figcaption_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      t14 = claim_space(nodes);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t15 = claim_text(p3_nodes, "The first big reason for me is that it's free and open source. Some of the other popular engines have had some scary looking license\r\n    revisions over the years but, based on how the project is structured, Godot is immune from that.");
      p3_nodes.forEach(detach);
      t16 = claim_space(nodes);
      p4 = claim_element(nodes, "P", {});
      var p4_nodes = children(p4);
      t17 = claim_text(p4_nodes, "Another reason is that it's light.");
      p4_nodes.forEach(detach);
      t18 = claim_space(nodes);
      p5 = claim_element(nodes, "P", {});
      var p5_nodes = children(p5);
      t19 = claim_text(p5_nodes, "Godot doesn't need much to run and its footprint Is tiny. In less than 100mb you get a full game engine. And there is a surprising\r\n    amount of stuff packed into that size.");
      p5_nodes.forEach(detach);
      t20 = claim_space(nodes);
      p6 = claim_element(nodes, "P", {});
      var p6_nodes = children(p6);
      t21 = claim_text(p6_nodes, "I like the node-based structure.");
      p6_nodes.forEach(detach);
      t22 = claim_space(nodes);
      p7 = claim_element(nodes, "P", {});
      var p7_nodes = children(p7);
      t23 = claim_text(p7_nodes, "Before getting into Godot, I had built my own streamline ECS based engine so the node stuff looked like it might be a messy approach.");
      p7_nodes.forEach(detach);
      t24 = claim_space(nodes);
      p8 = claim_element(nodes, "P", {});
      var p8_nodes = children(p8);
      t25 = claim_text(p8_nodes, "After giving it a go and completing the ");
      a1 = claim_element(p8_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t26 = claim_text(a1_nodes, "Heartbeast Action RPG tutorial series");
      a1_nodes.forEach(detach);
      t27 = claim_text(p8_nodes, ", however, my misconceptions were broken. The way Godot structures scenes and code is exactly how my brain thinks.");
      p8_nodes.forEach(detach);
      t28 = claim_space(nodes);
      p9 = claim_element(nodes, "P", {});
      var p9_nodes = children(p9);
      t29 = claim_text(p9_nodes, "One of the biggest reasons for me though is the community.");
      p9_nodes.forEach(detach);
      t30 = claim_space(nodes);
      p10 = claim_element(nodes, "P", {});
      var p10_nodes = children(p10);
      t31 = claim_text(p10_nodes, "Everybody is passionate about Godot and there is always someone willing to help you out. There are countless high quality tutorials that\r\n    teach everything you need to get started.");
      p10_nodes.forEach(detach);
      t32 = claim_space(nodes);
      p11 = claim_element(nodes, "P", {});
      var p11_nodes = children(p11);
      t33 = claim_text(p11_nodes, "I've used a long list of game-making software over the years but Godot is the first one that feels like home.");
      p11_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://godotengine.org/");
      if (!src_url_equal(img.src, img_src_value = TAVERN_URL))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Screenshot of pixel tavern");
      attr(img, "width", "1920");
      attr(img, "height", "1080");
      attr(a1, "href", "https://www.youtube.com/playlist?list=PL9FzW-m48fn2SlrW0KoLT4n5egNdX-W9a");
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
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t8);
      append_hydration(p2, a0);
      append_hydration(a0, t9);
      append_hydration(p2, t10);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, figure, anchor);
      append_hydration(figure, img);
      append_hydration(figure, t12);
      append_hydration(figure, figcaption);
      append_hydration(figcaption, t13);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t15);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, p4, anchor);
      append_hydration(p4, t17);
      insert_hydration(target, t18, anchor);
      insert_hydration(target, p5, anchor);
      append_hydration(p5, t19);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, p6, anchor);
      append_hydration(p6, t21);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, p7, anchor);
      append_hydration(p7, t23);
      insert_hydration(target, t24, anchor);
      insert_hydration(target, p8, anchor);
      append_hydration(p8, t25);
      append_hydration(p8, a1);
      append_hydration(a1, t26);
      append_hydration(p8, t27);
      insert_hydration(target, t28, anchor);
      insert_hydration(target, p9, anchor);
      append_hydration(p9, t29);
      insert_hydration(target, t30, anchor);
      insert_hydration(target, p10, anchor);
      append_hydration(p10, t31);
      insert_hydration(target, t32, anchor);
      insert_hydration(target, p11, anchor);
      append_hydration(p11, t33);
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
        detach(t7);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(figure);
      if (detaching)
        detach(t14);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t16);
      if (detaching)
        detach(p4);
      if (detaching)
        detach(t18);
      if (detaching)
        detach(p5);
      if (detaching)
        detach(t20);
      if (detaching)
        detach(p6);
      if (detaching)
        detach(t22);
      if (detaching)
        detach(p7);
      if (detaching)
        detach(t24);
      if (detaching)
        detach(p8);
      if (detaching)
        detach(t28);
      if (detaching)
        detach(p9);
      if (detaching)
        detach(t30);
      if (detaching)
        detach(p10);
      if (detaching)
        detach(t32);
      if (detaching)
        detach(p11);
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
      path: "/godot",
      title: "Why I'm choosing Godot",
      description: "I've used a bunch of game-making tools over the years but Godot is the first one that just feels right to me"
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
