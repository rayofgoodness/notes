import Vuex from 'vuex';
import Vue from 'vue';
import Notes from "@/store/modules/Notes";


Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		namespaced: true,
		notes: Notes,
	},
});

export default store;
