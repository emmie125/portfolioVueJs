<template>
    <div>
       <p>emmie <Icon icon="bx:bxs-certification" class="logo-color"/></p>
    </div>
</template>
<script >
import { Icon } from '@iconify/vue2';

export default ({
  name: 'Logo',
  components: {
    Icon,
  },

});
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 p{
   color:$colorSecondary;
   font-size:$textSize;
   font-weight: bold;
   font-style: italic;
 }
</style>
