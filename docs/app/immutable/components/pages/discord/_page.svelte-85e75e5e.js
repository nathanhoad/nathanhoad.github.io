import { S as SvelteComponent, i as init, s as safe_not_equal, o as onMount } from "../../../chunks/index-1cf7e9b2.js";
function instance($$self) {
  onMount(() => {
    if (typeof document !== "undefined") {
      document.location = "https://discord.gg/zwBVQdJchX";
    }
  });
  return [];
}
class Page extends SvelteComponent {
  constructor(options) {
    super();
    init(this, options, instance, null, safe_not_equal, {});
  }
}
export {
  Page as default
};
