<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-slate-950/80 backdrop-blur border-b border-white/10"
  >
    <nav class="navbar max-w-7xl mx-auto py-4 px-6">
      <div class="flex items-center justify-between w-full">
        <div class="logo">
          <a href="#home" class="font-logo text-3xl font-bold text-white"
            >Mariana</a
          ><span class="text-sm text-gray-400">.dev</span>
        </div>
        <ul
          class="nav-links hidden md:flex items-center gap-8 text-sm text-slate-300 font-medium"
        >
          <li>
            <a
              href="#home"
              class="relative py-2 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              class="relative py-2 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              class="relative py-2 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#experience"
              class="relative py-2 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Experience
            </a>
          </li>

          <li>
            <a
              href="#projects"
              class="relative py-2 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              class="relative py-2 transition-colors duration-300 hover:text-white after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Contact
            </a>
          </li>
        </ul>
        <div class="buttons hidden md:flex items-center gap-4">
          <a
            href="#download-cv"
            class="group flex items-center gap-2 border border-transparent bg-gradient-to-r from-purple-700 to-violet-700 text-white font-medium py-3 px-6 rounded-xl shadow-md shadow-violet-900/30 hover:-translate-y-1 hover:from-purple-600 hover:to-violet-600 hover:shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-all duration-300"
          >
            Download CV <Icon icon="lucide:download" class="text-lg" />
          </a>
          <button
            type="button"
            aria-label="Cambiar tema"
            class="group inline-flex size-11 items-center justify-center rounded-xl border border-white/10 bg-transparent hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-[0_0_18px_rgba(250,204,21,0.22)] transition-all duration-300"
          >
            <Icon
              icon="solar:moon-bold-duotone"
              class="text-xl text-yellow-400 group-hover:rotate-12 group-hover:scale-110 group-hover:text-yellow-300 transition-all duration-300"
            />
          </button>
        </div>
      </div>
    </nav>
  </header>
</template>
