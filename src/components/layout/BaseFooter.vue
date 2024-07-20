<template>
  <footer>
    <div class="top">
      <div>
        <label for="email">{{ $t("footer.top.sendMailLabel") }}</label>
        <input id="email" type="email" placeholder="E-mail" />
        <button class="icon"></button>
      </div>
      <div>
        <span>{{ $t("footer.top.changeLangLabel") }}:</span>
        <div @click="toggleDropdown" class="selector">
          <span class="value">{{translateLang(locale)}}</span>
          <span class="icon choose" />

          <ul class="dropdown" v-show="langDropdownToggled">
            <li @click="locale = lang" v-for="lang in availableLocales" :key="lang"  :class="{'selected': lang === locale}" class="icon">
              {{translateLang(lang)}}
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="bottom">
      <h5>We build together - {{new Date().getFullYear()}} - {{$t("footer.allRightReserved")}}</h5>
      <div>
        <h5>{{$t("footer.followUsOn")}}</h5>
        <nav>
          <a href="/"><span class="icon twitter" /></a>
          <a href="/"><span class="icon instagram" /></a>
          <a href="/"><span class="icon youtube" /></a>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {useI18n} from "vue-i18n";

const {locale, availableLocales, t} = useI18n();
const langDropdownToggled = ref(false);

function toggleDropdown() {
  langDropdownToggled.value = !langDropdownToggled.value;
}

function translateLang(lang: string) {
  return t(`locales.${lang}`);
}
</script>

<style lang="scss" scoped>
@import "@/scss/components/layout/base-footer.scss";
</style>