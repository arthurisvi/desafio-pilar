<template>

<section class="cards">
                
    <article class="card" v-for="imovel in imoveis" :key="imovel.condo_fee">
        <picture>
            <img src="" alt="">
        </picture>
        <div class="container-card">
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

.card {
    background: white; 
    margin-bottom: 1.25em;
    -webkit-box-shadow: 0 0px 2px black;
    box-shadow: 0 0px 2px black;
    cursor: pointer;
	flex: 0 1 24%;
}

.card:hover, .card:focus{
    background-color: #baa988;
    color: white
}

.container-card {
	padding: 2em 0 2em 0;
}

.cards {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}

img {
	display: block;
	border: 0;
	width: 100%;
	height: auto;
}

#address-title, #price-title{
    font-weight: bold;
}


#address-title{
    margin: 0rem;
    font-size: 12px;
    text-align: center;
}

#price-title, p{
    margin: 1rem 0 0rem;
    font-size: 12px;
    text-align: center;
}


</style>