<template>
    <div>
       <p :style='customSizeIcon'>emmie <Icon icon="bx:bxs-certification" class="logo-color"/></p>
    </div>
</template>
<script >
import { Icon } from '@iconify/vue2';

export default ({
  name: 'Logo',
  props: { sizeIcon: { type: String } },
  components: {
    Icon,
  },
  computed: {
    customSizeIcon() {
      return { 'font-size': this.sizeIcon };
    },
  },

});
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 p{
   color:$colorSecondary;
   font-weight: bold;
   font-style: italic;
 }
</style>
