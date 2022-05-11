import Vuex from 'vuex';
import Vue from 'vue';
import Notes from "@/store/modules/Notes";


Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		namespaced: true,
		notes: Notes,
	}, /* In this case we could not divide this store into modules but I did for better  readability */
});

export default store;
