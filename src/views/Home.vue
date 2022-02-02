<template>
  <div class="main-container">
    <!-- <Search/> -->
    <Card/> 
  </div>
</template>

<script>
import Search from '../components/Search.vue'
import Card from '../components/Card.vue'
export default {
  name: 'Home',
  components:{
    Search,
    Card
  }
}
</script>
