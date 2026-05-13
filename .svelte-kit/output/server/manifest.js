export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["border.png","favicon.png","film-strip.png","film.jpg","img.jpg","lukashahnart.png","opengraph.png","wavy-line.svg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".svg":"image/svg+xml"},
	_: {
		client: {start:"_app/immutable/entry/start.DDTycjwP.js",app:"_app/immutable/entry/app.D9mIruPS.js",imports:["_app/immutable/entry/start.DDTycjwP.js","_app/immutable/chunks/DCoBoCVw.js","_app/immutable/chunks/DoJK9bg9.js","_app/immutable/chunks/CTyb4Wli.js","_app/immutable/entry/app.D9mIruPS.js","_app/immutable/chunks/DoJK9bg9.js","_app/immutable/chunks/D2xJvL6Q.js","_app/immutable/chunks/OQiWxKOX.js","_app/immutable/chunks/CTyb4Wli.js","_app/immutable/chunks/DsxdIN-g.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js'))
		],
		remotes: {
			'7hyfwf': __memo(() => import('./chunks/remote-7hyfwf.js'))
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
