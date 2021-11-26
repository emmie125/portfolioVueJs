/* eslint-disable import/extensions */
<template>
  <b-navbar toggleable="sm" fixed='top' class="navbar justify-content-between" align-h="center">
    <b-navbar-brand :to="{ name:'home'}" class="navbar__logo"
    v-scroll-to="{
        el: '#home',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }"><Logo/></b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse" class="navbar__toggle">
      <template #default="{ expanded }">
        <Icon v-if="expanded" icon="ri:menu-fill" />
       <Icon v-else icon="mdi:menu-down" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav class="navbar__menu">
      <b-navbar-nav class="ml-auto header__navbar-color" >
       <b-nav-item class="m-1"><b-link :to="{ name:'home'}"
       v-scroll-to="{
        el: '#home',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }">Accueil</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'home'}"
       v-scroll-to="{
        el: '#about',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }" >À propos</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'skill'}"
        v-scroll-to="{
        el: '#skill',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }">
         Compétences</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'skill'}"
       v-scroll-to="{
        el: '#projet',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }">Projets</b-link></b-nav-item>
      </b-navbar-nav>
        <Button  name='home' v-scroll-to="{
        el: '#contact',
        easing: 'easy',
        offset: -60,
        duration: 500,
      }" text='Contact' />
    </b-collapse>
  </b-navbar>
</template>
<script>
import { Icon } from '@iconify/vue2';
import Logo from './Logo.vue';
import Button from './Button.vue';

export default ({
  name: 'Header',
  components: {
    Logo,
    Button,
    Icon,
  },
  data() {
    return {
    };
  },
  methods: {
  },
});
</script>
<style lang="scss" scoped>
    @import "@/styles/main.scss";
    .navbar{
        background-color:$colorPrimary;
        &__logo{
          margin-left: 3%;
        }
    }
    .navbar__menu{
       margin-right: 3%;
      }
    .header__navbar-color{
        a{
            color:$colorPolice;
        }
    }
    .navbar-collapse{
        flex-grow: 0 !important;
    }
    @media screen and (max-width: 1280px) {
      .btn-nav{
        margin-bottom: 13px;
      }
    .navbar{
      &__toggle{
           margin-right: 3%;
        }
      &__menu{
        padding-left: 13px;
      }
    }}
</style>
