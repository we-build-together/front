<template>
  <section class="about">
    <article class="left">
      <h3>{{$t("about.preTitle")}}</h3>
      <h2>{{$t("about.title")}}</h2>
    </article>
    <section class="cards">
      <article class="card" v-for="(_, i) in Array(3).fill('')" :key="i">
        <span class="icon" :class="$t(`about.cards.${i}.icon`)" />
        <h4>{{$t(`about.cards.${i}.title`)}}</h4>
        <p>{{$t(`about.cards.${i}.description`)}}</p>
      </article>
    </section>
  </section>
</template>

<style lang="scss" scoped>
@import "@/scss/components/home/home-about.scss";
</style>