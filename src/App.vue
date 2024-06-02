<script setup lang="ts">
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { RouterLink, RouterView } from 'vue-router';

const {t, locale} = useI18n();
const locales = ["fr", "en"];

const langOpened = ref(false);
const langDropdownRef = ref(null);

function chooseLang(lang: string): void {
  locale.value = lang;
}

function checkLangDropdown(event: MouseEvent) {
  let parent = (event.target as HTMLElement).parentElement;

  while(parent && parent !== langDropdownRef.value)
    parent = parent?.parentElement as HTMLElement|null;

  if(!parent || parent !== langDropdownRef.value) 
    langOpened.value = false;
}

window.addEventListener("click", event =>
  [checkLangDropdown].forEach(f => f(event))
);

</script>

<template>
  <header>
    <nav>
      <ul>
        <li>
          <RouterLink to="/">{{ t("header.nav.welcome") }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/">{{ t("header.nav.about") }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/">{{ t("header.nav.services") }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/">{{ t("header.nav.faq") }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/">{{ t("header.nav.contact") }}</RouterLink>
        </li>
      </ul>
    </nav>
    <aside ref="langDropdownRef" class="langs">
      <button @click="langOpened = !langOpened" class="icon">
        {{ locale }}
      </button>
      <ul v-show="langOpened">
        <li 
          @click="() => chooseLang(lang)" 
          class="icon" 
          :class="{'active': lang === locale}" 
          v-for="lang in locales" 
          :key="lang"
        >
          {{ lang }}
        </li>
      </ul>
    </aside>
  </header>

  <RouterView />
</template>

<style lang="scss">
@import "assets/layout/header.scss";
</style>