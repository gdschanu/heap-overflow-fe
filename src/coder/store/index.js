import { createStore } from "vuex";
import endUser from "./endUser";
import problem from "./problem";
import general from "./general";

export default createStore({
	namespaced: true,
	modules: {
		endUser,
		problem,
		general,
	},
});
