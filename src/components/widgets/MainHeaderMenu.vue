<template>
  <div class="menu">
    <button v-on:click="showMenuOverlay" class="launch-menu">Menu</button>
    <div
      v-clickoutside="{ handler: 'onClickOutMenuOverlay' }"
      class="menu-overlay flex flex-col"
      :style="{ height: isActive ? heightVal : '' }"
    >
      <ul>
        <MenuItem
          v-for="item in app.menuitems"
          v-bind:pagetype="item.pagetype"
          v-bind:key="item.title"
          v-bind:title="item.title"
        ></MenuItem>
        <li v-if="!isAuthenticated">
          <a v-on:click="showlogin" class="launch-login-overlay">{{
            $t('message.login')
          }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuItem from '../controls/MenuItem.vue';
import { mainconfig } from '../../global';

export default {
  data() {
    return { ...mainconfig, isActive: false, heightVal: '204px' };
  },
  methods: {
    showlogin() {
      this.isActive = false;
      this.toggleLoginOverlay(true);
    },
    toggleLoginOverlay(bShow) {
      const elements = document.getElementsByClassName('launch-login');
      Array.prototype.forEach.call(elements, (el) => {
        if (
          (bShow && el.nextElementSibling.classList.contains('hidden')) ||
          (!bShow && el.nextElementSibling.classList.contains('show'))
        ) {
          el.click();
        }
      });
    },
    showMenuOverlay(e) {
      this.isActive = !this.isActive;
      if (this.isActive === true) {
        this.heightVal = `${e.target.nextElementSibling.firstElementChild.clientHeight}px`;
        this.toggleLoginOverlay(false);
      }
    },
    onClickOutMenuOverlay(event) {
      if (!event.target.classList.contains('launch-menu')) {
        this.isActive = false;
      }
    },
  },
  components: {
    MenuItem,
  },
};
</script>
