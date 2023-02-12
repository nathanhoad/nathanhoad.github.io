<article>
  <slot />
</article>

<style>
  article {
    margin-bottom: 6rem;
  }

  article :global(header) {
    margin: 4rem 0 3rem 0;
    position: relative;
    padding: 3rem;
  }
  article :global(header::after) {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 200px;
    border-bottom: 2px solid #ddd;
  }

  article :global(header h1) {
    font-family: var(--font-sans);
    text-align: center;
    font-size: 2.4rem;
    line-height: 3rem;
    max-width: 960px;
    margin: 0 auto 2rem auto;
  }

  article :global(header aside) {
    font-family: var(--font-sans);
    font-size: 1.2rem;
    line-height: 1.6rem;
    color: #757575;
    text-align: center;
  }

  article :global(h2) {
    font-family: var(--font-sans);
    font-size: 1.6rem;
    line-height: 2.2rem;
    margin: 3rem auto 2rem auto;
    max-width: 700px;
  }

  article :global(p),
  article :global(ol),
  article :global(ul) {
    margin: 1rem auto 1.5rem auto;
    max-width: 700px;
    font-family: var(--font-serif);
    font-size: 1.3rem;
    line-height: 2.2rem;
    color: #333;
  }

  article :global(img) {
    max-width: 100%;
    width: auto;
    height: auto;
  }

  article :global(video) {
    max-width: 100%;
    width: auto;
    height: auto;
  }

  article :global(a) {
    color: #333;
  }

  article :global(p code) {
    background: rgba(255, 208, 0, 0.2);
    padding: 0.2rem 0.4rem;
    color: black;
    border-radius: 3px;
    font-family: "Courier New", Courier, monospace;
    font-size: 1.15rem;
    font-weight: bold;
  }

  article > :global(figure) {
    margin: 3rem auto;
    max-width: 1280px;
  }

  article :global(figure a[href^="https://youtu"]::after)
  {
    content: url(/youtube-play.svg);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  article :global(figure figcaption) {
    font-family: var(--font-sans);
    font-size: 0.8rem;
    line-height: 1.4rem;
    color: #555;
  }

  article > :global(aside) {
    max-width: 700px;
    margin: 0 auto;
  }
  article :global(aside > figure) {
    margin: 1rem 0;
    position: relative;
  }
  article :global(aside.left > figure) {
    margin: 1rem 2rem 1rem -130px;
    float: left;
    max-width: 350px;
  }
  article :global(aside.right > figure) {
    margin: 1rem -130px 1rem 2rem;
    float: right;
    max-width: 350px;
  }

  article :global(figure blockquote) {
    font-size: 1.4rem;
    line-height: 2rem;
    font-family: var(--font-serif);
    text-align: center;
    font-style: italic;
    max-width: 600px;
    margin: 1rem auto 0.5rem auto;
    position: relative;
    color: black;
  }

  article :global(figure blockquote::before) {
    content: "";
    background: rgba(255, 208, 0, 0.1);
    border-right: 3px solid rgba(255, 208, 0, 0.05);
    width: 105%;
    height: 80%;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform-origin: top right;
    transform: rotate(0.7deg) translate(-50%, -50%);
  }
  article :global(figure blockquote::after) {
    content: "";
    background: rgba(255, 208, 0, 0.1);
    border-right: 3px solid rgba(255, 208, 0, 0.05);
    width: 105%;
    height: 80%;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform-origin: top right;
    transform: rotate(-1deg) translate(-50%, -50%) scaleX(1.02);
  }

  article :global(figure blockquote + figcaption) {
    max-width: 600px;
    margin: auto;
    text-align: right;
    font-size: 1rem;
    font-family: var(--font-sans);
    color: #999;
  }

  article > :global(ol),
  article > :global(ul) {
    padding-left: 5rem;
  }
  article > :global(ol li),
  article > :global(ul li) {
    margin-bottom: 1rem;
  }

  article :global(p em) {
    position: relative;
  }
  article :global(p em::before) {
    content: "";
    background: rgba(255, 208, 0, 0.2);
    border-left: 3px solid rgba(255, 208, 0, 0.1);
    box-shadow: 0 0 2px rgba(255, 208, 0, 0.4);
    width: 100%;
    height: 120%;
    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform: rotate(-0.5deg) translate(-50%, -55%);
  }
  article :global(li > p:first-of-type > em) {
    display: inline-block;
    vertical-align: top;
  }
  article :global(li > p:first-of-type > em::before) {
    width: calc(100% + 70px);
    transform: rotate(-0.5deg) translate(-52%, -55%);
  }

  @media screen and (max-width: 960px) {
    article :global(aside.left figure) {
      margin: 1rem 2rem 1rem 0;
    }
    article :global(aside.right figure) {
      margin: 1rem 0 1rem 2rem;
    }
  }

  @media screen and (max-width: 700px) {
    article :global(header) {
      margin: 6rem 0 2rem 0;
      padding: 0 15px 3rem 15px;
    }

    article :global(h2) {
      max-width: calc(100% - 30px);
    }

    article :global(p),
    article :global(ol),
    article :global(ul) {
      max-width: calc(100% - 30px);
    }

    article > :global(figure) {
      max-width: 100%;
    }

    article :global(figure figcaption) {
      padding: 0 15px;
    }

    article > :global(aside) {
      max-width: 100%;
    }

    article :global(aside.left figure),
    article :global(aside.right figure) {
      float: none;
      max-width: 100%;
      margin: 0;
    }

    article :global(figure blockquote) {
      max-width: calc(100% - 30px);
    }

    article > :global(ol),
    article > :global(ul) {
      padding-left: 45px;
    }
  }
</style>
