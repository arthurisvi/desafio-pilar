<template>
<section class="cards" v-for="imovel in imoveis" :key="imovel.condo_fee">
  <article class="card">
    <picture class="thumbnail">
         <img class="category__01" src="" alt="" />
    </picture>
    <div class="card-content">
      <div id = "address-title">{{ imovel.address }}</div>
      <p>{{ imovel.property_type }}  {{ imovel.building }}</p>
      <p id = "price-title">R$ {{ imovel.asking_price }}</p>
      <p>{{ imovel.bedrooms }}QT  {{imovel.suites}}ST   {{imovel.parking_spots}}VG</p>
   </div>
  </article>
</section>

</template>

<script>
import axios from "axios"

export default{
    name: "Card",
    data(){
        return{
            imoveis: null
        }
    },
    mounted(){
        this.getImoveis()
    },
    methods:{
        async getImoveis(){
            var options = {
                method: 'GET',
                url: 'https://development-api.blintz.com.br/properties'
            }
            
        const dataImoveis = await axios.request(options).then( (res ) => {

            const data = res.data
            
            return data 
        })        

        this.imoveis = dataImoveis
        }

    }
}

</script>

<style scoped>
* {
  -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

img {
  display: block;
    border: 0;
    width: 100%;
    height: auto;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  grid-gap: 1rem;
}

.card {
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: .5rem;
  -webkit-box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.15);
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  position: relative;
  color: #5d5e5e;
} 

#address-title{
    margin: 2rem 0 .5rem;
    font-size: 12px;
    text-align: center;
}

#price-title, p{
    margin: 1rem 0 .5rem;
    font-size: 12px;
    text-align: center;
}

#address-title, #price-title{
    font-weight: bold;
}

.thumbnail img {
  fill: #c7c4c4;
  height: 135px;
  opacity: .25;
  padding: 0.5rem;
}


</style>