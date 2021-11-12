<template>
    <b-button :to="{ name:`${name}`}" squared size="lg">{{text}}</b-button>
</template>
<script>
export default {
  name: 'Button',
  props: ['name', 'text'],
};
</script>
<style lang="scss" scoped>
</style>
