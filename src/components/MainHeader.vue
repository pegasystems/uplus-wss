<template>
  <header class="flex flex-col flex-mid-align">
    <nav class="wrap header flex flex-mid-align">
      <ul class="flex flex-mid-align">
        <li>
          <a href="#">
            <img v-on:click="goHomePage" class="logo" :src="('./img/u+-logo.svg')" alt="U+">
          </a>
        </li>
        <MenuItem v-for="item in app.menuitems" v-bind:key="item.title" v-bind:title="item.title"></MenuItem>
      </ul>
      <OperatorButton v-if="isAuthenticated"/>
      <LoginButton v-else/>
      <MainHeaderMenu/>
    </nav>
    <div v-if="!isAuthenticated && homeHeroAction!=1" class="wrap hero-wrap flex flex-col">
      <div>
        <h1 class="hero">
          {{ $t('message.' + app.herotext.title)}}
          <br>
          {{ $t('message.' + app.herotext.titlespan)}}
        </h1>
        <button
          v-on:click="applyHeroAction"
          class="more"
        >{{ $t('message.' + app.herotext.buttonlabel) }}</button>
      </div>
    </div>
  </header>
</template>

<script>
import MenuItem from "./controls/MenuItem.vue";
import MainHeaderMenu from "./widgets/MainHeaderMenu.vue";
import OperatorButton from "./widgets/OperatorButton.vue";
import LoginButton from "./widgets/LoginButton.vue";
import { mainconfig } from "../global";
export default {
  data: function() {
    return mainconfig;
  },
  methods: {
    goHomePage: function(event) {
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.homeHeroAction = -1;
    },
    applyHeroAction: function(event) {
      mainconfig.homeHeroAction = 1;
    }
  },
  components: {
    MenuItem,
    LoginButton,
    OperatorButton,
    MainHeaderMenu
  }
};
</script>