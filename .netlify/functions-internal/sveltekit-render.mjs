import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.CaMetXPK.js","app":"_app/immutable/entry/app.D6yXRUws.js","imports":["_app/immutable/entry/start.CaMetXPK.js","_app/immutable/chunks/entry.Bs8GAxRf.js","_app/immutable/chunks/runtime.ISyqt5ot.js","_app/immutable/chunks/index.CRUr1tLu.js","_app/immutable/entry/app.D6yXRUws.js","_app/immutable/chunks/runtime.ISyqt5ot.js","_app/immutable/chunks/store.DmuLvAwB.js","_app/immutable/chunks/disclose-version.BN23dxdS.js","_app/immutable/chunks/index-client.DWanzzI9.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
