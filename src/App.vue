<template>
  <Header />
  <router-view/>
</template>

<script>
import Header from './components/Header.vue'

export default{
  components:{
    Header
  }
}

</script>

<style>
  *{
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box
  }

</style>
