<header>
  <strong><a href="/">Nathan Hoad</a></strong>

  <aside>
    <a href="https://youtube.com/@nathan_hoad"><img src="/youtube-light.svg" alt="YouTube" width="40" height="40" /></a>
    <a href="/discord"><img src="/discord-light.svg" alt="Discord" width="40" height="40" /></a>
    <a href="https://mastodon.social/@nathanhoad"><img src="/mastodon-light.svg" alt="Mastodon" width="40" height="40" /></a>
    <a href="https://github.com/nathanhoad"><img src="/github-light.svg" alt="GitHub" width="40" height="40" /></a>
  </aside>
</header>

<style>
  header {
    display: flex;
    padding: 1rem 0;
    margin: auto;
    max-width: 1280px;
  }
  strong {
    color: #555;
    font-family: "Roboto Slab", serif;
    font-weight: 900;
    font-size: 1.5rem;
    line-height: 3rem;
    padding: 0;
    margin: 0;
    flex-grow: 1;
  }
  strong a {
    text-decoration: none;
    color: #666;
    background: url(/nathan.png) no-repeat;
    background-size: 48px 48px;
    padding-left: 64px;
    display: inline-block;
  }

  aside {
    flex-grow: 0;
  }
  aside a {
    display: inline-block;
    padding: 0.45rem 0 0 0.6rem;
  }
  aside a img {
    max-width: 2rem;
    opacity: 0.5;
  }

  @media screen and (max-width: 440px) {
    header {
      max-width: calc(100% - 30px);
    }

    strong a {
      padding-left: 0;
      background: none;
    }

    aside a {
      padding: 0.8rem 0 0 0.6rem;
    }
    aside a img {
      max-width: 1.5rem;
    }
  }
</style>
