<script lang="ts">
  import articles from "$lib/articles.json";

  function formatDate(date: string): string {
    const [year, month] = date.split("-").map(d => parseInt(d, 10));
    const MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${MONTHS[month - 1]} ${year}`;
  }

</script>

<ul>
  {#each articles as article}
    <li>
      <a href={article.path}>{article.title}</a>
      <span>{formatDate(article.publishedAt)}</span>
    </li>
  {/each}
</ul>

<style>
   ul {
    list-style: none;
    padding: 1rem 0 0 0;
    margin: 0;
  }

  li {
    margin-bottom: 1.8rem;
  }

  a {
    color: #222;
    text-decoration: none;
    display: block;
    font-family: var(--font-sans);
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.4rem;
  }

  a:hover {
    text-decoration: underline;
  }

  span {
    font-size: 1.1rem;
    color: #757575;
    font-family: var(--font-sans);
  }
</style>