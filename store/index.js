import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import Auth from './Modules/Auth';
import PopUp from './Modules/PopUp';

export default {
	modules: {
		auth: Auth,
		popUp: PopUp,
	}
}