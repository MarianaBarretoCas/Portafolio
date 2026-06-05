<script setup>
import Navbar from "../components/Navbar.vue";
import Hero from "../components/Hero.vue";
import About from "../components/About.vue";
import Skills from "../components/Skills.vue";
import ProjectCard from "../components/ProjectCard.vue";
</script>

<template>
  <div id="body" class="min-h-screen bg-slate-950 text-white">
    <navbar />
    <main class="space-y-12">
      <hero />
      <about />
      <skills />
      <project-card />
    </main>
    <footer class="bg-slate-900 text-center py-4">
      <p>&copy; 2024 Mariana. All rights reserved.</p>
    </footer>
  </div>
</template>
