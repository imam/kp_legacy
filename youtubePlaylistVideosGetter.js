import axios from 'axios'

export default async (playlistId) =>{

	const {data} = await axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=contentDetails%2Csnippet&playlistId=${playlistId}&key=AIzaSyDf8w95QHTSC8UjNUMGefOHteP0R5n-lJY&maxResults=50`)

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

	return videosWithDuration;
}