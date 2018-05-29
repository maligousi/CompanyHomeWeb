<template>
<div class="rongqi msy">
  <div v-html="datas"></div>
</div>
</template>
<script>
  import { mapActions, mapState } from 'vuex'

  export default {
    data(){
      return {

      }
    },
    computed:{
      ...mapState({
        datas:state=>state.frontend.newsCont
      })
    },
  }
</script>
<style scoped>
  .msy {padding: 20px;}
</style>
