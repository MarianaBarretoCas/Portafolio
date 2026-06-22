<script setup>
import { Icon } from "@iconify/vue";

const aboutCards = [
  {
    title: "Analytical",
    description:
      "I love understanding problems deeply and finding the best solutions.",
    icon: "ph:brain-duotone",
    iconBoxClass:
      "bg-icon-purple-surface text-violet-400 group-hover:bg-violet-500/35",
  },
  {
    title: "Developer",
    description: "I turn ideas into clean, efficient and scalable code.",
    icon: "lucide:code-xml",
    iconBoxClass:
      "bg-icon-green-surface text-green-500 group-hover:bg-green-500/35",
  },
  {
    title: "Learner",
    description: "I'm always learning something new and challenging myself.",
    icon: "solar:lightbulb-bolt-outline",
    iconBoxClass:
      "bg-icon-yellow-surface text-yellow-500 group-hover:bg-yellow-500/35",
  },
];
</script>

<template>
  <section
    id="about"
    class="mx-auto max-w-7xl rounded-3xl border border-border-soft bg-panel px-6 py-10 text-center shadow-panel backdrop-blur-xl transition-all duration-300 lg:px-8 lg:text-start"
  >
    <div class="grid items-start gap-10 lg:grid-cols-[1.05fr_1.55fr]">
      <div class="my-resume">
        <h2 class="mb-4 text-2xl font-semibold text-content">
          About Me
        </h2>

        <div class="space-y-4 text-sm leading-relaxed text-muted">
          <p>
            I'm a curious and proactive developer with experience in
            requirements analysis, system migration and web development.
          </p>

          <p>
            I enjoy transforming business needs into technical solutions that
            generate real impact.
          </p>

          <p>
            I love learning, solving problems and continuously improving my
            skills to build scalable and user-centered applications.
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