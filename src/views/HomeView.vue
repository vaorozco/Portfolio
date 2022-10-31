<script setup>
</script>

<template>
  <main class="home" id="home">
    <div class="home-info">
      <h1 class="home-title">VICTOR OROZCO</h1>
      <h2 class="home-slogan" id="main-slogan">SOFTWARE ENGINEER</h2>
      <span class="home-icon">
        <a href="#about" class="arrow">
          <font-awesome-icon icon="fa-solid fa-angles-down" />
        </a>
      </span>
      <h2 id="alternative" class=" home-slogan">Experience in backend, frontend and mobile development. <br><br>Projects
        and
        contact info here:
      </h2>
      <div class="contact-icons-alternatives">
        <a href="https://www.linkedin.com/in/vaorozco17/" target="_blank" rel="noopener noreferrer"><i
            class="fa-brands fa-linkedin"></i></a>
        <a href="https://github.com/vaorozco" target="_blank" rel="noopener noreferrer"><i
            class="fa-brands fa-github"></i></a>
      </div>
    </div>
  </main>
</template>

<style scoped>
@media screen and (max-width: 1024px) {

  .home-title {
    font-weight: 200;
    font-size: 3.125rem;
    letter-spacing: 40px;
    text-indent: 40px;
  }

}

@media screen and (max-width: 992px) and (orientation: portrait) {
  .home-title {
    letter-spacing: 25px;
    text-indent: 25px;
    font-size: 3.125rem;
  }

  .home-slogan {
    padding: 0rem 6rem;
  }

}

@media screen and (max-width: 767px) {
  .home {
    height: calc(100vh - 50px);
  }

  .home-title {
    font-size: 1.375rem;
    margin: 0%;
    letter-spacing: 16px;
    text-indent: 16px;
    margin-bottom: 85px;
  }

  .home-slogan {
    font-size: 0.75rem;
    letter-spacing: 7px;
    padding-left: 3rem;
    padding-right: 3rem;
    text-indent: 7px;
  }
}

@media screen and (max-width: 540px) and (orientation: portrait) {
  .home-title {
    font-size: 1.563rem;
  }

  .home-slogan {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

@media screen and (max-width: 480px) and (orientation: portrait) {

  .home-info {
    position: relative;
    justify-content: center;
  }

  .home-title {
    font-size: 1.063rem;
    letter-spacing: 0.938rem;
    text-indent: 0.938rem;
  }

  .home-slogan {
    position: relative;
    letter-spacing: 7px;
    font-size: 0.625rem;
    padding-left: 2rem;
    padding-right: 2rem;
    top: 3rem;
    text-indent: 7px;
  }

  .home-icon {
    position: relative;
    top: 6rem;
  }

}

@media screen and (max-width: 280px) and (orientation: portrait) {
  .home-icon {
    display: none;
  }

  .home-title {
    font-size: 1.063;
    letter-spacing: 8px;
    text-indent: 8px;
    margin-bottom: 25px;
  }

  #alternative {
    display: block;
  }

  #main-slogan {
    display: none;
  }

  .home-slogan {

    margin-bottom: 100px;
    letter-spacing: 4px;
    font-size: 0.688rem;
    text-indent: 4px;
  }

  .contact-icons-alternatives {
    font-size: x-large;
    display: block;
  }

}

@media screen and (max-width: 992px) and (orientation: landscape) {

  .home-slogan {
    margin-bottom: 90px;
    font-size: 0.688rem;
    padding: 0rem 10rem;
  }

  .home-title {
    margin-top: 20px;
    font-size: 1.875rem;
    margin-bottom: 40px;
    letter-spacing: 40px;
    text-indent: 40px;
  }

}

@media screen and (max-width: 767px) and (orientation: landscape) {

  .home-slogan {
    padding-left: 10rem;
    padding-right: 10rem;
    margin-bottom: 80px;
  }

  .home-title {
    margin-top: 100px;
    margin-bottom: 25px;
    font-size: 1.563rem;
    letter-spacing: 25px;
    text-indent: 25px;

  }
}

@media screen and (max-width: 653px) and (orientation: landscape) {

  .home-icon {
    display: none;
  }

  #alternative {
    display: block;
  }

  .home-title {
    margin-top: 50px;
    font-size: 1.063rem;
    letter-spacing: 8px;
    text-indent: 8px;
    margin-bottom: 20px;
  }

  #main-slogan {
    display: none;
  }

  .home-slogan {
    margin-bottom: 0.938rem;
    letter-spacing: 7px;
    font-size: 0.688rem;
    padding-left: 3rem;
    padding-right: 3rem;
    text-indent: 7px;
  }

  .contact-icons-alternatives {
    display: block;
    font-size: x-large;
  }
}
</style>
