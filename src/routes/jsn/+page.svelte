<script lang="ts">
  import ArticlePage from "$lib/components/article-page.svelte";

  import EVEREST_URL from "./everest.svg";
</script>

<ArticlePage path="/jsn" title="Just start now" description="A year from now you'll wish you started today." imageUrl={EVEREST_URL}>
  <header>
    <h1>Just start now</h1>
    <aside>March 2018</aside>
  </header>

  <figure>
    <blockquote>"I hate writing. I love having written."</blockquote>
    <figcaption>&mdash; Doris Parker</figcaption>
  </figure>

  <figure>
    <img src={EVEREST_URL} alt="Illustration of Mount Everest" width="1920" height="1080" />
    <figcaption>Illustration by Nathan Hoad</figcaption>
  </figure>

  <p>There is a long road between a dream and reality. The path is not well worn and sometimes hard to see.</p>
  <p>
    You've probably had a moment where you've seen a demonstration of a seemingly amazing skill or heard about an achievement by someone and
    thought "I want to know how to do that."
  </p>
  <p>These things can take some time to know so I figure a better thought might be "I want to learn how to do that.'</p>
  <p>The difference is huge. Knowing is the loot at the end of a quest and learning is the quest itself.</p>
  <p>
    It takes discipline to get to the end and you can never really be sure if it will be the same end when you get there. Looking at the
    scale of the undertaking can be daunting but don't be put off by it.
  </p>
  <p>Remember that learning is not all or nothing - along the way you'll be collecting valuable experience.</p>
  <p>
    The main thing is that you just start. You'll gain momentum and it's a lot easier to keep something in motion than it is to stop it.
  </p>
  <p>
    Don't know where to start? Pick something simple and do that first. Want to learn to paint? Just start painting one simple thing each
    day. Want to build robots? Buy an Arduino and start tinkering.
  </p>
  <p>As Karen Lamb says, "A year from now you'll wish you started today."</p>
  <p>So, Just start now.</p>
</ArticlePage>
