import { ref, onMounted } from "vue";

const theme = ref("dark");

const applyTheme = (value) => {
  theme.value = value;

  document.documentElement.classList.toggle("light", value === "light");

  localStorage.setItem("theme", value);
};

export const useTheme = () => {
  onMounted(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      applyTheme(savedTheme);
      return;
    }

    applyTheme("dark");
  });

  const toggleTheme = () => {
    applyTheme(theme.value === "dark" ? "light" : "dark");
  };

  return {
    theme,
    toggleTheme,
  };
};