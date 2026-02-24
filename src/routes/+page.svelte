<script lang="ts">
  import { onMount, getContext } from "svelte";
  import {
    SITE_URL,
    SITE_TITLE,
    SITE_TAGLINE,
    SITE_DESCRIPTION,
    SITE_DESCRIPTION_SHORT,
    SITE_DESCRIPTION_OG,
    SITE_OG_IMAGE,
    OG_IMAGE_ALT,
    AUTHOR_NAME,
    AUTHOR_TWITTER_URL,
    TWITTER_HANDLE,
    SITE_KEYWORDS,
    ARTICLE_KEYWORDS,
    ARTICLE_PUBLISHED,
    ARTICLE_MODIFIED,
  } from "$lib/siteconfig";

  const copyLink = getContext<() => void>("copyLink");

  const IMAGES = {
    poor: "https://raw.githubusercontent.com/4shutosh/textovercalls/refs/heads/main/images/conversation_bad.webp",
    good: "https://raw.githubusercontent.com/4shutosh/textovercalls/refs/heads/main/images/conversation_good.webp",
    great: "https://raw.githubusercontent.com/4shutosh/textovercalls/refs/heads/main/images/conversation_great.webp",
  };

  const TWEET_URL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(SITE_DESCRIPTION_SHORT + " — illustrated by Breaking Bad:")}&url=${encodeURIComponent(SITE_URL)}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Stop interrupting. Start writing messages that actually work.",
    description: SITE_DESCRIPTION_OG,
    url: SITE_URL,
    image: { "@type": "ImageObject", url: SITE_OG_IMAGE, width: 1200, height: 630 },
    author: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_TWITTER_URL },
    publisher: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_TWITTER_URL },
    datePublished: ARTICLE_PUBLISHED,
    dateModified: ARTICLE_MODIFIED,
    inLanguage: "en",
    keywords: ARTICLE_KEYWORDS,
    mainEntityOfPage: { "@type": "WebPage", "@id": SITE_URL },
    about: { "@type": "Thing", name: "Asynchronous Communication" },
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "The Async Message Checklist — How to Write a Message Worth Sending",
    description: "Five checks to run before sending an async message instead of calling.",
    url: `${SITE_URL}/#checklist`,
    step: [
      { "@type": "HowToStep", position: 1, name: "State what you need and why it matters", text: "My first sentence says what I need and why it matters." },
      { "@type": "HowToStep", position: 2, name: "Make it self-contained", text: "They can reply without asking me anything back." },
      { "@type": "HowToStep", position: 3, name: "Only claim urgency if it's real", text: 'If I wrote "urgent" — it actually is.' },
      { "@type": "HowToStep", position: 4, name: "Propose a recommendation or next steps", text: "I've made a recommendation or proposed next steps." },
      { "@type": "HowToStep", position: 5, name: "Read it as the recipient", text: "I've re-read this message once as if I were the recipient." },
    ],
  };

  const checklistItems = [
	"My first sentence says what I need and why it matters.",
	"They can reply without asking me anything back.",
	"If I wrote \"urgent\" — it actually is.",
	"I've made a recommendation or proposed next steps.",
	"I've re-read this message once as if I were the recipient.",
  ];

  let checked = $state<boolean[]>(checklistItems.map(() => false));
  let resultCall = $state(false);
  let resultText = $state(false);

  function toggleCheck(i: number) {
    checked = checked.map((v, j) => (j === i ? !v : v));
  }

  $effect(() => {
    const count = checked.filter(Boolean).length;
    const total = checklistItems.length;
    resultText = count === total;
    resultCall = count > 0 && count < total;
  });

  onMount(() => {
    const els = document.querySelectorAll(".fade-in");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.06 }
    );
    els.forEach((el) => obs.observe(el));
  });
</script>

