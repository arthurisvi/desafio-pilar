<template>
  <div class="container-filter">
    <div class="input-search" id="search-imovel">
      <input
        id="input-search"
        type="text"
        placeholder="Pesquise aqui"
        v-model="search"
      />
    </div>

    <div id="filter-price">
      <select id="select-price" v-model="selected">
        <option value="" selected disabled>Filtrar por preço</option>
        <option v-for="filter in filtersPrice" :value="filter" :key="filter">
          {{ filter }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      filtersPrice: ["Mais baratos", "Mais caros"],
      selected: "Filtrar por preço",
    };
  },
};
</script>

<style scoped>
.container-filter {
  width: 100%;
  margin-bottom: 30px;
}

#search-imovel {
  float: left;
  width: 50.75%;
}

#input-search {
  width: 97.25%;
}

#filter-price {
  display: inline-block;
  margin: 0 auto;
  width: 23.75%;
}

#select-price,
#input-search {
  height: 37px;
}

@media screen and (max-width: 768px) {
  .container-filter {
    width: 100%;
    margin-bottom: 30px;
  }

  #filter-price {
    display: inline-block;
    margin: 0 auto;
    width: 45%;
  }

  #select-price {
    margin-left: 12.25px;
  }

  #input-search {
    width: 88%;
  }
}

#select-price {
  width: 100%;
  border-radius: 5px;
}
</style>
