<template>
  <base-header />
  <main>
    <router-view />
  </main>
  <base-footer />
</template>

<script setup lang="ts">
import BaseHeader from "@/components/layout/BaseHeader.vue";
import BaseFooter from "@/components/layout/BaseFooter.vue";
</script>