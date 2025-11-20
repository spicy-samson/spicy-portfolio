<template>
  <header
    class="sticky top-0 z-50 flex items-center justify-between whitespace-nowrap border-b border-white/20 dark:border-white/10 bg-white/70 dark:bg-black/70 backdrop-blur-md px-4 md:px-10 py-2 transition-colors duration-300"
  >
    <a
      class="flex items-center gap-3 text-primary dark:text-white"
      href="#home"
    >
      <span class="material-symbols-outlined text-2xl"> data_object </span>
      <h2
        class="text-xl font-bold leading-tight tracking-[-0.015em] font-display"
      >
        Paulino Samson
      </h2>
    </a>
    <div class="hidden md:flex items-center gap-6">
      <nav class="flex items-center gap-6">
        <a
          class="text-sm font-medium leading-normal hover:text-primary transition-colors"
          href="#skills"
          >Skills</a
        >
        <a
          class="text-sm font-medium leading-normal hover:text-primary transition-colors"
          href="#projects"
          >Projects</a
        >
        <a
          class="text-sm font-medium leading-normal hover:text-primary transition-colors"
          href="#contact"
          >Contact</a
        >
      </nav>

      <div class="h-6 w-px bg-slate-200 dark:bg-slate-700"></div>

      <button
        @click="toggleDarkMode"
        class="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300"
        aria-label="Toggle Dark Mode"
      >
        <span class="material-symbols-outlined text-xl">
          {{ isDark ? "light_mode" : "dark_mode" }}
        </span>
      </button>

      <a
        class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-9 px-5 bg-primary hover:bg-primary-dark text-white text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 active:scale-95"
        href="#"
      >
        <span class="truncate">Resume</span>
      </a>
    </div>
    <button
      @click="toggleMenu"
      class="md:hidden text-primary dark:text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
    >
      <span class="material-symbols-outlined text-3xl">{{
        isMenuOpen ? "close" : "menu"
      }}</span>
    </button>

    <!-- Mobile Menu -->
    <div
      v-show="isMenuOpen"
      class="absolute top-full left-0 w-full bg-white/90 dark:bg-black/90 backdrop-blur-xl border-b border-white/20 dark:border-white/10 shadow-xl md:hidden flex flex-col p-4 gap-4 transition-all duration-300 origin-top"
    >
      <nav class="flex flex-col gap-2">
        <a
          @click="isMenuOpen = false"
          class="p-3 rounded-xl hover:bg-primary/10 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium transition-colors"
          href="#skills"
          >Skills</a
        >
        <a
          @click="isMenuOpen = false"
          class="p-3 rounded-xl hover:bg-primary/10 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium transition-colors"
          href="#projects"
          >Projects</a
        >
        <a
          @click="isMenuOpen = false"
          class="p-3 rounded-xl hover:bg-primary/10 dark:hover:bg-white/10 text-slate-900 dark:text-white font-medium transition-colors"
          href="#contact"
          >Contact</a
        >
      </nav>

      <div class="h-px w-full bg-slate-200 dark:bg-slate-700"></div>

      <div class="flex items-center justify-between px-2">
        <span class="text-sm font-medium text-slate-600 dark:text-slate-300"
          >Dark Mode</span
        >
        <button
          @click="toggleDarkMode"
          class="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
        >
          <span class="material-symbols-outlined text-xl">
            {{ isDark ? "light_mode" : "dark_mode" }}
          </span>
        </button>
      </div>

      <a
        class="flex w-full items-center justify-center rounded-xl h-12 bg-primary text-white font-bold shadow-lg"
        href="#"
      >
        Download Resume
      </a>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";

const isDark = ref(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const toggleDarkMode = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  if (savedTheme === "dark" || (!savedTheme && systemPrefersDark)) {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  } else {
    isDark.value = false;
    document.documentElement.classList.remove("dark");
  }
});
</script>
