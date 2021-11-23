import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hard_skills: {},
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    getHardSKill(state) {
      const apiHardSkills = 'https://portfoliolaravelapi.herokuapp.com/api/hard_skills';
      axios.get(apiHardSkills).then((response) => {
      // eslint-disable-next-line no-restricted-syntax
        for (const skill of response.data) {
          if (state.dataHardSKill[skill.title]) {
            state.dataHardSKill[skill.title].push({
              id: skill.id,
              name: skill.name,
              image: skill.image,
            });
          } else {
            state.dataHardSKill[skill.title] = [{
              id: skill.id,
              name: skill.name,
              image: skill.image,
            }];
          }
        }
      // eslint-disable-next-line no-restricted-syntax
      }).catch(() => {
      });
    },
  },
});
