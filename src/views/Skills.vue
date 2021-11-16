<template>
  <b-container class="bv-example-row" fluid>
    <Project id="project"/>
  <NewsLetter/>
  <Footer/>
</b-container>
</template>

<script>
// @ is an alias to /src

import NewsLetter from '../components/NewsLetter.vue';
import Footer from '../components/Footer.vue';
import Project from './Project.vue';

export default {
  name: 'Skills',
  components: {
    NewsLetter,
    Footer,
    Project,

  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__home{
   @include paddingPages;
 }
</style>
