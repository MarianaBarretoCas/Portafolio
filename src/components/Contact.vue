<script setup>
import { reactive } from "vue";
import { Icon } from "@iconify/vue";

const form = reactive({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  const to = "marianabarretocas@gmail.com";

  const subject = encodeURIComponent(
    form.subject || "New message from portfolio"
  );

  const body = encodeURIComponent(
    `Name: ${form.name}
Email: ${form.email}

Message:
${form.message}`
  );

  window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
};
</script>

<template>
  <section
    id="contact"
    class="mx-auto max-w-7xl scroll-mt-32 px-6 pt-14 pb-20 lg:px-8"
  >
    <div class="glass-surface rounded-3xl p-6 lg:p-8">
      <div class="grid gap-10 lg:grid-cols-[0.9fr_1.4fr]">
        <div>
          <h2 class="mb-3 text-2xl font-semibold text-content">
            Let's Connect!
          </h2>

          <p class="mb-8 max-w-md text-sm leading-relaxed text-muted">
            I'd love to hear about your project, opportunity or idea. Feel free
            to contact me through any of these channels.
          </p>

          <div class="space-y-4">
            <a
              href="mailto:marianabarretocas@gmail.com"
              class="group flex items-center gap-4 text-sm text-muted transition-colors duration-300 hover:text-content"
            >
              <span
                class="icon-button !size-10 shrink-0 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:!shadow-glow"
              >
                <Icon
                  icon="lucide:mail"
                  class="text-xl text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300"
                />
              </span>

              <span class="break-all">marianabarretocas@gmail.com</span>
            </a>

            <div class="flex items-center gap-4 text-sm text-muted">
              <span class="icon-button !size-10 shrink-0">
                <Icon icon="lucide:map-pin" class="text-xl text-violet-400" />
              </span>

              <span>Bogotá, Colombia</span>
            </div>

            <a
              href="https://linkedin.com/in/mariana-barreto-castro"
              class="group flex items-center gap-4 text-sm text-muted transition-colors duration-300 hover:text-content"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="icon-button !size-10 shrink-0 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:!shadow-glow"
              >
                <Icon
                  icon="mdi:linkedin"
                  class="text-xl text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300"
                />
              </span>

              <span class="break-all">
                linkedin.com/in/mariana-barreto-castro
              </span>
            </a>

            <a
              href="https://github.com/MarianaBarretoCas"
              class="group flex items-center gap-4 text-sm text-muted transition-colors duration-300 hover:text-content"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="icon-button !size-10 shrink-0 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:!shadow-glow"
              >
                <Icon
                  icon="mdi:github"
                  class="text-xl text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300"
                />
              </span>

              <span class="break-all">github.com/MarianaBarretoCas</span>
            </a>

            <a
              href="https://wa.me/573124669522?text=Hello%20Mariana%2C%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20contact%20you."
              class="group flex items-center gap-4 text-sm text-muted transition-colors duration-300 hover:text-content"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span
                class="icon-button !size-10 shrink-0 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 group-hover:!shadow-glow"
              >
                <Icon
                  icon="mdi:whatsapp"
                  class="text-xl text-violet-400 transition-all duration-300 group-hover:scale-110 group-hover:text-violet-300"
                />
              </span>

              <span>+57 312 466 9522</span>
            </a>
          </div>
        </div>

        <form class="mt-6 space-y-4" @submit.prevent="handleSubmit">
          <div class="grid gap-4 md:grid-cols-2">
            <input
              v-model="form.name"
              type="text"
              placeholder="Your name"
              required
              class="input-field px-4 py-5 text-sm"
            />

            <input
              v-model="form.email"
              type="email"
              placeholder="Your email"
              required
              class="input-field px-4 py-5 text-sm"
            />
          </div>

          <input
            v-model="form.subject"
            type="text"
            placeholder="Subject"
            required
            class="input-field px-4 py-5 text-sm"
          />

          <textarea
            v-model="form.message"
            rows="6"
            placeholder="Message"
            required
            class="input-field resize-none px-4 py-3 text-sm"
          ></textarea>

          <button type="submit" class="btn btn-primary group w-full">
            <Icon
              icon="lucide:send"
              class="text-lg transition-transform duration-300 group-hover:translate-x-1"
            />

            Send Message
          </button>
        </form>
      </div>
    </div>
  </section>
</template>
