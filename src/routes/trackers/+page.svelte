<script lang="ts">
  import ArticlePage from "$lib/components/article-page.svelte";

  import COOKIES_URL from "./cookies.jpg";
  import SHARE_URL from "./share.jpg";
</script>

<ArticlePage path="/trackers" title="No more trackers" description="This site now loads zero external resources." imageUrl={SHARE_URL}>
  <header>
    <img src={COOKIES_URL} alt="A robot eating cookies" width="800" height="800" />
    <h1>No more trackers</h1>
    <aside>March 2023</aside>
  </header>

  <p>Once built and deployed, this site has no external dependencies. It has no trackers or cookies of any kind.</p>
  <p>
    Over the years I've made an effort to remove Google Analytics and any external embeds like YouTube and Twitter. I never really cared
    about my analytics and for YouTube and Twitter I could just replace them with my own analogues that link to the actual content.
  </p>
  <p>
    For a long time the last holdout was Google Fonts. Browser fonts have come a long way and for the <i>two</i> fonts I was using it didn't
    really make sense to use Google Fonts any more.
  </p>
  <p>So, as of now, no more externally loaded fonts and no more external dependencies of any kind.</p>
  <p>I might be sacrificing some consistency across different platforms but I think it's worth it.</p>
</ArticlePage>

<style>
  header img {
    max-width: 300px;
    width: 100%;
    display: block;
    margin: 0 auto 2rem auto;
  }
</style>