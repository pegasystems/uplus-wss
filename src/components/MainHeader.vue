<template>
  <header class="flex flex-col">
    <div class="wrap header flex flex-mid-align">
      <a href="#">
        <img v-on:click="goHomePage" class="logo" :src="('./img/u+-logo.svg')" alt="U+">
      </a>
      <nav class="flex-grow-1">
        <ul class="flex flex-mid-align flex-grow-1">
          <MenuItem
            href="#"
            v-for="item in app.menuitems"
            v-bind:key="item.title"
            v-bind:title="item.title"
          ></MenuItem>
        </ul>
      </nav>
      <OperatorButton v-if="isAuthenticated"/>
      <LoginButton v-else/>
      <MainHeaderMenu/>
    </div>
    <div
      v-if="!isAuthenticated && homeHeroAction!=1 && offerURL===''"
      class="wrap hero-wrap flex flex-col"
    >
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
import MenuItem from './controls/MenuItem.vue';
import MainHeaderMenu from './widgets/MainHeaderMenu.vue';
import OperatorButton from './widgets/OperatorButton.vue';
import LoginButton from './widgets/LoginButton.vue';
import { mainconfig } from '../global';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    goHomePage() {
      mainconfig.quickLinkId = -1;
      mainconfig.viewBill = -1;
      mainconfig.homeHeroAction = -1;
      mainconfig.toDo = -1;
      mainconfig.offerURL = '';
    },
    applyHeroAction() {
      mainconfig.homeHeroAction = 1;
    },
  },
  components: {
    MenuItem,
    LoginButton,
    OperatorButton,
    MainHeaderMenu,
  },
};
</script>
