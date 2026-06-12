<script setup>
import { Icon } from "@iconify/vue";
</script>

<template>
  <section
    id="home"
    class="max-w-7xl mt-2 mx-auto px-6 py-5 grid lg:grid-cols-2 items-center gap-12 text-center lg:text-left lg:-translate-y-16 lg:-mb-16"
  >
    <div class="info ">
      <h3 class="text-violet-400 mb-2 text-sm tracking-widest">HELLO! I'M</h3>
      <h1 class="text-4xl sm:text-5xl lg:text-5xl font-bold text-white mb-1">
        Mariana Barreto Castro
      </h1>
      <h3 class="text-purple-400 font-semibold mb-3">
        Functional Software Analyst & Developer
      </h3>
      <p class="text-slate-300 leading-relaxed max-w-lg mb-1">
        I help businesses and teams turn ideas into effective digital solutions
        with code, analysis and a user-focused mindset.
      </p>
      <div class="flex flex-col gap-4 mt-8 sm:flex-row sm:items-center">
        <a
          href="#projects"
          class="group flex items-center justify-center text-center gap-2 border border-transparent bg-gradient-to-r from-purple-700 to-violet-700 text-white font-medium py-3 px-6 rounded-xl shadow-md shadow-violet-900/30 hover:-translate-y-1 hover:from-purple-600 hover:to-violet-600 hover:shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-all duration-300"
        >
          View my work
          <Icon
            icon="bitcoin-icons:arrow-right-filled"
            class="text-lg group-hover:translate-x-1 transition-transform duration-300"
          />
        </a>

        <a
          href="#contact"
          class="group flex justify-center text-center items-center gap-2 border border-purple-500 bg-transparent text-white font-medium py-3 px-6 rounded-xl hover:-translate-y-1 hover:bg-violet-500/10 hover:border-violet-400 hover:shadow-[0_0_18px_rgba(139,92,246,0.28)] transition-all duration-300"
        >
          Contact me
          <Icon
            icon="streamline-cyber:email-2"
            class="text-lg group-hover:scale-110 group-hover:text-violet-300 transition-all duration-300"
          />
        </a>
      </div>
      <div id="socialIcons"  class="flex items-center justify-center gap-3 mt-5 lg:justify-start">
        <a
          href="#"
          class="group inline-flex size-11 items-center justify-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-[0_0_18px_rgba(139,92,246,0.25)] transition-all duration-300"
        >
          <Icon
            icon="mdi:linkedin"
            class="text-xl text-blue-500 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300"
          />
        </a>

        <a
          href="#"
          class="group inline-flex size-11 items-center justify-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-[0_0_18px_rgba(139,92,246,0.25)] transition-all duration-300"
        >
          <Icon
            icon="mdi:github"
            class="text-xl text-white group-hover:text-violet-400 group-hover:scale-110 transition-all duration-300"
          />
        </a>

        <a
          href="#"
          class="group inline-flex size-11 items-center justify-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-[0_0_18px_rgba(139,92,246,0.25)] transition-all duration-300"
        >
          <Icon
            icon="ic:baseline-whatsapp"
            class="text-xl text-green-500 group-hover:text-green-400 group-hover:scale-110 transition-all duration-300"
          />
        </a>

        <a
          href="#"
          class="group inline-flex size-11 items-center justify-center rounded-xl border border-white/10 hover:-translate-y-1 hover:border-violet-500 hover:bg-violet-500/10 hover:shadow-[0_0_18px_rgba(139,92,246,0.25)] transition-all duration-300"
        >
          <Icon
            icon="streamline-cyber:email-2"
            class="text-xl text-white group-hover:text-violet-400 group-hover:scale-110 transition-all duration-300"
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
        class="absolute bottom-4 left-1/2 h-56 w-56 -translate-x-1/2 rounded-[48%_52%_44%_56%/42%_40%_60%_58%] border border-violet-500/20 bg-gradient-to-br from-violet-950 via-purple-950 to-violet-900/80 shadow-[0_0_55px_rgba(124,58,237,0.28)] sm:h-72 sm:w-72 lg:bottom-8 lg:h-95 lg:w-95"
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
        class="absolute left-1/2 z-20 h-[2px] w-44 -translate-x-1/2 bg-gradient-to-r from-transparent via-violet-400/80 to-transparent sm:w-56 lg:bottom-7 lg:w-72"
      ></div>
    </div>
  </section>
</template>
