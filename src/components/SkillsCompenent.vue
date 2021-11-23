<template>
<b-row class="justify-content-center">
   <Title tilte='Compétences' class="text-center"/>
   <b-row s="12" class="m-2">
     <h2>Compétences Backend</h2>
        <b-col s="5" :key="index" v-for="(technology,index) in HardSKill.Backend"
        deck class="text-center hardSkills  justify-content-between flex-wrap m-2">
        <h3>{{technology.name}} </h3>
        <p><Icon :icon="technology.image" class="icon"/></p>
        </b-col>
    </b-row>
     <b-row s="12" class="m-2">
     <h2>Compétences Frontend</h2>
        <b-col s="5" :key="index" v-for="(technology,index) in HardSKill.Frontend"
        deck class="text-center hardSkills  justify-content-between flex-wrap m-2">
        <h3>{{technology.name}} </h3>
        <p><Icon :icon="technology.image" class="icon"/></p>
        </b-col>
    </b-row>
      <b-row s="12" class="m-2" >
     <h2>Compétences Maquettage</h2>
        <b-col s="5"  :key="index" v-for="(technology,index) in HardSKill.Maquettage"
        deck class="text-center hardSkills justify-content-between flex-wrap m-2">
        <h3>{{technology.name}} </h3>
        <p><Icon :icon="technology.image" class="icon"/></p>
        </b-col>
    </b-row>
     <b-row s="12" class="m-2" >
     <h2>Compétences Transversales</h2>
        <b-col s="5"  :key="index" v-for="(softSkills,index) in dataSoftSKill"
        deck class="text-center hardSkills justify-content-between flex-wrap m-2 p-3">
        <h3>{{softSkills.title}} </h3>
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
        console.log(this.dataHardSKill.Backend);
      // eslint-disable-next-line no-restricted-syntax
      }).catch((err) => {
        console.log(err);
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
        .catch((err) => { console.log(err); });
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
.container{
   @include paddingPages;
 }
h3{
  font-size:$textSize;
  font-weight:600;
  opacity: 0.5;
}
.hardSkills{
  background-color:$colorPrimary;
  // box-shadow: 0px 7px 4px rgba(236, 80, 113, 0.26);
}
.icon{
   @include iconStyle;
}
h2{
  font-size:$textSize;
  font-weight:600;
}
</style>
