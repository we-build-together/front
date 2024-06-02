<script setup lang="ts">
import { onMounted } from 'vue';
import { setDocumentTitle } from "@/utils/page";
import { useI18n } from 'vue-i18n';

const {t} = useI18n();

onMounted(() => {
  setDocumentTitle(t("documents.home"));
});
</script>

<template>
  <main>
    <div class="land-page">
      <h1>WeBuildTogether</h1>
    </div>
  </main>
</template>
