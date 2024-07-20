<template>
  <section class="faq-section">
    <section class="faq">
      <article v-for="(line, i) in faq" :key="line">
        <header @click="() => toggleFaqQuestion(i)">
          <h4>{{line.title}}</h4>
          <span class="icon" :class="currentFaqQuestionToggled === i ? 'toggled' : 'toggle'" />
        </header>
        <template v-if="currentFaqQuestionToggled === i">
          <p>{{line.description}}</p>
          <button class="icon see-more">
            <router-link :to="line.link">
              {{$t("faq.article.seeMoreButton")}}
            </router-link>
          </button>
        </template>
      </article>
    </section>

    <article class="contact-us">
      <h2>{{$t("faq.title")}}</h2>
      <p>{{$t("faq.subtitle")}}</p>
      <button class="icon contact-us">
        <router-link to="">
          {{$t("faq.buttonContactUS")}}
        </router-link>
      </button>
    </article>
  </section>
</template>

<script lang="ts" setup>
  import {ref} from "vue";

  import faq from "@/tmp/faq.json"

  const currentFaqQuestionToggled = ref(-1);

  function toggleFaqQuestion(index: number) {
    currentFaqQuestionToggled.value =
        currentFaqQuestionToggled.value === index ? -1 : index;
  }
</script>

<style lang="scss" scoped>
@import "@/scss/components/home/home-faq.scss";
</style>