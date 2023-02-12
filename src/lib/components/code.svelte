<script lang="ts">
  import Prism from "prismjs";
  import "prismjs/components/prism-gdscript.min";

  export let code: string;
  export let language: "gdscript";

  let html: string;

  $: html = highlight(language, code);

  function highlight(language: string, code: string): string {
    var highlighted = Prism.highlight(code.replace(/^\n/, ""), Prism.languages[language], language);
    // Give control keywords another class so we can target them for styling separately to normal keywords
    ["if", "elif", "else", "for", "foreach", "in", "do", "while", "continue", "break", "return"].forEach((control) => {
      highlighted = highlighted.replace(
        new RegExp(`<span class="token keyword">${control}</span>`, "g"),
        `<span class="token keyword control">${control}</span>`
      );
    });

    return highlighted;
  }
</script>

<pre class={`language-${language}`}><code>{@html html}</code></pre>

<style>
  pre {
    max-width: 1280px;
    margin: 2rem auto;
    padding: 2rem 4rem;
    background: #ddd;
    color: black;
    border-radius: 5px;
    overflow-x: scroll;
    font-family: monospace;
  }

  pre[class*="language-"] {
    font-size: 1.1rem;
    line-height: 1.6rem;
    font-weight: bold;
    background: #292d3e;
    color: #c8cde8;
  }

  pre :global(.class-name),
  pre :global(.namespace) {
    color: #ffcb6b;
  }

  pre :global(.class-name .keyword),
  pre :global(.namespace .keyword) {
    color: #f78c6c;
  }

  pre :global(.comment) {
    color: #676e95;
  }

  pre :global(.variable) {
    color: #c3e883;
  }

  pre :global(.keyword) {
    color: #c792ea;
  }
  pre :global(.keyword.control) {
    color: #89ddff;
  }

  pre :global(.function) {
    color: #82aaff;
  }

  pre :global(.string) {
    color: #c3e883;
  }

  pre :global(.boolean) {
    color: #f78c6c;
  }

  pre :global(.number) {
    color: #f78c6c;
  }

  pre :global(.constant) {
    color: #fff;
  }

  pre :global(.operator),
  pre :global(.punctuation) {
    color: #a6accd;
  }

  @media screen and (max-width: 440px) {
    pre {
      max-width: 100%;
      border-radius: 0;
      padding: 10px 15px;
    }

    pre[class*="language-"] {
      font-size: 1rem;
      line-height: 1.4rem;
    }
  }
</style>
