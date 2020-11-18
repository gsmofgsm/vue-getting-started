import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared';
import { GET_HEROES } from './mutation-types';

Vue.use(Vuex);

const state = {
  heroes: [],
};
const mutations = {
  [GET_HEROES](state, heroes) {
    state.heroes = heroes;
  },
};
const actions = {
  async getHeroesAction({ commit }) {
    // the function input is the context, and we only need commit out of it now
    const heroes = await dataService.getHeroes();
    commit(GET_HEROES, heroes); // first parameter is the mutation
  },
};
const getters = {};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
