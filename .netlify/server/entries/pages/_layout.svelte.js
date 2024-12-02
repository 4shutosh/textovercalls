import { S as slot } from "../../chunks/index.js";
function _layout($$payload, $$props) {
  $$payload.out += `<div class="flex flex-col bg-colorSurface w-screen"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div>`;
}
export {
  _layout as default
};
