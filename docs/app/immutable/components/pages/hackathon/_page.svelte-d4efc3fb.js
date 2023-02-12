import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, f as transition_in, t as transition_out, A as destroy_component, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, n as attr, J as src_url_equal, H as append_hydration, C as noop } from "../../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-523c7bc4.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-75fa4ce9.js";
const HEADER_URL = "" + new URL("../../../assets/header-f3a9edaf.jpg", import.meta.url).href;
const TOWN_URL = "" + new URL("../../../assets/town-f129a833.jpg", import.meta.url).href;
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
  let a0;
  let t5;
  let t6;
  let a1;
  let t7;
  let t8;
  let a2;
  let t9;
  let t10;
  let t11;
  let figure0;
  let a3;
  let img0;
  let img0_src_value;
  let t12;
  let figcaption0;
  let t13;
  let t14;
  let p1;
  let t15;
  let t16;
  let p2;
  let t17;
  let a4;
  let t18;
  let t19;
  let t20;
  let aside1;
  let figure1;
  let img1;
  let img1_src_value;
  let t21;
  let figcaption1;
  let t22;
  let t23;
  let p3;
  let t24;
  let t25;
  let p4;
  let t26;
  let t27;
  let p5;
  let t28;
  let t29;
  let p6;
  let t30;
  let t31;
  let p7;
  let a5;
  let t32;
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("Building a hand-painted puzzle game in 48 hours");
      t1 = space();
      aside0 = element("aside");
      t2 = text("July 2017");
      t3 = space();
      p0 = element("p");
      t4 = text("Last week I, along with ");
      a0 = element("a");
      t5 = text("Lilly");
      t6 = text(",\n    ");
      a1 = element("a");
      t7 = text("Ben");
      t8 = text(", and ");
      a2 = element("a");
      t9 = text("Taz");
      t10 = text(", competed in the first ever React Riot, a 48\n    hour coding competition. We were lucky enough to win the top prize.");
      t11 = space();
      figure0 = element("figure");
      a3 = element("a");
      img0 = element("img");
      t12 = space();
      figcaption0 = element("figcaption");
      t13 = text("Our entry, The Definitely Ending Story, took out the top prize.");
      t14 = space();
      p1 = element("p");
      t15 = text("In the week leading up to the weekend we decided to make some kind of adventure game, along the lines of Monkey Island and Day of the\n    Tentacle.");
      t16 = space();
      p2 = element("p");
      t17 = text("Of course, the requirement of using ");
      a4 = element("a");
      t18 = text("React");
      t19 = text(" meant that we were a little limited as to what we could actually\n    do in terms of complex animation. Realising this, we concluded that the best approach might be to build something that resembled a children's\n    story book (limiting any need for animation) but with puzzles and a simple storyline.");
      t20 = space();
      aside1 = element("aside");
      figure1 = element("figure");
      img1 = element("img");
      t21 = space();
      figcaption1 = element("figcaption");
      t22 = text("Everything was hand painted.");
      t23 = space();
      p3 = element("p");
      t24 = text("I've always been a fan of Ron Gilbert's blog and in particular his post about rules for adventure games. His idea of the puzzle\n    dependency chart was invaluable in designing the game - Last Friday night I found a scrap piece of paper and sketched up a rough\n    overview of how the puzzles might work.");
      t25 = space();
      p4 = element("p");
      t26 = text("We then brainstormed about different lines of dialogue and what kinds of characters would be in the world (knowing that we would also\n    have to paint all of the backgrounds and characters within the 48 hours we tried to keep them to the minimum required to tell the\n    story).");
      t27 = space();
      p5 = element("p");
      t28 = text("The rest of the weekend was a blur of building the engine, building out the React components to handle each location, writing all of the\n    lines of dialogue and fitting them into the talk trees, painting all of the backgrounds and characters, and occasionally finding time to\n    eat and sleep.");
      t29 = space();
      p6 = element("p");
      t30 = text("There are still a few bugs that we didn't get time to fix (we were going up until 10 minutes before the finish time) as well as a few\n    concepts that still have rough edges (your inventory being full of drinks, for one) but overall we are proud of what we built.");
      t31 = space();
      p7 = element("p");
      a5 = element("a");
      t32 = text("See if you can make it to Granny's House.");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Building a hand-painted puzzle game in 48 hours");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside0 = claim_element(header_nodes, "ASIDE", {});
      var aside0_nodes = children(aside0);
      t2 = claim_text(aside0_nodes, "July 2017");
      aside0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "Last week I, along with ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "Lilly");
      a0_nodes.forEach(detach);
      t6 = claim_text(p0_nodes, ",\n    ");
      a1 = claim_element(p0_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t7 = claim_text(a1_nodes, "Ben");
      a1_nodes.forEach(detach);
      t8 = claim_text(p0_nodes, ", and ");
      a2 = claim_element(p0_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t9 = claim_text(a2_nodes, "Taz");
      a2_nodes.forEach(detach);
      t10 = claim_text(p0_nodes, ", competed in the first ever React Riot, a 48\n    hour coding competition. We were lucky enough to win the top prize.");
      p0_nodes.forEach(detach);
      t11 = claim_space(nodes);
      figure0 = claim_element(nodes, "FIGURE", {});
      var figure0_nodes = children(figure0);
      a3 = claim_element(figure0_nodes, "A", { href: true });
      var a3_nodes = children(a3);
      img0 = claim_element(a3_nodes, "IMG", { src: true, alt: true });
      a3_nodes.forEach(detach);
      t12 = claim_space(figure0_nodes);
      figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
      var figcaption0_nodes = children(figcaption0);
      t13 = claim_text(figcaption0_nodes, "Our entry, The Definitely Ending Story, took out the top prize.");
      figcaption0_nodes.forEach(detach);
      figure0_nodes.forEach(detach);
      t14 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t15 = claim_text(p1_nodes, "In the week leading up to the weekend we decided to make some kind of adventure game, along the lines of Monkey Island and Day of the\n    Tentacle.");
      p1_nodes.forEach(detach);
      t16 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t17 = claim_text(p2_nodes, "Of course, the requirement of using ");
      a4 = claim_element(p2_nodes, "A", { href: true });
      var a4_nodes = children(a4);
      t18 = claim_text(a4_nodes, "React");
      a4_nodes.forEach(detach);
      t19 = claim_text(p2_nodes, " meant that we were a little limited as to what we could actually\n    do in terms of complex animation. Realising this, we concluded that the best approach might be to build something that resembled a children's\n    story book (limiting any need for animation) but with puzzles and a simple storyline.");
      p2_nodes.forEach(detach);
      t20 = claim_space(nodes);
      aside1 = claim_element(nodes, "ASIDE", { class: true });
      var aside1_nodes = children(aside1);
      figure1 = claim_element(aside1_nodes, "FIGURE", {});
      var figure1_nodes = children(figure1);
      img1 = claim_element(figure1_nodes, "IMG", { src: true, alt: true });
      t21 = claim_space(figure1_nodes);
      figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
      var figcaption1_nodes = children(figcaption1);
      t22 = claim_text(figcaption1_nodes, "Everything was hand painted.");
      figcaption1_nodes.forEach(detach);
      figure1_nodes.forEach(detach);
      aside1_nodes.forEach(detach);
      t23 = claim_space(nodes);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t24 = claim_text(p3_nodes, "I've always been a fan of Ron Gilbert's blog and in particular his post about rules for adventure games. His idea of the puzzle\n    dependency chart was invaluable in designing the game - Last Friday night I found a scrap piece of paper and sketched up a rough\n    overview of how the puzzles might work.");
      p3_nodes.forEach(detach);
      t25 = claim_space(nodes);
      p4 = claim_element(nodes, "P", {});
      var p4_nodes = children(p4);
      t26 = claim_text(p4_nodes, "We then brainstormed about different lines of dialogue and what kinds of characters would be in the world (knowing that we would also\n    have to paint all of the backgrounds and characters within the 48 hours we tried to keep them to the minimum required to tell the\n    story).");
      p4_nodes.forEach(detach);
      t27 = claim_space(nodes);
      p5 = claim_element(nodes, "P", {});
      var p5_nodes = children(p5);
      t28 = claim_text(p5_nodes, "The rest of the weekend was a blur of building the engine, building out the React components to handle each location, writing all of the\n    lines of dialogue and fitting them into the talk trees, painting all of the backgrounds and characters, and occasionally finding time to\n    eat and sleep.");
      p5_nodes.forEach(detach);
      t29 = claim_space(nodes);
      p6 = claim_element(nodes, "P", {});
      var p6_nodes = children(p6);
      t30 = claim_text(p6_nodes, "There are still a few bugs that we didn't get time to fix (we were going up until 10 minutes before the finish time) as well as a few\n    concepts that still have rough edges (your inventory being full of drinks, for one) but overall we are proud of what we built.");
      p6_nodes.forEach(detach);
      t31 = claim_space(nodes);
      p7 = claim_element(nodes, "P", {});
      var p7_nodes = children(p7);
      a5 = claim_element(p7_nodes, "A", { href: true });
      var a5_nodes = children(a5);
      t32 = claim_text(a5_nodes, "See if you can make it to Granny's House.");
      a5_nodes.forEach(detach);
      p7_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://lillypiri.com");
      attr(a1, "href", "https://benhoad.net");
      attr(a2, "href", "https://www.edwilbert.com/");
      if (!src_url_equal(img0.src, img0_src_value = HEADER_URL))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "The Definitely Ending Story");
      attr(a3, "href", "https://nathanhoad.itch.io/the-definitely-ending-story");
      attr(a4, "href", "https://reactjs.org/");
      if (!src_url_equal(img1.src, img1_src_value = TOWN_URL))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "A painting of a town");
      attr(aside1, "class", "right");
      attr(a5, "href", "https://nathanhoad.itch.io/the-definitely-ending-story");
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
      append_hydration(p0, a0);
      append_hydration(a0, t5);
      append_hydration(p0, t6);
      append_hydration(p0, a1);
      append_hydration(a1, t7);
      append_hydration(p0, t8);
      append_hydration(p0, a2);
      append_hydration(a2, t9);
      append_hydration(p0, t10);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, figure0, anchor);
      append_hydration(figure0, a3);
      append_hydration(a3, img0);
      append_hydration(figure0, t12);
      append_hydration(figure0, figcaption0);
      append_hydration(figcaption0, t13);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t15);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t17);
      append_hydration(p2, a4);
      append_hydration(a4, t18);
      append_hydration(p2, t19);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, aside1, anchor);
      append_hydration(aside1, figure1);
      append_hydration(figure1, img1);
      append_hydration(figure1, t21);
      append_hydration(figure1, figcaption1);
      append_hydration(figcaption1, t22);
      insert_hydration(target, t23, anchor);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t24);
      insert_hydration(target, t25, anchor);
      insert_hydration(target, p4, anchor);
      append_hydration(p4, t26);
      insert_hydration(target, t27, anchor);
      insert_hydration(target, p5, anchor);
      append_hydration(p5, t28);
      insert_hydration(target, t29, anchor);
      insert_hydration(target, p6, anchor);
      append_hydration(p6, t30);
      insert_hydration(target, t31, anchor);
      insert_hydration(target, p7, anchor);
      append_hydration(p7, a5);
      append_hydration(a5, t32);
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
        detach(t11);
      if (detaching)
        detach(figure0);
      if (detaching)
        detach(t14);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t16);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t20);
      if (detaching)
        detach(aside1);
      if (detaching)
        detach(t23);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t25);
      if (detaching)
        detach(p4);
      if (detaching)
        detach(t27);
      if (detaching)
        detach(p5);
      if (detaching)
        detach(t29);
      if (detaching)
        detach(p6);
      if (detaching)
        detach(t31);
      if (detaching)
        detach(p7);
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
      path: "/hackaton",
      title: "Building a hand-painted puzzle game in 48 hours",
      description: "We build a winning puzzle game for React Riot",
      imageUrl: HEADER_URL
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
