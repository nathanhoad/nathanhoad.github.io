<script lang="ts">
  import Meta from "$lib/components/meta.svelte";
  import HeaderSimple from "$lib/components/header-simple.svelte";
  import Article from "$lib/components/article.svelte";
  import Footer from "$lib/components/footer.svelte";

  import TAVERN_URL from "./tavern-lighting.jpg";
</script>

<Meta
  path="/godot"
  title="Why I'm choosing Godot"
  description="I've used a bunch of game-making tools over the years but Godot is the first one that just feels right to me"
/>

<HeaderSimple />

<Article>
  <header>
    <h1>Why I'm choosing Godot</h1>
    <aside>September 2020</aside>
  </header>
  <p>
    I've been making games here and there for about 25 years but t's only been in the last few years that I've started doing it more
    deliberately.
  </p>
  <p>
    Back in the early days all I had available to me was a copy of The Games Factory I bought from a local computer store but these days
    there's a never-ending supply of game-making tools.
  </p>
  <p>So why did I choose <a href="https://godotengine.org/">Godot</a>?</p>

  <figure>
    <img src={TAVERN_URL} alt="Screenshot of pixel tavern" width="1920" height="1080" />
    <figcaption>Coco's adventures moved to Godot.</figcaption>
  </figure>

  <p>
    The first big reason for me is that it's free and open source. Some of the other popular engines have had some scary looking license
    revisions over the years but, based on how the project is structured, Godot is immune from that.
  </p>
  <p>Another reason is that it's light.</p>
  <p>
    Godot doesn't need much to run and its footprint Is tiny. In less than 100mb you get a full game engine. And there is a surprising
    amount of stuff packed into that size.
  </p>
  <p>I like the node-based structure.</p>
  <p>
    Before getting into Godot, I had built my own streamline ECS based engine so the node stuff looked like it might be a messy approach.
  </p>
  <p>
    After giving it a go and completing the <a href="https://www.youtube.com/playlist?list=PL9FzW-m48fn2SlrW0KoLT4n5egNdX-W9a"
      >Heartbeast Action RPG tutorial series</a
    >, however, my misconceptions were broken. The way Godot structures scenes and code is exactly how my brain thinks.
  </p>
  <p>One of the biggest reasons for me though is the community.</p>
  <p>
    Everybody is passionate about Godot and there is always someone willing to help you out. There are countless high quality tutorials that
    teach everything you need to get started.
  </p>
  <p>I've used a long list of game-making software over the years but Godot is the first one that feels like home.</p>
</Article>

<Footer />
