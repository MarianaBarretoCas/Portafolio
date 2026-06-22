<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useTheme } from "../composables/useTheme";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

const { theme, toggleTheme } = useTheme();

const closeMenu = () => {
  isMenuOpen.value = false;
};

const handleScroll = () => {
  isScrolled.value = window.scrollY > 40;
};

onMounted(() => {
  handleScroll();
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
</script>

<template>
  <header
    class="sticky z-50 bg-transparent transition-all duration-500 ease-out"
    :class="
      isScrolled
        ? 'top-3 px-4 md:top-4'
        : 'top-3 px-4 md:top-0 md:px-0 md:bg-nav md:backdrop-blur'
    "
  >
    <nav
      class="mx-auto transition-all duration-300 ease-out"
      :class="
        isScrolled
          ? 'max-w-6xl rounded-full border border-border-soft bg-nav px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl'
          : 'max-w-7xl rounded-full border border-border-soft bg-nav px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl md:rounded-none md:border-0 md:bg-transparent md:px-6 md:py-4 md:shadow-none'
      "
    >
      <div class="flex w-full items-center justify-between">
        <div class="logo">
          <a
            href="#home"
            class="font-logo text-3xl font-bold text-content"
            @click="closeMenu"
          >
            Mariana
          </a>
          <span class="text-sm text-muted">.dev</span>
        </div>

        <ul
          class="hidden items-center gap-8 text-sm font-medium text-muted md:flex"
        >
          <li v-for="link in navLinks" :key="link.name">
            <a
              :href="link.href"
              class="relative py-2 transition-colors duration-300 hover:text-content after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <div class="hidden items-center gap-4 md:flex">
          <a
            href="#download-cv"
            class="group flex items-center gap-2 rounded-xl border border-transparent bg-gradient-to-r from-purple-700 to-violet-700 px-6 py-3 font-medium text-white shadow-md shadow-violet-900/30 transition-all duration-300 hover:-translate-y-1 hover:from-purple-600 hover:to-violet-600 hover:shadow-[0_0_22px_rgba(139,92,246,0.45)]"
          >
            Download CV
            <Icon icon="lucide:download" class="text-lg" />
          </a>

          <button
            type="button"
            aria-label="Cambiar tema"
            class="group inline-flex size-11 items-center justify-center rounded-xl border border-border-soft bg-transparent transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-yellow-400/10 hover:shadow-[0_0_18px_rgba(250,204,21,0.22)]"
            @click="toggleTheme"
          >
            <Icon
              :icon="theme === 'dark' ? 'solar:moon-bold-duotone' : 'solar:sun-bold-duotone'"
              class="text-xl text-yellow-400 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:text-yellow-300"
            />
          </button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          :aria-expanded="isMenuOpen"
          class="inline-flex size-11 items-center justify-center rounded-full border border-border-soft text-content transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 md:hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon v-if="!isMenuOpen" icon="lucide:menu" class="text-2xl" />
          <Icon v-else icon="lucide:x" class="text-2xl" />
        </button>
      </div>
    </nav>

    <div
      v-if="isMenuOpen"
      class="mx-auto mt-3 max-w-7xl rounded-3xl border border-border-soft bg-nav p-4 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden"
    >
      <ul class="space-y-2 text-sm font-medium text-muted">
        <li v-for="link in navLinks" :key="link.name">
          <a
            :href="link.href"
            class="block rounded-2xl px-4 py-3 transition-all duration-300 hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-content active:scale-95 active:border-violet-500 active:bg-violet-500/20"
            @click="closeMenu"
          >
            {{ link.name }}
          </a>
        </li>
      </ul>

      <div class="mt-4 flex items-center gap-3">
        <a
          href="#download-cv"
          class="group flex flex-1 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-purple-700 to-violet-700 px-5 py-3 text-sm font-medium text-white shadow-md shadow-violet-900/30 transition-all duration-300 hover:from-purple-600 hover:to-violet-600"
          @click="closeMenu"
        >
          Download CV
          <Icon icon="lucide:download" class="text-lg" />
        </a>

        <button
          type="button"
          aria-label="Cambiar tema"
          class="inline-flex size-11 items-center justify-center rounded-2xl border border-border-soft text-yellow-400 transition-all duration-300 hover:border-yellow-400/50 hover:bg-yellow-400/10"
          @click="toggleTheme"
        >
          <Icon
            :icon="theme === 'dark' ? 'solar:moon-bold-duotone' : 'solar:sun-bold-duotone'"
            class="text-xl text-yellow-400 transition-all duration-300"
          />
        </button>
      </div>
    </div>

    <div
      v-if="!isScrolled"
      class="pointer-events-none hidden h-px w-full bg-border-soft md:block"
    ></div>
  </header>
</template>