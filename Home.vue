<template>	
	<div class="">	
		<div class="jumbotron text-white pt-5 pb-5 mb-0 jarallax" ref="jumbotron" >
			<div class="jumbotron-overlay"></div>
			<div class="container">
				<h1 class="display-4 inner font-weight-bold">{{courses.filter(course=> course.coming_soon !== true).length}} Kelas*, 1 Harga, Akses 1 Tahun</h1>
				<p class="inner">Banyak kelas, satu platform, satu harga, Rp 200.000/Tahun (HARGA PROMO)</p>
				<p>*ditambah {{courses.filter(course=> course.coming_soon === true).length}} kelas coming soon, insya Allah akan terus bertambah</p>
			</div>
		</div>
		<section class="bg-primary py-4 text-white text-center " style="background-image: linear-gradient(to right, #f77062 0%, #fe5196 100%);">
			<div class="container h4">
				<div class="row">
					<div class="col-lg-10 offset-lg-1 font-weight-bold">	
						Penawaran BETA DISCOUNT terbatas 20 ORANG PERTAMA SAJA! AKSES SELAMA BETA + 1 TAHUN SETELAH BETA CUMA RP 200.000 AJA!	RENCANA HARGA NORMAL HINGGA SEHARGA RP 1.200.000/TAHUN!
					</div>
				</div>
			</div>
			<div class="container">
				<div class="row">
					<div class="col-lg-8 offset-lg-2 pt-1" style="line-height: initial;">
						Akses Beta adalah jangka waktu hingga kami telah merilis sejumlah 15 kelas
					</div>
				</div>
			</div>
		</section>
		<div class="container mt-5 pt-5"  v-if="selected_course === null">
			<div class="row" v-if="selected_course === null">
				<div class="col-lg-9 offset-lg-1 col-md-12">
					<h1>Pilih Kelasmu, Satu Kelas, Tiga Kelas, Atau Semuanya, Cuma Rp 200.000</h1>
				</div>
				<div class="col-md-12 col-lg-8 offset-lg-1">
					<p class="mt-3">Seminggu sekali, kamu akan kami berikan 45-60 menit video, kamu akan dihadapkan tantangan untuk belajar bersama teman-teman lainnya, bersama menyatukan tujuan untuk membangun masa depan kamu sebagai web developer. Ingin belajar dari dasar? Sudah paham dunia web development dan ingin lanjut berkembang? Ingin punya teman konsultasi? Disini tempatnya!</p>
				</div>
			</div>
		</div>
		<div class="container mb-5 pb-5"  v-if="selected_course === null">
			<div class="row my-3" v-if="selected_course === null">
				<div class="col-lg-9 offset-lg-1 col-md-12">	
					
					<div class="row text-center mt-md-3">
						<div class="col-md-4 mt-3 col-6" v-for="(course, key) in courses"><button  style="min-height: 90px" :class="['btn-block btn btn-lg ', course.coming_soon ? 'btn-danger' : 'btn-success']" @click="course.coming_soon ? null : selected_course= key">{{course.title + (course.coming_soon ? ' (Coming Soon)' : '')}}</button></div>
					</div>
				</div>
			</div>
		</div>
		<div class="container my-5 py-5"  v-if="selected_course !== null">
			<div class="row my-3">
				<div class="col-lg-9 offset-lg-1 col-md-12">	
					<button class="btn btn-primary mb-4" @click="selected_course = null">Kembali ke daftar kursus</button>
					<h1>{{courses[selected_course].title}}</h1>
					<div style="line-height: initial;" class="mt-4" v-html="courses[selected_course].markdown">	</div>
					<h4>Dengan bergabung dengan kelas ini, kamu akan mendapatkan</h4>
					<div class="row mt-4">
						<div class="col-lg-4">
							<h5>Sertifikat</h5>
						</div>
						<div class="col-lg-4">
							<h5>Bergabung Di Grup Whatsapp Kami</h5>
						</div>
						<div class="col-lg-4">
							<h5>Free Webinar</h5>
						</div>
					</div>
					<button class="btn btn-block btn-danger mt-5 mb-5 btn-lg text-uppercase font-weight-bold">Gabung Yuk!</button>
					<h3 class="mb-3">Free Preview</h3>
					<Player playlist="PLp_AnBPM26vqDm4ICVQpVf0jLBpGpMr2w"></Player>
					<button class="btn btn-block btn-danger mt-5 btn-lg  text-uppercase font-weight-bold">Gabung Yuk!</button>
				</div>
			</div>
		</div>
		<section class="bg-info text-white py-3" style="background-image: linear-gradient(to right, #4facfe 0%, #00f2fe 100%);">
			<div class="container my-5 py-5">	
				<h1>Fitur Belajar Di KelasPendek</h1>
				<div class="mt-5">
					<div class="row">	
						<div class="col-md-4 mt-3 col-12">
							<h3>Grup Whatsapp</h3>
							<p>Untuk memfalisitasi kamu belajar, kamu akan bergabung dengan grup Whatsapp kami dimana kamu bisa bertanya beragam macam yang kamu butuhkan!</p>
						</div>
						<div class="col-md-4 mt-3 col-12">
							<h3>Webinar</h3>
							<p>Ada webinar gratis khusus peserta loh! Jadi disana kamu bisa tuh tanya-tanya lagi, dan nambah ilmu baru diluar dari kelas yang kamu tengah pelajari sekarang!</p>
						</div>
						<div class="col-md-4 mt-3 col-12">
							<h3>Sertifikat</h3>
							<p>Semua kelas bersertifikat! Kamu bisa tunjukkan kelas sertifikat kelulusan kamu ke perusahaan yang kamu minati!</p>
						</div>
					</div>
				</div>
				<div class="mt-2">
					<div class="row">
						<div class="col-md-4 mt-3 col-12">	
							<h3>Fast Paced</h3>
							<p>Kita akan belajar dengan cepat! Tanpa basa-basi, tanpa teori yang panjang, kamu akan melihat terus kode yang kami ketik, tanpa melihat presentasi powerpoint yang membosankan!</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="text-white text-center py-3" style="background-image: linear-gradient(to right, #30cfd0 0%, #330867 50%);">
			<div class="container my-5 py-5">
				<div class="row">
					<div class="col-12">
						<h1>Indonesian Web Development Workforce Go-to</h1>
					</div>
					<div class="col-lg-8 offset-lg-2 col-md-12">
						<p class="mt-3">KelasPendek, ingin menjadi kampus untuk para developer, entah pemula maupun advanced, untuk belajar dan menjadi web developer berkualitas di Indonesia. Dengan berfokus kepada skill yang banyak dipakai oleh perusahaan di Indonesia, kami optimis dapat membantu banyak web developer dalam mengarungi karirnya</p>
						<p>Video-video kami berdurasi pendek, berfokus kepada praktik, kamu tidak akan menemukan presentasi yang membosankan. Kita fokus kepada membangun karir kamu kedepan, dan menjadi developer yang lebih baik!</p>
					</div>
				</div>
			</div>	
		</section>
		
		<JoinCode class="container" v-if="$store.state.user && !$store.state.isUserPremium"></JoinCode>
		<div class="card mt-3 container" v-if="$store.state.user && $store.state.isUserPremium">
			<div class="card-header">
				Materi
			</div>
			<div class="card-body">
				<h5 class="card-title">Pilih Hari</h5>
				<p class="card-text">Pilih Hari Pelajaran</p>
				<form>
					<select class="custom-select" v-model="selected_day">
						<option :value="null">Pilih Hari</option>
						<option v-for="(day, key) in days" :value="key">Hari ke {{day.day}}</option>
					</select>
				</form>
				<Player class="mt-3" v-if="selected_day !== null" :playlist="selected_playlistId"></Player>
			</div>
		</div>
	</div>
