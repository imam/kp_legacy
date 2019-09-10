<template>	
	<div>	
		<Navbar></Navbar>	
		<router-view></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import Navbar from './Navbar.vue'
	import Home from './Home.vue'
	import Login from './Login.vue'
	import VueRouter from 'vue-router'
	import Auth from '@okta/okta-vue'
	import youtubePlaylistVideosGetter from './youtubePlaylistVideosGetter'

	window.youtubePlaylistVideosGetter = youtubePlaylistVideosGetter

	const router = new VueRouter({
		routes: [
		{path: '/', component: Home},
		{path: '/implicit/callback', component: Auth.handleCallback()},
		{path: '/login', component: Login},
		],
		
		mode: 'history',
	})

	export default {
		el: "#app",
		router,
		components: {
			Navbar
		},
		data: {
			selected_day: null,
			days: [],
			day: 4,
			minutes: 21,
			videos: [
			{
				title: 'Kepo',
				link: 'https://www.youtube.com/watch?v=Y5uFQCZs3dQ&list=PLp_AnBPM26vrPG7XxZgMssE4V80uJRhVe&index=2&t=0s',
				duration: '< 1 Menit'
			}
			],
			code: null,
			code_input: null,
			incorrect: false
		},
		computed: {
			current_day() {
				return this.days.filter(day => {
					return day.day == this.selected_day
				})[0];
			}
		},
		watch: {
			async selected_day() {
				
			},
			async code(code) {
				if(code){
					let backend = 'https://cph-kelaspendek.herokuapp.com'
					if (window.location.hostname === "localhost" || window.location.hostname === "" || window.location.hostname === "127.0.0.1") {
						backend = 'http://localhost:3000'
					}
					const {data} = await axios.get(`${backend}/?code=${this.code}`)
					this.days = data;
					if(data.length == 0 ){
						this.incorrect = true;
					}
				}
			}
		},
		async mounted(){
			if(this.$auth.isAuthenticated()){
				this.$store.commit('setUser', await this.$auth.getUser());
			}
		},
	}
</script>

<style>
	body{
		line-height: 35px;
	}
</style>