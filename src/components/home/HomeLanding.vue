<template>
  <div class="hero-header">
    <div class="wave-motif" />
    <div class="right">
      <h1>
        <span>{{$t("heroHeader.title.0")}}</span>
        <span class="underline">
          <span>{{$t("heroHeader.title.1")}}</span>
          <span>{{$t("heroHeader.title.2")}}</span>
        </span>
        <span>{{$t("heroHeader.title.3")}}</span>
      </h1>
      <p>{{$t("heroHeader.description")}}</p>
      <div class="buttons">
        <button class="primary">{{$t("heroHeader.buttons.0")}}</button>
        <button class="secondary">{{$t("heroHeader.buttons.1")}}</button>
      </div>
    </div>
    <div class="left">
      <div class="asset-background">
        <div class="dialog">{{$t("heroHeader.dialogs.0")}}</div>
        <div class="dialog">{{$t("heroHeader.dialogs.1")}}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/scss/components/home/home-landing.scss";
</style>