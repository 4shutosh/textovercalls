import { X as fallback, Y as ensure_array_like, Z as bind_props, _ as stringify, R as pop, P as push, $ as copy_payload, a0 as assign_payload, a1 as head, V as store_get, W as unsubscribe_stores } from "../../chunks/index.js";
import { e as escape_html } from "../../chunks/escaping.js";
import { w as writable } from "../../chunks/index2.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean || value === "" && name === "class") return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function html(value) {
  var html2 = String(value ?? "");
  var open = "<!---->";
  return open + html2 + "<!---->";
}
function SelectorText($$payload, $$props) {
  const words = ["poor", "good", "great"];
  let currentIndex = fallback($$props["currentIndex"], 0);
  let isFlipped = fallback($$props["isFlipped"], false);
  const each_array = ensure_array_like(words);
  $$payload.out += `<div class="flex flex-row">Here's how to text in a <!--[-->`;
  for (let i = 0, $$length = each_array.length; i < $$length; i++) {
    let word = each_array[i];
    $$payload.out += `<div${attr("class", `lg:mx-1 cursor-pointer ${stringify(i === currentIndex ? "font-medium" : "font-light")} px-2 rounded-full ${stringify(i === 0 ? "text-red-600" : i === 1 ? "text-orange-600" : i === 2 ? "text-green-600" : "text-gray-600")} ${stringify(i === 0 && currentIndex == i ? "bg-red-100" : i === 1 && currentIndex == i ? "bg-orange-100" : i === 2 && currentIndex == i ? "bg-green-100" : "bg-white")}`)}>${escape_html(word)}</div> `;
    if (i != words.length - 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `/`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> way.</div>`;
  bind_props($$props, { currentIndex, isFlipped });
}
const explanations = {
  bad: `<ul class="list-disc px-2">
<li>Pinkman starts poorly, calling Heisenberg directly without context.</li>
<li>He isn’t concise, doesn’t gather or share all relevant information, and fails to understand the issue.</li>
<li>Midway, Heisenberg remains unclear about the problem and unable to assist.</li>
<li>Tone is frustrated and reactive</li>
</ul>
`,
  good: `<ul class="list-disc px-2">
<li>Saul starts with a clear metaphor, making the problem easy to understand.</li>
<li>He is concise, highlights the risk, and suggests a creative solution.</li>
<li>The tone is calm, pragmatic, and engaging.</li>
</ul>
`,
  great: `<ul class="list-disc px-2">
<li>Heisenberg begins by clearly stating the issue and its urgency, establishing the stakes early.</li>
<li>Shares all the relevant details including causes, risks and proactively proposes two solutions Gus to help him.</li>
<li>The tone is composed and professional.</li>
</ul>`
};
function FlipperImageText($$payload, $$props) {
  push();
  const images = [
    "https://raw.githubusercontent.com/4shutosh/textovercalls/refs/heads/main/images/conversation_bad.webp",
    "https://raw.githubusercontent.com/4shutosh/textovercalls/refs/heads/main/images/conversation_good.webp",
    "https://raw.githubusercontent.com/4shutosh/textovercalls/refs/heads/main/images/conversation_great.webp"
  ];
  let isFlipped = fallback($$props["isFlipped"], false);
  let currentIndex = fallback($$props["currentIndex"], 0);
  $$payload.out += `<div class="relative cursor-pointer lg:cursor-default [perspective:1000px] my-4"><div${attr("class", `relative transition-transform duration-700 [transform-style:preserve-3d] svelte-1az2fcp ${stringify([isFlipped ? "rotate-y-180" : ""].filter(Boolean).join(" "))}`)}><div class="[backface-visibility:hidden]"><div class="relative"><img${attr("src", images[currentIndex])} loading="lazy" alt="Conversation" class="object-cover rounded-lg shadow-lg"> <div class="absolute top-2 right-2 lg:hidden"><svg width="20" height="20" viewBox="0 0 24 24"${attr("class", currentIndex === 0 ? "fill-red-600" : currentIndex === 1 ? "fill-orange-600" : currentIndex === 2 ? "fill-green-600" : "fill-gray-600")} xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V11C12.75 10.5858 12.4142 10.25 12 10.25C11.5858 10.25 11.25 10.5858 11.25 11V17C11.25 17.4142 11.5858 17.75 12 17.75ZM12 7C12.5523 7 13 7.44772 13 8C13 8.55228 12.5523 9 12 9C11.4477 9 11 8.55228 11 8C11 7.44772 11.4477 7 12 7Z"></path></svg></div></div></div> <div${attr("class", `absolute inset-0 rounded-lg shadow-lg p-4 [transform:rotateY(180deg)] [backface-visibility:hidden] ${stringify(currentIndex === 0 ? "bg-red-100" : currentIndex === 1 ? "bg-orange-50" : currentIndex === 2 ? "bg-green-50" : "fill-gray-600")} lg:hidden`)}><div class="flex flex-col h-full font-lato font-light text-md lg:text-xl justify-center items-center space-y-4">`;
  if (currentIndex === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `${html(explanations.bad)}`;
  } else {
    $$payload.out += "<!--[!-->";
    if (currentIndex === 1) {
      $$payload.out += "<!--[-->";
      $$payload.out += `${html(explanations.good)}`;
    } else {
      $$payload.out += "<!--[!-->";
      if (currentIndex === 2) {
        $$payload.out += "<!--[-->";
        $$payload.out += `${html(explanations.great)}`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></div></div></div></div>`;
  bind_props($$props, { isFlipped, currentIndex });
  pop();
}
const SITE_URL = "https://www.textovercalls.com";
const SITE_TITLE = "Text over calls";
const SITE_DESCRIPTION = "Get straight to the point with texts—no need for calls that interrupt your flow.";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let currentIndex = 0;
  let isFlipped = false;
  const isLargeScreen = writable(false);
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    head($$payload2, ($$payload3) => {
      $$payload3.title = `<title>${escape_html(SITE_TITLE)}</title>`;
      $$payload3.out += `<link rel="canonical"${attr("href", SITE_URL)}> <link rel="alternate" type="application/rss+xml"${attr("href", SITE_URL + "/api/rss.xml")}> <meta property="og:url"${attr("content", SITE_URL)}> <meta property="og:type" content="article"> <meta property="og:title"${attr("content", SITE_TITLE)}> <meta name="Description"${attr("content", SITE_DESCRIPTION)}> <meta property="og:description"${attr("content", SITE_DESCRIPTION)}> <meta name="twitter:card" content="summary"> <meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)"> <meta name="theme-color" content="#110f0f" media="(prefers-color-scheme: dark)"> <meta name="twitter:title"${attr("content", SITE_TITLE)}> <meta name="twitter:description"${attr("content", SITE_DESCRIPTION)}> <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"><\/script>`;
    });
    $$payload2.out += `<div class="flex flex-col justify-center items-center max-w-full overflow-x-hidden mx-4"><h1 class="lg:w-3/5 mt-16 w-full text-black font-lato font-medium text-4xl lg:text-6xl">text over calls</h1> <div class="mt-8 lg:w-3/5 text-gray-800 font-lato font-light text-md lg:text-xl flex flex-col"><p class="mt-4">Have you ever been deep in focus, only to be interrupted by an unexpected
      call? It breaks your momentum, wastes time, leaves you distracted, and
      derails your day.</p> <p class="mt-4">Texts are great. Done right, they let you communicate without disrupting
      someone’s work, save time, and boost productivity.</p> <p class="mt-4">Explain what you need, why it matters, and how urgent it is, all in the
      most concise way possible. This way, you respect each other’s time and
      make things easier for everyone.</p></div> <div class="sticky top-0 bg-white w-full text-gray-800 mt-2 lg:mt-10 font-lato font-light text-md lg:text-xl flex justify-center items-center">`;
    SelectorText($$payload2, {
      get currentIndex() {
        return currentIndex;
      },
      set currentIndex($$value) {
        currentIndex = $$value;
        $$settled = false;
      },
      get isFlipped() {
        return isFlipped;
      },
      set isFlipped($$value) {
        isFlipped = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> <div class="lg:w-4/5 w-full flex lg:flex-row my-4"><div class="lg:w-3/5">`;
    FlipperImageText($$payload2, {
      get currentIndex() {
        return currentIndex;
      },
      set currentIndex($$value) {
        currentIndex = $$value;
        $$settled = false;
      },
      get isFlipped() {
        return isFlipped;
      },
      set isFlipped($$value) {
        isFlipped = $$value;
        $$settled = false;
      }
    });
    $$payload2.out += `<!----></div> `;
    if (store_get($$store_subs ??= {}, "$isLargeScreen", isLargeScreen)) {
      $$payload2.out += "<!--[-->";
      $$payload2.out += `<div class="text-gray-800 font-lato font-light lg:w-2/5 text-lg lg:text-xl flex justify-center items-center lg:ml-4">`;
      if (currentIndex === 0) {
        $$payload2.out += "<!--[-->";
        $$payload2.out += `${html(explanations.bad)}`;
      } else {
        $$payload2.out += "<!--[!-->";
        if (currentIndex === 1) {
          $$payload2.out += "<!--[-->";
          $$payload2.out += `${html(explanations.good)}`;
        } else {
          $$payload2.out += "<!--[!-->";
          if (currentIndex === 2) {
            $$payload2.out += "<!--[-->";
            $$payload2.out += `${html(explanations.great)}`;
          } else {
            $$payload2.out += "<!--[!-->";
          }
          $$payload2.out += `<!--]-->`;
        }
        $$payload2.out += `<!--]-->`;
      }
      $$payload2.out += `<!--]--></div>`;
    } else {
      $$payload2.out += "<!--[!-->";
    }
    $$payload2.out += `<!--]--></div> <div class="mt-4 lg:w-3/5 text-gray-800 font-lato font-light text-md lg:text-xl flex flex-col"><p class="mt-4">Calls have their place—urgent matters and real-time collaboration—but not
      every issue demands an interruption.</p> <p class="mt-4">Before scheduling or dialing, ask yourself: can this be solved with a
      simple text or email?</p></div> <hr class="w-full mt-10 bg-gray-700"> <div class="lg:w-3/5 my-2 w-full text-sm flex flex-row gap-4 font-lato font-light italic text-gray-700 items-center justify-center"><a href="https://github.com/4shutosh/textovercalls" class="hover:underline" target="_blank">Source Code</a> <a href="https://x.com/4shutoshSingh" class="hover:underline" target="_blank">Creator</a></div></div>`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
