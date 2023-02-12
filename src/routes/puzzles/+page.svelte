<script lang="ts">
  import Meta from "$lib/components/meta.svelte";
  import Article from "$lib/components/article.svelte";
  import Footer from "$lib/components/footer.svelte";
  import HeaderSimple from "$lib/components/header-simple.svelte";

  import LINKS_AWAKENING_URL from "./links-awakening.jpg";
  import FULL_THROTTLE_URL from "./full-throttle.jpg";
</script>

<Meta
  path="/puzzles"
  title="What makes a good puzzle?"
  description="I have two simple questions that I ask myself when coming up with puzzles"
/>

<HeaderSimple />

<Article>
  <header>
    <h1>What makes a good puzzle?</h1>
    <aside>February 2022</aside>
  </header>

  <p>I made a <a href="https://github.com/nathanhoad/godot_puzzle_dependencies">Godot addon for building puzzle dependency charts</a>.</p>
  <p>
    It <a href="https://grumpygamer.com/puzzle_dependency_charts">helps with designing adventurer game puzzles</a> and ensuring there are no
    dead ends that make progression impossible.
  </p>
  <p>Puzzle dependency charts also help highlight the breadth of puzzles and show where a game is too linear or too overwhelming.</p>
  <p>Having no dead ends and multiple options are things that make a good puzzle game but what about the puzzles themselves?</p>
  <p>I have two questions I ask myself when I've thought of a potential puzzle:</p>

  <ol>
    <li>
      <p><em> How would a player know to do that?</em></p>

      <p>The first question makes sure the player isn't stumbling around in the dark.</p>
      <p>There should be enough knowledge provided in the game to hypothesise about the solution.</p>
      <p>
        Telegraphing can be done in a few ways, from subtle character dialogue (or even obvious character dialogue if it fits the style of
        the game) through to environmental hints.
      </p>

      <aside class="right">
        <figure>
          <img src={LINKS_AWAKENING_URL} alt="Screenshot from Link's Awakening on Nintendo Switch" />
          <figcaption>There are varying degrees of subtlety when it comes to telegraphing puzzles.</figcaption>
        </figure>
      </aside>

      <p>One example of good environmental hinting can be found in Zelda: Link's Awakening.</p>
      <p>There is a hidden room in the Key Cavern that can only be accessed by using bombs against a specific wall.</p>
      <p>
        Usually walls that are susceptible to bombs have special cracks in them but to help the player discover this particular wall they
        are given an extra hint - a giant arrow on the ground drawn with tiles.
      </p>
      <p>It's not overly subtle but it also doesn't explicitly spell it out either.</p>
    </li>
    <li>
      <p><em>Does the solution make sense once you know the answer?</em></p>

      <p>This second question is for after the solution is found.</p>
      <p>
        If a player randomly stumbles on the answer but are still confused as to why that worked then the puzzle is probably either too
        abstract, relies on overly specific knowledge, or is just a bad idea in general.
      </p>
      <p>That doesn't mean solutions have to be boring.</p>
      <p>It just means that the game needs to be internally consistent and the puzzles need to abide by the games own rules.</p>

      <aside class="right">
        <figure>
          <img src={FULL_THROTTLE_URL} alt="Screenshot from Full Throttle on PC" />
          <figcaption>Sometimes the solution is just rearranging the pieces.</figcaption>
        </figure>
      </aside>

      <p>
        There's a puzzle in Full Throttle that involves a chain that when pulled opens a gate. As soon as you let go, however, the gate
        closes again.
      </p>
      <p>
        You have a padlock that you might initially think should be used on the chain to keep the gate open but the solution to the puzzle
        is to padlock the gate shut so that the chain stays in place.
      </p>
      <p>You can then climb the chain to get over the wall.</p>
      <p>The solution is surprising but it does make sense.</p>
    </li>
  </ol>

  <p>
    Unfortunately, as the puzzle designer, you can never truly know if you've hit the mark until you put your puzzles in front of real
    players.
  </p>
  <p>You'll know you've found the perfect balance when the player gets a sense of being clever when they figure it out.</p>
</Article>

<Footer />
