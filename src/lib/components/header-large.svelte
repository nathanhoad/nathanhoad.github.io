<header>
  <main>
    <h1>Nathan Hoad</h1>

    <aside>
      <a href="https://youtube.com/@nathan_hoad"><img src="/youtube-dark.svg" alt="YouTube" width="40" height="40" /></a>
      <a href="/discord"><img src="/discord-dark.svg" alt="Discord" width="40" height="40" /></a>
      <a href="https://mastodon.social/@nathanhoad"><img src="/mastodon-dark.svg" alt="Mastodon" width="40" height="40" /></a>
      <a href="https://github.com/nathanhoad"><img src="/github-dark.svg" alt="GitHub" width="40" height="40" /></a>
    </aside>
  </main>

  <section>
    <img src="/cliff.gif" alt="" width="1440" height="810" />
  </section>
</header>

<style>
  header {
    background: linear-gradient(180deg, #23195a 0, #8e0075 17%, #ff0049 41%, #fc0 60%);
  }

  main {
    margin: auto;
    max-width: 1280px;
    display: flex;
    padding: 0 5px;
  }
  h1 {
    color: white;
    font-family: "Roboto Slab", serif;
    font-weight: 900;
    font-size: 3rem;
    line-height: 3rem;
    padding: 3rem 0 1rem 0;
    margin: 0;
    flex-grow: 1;
  }
  aside {
    flex-grow: 0;
  }
  aside a {
    display: inline-block;
    padding: 3.9rem 0 0 1rem;
  }

  section {
    background: url(/cliff.png) repeat-x top;
    background-size: auto 100%;
  }

  section img {
    display: block;
    margin: auto;
    max-width: 100%;
    max-height: 75vh;
    width: auto;
    height: auto;
  }

  @media screen and (max-width: 1280px) {
    main {
      max-width: calc(100% - 30px);
    }

    h1 {
      font-size: 2.5rem;
    }

    aside a {
      padding: 3.7rem 0 0 0.5rem;
      transform: scale(0.8);
    }
  }

  @media screen and (max-width: 550px) {
    main {
      display: block;
    }

    h1 {
      text-align: center;
      font-size: 2.5rem;
      padding: 2rem 0 1rem 0;
    }

    aside {
      text-align: center;
    }
    aside a {
      padding: 0.5rem 1rem;
      transform: scale(0.8);
    }

    section {
      overflow: hidden;
    }

    section img {
      max-width: 200%;
      transform: translateX(-18%);
    }
  }
</style>
