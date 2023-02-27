<script lang="ts">
  import ArticlePage from "$lib/components/article-page.svelte";

  import TIMESWEEPER_URL from "./timesweeper.jpg";
  import TRASH_TREASURE_URL from "./trash-treasure.jpg";
</script>

<ArticlePage
  path="/prototypes"
  title="Publishing prototypes"
  description="Going through the release process is good practice and gives you a sense of completing a project."
>
  <header>
    <h1>Publishing prototypes</h1>
    <aside>August 2021</aside>
  </header>

  <p>I was recently watching John Romero's talk from GDC 16 when one of his principles stuck out to me:</p>

  <figure>
    <blockquote>
      "No prototypes. Just make the game. Polish as you go. Don't depend on polish happening later. Always maintain constantly shippable
      code."
    </blockquote>

    <figcaption>&mdash;John Romero</figcaption>
  </figure>

  <p>
    When you've had the success that he had with id Software back in the day it's hard to argue. So argue I won't. Instead I will elaborate
    on the point Romero has made with my own interpretation of it.
  </p>

  <figure>
    <blockquote>
      "Publish your prototypes. Test out ideas on smaller games and release them before committing them to bigger projects."
    </blockquote>
    <figcaption>&mdash;me</figcaption>
  </figure>

  <p>
    This way you still technically aren't making 'prototypes' because you're releasing actual games but you're also getting the benefits of
    testing out ideas beforehand.
  </p>
  <p>Perhaps not all prototypes make it far enough for them but, for any that do, there is value in the “releasing a game” experience.</p>

  <figure>
    <a href="https://nathanhoad.itch.io/timesweeper">
      <img src={TIMESWEEPER_URL} alt="Screenshot of Timesweeper" width="1920" height="1080" />
    </a>
    <figcaption>Timesweeper is a two-player showdown.</figcaption>
  </figure>

  <p>
    I recently published a game on <a href="https://gotm.io/nathanhoad/timesweeper">Gotm.io</a> and
    <a href="https://nathanhoad.itch.io/timesweeper">Itch</a> (the Itch version is just the Gotm version embedded) called Timesweeper.
  </p>
  <p>
    Timesweeper began as a quick prototype of the high level multiplayer API in Godot 3, then a quick prototype to see if that would work
    with the Gotm addon.
  </p>
  <p>
    It wasn't long before I had the whole thing functional as a very rough prototype. The game was mostly playable but setting it up each
    time was a bit cumbersome.
  </p>
  <p>I figured that I was close enough to having an actual game I should just tidy up the rough edges and actually finish it.</p>
  <p>I added a title screen and some UI to host/join games as well as the end screen when someone wins.</p>

  <aside class="right">
    <figure>
      <img src={TRASH_TREASURE_URL} alt="Painting of Ibis on a pile of trash." width="1600" height="1351" />
      <figcaption>You never know when your trash will become someone's treasure.</figcaption>
    </figure>
  </aside>

  <p>There are four main reasons I like releasing prototype games:</p>

  <ol>
    <li>
      It makes you solve any actual problems, not just prove the basic idea. If you have to release the game into the wild you have to make
      sure your idea is fully formed. This means you won't have half-baked ideas making their way into your bigger project.
    </li>
    <li>
      Doing something a second time is always better. You can make a small mess of the first implementation while you learn how best to do
      it. Then, with your newfound knowledge, you can implement a cleaner solution into the main project.
    </li>
    <li>
      Even if you don't end up using the idea for anything else you've got something to show for it. In the example of Pixel Beach, I'm not
      sure if I'll end up using the web-app-as-desktop-game method for releasing my bigger project but it was fun to test out and I have a
      full game to show for the effort.
    </li>
    <li>You never know when someone will fall in love with your 'throwaway' game.</li>
  </ol>
</ArticlePage>
