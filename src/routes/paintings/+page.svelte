<script>
  import Meta from "$lib/components/meta.svelte";
  import Footer from "$lib/components/footer.svelte";

  import SHARE_URL from "./share.jpg";

  import SELF_PORTRAIT_URL from "./self-portrait.jpg";
  import ARCADE_URL from "./arcade.jpg";
  import BALLOON_URL from "./balloon.jpg";
  import BANJO_URL from "./banjo.jpg";
  import BARD_URL from "./bard.jpg";
  import BIN_CHICKENS_URL from "./bin-chickens.jpg";
  import BINGE_URL from "./binge.jpg";
  import BISCUITS_URL from "./biscuits.jpg";
  import BONE_URL from "./bone.jpg";
  import BOX_URL from "./box.jpg";
  import BUG_URL from "./bug.jpg";
  import CAKE_URL from "./cake.jpg";
  import CAT_BURGLAR_URL from "./cat-burglar.jpg";
  import CLASSIC_URL from "./classic.jpg";
  import COOKIES_URL from "./cookies.jpg";
  import CRAB_URL from "./crab.jpg";
  import DIVER_URL from "./diver.jpg";
  import DM_URL from "./dm.jpg";
  import DND_URL from "./dnd.jpg";
  import DRAGON_URL from "./dragon.jpg";
  import DROPBEAR_URL from "./dropbear.jpg";
  import DWARF_URL from "./dwarf.jpg";
  import EMU_URL from "./emu.jpg";
  import FATCAT_URL from "./fatcat.jpg";
  import FEATHERS_URL from "./feathers.jpg";
  import FENCER_URL from "./fencer.jpg";
  import FLIGHTLESS_URL from "./flightless.jpg";
  import FROG_URL from "./frog.jpg";
  import FULL_STACK_URL from "./full-stack.jpg";
  import GENIE_URL from "./genie.jpg";
  import GIFT_URL from "./gift.jpg";
  import GRAMOPHONE_URL from "./gramophone.jpg";
  import GREAT_WHITE_URL from "./great-white.jpg";
  import GROWTH_URL from "./growth.jpg";
  import GRUNT_URL from "./grunt.jpg";
  import HUNTSMAN_URL from "./huntsman.jpg";
  import HYDRA_URL from "./hydra.jpg";
  import HYENA_URL from "./hyena.jpg";
  import INK_URL from "./ink.jpg";
  import JELLYFISH_URL from "./jellyfish.jpg";
  import JURASSIC_PUNK_URL from "./jurassic-punk.jpg";
  import KANGAROOS_URL from "./kangaroos.jpg";
  import KITTY_URL from "./kitty.jpg";
  import KOOKABURRA_URL from "./kookaburra.jpg";
  import KRAKEN_URL from "./kraken.jpg";
  import MAP_URL from "./map.jpg";
  import MONKEY_URL from "./monkey.jpg";
  import ODYSSEY_URL from "./odyssey.jpg";
  import PACHY_URL from "./pachy.jpg";
  import PHONE_URL from "./phone.jpg";
  import PIANO_URL from "./piano.jpg";
  import PIZZA_URL from "./pizza.jpg";
  import POISON_URL from "./poison.jpg";
  import POSSUM_URL from "./possum.jpg";
  import PYTHON_URL from "./python.jpg";
  import RITOS_URL from "./ritos.jpg";
  import ROBOT_URL from "./robot.jpg";
  import ROGUE_URL from "./rogue.jpg";
  import SHARK_URL from "./shark.jpg";
  import SHIP_URL from "./ship.jpg";
  import SINGING_URL from "./singing.jpg";
  import SLAM_URL from "./slam.jpg";
  import SOURCERER_URL from "./sourcerer.jpg";
  import STACK_URL from "./stack.jpg";
  import SWAN_URL from "./swan.jpg";
  import TALE_URL from "./tale.jpg";
  import TOOTHBRUSH_URL from "./toothbrush.jpg";
  import TREASURE_URL from "./treasure.jpg";
  import TROPHY_URL from "./trophy.jpg";
  import TRUCKOSAURUS_URL from "./truckosaurus.jpg";
  import TUBS_URL from "./tubs.jpg";
  import TURRET_URL from "./turret.jpg";
  import TWIGBLIGHT_URL from "./twigblight.jpg";
  import UNICORN_URL from "./unicorn.jpg";
  import WEREWOLF_URL from "./werewolf.jpg";
  import WIZARD_URL from "./wizard.jpg";

  const IMAGES = [
    DND_URL,

    TREASURE_URL,
    JURASSIC_PUNK_URL,
    GRAMOPHONE_URL,
    SHIP_URL,
    KRAKEN_URL,
    CAKE_URL,

    EMU_URL,

    BALLOON_URL,
    ROBOT_URL,
    ARCADE_URL,
    GREAT_WHITE_URL,

    KANGAROOS_URL,

    PACHY_URL,
    PIANO_URL,
    FEATHERS_URL,
    BINGE_URL,
    BISCUITS_URL,
    BONE_URL,
    BOX_URL,
    BUG_URL,
    CAT_BURGLAR_URL,
    CLASSIC_URL,
    MONKEY_URL,
    COOKIES_URL,
    CRAB_URL,
    INK_URL,

    JELLYFISH_URL,

    PYTHON_URL,
    SINGING_URL,
    BIN_CHICKENS_URL,
    TOOTHBRUSH_URL,
    DIVER_URL,
    DM_URL,

    DROPBEAR_URL,

    DRAGON_URL,
    DWARF_URL,
    FATCAT_URL,
    FENCER_URL,
    FLIGHTLESS_URL,
    FROG_URL,
    BARD_URL,

    GIFT_URL,

    FULL_STACK_URL,
    GENIE_URL,
    GROWTH_URL,
    GRUNT_URL,
    BANJO_URL,
    HUNTSMAN_URL,
    HYDRA_URL,
    HYENA_URL,
    KITTY_URL,
    KOOKABURRA_URL,
    MAP_URL,
    ODYSSEY_URL,
    PHONE_URL,
    PIZZA_URL,
    POISON_URL,
    POSSUM_URL,
    RITOS_URL,

    WEREWOLF_URL,

    ROGUE_URL,
    SHARK_URL,
    SLAM_URL,
    SOURCERER_URL,
    STACK_URL,
    SWAN_URL,
    TALE_URL,
    TROPHY_URL,
    TRUCKOSAURUS_URL,
    TUBS_URL,
    TURRET_URL,
    TWIGBLIGHT_URL,
    UNICORN_URL,
    WIZARD_URL
  ];

  const BIG_IMAGES = [DND_URL, EMU_URL, KANGAROOS_URL, JELLYFISH_URL, DROPBEAR_URL, GIFT_URL, WEREWOLF_URL];
