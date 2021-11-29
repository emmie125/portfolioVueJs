<template>
    <b-row class="container__Contact">
    <b-row  class="text-center">
      <Title tilte='Contact'/>
  </b-row>
  <b-row class="">
    <b-col lg="6" class="">
    <b-form @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Adresse mail:"
        label-for="input-1"
        class="container__Contact-form"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Nom:"
      label-for="input-2"  class="container__Contact-form">
        <b-form-input
          id="input-2"
          v-model="form.username"
          placeholder="Enter name"
          required
        ></b-form-input>
      </b-form-group>
     <b-form-group id="input-group-3" label="Message:"
     label-for="input-3"  class=" container__Contact-form">
    <b-form-textarea
      id="textarea"
      v-model="form.message"
      placeholder="Enter something..."
      rows="3"
      max-rows="6"
        ></b-form-textarea>
      </b-form-group>
      <b-button  size="lg" type="submit" squared class="btn">
        Enregistrer</b-button>
    </b-form>
    </b-col>
    <b-col lg="6">
        <b-img class="img-fluid" center :src=" iconContact " alt="Source code">
        </b-img>
    </b-col>
  </b-row>
 </b-row>
</template>
<script>

import Title from '../components/Title.vue';
import iconContact from '../assets/Mention-cuate.png';

export default ({
  name: 'Contact',
  components: {
    Title,
  },
  data() {
    return {
      iconContact,
      form: {
        email: '',
        username: '',
        message: '',
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      fetch(
        'https://portfoliolaravelapi.herokuapp.com/api/contacts/',
        {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(this.form),
        },
      ).then(() => {
        // Reset our form values
        this.form.email = '';
        this.form.username = '';
        this.form.message = '';
        // Trick to reset/clear native browser form validation state
        this.show = false;
        this.$nextTick(() => {
          this.show = true;
        });
      }).catch(() => {
      });
    },
  },

});
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
.container__Contact{
    @include paddingPages;
    &-form{
        margin: 4% 0% 4% 4% !important;
    }
}
.btn{
  margin-left:13px !important;
  background-color: $colorSecondary !important;
    color: $colorPrimary;
    border:2px solid $colorSecondary !important;
}
</style>
