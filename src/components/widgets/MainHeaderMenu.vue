<template>
  <div class="menu">
    <button v-on:click="showMenuOverlay" class="launch-menu">Menu</button>
    <div
      v-clickoutside="{ handler: 'onClickOutMenuOverlay' }"
      class="menu-overlay flex flex-col"
      :style="{ height: isActive? '204px' : ''}"
    >
      <ul>
        <MenuItem v-for="item in app.menuitems" v-bind:key="item.title" v-bind:title="item.title"></MenuItem>
        <li v-if="!isAuthenticated">
          <a v-on:click="showlogin" class="launch-login-overlay">{{ $t('message.login')}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import MenuItem from "../controls/MenuItem.vue";
import { mainconfig } from "../../global";
export default {
  data: function() {
    return Object.assign({}, mainconfig, {
      isActive: false
    });
  },
  methods: {
    showlogin: function(event) {
      this.isActive = false;
      this.toggleLoginOverlay(true);
    },
    toggleLoginOverlay: function(bShow) {
      var elements = document.getElementsByClassName("launch-login");
      Array.prototype.forEach.call(elements, function(el, i) {
        if (
          (bShow && el.nextElementSibling.classList.contains("hidden")) ||
          (!bShow && el.nextElementSibling.classList.contains("show"))
        ) {
          el.click();
        }
      });
    },
    showMenuOverlay: function(event) {
      this.isActive = !this.isActive;
      if (this.isActive === true) {
        this.toggleLoginOverlay(false);
      }
    },
    onClickOutMenuOverlay: function(event) {
      if (!event.target.classList.contains("launch-menu")) {
        this.isActive = false;
      }
    }
  },
  components: {
    MenuItem
  }
};
</script>