</script>

<Meta path="/paintings" title="Paintings by Nathan Hoad" description="A selection of works produced by Nathan Hoad" imageUrl={SHARE_URL} />

<main>
  <header>
    <a href="/">
      <img src={SELF_PORTRAIT_URL} alt="" width={512} height={512} />
    </a>
    <h1>Paintings <i>by Nathan Hoad</i></h1>
  </header>

  <section>
    <h2>"365"</h2>
    <p>
      A selection of works completed as part of my <i>"One Painting Every Day for a Year"</i> project. All paintings are watercolour on paper
      and are presented in no particular order.
    </p>
    <ul>
      {#each IMAGES as image, index}
        <li class={BIG_IMAGES.includes(image ?? "") ? "big" : ""}>
          <img src={image} alt="" width="1024" height="1024" class="appear" style:animation-delay={`${index < 9 ? index * 0.1 : 0.9}s`} />
        </li>
      {/each}
    </ul>
  </section>
</main>

<Footer />

<style>
  main {
    max-width: 1280px;
    margin: auto;
  }

  header {
    padding: 3rem;
  }

  header img {
    display: block;
    margin: auto;
    max-width: 300px;
    height: auto;
  }

  h1 {
    text-align: center;
    font-family: var(--font-serif);
    font-size: 2.2rem;
    font-weight: normal;
  }

  h2 {
    text-align: center;
    font-family: var(--font-sans);
    font-size: 1.5rem;
    font-weight: bold;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
    font-family: var(--font-sans);
    max-width: 600px;
    margin: auto;
  }

  ul {
    list-style: none;
    margin: 2rem 0;
    padding: 0;
    display: grid;
    row-gap: 0.5rem;
    column-gap: 0.5rem;
    grid-template-columns: 1fr 1fr 1fr;
  }

  li.big {
    grid-column: span 2;
    grid-row: span 2;
  }

  ul img {
    max-width: 100%;
    height: 100%;
  }

  .appear {
    opacity: 0;
    transform: translateY(100px);
    animation: appear 0.8s ease forwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: translateY(100px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media screen and (max-width: 700px) {
    h1 i {
      display: block;
    }

    ul {
      display: block;
    }
  }
</style>
