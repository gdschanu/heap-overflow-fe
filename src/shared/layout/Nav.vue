<template>
	<div class="flex items-stretch h-screen">
		<div class="relative border-r border-slate-300 dark:border-none dark:bg-slate-900">
			<div class="sticky top-0 w-14 xl:w-44 transition">
				<router-link to="/" class="block mb-3">
					<div class="flex justify-center items-center h-20 gap-3">
						<img
							src="@/shared/assets/img/logo.png"
							alt="logo"
							class="block dark:hidden w-16 p-2"
						>
						<img
							src="@/shared/assets/img/logo_white.png"
							alt="logo"
							class="hide-on-dark w-16 p-2"
						>
						<h5 class="font-medium hide-on-small">Heap Overflow</h5>
					</div>
				</router-link>
				<router-link
					v-for="(route, index) in routeList"
					:to="route.path"
					:key="index"
					class="relative flex items-center py-2 pl-2 mb-2 dark:text-slate-500 dark:hover:text-slate-400 dark:active:text-slate-300 transition"
				>
					<i :class="route.icon" class="mx-3"></i>
					<span class="mx-3 hide-on-small">{{ route.name }}</span>
				</router-link>
			</div>
		</div>
		<div class="flex-auto dark:bg-slate-800 min-w-0">
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const routeList = ref([
	{
		path: "/dashboard",
		name: "Home",
		icon: "fa-solid fa-house",
	},
	{
		path: "/problem",
		name: "Problem",
		icon: "fa-solid fa-computer",
	},
	{
		path: "/contest",
		name: "Contest",
		icon: "fa-brands fa-free-code-camp",
	},
	{
		path: "/discussion",
		name: "Discussion",
		icon: "fa-solid fa-comment",
	},
	{
		path: "/ranking",
		name: "Ranking",
		icon: "fa-solid fa-ranking-star",
	},
	{
		path: "/help",
		name: "Help",
		icon: "fa-solid fa-circle-question",
	},
	{
		path: "/setting",
		name: "Setting",
		icon: "fa-solid fa-gear",
	},
])
</script>

<style lang="scss" scoped>
.router-link-active {
	@apply relative text-slate-900 dark:text-slate-50 hover:dark:text-slate-50 font-bold;
}

.router-link-active::after {
	@apply absolute bg-slate-900 dark:bg-slate-50 left-0 top-1 bottom-1 w-1 rounded-r;
	content: "";
}

.hide-on-small {
	@apply hidden xl:block;
}

.hide-on-dark {
	@apply hidden dark:block;
}
</style>