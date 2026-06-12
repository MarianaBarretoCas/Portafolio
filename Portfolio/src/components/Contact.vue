<script setup>
import { Icon } from "@iconify/vue";
</script>
<template>
  <section
    id="contact"
    class="scroll-mt-32 max-w-7xl mx-auto border-t border-white/10 px-6 pt-14 pb-20 lg:px-8"
  >
    <div class="rounded-2xl border border-white/10 bg-slate-900/20 p-6 lg:p-8">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <h2 class="mb-3 text-2xl font-semibold text-white">Let's Connect!</h2>
          <p class="mb-8 max-w-md text-sm leading-relaxed text-slate-300">
            I'd love to hear about your project, opportunity or idea. Feel free
            to contact me through any of these channels.
          </p>

          <div class="space-y-4">
            <a
              href="mailto:marianabarretocas@gmail.com"
              class="group flex items-center gap-4 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <span
                class="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 text-violet-400 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:text-white transition-all duration-300"
              >
                <Icon icon="lucide:mail" class="text-xl" />
              </span>

              marianabarretocas@gmail.com
            </a>

            <div class="flex items-center gap-4 text-sm text-slate-300">
              <span
                class="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 text-violet-400"
              >
                <Icon icon="lucide:map-pin" class="text-xl" />
              </span>

              Bogotá, Colombia
            </div>

            <a
              href="https://linkedin.com/in/mariana-barreto-castro"
              class="group flex items-center gap-4 text-sm text-slate-300 transition-colors hover:text-white"
              target="_blank"
            >
              <span
                class="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 text-violet-400 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:text-white transition-all duration-300"
              >
                <Icon icon="mdi:linkedin" class="text-xl" />
              </span>

              linkedin.com/in/mariana-barreto-castro
            </a>

            <a
              href="https://github.com/MarianaBarretoCas"
              class="group flex items-center gap-4 text-sm text-slate-300 transition-colors hover:text-white"
              target="_blank"
            >
              <span
                class="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 text-violet-400 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:text-white transition-all duration-300"
              >
                <Icon icon="mdi:github" class="text-xl" />
              </span>

              github.com/MarianaBarretoCas
            </a>

            <a
              href="#"
              class="group flex items-center gap-4 text-sm text-slate-300 transition-colors hover:text-white"
            >
              <span
                class="inline-flex size-10 items-center justify-center rounded-xl border border-white/10 bg-slate-950/40 text-violet-400 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:text-white transition-all duration-300"
              >
                <Icon icon="mdi:whatsapp" class="text-xl" />
              </span>

              +57 312 466 9522
            </a>
          </div>
        </div>

        <!-- Contact form -->
        <form class="space-y-4 mt-6">
          <div class="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              placeholder="Your name"
              class="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-5 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/20"
            />

            <input
              type="email"
              placeholder="Your email"
              class="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-5 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/20"
            />
          </div>

          <input
            type="text"
            placeholder="Subject"
            class="w-full rounded-xl border border-white/10 bg-slate-950/40 px-4 py-5 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/20"
          />

          <textarea
            rows="6"
            placeholder="Message"
            class="w-full resize-none rounded-xl border border-white/10 bg-slate-950/40 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition-all focus:border-violet-500/70 focus:ring-2 focus:ring-violet-500/20"
          ></textarea>

          <button
            type="button"
            class="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-700 to-violet-700 px-6 py-3 text-sm font-medium text-white shadow-md shadow-violet-900/30 hover:-translate-y-1 hover:from-purple-600 hover:to-violet-600 hover:shadow-[0_0_22px_rgba(139,92,246,0.45)] transition-all duration-300"
          >
            <Icon
              icon="lucide:send"
              class="text-lg group-hover:translate-x-1 transition-transform duration-300"
            />
            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
