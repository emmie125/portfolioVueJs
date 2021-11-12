<template>
  <b-navbar toggleable="sm" fixed='top' class="navbar justify-content-between " align-h="center">
    <b-navbar-brand :to="{ name:'home'}" class="m-1"><Logo/></b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <b-icon v-if="expanded" icon="chevron-bar-up"></b-icon>
        <b-icon v-else icon="chevron-bar-down"></b-icon>
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav >
      <b-navbar-nav class="ml-auto header__navbar-color" >
       <b-nav-item class="m-1"><b-link :to="{ name:'home'}">Accueil</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'about'}">À propos</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'skill'}">Compétences</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'project'}">Projets</b-link></b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    <Button name ='about' text='Contact'/>
  </b-navbar>
</template>
<script>
import Logo from './Logo.vue';
import Button from './Button.vue';

export default ({
  name: 'Header',
  components: {
    Logo,
    Button,
  },
});
</script>
<style lang="scss" scoped>
    @import "@/styles/main.scss";
    .navbar{
        background-color:$colorPrimary;
        padding: 0px 30px 0px 30px;
    }
    .header__navbar-color{
        a{
            color:$colorPolice;
        }
    }
    .navbar-collapse{
        flex-grow: 0 !important;
    }
</style>
