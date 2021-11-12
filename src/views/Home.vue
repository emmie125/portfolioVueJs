<template>
  <b-container class="bv-example-row " fluid>
  <b-row class="justify-content-md-center p-3">
    <b-col cols="6">
      <b-row>1 of 3</b-row>
      <b-row><Button name='about' text='Contactez-moi' /></b-row>
    </b-col>
    <b-col>2 of 3</b-col>
  </b-row>
</b-container>
</template>

<script>
// @ is an alias to /src
import Button from '../components/ButtonPrimary.vue';

export default {
  name: 'Home',
  components: {
    Button,
  },
};
</script>
