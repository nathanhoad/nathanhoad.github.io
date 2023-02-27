<script lang="ts">
  import ArticlePage from "$lib/components/article-page.svelte";
  
  import HEADER_URL from "./header.jpg";
  import TOWN_URL from "./town.jpg";
</script>

<ArticlePage
  path="/hackaton"
  title="Building a hand-painted puzzle game in 48 hours"
  description="We build a winning puzzle game for React Riot."
  imageUrl={HEADER_URL}
>
  <header>
    <h1>Building a hand-painted puzzle game in 48 hours</h1>
    <aside>July 2017</aside>
  </header>

  <p>
    Last week I, along with <a href="https://lillypiri.com">Lilly</a>,
    <a href="https://benhoad.net">Ben</a>, and <a href="https://www.edwilbert.com/">Taz</a>, competed in the first ever React Riot, a 48
    hour coding competition. We were lucky enough to win the top prize.
  </p>

  <figure>
    <a href="https://nathanhoad.itch.io/the-definitely-ending-story">
      <img src={HEADER_URL} alt="The Definitely Ending Story" width="1410" height="1122" />
    </a>
    <figcaption>Our entry, The Definitely Ending Story, took out the top prize.</figcaption>
  </figure>

  <p>
    In the week leading up to the weekend we decided to make some kind of adventure game, along the lines of Monkey Island and Day of the
    Tentacle.
  </p>

  <p>
    Of course, the requirement of using <a href="https://reactjs.org/">React</a> meant that we were a little limited as to what we could actually
    do in terms of complex animation. Realising this, we concluded that the best approach might be to build something that resembled a children's
    story book (limiting any need for animation) but with puzzles and a simple storyline.
  </p>

  <aside class="right">
    <figure>
      <img src={TOWN_URL} alt="A painting of a town" width="750" height="1138" />
      <figcaption>Everything was hand painted.</figcaption>
    </figure>
  </aside>

  <p>
    I've always been a fan of Ron Gilbert's blog and in particular his post about rules for adventure games. His idea of the puzzle
    dependency chart was invaluable in designing the game - Last Friday night I found a scrap piece of paper and sketched up a rough
    overview of how the puzzles might work.
  </p>
  <p>
    We then brainstormed about different lines of dialogue and what kinds of characters would be in the world (knowing that we would also
    have to paint all of the backgrounds and characters within the 48 hours we tried to keep them to the minimum required to tell the
    story).
  </p>
  <p>
    The rest of the weekend was a blur of building the engine, building out the React components to handle each location, writing all of the
    lines of dialogue and fitting them into the talk trees, painting all of the backgrounds and characters, and occasionally finding time to
    eat and sleep.
  </p>
  <p>
    There are still a few bugs that we didn't get time to fix (we were going up until 10 minutes before the finish time) as well as a few
    concepts that still have rough edges (your inventory being full of drinks, for one) but overall we are proud of what we built.
  </p>
  <p>
    <a href="https://nathanhoad.itch.io/the-definitely-ending-story">See if you can make it to Granny's House.</a>
  </p>
</ArticlePage>
