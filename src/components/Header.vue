<template>
<header>
    <router-link to = "/" id = "logo-url">
        <h3>Blintz</h3>
    </router-link>
<nav>
    <ul class = "nav-icons">
        <li><i id = "building" class="fas fa-building"></i></li>
        <li><i id = "handshake" class="fas fa-handshake"></i></li>
        <li><i id = "magic" class="fas fa-magic"></i></li>
        <li><i id = "bell" class="fas fa-bell"></i></li>
        <li><i id = "settings" class="fas fa-cog"></i></li>
    </ul>
</nav>
<div class ="name-user">
    <p>Bem vindo,</p>
    <span>usuario@gmail.com</span>
    <i id = "logout" class="fas fa-sign-out-alt"></i>
</div>

</header>


</template>

<style scoped>

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #1c333d;
        color: #baa988;
        padding: 16px 10%;
    }

    #logo-url{
        cursor: pointer;
        text-decoration: none;
        color: #baa988;
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
        display: flex;
        align-items: center;
        font-size: 12px;
        justify-content: space-between;
    }

    .name-user span{
        font-weight: bold;
    }

    #building, #settings, #handshake, #magic, #bell, #logout{
        transition: 0.25s;
        font-size: 22px;
    }

    #building:hover, #settings:hover, #handshake:hover, #magic:hover, #bell:hover, #logout:hover{
        transform: scale(1.5)
    }

    #logout{
        margin-left: 10px
    }


</style>