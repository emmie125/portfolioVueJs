<template>
<b-row class="justify-content-center container__skill">
   <Title tilte='Compétences' class="text-center"/>
   <b-row class="justify-content-center  text-center">
      <b-col sm="12" lg="5" class="m-3">
      <h2>Backend</h2>
          <b-row sm="12" lg="6"
          class=" justify-content-center  text-center hardSkills p-2">
            <b-col sm="5" lg="3" :key="index" v-for="(technology,index) in HardSKill.Backend"
          deck class="text-center  justify-content-between flex-wrap m-2">
          <h3>{{technology.name}} </h3>
          <p><Icon :icon="technology.image" class="icon"/></p>
          </b-col>
          </b-row>
      </b-col>
      <b-col sm="12" lg="5" class="m-3">
      <h2>Frontend</h2>
          <b-row sm="12" lg="6" class=" justify-content-center  text-center hardSkills p-2">
              <b-col sm="5" lg="3"
              :key="index" v-for="(technology,index) in HardSKill.Frontend"
            deck class="text-center  justify-content-between flex-wrap m-2">
            <h3>{{technology.name}} </h3>
            <p><Icon :icon="technology.image" class="icon"/></p>
            </b-col>
          </b-row>
      </b-col>
    <b-col sm="12" lg="5" class="m-3" >
     <h2>Maquettage</h2>
        <b-row sm="12" lg="6" class=" justify-content-center  text-center hardSkills p-2">
            <b-col sm="5"  :key="index" v-for="(technology,index) in HardSKill.Maquettage"
          deck class="text-center justify-content-between flex-wrap m-2">
          <h3>{{technology.name}} </h3>
          <p><Icon :icon="technology.image" class="icon"/></p>
          </b-col>
        </b-row>
    </b-col>
    <b-col sm="12" lg="5" class="m-3" >
     <h2>Transversales</h2>
        <b-row sm="12" lg="6" class=" justify-content-center  text-center hardSkills p-2">
          <b-row s="5"  :key="index" v-for="(softSkills,index) in dataSoftSKill"
        deck class="text-center justify-content-between flex-wrap m-2 p-3">
        <h3>{{softSkills.title}} </h3>
          </b-row>
        </b-row>
     </b-col>
   </b-row>
</b-row>
</template>
<script>
import axios from 'axios';
import { Icon } from '@iconify/vue2';
import Title from './Title.vue';

export default {
  name: 'Skills',
  components: {
    Icon,
    Title,
  },
  data() {
    return {
      dataHardSKill: {},
      dataSoftSKill: [],
    };
  },
  computed: {
    HardSKill() {
      return this.dataHardSKill;
    },
  },
  methods: {
    async getHardSKill(apiHardSkills) {
      await axios.get(apiHardSkills).then((response) => {
      // eslint-disable-next-line no-restricted-syntax
        for (const skill of response.data) {
          if (this.dataHardSKill[skill.title]) {
            this.dataHardSKill[skill.title].push({
              id: skill.id,
              name: skill.name,
              image: skill.image,
            });
          } else {
            this.$set(this.dataHardSKill, skill.title, {
              id: skill.id,
              name: skill.name,
              image: skill.image,
            });
            this.dataHardSKill[skill.title] = [{
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
    async getSoftSKill(apiSoftSkills) {
      await axios.get(apiSoftSkills)
        .then((response) => {
          // eslint-disable-next-line no-restricted-syntax
          for (const softSkills of response.data.data) {
            this.$set(this.dataSoftSKill, Object.keys(softSkills)[1], {
              title: softSkills.title,
            });
            this.dataSoftSKill.push({ title: softSkills.title });
          }
        })
        .catch(() => {});
    },
  },
  mounted() {
    const apiHardSkills = 'https://portfoliolaravelapi.herokuapp.com/api/hard_skills';
    const apiSoftSkills = 'https://portfoliolaravelapi.herokuapp.com/api/soft_skills';
    this.getHardSKill(apiHardSkills);
    this.getSoftSKill(apiSoftSkills);
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.container__skill{
   @include paddingPages;
 }
h3{
  font-size:$textSize;
  font-weight:600;
  opacity: 0.5;
}
.hardSkills{
  background-color:$colorPrimary;
  border-radius: 10px;
  box-shadow: 0px 7px 4px rgba(236, 80, 113, 0.26);
}
.icon{
   @include iconStyle;
}
h2{
  font-size:$textSize;
  font-weight:600;
}
</style>
