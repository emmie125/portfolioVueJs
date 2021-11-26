<template>
    <b-button class="btn p-3" :to="{ name:`${name}`}" squared size="lg"
    :style='customStyle' :type="type">{{text}}</b-button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    name: { type: String, default: '' },
    text: { type: String },
    backgroundColor: { type: String },
    type: { type: String },
    color: { type: String },
  },
  data() {
    return {
    };
  },
  computed: {
    customStyle() {
      return { color: this.color, 'background-color': this.backgroundColor };
    },
  },
};
</script>
<style lang="scss" scoped>
@import "@/styles/main.scss";
.btn {
    background-color: $colorPrimary;
    color: $colorSecondary;
    border:2px solid $colorSecondary !important;
}
.btn:hover{
    outline: none !important;
     border:none !important;
    color: $colorSecondary;
    background-color: $colorPrimary;
    border:2px solid $colorSecondary !important;
}
</style>
