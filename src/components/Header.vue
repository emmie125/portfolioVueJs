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
      }" text='Contact'/>
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
      options: {},
    };
  },
  methods: {
    scrollToElements(element) {
      this.options = {
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
