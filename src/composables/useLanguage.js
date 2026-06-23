import { ref, computed, onMounted } from "vue";
import { content } from "../data/content";

const language = ref("en");

const applyLanguage = (value) => {
  language.value = value;
  localStorage.setItem("language", value);
  document.documentElement.lang = value;
};

export const useLanguage = () => {
  onMounted(() => {
    const savedLanguage = localStorage.getItem("language");

    if (savedLanguage) {
      applyLanguage(savedLanguage);
      return;
    }

    applyLanguage("en");
  });

  const toggleLanguage = () => {
    applyLanguage(language.value === "en" ? "es" : "en");
  };

  const setLanguage = (value) => {
    applyLanguage(value);
  };

  const t = computed(() => content[language.value]);

  return {
    language,
    t,
    toggleLanguage,
    setLanguage,
  };
};