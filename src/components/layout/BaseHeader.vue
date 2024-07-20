<template>
  <aside :class="{'expended': isExpended}" class="responsive-navbar">
    <button @click="isExpended = false" class="icon close" />
    <nav aria-label="Main menu responsive version">
      <h2>Menu</h2>
      <ul>
        <li>
          <router-link :to="{name:'home'}">
            {{ $t("header.about") }}
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}">
            {{ $t("header.services") }}
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}">
            {{ $t("header.contact") }}
          </router-link>
        </li>
      </ul>
      <button class="icon primary">
        {{  $t("header.buildYourProjectButton") }}
      </button>
    </nav>
  </aside>
  <header class="responsive">
    <router-link :to="{name: 'home'}">
      <img src="/logo/logo-mini.svg" alt="we build together logo fullsize">
    </router-link>
    <button @click="isExpended = true" class="icon toggle-navbar" />
  </header>
  <header class="desktop">
    <router-link :to="{name: 'home'}">
      <img src="/logo/logo-full.svg" alt="we build together logo fullsize">
    </router-link>
    <nav aria-label="Main menu">
      <ul>
        <li>
          <router-link :to="{name:'home'}">
            {{ $t("header.about") }}
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}">
            {{ $t("header.services") }}
          </router-link>
        </li>
        <li>
          <router-link :to="{name:'home'}">
            {{ $t("header.contact") }}
          </router-link>
        </li>
      </ul>
    </nav>
    <button class="icon primary">
        {{  $t("header.buildYourProjectButton") }}
      </button>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import {ref} from "vue";

const isExpended = ref(false);
</script>

<style lang="scss" scoped>
@import "@/scss/components/layout/base-header.scss";
</style>