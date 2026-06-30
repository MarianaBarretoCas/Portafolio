<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import { Icon } from "@iconify/vue";
import { useTheme } from "../composables/useTheme";
import { useLanguage } from "../composables/useLanguage";

const isMenuOpen = ref(false);
const isScrolled = ref(false);

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

const cvUrl = computed(() =>
  language.value === "en"
    ? "/cv/Cv-Mariana.pdf"
    : "/cv/Hoja-de-vida-Mariana.pdf",
);

const cvFileName = computed(() =>
  language.value === "en" ? "Cv-Mariana.pdf" : "Hoja-de-vida-Mariana.pdf",
);

const downloadCv = async () => {
  try {
    const response = await fetch(cvUrl.value);

    if (!response.ok) {
      throw new Error("No se pudo cargar el CV");
    }

    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = cvFileName.value;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    URL.revokeObjectURL(blobUrl);
  } catch (error) {
    window.open(cvUrl.value, "_blank");
  }

  closeMenu();
};

const closeMenu = () => {
  isMenuOpen.value = false;
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
          <div class="relative group">
            <button
              type="button"
              class="btn btn-primary"
              @click="downloadCv"
              :aria-label="t.cv.buttonLabel"
            >
              {{ t.cv.button }}

              <Icon icon="lucide:download" class="text-lg" />
            </button>

            <span
              class="pointer-events-none absolute right-4 top-full z-50 w-max max-w-[220px] rounded-xl border border-border-soft bg-surface-strong px-3 py-2 text-xs font-medium text-content opacity-0 shadow-card backdrop-blur-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
            >
              {{ t.cv.buttonLabel }}
            </span>
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
              :icon="
                theme === 'dark'
                  ? 'solar:moon-bold-duotone'
                  : 'solar:sun-bold-duotone'
              "
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
        <button
          type="button"
          class="btn btn-primary group flex-1 px-3 text-sm"
          @click="downloadCv"
        >
          {{ t.cv.button }}

          <Icon icon="lucide:download" class="text-lg" />
        </button>
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
            :icon="
              theme === 'dark'
                ? 'solar:moon-bold-duotone'
                : 'solar:sun-bold-duotone'
            "
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
