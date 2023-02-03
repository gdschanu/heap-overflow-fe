import { Module } from 'vuex'
import Coder from './coder'

export default {
	namespaced: true,
	state: {
		coder: null,
	} as {
		coder: Coder | null
	},
	mutations: {
		setCoder(state, coder: Coder) {
			state.coder = coder
		},
	},
	actions: {
		setCoder(state, coder: Coder){
			state.commit('setCoder', coder)
		},

	},
	modules: {
	}
} as Module<any, any>
