<script lang="ts">
  import { setContext } from "svelte";
  import { page } from "$app/stores";
  import {
    SITE_TITLE,
    SITE_DESCRIPTION_SHORT,
    SITE_URL,
    SITE_DESCRIPTION_SCHEMA,
    AUTHOR_NAME,
    AUTHOR_TWITTER_URL,
  } from "$lib/siteconfig";
  import "../tailwind.css";
  import "../textovercalls.css";

  let toastEl: HTMLDivElement | undefined;
  let toastTimeout: ReturnType<typeof setTimeout> | undefined;

  function showToast(msg: string) {
    const el = toastEl;
    if (el) {
      el.textContent = msg;
      el.classList.add("show");
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => el.classList.remove("show"), 2400);
    }
  }

  function isMobileDevice() {
    return (
      /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent) ||
      navigator.maxTouchPoints > 1
    );
  }

  async function copyLink() {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    const title = SITE_TITLE;
    const text = SITE_DESCRIPTION_SHORT;

    const shareData = { title, text, url };
    const canUseShare =
      typeof navigator !== "undefined" &&
      typeof navigator.share === "function" &&
      isMobileDevice() &&
      (typeof navigator.canShare !== "function" || navigator.canShare(shareData));

    if (canUseShare) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error).name === "AbortError") return;
        fallbackCopy(url);
      }
    } else {
      fallbackCopy(url);
    }
  }

  function fallbackCopy(url: string) {
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(url).then(
        () => showToast("Link copied to clipboard ✓"),
        () => legacyCopy(url)
      );
    } else {
      legacyCopy(url);
    }
  }

  function legacyCopy(url: string) {
    try {
      const ta = document.createElement("textarea");
      ta.value = url;
      ta.style.cssText = "position:fixed;top:0;left:0;opacity:0;pointer-events:none;";
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(ta);
      if (ok) {
        showToast("Link copied to clipboard ✓");
      } else {
        showUrlFallback(url);
      }
    } catch {
      showUrlFallback(url);
    }
  }

  function showUrlFallback(url: string) {
    const el = toastEl;
    if (el) {
      el.textContent = url;
      el.classList.add("show", "toast-url");
      clearTimeout(toastTimeout);
      toastTimeout = setTimeout(() => {
        el.classList.remove("show", "toast-url");
      }, 5000);
    }
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_TITLE,
    url: SITE_URL,
    description: SITE_DESCRIPTION_SCHEMA,
    inLanguage: "en",
    publisher: { "@type": "Person", name: AUTHOR_NAME, url: AUTHOR_TWITTER_URL },
  };

  setContext("copyLink", copyLink);
</script>

<svelte:head>
  <script type="application/ld+json">
    {JSON.stringify(websiteSchema)}
  </script>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <link rel="dns-prefetch" href="https://raw.githubusercontent.com" />
  <link rel="preconnect" href="https://raw.githubusercontent.com" crossorigin="anonymous" />
</svelte:head>

<div class="flex flex-col bg-[var(--bg)] min-h-screen">
  <div class="toc-wrap">
  <header class="toc-header">
    <a href="/" class="wordmark">text<span class="over">over</span>calls</a>
    <button type="button" class="share-btn" onclick={copyLink}>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8">
        <circle cx="12" cy="3" r="1.5"/><circle cx="4" cy="8" r="1.5"/><circle cx="12" cy="13" r="1.5"/>
        <line x1="5.4" y1="7.1" x2="10.6" y2="4"/><line x1="5.4" y1="8.9" x2="10.6" y2="12"/>
      </svg>
      <span>Share this</span>
    </button>
  </header>

  <main>
    <slot />
  </main>

  <footer class="toc-footer">
    <a href="/" class="wordmark">text<span class="over">over</span>calls</a>
    <p>A free resource. Made with intent by <a href="https://twitter.com/4shutoshSingh" target="_blank" rel="noopener">4shutosh.</a></p>
  </footer>
  </div>
</div>

<div class="toast" bind:this={toastEl}>Link copied to clipboard</div>
