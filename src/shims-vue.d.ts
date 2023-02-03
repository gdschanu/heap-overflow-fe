import { Store } from 'vuex'
import { State } from './store'

/* eslint-disable */
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store<State>
	}
}

// Vuex@4.0.0-beta.1 is missing the typing for `useStore`. See https://github.com/vuejs/vuex/issues/1736
declare module 'vuex' {
	export function useStore(key?: string): Store<State>
}