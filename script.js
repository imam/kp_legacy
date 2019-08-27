import Vue from 'vue'
import App from './App.vue'
import Auth from '@okta/okta-vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

Vue.use(VueRouter)
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		user: null
	},
	mutations: {
		setUser(state, newUser) {
			state.user = newUser
		},
		removeUser(state) {
			state.user = null
		}
	}
})

Vue.use(Auth, {
	issuer: 'https://dev-459546.okta.com/oauth2/default',
	client_id: '0oa17g5g5nhc3E4wp357',
	redirect_uri: 'http://localhost:1234/implicit/callback',
	scope: 'openid profile email'
})

const app = new Vue({
	...App,
	store
}).$mount(App)

window.$app = app