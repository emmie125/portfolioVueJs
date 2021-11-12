<template>
 <b-row class="container__About">
    <b-row  class="text-center">
    <Title tilte='À propros'/>
  </b-row>
  <b-row class="justify-content-md-center ">
    <b-col cols="7">1 of 3</b-col>
    <b-col cols="5">2 of 3</b-col>
  </b-row>
 </b-row>
</template>
<script>
import Title from '../components/Title.vue';

export default {
  name: 'About',
  components: {
    Title,
  },
};
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__About{
   background-color:$colorPrimary;
    @include paddingPages;
 }
</style>
