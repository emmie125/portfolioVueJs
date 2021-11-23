<template>
  <b-container class="bv-example-row" fluid>
    <SkillsCompenent id="skill"/>
    <Project id="projet"/>
  <NewsLetter/>
  <Footer/>
</b-container>
</template>

<script>
// @ is an alias to /src

import NewsLetter from '../components/NewsLetter.vue';
import Footer from '../components/Footer.vue';
import Project from '../components/Project.vue';
import SkillsCompenent from '../components/SkillsCompenent.vue';

export default {
  name: 'Skills',
  components: {
    NewsLetter,
    Footer,
    Project,
    SkillsCompenent,

  },
  data() {
    return {
    };
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
</style>
