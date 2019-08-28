<template>	
	<div class="mb-5">	
		<div class="jumbotron mt-3">
			<h1 class="display-4">Clone Product Hunt</h1>
			<p class="lead">Ini adalah situs alpha dari platform kelas "Clone Product Hunt"</p>
			<hr class="my-4">
			<p>Clone ProductHunt merupakan sebuah kelas yang didirikan oleh KelasPendek. Kelas ini berjalan selama +- 2 bulan, dengan tambahan grup 
			Whatsapp untuk konsultasi dan diskusi</p>
		</div>
		<div class="card mt-3" v-if="!$store.state.user">
			<div class="card-header">
				Free Preview
			</div>
			<div class="card-body">
				<div class="row mb-4">
					<div class="col-md-8 offset-md-2">
						<div class="embed-responsive embed-responsive-16by9">
							<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
						</div>
					</div>
				</div>
				<ul class="list-group">
					<li class="list-group-item">Clone Product Hunt Teaser</li>
					<li class="list-group-item">Dapibus ac facilisis in</li>
					<li class="list-group-item">Morbi leo risus</li>
					<li class="list-group-item">Porta ac consectetur ac</li>
					<li class="list-group-item">Vestibulum at eros</li>
				</ul>
			</div>
		</div>
		<button class="btn btn-primary mb-2" @click="join_collapse = !join_collapse" v-if="$store.state.user">Sudah Bergabung?</button>
		<div :class="{card: true, collapse: true, show: !join_collapse}" v-if="$store.state.user">
			<div class="card-header">
				Sudah Bergabung?
			</div>
			<div class="card-body">
				<h5 class="card-title">Kode Pembayaran</h5>
				<p class="card-text">Masukkan Kode Pembayaran Anda Disini Yang Telah Diberikan Melalui Whatsapp, Untuk Mengonfirmasi</p>
				<form>
					<div class="form-group">
						<label for="exampleInputEmail1">Kode Pembayaran</label>
						<input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Kode Pembayaran">
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
				</form>
			</div>
		</div>
		<div class="card mt-3" v-if="$store.state.user">
			<div class="card-header">
				Materi
			</div>
			<div class="card-body">
				<h5 class="card-title">Pilih Hari</h5>
				<p class="card-text">Pilih Hari Pelajaran</p>
				<form>
					<select class="custom-select">
						<option selected>Pilih Hari</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</select>
				</form>
			</div>
		</div>
		<p v-if="selected_day">
			Halo (calon developer)<br><br>

			Yuk kita mulai belajar, DAY {{selected_day}} CLONE PRODUCT HUNT!<br><br>

			Videonya:<br>

			<span v-for="video in videos">
				{{video.title}}	({{video.duration[7] === undefined ? '< 1 Menit' : `> ${video.duration[7]} Menit`}})<br><br>
				<a :href="video.link" target="_blank">{{video.link}}</a><br><br>
			</span>

		</p>
	</div>
</template>

<script>
	export default {
		beforeRouteEnter (to, from, next) {
			next(async vm => {
				vm.$store.commit('setUser', await vm.$auth.getUser());
			})
		},
		data() {
			return {
				join_collapse: true,
				free_preview: [
					{
						title: 'Clone Product Hunt Teaser',
						link: 'vr_fnTs6W5Y'
					}
				]
			}
		},
	}
</script>