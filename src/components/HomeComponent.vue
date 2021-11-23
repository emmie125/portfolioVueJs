<template>
   <b-row class="flex-wrap-reverse container__home">
    <b-col class="container__home__presentation justify-content-center "
    lg="7" sm="12">
      <p>
        <span>J</span>e suis <br/>
        Emmanuella Mulanga</p>
      <h1>développeuse FullStack</h1>
     <Button class="m-2" name="home"
     v-scroll-to="{
        el: '#about',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }" text='Contactez-moi' />
    </b-col>
    <b-col  lg="5" sm="12">
      <b-img class="img-fluid" center :src="SourceCode" alt="Source code">
    </b-img>
    </b-col>
  </b-row>
</template>
<script>
// @ is an alias to /src
import Button from './ButtonPrimary.vue';
import SourceCode from '../assets/Source_code.gif';

export default {
  name: 'HomeComponent',
  components: {
    Button,
  },
  data() {
    return {
      SourceCode,
    };
  },
  methods: {
    scrollToElements(element) {
      const options = {
        el: element,
        container: 'body',
        easing: 'easy',
        offset: -60,
        duration: 500,
        force: true,
        cancelable: true,
        onStart: false,
        onDone: false,
        onCancel: false,
        x: false,
        y: true,
      };
      return options;
    },
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
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
