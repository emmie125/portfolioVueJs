<template>
    <b-row lg="12" class="container__newsletter">
    <b-row  lg="12" class="text-center">
    <Title tilte='Partage des compétences grâce à la newsletter' class="title-color"/>
    </b-row>
      <b-row  lg="12" class="text-center">
     <b-form-input v-model="form.email"  class="p-3"
     placeholder="Entrer votre adresse mail"></b-form-input>
    </b-row>
      <b-row  lg="12" class="text-center p-3">
    <div> <b-button squared size="lg" type="submit" variant=""
     @click="onSubmit">S'enregistrer</b-button></div>
    </b-row>
  </b-row>
</template>
<script>
// @ is an alias to /src
import Title from './Title.vue';

export default ({
  name: 'NewsLetter',
  components: {
    Title,
  },
  data() {
    return {
      form: { email: '' },
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      fetch(
        'http://127.0.0.1:8000/api/new_letters/',
        {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        },
      ).then((data) => {
        console.log(data);
      }).catch(() => {
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
    },
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
