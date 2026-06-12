<script setup>
import { Icon } from "@iconify/vue";
const aboutCards = [
  {
    title: "Analytical",
    description:
      "I love understanding problems deeply and finding the best solutions.",
    icon: "ph:brain-duotone",
    iconBoxClass:
      "bg-violet-500/10 text-violet-400 group-hover:bg-violet-500/20",
  },
  {
    title: "Developer",
    description: "I turn ideas into clean, efficient and scalable code.",
    icon: "lucide:code-xml",
    iconBoxClass: "bg-green-600/10 text-green-500 group-hover:bg-green-500/20",
  },
  {
    title: "Learner",
    description: "I'm always learning something new and challenging myself.",
    icon: "solar:lightbulb-bolt-outline",
    iconBoxClass:
      "bg-yellow-500/10 text-yellow-400 group-hover:bg-yellow-500/20",
  },
];
</script>

<template>
  <section
    id="about"
    class="max-w-7xl mx-auto rounded-2xl border text-center lg:text-start border-white/10 bg-slate-900/20 px-6 py-10 lg:px-8"
  >
    <div class="grid gap-10 lg:grid-cols-[1.05fr_1.55fr] items-start">
      <div class="my-resume">
        <h2 class="mb-4 text-2xl font-semibold text-white">About Me</h2>

        <div class="space-y-4 text-sm leading-relaxed text-slate-300">
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
      <div class="grid gap-10 lg:gap-4 sm:grid-cols-3">
        <article v-for="card in aboutCards" :key="card.title"
          class="group rounded-2xl border border-white/10 bg-slate-950/40 p-6 text-center hover:-translate-y-1 hover:border-violet-500/50 hover:shadow-[0_0_22px_rgba(139,92,246,0.18)] transition-all duration-300"
        >
        <div class="mb-5 inline-flex size-11 items-center justify-center rounded-full transition-colors duration-300"
        :class="card.iconBoxClass"
        >
          <Icon :icon="card.icon" class="text-2xl" />
        </div>
        <h3 class="mb-3 text-lg font-semibold text-white">
          {{card.title}}
        </h3>
        <p class="text-sm leading-relaxed text-slate-300">
          {{ card.description }}
        </p>
      </article>
      </div>
    </div>
  </section>
</template>
