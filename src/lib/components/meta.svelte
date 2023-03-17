<script lang="ts">
  export let title: string;
  export let description: string;
  export let path: string;
  export let imageUrl: string = "https://nathanhoad.net/share.jpg";

  if (!imageUrl.startsWith("http")) imageUrl = `https://nathanhoad.net${imageUrl}`;
</script>

<svelte:head>
  <title>{title}</title>
  <meta property="og:title" content={title} />
  <meta name="description" content={description} />
  <meta property="og:description" content={description} />
  <meta property="og:image" content={imageUrl} />
  <meta property="og:url" content={`https://nathanhoad.net${path}`} />
  <link type="image/png" href="/favicon.png" rel="icon" />
  <meta name="author" content="Nathan Hoad" />
  <meta name="verify-v1" content="FJjra037EqYRGo8w0Atq5BHkBi8B+MPZSD+0jKQebLs=" />
  <meta name="p:domain_verify" content="5c8fe00840c14d6c92865fc017137b69" />
</svelte:head>
