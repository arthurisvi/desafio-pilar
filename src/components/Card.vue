<template>

<section class="cards">
                
    <article class="card" v-for="imovel in imoveis" :key="imovel.condo_fee">
            <div class = "container-img">
            <img :src="imovel.picture" alt="imovel">
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
            imoveis: null,
            picture: ""
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

            //formatando o preço
            Object.keys(data).forEach((i) =>{

                var price = data[i].asking_price.toString()
                var priceSplit = ""
 
                if(price.length === 6){
                    priceSplit = price.match(/.{1,3}/g)
                    price = priceSplit[0] + "." + priceSplit[1]
                }else if(price.length === 7){
                    priceSplit = price.match(/.{1,4}/g)
                    price = priceSplit[0].substr(0, 1) + "." + priceSplit[0].substr(1, 3) + "." + priceSplit[1]
                }

                data[i].asking_price = price

                //mostrar nome do edificio no card caso exista
                if(data[i].building != undefined || data[i].building != null){
                    data[i].building =  "-" + " " + data[i].building
                }

            })

            //fazendo copia do objeto e adicionando novo atributo picture
            const newData = data.map(data =>{
                return {... data, picture: ""}
            })

            return newData
        })


        //mapeando imagens de acordo com o tipo do imovel
        Object.keys(dataImoveis).forEach((i) =>{

            if(dataImoveis[i].property_type === 'Apartamento' || dataImoveis[i].property_type === 'Cobertura'){
                dataImoveis[i].picture = "https://uploaddeimagens.com.br/images/003/701/304/full/edificio.png?1643739307"
            }else if (dataImoveis[i].property_type === 'Casa de Condomínio'){
                 dataImoveis[i].picture = "https://uploaddeimagens.com.br/images/003/701/336/full/imovel.png?1643740111"
            }else if (dataImoveis[i].property_type === 'Casa'){
                dataImoveis[i].picture = "https://uploaddeimagens.com.br/images/003/701/327/full/casa.png?1643739984"
            }
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

@media screen and (max-width: 768px) {
    .card{
        flex: 0 1 45%;
    }
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