<template>
<header>
    <router-link to = "/" id = "logo-url">
        <h3>Blintz</h3>
    </router-link>
<nav>
    <ul class = "nav-icons">
        <li><i id = "building" class="fas fa-building"></i></li>
        <li><i class="fas fa-handshake"></i></li>
        <li><i class="fas fa-magic"></i></li>
        <li><i class="fas fa-bell"></i></li>
        <li><i class="fas fa-cog"></i></li>
    </ul>
</nav>
<p class ="name-user">Bem vindo, <span>usuario@gmail.com</span></p>
<!-- <i class="fas fa-sign-out-alt"></i> -->

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

    #building{
        color:  #baa988;
    }

</style>