<template>
  <footer class="py-12 px-4 w-full">
    <div
      class="flex flex-col md:flex-row gap-12 md:gap-24 items-start justify-center max-w-5xl mx-auto"
    >
      <!-- Contact Info -->
      <div class="flex flex-col gap-6 flex-1 text-center md:text-left w-full">
        <div class="flex flex-col gap-2">
          <h2 class="text-3xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <p class="text-slate-700 dark:text-white">
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
        </div>

        <div class="flex flex-col gap-4 items-center md:items-start">
          <a
            class="flex items-center gap-3 text-lg font-semibold text-primary dark:text-primary hover:underline transition-colors"
            href="mailto:samsonpaulinoedsel@email.com"
          >
            <span class="material-symbols-outlined">mail</span>
            samsonpaulinoedsel@email.com
          </a>

          <div
            class="flex items-center gap-6 text-primary dark:text-primary mt-2"
          >
            <a
              aria-label="GitHub Profile"
              class="hover:text-primary-dark dark:hover:text-blue-300 transition-colors p-2 hover:bg-primary/10 rounded-full"
              href="https://github.com/spicy-samson"
            >
              <svg
                aria-hidden="true"
                class="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  clip-rule="evenodd"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                  fill-rule="evenodd"
                ></path>
              </svg>
            </a>
            <a
              aria-label="LinkedIn Profile"
              class="hover:text-primary-dark dark:hover:text-blue-300 transition-colors p-2 hover:bg-primary/10 rounded-full"
              href="https://www.linkedin.com/in/paulino-edsel-samson-412a0a316/"
            >
              <svg
                aria-hidden="true"
                class="h-7 w-7"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <p
          class="text-sm text-slate-600 dark:text-slate-300 mt-auto pt-8 font-medium"
        >
          © 2025 Paulino Samson. All rights reserved.
        </p>
      </div>

      <!-- Contact Form -->
      <div class="relative flex-1 w-full overflow-hidden">
        <!-- Glossy overlay effect -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-white/30 via-white/20 to-white/30 dark:from-slate-900/40 dark:via-slate-800/30 dark:to-slate-900/40 backdrop-blur-2xl rounded-2xl border border-white/30 dark:border-white/10 shadow-2xl shadow-black/10 dark:shadow-black/30"
        ></div>
        <!-- Shine effect -->
        <div
          class="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl pointer-events-none"
        ></div>
        <form class="relative z-10 flex flex-col gap-5 p-8" @submit.prevent>
          <div class="flex flex-col gap-1.5">
            <label
              class="text-sm font-semibold text-slate-700 dark:text-slate-100 ml-1"
              for="name"
              >Name</label
            >
            <input
              class="h-11 w-full rounded-xl border border-white/30 dark:border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-sm px-4 text-sm outline-none focus:border-primary/60 dark:focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-300 text-slate-900 dark:text-slate-100"
              id="name"
              placeholder="Your Name"
              type="text"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label
              class="text-sm font-semibold text-slate-700 dark:text-slate-100 ml-1"
              for="email"
              >Email</label
            >
            <input
              class="h-11 w-full rounded-xl border border-white/30 dark:border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-sm px-4 text-sm outline-none focus:border-primary/60 dark:focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all placeholder:text-slate-300 dark:placeholder:text-slate-300 text-slate-900 dark:text-slate-100"
              id="email"
              placeholder="your@email.com"
              type="email"
            />
          </div>
          <div class="flex flex-col gap-1.5">
            <label
              class="text-sm font-semibold text-slate-700 dark:text-slate-100 ml-1"
              for="message"
              >Message</label
            >
            <textarea
              class="h-32 w-full rounded-xl border border-white/30 dark:border-white/20 bg-white/40 dark:bg-white/5 backdrop-blur-sm p-4 text-sm outline-none focus:border-primary/60 dark:focus:border-primary/60 focus:ring-4 focus:ring-primary/10 transition-all resize-none placeholder:text-slate-300 dark:placeholder:text-slate-300 text-slate-900 dark:text-slate-100"
              id="message"
              placeholder="How can I help you?"
            ></textarea>
          </div>
          <button
            class="mt-2 h-12 w-full rounded-full bg-primary hover:bg-primary-dark text-white font-bold transition-all shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-0.5 active:scale-95"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  </footer>
</template>

<script setup></script>
