import Problem from '@/problem/model/problem'
import { Module } from 'vuex'

export default {
	namespaced: true,
	state: {

		problem: {},
	} as {

		problem: Problem;
	},
	mutations: {

		setProblem(state, problem: Problem) {
			state.problem = problem
		},
	},
	actions: {
		setProblem(state, problem: Problem) {
			state.commit("setProblem", problem)
		},
	},
	modules: {
	}
} as Module<any, any>
