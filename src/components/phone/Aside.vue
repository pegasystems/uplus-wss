<template>
  <aside v-on:click="hideSidePanel" :class="[isSidePanelVisible ? 'show' : '']">
    <div class="panel background-brand">
      <header>
        <img class="logo" :src="'./img/u+-logo.svg'" alt="U+" />
      </header>
      <nav>
        <MenuItem
          v-for="item in app.menuitems"
          v-bind:pagetype="item.pagetype"
          v-bind:key="item.title"
          v-bind:title="item.title"
        ></MenuItem>
      </nav>
    </div>
  </aside>
</template>

<script>
import { mainconfig } from '../../global';
import MenuItem from '../controls/MenuItem.vue';

export default {
  data() {
    return mainconfig;
  },
  methods: {
    hideSidePanel() {
      this.isSidePanelVisible = false;
    },
  },
  components: {
    MenuItem,
  },
};
</script>
