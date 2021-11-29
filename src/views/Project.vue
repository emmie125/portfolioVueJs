<template>
  <b-row lg="12" class="text-center justify-content-center container__projet" fluid>
 <Title tilte='Projets' class="text-center"/>
 <b-row>
    <b-carousel
    lg="12"
    class="text-center justify-content-center container__projet__carousel"
       id="carousel-fade"
      fade
      :interval="10000"
      controls
      indicators
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
       <b-carousel-slide   v-for="(projet,index) in dataProjets" :key="index">
         <template #img>
          <img
            class="d-block img-fluid w-100 h-80 rounded"
            :src="projet.image"
            alt="image slot"
            :key="index"
          >
          <div class="image-overlay"></div>
        </template>
         <h3>{{projet.title}}</h3>
         <b-link target="_blank" href="#" class="btn-link p-2">
           Voir<Icon icon="akar-icons:link-chain" class=""/></b-link>
         </b-carousel-slide>
    </b-carousel>
  </b-row>
</b-row>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';
import { Icon } from '@iconify/vue2';
import Title from '../components/Title.vue';

export default {
  name: 'Project',
  components: {
    Title,
    Icon,
  },
  data() {
    return {
      slide: 0,
      sliding: null,
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
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
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
 .container__projet{
     @include paddingPages;
     position: relative;
 }
 .logoColor{
   @include iconStyle;
 }
 h3{
  font-size:30px;
  font-weight:600;
  color:white;
  }
.image-overlay {
  top:0;
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: black;
  opacity: 0.5;
}
.btn-link{
 margin-left:13px !important;
  background-color: $colorSecondary !important;
    color: $colorPrimary;
    border:3px solid $colorSecondary !important;
    font-size:1rem;
}
</style>