<svelte:head>
  <title>{SITE_TITLE} — {SITE_TAGLINE}</title>
  <link rel="canonical" href={SITE_URL} />
  <meta name="description" content={SITE_DESCRIPTION} />
  <meta name="keywords" content={SITE_KEYWORDS.join(", ")} />
  <meta name="author" content={AUTHOR_NAME} />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={SITE_URL} />
  <meta property="og:title" content={SITE_TITLE + " — " + SITE_TAGLINE} />
  <meta property="og:description" content={SITE_DESCRIPTION_OG} />
  <meta property="og:image" content={SITE_OG_IMAGE} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:image:alt" content={OG_IMAGE_ALT} />
  <meta property="og:site_name" content={SITE_TITLE} />
  <meta property="og:locale" content="en_US" />
  <meta property="article:author" content={AUTHOR_TWITTER_URL} />
  <meta property="article:published_time" content={ARTICLE_PUBLISHED + "T00:00:00Z"} />
  {#each ARTICLE_KEYWORDS.slice(0, 3) as tag}
    <meta property="article:tag" content={tag} />
  {/each}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content={"@" + TWITTER_HANDLE} />
  <meta name="twitter:creator" content={"@" + TWITTER_HANDLE} />
  <meta name="twitter:title" content={SITE_TITLE + " — " + SITE_TAGLINE} />
  <meta name="twitter:description" content={SITE_DESCRIPTION_SHORT + " — illustrated by Breaking Bad."} />
  <meta name="twitter:image" content={SITE_OG_IMAGE} />
  <meta name="twitter:image:alt" content={OG_IMAGE_ALT} />
  <meta name="theme-color" content="#FAFAF8" media="(prefers-color-scheme: light)" />
  <meta name="theme-color" content="#110f0f" media="(prefers-color-scheme: dark)" />
  <script type="application/ld+json">
    {JSON.stringify(articleSchema)}
  </script>
  <script type="application/ld+json">
    {JSON.stringify(howToSchema)}
  </script>
</svelte:head>

<div class="page">
<section class="hero fade-in">
  <div class="bad-phrases">
    <span class="bad-phrase">Quick call?</span>
    <span class="bad-phrase">Free for a huddle?</span>
    <span class="bad-phrase">Hi, You there?</span>
    <span class="bad-phrase">Can we jump on a call?</span>
    <span class="bad-phrase">Got a sec?</span>
    <span class="bad-phrase">Let's sync up</span>
    <span class="bad-phrase">Can you hop on?</span>
  </div>
  <div class="eyebrow">Async Communication &nbsp;·&nbsp; A field guide</div>
  <h1>Stop interrupting.<br /><i>Start writing</i> messages<br />that actually work.</h1>
  <div class="hero-body">
    <p>Every unexpected call breaks focus. It takes the average person <strong>23 minutes to fully recover</strong> after an interruption and most calls could have been a message.</p>
    <p>Say what you need, why it matters, and how urgent it is — <strong>all in one message.</strong></p>
    <p class="hero-callout">Writing a clear message is a sign of respect. Firing off a call request is a sign of laziness.</p>
    <p>Below: three examples from the cast of Breaking Bad. And yes there is a also a time to <strong>pick up the phone.</strong></p>
    <div class="bb-credit">
      <span>Featuring Heisenberg, Pinkman, Saul &amp; Gustavo · No meth involved</span>
    </div>
  </div>
</section>

<!-- <div class="pull-quote fade-in"> -->
  <!-- <blockquote> -->
    <!-- Writing a clear message is a sign of respect. Firing off a call request is a sign of laziness. -->
    <!-- <cite>— The entire point of this page</cite> -->
  <!-- </blockquote> -->
<!-- </div> -->

<hr class="divider" />

<div class="examples">
<section class="example poor fade-in" id="poor">
  <div class="example-meta">
    <div class="example-label poor">● Poor</div>
    <h2>No context, all noise</h2>
    <p class="verdict">Pinkman pings Heisenberg without any setup — an attempted huddle call out of nowhere, then vague fragments about "that thing." Every message forces a follow-up question. Nothing gets resolved.</p>
    <ul class="verdict-points">
      <li><span class="icon">✕</span>Calls directly without context — forces an interruption before the conversation even begins.</li>
      <li><span class="icon">✕</span>Vague and fragmented — each message requires a follow-up just to understand the last one.</li>
      <li><span class="icon">✕</span>Midway through, Heisenberg still has no idea what the actual problem is.</li>
      <li><span class="icon">✕</span>Tone is reactive and frustrated — making resolution harder, not easier.</li>
    </ul>
  </div>
  <div class="example-img">
    <div class="screenshot-wrap">
      <div class="screenshot-bar poor"></div>
      <img src={IMAGES.poor} alt="Poor async messaging — Pinkman pings without context" />
    </div>
  </div>
</section>

<section class="example good flip fade-in" id="good">
  <div class="example-img">
    <div class="screenshot-wrap">
      <div class="screenshot-bar good"></div>
      <img src={IMAGES.good} alt="Good async messaging — Saul with a clear metaphor" />
    </div>
  </div>
  <div class="example-meta">
    <div class="example-label good">● Good</div>
    <h2>Clear, calm, but slightly needy</h2>
    <p class="verdict">Saul opens with a vivid metaphor that makes the risk instantly understandable. He's concise and proposes a direction — but leans on mild urgency that isn't quite earned.</p>
    <ul class="verdict-points">
      <li><span class="icon">→</span>Opens with a clear metaphor — makes the problem immediately understandable.</li>
      <li><span class="icon">→</span>Concise, highlights the risk, and suggests a creative solution in one message.</li>
      <li><span class="icon">→</span>Tone is calm and pragmatic, easy to respond to thoughtfully.</li>
    </ul>
  </div>
</section>

<section class="example great fade-in" id="great">
  <div class="example-meta">
    <div class="example-label great">● Great</div>
    <h2>Complete, calm, and actionable</h2>
    <p class="verdict">Heisenberg opens by clearly naming the issue and its stakes. He shares all relevant context — causes, risks, two concrete options, and lets Gustavo respond on his own schedule.</p>
    <ul class="verdict-points">
      <li><span class="icon">✓</span>Clearly states the issue and urgency upfront — Gustavo knows what's at stake immediately.</li>
      <li><span class="icon">✓</span>Shares causes, risks, and two concrete options, responder can actually help without asking anything.</li>
      <li><span class="icon">✓</span>Composed and professional. The thread becomes a written record for both parties.</li>
    </ul>
  </div>
  <div class="example-img">
    <div class="screenshot-wrap">
      <div class="screenshot-bar great"></div>
      <img src={IMAGES.great} alt="Great async messaging — Heisenberg briefs Gustavo fully" />
    </div>
  </div>
</section>
</div>

<section class="checklist-section fade-in">
  <div class="checklist-inner">
    <div class="eyebrow">Before you hit send</div>
    <h2>A quick check</h2>
    <p class="sub">Five things worth confirming before sending. If you tick all five, your message is ready. If you can't, rewrite, don't call.</p>

    <div class="checks">
      {#each checklistItems as item, i}
        <div class="check-item" class:checked={checked[i]} onclick={() => toggleCheck(i)} onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggleCheck(i); } }} role="button" tabindex="0">
          <div class="check-box"></div>
          <span class="check-text">{item}</span>
        </div>
      {/each}
    </div>

    <div class="check-result call-anyway" class:show={resultCall}>
      📞 Not quite there. Refine your message or consider a call for this one.
    </div>
    <div class="check-result text-it" class:show={resultText}>
      ✓ Good to send.
    </div>
  </div>
