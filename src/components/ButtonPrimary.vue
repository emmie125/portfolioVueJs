<template>
    <b-button class="btn" :to="{ name:`${name}`}" squared size="lg"
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
    border:3px solid $colorSecondary !important;
    font-size: $sizeButton !important;
    padding: 1% 7% 1% 7% !important;
}
.btn:hover{
    outline: none !important;
     border:none !important;
    color: $colorSecondary;
    background-color: $colorPrimary;
    border:3px solid $colorSecondary !important;
    padding: 1% 7% 1% 7% !important;
}
</style>
