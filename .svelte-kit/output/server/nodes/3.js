

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.D5x13dFB.js","_app/immutable/chunks/OQiWxKOX.js","_app/immutable/chunks/DoJK9bg9.js","_app/immutable/chunks/BUy4snMy.js"];
export const stylesheets = ["_app/immutable/assets/3.D7cwjppj.css"];
export const fonts = [];