</template>

<style scoped="">

.jumbotron{
	background-image: url(https://ik.imagekit.io/kelaspendek/tr:w-1280,bl-5,pr-true/gia-oris-_uM5_nG2ssc-unsplash_qc_qdpJYp.jpg);
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	border-radius: 0;
	position: relative;
	padding: 10em !important;
}

.jumbotron > .container > .inner {
	z-index: 1;
	position: relative;
}

.jumbotron-overlay{
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-color: rgba(50,50,50,.25);
}

</style>

<script>
	import Player from './Player.vue'
	import JoinCode from './JoinCode.vue'
	import Axios from 'axios'
	import {jarallax} from 'jarallax'
	import htmlcssbootstrap from './htmlcssbootstrap.md'
	import javascript from './javascript.md'
	import jquery from './jquery.md'
	import php from './php.md'
	import laravel from './laravel.md'
	import vue from './vue.md'
	import reactjs from './reactjs.md'

	export default {
		beforeRouteEnter (to, from, next) {
			next(async vm => {
				if(vm.$auth.isAuthenticated()){
					vm.$store.commit('setUser', await vm.$auth.getUser());
				}
			})
		},
		data() {
			const coming_soon = true;
			return {
				free_preview: [
				{
					title: 'Clone Product Hunt Teaser',
					link: 'vr_fnTs6W5Y'
				}
				],
				days: [{playlistId: null, title: null}],
				selected_day:  null,
				courses: [
				{title: 'Clone Product Hunt'},
				{title: 'HTML, CSS, Bootstrap', markdown: htmlcssbootstrap},
				{title: 'Vue.js', markdown: vue},
				{title: 'Javascript ES6'},
				{title: 'Node.js'},
				{title: 'React.js', markdown: reactjs},
				// {title: 'Command Line'},
				{title: 'Git dan Github'},
				{title: 'Parcel', coming_soon},
				{title: 'Webpack', coming_soon},
				{title: 'Laravel', markdown: laravel, coming_soon},
				{title: 'PHP', markdown: php, coming_soon},
				{title: 'Javascript', markdown: javascript, coming_soon},
				{title: 'jQuery', markdown: jquery, coming_soon},
				{title: 'Redux', coming_soon},
				{title: 'React Native', coming_soon},
				{title: 'Typescript', coming_soon},
				],
				selected_course: null
			}
		},
		components: {
			Player,
			JoinCode
		},
		async mounted() {
			if(await this.$auth.isAuthenticated()){
				try{
					const {data} = await Axios.get('http://localhost:3000/v2?access_token=' + await this.$auth.getAccessToken())
					this.days = data;


					if(data.length > 0){
						this.$store.commit('setUserPremium');
					}
				} catch (e) {
					console.error(e)
				}
			}
			jarallax(this.$refs.jumbotron, {speed: 0.5})
		},
		computed: {
			selected_playlistId() {
				console.log(this.days[this.selected_day])
				if(!this.days[this.selected_day]){
					return null;
				}
				return this.days[this.selected_day].playlistId;
			},
			course_grids() {
				let course_grid = [];
				this.courses.map((course, key)=> {
					const grid = Math.floor(key / 3)
					const key_in_grid = key % 3
					if(course_grid[grid] == undefined){
						course_grid[grid] = []
					}
					course_grid[grid][key_in_grid] = course
				})
				return course_grid;
			}
		}
	}
</script>