import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, f as transition_in, t as transition_out, A as destroy_component, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, J as src_url_equal, n as attr, H as append_hydration, C as noop } from "../../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-523c7bc4.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-ab5fd542.js";
const EVEREST_URL = "" + new URL("../../../assets/everest-ea76d325.svg", import.meta.url).href;
function create_default_slot(ctx) {
  let header;
  let h1;
  let t0;
  let t1;
  let aside;
  let t2;
  let t3;
  let figure0;
  let blockquote;
  let t4;
  let t5;
  let figcaption0;
  let t6;
  let t7;
  let figure1;
  let img;
  let img_src_value;
  let t8;
  let figcaption1;
  let t9;
  let t10;
  let p0;
  let t11;
  let t12;
  let p1;
  let t13;
  let t14;
  let p2;
  let t15;
  let t16;
  let p3;
  let t17;
  let t18;
  let p4;
  let t19;
  let t20;
  let p5;
  let t21;
  let t22;
  let p6;
  let t23;
  let t24;
  let p7;
  let t25;
  let t26;
  let p8;
  let t27;
  let t28;
  let p9;
  let t29;
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("Just start now");
      t1 = space();
      aside = element("aside");
      t2 = text("March 2018");
      t3 = space();
      figure0 = element("figure");
      blockquote = element("blockquote");
      t4 = text('"I hate writing. I love having written."');
      t5 = space();
      figcaption0 = element("figcaption");
      t6 = text("— Doris Parker");
      t7 = space();
      figure1 = element("figure");
      img = element("img");
      t8 = space();
      figcaption1 = element("figcaption");
      t9 = text("Illustration by Nathan Hoad");
      t10 = space();
      p0 = element("p");
      t11 = text("There is a long road between a dream and reality. The path is not well worn and sometimes hard to see.");
      t12 = space();
      p1 = element("p");
      t13 = text(`You've probably had a moment where you've seen a demonstration of a seemingly amazing skill or heard about an achievement by someone and
    thought "I want to know how to do that."`);
      t14 = space();
      p2 = element("p");
      t15 = text(`These things can take some time to know so I figure a better thought might be "I want to learn how to do that.'`);
      t16 = space();
      p3 = element("p");
      t17 = text("The difference is huge. Knowing is the loot at the end of a quest and learning is the quest itself.");
      t18 = space();
      p4 = element("p");
      t19 = text("It takes discipline to get to the end and you can never really be sure if it will be the same end when you get there. Looking at the\n    scale of the undertaking can be daunting but don't be put off by it.");
      t20 = space();
      p5 = element("p");
      t21 = text("Remember that learning is not all or nothing - along the way you'll be collecting valuable experience.");
      t22 = space();
      p6 = element("p");
      t23 = text("The main thing is that you just start. You'll gain momentum and it's a lot easier to keep something in motion than it is to stop it.");
      t24 = space();
      p7 = element("p");
      t25 = text("Don't know where to start? Pick something simple and do that first. Want to learn to paint? Just start painting one simple thing each\n    day. Want to build robots? Buy an Arduino and start tinkering.");
      t26 = space();
      p8 = element("p");
      t27 = text(`As Karen Lamb says, "A year from now you'll wish you started today."`);
      t28 = space();
      p9 = element("p");
      t29 = text("So, Just start now.");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Just start now");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside = claim_element(header_nodes, "ASIDE", {});
      var aside_nodes = children(aside);
      t2 = claim_text(aside_nodes, "March 2018");
      aside_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      figure0 = claim_element(nodes, "FIGURE", {});
      var figure0_nodes = children(figure0);
      blockquote = claim_element(figure0_nodes, "BLOCKQUOTE", {});
      var blockquote_nodes = children(blockquote);
      t4 = claim_text(blockquote_nodes, '"I hate writing. I love having written."');
      blockquote_nodes.forEach(detach);
      t5 = claim_space(figure0_nodes);
      figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
      var figcaption0_nodes = children(figcaption0);
      t6 = claim_text(figcaption0_nodes, "— Doris Parker");
      figcaption0_nodes.forEach(detach);
      figure0_nodes.forEach(detach);
      t7 = claim_space(nodes);
      figure1 = claim_element(nodes, "FIGURE", {});
      var figure1_nodes = children(figure1);
      img = claim_element(figure1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true
      });
      t8 = claim_space(figure1_nodes);
      figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
      var figcaption1_nodes = children(figcaption1);
      t9 = claim_text(figcaption1_nodes, "Illustration by Nathan Hoad");
      figcaption1_nodes.forEach(detach);
      figure1_nodes.forEach(detach);
      t10 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t11 = claim_text(p0_nodes, "There is a long road between a dream and reality. The path is not well worn and sometimes hard to see.");
      p0_nodes.forEach(detach);
      t12 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t13 = claim_text(p1_nodes, `You've probably had a moment where you've seen a demonstration of a seemingly amazing skill or heard about an achievement by someone and
    thought "I want to know how to do that."`);
      p1_nodes.forEach(detach);
      t14 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t15 = claim_text(p2_nodes, `These things can take some time to know so I figure a better thought might be "I want to learn how to do that.'`);
      p2_nodes.forEach(detach);
      t16 = claim_space(nodes);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t17 = claim_text(p3_nodes, "The difference is huge. Knowing is the loot at the end of a quest and learning is the quest itself.");
      p3_nodes.forEach(detach);
      t18 = claim_space(nodes);
      p4 = claim_element(nodes, "P", {});
      var p4_nodes = children(p4);
      t19 = claim_text(p4_nodes, "It takes discipline to get to the end and you can never really be sure if it will be the same end when you get there. Looking at the\n    scale of the undertaking can be daunting but don't be put off by it.");
      p4_nodes.forEach(detach);
      t20 = claim_space(nodes);
      p5 = claim_element(nodes, "P", {});
      var p5_nodes = children(p5);
      t21 = claim_text(p5_nodes, "Remember that learning is not all or nothing - along the way you'll be collecting valuable experience.");
      p5_nodes.forEach(detach);
      t22 = claim_space(nodes);
      p6 = claim_element(nodes, "P", {});
      var p6_nodes = children(p6);
      t23 = claim_text(p6_nodes, "The main thing is that you just start. You'll gain momentum and it's a lot easier to keep something in motion than it is to stop it.");
      p6_nodes.forEach(detach);
      t24 = claim_space(nodes);
      p7 = claim_element(nodes, "P", {});
      var p7_nodes = children(p7);
      t25 = claim_text(p7_nodes, "Don't know where to start? Pick something simple and do that first. Want to learn to paint? Just start painting one simple thing each\n    day. Want to build robots? Buy an Arduino and start tinkering.");
      p7_nodes.forEach(detach);
      t26 = claim_space(nodes);
      p8 = claim_element(nodes, "P", {});
      var p8_nodes = children(p8);
      t27 = claim_text(p8_nodes, `As Karen Lamb says, "A year from now you'll wish you started today."`);
      p8_nodes.forEach(detach);
      t28 = claim_space(nodes);
      p9 = claim_element(nodes, "P", {});
      var p9_nodes = children(p9);
      t29 = claim_text(p9_nodes, "So, Just start now.");
      p9_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(img.src, img_src_value = EVEREST_URL))
        attr(img, "src", img_src_value);
      attr(img, "alt", "Illustration of Mount Everest");
      attr(img, "width", "1920");
      attr(img, "height", "1080");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, h1);
      append_hydration(h1, t0);
      append_hydration(header, t1);
      append_hydration(header, aside);
      append_hydration(aside, t2);
      insert_hydration(target, t3, anchor);
      insert_hydration(target, figure0, anchor);
      append_hydration(figure0, blockquote);
      append_hydration(blockquote, t4);
      append_hydration(figure0, t5);
      append_hydration(figure0, figcaption0);
      append_hydration(figcaption0, t6);
      insert_hydration(target, t7, anchor);
      insert_hydration(target, figure1, anchor);
      append_hydration(figure1, img);
      append_hydration(figure1, t8);
      append_hydration(figure1, figcaption1);
      append_hydration(figcaption1, t9);
      insert_hydration(target, t10, anchor);
      insert_hydration(target, p0, anchor);
      append_hydration(p0, t11);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t13);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t15);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t17);
      insert_hydration(target, t18, anchor);
      insert_hydration(target, p4, anchor);
      append_hydration(p4, t19);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, p5, anchor);
      append_hydration(p5, t21);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, p6, anchor);
      append_hydration(p6, t23);
      insert_hydration(target, t24, anchor);
      insert_hydration(target, p7, anchor);
      append_hydration(p7, t25);
      insert_hydration(target, t26, anchor);
      insert_hydration(target, p8, anchor);
      append_hydration(p8, t27);
      insert_hydration(target, t28, anchor);
      insert_hydration(target, p9, anchor);
      append_hydration(p9, t29);
    },
    p: noop,
    d(detaching) {
      if (detaching)
        detach(header);
      if (detaching)
        detach(t3);
      if (detaching)
        detach(figure0);
      if (detaching)
        detach(t7);
      if (detaching)
        detach(figure1);
      if (detaching)
        detach(t10);
      if (detaching)
        detach(p0);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t14);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t16);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t18);
      if (detaching)
        detach(p4);
      if (detaching)
        detach(t20);
      if (detaching)
        detach(p5);
      if (detaching)
        detach(t22);
      if (detaching)
        detach(p6);
      if (detaching)
        detach(t24);
      if (detaching)
        detach(p7);
      if (detaching)
        detach(t26);
      if (detaching)
        detach(p8);
      if (detaching)
        detach(t28);
      if (detaching)
        detach(p9);
    }
  };
}
function create_fragment(ctx) {
  let meta;
  let t0;
  let header;
  let t1;
  let article;
  let t2;
  let footer;
  let current;
  meta = new Meta({
    props: {
      path: "/jsn",
      title: "Just start now",
      description: "A year from now you'll wish you started today",
      imageUrl: EVEREST_URL
    }
  });
  header = new Header_simple({});
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
      create_component(header.$$.fragment);
      t1 = space();
      create_component(article.$$.fragment);
      t2 = space();
      create_component(footer.$$.fragment);
    },
    l(nodes) {
      claim_component(meta.$$.fragment, nodes);
      t0 = claim_space(nodes);
      claim_component(header.$$.fragment, nodes);
      t1 = claim_space(nodes);
      claim_component(article.$$.fragment, nodes);
      t2 = claim_space(nodes);
      claim_component(footer.$$.fragment, nodes);
    },
    m(target, anchor) {
      mount_component(meta, target, anchor);
      insert_hydration(target, t0, anchor);
      mount_component(header, target, anchor);
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
      transition_in(header.$$.fragment, local);
      transition_in(article.$$.fragment, local);
      transition_in(footer.$$.fragment, local);
      current = true;
    },
    o(local) {
      transition_out(meta.$$.fragment, local);
      transition_out(header.$$.fragment, local);
      transition_out(article.$$.fragment, local);
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
