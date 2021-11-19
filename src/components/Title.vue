<template>
    <h2>{{ tilte }}</h2>
</template>
<script>
export default {
  name: 'Title',
  props: ['tilte'],
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
h2{
    @include title
}
</style>
