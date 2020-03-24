<template>
  <div class="tab-vertical-menu">
    <div class="tab-interface">
      <Container @toggleExpand="toggleExpand" title="Menu" :expanded="expanded">
        <ul role="tablist">
          <li role="presentation" v-for="(tab,index) in tabs" v-bind:key="index">
            <a
              v-if="tab.$vnode.componentOptions.tag === 'tab'"
              role="tab"
              :tabindex="tab.isActive ? '0': '-1'"
              :aria-controls="tab.href"
              :aria-selected="tab.isActive ? 'true': 'false'"
              :id="tab.href + '-tab'"
              @click="selectTab(tab)"
            >{{ tab.name }}</a>
          </li>
        </ul>
      </Container>
      <div v-if="!isMobilePhone" class="tab-action">
        <button type="submit" v-on:click="clearAll" class="simple">Reset to default</button>
        <button type="submit">Save</button>
      </div>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { mainconfig } from '../../global';
import Container from '../controls/Container.vue';

export default {
  data() {
    return {
      ...mainconfig,
      tabs: [],
      expanded: false,
    };
  },
  created() {
    this.tabs = this.$children;
  },
  methods: {
    clearAll() {
      this.$emit('clearall');
    },
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name === selectedTab.name;
      });
      if (this.isMobilePhone) {
        this.expanded = false;
      }
    },
    toggleExpand() {
      this.expanded = !this.expanded;
    },
  },
  components: {
    Container,
  },
};
</script>
