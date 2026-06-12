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
  <div id="body" class="min-h-screen bg-slate-950 text-white">
    <navbar />
    <main class="space-y-12">
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
