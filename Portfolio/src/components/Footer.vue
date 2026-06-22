<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
    <footer
    class="border-t border-border-soft  bg-nav px-6 py-6"
  >
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row"
    >
      <p class="text-sm text-muted">
        &copy; 2024 Mariana. All rights reserved.
      </p>

      <a
        href="#home"
        class="group flex items-center gap-2 text-sm font-medium text-violet-500 transition-colors hover:text-violet-400"
      >
        Back to top

        <Icon
          icon="lucide:arrow-up"
          class="text-lg text-violet-500 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-violet-400"
        />
      </a>
    </div>
  </footer>
</template>