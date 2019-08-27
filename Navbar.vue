<template>	
	<nav class="navbar navbar-expand-lg navbar-light bg-primary">
		<a class="navbar-brand text-white" href="#">Clone Product Hunt</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav mr-auto">

			</ul>
			<a v-if="!$store.state.user" class="btn btn-danger text-white" @click="$auth.loginRedirect('/')" href="#" role="button">Login</a>
			<span v-if="$store.state.user" class="navbar-text text-white pr-3">Halo, {{$store.state.user.name}}</span>
			<a v-if="$store.state.user" class="btn btn-danger text-white" @click="$store.commit('removeUser'); $auth.logout(); $router.push('/')" href="#" role="button">Logout</a>
		</div>
	</nav>
</template>

<script>	
		export default {

		}
</script>