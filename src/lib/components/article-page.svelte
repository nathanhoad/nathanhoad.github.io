<script lang="ts">
  import Meta from "./meta.svelte";
  import HeaderSimple from "./header-simple.svelte";
  import Article from "./article.svelte";
  import Footer from "./footer.svelte";

  export let title: string;
  export let description: string;
  export let path: string;
  export let imageUrl: string = "https://nathanhoad.net/share.jpg";
</script>

<Meta {path} {title} {description} {imageUrl} />

<HeaderSimple />

<Article>
  <slot />
</Article>

<Footer />
