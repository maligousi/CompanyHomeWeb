<template>
 <div>
   <shuffling></shuffling>
   <div class="webComtent">
     <special></special>
     <homeModule></homeModule>
   </div>
 </div>
</template>
<script>
  import shuffling from "@/views/frontend/components/shuffling"
  import special from "@/views/frontend/components/special"
  import homeModule from "@/views/frontend/components/homeModule"

  export default {
    components:{
      shuffling,special,homeModule
    }
  }
</script>
<style scoped>
  @media (min-width: 768px) {
    .webComtent {
      width: 1030px;margin: 0 auto;
    }
  }
  @media (max-width: 768px) {
    .webComtent {
      width: 100%;
    }
  }
</style>
