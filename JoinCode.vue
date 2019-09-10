<template>
	<div>
		<div :class="{card: true}">
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
	</div>
</template>

<script>
	export default {

		data () {
			return {
				join_collapse: true,
			}
		}
	}
</script>

<style lang="css" scoped>
</style>