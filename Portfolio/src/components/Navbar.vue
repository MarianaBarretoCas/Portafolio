<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useTheme } from "../composables/useTheme";
import { useLanguage } from "../composables/useLanguage";

const isMenuOpen = ref(false);
const isScrolled = ref(false);
const isCvMenuOpen = ref(false);

const { theme, toggleTheme } = useTheme();
const { language, t, toggleLanguage } = useLanguage();

const navLinks = computed(() => [
  { name: t.value.nav.home, href: "#home" },
  { name: t.value.nav.about, href: "#about" },
  { name: t.value.nav.skills, href: "#skills" },
  { name: t.value.nav.projects, href: "#projects" },
  { name: t.value.nav.experience, href: "#experience" },
  { name: t.value.nav.contact, href: "#contact" },
]);

const closeMenu = () => {
  isMenuOpen.value = false;
  isCvMenuOpen.value = false;
};

const toggleCvMenu = () => {
  isCvMenuOpen.value = !isCvMenuOpen.value;
};

const handleLanguageToggle = () => {
  toggleLanguage();
  closeMenu();
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
          ? 'max-w-6xl rounded-full border border-border-soft bg-nav px-5 py-3 shadow-nav backdrop-blur-xl'
          : 'max-w-7xl rounded-full border border-border-soft bg-nav px-5 py-3 shadow-nav backdrop-blur-xl md:rounded-none md:border-0 md:bg-transparent md:px-6 md:py-4 md:shadow-none'
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
          <li v-for="link in navLinks" :key="link.href">
            <a
              :href="link.href"
              class="relative py-2 transition-colors duration-300 hover:text-content after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-gradient-to-r after:from-purple-500 after:to-violet-400 after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              {{ link.name }}
            </a>
          </li>
        </ul>

        <div class="hidden items-center gap-4 md:flex">
          <div class="relative">
            <button
              type="button"
              class="btn btn-primary group"
              @click="toggleCvMenu"
            >
              {{ t.cv.button }}

              <Icon
                icon="lucide:chevron-down"
                class="text-lg transition-transform duration-300"
                :class="{ 'rotate-180': isCvMenuOpen }"
              />
            </button>

            <div
              v-if="isCvMenuOpen"
              class="absolute right-0 top-full z-50 mt-3 w-48 overflow-hidden rounded-2xl border border-border-soft bg-nav p-2 shadow-nav backdrop-blur-xl"
            >
              <a
                href="/cv/mariana-barreto-cv-en.pdf"
                download
                class="block rounded-xl px-4 py-3 text-sm font-medium text-muted transition-all duration-300 hover:bg-violet-500/10 hover:text-content"
                @click="isCvMenuOpen = false"
              >
                {{ t.cv.english }}
              </a>

              <a
                href="/cv/mariana-barreto-cv-es.pdf"
                download
                class="block rounded-xl px-4 py-3 text-sm font-medium text-muted transition-all duration-300 hover:bg-violet-500/10 hover:text-content"
                @click="isCvMenuOpen = false"
              >
                {{ t.cv.spanish }}
              </a>
            </div>
          </div>

          <button
            type="button"
            aria-label="Cambiar idioma"
            class="icon-button"
            @click="toggleLanguage"
          >
            <span class="text-xs font-bold text-content">
              {{ language === "en" ? "ES" : "EN" }}
            </span>
          </button>

          <button
            type="button"
            aria-label="Cambiar tema"
            class="theme-button group"
            @click="toggleTheme"
          >
            <Icon
              :icon="theme === 'dark' ? 'solar:moon-bold-duotone' : 'solar:sun-bold-duotone'"
              class="text-xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          :aria-expanded="isMenuOpen"
          class="icon-button md:!hidden"
          @click="isMenuOpen = !isMenuOpen"
        >
          <Icon v-if="!isMenuOpen" icon="lucide:menu" class="text-2xl" />
          <Icon v-else icon="lucide:x" class="text-2xl" />
        </button>
      </div>
    </nav>

    <div
      v-if="isMenuOpen"
      class="mx-auto mt-3 max-w-7xl rounded-3xl border border-border-soft bg-nav p-4 shadow-nav backdrop-blur-xl md:hidden"
    >
      <ul class="space-y-2 text-sm font-medium text-muted">
        <li v-for="link in navLinks" :key="link.href">
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
        <div class="flex flex-1 gap-2">
          <a
            href="/cv/mariana-barreto-cv-en.pdf"
            download
            class="btn btn-primary group flex-1 px-3 text-sm"
            @click="closeMenu"
          >
            CV EN
          </a>

          <a
            href="/cv/mariana-barreto-cv-es.pdf"
            download
            class="btn btn-secondary group flex-1 px-3 text-sm"
            @click="closeMenu"
          >
            CV ES
          </a>
        </div>

        <button
          type="button"
          aria-label="Cambiar idioma"
          class="icon-button"
          @click="handleLanguageToggle"
        >
          <span class="text-xs font-bold text-content">
            {{ language === "en" ? "ES" : "EN" }}
          </span>
        </button>

        <button
          type="button"
          aria-label="Cambiar tema"
          class="theme-button"
          @click="toggleTheme"
        >
          <Icon
            :icon="theme === 'dark' ? 'solar:moon-bold-duotone' : 'solar:sun-bold-duotone'"
            class="text-xl transition-all duration-300"
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