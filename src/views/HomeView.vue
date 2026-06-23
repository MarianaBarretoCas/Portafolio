<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import Projects from "../components/Projects.vue";
import Experience from "../components/Experience.vue";
import Contact from "../components/Contact.vue";
import Footers from "../components/Footer.vue";
</script>

<template>
  <div class="min-h-screen bg-page text-content font-sans transition-colors duration-300">
    <navbar />
    <main class="space-y-12 lg:px-17">
      <hero />
      <about />
      <skills />
      <projects />
      <experience />
      <contact />
    </main>
    <footer>
      <footers/>
    </footer>
  </div>
  
</template>
