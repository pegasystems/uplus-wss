<template>
  <div>
    <div class="tab-interface">
      <ul role="tablist">
        <li role="presentation" v-for="(tab, index) in tabs" v-bind:key="index">
          <a
            role="tab"
            :tabindex="tab.isActive ? '0' : '-1'"
            :aria-controls="tab.href"
            :aria-selected="tab.isActive ? 'true' : 'false'"
            :id="tab.href + '-tab'"
            @click="selectTab(tab)"
            >{{ tab.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { tabs: [] };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
    },
  },
};
</script>
