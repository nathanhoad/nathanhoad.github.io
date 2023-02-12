import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, q as text, a as space, l as claim_element, m as children, r as claim_text, h as detach, c as claim_space, n as attr, J as src_url_equal, b as insert_hydration, H as append_hydration, C as noop, D as create_slot, E as update_slot_base, F as get_all_dirty_from_scope, G as get_slot_changes, f as transition_in, t as transition_out } from "./index-1cf7e9b2.js";
const headerSimple_svelte_svelte_type_style_lang = "";
function create_fragment$1(ctx) {
  let header;
  let strong;
  let a0;
  let t0;
  let t1;
  let aside;
  let a1;
  let img0;
  let img0_src_value;
  let t2;
  let a2;
  let img1;
  let img1_src_value;
  let t3;
  let a3;
  let img2;
  let img2_src_value;
  let t4;
  let a4;
  let img3;
  let img3_src_value;
  return {
    c() {
      header = element("header");
      strong = element("strong");
      a0 = element("a");
      t0 = text("Nathan Hoad");
      t1 = space();
      aside = element("aside");
      a1 = element("a");
      img0 = element("img");
      t2 = space();
      a2 = element("a");
      img1 = element("img");
      t3 = space();
      a3 = element("a");
      img2 = element("img");
      t4 = space();
      a4 = element("a");
      img3 = element("img");
      this.h();
    },
    l(nodes) {
      header = claim_element(nodes, "HEADER", { class: true });
      var header_nodes = children(header);
      strong = claim_element(header_nodes, "STRONG", { class: true });
      var strong_nodes = children(strong);
      a0 = claim_element(strong_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t0 = claim_text(a0_nodes, "Nathan Hoad");
      a0_nodes.forEach(detach);
      strong_nodes.forEach(detach);
      t1 = claim_space(header_nodes);
      aside = claim_element(header_nodes, "ASIDE", { class: true });
      var aside_nodes = children(aside);
      a1 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      img0 = claim_element(a1_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      a1_nodes.forEach(detach);
      t2 = claim_space(aside_nodes);
      a2 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      img1 = claim_element(a2_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      a2_nodes.forEach(detach);
      t3 = claim_space(aside_nodes);
      a3 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      img2 = claim_element(a3_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      a3_nodes.forEach(detach);
      t4 = claim_space(aside_nodes);
      a4 = claim_element(aside_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      img3 = claim_element(a4_nodes, "IMG", {
        src: true,
        alt: true,
        width: true,
        height: true,
        class: true
      });
      a4_nodes.forEach(detach);
      aside_nodes.forEach(detach);
      header_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "/");
      attr(a0, "class", "svelte-18w1g1g");
      attr(strong, "class", "svelte-18w1g1g");
      if (!src_url_equal(img0.src, img0_src_value = "/youtube-light.svg"))
        attr(img0, "src", img0_src_value);
      attr(img0, "alt", "YouTube");
      attr(img0, "width", "40");
      attr(img0, "height", "40");
      attr(img0, "class", "svelte-18w1g1g");
      attr(a1, "href", "https://youtube.com/@nathan_hoad");
      attr(a1, "class", "svelte-18w1g1g");
      if (!src_url_equal(img1.src, img1_src_value = "/discord-light.svg"))
        attr(img1, "src", img1_src_value);
      attr(img1, "alt", "Discord");
      attr(img1, "width", "40");
      attr(img1, "height", "40");
      attr(img1, "class", "svelte-18w1g1g");
      attr(a2, "href", "/discord");
      attr(a2, "class", "svelte-18w1g1g");
      if (!src_url_equal(img2.src, img2_src_value = "/mastodon-light.svg"))
        attr(img2, "src", img2_src_value);
      attr(img2, "alt", "Mastodon");
      attr(img2, "width", "40");
      attr(img2, "height", "40");
      attr(img2, "class", "svelte-18w1g1g");
      attr(a3, "href", "https://mastodon.social/@nathanhoad");
      attr(a3, "class", "svelte-18w1g1g");
      if (!src_url_equal(img3.src, img3_src_value = "/github-light.svg"))
        attr(img3, "src", img3_src_value);
      attr(img3, "alt", "GitHub");
      attr(img3, "width", "40");
      attr(img3, "height", "40");
      attr(img3, "class", "svelte-18w1g1g");
      attr(a4, "href", "https://github.com/nathanhoad");
      attr(a4, "class", "svelte-18w1g1g");
      attr(aside, "class", "svelte-18w1g1g");
      attr(header, "class", "svelte-18w1g1g");
    },
    m(target, anchor) {
      insert_hydration(target, header, anchor);
      append_hydration(header, strong);
      append_hydration(strong, a0);
      append_hydration(a0, t0);
      append_hydration(header, t1);
      append_hydration(header, aside);
      append_hydration(aside, a1);
      append_hydration(a1, img0);
      append_hydration(aside, t2);
      append_hydration(aside, a2);
      append_hydration(a2, img1);
      append_hydration(aside, t3);
      append_hydration(aside, a3);
      append_hydration(a3, img2);
      append_hydration(aside, t4);
      append_hydration(aside, a4);
      append_hydration(a4, img3);
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
class Header_simple extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment$1, safe_not_equal, {});
  }
}
const article_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let article;
  let current;
  const default_slot_template = (
    /*#slots*/
    ctx[1].default
  );
  const default_slot = create_slot(
    default_slot_template,
    ctx,
    /*$$scope*/
    ctx[0],
    null
  );
  return {
    c() {
      article = element("article");
      if (default_slot)
        default_slot.c();
      this.h();
    },
    l(nodes) {
      article = claim_element(nodes, "ARTICLE", { class: true });
      var article_nodes = children(article);
      if (default_slot)
        default_slot.l(article_nodes);
      article_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(article, "class", "svelte-18jwldi");
    },
    m(target, anchor) {
      insert_hydration(target, article, anchor);
      if (default_slot) {
        default_slot.m(article, null);
      }
      current = true;
    },
    p(ctx2, [dirty]) {
      if (default_slot) {
        if (default_slot.p && (!current || dirty & /*$$scope*/
        1)) {
          update_slot_base(
            default_slot,
            default_slot_template,
            ctx2,
            /*$$scope*/
            ctx2[0],
            !current ? get_all_dirty_from_scope(
              /*$$scope*/
              ctx2[0]
            ) : get_slot_changes(
              default_slot_template,
              /*$$scope*/
              ctx2[0],
              dirty,
              null
            ),
            null
          );
        }
      }
    },
    i(local) {
      if (current)
        return;
      transition_in(default_slot, local);
      current = true;
    },
    o(local) {
      transition_out(default_slot, local);
      current = false;
    },
    d(detaching) {
      if (detaching)
        detach(article);
      if (default_slot)
        default_slot.d(detaching);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { $$slots: slots = {}, $$scope } = $$props;
  $$self.$$set = ($$props2) => {
    if ("$$scope" in $$props2)
      $$invalidate(0, $$scope = $$props2.$$scope);
  };
  return [$$scope, slots];
}
class Article extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment, safe_not_equal, {});
  }
}
export {
  Article as A,
  Header_simple as H
};
