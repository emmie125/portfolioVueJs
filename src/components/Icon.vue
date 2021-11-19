<template>
    <Icon :icon='imageIcon' class="logoColor"/>
</template>
<script >
import { Icon } from '@iconify/vue2';

export default ({
  name: 'Icon',
  props: ['imageIcon'],
  components: {
    Icon,
  },

});
</script>
<style lang="scss" scoped>
 @import "@/styles/main.scss";
 .logoColor{
   @include iconStyle;
 }

</style>
