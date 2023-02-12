import { S as SvelteComponent, i as init, s as safe_not_equal, x as create_component, a as space, y as claim_component, c as claim_space, z as mount_component, b as insert_hydration, f as transition_in, t as transition_out, A as destroy_component, h as detach, k as element, q as text, l as claim_element, m as children, r as claim_text, n as attr, J as src_url_equal, H as append_hydration, C as noop } from "../../../chunks/index-1cf7e9b2.js";
import { M as Meta, F as Footer } from "../../../chunks/footer-523c7bc4.js";
import { H as Header_simple, A as Article } from "../../../chunks/article-75fa4ce9.js";
const LINKS_AWAKENING_URL = "" + new URL("../../../assets/links-awakening-c2c37563.jpg", import.meta.url).href;
const FULL_THROTTLE_URL = "" + new URL("../../../assets/full-throttle-cb8b68dd.jpg", import.meta.url).href;
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
  let t7;
  let p1;
  let t8;
  let a1;
  let t9;
  let t10;
  let t11;
  let p2;
  let t12;
  let t13;
  let p3;
  let t14;
  let t15;
  let p4;
  let t16;
  let t17;
  let ol;
  let li0;
  let p5;
  let em0;
  let t18;
  let t19;
  let p6;
  let t20;
  let t21;
  let p7;
  let t22;
  let t23;
  let p8;
  let t24;
  let t25;
  let aside1;
  let figure0;
  let img0;
  let img0_src_value;
  let t26;
  let figcaption0;
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
  let t34;
  let p12;
  let t35;
  let t36;
  let li1;
  let p13;
  let em1;
  let t37;
  let t38;
  let p14;
  let t39;
  let t40;
  let p15;
  let t41;
  let t42;
  let p16;
  let t43;
  let t44;
  let p17;
  let t45;
  let t46;
  let aside2;
  let figure1;
  let img1;
  let img1_src_value;
  let t47;
  let figcaption1;
  let t48;
  let t49;
  let p18;
  let t50;
  let t51;
  let p19;
  let t52;
  let t53;
  let p20;
  let t54;
  let t55;
  let p21;
  let t56;
  let t57;
  let p22;
  let t58;
  let t59;
  let p23;
  let t60;
  return {
    c() {
      header = element("header");
      h1 = element("h1");
      t0 = text("What makes a good puzzle?");
      t1 = space();
      aside0 = element("aside");
      t2 = text("February 2022");
      t3 = space();
      p0 = element("p");
      t4 = text("I made a ");
      a0 = element("a");
      t5 = text("Godot addon for building puzzle dependency charts");
      t6 = text(".");
      t7 = space();
      p1 = element("p");
      t8 = text("It ");
      a1 = element("a");
      t9 = text("helps with designing adventurer game puzzles");
      t10 = text(" and ensuring there are no\n    dead ends that make progression impossible.");
      t11 = space();
      p2 = element("p");
      t12 = text("Puzzle dependency charts also help highlight the breadth of puzzles and show where a game is too linear or too overwhelming.");
      t13 = space();
      p3 = element("p");
      t14 = text("Having no dead ends and multiple options are things that make a good puzzle game but what about the puzzles themselves?");
      t15 = space();
      p4 = element("p");
      t16 = text("I have two questions I ask myself when I've thought of a potential puzzle:");
      t17 = space();
      ol = element("ol");
      li0 = element("li");
      p5 = element("p");
      em0 = element("em");
      t18 = text("How would a player know to do that?");
      t19 = space();
      p6 = element("p");
      t20 = text("The first question makes sure the player isn't stumbling around in the dark.");
      t21 = space();
      p7 = element("p");
      t22 = text("There should be enough knowledge provided in the game to hypothesise about the solution.");
      t23 = space();
      p8 = element("p");
      t24 = text("Telegraphing can be done in a few ways, from subtle character dialogue (or even obvious character dialogue if it fits the style of\n        the game) through to environmental hints.");
      t25 = space();
      aside1 = element("aside");
      figure0 = element("figure");
      img0 = element("img");
      t26 = space();
      figcaption0 = element("figcaption");
      t27 = text("There are varying degrees of subtlety when it comes to telegraphing puzzles.");
      t28 = space();
      p9 = element("p");
      t29 = text("One example of good environmental hinting can be found in Zelda: Link's Awakening.");
      t30 = space();
      p10 = element("p");
      t31 = text("There is a hidden room in the Key Cavern that can only be accessed by using bombs against a specific wall.");
      t32 = space();
      p11 = element("p");
      t33 = text("Usually walls that are susceptible to bombs have special cracks in them but to help the player discover this particular wall they\n        are given an extra hint - a giant arrow on the ground drawn with tiles.");
      t34 = space();
      p12 = element("p");
      t35 = text("It's not overly subtle but it also doesn't explicitly spell it out either.");
      t36 = space();
      li1 = element("li");
      p13 = element("p");
      em1 = element("em");
      t37 = text("Does the solution make sense once you know the answer?");
      t38 = space();
      p14 = element("p");
      t39 = text("This second question is for after the solution is found.");
      t40 = space();
      p15 = element("p");
      t41 = text("If a player randomly stumbles on the answer but are still confused as to why that worked then the puzzle is probably either too\n        abstract, relies on overly specific knowledge, or is just a bad idea in general.");
      t42 = space();
      p16 = element("p");
      t43 = text("That doesn't mean solutions have to be boring.");
      t44 = space();
      p17 = element("p");
      t45 = text("It just means that the game needs to be internally consistent and the puzzles need to abide by the games own rules.");
      t46 = space();
      aside2 = element("aside");
      figure1 = element("figure");
      img1 = element("img");
      t47 = space();
      figcaption1 = element("figcaption");
      t48 = text("Sometimes the solution is just rearranging the pieces.");
      t49 = space();
      p18 = element("p");
      t50 = text("There's a puzzle in Full Throttle that involves a chain that when pulled opens a gate. As soon as you let go, however, the gate\n        closes again.");
      t51 = space();
      p19 = element("p");
      t52 = text("You have a padlock that you might initially think should be used on the chain to keep the gate open but the solution to the puzzle\n        is to padlock the gate shut so that the chain stays in place.");
      t53 = space();
      p20 = element("p");
      t54 = text("You can then climb the chain to get over the wall.");
      t55 = space();
      p21 = element("p");
      t56 = text("The solution is surprising but it does make sense.");
      t57 = space();
      p22 = element("p");
      t58 = text("Unfortunately, as the puzzle designer, you can never truly know if you've hit the mark until you put your puzzles in front of real\n    players.");
      t59 = space();
      p23 = element("p");
      t60 = text("You'll know you've found the perfect balance when the player gets a sense of being clever when they figure it out.");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", {});
      var header_nodes = children(header);
      h1 = claim_element(header_nodes, "H1", {});
      var h1_nodes = children(h1);
      t0 = claim_text(h1_nodes, "What makes a good puzzle?");
      h1_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside0 = claim_element(header_nodes, "ASIDE", {});
      var aside0_nodes = children(aside0);
      t2 = claim_text(aside0_nodes, "February 2022");
      aside0_nodes.forEach(detach);
      header_nodes.forEach(detach);
      t3 = claim_space(nodes);
      p0 = claim_element(nodes, "P", {});
      var p0_nodes = children(p0);
      t4 = claim_text(p0_nodes, "I made a ");
      a0 = claim_element(p0_nodes, "A", { href: true });
      var a0_nodes = children(a0);
      t5 = claim_text(a0_nodes, "Godot addon for building puzzle dependency charts");
      a0_nodes.forEach(detach);
      t6 = claim_text(p0_nodes, ".");
      p0_nodes.forEach(detach);
      t7 = claim_space(nodes);
      p1 = claim_element(nodes, "P", {});
      var p1_nodes = children(p1);
      t8 = claim_text(p1_nodes, "It ");
      a1 = claim_element(p1_nodes, "A", { href: true });
      var a1_nodes = children(a1);
      t9 = claim_text(a1_nodes, "helps with designing adventurer game puzzles");
      a1_nodes.forEach(detach);
      t10 = claim_text(p1_nodes, " and ensuring there are no\n    dead ends that make progression impossible.");
      p1_nodes.forEach(detach);
      t11 = claim_space(nodes);
      p2 = claim_element(nodes, "P", {});
      var p2_nodes = children(p2);
      t12 = claim_text(p2_nodes, "Puzzle dependency charts also help highlight the breadth of puzzles and show where a game is too linear or too overwhelming.");
      p2_nodes.forEach(detach);
      t13 = claim_space(nodes);
      p3 = claim_element(nodes, "P", {});
      var p3_nodes = children(p3);
      t14 = claim_text(p3_nodes, "Having no dead ends and multiple options are things that make a good puzzle game but what about the puzzles themselves?");
      p3_nodes.forEach(detach);
      t15 = claim_space(nodes);
      p4 = claim_element(nodes, "P", {});
      var p4_nodes = children(p4);
      t16 = claim_text(p4_nodes, "I have two questions I ask myself when I've thought of a potential puzzle:");
      p4_nodes.forEach(detach);
      t17 = claim_space(nodes);
      ol = claim_element(nodes, "OL", {});
      var ol_nodes = children(ol);
      li0 = claim_element(ol_nodes, "LI", {});
      var li0_nodes = children(li0);
      p5 = claim_element(li0_nodes, "P", {});
      var p5_nodes = children(p5);
      em0 = claim_element(p5_nodes, "EM", {});
      var em0_nodes = children(em0);
      t18 = claim_text(em0_nodes, "How would a player know to do that?");
      em0_nodes.forEach(detach);
      p5_nodes.forEach(detach);
      t19 = claim_space(li0_nodes);
      p6 = claim_element(li0_nodes, "P", {});
      var p6_nodes = children(p6);
      t20 = claim_text(p6_nodes, "The first question makes sure the player isn't stumbling around in the dark.");
      p6_nodes.forEach(detach);
      t21 = claim_space(li0_nodes);
      p7 = claim_element(li0_nodes, "P", {});
      var p7_nodes = children(p7);
      t22 = claim_text(p7_nodes, "There should be enough knowledge provided in the game to hypothesise about the solution.");
      p7_nodes.forEach(detach);
      t23 = claim_space(li0_nodes);
      p8 = claim_element(li0_nodes, "P", {});
      var p8_nodes = children(p8);
      t24 = claim_text(p8_nodes, "Telegraphing can be done in a few ways, from subtle character dialogue (or even obvious character dialogue if it fits the style of\n        the game) through to environmental hints.");
      p8_nodes.forEach(detach);
      t25 = claim_space(li0_nodes);
      aside1 = claim_element(li0_nodes, "ASIDE", { class: true });
      var aside1_nodes = children(aside1);
      figure0 = claim_element(aside1_nodes, "FIGURE", {});
      var figure0_nodes = children(figure0);
      img0 = claim_element(figure0_nodes, "IMG", { src: true, alt: true });
      t26 = claim_space(figure0_nodes);
      figcaption0 = claim_element(figure0_nodes, "FIGCAPTION", {});
      var figcaption0_nodes = children(figcaption0);
      t27 = claim_text(figcaption0_nodes, "There are varying degrees of subtlety when it comes to telegraphing puzzles.");
      figcaption0_nodes.forEach(detach);
      figure0_nodes.forEach(detach);
      aside1_nodes.forEach(detach);
      t28 = claim_space(li0_nodes);
      p9 = claim_element(li0_nodes, "P", {});
      var p9_nodes = children(p9);
      t29 = claim_text(p9_nodes, "One example of good environmental hinting can be found in Zelda: Link's Awakening.");
      p9_nodes.forEach(detach);
      t30 = claim_space(li0_nodes);
      p10 = claim_element(li0_nodes, "P", {});
      var p10_nodes = children(p10);
      t31 = claim_text(p10_nodes, "There is a hidden room in the Key Cavern that can only be accessed by using bombs against a specific wall.");
      p10_nodes.forEach(detach);
      t32 = claim_space(li0_nodes);
      p11 = claim_element(li0_nodes, "P", {});
      var p11_nodes = children(p11);
      t33 = claim_text(p11_nodes, "Usually walls that are susceptible to bombs have special cracks in them but to help the player discover this particular wall they\n        are given an extra hint - a giant arrow on the ground drawn with tiles.");
      p11_nodes.forEach(detach);
      t34 = claim_space(li0_nodes);
      p12 = claim_element(li0_nodes, "P", {});
      var p12_nodes = children(p12);
      t35 = claim_text(p12_nodes, "It's not overly subtle but it also doesn't explicitly spell it out either.");
      p12_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t36 = claim_space(ol_nodes);
      li1 = claim_element(ol_nodes, "LI", {});
      var li1_nodes = children(li1);
      p13 = claim_element(li1_nodes, "P", {});
      var p13_nodes = children(p13);
      em1 = claim_element(p13_nodes, "EM", {});
      var em1_nodes = children(em1);
      t37 = claim_text(em1_nodes, "Does the solution make sense once you know the answer?");
      em1_nodes.forEach(detach);
      p13_nodes.forEach(detach);
      t38 = claim_space(li1_nodes);
      p14 = claim_element(li1_nodes, "P", {});
      var p14_nodes = children(p14);
      t39 = claim_text(p14_nodes, "This second question is for after the solution is found.");
      p14_nodes.forEach(detach);
      t40 = claim_space(li1_nodes);
      p15 = claim_element(li1_nodes, "P", {});
      var p15_nodes = children(p15);
      t41 = claim_text(p15_nodes, "If a player randomly stumbles on the answer but are still confused as to why that worked then the puzzle is probably either too\n        abstract, relies on overly specific knowledge, or is just a bad idea in general.");
      p15_nodes.forEach(detach);
      t42 = claim_space(li1_nodes);
      p16 = claim_element(li1_nodes, "P", {});
      var p16_nodes = children(p16);
      t43 = claim_text(p16_nodes, "That doesn't mean solutions have to be boring.");
      p16_nodes.forEach(detach);
      t44 = claim_space(li1_nodes);
      p17 = claim_element(li1_nodes, "P", {});
      var p17_nodes = children(p17);
      t45 = claim_text(p17_nodes, "It just means that the game needs to be internally consistent and the puzzles need to abide by the games own rules.");
      p17_nodes.forEach(detach);
      t46 = claim_space(li1_nodes);
      aside2 = claim_element(li1_nodes, "ASIDE", { class: true });
      var aside2_nodes = children(aside2);
      figure1 = claim_element(aside2_nodes, "FIGURE", {});
      var figure1_nodes = children(figure1);
      img1 = claim_element(figure1_nodes, "IMG", { src: true, alt: true });
      t47 = claim_space(figure1_nodes);
      figcaption1 = claim_element(figure1_nodes, "FIGCAPTION", {});
      var figcaption1_nodes = children(figcaption1);
      t48 = claim_text(figcaption1_nodes, "Sometimes the solution is just rearranging the pieces.");
      figcaption1_nodes.forEach(detach);
      figure1_nodes.forEach(detach);
      aside2_nodes.forEach(detach);
      t49 = claim_space(li1_nodes);
      p18 = claim_element(li1_nodes, "P", {});
      var p18_nodes = children(p18);
      t50 = claim_text(p18_nodes, "There's a puzzle in Full Throttle that involves a chain that when pulled opens a gate. As soon as you let go, however, the gate\n        closes again.");
      p18_nodes.forEach(detach);
      t51 = claim_space(li1_nodes);
      p19 = claim_element(li1_nodes, "P", {});
      var p19_nodes = children(p19);
      t52 = claim_text(p19_nodes, "You have a padlock that you might initially think should be used on the chain to keep the gate open but the solution to the puzzle\n        is to padlock the gate shut so that the chain stays in place.");
      p19_nodes.forEach(detach);
      t53 = claim_space(li1_nodes);
      p20 = claim_element(li1_nodes, "P", {});
      var p20_nodes = children(p20);
      t54 = claim_text(p20_nodes, "You can then climb the chain to get over the wall.");
      p20_nodes.forEach(detach);
      t55 = claim_space(li1_nodes);
      p21 = claim_element(li1_nodes, "P", {});
      var p21_nodes = children(p21);
      t56 = claim_text(p21_nodes, "The solution is surprising but it does make sense.");
      p21_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      ol_nodes.forEach(detach);
      t57 = claim_space(nodes);
      p22 = claim_element(nodes, "P", {});
      var p22_nodes = children(p22);
      t58 = claim_text(p22_nodes, "Unfortunately, as the puzzle designer, you can never truly know if you've hit the mark until you put your puzzles in front of real\n    players.");
      p22_nodes.forEach(detach);
      t59 = claim_space(nodes);
      p23 = claim_element(nodes, "P", {});
      var p23_nodes = children(p23);
      t60 = claim_text(p23_nodes, "You'll know you've found the perfect balance when the player gets a sense of being clever when they figure it out.");
      p23_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://github.com/nathanhoad/godot_puzzle_dependencies");
      attr(a1, "href", "https://grumpygamer.com/puzzle_dependency_charts");
      if (!src_url_equal(img0.src, img0_src_value = LINKS_AWAKENING_URL))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "Screenshot from Link's Awakening on Nintendo Switch");
      attr(aside1, "class", "right");
      if (!src_url_equal(img1.src, img1_src_value = FULL_THROTTLE_URL))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Screenshot from Full Throttle on PC");
      attr(aside2, "class", "right");
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
      insert_hydration(target, t7, anchor);
      insert_hydration(target, p1, anchor);
      append_hydration(p1, t8);
      append_hydration(p1, a1);
      append_hydration(a1, t9);
      append_hydration(p1, t10);
      insert_hydration(target, t11, anchor);
      insert_hydration(target, p2, anchor);
      append_hydration(p2, t12);
      insert_hydration(target, t13, anchor);
      insert_hydration(target, p3, anchor);
      append_hydration(p3, t14);
      insert_hydration(target, t15, anchor);
      insert_hydration(target, p4, anchor);
      append_hydration(p4, t16);
      insert_hydration(target, t17, anchor);
      insert_hydration(target, ol, anchor);
      append_hydration(ol, li0);
      append_hydration(li0, p5);
      append_hydration(p5, em0);
      append_hydration(em0, t18);
      append_hydration(li0, t19);
      append_hydration(li0, p6);
      append_hydration(p6, t20);
      append_hydration(li0, t21);
      append_hydration(li0, p7);
      append_hydration(p7, t22);
      append_hydration(li0, t23);
      append_hydration(li0, p8);
      append_hydration(p8, t24);
      append_hydration(li0, t25);
      append_hydration(li0, aside1);
      append_hydration(aside1, figure0);
      append_hydration(figure0, img0);
      append_hydration(figure0, t26);
      append_hydration(figure0, figcaption0);
      append_hydration(figcaption0, t27);
      append_hydration(li0, t28);
      append_hydration(li0, p9);
      append_hydration(p9, t29);
      append_hydration(li0, t30);
      append_hydration(li0, p10);
      append_hydration(p10, t31);
      append_hydration(li0, t32);
      append_hydration(li0, p11);
      append_hydration(p11, t33);
      append_hydration(li0, t34);
      append_hydration(li0, p12);
      append_hydration(p12, t35);
      append_hydration(ol, t36);
      append_hydration(ol, li1);
      append_hydration(li1, p13);
      append_hydration(p13, em1);
      append_hydration(em1, t37);
      append_hydration(li1, t38);
      append_hydration(li1, p14);
      append_hydration(p14, t39);
      append_hydration(li1, t40);
      append_hydration(li1, p15);
      append_hydration(p15, t41);
      append_hydration(li1, t42);
      append_hydration(li1, p16);
      append_hydration(p16, t43);
      append_hydration(li1, t44);
      append_hydration(li1, p17);
      append_hydration(p17, t45);
      append_hydration(li1, t46);
      append_hydration(li1, aside2);
      append_hydration(aside2, figure1);
      append_hydration(figure1, img1);
      append_hydration(figure1, t47);
      append_hydration(figure1, figcaption1);
      append_hydration(figcaption1, t48);
      append_hydration(li1, t49);
      append_hydration(li1, p18);
      append_hydration(p18, t50);
      append_hydration(li1, t51);
      append_hydration(li1, p19);
      append_hydration(p19, t52);
      append_hydration(li1, t53);
      append_hydration(li1, p20);
      append_hydration(p20, t54);
      append_hydration(li1, t55);
      append_hydration(li1, p21);
      append_hydration(p21, t56);
      insert_hydration(target, t57, anchor);
      insert_hydration(target, p22, anchor);
      append_hydration(p22, t58);
      insert_hydration(target, t59, anchor);
      insert_hydration(target, p23, anchor);
      append_hydration(p23, t60);
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
        detach(t7);
      if (detaching)
        detach(p1);
      if (detaching)
        detach(t11);
      if (detaching)
        detach(p2);
      if (detaching)
        detach(t13);
      if (detaching)
        detach(p3);
      if (detaching)
        detach(t15);
      if (detaching)
        detach(p4);
      if (detaching)
        detach(t17);
      if (detaching)
        detach(ol);
      if (detaching)
        detach(t57);
      if (detaching)
        detach(p22);
      if (detaching)
        detach(t59);
      if (detaching)
        detach(p23);
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
      path: "/puzzles",
      title: "What makes a good puzzle?",
      description: "I have two simple questions that I ask myself when coming up with puzzles"
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
