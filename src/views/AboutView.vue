<script setup>
import Timeline from '../components/Timeline/Timeline.vue';
</script>


<template>
  <section class="section" id="about">
    <div class="side-container">

      <h1>
        About
      </h1>
      <p id="long-info">Software engineer with experience in web and mobile development using different tools and
        technologies.
        Interested and willing to continue learning and growing both as a software engineer and as a
        person.
        <br><br>Determined to contribute to achieving objectives through work, attention to
        detail, organizational skills,
        good communication and with the desire to apply the knowledge learned. I am motivated to learn, grow
        and help.
      </p>
      <p id="short-info">Software engineer with experience in web and mobile development using different tools and
        technologies.<br>
        <br>Determined to contribute to achieving objectives through work, attention to
        detail, organizational skills,
        good communication and with the desire to apply the knowledge learned. I am motivated to learn, grow
        and help.
      </p>
    </div>

    <div class="side-container">
      <Timeline />
    </div>
  </section>

</template>

<style scoped>
section {
  display: flex;

}


@media screen and (max-width: 375px) and (orientation: portrait) {

  #short-info {
    display: block;
  }

  #long-info {
    display: none;
  }


}
</style>