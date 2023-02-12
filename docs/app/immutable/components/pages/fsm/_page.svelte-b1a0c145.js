import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, f as transition_in, t as transition_out, A as destroy_component, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, J as src_url_equal, n as attr, H as append_hydration, C as noop } from "../../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-03ca8822.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-9cffc996.js";
const SHARING_STATES_URL = "" + new URL("../../../assets/sharing-states-5f1e08f4.mp4", import.meta.url).href;
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
  let t9;
  let figure;
  let video;
  let video_src_value;
  let t10;
  let figcaption;
  let t11;
  let t12;
  let p3;
  let t13;
  let t14;
  let p4;
  let t15;
  let t16;
  let p5;
  let t17;
  let t18;
  let p6;
  let t19;
  let t20;
  let p7;
  let t21;
  let t22;
  let ol;
  let li0;
  let p8;
  let em0;
  let t23;
  let t24;
  let p9;
  let t25;
  let t26;
  let li1;
  let p10;
  let em1;
  let t27;
  let t28;
  let p11;
  let t29;
  let t30;
  let p12;
  let t31;
  let t32;
  let p13;
  let t33;
  let t34;
  let p14;
  let t35;
  let a0;
  let t36;
  let t37;
  let a1;
  let t38;
  let t39;
  let a2;
  let t40;
  let t41;
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("Using finite state machines for behaviour");
      t1 = space();
      aside = element("aside");
      t2 = text("May 2021");
      t3 = space();
      p0 = element("p");
      t4 = text("I use finite state machines for the behaviour of townsfolk and enemies in my game.");
      t5 = space();
      p1 = element("p");
      t6 = text("What does that mean?");
      t7 = space();
      p2 = element("p");
      t8 = text("At any given time an NPC can be in one of many “behaviour states” depending on what's happening to them.");
      t9 = space();
      figure = element("figure");
      video = element("video");
      t10 = space();
      figcaption = element("figcaption");
      t11 = text("Designing states with dependency injection means they can be shared amongst different kinds of NPCs.");
      t12 = space();
      p3 = element("p");
      t13 = text("For example, an enemy might contain states for “patrolling” and “chasing”.");
      t14 = space();
      p4 = element("p");
      t15 = text("Breaking up behaviour makes it simpler to think about. When “patrolling”, the enemy just follows a path back and forward until they see\n    the player. Then they change state to “chasing” where they move towards the player. If they lose sight of the player they go back to\n    “patrolling” and return to their path.");
      t16 = space();
      p5 = element("p");
      t17 = text("Breaking up behaviour has another benefit - you can share them with other types of NPC.");
      t18 = space();
      p6 = element("p");
      t19 = text("A friendly person in a town might also make use of the patrolling state.");
      t20 = space();
      p7 = element("p");
      t21 = text("There's no real limit to how many states you can have or how much you share them but there are two rules that I've found have helped\n    keep things manageable:");
      t22 = space();
      ol = element("ol");
      li0 = element("li");
      p8 = element("p");
      em0 = element("em");
      t23 = text("States define their dependencies");
      t24 = space();
      p9 = element("p");
      t25 = text("Anything external information that the state needs should be explicitly defined. In the case of Godot this means declaring export\n        variables that can be populated by the owner node.");
      t26 = space();
      li1 = element("li");
      p10 = element("p");
      em1 = element("em");
      t27 = text("States don't transition to other states themselves");
      t28 = space();
      p11 = element("p");
      t29 = text("Each state should have no idea that other states exist. That's the best way to keep them simple and shareable.");
      t30 = space();
      p12 = element("p");
      t31 = text("Instead of transitioning itself, a state should simply provide a list of events that can happen while in that state.");
      t32 = space();
      p13 = element("p");
      t33 = text("In the example from earlier, the patrolling state might signal that it has seen the player. From there the NPC that owns the state\n        machine can decide whether it needs to transition or not.");
      t34 = space();
      p14 = element("p");
      t35 = text("If you're interested in using a finite state machine for your game then have a look at my videos on ");
      a0 = element("a");
      t36 = text("enemy behaviour");
      t37 = text("\n    and\n    ");
      a1 = element("a");
      t38 = text("smarter NPCs");
      t39 = text("\n    and have a look at\n    ");
      a2 = element("a");
      t40 = text("GDQuest's guide to finite state machines");
      t41 = text(".");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "Using finite state machines for behaviour");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside = claim_element(header_nodes, "ASIDE", {});
      var aside_nodes = children(aside);
      t2 = claim_text(aside_nodes, "May 2021");
      aside_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "I use finite state machines for the behaviour of townsfolk and enemies in my game.");
      p0_nodes.forEach(detach);
      t5 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t6 = claim_text(p1_nodes, "What does that mean?");
      p1_nodes.forEach(detach);
      t7 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t8 = claim_text(p2_nodes, "At any given time an NPC can be in one of many “behaviour states” depending on what's happening to them.");
      p2_nodes.forEach(detach);
      t9 = claim_space(nodes);
      figure = claim_element(nodes, "FIGURE", {});
      var figure_nodes = children(figure);
      video = claim_element(figure_nodes, "VIDEO", { src: true, width: true, height: true });
      children(video).forEach(detach);
      t10 = claim_space(figure_nodes);
      figcaption = claim_element(figure_nodes, "FIGCAPTION", {});
      var figcaption_nodes = children(figcaption);
      t11 = claim_text(figcaption_nodes, "Designing states with dependency injection means they can be shared amongst different kinds of NPCs.");
      figcaption_nodes.forEach(detach);
      figure_nodes.forEach(detach);
      t12 = claim_space(nodes);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t13 = claim_text(p3_nodes, "For example, an enemy might contain states for “patrolling” and “chasing”.");
      p3_nodes.forEach(detach);
      t14 = claim_space(nodes);
      p4 = claim_element(nodes, "P", {});
      var p4_nodes = children(p4);
      t15 = claim_text(p4_nodes, "Breaking up behaviour makes it simpler to think about. When “patrolling”, the enemy just follows a path back and forward until they see\n    the player. Then they change state to “chasing” where they move towards the player. If they lose sight of the player they go back to\n    “patrolling” and return to their path.");
      p4_nodes.forEach(detach);
      t16 = claim_space(nodes);
      p5 = claim_element(nodes, "P", {});
      var p5_nodes = children(p5);
      t17 = claim_text(p5_nodes, "Breaking up behaviour has another benefit - you can share them with other types of NPC.");
      p5_nodes.forEach(detach);
      t18 = claim_space(nodes);
      p6 = claim_element(nodes, "P", {});
      var p6_nodes = children(p6);
      t19 = claim_text(p6_nodes, "A friendly person in a town might also make use of the patrolling state.");
      p6_nodes.forEach(detach);
      t20 = claim_space(nodes);
      p7 = claim_element(nodes, "P", {});
      var p7_nodes = children(p7);
      t21 = claim_text(p7_nodes, "There's no real limit to how many states you can have or how much you share them but there are two rules that I've found have helped\n    keep things manageable:");
      p7_nodes.forEach(detach);
      t22 = claim_space(nodes);
      ol = claim_element(nodes, "OL", {});
      var ol_nodes = children(ol);
      li0 = claim_element(ol_nodes, "LI", {});
      var li0_nodes = children(li0);
      p8 = claim_element(li0_nodes, "P", {});
      var p8_nodes = children(p8);
      em0 = claim_element(p8_nodes, "EM", {});
      var em0_nodes = children(em0);
      t23 = claim_text(em0_nodes, "States define their dependencies");
      em0_nodes.forEach(detach);
      p8_nodes.forEach(detach);
      t24 = claim_space(li0_nodes);
      p9 = claim_element(li0_nodes, "P", {});
      var p9_nodes = children(p9);
      t25 = claim_text(p9_nodes, "Anything external information that the state needs should be explicitly defined. In the case of Godot this means declaring export\n        variables that can be populated by the owner node.");
      p9_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t26 = claim_space(ol_nodes);
      li1 = claim_element(ol_nodes, "LI", {});
      var li1_nodes = children(li1);
      p10 = claim_element(li1_nodes, "P", {});
      var p10_nodes = children(p10);
      em1 = claim_element(p10_nodes, "EM", {});
      var em1_nodes = children(em1);
      t27 = claim_text(em1_nodes, "States don't transition to other states themselves");
      em1_nodes.forEach(detach);
      p10_nodes.forEach(detach);
      t28 = claim_space(li1_nodes);
      p11 = claim_element(li1_nodes, "P", {});
      var p11_nodes = children(p11);
      t29 = claim_text(p11_nodes, "Each state should have no idea that other states exist. That's the best way to keep them simple and shareable.");
      p11_nodes.forEach(detach);
      t30 = claim_space(li1_nodes);
      p12 = claim_element(li1_nodes, "P", {});
      var p12_nodes = children(p12);
      t31 = claim_text(p12_nodes, "Instead of transitioning itself, a state should simply provide a list of events that can happen while in that state.");
      p12_nodes.forEach(detach);
      t32 = claim_space(li1_nodes);
      p13 = claim_element(li1_nodes, "P", {});
      var p13_nodes = children(p13);
      t33 = claim_text(p13_nodes, "In the example from earlier, the patrolling state might signal that it has seen the player. From there the NPC that owns the state\n        machine can decide whether it needs to transition or not.");
      p13_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      ol_nodes.forEach(detach);
      t34 = claim_space(nodes);
      p14 = claim_element(nodes, "P", {});
      var p14_nodes = children(p14);
      t35 = claim_text(p14_nodes, "If you're interested in using a finite state machine for your game then have a look at my videos on ");
      a0 = claim_element(p14_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t36 = claim_text(a0_nodes, "enemy behaviour");
      a0_nodes.forEach(detach);
      t37 = claim_text(p14_nodes, "\n    and\n    ");
      a1 = claim_element(p14_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t38 = claim_text(a1_nodes, "smarter NPCs");
      a1_nodes.forEach(detach);
      t39 = claim_text(p14_nodes, "\n    and have a look at\n    ");
      a2 = claim_element(p14_nodes, "A", { href: true });
      var a2_nodes = children(a2);
      t40 = claim_text(a2_nodes, "GDQuest's guide to finite state machines");
      a2_nodes.forEach(detach);
      t41 = claim_text(p14_nodes, ".");
      p14_nodes.forEach(detach);
      this.h();
    },
    h() {
      if (!src_url_equal(video.src, video_src_value = SHARING_STATES_URL))
        attr(video, "src", video_src_value);
      video.autoplay = true;
      video.playsInline = true;
      video.muted = true;
      video.loop = true;
      attr(video, "width", "1920");
      attr(video, "height", "1080");
      attr(a0, "href", "https://youtu.be/tZgEXWleWxg");
      attr(a1, "href", "https://youtu.be/CZV9aNiZdRs");
      attr(a2, "href", "https://www.gdquest.com/tutorial/godot/design-patterns/finite-state-machine/");
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
      insert_hydration(target, t9, anchor);
      insert_hydration(target, figure, anchor);
      append_hydration(figure, video);
      append_hydration(figure, t10);
      append_hydration(figure, figcaption);
      append_hydration(figcaption, t11);
      insert_hydration(target, t12, anchor);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t13);
      insert_hydration(target, t14, anchor);
      insert_hydration(target, p4, anchor);
      append_hydration(p4, t15);
      insert_hydration(target, t16, anchor);
      insert_hydration(target, p5, anchor);
      append_hydration(p5, t17);
      insert_hydration(target, t18, anchor);
      insert_hydration(target, p6, anchor);
      append_hydration(p6, t19);
      insert_hydration(target, t20, anchor);
      insert_hydration(target, p7, anchor);
      append_hydration(p7, t21);
      insert_hydration(target, t22, anchor);
      insert_hydration(target, ol, anchor);
      append_hydration(ol, li0);
      append_hydration(li0, p8);
      append_hydration(p8, em0);
      append_hydration(em0, t23);
      append_hydration(li0, t24);
      append_hydration(li0, p9);
      append_hydration(p9, t25);
      append_hydration(ol, t26);
      append_hydration(ol, li1);
      append_hydration(li1, p10);
      append_hydration(p10, em1);
      append_hydration(em1, t27);
      append_hydration(li1, t28);
      append_hydration(li1, p11);
      append_hydration(p11, t29);
      append_hydration(li1, t30);
      append_hydration(li1, p12);
      append_hydration(p12, t31);
      append_hydration(li1, t32);
      append_hydration(li1, p13);
      append_hydration(p13, t33);
      insert_hydration(target, t34, anchor);
      insert_hydration(target, p14, anchor);
      append_hydration(p14, t35);
      append_hydration(p14, a0);
      append_hydration(a0, t36);
      append_hydration(p14, t37);
      append_hydration(p14, a1);
      append_hydration(a1, t38);
      append_hydration(p14, t39);
      append_hydration(p14, a2);
      append_hydration(a2, t40);
      append_hydration(p14, t41);
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
        detach(t9);
      if (detaching)
        detach(figure);
      if (detaching)
        detach(t12);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t14);
      if (detaching)
        detach(p4);
      if (detaching)
        detach(t16);
      if (detaching)
        detach(p5);
      if (detaching)
        detach(t18);
      if (detaching)
        detach(p6);
      if (detaching)
        detach(t20);
      if (detaching)
        detach(p7);
      if (detaching)
        detach(t22);
      if (detaching)
        detach(ol);
      if (detaching)
        detach(t34);
      if (detaching)
        detach(p14);
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
      path: "/fsm",
      title: "Using finite state machines for behaviour",
      description: "Finite state machines help break apart the code that powers character behaviour and make it easier to understand and reuse"
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
