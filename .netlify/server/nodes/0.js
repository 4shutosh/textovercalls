

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.I2t34_X5.js","_app/immutable/chunks/disclose-version.BN23dxdS.js","_app/immutable/chunks/runtime.ISyqt5ot.js","_app/immutable/chunks/legacy.DfVMXvvF.js"];
export const stylesheets = ["_app/immutable/assets/0.CndoPDYW.css"];
export const fonts = [];
