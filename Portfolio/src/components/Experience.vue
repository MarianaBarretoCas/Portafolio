<script setup>
import { Icon } from "@iconify/vue";
import { experience } from "../data/experience";
</script>

<template>
  <section
    id="experience"
    class="max-w-7xl mx-auto px-6 py-10 lg:px-8"
  >
    <h2 class="mb-8 text-2xl font-semibold text-white">Experience & Journey</h2>
    <div class="grid gap-8 lg:grid-cols-4">
      <article v-for="item in experience" :key="item.year" class="relative">
        <div class="flex items-center gap-4">
          <div
            class="inline-flex size-12 items-center justify-center rounded-full bg-violet-300/15 text-violet-400"
          >
            <Icon :icon="item.icon" class="text-2xl" />
          </div>

          <span class="text-sm font-semibold text-white">
            {{ item.year }}
          </span>

          <div
            class="hidden h-[2px] flex-1 bg-gradient-to-r from-violet-500 to-transparent lg:block"
          ></div>
        </div>

        <div class="mt-2 lg:pl-16">
          <h3 class="mb-2 text-base font-semibold text-white">
            {{ item.title }}
          </h3>

          <p class="text-sm leading-relaxed text-slate-300">
            {{ item.description }}
          </p>
        </div>
      </article>
    </div>
  </section>
</template>
