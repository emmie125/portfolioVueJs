<template>
  <b-navbar toggleable="sm" class="navbar justify-content-between p-3" align-h="center">
    <b-navbar-brand href="#"><Logo/></b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav >
      <b-navbar-nav class="ml-auto" >
       <b-nav-item><router-link :to="{ name:'about'}">About</router-link></b-nav-item>
       <b-nav-item><router-link :to="{ name:'home'}">Home</router-link></b-nav-item>
       <b-nav-item><router-link :to="{ name:'about'}">About</router-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>
<script>
import Logo from './Logo.vue';

export default ({
  name: 'Header',
  components: {
    Logo,
  },
});
</script>
<style lang="scss" scoped>
    .navbar{
        background-color:#F4E9E4;
    }
    .navbar-collapse{
        flex-grow: 0 !important;
    }
    a{
        text-decoration: none;
    }
</style>
