<template>	
	<div class="mb-5">	
		<div class="jumbotron mt-3">
			<h1 class="display-4">Clone Product Hunt</h1>
			<p class="lead">Ini adalah situs alpha dari platform kelas "Clone Product Hunt"</p>
			<hr class="my-4">
		</div>
		<form @submit.prevent="incorrect = false;code = code_input; selected_day = null" v-if="false">
			<input v-model="code_input" type="text" placeholder="Kode">
			<button>Submit</button>
		</form>
		<p v-if="code && days.length == 0 && !incorrect ">Loading data...</p>
		<p v-if="incorrect">Kode Anda Salah</p>
		<select v-model="selected_day" v-if="code && days.length > 0 && !incorrect" id="">
			<option :value="null">Pilih Hari</option>
			<option v-for="day in days" :value="day.day">{{day.day}}</option>
		</select>
		<div class="card" v-if="$store.state.user">
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
	}
</script>