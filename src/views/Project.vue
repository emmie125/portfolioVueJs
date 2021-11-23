<template>
  <b-row lg="12" class="bv-example-row container" fluid>
 <Title tilte='Projets' class="text-center"/>
 <b-row lg="12" class="" fluid>
   <b-row lg="12" v-for="(projet,index) in dataProjets" :key="index"
   class="text-center flex-wrap container__card" fluid>
     <b-col lg="8" class="text-center ">
       <b-img class="img-fluid "
      center :src="projet.image" alt="Source code">
    </b-img>
   </b-col>
   <b-col lg="4" class="text-center" >
       <h2>
         {{projet.title}}
       </h2>
   </b-col>
   </b-row>
 </b-row>
</b-row>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import Title from '../components/Title.vue';

export default {
  name: 'Project',
  components: {
    Title,
  },
  data() {
    return {
      dataProjets: [],
    };
  },
  methods: {
    async getProject(apiProject) {
      await axios.get(apiProject).then((response) => {
        // eslint-disable-next-line no-restricted-syntax
        for (const projet of response.data.data) {
          this.$set(this.dataProjets, Object.keys(projet)[1], {
            title: projet.title, image: projet.image,
          });
          this.dataProjets.push({ title: projet.title, image: projet.image });
        }
      }).catch(() => { });
    },
  },
  mounted() {
    const apiProject = 'https://portfoliolaravelapi.herokuapp.com/api/projects';
    this.getProject(apiProject);
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 h2{
  font-size:$textSize;
  font-weight:600;
}
.container__card{
  border:1px solid $colorPrimary;
  background-color:$colorPrimary;
  margin: 4% 0% !important;
}
</style>
