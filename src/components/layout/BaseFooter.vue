<template>
  <footer>
    <div>
      <div>
        <label for="email">{{ $t("footer.top.sendMailLabel") }}:</label>
        <input id="email" type="email" />
        <button class="icon submit"></button>
      </div>
      <div>
        <span>{{ $t("footer.top.changeLangLabel") }}:</span>
        <div class="selector">
          <span class="value">Français</span>
          <span class="icon choose" />
        </div>
      </div>
    </div>
    <div>
      <h5>We build together - {{new Date().getFullYear()}} - {{$t("footer.allRightReserved")}}</h5>
      <div>
        <h5>{{$t("footer.followUsOn")}}</h5>
        <nav>
          <a><span class="icon twitter" /></a>
          <a><span class="icon instagram" /></a>
          <a><span class="icon youtube" /></a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "@/scss/components/layout/base-footer.scss";
</style>