<script setup>
import { Icon } from "@iconify/vue";
import { useLanguage } from "../composables/useLanguage";

const { t } = useLanguage();
</script>

<template>
  <section
    id="home"
    class="mx-auto grid max-w-7xl items-center gap-10 px-6 pt-12 pb-16 text-center lg:min-h-screen lg:-translate-y-16 lg:grid-cols-2 lg:px-6 lg:pt-5 lg:pb-5 lg:text-left lg:-mb-16"
  >
    <div class="info flex flex-col items-center lg:items-start">
      <h3 class="mb-2 text-sm tracking-widest text-violet-400">
        {{ t.hero.eyebrow }}
      </h3>

      <h1 class="mb-1 text-4xl font-bold text-content sm:text-5xl lg:text-5xl">
        {{ t.hero.name }}
      </h1>

      <h3 class="mb-3 font-semibold text-purple-400">
        {{ t.hero.role }}
      </h3>

      <p class="mb-1 max-w-lg leading-relaxed text-muted">
        {{ t.hero.description }}
      </p>

      <div
        class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
      >
        <a href="#projects" class="btn btn-primary group">
          {{ t.hero.primaryButton }}

          <Icon
            icon="bitcoin-icons:arrow-right-filled"
            class="text-lg transition-transform duration-300 group-hover:translate-x-1"
          />
        </a>

        <a href="#contact" class="btn btn-secondary group">
          {{ t.hero.secondaryButton }}

          <Icon
            icon="streamline-cyber:email-2"
            class="text-lg transition-all duration-300 group-hover:scale-110 group-hover:text-purple-500"
          />
        </a>
      </div>

      <div
        id="socialIcons"
        class="mt-5 flex items-center justify-center gap-3 lg:justify-start"
      >
        <a
          href="https://linkedin.com/in/mariana-barreto-castro"
          class="icon-button group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:linkedin"
            class="text-xl text-blue-500 transition-all duration-300 group-hover:scale-110 group-hover:text-blue-600"
          />
        </a>

        <a
          href="https://github.com/MarianaBarretoCas"
          class="icon-button group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="mdi:github"
            class="text-xl text-content transition-all duration-300 group-hover:scale-110 group-hover:text-slate-500"
          />
        </a>

        <a
          href="https://wa.me/573124669522"
          class="icon-button group"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon
            icon="ic:baseline-whatsapp"
            class="text-xl text-green-500 transition-all duration-300 group-hover:scale-110 group-hover:text-green-400"
          />
        </a>

        <a href="mailto:marianabarretocas@gmail.com" class="icon-button group">
          <Icon
            icon="streamline-cyber:email-2"
            class="text-xl text-content transition-all duration-300 group-hover:scale-110 group-hover:text-purple-500"
          />
        </a>
      </div>
    </div>

    <div
      class="relative flex min-h-[290px] items-end justify-center sm:min-h-[280px] lg:min-h-[560px]"
    >
      <div
        class="absolute bottom-10 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-violet-600/30 blur-3xl sm:h-56 sm:w-56 lg:bottom-16 lg:h-72 lg:w-72"
      ></div>

      <div
        class="absolute bottom-4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-[48%_52%_44%_56%/42%_40%_60%_58%] border border-violet-500/20 bg-gradient-to-br from-violet-950 via-purple-950 to-violet-900/80 shadow-glow-bg sm:h-72 sm:w-72 lg:bottom-8 lg:h-95 lg:w-95"
      ></div>

      <div
        class="absolute bottom-8 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-gradient-to-t from-violet-600/25 to-transparent blur-2xl sm:h-56 sm:w-56 lg:bottom-16 lg:h-72 lg:w-72"
      ></div>

      <div
        class="absolute right-6 top-6 grid grid-cols-3 gap-2 opacity-60 sm:right-10 sm:top-10 lg:right-14 lg:top-16 lg:gap-3"
      >
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
        <span class="size-1.5 rounded-full bg-violet-500"></span>
      </div>

      <img
        src="/images/hero/my-image (2).png"
        alt="Mariana Barreto"
        class="relative z-10 w-[260px] object-contain drop-shadow-[0_18px_32px_rgba(76,29,149,0.35)] sm:w-[310px] lg:w-auto lg:max-h-[500px] lg:-translate-y-8"
      />

      <div
        class="absolute left-1/2 z-20 h-[2px] w-44 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-700 to-transparent sm:w-56 lg:bottom-7 lg:w-72"
      ></div>
    </div>
  </section>
</template>
