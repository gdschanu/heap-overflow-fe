
import { Module } from 'vuex'

type User = {
	coderId: string,
	username: string
}

export default {
	namespaced: true,
	state: {
		user: {},

	} as {
		user: User,

	},
	mutations: {
		setUser(state, user: User) {
			state.user = user
		},

	},
	actions: {
		setUser(state, user: User){
			state.commit('setUser', user)
		},

	},
	modules: {
	}
} as Module<any, any>
