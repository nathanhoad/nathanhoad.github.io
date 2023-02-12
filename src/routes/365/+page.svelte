<script lang="ts">
  import Meta from "$lib/components/meta.svelte";
  import HeaderSimple from "$lib/components/header-simple.svelte";
  import Article from "$lib/components/article.svelte";
  import Footer from "$lib/components/footer.svelte";

  import DOGS_URL from "./dogs-playing-dungeons-and-dragons.jpg";
  import DAY_1_URL from "./day-1.jpg";
  import BIN_CHICKENS_URL from "./bin-chickens.jpg";
  import SELF_PORTRAIT_URL from "./self-portrait.jpg";
</script>

<Meta
  path="/365"
  title="What I Iearned from completing a painting every day for a whole year"
  description="In 2017 I completed a new painting every single day for the whole year and I learnt a few valuable lessons in the process"
  imageUrl={DOGS_URL}
/>

<HeaderSimple />

<Article>
  <header>
    <h1>What I Iearned from completing a painting every day for a whole year</h1>
    <aside>January 2018</aside>
  </header>

  <figure>
    <img src={DOGS_URL} alt="Dogs playing a game of Dungeons & Dragons" width="2000" height="1104" />
    <figcaption>Day 324 - "Dogs playing Dungeons & Dragons</figcaption>
  </figure>

  <p>
    On January 1st, 2017 I decided to start one of those 'project365' challenges where you take a photo or create some piece of art every
    day for a sequential 365 days.
  </p>
  <p>
    <a href="https://lillypiri.com">Lilly Piri</a>, my (now) wife, is an artist and gave me a set of watercolours for Christmas in 2016. At
    the time she was finishing up her own project365 and was the inspiration to put my new paint set to good use.
  </p>

  <aside class="left">
    <figure>
      <img src={DAY_1_URL} alt="Painting of a cat drinking a tea and reading a newspaper" width="1080" height="1080" />
      <figcaption>Day 1 Day 1 - Off to a... start</figcaption>
    </figure>
  </aside>

  <p>
    I'd watched Lilly complete a number of paintings and had a bit of a play around with her watercolour set before so I wasn't going in
    completely unprepared. I don't really remember much about the first painting other than it probably took longer to do than I'd like to
    admit these days. To help with keeping myself accountable (and to timestamp each day) I decided to post each painting to my Instagram
    and to Facebook.
  </p>
  <p>
    It's interesting for me to look back at this first painting and see all of the lining issues and painting mistakes. At the time I
    thought it was pretty good... which leads me to my first point:
  </p>
  <h2>You can't help but get better</h2>

  <p>
    If you exercise a muscle it will get stronger, right? It holds true for your creative muscle. Continuing that metaphor even further: you
    won't see gains on a day to day basis, only on a week to week or month to month basis.
  </p>
  <p>
    It's hard to pin point a day where I felt like I suddenly 'got it' and everything made sense but I certainly felt a vague but
    substantial improvement in my own ability when looking back over hundreds of days. A number of my friends also told me that they could
    see the difference in ability across the life of the project.
  </p>

  <aside>
    <figure>
      <img src={BIN_CHICKENS_URL} alt="Painting of ibises playing in a band" width="1600" height="1560" />
      <figcaption>Day 48 - The first of many ibis paintings.</figcaption>
    </figure>
  </aside>

  <h2>It doesn't matter what you do each day, just that you do it</h2>

  <p>
    Early on I decided it was just a numbers game and I think that made the whole project less stressful. Instead of caring about what I was
    actually painting each day I would just focus on painting something. There are a few exceptions (Dogs playing Dungeons and Dragons being
    one) but most days the idea for the the painting popped into my head within five minutes of sitting down to paint.
  </p>
  <p>
    "Where do your ideas come from?" is often quoted as the most common question asked of creatives. My response was usually "What ideas? I
    just paint random nonsense."
  </p>

  <p>That said, sometimes that random nonsense came from playing Dungeons and Dragons… which brings me to my next point.</p>

  <h2>Playing improv games is a good source of creative inspiration</h2>
  <p>Around 50 or so paintings were directly inspired by the events from a Dungeons and Dragons campaign that I was playing in.</p>
  <p>
    Scenes from our adventures are just so much fun to draw. I feel like having taken inspiration from real life (if you can call it that)
    gave the paintings some personality and helped capture a kind of story in itself.
  </p>

  <h2>People love to watch you work</h2>

  <p>
    People are fascinated by the creative proces - I know I am. Recently, I was shown the GDC YouTube channel and have been obsessed with
    watching some of the greats talk about their process in game development. When you think about it, people just like a good story.
  </p>

  <aside class="right">
    <figure>
      <img src={SELF_PORTRAIT_URL} alt="A self portrait" width="1200" height="1138" />
      <figcaption>Day 11 - A self portrait.</figcaption>
    </figure>
  </aside>

  <p>
    In November of 2017 I had a stall at the Brisbane Etsy Made Local markets where I was selling some of my art as A4 prints. In planning,
    I had hundreds of paintings to choose from but I settled on a few and would just lay them out on the table leaving a bit of room for me
    to do that day's painting.
  </p>
  <p>
    What ended up happening was that people would stop and watch me paint. I noticed my stall was always busiest while I was painting. So I
    kept painting. And people kept coming to watch… and buying things. I guess the takeaway is that the process is sometimes as important to
    people as the finished result.
  </p>
  <p>
    Doing something every day for a whole year is undoubtably challenging but it is definitely a great way to develop a skill. I would
    highly recommend it but I'd also repeat the advice from earlier:
  </p>

  <figure>
    <blockquote>"It doesn't matter what you do, just that you do it."</blockquote>
  </figure>

  <p>Good luck and have fun.</p>
</Article>

<Footer />
