<template>
  <b-container class="bv-example-row" fluid>
  <HomeComponent id="home"/>
  <About id="about"/>
  <Contact id="contact"/>
  <NewsLetter/>
  <Footer/>
</b-container>
</template>

<script>
// @ is an alias to /src
import About from './About.vue';
import Contact from './Contact.vue';
import HomeComponent from '../components/HomeComponent.vue';
import NewsLetter from '../components/NewsLetter.vue';
import Footer from '../components/Footer.vue';

export default {
  name: 'Home',
  components: {
    About,
    HomeComponent,
    Contact,
    NewsLetter,
    Footer,

  },
  data() {
    return {
    };
  },
  methods: {
    scrollMeTo(refName) {
      const element = this.$refs[refName];
      const top = element.offsetTop;

      window.scrollTo(0, top);
    },
  },

};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__home{
   @include paddingPages;
 }
 .container__home__presentation{
   margin-top:4rem;
 }
 p{
   align-items: center;
  font-size :4rem;
   color:$colorPolice;
   line-height: 5rem;
   span{
     font-size : 10rem;
     color:$colorSecondary;
   }
 }
  h1{
    font-size :4rem;
   color:$colorPolice;
   margin-bottom:3%;
   font-weight:none !important;
   }
</style>
