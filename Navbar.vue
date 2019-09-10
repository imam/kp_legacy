<template>	
	<div>
		<nav class="navbar navbar-expand-lg navbar-dark bg-dark" style="position: fixed; left: 0; right: 0" ref="navbar">
			<div class="container">
				<router-link to="/" class="navbar-brand text-white" >
					<div>KelasPendek <span style="font-size: 9px">Beta</span></div>
				</router-link>
				<button class="navbar-toggler text-white" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">

					</ul>
					<router-link to="/login" v-if="!$store.state.user" class="text-white mr-3" role="button">Login Member</router-link>
					<router-link to="/login" v-if="!$store.state.user" class="btn btn-danger text-white text-uppercase font-weight-bold" role="button">Gabung Yuk!</router-link>
					<span v-if="$store.state.user" class="navbar-text text-white pr-3">Halo, {{$store.state.user.name}}</span>
					<a v-if="$store.state.user" class="btn btn-danger text-white" @click="$store.commit('removeUser'); $auth.logout(); $router.push('/')" href="#" role="button">Logout</a>
				</div>
			</div>

		</nav>
		<div style="width: 100%; height: 77px"></div>
		
	</div>
	
</template>

<style>
.navbar{
	z-index: 1000;
	padding: 16px;
}
</style>

<script>	
	import stickybits from 'stickybits'
	export default {
		mounted() {
		}
	}
</script>