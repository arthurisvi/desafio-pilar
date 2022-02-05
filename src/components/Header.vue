<template>
  <header>
    <router-link to="/" id="logo-url">
      <h3>Blintz</h3>
    </router-link>
    <nav>
      <ul class="nav-icons">
        <li><i id="building" class="fas fa-building"></i></li>
        <li><i id="handshake" class="fas fa-handshake"></i></li>
        <li><i id="magic" class="fas fa-magic"></i></li>
        <li><i id="bell" class="fas fa-bell"></i></li>
        <li><i id="settings" class="fas fa-cog"></i></li>
      </ul>
      <div v-show="burgerOpen">
        <ul class="nav-icons-burger">
          <li><i id="building" class="fas fa-building"></i></li>
          <li><i id="handshake" class="fas fa-handshake"></i></li>
          <li><i id="magic" class="fas fa-magic"></i></li>
          <li><i id="bell" class="fas fa-bell"></i></li>
          <li><i id="settings" class="fas fa-cog"></i></li>
        </ul>
      </div>
    </nav>
    <div class="name-user">
      <p>Bem vindo,</p>
      <span>usuario@gmail.com</span>
      <i id="logout" class="fas fa-sign-out-alt"></i>
    </div>

    <div class="container-hamburger">
      <input
        @change="showBurger($event)"
        id="menu-hamburguer"
        type="checkbox"
      />
      <label for="menu-hamburguer">
        <div class="menu">
          <span class="hamburguer"></span>
        </div>
      </label>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      burgerOpen: false,
    };
  },
  methods: {
    showBurger() {
      this.burgerOpen = !this.burgerOpen;
    },
  },
};
</script>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #1c333d;
  color: #baa988;
  padding: 16px 10%;
}

.container-hamburger {
  display: none;
}

#logo-url {
  cursor: pointer;
  text-decoration: none;
  color: #baa988;
}

.nav-icons {
  list-style: none;
}

.nav-icons li {
  cursor: pointer;
  display: inline-block;
  padding: 0px 20px;
}

.name-user {
  display: flex;
  align-items: center;
  font-size: 12px;
  justify-content: space-between;
}

.name-user span {
  font-weight: bold;
}

#building,
#settings,
#handshake,
#magic,
#bell {
  transition: 0.25s;
  font-size: 22px;
}

#building:hover,
#settings:hover,
#handshake:hover,
#magic:hover,
#bell:hover {
  transform: scale(1.5);
}

#logout {
  cursor: pointer;
  font-size: 22px;
  margin-left: 10px;
}

@media screen and (max-width: 709px) {
  .container-hamburger {
    display: block;
  }

  .nav-icons {
    display: none;
  }

  .nav-icons-burger li {
    list-style: none;
    cursor: pointer;
    display: inline-block;
    padding: 0 5px;
  }

  #building,
  #settings,
  #handshake,
  #magic,
  #bell {
    font-size: 20px;
  }

  .name-user {
    display: none;
  }

  .menu {
    width: 60px;
    height: 60px;
    bottom: 25px;
    right: 25px;
  }

  .hamburguer {
    position: relative;
    display: block;
    background: #baa988;
    width: 30px;
    height: 2px;
    top: 29px;
    left: 15px;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before,
  .hamburguer:after {
    background: #baa988;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.5s ease-in-out;
  }

  .hamburguer:before {
    top: -10px;
  }

  .hamburguer:after {
    bottom: -10px;
  }

  input {
    display: none;
  }

  input:checked ~ label .hamburguer {
    transform: rotate(45deg);
  }

  input:checked ~ label .hamburguer:before {
    transform: rotate(90deg);
    top: 0;
  }

  input:checked ~ label .hamburguer:after {
    transform: rotate(90deg);
    bottom: 0;
  }
}
</style>
