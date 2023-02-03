import { createStore } from "vuex";
import coderStore from "@/coder/store"
import problemStore from "@/problem/store"
import contestStore from "@/contest/store"
import blogStore from "@/blog/store"

type Alert = {
	isAlert: boolean,
	message: string,
	type: string,
}

export default createStore({
	state: {
		alert: {
			isAlert: false,
			message: '',
			type: ''
		},
		theme: localStorage.getItem('theme')
	},
	mutations: {
		setAlert(state, alert: Alert) {
			state.alert = alert;
		},
		setTheme(state, theme: string) {
			state.theme = theme;
		}
	},
	actions: {
		setAlert(state, alert: Alert) {
			state.commit("setAlert", alert);
		},
		closeAlert(state) {
			state.commit("setAlert", {
				isAlert: false,
				message: state.state.alert.message,
				type: state.state.alert.type,
			});
		},
		setTheme(state, theme: string) {
			state.commit("setTheme", theme);
		}
	},
	modules: {
		coderStore,
		problemStore,
		contestStore,
		blogStore
	},
});