</section>

<section class="call-section fade-in">
  <div class="call-inner">
    <div>
      <div class="eyebrow">The exception</div>
      <h2>Sometimes you <em>should</em> just call.</h2>
      <p class="lead">Async isn't a religion, it's a default. There are situations where a voice call is genuinely the fastest, kindest, or clearest path.</p>
      <p class="lead" style="margin-top:0.9em">Reaching for the phone in the right situation isn't a failure of async discipline. It's wisdom.</p>
    </div>
    <ul class="call-list">
      <li><span class="num">01</span>Strong emotions or sensitive news that could be misread in text.</li>
      <li><span class="num">02</span>More than 3 back-and-forths without resolution, a 5-minute call will resolve it.</li>
      <li><span class="num">03</span>A genuine emergency where minutes matter, not hours.</li>
      <li><span class="num">04</span>Real-time brainstorming where ideas build rapidly on each other.</li>
      <li><span class="num">05</span>The other person has said they prefer calls for this kind of thing — respect that.</li>
      <li><span class="num">06</span>Onboarding someone where a live walkthrough saves hours.</li>
    </ul>
  </div>
</section>

<div class="share-strip fade-in">
  <div class="share-strip-text">
    <h3>Know someone who needs to read this?</h3>
    <p>Send it to your team. Paste it in Slack profile. Forward it to that one colleague.</p>
  </div>
  <div class="share-actions">
    <button type="button" class="share-cta primary" onclick={() => copyLink?.()}>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="3" r="1.5"/><circle cx="4" cy="8" r="1.5"/><circle cx="12" cy="13" r="1.5"/>
        <line x1="5.4" y1="7.1" x2="10.6" y2="4"/><line x1="5.4" y1="8.9" x2="10.6" y2="12"/>
      </svg>
      Copy link
    </button>
    <a class="share-cta secondary" href={TWEET_URL} target="_blank" rel="noopener">
      <svg viewBox="0 0 16 16" fill="currentColor"><path d="M12.6 1h2.4l-5.2 6 6.1 8H11L7 9.5 2.5 15H.1l5.6-6.4L0 1h5l3.6 5.2L12.6 1zm-.8 12.6h1.3L4.2 2.3H2.8l9 11.3z"/></svg>
      Share on X
    </a>
  </div>
</div>
</div>
