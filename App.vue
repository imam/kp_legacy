<template>	
	<div class="container">	
		<Navbar></Navbar>	
		<router-view></router-view>
	</div>
</template>

<script>
	import Vue from 'vue'
	import axios from 'axios'
	import Navbar from './Navbar.vue'
	import Home from './Home.vue'
	import VueRouter from 'vue-router'
	import Auth from '@okta/okta-vue'

	const router = new VueRouter({
		routes: [
		{path: '/', component: Home},
		{path: '/implicit/callback', component: Auth.handleCallback()}
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
				this.videos = [];
				const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&playlistId=${this.current_day.playlistId}&key=AIzaSyDf8w95QHTSC8UjNUMGefOHteP0R5n-lJY`)

				const videos = data.items.map(video => {
					return {
						title: video.snippet.title,
						link: `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}&list=PLp_AnBPM26vrPG7XxZgMssE4V80uJRhVe`,
						id: video.snippet.resourceId.videoId
					}
				})

				const videoIds = videos.map(video => {
					return video.id
				})

				const urlSafe = encodeURIComponent(videoIds.join(','))

				const {data: videoDetailsData} = await axios
				.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${urlSafe}&key=AIzaSyDf8w95QHTSC8UjNUMGefOHteP0R5n-lJY`)

				const videosWithDuration = videos.map((video, key) =>{
					return {
						...video,
						duration: videoDetailsData.items[key].contentDetails.duration.match(/(-)?P(?:([.,\d]+)Y)?(?:([.,\d]+)M)?(?:([.,\d]+)W)?(?:([.,\d]+)D)?T(?:([.,\d]+)H)?(?:([.,\d]+)M)?(?:([.,\d]+)S)?/)
					}
				})

				console.log(videos, videoIds, urlSafe, videoDetailsData, videosWithDuration)

				window.halo = data
				window.kepo =videosWithDuration	
				this.videos = videosWithDuration;
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
			this.$store.commit('setUser', await this.$auth.getUser());
		},
	}
</script>