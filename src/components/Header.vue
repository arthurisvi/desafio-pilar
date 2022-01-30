<template>
<header>
    <router-link to = "/" id = "logo-url">
        <h3>Blintz</h3>
    </router-link>
<nav>
    <ul class = "nav-icons">
        <li>icon1</li>
        <li>icon2</li>
        <li>icon3</li>
        <li>icon4</li>
        <li>icon5</li>
    </ul>
</nav>
<p class ="name-user">Bem vindo, <span>usuario@gmail.com</span></p>

</header>


</template>

<style scoped>
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        background-color: #1c333d;
        color: white
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 16px 10%
    }

    #logo-url{
        cursor: pointer;
        text-decoration: none;
    } 

    .nav-icons{
        list-style: none;
    }

    .nav-icons li{
        cursor: pointer;
        display: inline-block;
        padding: 0px 20px;
    }

    .name-user{
        font-size: 12px
    }

    .name-user span{
        font-weight: bold;
    }

</style>