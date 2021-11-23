<template>
    <b-row class="container__Contact">
    <b-row  class="text-center">
      <Title tilte='Contact'/>
  </b-row>
  <b-row class="">
    <b-col lg="6" class="p-1">
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
        'http://127.0.0.1:8000/api/contacts/',
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
      }).catch((err) => {
        console.log(err);
      });
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.username = '';
      this.form.message = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
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
.container__contact-btn{
    margin-left: 80%;
}
</style>
