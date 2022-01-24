<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script> 
import Modal from './components/Modal.vue'
export default {
  name: 'App',
  components: {
    Modal,  
  }
}
</script>

<style lang="scss">
 @import "styles/variables";
 @import "styles/index";
 @import "styles/modal";
</style>

