<script lang="ts">
  import Meta from "$lib/components/meta.svelte";
  import Header from "$lib/components/header-large.svelte";
  import Footer from "$lib/components/footer.svelte";
</script>

<Meta
  path="/"
  title="Nathan Hoad"
  description="G'day! I'm Nathan hoad and I'm an independent game developer. Right now I'm working on a classic adventure game about our cat, Coco."
/>

<Header />

<section>
  <p>
    G'day! I'm Nathan Hoad and I'm an independent game developer and doer of art stuff with <a href="https://lillypiri.com">Lilly Piri</a>.
  </p>
  <p>I love writing code, drawing pictures, composing music, and telling stories and making games combines all of those things.</p>
  <p>
    Right now I'm <a href="https://youtube.com/@nathan_hoad">building a classic adventure game</a> about our cat, Coco, as well as working
    on a few <a href="https://godotengine.org/">Godot Engine</a> addons.
  </p>
</section>

<section>
  <h2>Projects</h2>
  <ul class="projects">
    <li>
      <a href="https://youtube.com/@nathan_hoad">
        <img src="/devlogs-on-youtube.png" alt="" width="960" height="540" />
        <span>Gamedev Videos</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/nathanhoad/godot_dialogue_manager">
        <img src="/dialogue-manager.jpg" alt="" width="960" height="540" />
        <span>Dialogue Manager</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/nathanhoad/godot_puzzle_dependencies">
        <img src="/puzzle-dependencies.jpg" alt="" width="960" height="540" />
        <span>Puzzle Dependencies</span>
      </a>
    </li>
    <li>
      <a href="https://github.com/nathanhoad/godot_input_helper">
        <img src="/input-helper.jpg" alt="" width="960" height="540" />
        <span>Input Helper</span>
      </a>
    </li>
    <li>
      <a href="https://nathanhoad.itch.io/the-definitely-ending-story">
        <img src="/the-definitely-ending-story.jpg" alt="" width="960" height="540" />
        <span>The Definitely Ending Story</span>
      </a>
    </li>
    <li>
      <a href="https://nathanhoad.itch.io/timesweeper">
        <img src="/timesweeper.jpg" alt="" width="960" height="540" />
        <span>Timesweeper</span>
      </a>
    </li>
  </ul>
</section>

<section>
  <h2>Articles</h2>
  <ul class="articles">
    <li>
      <a href="/puzzles">What makes a good puzzle?</a>
      <span>February 2023</span>
    </li>
    <li>
      <a href="/uses">What I use to make games</a>
      <span>January 2023</span>
    </li>
    <li>
      <a href="/gdm">Making a dialogue manager for Godot</a>
      <span>Febrary 2022</span>
    </li>
    <li>
      <a href="/prototypes">Publishing prototypes</a>
      <span>August 2021</span>
    </li>
    <li>
      <a href="/fsm">Use finite state machines for NPC behaviour</a>
      <span>May 2021</span>
    </li>
    <li>
      <a href="/godot">Why I'm choosing Godot</a>
      <span>September 2020</span>
    </li>
    <li>
      <a href="/jsn">Just start now</a>
      <span>March 2018</span>
    </li>
    <li>
      <a href="/365">What I Iearned from completing a painting every day for a whole year</a>
      <span>January 2018</span>
    </li>
    <li>
      <a href="/hackathon">Making a hand-painted puzzle game in 48 hours</a>
      <span>July 2017</span>
    </li>
  </ul>
</section>

<Footer />

<style>
  section {
    max-width: 700px;
    margin: auto;
    padding: 1rem 0;
    font-family: "Roboto Slab", serif;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  h2 {
    font-size: 1.2rem;
    line-height: 2rem;
    letter-spacing: 0.2rem;
    font-family: "Noto Sans", sans-serif;
    text-transform: uppercase;
    color: #999;
    margin: 0 0 1rem 0;
    padding: 0;
  }

  a {
    color: black;
  }

  .projects {
    list-style: none;
    padding: 0;
    margin: 1.5rem -80px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 12px;
    row-gap: 12px;
  }

  .projects li {
    background: #222;
    text-align: center;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.2);
  }

  .projects a {
    display: inline-block;
    text-decoration: none;
    color: white;
    font-family: "Noto Sans", sans-serif;
    font-size: 1.2rem;
    line-height: 1.8rem;
  }

  .projects a img {
    display: block;
    max-width: 100%;
    width: auto;
    height: auto;
  }

  .projects a span {
    display: block;
    padding: 0.8rem 1rem;
  }

  .articles {
    list-style: none;
    padding: 1rem 0 0 0;
    margin: 0;
  }

  .articles li {
    margin-bottom: 1.8rem;
  }

  .articles a {
    text-decoration: none;
    display: block;
    font-family: "Noto Sans", sans-serif;
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  .articles a:hover {
    text-decoration: underline;
  }

  .articles span {
    font-size: 1.1rem;
    color: #999;
    font-family: "Noto Sans", sans-serif;
  }

  @media screen and (max-width: 700px) {
    section {
      max-width: calc(100% - 30px);
    }

    .projects {
      margin: 1.5rem 0;
      display: block;
    }

    .projects li {
      margin-bottom: 15px;
    }
  }
</style>
