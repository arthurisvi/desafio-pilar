<template>

<section class="cards">
                
    <article class="card" v-for="imovel in imoveis" :key="imovel.condo_fee">
            <div class = "container-img">
            <!-- <img src="https://uploaddeimagens.com.br/images/003/698/391/full/imovel.png?1643557971" alt=""> -->
            <!-- <img src="https://uploaddeimagens.com.br/images/003/698/394/full/imovel.png?1643558193" alt=""> -->
            <img src="https://uploaddeimagens.com.br/images/003/698/398/full/imovel.png?1643558712" alt="imovel">
            </div>
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
    border: 0.5px solid #1c333d;
    background: white; 
    margin-bottom: 1.25em;
    -webkit-box-shadow: 0 0px 2px black;
    box-shadow: 0 0px 3px black;
    cursor: pointer;
	flex: 0 1 24%;
}

.card:hover, .card:focus{
    background-color: #baa988;
    color: white
}

.container-card {
    padding-top: 1.5em;
	padding-bottom: 1.5em
}

.cards {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
}

.container-img{
    padding-top: 1.5em;
    width: 90%;
    height: auto;
    overflow: hidden;
    text-align: center;
    margin: auto;
}

img {
	display: block;
    position: relative;
    top: 10%;
	border: 0;
	width: 100%;
	height: auto;
}

#address-title, #price-title{
    font-weight: bold;
    font-size: 12px;
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