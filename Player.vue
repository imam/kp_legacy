<template>
	<div v-if="videos.length > 0 && videos[0].id">
		<div class="row mb-4">
			<div class="col-md-12">
				<div class="embed-responsive embed-responsive-16by9">
					<iframe class="embed-responsive-item" :src="`https://www.youtube.com/embed/${videos[current_video].id}?rel=0&modestbranding=1`" allowfullscreen></iframe>
				</div>
			</div>
		</div>
		<ul class="list-group">
			<a v-for="(video, key) in videos" @click.prevent="current_video = key" href="#" :class="{'list-group-item':true, 'list-group-item-action': true,  active: key == current_video}">{{video.title}} ({{video.duration[7] ?  video.duration[7] : '< 1'}} Menit)</a>
		</ul>
	</div>
</template>

<script>

	import youtubePlaylistVideosGetter from './youtubePlaylistVideosGetter'

	export default {

		data () {
			return {
				current_video: 0,
				videos: [
					{id: null, duration: null, title: null}	
				]
			}
		},
		props: ['playlist'],
		watch: {
			async playlist(newPlaylist) {
				this.current_video = 0
				this.videos = await youtubePlaylistVideosGetter(newPlaylist)
			}
		},
		async mounted() {
			this.videos = await youtubePlaylistVideosGetter(this.playlist)
		}
	}
</script>

<style lang="css" scoped>
</style>