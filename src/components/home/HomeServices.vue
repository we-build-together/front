<template>
  <section>
    <h2>{{ $t('services.title') }}</h2>

    <section>
      <article v-for="service in services" :key="JSON.stringify(service)">
        <h3>{{ service[locale].title }}</h3>
        <p>{{ service[locale].shortDescription }}</p>

        <ul>
          <li v-for="line in service[locale].lines" :key="line">
            {{ line }}
          </li>
        </ul>

        <footer>
          <h5>{{ $t('services.hostingOption') }} <router-link :to="{name: 'home'}">{{ $t('services.see-more') }}</router-link></h5>
          <button class="primary">{{ $t('services.see-more') }}</button>
        </footer>
      </article>
    </section>
  </section>
</template>
<script setup lang="ts">
import { useI18n } from 'vue-i18n'

interface IServiceItem {
  title: string;
  shortDescription: string;
  lines: string[];
}
type IService = Record<string, IServiceItem>;

import data from "@/tmp/services.json";

const services = data as IService[];
const {locale} = useI18n();
</script>

<style lang="scss" scoped>
@import '@/scss/components/home/home-services.scss';
</style>