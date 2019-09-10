<template>
	<div>
		<div class="mt-3" id="widget" ref="widget">
			
		</div>		
	</div>	
</template>

<script>

	import OktaSignIn from '@okta/okta-signin-widget';
	import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';

	export default {
		data () {
			return {
				signIn: {}
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.signIn = new OktaSignIn({
					baseUrl: 'https://dev-459546.okta.com',
					logo: 'https://ok7static.oktacdn.com/fs/bco/1/fs0burga3okKHqdmv356',
					clientId: '0oa17g5g5nhc3E4wp357',
					redirectUri: 'http://localhost:1234/implicit/callback',
					authParams: {
						issuer: 'default',
						responseType: ['id_token','token'],
						display: 'page',
						scopes: ['openid', 'email', 'profile'],
					}
				});
				console.log(vm.signIn)
				vm.signIn.remove();	
				vm.$nextTick(() =>{
					vm.renderSignIn();
				})	
			})
		},
		methods: {
			renderSignIn() {
				this.signIn.renderEl({
					el: this.$refs.widget,
				}, function success(res) {
					if (res.status === 'SUCCESS') {
						console.log('Do something with this sessionToken', res.session.token);
					} else {
				    // The user can be in another authentication state that requires further action.
				    // For more information about these states, see:
				    //   https://github.com/okta/okta-signin-widget#rendereloptions-success-error
				}
			});
			}
		},
		beforeRouteLeave(to, from, next) {
			if(this.signIn.remove){
				console.log(this.signIn.remove)
				this.signIn.remove();
			}
			next()
		}
	}
</script>

<style lang="css" scoped>
</style>