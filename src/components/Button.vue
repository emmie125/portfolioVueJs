<template>
    <b-button class="active-class"
    :to="{ name:`${name}`}" squared size="lg">
    {{text}}</b-button>
</template>
<script>
export default {
  name: 'Button',
  props: ['name', 'text'],
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
