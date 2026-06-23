<script setup>
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useLanguage } from "../composables/useLanguage";

defineProps({
  project: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const { t } = useLanguage();

const isOpen = ref(false);

const openDetails = () => {
  isOpen.value = true;
};

const closeDetails = () => {
  isOpen.value = false;
};
</script>

<template>
  <article
    class="project-organic-card group relative h-[455px] w-full max-w-[340px] overflow-hidden p-4"
  >
    <!-- Imagen principal -->
    <div
      class="project-organic-image relative h-40 overflow-hidden bg-surface-strong"
    >
      <img
        :src="project.image"
        :alt="project.title"
        class="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />

      <div
        class="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent"
      ></div>

      <span
        class="absolute left-3 top-3 inline-flex size-8 items-center justify-center rounded-xl border border-white/20 bg-black/55 text-xs font-bold text-white backdrop-blur-md"
      >
        {{ String(index + 1).padStart(2, "0") }}
      </span>

      <span
        class="absolute bottom-3 left-3 max-w-[88%] rounded-full border border-violet-300/30 bg-violet-500/25 px-3 py-1 text-[11px] font-semibold text-white backdrop-blur-md"
      >
        {{ project.type }}
      </span>
    </div>

    <!-- Contenido frontal -->
    <div class="flex h-[calc(100%-10rem)] flex-col pt-4">
      <span class="project-chip mb-3 w-fit">
        {{ project.status }}
      </span>

      <h3 class="mb-2 text-xl font-bold text-content">
        {{ project.title }}
      </h3>

      <p
        class="mb-4 max-h-[72px] overflow-hidden text-sm leading-relaxed text-muted"
      >
        {{ project.shortDescription }}
      </p>

      <div class="mb-4 flex flex-wrap gap-2">
        <span
          v-for="technology in project.technologies.slice(0, 4)"
          :key="technology"
          class="project-chip"
        >
          {{ technology }}
        </span>

        <span
          v-if="project.technologies.length > 4"
          class="project-chip text-muted"
        >
          +{{ project.technologies.length - 4 }}
        </span>
      </div>

      <div class="mt-auto flex items-center justify-between gap-3">
        <button
          type="button"
          class="inline-flex items-center gap-2 rounded-xl border border-violet-500/35 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-content transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/70 hover:bg-violet-500/15 hover:shadow-glow"
          @click="openDetails"
        >
          {{ t.projects.detailsLabel }}

          <Icon
            icon="lucide:arrow-up-right"
            class="text-base text-violet-400"
          />
        </button>

        <a
          v-if="project.githubUrl"
          :href="project.githubUrl"
          target="_blank"
          rel="noopener noreferrer"
          :aria-label="project.githubLabel"
          class="icon-button !size-10 group/github"
        >
          <Icon
            icon="mdi:github"
            class="text-2xl text-content transition-all duration-300 group-hover/github:scale-110 group-hover/github:text-violet-400"
          />
        </a>
      </div>
    </div>

    <!-- Case Study encima de la misma card -->
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="translate-y-5 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-5 opacity-0"
    >
      <div
        v-if="isOpen"
        class="absolute inset-4 z-30 flex flex-col rounded-[1.5rem] border border-violet-400/45 bg-surface-strong p-5 shadow-card backdrop-blur-2xl"
      >
        <div class="mb-4 flex items-start justify-between gap-4">
          <div>
            <span
              class="text-[11px] font-bold uppercase tracking-[0.22em] text-violet-400"
            >
              {{ t.projects.breakdownLabel }}
            </span>

            <h3 class="mt-2 text-xl font-bold leading-tight text-content">
              {{ project.title }}
            </h3>
          </div>

          <button
            type="button"
            class="icon-button !size-9 shrink-0"
            :aria-label="t.projects.closeDetailsLabel"
            @click="closeDetails"
          >
            <Icon icon="lucide:x" class="text-lg" />
          </button>
        </div>

        <div class="h-full space-y-4 overflow-y-auto pr-2">
          <section>
            <h4
              class="mb-1 flex items-center gap-2 text-sm font-semibold text-content"
            >
              <Icon icon="lucide:circle-alert" class="text-violet-400" />
              {{ t.projects.problemLabel }}
            </h4>

            <p class="text-sm leading-6 text-muted">
              {{ project.problem }}
            </p>
          </section>

          <section>
            <h4
              class="mb-1 flex items-center gap-2 text-sm font-semibold text-content"
            >
              <Icon icon="lucide:lightbulb" class="text-violet-400" />
              {{ t.projects.solutionLabel }}
            </h4>

            <p class="text-sm leading-6 text-muted">
              {{ project.solution }}
            </p>
          </section>

          <section>
            <h4
              class="mb-1 flex items-center gap-2 text-sm font-semibold text-content"
            >
              <Icon icon="lucide:user-round-check" class="text-violet-400" />
              {{ t.projects.roleLabel }}
            </h4>

            <p class="text-sm leading-6 text-muted">
              {{ project.role }}
            </p>
          </section>

          <section>
            <h4
              class="mb-3 flex items-center gap-2 text-sm font-semibold text-content"
            >
              <Icon icon="lucide:list-checks" class="text-violet-400" />
              {{ t.projects.featuresLabel }}
            </h4>

            <ul class="space-y-2">
              <li
                v-for="feature in project.features"
                :key="feature"
                class="flex gap-2 text-sm leading-6 text-muted"
              >
                <Icon
                  icon="lucide:check"
                  class="mt-1 shrink-0 text-violet-400"
                />

                <span>{{ feature }}</span>
              </li>
            </ul>
          </section>

          <section>
            <h4
              class="mb-3 flex items-center gap-2 text-sm font-semibold text-content"
            >
              <Icon icon="lucide:layers-3" class="text-violet-400" />
              {{ t.projects.stackLabel }}
            </h4>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="technology in project.technologies"
                :key="technology"
                class="project-chip"
              >
                {{ technology }}
              </span>
            </div>
          </section>
        </div>
      </div>
    </Transition>
  </article>
</template>
