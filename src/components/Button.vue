<template>
    <b-button class="active-class"
    :to="{ name:`${name}`}" :href="href" size="lg">
    {{text}}</b-button>
</template>
<script>
export default {
  name: 'Button',
  props: ['name', 'text', 'href'],
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.btn {
    background-color: $colorSecondary !important;
    border:none !important;
}
.active-class{
    outline: none !important;
     border:none !important;
}
</style>
