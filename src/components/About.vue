<script setup>
import { computed } from "vue";
import { Icon } from "@iconify/vue";
import { useLanguage } from "../composables/useLanguage";

const { t } = useLanguage();

const cardStyles = {
  purple: "bg-icon-purple-surface text-violet-400 group-hover:bg-violet-500/35",
  green: "bg-icon-green-surface text-green-500 group-hover:bg-green-500/35",
  yellow: "bg-icon-yellow-surface text-yellow-500 group-hover:bg-yellow-500/35",
};

const aboutCards = computed(() =>
  t.value.about.cards.map((card) => ({
    ...card,
    iconBoxClass: cardStyles[card.type],
  }))
);
</script>

<template>
  <section
    id="about"
    class="mx-auto max-w-7xl rounded-3xl border border-border-soft bg-panel px-6 py-10 text-center shadow-panel backdrop-blur-xl transition-all duration-300 lg:px-8 lg:text-start"
  >
    <div class="grid items-start gap-10 lg:grid-cols-[1.05fr_1.55fr]">
      <div class="my-resume">
        <h2 class="mb-4 text-2xl font-semibold text-content">
          {{ t.about.title }}
        </h2>

        <h3 class="mb-5 text-xl font-semibold leading-snug text-violet-400">
          {{ t.about.tagline }}
        </h3>

        <div class="space-y-4 text-sm leading-relaxed text-muted">
          <p v-for="paragraph in t.about.paragraphs" :key="paragraph">
            {{ paragraph }}
          </p>
        </div>
      </div>

      <div class="grid gap-6 sm:grid-cols-3 lg:gap-4">
        <article
          v-for="card in aboutCards"
          :key="card.title"
          class="group rounded-2xl border border-border-soft bg-feature-card p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/50 hover:bg-feature-card-hover hover:shadow-glow"
        >
          <div
            class="mb-5 inline-flex size-11 items-center justify-center rounded-full transition-colors duration-300"
            :class="card.iconBoxClass"
          >
            <Icon :icon="card.icon" class="text-2xl" />
          </div>

          <h3 class="mb-3 text-lg font-semibold text-content">
            {{ card.title }}
          </h3>

          <p class="text-sm leading-relaxed text-muted">
            {{ card.description }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>
