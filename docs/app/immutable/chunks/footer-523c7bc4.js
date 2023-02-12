import { S as SvelteComponent, i as init, s as safe_not_equal, k as element, K as head_selector, l as claim_element, h as detach, n as attr, H as append_hydration, C as noop, q as text, a as space, m as children, r as claim_text, c as claim_space, b as insert_hydration } from "./index-1cf7e9b2.js";
function create_fragment$1(ctx) {
  let title_value;
  let meta0;
  let meta1;
  let meta2;
  let meta3;
  let meta4;
  let meta4_content_value;
  let link;
  let meta5;
  let meta6;
  let meta7;
  document.title = title_value = /*title*/
  ctx[0];
  return {
    c() {
      meta0 = element("meta");
      meta1 = element("meta");
      meta2 = element("meta");
      meta3 = element("meta");
      meta4 = element("meta");
      link = element("link");
      meta5 = element("meta");
      meta6 = element("meta");
      meta7 = element("meta");
      this.h();
    },
    l(nodes) {
      const head_nodes = head_selector("svelte-1jxn8yo", document.head);
      meta0 = claim_element(head_nodes, "META", { property: true, content: true });
      meta1 = claim_element(head_nodes, "META", { name: true, content: true });
      meta2 = claim_element(head_nodes, "META", { property: true, content: true });
      meta3 = claim_element(head_nodes, "META", { property: true, content: true });
      meta4 = claim_element(head_nodes, "META", { property: true, content: true });
      link = claim_element(head_nodes, "LINK", { type: true, href: true, rel: true });
      meta5 = claim_element(head_nodes, "META", { name: true, content: true });
      meta6 = claim_element(head_nodes, "META", { name: true, content: true });
      meta7 = claim_element(head_nodes, "META", { name: true, content: true });
      head_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(meta0, "property", "og:title");
      attr(
        meta0,
        "content",
        /*title*/
        ctx[0]
      );
      attr(meta1, "name", "description");
      attr(
        meta1,
        "content",
        /*description*/
        ctx[1]
      );
      attr(meta2, "property", "og:description");
      attr(
        meta2,
        "content",
        /*description*/
        ctx[1]
      );
      attr(meta3, "property", "og:image");
      attr(
        meta3,
        "content",
        /*imageUrl*/
        ctx[3]
      );
      attr(meta4, "property", "og:url");
      attr(meta4, "content", meta4_content_value = `https://nathanhoad.net${/*path*/
      ctx[2]}`);
      attr(link, "type", "image/png");
      attr(link, "href", "/favicon.png");
      attr(link, "rel", "icon");
      attr(meta5, "name", "author");
      attr(meta5, "content", "Nathan Hoad");
      attr(meta6, "name", "verify-v1");
      attr(meta6, "content", "FJjra037EqYRGo8w0Atq5BHkBi8B+MPZSD+0jKQebLs=");
      attr(meta7, "name", "p:domain_verify");
      attr(meta7, "content", "5c8fe00840c14d6c92865fc017137b69");
    },
    m(target, anchor) {
      append_hydration(document.head, meta0);
      append_hydration(document.head, meta1);
      append_hydration(document.head, meta2);
      append_hydration(document.head, meta3);
      append_hydration(document.head, meta4);
      append_hydration(document.head, link);
      append_hydration(document.head, meta5);
      append_hydration(document.head, meta6);
      append_hydration(document.head, meta7);
    },
    p(ctx2, [dirty]) {
      if (dirty & /*title*/
      1 && title_value !== (title_value = /*title*/
      ctx2[0])) {
        document.title = title_value;
      }
      if (dirty & /*title*/
      1) {
        attr(
          meta0,
          "content",
          /*title*/
          ctx2[0]
        );
      }
      if (dirty & /*description*/
      2) {
        attr(
          meta1,
          "content",
          /*description*/
          ctx2[1]
        );
      }
      if (dirty & /*description*/
      2) {
        attr(
          meta2,
          "content",
          /*description*/
          ctx2[1]
        );
      }
      if (dirty & /*imageUrl*/
      8) {
        attr(
          meta3,
          "content",
          /*imageUrl*/
          ctx2[3]
        );
      }
      if (dirty & /*path*/
      4 && meta4_content_value !== (meta4_content_value = `https://nathanhoad.net${/*path*/
      ctx2[2]}`)) {
        attr(meta4, "content", meta4_content_value);
      }
    },
    i: noop,
    o: noop,
    d(detaching) {
      detach(meta0);
      detach(meta1);
      detach(meta2);
      detach(meta3);
      detach(meta4);
      detach(link);
      detach(meta5);
      detach(meta6);
      detach(meta7);
    }
  };
}
function instance($$self, $$props, $$invalidate) {
  let { title } = $$props;
  let { description } = $$props;
  let { path } = $$props;
  let { imageUrl = "https://nathanhoad.net/share.jpg" } = $$props;
  $$self.$$set = ($$props2) => {
    if ("title" in $$props2)
      $$invalidate(0, title = $$props2.title);
    if ("description" in $$props2)
      $$invalidate(1, description = $$props2.description);
    if ("path" in $$props2)
      $$invalidate(2, path = $$props2.path);
    if ("imageUrl" in $$props2)
      $$invalidate(3, imageUrl = $$props2.imageUrl);
  };
  return [title, description, path, imageUrl];
}
class Meta extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, create_fragment$1, safe_not_equal, {
      title: 0,
      description: 1,
      path: 2,
      imageUrl: 3
    });
  }
}
const footer_svelte_svelte_type_style_lang = "";
function create_fragment(ctx) {
  let footer;
  let p;
  let t0;
  let a0;
  let t1;
  let t2;
  let a1;
  let t3;
  let t4;
  let t5;
  let ul;
  let li0;
  let a2;
  let t6;
  let t7;
  let li1;
  let a3;
  let t8;
  let t9;
  let li2;
  let a4;
  let t10;
  let t11;
  let li3;
  let a5;
  let t12;
  let t13;
  let li4;
  let a6;
  let t14;
  let t15;
  let aside;
  let t16;
  return {
    c() {
      footer = element("footer");
      p = element("p");
      t0 = text("If you want to keep up to date with my adventures in game development then you should ");
      a0 = element("a");
      t1 = text("subscribe to my YouTube channel");
      t2 = text("\n    or ");
      a1 = element("a");
      t3 = text("join my Discord");
      t4 = text(".");
      t5 = space();
      ul = element("ul");
      li0 = element("li");
      a2 = element("a");
      t6 = text("YouTube");
      t7 = space();
      li1 = element("li");
      a3 = element("a");
      t8 = text("Discord");
      t9 = space();
      li2 = element("li");
      a4 = element("a");
      t10 = text("Mastodon");
      t11 = space();
      li3 = element("li");
      a5 = element("a");
      t12 = text("GitHub");
      t13 = space();
      li4 = element("li");
      a6 = element("a");
      t14 = text("Twitter");
      t15 = space();
      aside = element("aside");
      t16 = text("© Nathan Hoad");
      this.h();
    },
    l(nodes) {
      footer = claim_element(nodes, "FOOTER", { class: true });
      var footer_nodes = children(footer);
      p = claim_element(footer_nodes, "P", { class: true });
      var p_nodes = children(p);
      t0 = claim_text(p_nodes, "If you want to keep up to date with my adventures in game development then you should ");
      a0 = claim_element(p_nodes, "A", { href: true, class: true });
      var a0_nodes = children(a0);
      t1 = claim_text(a0_nodes, "subscribe to my YouTube channel");
      a0_nodes.forEach(detach);
      t2 = claim_text(p_nodes, "\n    or ");
      a1 = claim_element(p_nodes, "A", { href: true, class: true });
      var a1_nodes = children(a1);
      t3 = claim_text(a1_nodes, "join my Discord");
      a1_nodes.forEach(detach);
      t4 = claim_text(p_nodes, ".");
      p_nodes.forEach(detach);
      t5 = claim_space(footer_nodes);
      ul = claim_element(footer_nodes, "UL", { class: true });
      var ul_nodes = children(ul);
      li0 = claim_element(ul_nodes, "LI", { class: true });
      var li0_nodes = children(li0);
      a2 = claim_element(li0_nodes, "A", { href: true, class: true });
      var a2_nodes = children(a2);
      t6 = claim_text(a2_nodes, "YouTube");
      a2_nodes.forEach(detach);
      li0_nodes.forEach(detach);
      t7 = claim_space(ul_nodes);
      li1 = claim_element(ul_nodes, "LI", { class: true });
      var li1_nodes = children(li1);
      a3 = claim_element(li1_nodes, "A", { href: true, class: true });
      var a3_nodes = children(a3);
      t8 = claim_text(a3_nodes, "Discord");
      a3_nodes.forEach(detach);
      li1_nodes.forEach(detach);
      t9 = claim_space(ul_nodes);
      li2 = claim_element(ul_nodes, "LI", { class: true });
      var li2_nodes = children(li2);
      a4 = claim_element(li2_nodes, "A", { href: true, class: true });
      var a4_nodes = children(a4);
      t10 = claim_text(a4_nodes, "Mastodon");
      a4_nodes.forEach(detach);
      li2_nodes.forEach(detach);
      t11 = claim_space(ul_nodes);
      li3 = claim_element(ul_nodes, "LI", { class: true });
      var li3_nodes = children(li3);
      a5 = claim_element(li3_nodes, "A", { href: true, class: true });
      var a5_nodes = children(a5);
      t12 = claim_text(a5_nodes, "GitHub");
      a5_nodes.forEach(detach);
      li3_nodes.forEach(detach);
      t13 = claim_space(ul_nodes);
      li4 = claim_element(ul_nodes, "LI", { class: true });
      var li4_nodes = children(li4);
      a6 = claim_element(li4_nodes, "A", { href: true, class: true });
      var a6_nodes = children(a6);
      t14 = claim_text(a6_nodes, "Twitter");
      a6_nodes.forEach(detach);
      li4_nodes.forEach(detach);
      ul_nodes.forEach(detach);
      t15 = claim_space(footer_nodes);
      aside = claim_element(footer_nodes, "ASIDE", { class: true });
      var aside_nodes = children(aside);
      t16 = claim_text(aside_nodes, "© Nathan Hoad");
      aside_nodes.forEach(detach);
      footer_nodes.forEach(detach);
      this.h();
    },
    h() {
      attr(a0, "href", "https://youtube.com/@nathan_hoad");
      attr(a0, "class", "svelte-1wjc3jb");
      attr(a1, "href", "/discord");
      attr(a1, "class", "svelte-1wjc3jb");
      attr(p, "class", "svelte-1wjc3jb");
      attr(a2, "href", "https://youtube.com/@nathan_hoad");
      attr(a2, "class", "svelte-1wjc3jb");
      attr(li0, "class", "svelte-1wjc3jb");
      attr(a3, "href", "/discord");
      attr(a3, "class", "svelte-1wjc3jb");
      attr(li1, "class", "svelte-1wjc3jb");
      attr(a4, "href", "https://mastodon.social/@nathanhoad");
      attr(a4, "class", "svelte-1wjc3jb");
      attr(li2, "class", "svelte-1wjc3jb");
      attr(a5, "href", "https://github.com/nathanhoad");
      attr(a5, "class", "svelte-1wjc3jb");
      attr(li3, "class", "svelte-1wjc3jb");
      attr(a6, "href", "https://twitter.com/nathanhoad");
      attr(a6, "class", "svelte-1wjc3jb");
      attr(li4, "class", "svelte-1wjc3jb");
      attr(ul, "class", "svelte-1wjc3jb");
      attr(aside, "class", "svelte-1wjc3jb");
      attr(footer, "class", "svelte-1wjc3jb");
    },
    m(target, anchor) {
      insert_hydration(target, footer, anchor);
      append_hydration(footer, p);
      append_hydration(p, t0);
      append_hydration(p, a0);
      append_hydration(a0, t1);
      append_hydration(p, t2);
      append_hydration(p, a1);
      append_hydration(a1, t3);
      append_hydration(p, t4);
      append_hydration(footer, t5);
      append_hydration(footer, ul);
      append_hydration(ul, li0);
      append_hydration(li0, a2);
      append_hydration(a2, t6);
      append_hydration(ul, t7);
      append_hydration(ul, li1);
      append_hydration(li1, a3);
      append_hydration(a3, t8);
      append_hydration(ul, t9);
      append_hydration(ul, li2);
      append_hydration(li2, a4);
      append_hydration(a4, t10);
      append_hydration(ul, t11);
      append_hydration(ul, li3);
      append_hydration(li3, a5);
      append_hydration(a5, t12);
      append_hydration(ul, t13);
      append_hydration(ul, li4);
      append_hydration(li4, a6);
      append_hydration(a6, t14);
      append_hydration(footer, t15);
      append_hydration(footer, aside);
      append_hydration(aside, t16);
    },
    p: noop,
    i: noop,
    o: noop,
    d(detaching) {
      if (detaching)
        detach(footer);
    }
  };
}
class Footer extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, null, create_fragment, safe_not_equal, {});
  }
}
export {
  Footer as F,
  Meta as M
};
