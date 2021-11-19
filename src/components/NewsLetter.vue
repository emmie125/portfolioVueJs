<template>
    <b-row lg="12" class="container__newsletter">
    <b-row  lg="12" class="text-center">
    <Title tilte='Partage des compétences grâce à la newsletter' class="title-color"/>
    </b-row>
      <b-row  lg="12" class="text-center">
     <b-form-input v-model="text"  class="p-3"
     placeholder="Entrer votre adresse mail"></b-form-input>
    </b-row>
      <b-row  lg="12" class="text-center p-3">
    <div><Button class="btn" text="S'enregister"/></div>
    </b-row>
  </b-row>
</template>
<script>
// @ is an alias to /src
import Title from './Title.vue';
import Button from './ButtonPrimary.vue';

export default ({
  name: 'NewsLetter',
  components: {
    Title,
    Button,
  },
  data() {
    return {
      text: '',
    };
  },
});
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .container__newsletter{
   @include paddingPages;
    background-size: cover;
      background-image: linear-gradient( to bottom,
        rgba(236, 0, 31, 0.811) 0%,
        rgba(236, 0, 33, 0.869922969187675) 25%,
        rgba(236, 0, 33, 0.869922969187675) 50%,
        rgba(236, 0, 33, 0.8) 100%
      ),
      url("/images/christina-wocintechchat-com-f6wB7D_xISY-unsplash.jpg");
   background-repeat: no-repeat;
   background-position: center center;
 }
 .title-color{
     color:white !important;
 }
 .btn{
   margin-top: 1%;
 }

</style>
