<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav.vue'
</script>

<template>
  <Nav />
  <RouterView id="routerView" v-slot="{ Component }">

    <transition name="route" mode="out-in">
      <component :is="Component" />
    </transition>

  </RouterView>

</template>

