<template>

<div class = "container-filter">
    <div id = "search-imovel">
                <input id = "input-search" type="text" placeholder="Pesquise aqui" v-model="search">
                <button><i id ="icon-search" class="fas fa-search"></i></button>
    </div>

    <div id = "filter-price">
                <select id = "select-price" v-model="selected">
                    <option value="" selected disabled>Filtrar por preço</option>
                    <option v-for= "filter in filtersPrice" :value="filter" :key="filter">{{ filter }}</option>
                </select>
    </div>
</div>

<section class="cards">
    <article class="card" v-for="(imovel, index) in imoveisFiltered" :key="index">
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
            picture: "",
            search: "",
            filtersPrice: ["Mais baratos", "Mais caros"],
            selected: "Filtrar por preço"
        }
    },
    mounted(){
        this.getImoveis()
    },
    computed:{
        imoveisFiltered(){
            var response = this.imoveis

            if (this.imoveis){
                //filtro por endereço do imóvel e nome do edifício
                response = this.imoveis.filter((imovel) =>{
                    var address = imovel.address.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()
                    
                    if(imovel.building){
                        var building = imovel.building.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()
                        return this.filterByAddressAndBuilding(address, building, true)
                    }else{
                        return this.filterByAddressAndBuilding(address, building, false)
                    }
                })

                //filtrar por preço
                if(this.selected === "Mais baratos"){
                   response = this.filterByPrice(response, true)
                }else if (this.selected === "Mais caros"){
                    response = this.filterByPrice(response, false)
                }
            }

            return response
        }
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
            this.formatPrice(data)
            //fazendo copia do objeto e adicionando novo atributo picture
            const newData = this.addPicture(data)

            return newData
        })

        //mapeando imagens de acordo com o tipo do imovel
        this.mapPicture(dataImoveis)

        this.imoveis = dataImoveis
        },

        filterByAddressAndBuilding(address, building, hasBuilding){

            if (hasBuilding){
                return (building.indexOf(this.search.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()) > -1 
                || address.indexOf(this.search.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()) > -1)
            }else{
                return (address.indexOf(this.search.normalize("NFD").replace(/[^a-zA-Zs]/g, "").toLowerCase()) > -1 )
            }
        },

        filterByPrice(res, order){

            res = res.sort(function (a, b){

                let previous = a.asking_price.replace(/[^\d]+/g,'')
                let next = b.asking_price.replace(/[^\d]+/g,'')

                if (order) return (parseInt(previous) < parseInt(next)) ? -1 : (( parseInt(previous) > parseInt(next)) ? 1 : 0)
                else return (parseInt(previous) > parseInt(next)) ? -1 : ((parseInt(previous) < parseInt(next)) ? 1 : 0)
            })

            return res
        },

        formatPrice(data){

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
                if(data[i].building){
                    data[i].building =  "-" + " " + data[i].building
                }

            })

        },

        addPicture(data){
            
            const newData = data.map(data =>{
                return {... data, picture: ""}
            })

            return newData
        },

        mapPicture(dataImoveis){

            Object.keys(dataImoveis).forEach((i) =>{

            if(dataImoveis[i].property_type === 'Apartamento' || dataImoveis[i].property_type === 'Cobertura'){
                dataImoveis[i].picture = "https://uploaddeimagens.com.br/images/003/701/304/full/edificio.png?1643739307"
            }else if (dataImoveis[i].property_type === 'Casa de Condomínio'){
                 dataImoveis[i].picture = "https://uploaddeimagens.com.br/images/003/701/336/full/imovel.png?1643740111"
            }else if (dataImoveis[i].property_type === 'Casa'){
                dataImoveis[i].picture = "https://uploaddeimagens.com.br/images/003/701/327/full/casa.png?1643739984"
            }
        })

        }

    }
}

</script>

<style scoped>

input:focus{
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
} 

/* ###################### CARDS #################### */
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

/* ###################### END- CARDS #################### */


/* ###################### FILTERS #################### */
.container-filter{
    width: 100%;
    margin-bottom: 30px;
}

#search-imovel{ 
    float: left;
    width: 49.25%;
    height: 36.25px;
    border: 1px solid #1c333d;
}

#input-search{
    float: left;
    padding: 10px;
    width: 90%;
    border: none;
}

#search-imovel button{
    float: left;
    width: 7.25%;
    border: none;
    background: transparent;
    height: 35px;
    outline: 0;
}

#filter-price{ 
    display: inline-block;
    margin: 0 auto;
    width: 23.75%;
}

#select-price, #input-search{
    height: 35px;
}

#select-price{
    margin-left: 17px;
    width: 100%;
    border-radius: 5px;
    border: 1px #1c333d solid
}

/*## RESPONSIVIDADE MOBILE ## */
@media screen and (max-width: 768px) {
    .card{
        flex: 0 1 45%;
    }

    .container-filter{
        width: 100%;
        margin-bottom: 15px;
    }

    #filter-price{ 
        display: flex;
        align-items: flex-end;
        width: 50%;
        padding: 20px;
    }

    #select-price{
        width: 100%
    }

    #search-imovel{ 
        display: flex;
        align-items: flex-start;
        width: 50%;
        height: 36.25px;
        padding: 20px;
        border: none
    }
    #input-search{
        width: 95.5%;
        border: 1px #1c333d solid
    }

    #search-imovel button{
        display: none
    }
    
}

</style>