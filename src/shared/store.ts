import { createStore } from "vuex";
import coderStore from "@/coder/store"
import problemStore from "@/problem/store"
import contestStore from "@/contest/store"
import blogStore from "@/blog/store"

export default createStore({
	modules: {
        coderStore,
        problemStore,
        contestStore,
        blogStore
	},
});
