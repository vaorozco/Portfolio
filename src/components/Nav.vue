<template>
  <header class="header" id="home">
    <img alt="Victor's Logo" class="logo" src="@/assets/logo.png" width="50" height="20" />
    <nav>
      <RouterLink to="/">HOME</RouterLink>
      <RouterLink to="/about">ABOUT</RouterLink>
      <RouterLink to="/skills">SKILLS</RouterLink>
      <RouterLink to="/projects">PROJECTS</RouterLink>
      <RouterLink to="/contact">CONTACT</RouterLink>
      <span class="menu-button" @click="menuButton()"><i class="fa-solid fa-bars"></i></span>
    </nav>
    <div class="sideNav" id="sideNav" ref="sideNav">
      <RouterLink to="/" class="navitem">HOME</RouterLink>
      <RouterLink to="/about" class="navitem">ABOUT</RouterLink>
      <RouterLink to="/skills" class="navitem">SKILLS</RouterLink>
      <RouterLink to="/projects" class="navitem">PROJECTS</RouterLink>
      <RouterLink to="/contact" class="navitem">CONTACT</RouterLink>
      <span class="closeButton" @click="menuButton()"><i class="fa-solid fa-xmark"></i></span>
    </div>
  </header>
</template>

<script>
import { RouterLink } from 'vue-router'
export default {
  methods: {
    menuButton() {
      const button = this.$refs.sideNav;
      if ((button.style.visiblity = "hidden")) {
        button.classList.toggle("show-sideNav");
      }
    }
  }
}
</script>


<style>
.header {
  display: flex;
  top: 0;
  left: 0;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.87) 40%, rgba(55, 53, 56, .35) 100%), url(https://wallpaperbat.com/img/767072-black-abstract-desktop-wallpaper.jpg);
  background-position: center;
  align-items: center;
  justify-content: space-between;
}

.header i {
  color: var(--alternative-color);
  font-size: x-large;
}

.header img {
  margin-left: 20px;
  margin-right: 20px;
}

nav {
  margin-left: 20px;
  margin-right: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  font-weight: 300;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding-left: 3rem;
  border-left: 1px solid var(--color-border);
}

.header a {
  text-decoration: none;
  color: var(--alternative-color);
}

a {
  color: #FFFFFF;
}

ul {
  padding: 0;
  list-style: none;
}

.menu-button {
  display: none;
  cursor: pointer;
}

.nav-list {
  display: flex;
  font-weight: 200;
}

.nav-item {
  margin-left: 3rem;
  margin-bottom: 0;
}

@media screen and (max-width: 767px) {


  .header {
    display: flex;
    width: 100%;
    position: relative;
    z-index: 1;
    height: 50px;
    background-image: linear-gradient(to top right, rgba(0, 0, 0, 0.87) 41%, rgba(55, 53, 56, .35) 100%), url(https://wallpaperbat.com/img/767072-black-abstract-desktop-wallpaper.jpg);
  }

  nav {
    height: inherit;
  }

  nav a {
    display: none;
  }

  .menu-button {
    display: flex;
  }

  .nav-list {
    display: none;
  }


}

@media screen and (max-width: 280px) and (orientation: portrait) {
  nav {
    display: none;
  }
}

@media screen and (max-width: 653px) and (orientation: landscape) {

  nav {
    display: none;
  }

}
</style>