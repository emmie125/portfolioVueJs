/* eslint-disable import/extensions */
<template>
  <b-navbar toggleable="sm" fixed='top' class="navbar justify-content-between " align-h="center">
    <b-navbar-brand :to="{ name:'home'}" class="m-1"><Logo/></b-navbar-brand>

    <b-navbar-toggle target="navbar-toggle-collapse">
      <template #default="{ expanded }">
        <Icon v-if="expanded" icon="ri:menu-fill" />
       <Icon v-else icon="mdi:menu-down" />
      </template>
    </b-navbar-toggle>

    <b-collapse id="navbar-toggle-collapse" is-nav >
      <b-navbar-nav class="ml-auto header__navbar-color" >
       <b-nav-item class="m-1"><b-link :to="{ name:'home'}"
       v-scroll-to="scrollToElements('#home')">Accueil</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'home'}" href="/#about"
       v-scroll-to="scrollToElements('#about')" >À propos</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'skill'}">Compétences</b-link></b-nav-item>
       <b-nav-item class="m-1"><b-link :to="{ name:'skill'}"
       v-scroll-to="scrollToElements('#project')">Projets</b-link></b-nav-item>
      </b-navbar-nav>
        <Button  name='home' v-scroll-to="scrollToElements('#contact')" text='Contact'/>
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
