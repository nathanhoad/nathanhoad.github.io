<script lang="ts">
  import ArticlePage from "$lib/components/article-page.svelte";

  import SHARING_STATES_URL from "./sharing-states.mp4";
</script>

<ArticlePage
  path="/fsm"
  title="Using finite state machines for behaviour"
  description="Finite state machines help break apart the code that powers character behaviour and make it easier to understand and reuse."
>
  <header>
    <h1>Using finite state machines for behaviour</h1>
    <aside>May 2021</aside>
  </header>

  <p>I use finite state machines for the behaviour of townsfolk and enemies in my game.</p>

  <p>What does that mean?</p>

  <p>At any given time an NPC can be in one of many “behaviour states” depending on what's happening to them.</p>

  <figure>
    <video src={SHARING_STATES_URL} autoplay playsinline muted loop width="1920" height="1080" />
    <figcaption>Designing states with dependency injection means they can be shared amongst different kinds of NPCs.</figcaption>
  </figure>

  <p>For example, an enemy might contain states for “patrolling” and “chasing”.</p>

  <p>
    Breaking up behaviour makes it simpler to think about. When “patrolling”, the enemy just follows a path back and forward until they see
    the player. Then they change state to “chasing” where they move towards the player. If they lose sight of the player they go back to
    “patrolling” and return to their path.
  </p>

  <p>Breaking up behaviour has another benefit - you can share them with other types of NPC.</p>

  <p>A friendly person in a town might also make use of the patrolling state.</p>

  <p>
    There's no real limit to how many states you can have or how much you share them but there are two rules that I've found have helped
    keep things manageable:
  </p>

  <ol>
    <li>
      <p><em>States define their dependencies</em></p>
      <p>
        Anything external information that the state needs should be explicitly defined. In the case of Godot this means declaring export
        variables that can be populated by the owner node.
      </p>
    </li>
    <li>
      <p><em>States don't transition to other states themselves</em></p>
      <p>Each state should have no idea that other states exist. That's the best way to keep them simple and shareable.</p>

      <p>Instead of transitioning itself, a state should simply provide a list of events that can happen while in that state.</p>

      <p>
        In the example from earlier, the patrolling state might signal that it has seen the player. From there the NPC that owns the state
        machine can decide whether it needs to transition or not.
      </p>
    </li>
  </ol>

  <p>
    If you're interested in using a finite state machine for your game then have a look at my videos on <a
      href="https://youtu.be/tZgEXWleWxg">enemy behaviour</a
    >
    and
    <a href="https://youtu.be/CZV9aNiZdRs">smarter NPCs</a>
    and have a look at
    <a href="https://www.gdquest.com/tutorial/godot/design-patterns/finite-state-machine/">GDQuest's guide to finite state machines</a>.
  </p>
</ArticlePage>
