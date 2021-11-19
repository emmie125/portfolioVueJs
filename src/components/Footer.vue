<template>
    <b-row  class="container__footer">
        <b-col class="justify-content-center" lg="4">
            <Logo sizeIcon="40px" />
        </b-col>
        <b-col lg="4">
            <b-row><h3>Liens Rapide</h3></b-row>
            <b-row>
                <b-link :to="{ name:'home'}">Accueil</b-link>
                <b-link :to="{ name:'about'}">À propos</b-link>
                <b-link :to="{ name:'skill'}">Compétences</b-link>
                <b-link :to="{ name:'project'}">Projets</b-link>
            </b-row>
        </b-col>
        <b-col lg="4">
             <b-row><h3>Mes coordonnées</h3></b-row>
            <b-row>
                <b-col>
                    <b-link href="mailto:mulangaemmanuella@gmail.com">
                        <Icon icon="mdi:gmail" class="logoColor"/></b-link>
                    </b-col>
                    <b-col>
                    <b-link target="_blank" href="https://github.com/emmie125/">
                        <Icon icon="akar-icons:github-fill" class="logoColor"/></b-link>
                    </b-col>
                    <b-col>
                    <b-link target="_blank" href="https://www.linkedin.com/in/emmanuella-mulanga-38284a184/">
                        <Icon icon="cib:linkedin" class="logoColor"/></b-link>
                    </b-col>
                    <b-col>
                    <b-link target="_blank" href="https://www.instagram.com/mulangaemmanuella/">
                        <Icon icon="ant-design:instagram-filled" class="logoColor"/>
                    </b-link>
                    </b-col>
                    <b-col>
                    <b-link href="tel:+243826370009">
                        <Icon icon="bx:bxs-phone" class="logoColor"/>
                    </b-link>
                    </b-col>
            </b-row>
        </b-col>
    </b-row>
</template>
<script>
import { Icon } from '@iconify/vue2';
import Logo from './Logo.vue';

export default ({
  name: 'Footer',
  components: {
    Logo,
    Icon,
  },
});
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.container__footer{
    background-color:black;
    padding: 4% 3% 3% 3%;
    h3{
        padding: 4% 0%;
        color:white;
        font-size:$textSize;
        font-weight: normal;
    }
    a{
        margin: 3% 0% 3% 0%;
        font-size:$textSize;
        color:white;
    }
    .logoColor{
   @include iconStyle;
 }
}
</style>
