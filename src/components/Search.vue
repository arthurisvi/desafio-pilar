<template>
<div class = "container-filter">

    <div class="input-search" id = "search-imovel">
                <input id = "input-search" type="text" placeholder="Pesquise aqui" v-model="search">
    </div>

    <div id = "filter-price">
                <select id = "select-price" v-model="selected">
                    <option selected>Filtrar por preço</option>
                    <option value = 1>Mais caros</option>
                    <option value = 0>Mais baratos</option>
                </select>
    </div>


</div>

</template>

<script>

export default {
    name: 'Search'
}
</script>

<style scoped>

    .container-filter{
        width: 50%;
        margin-bottom: 10px;
    }

    #search-imovel{ 
        float: left;
        width: 50.75%;
    }

    #input-search{
        width: 95%
    }

    #filter-price{ 
        display: inline-block;
        margin: 0 auto;
    }

    #select-price, #input-search{
        height: 30px;
    }
</style>