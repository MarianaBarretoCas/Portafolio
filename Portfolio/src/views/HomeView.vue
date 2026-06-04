<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
</script>

<template>
  <div id="body" class="min-h-screen bg-slate-950 text-white">
    <navbar />
    <main>
      <hero />
      <about />
      <skills />
    </main>
    <footer class="bg-slate-900 text-center py-4">
      <p>&copy; 2024 Mariana. All rights reserved.</p>
    </footer>
  </div>
</template>
