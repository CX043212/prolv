import Vue from "vue";
import Vuex from "vuex";
import home0 from "./home0";
import hotplay from "./hotplay";
import zbx from "./zbx";
import home from "./home";
Vue.use(Vuex);

let state = {};
let actions = {};
let getters = {};
let mutations = {};

const store = new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules:{
        home0,
		hotplay,
        zbx,
        home
		
    }
})

export default store;