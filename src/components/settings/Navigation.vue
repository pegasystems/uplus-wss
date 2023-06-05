<template>
  <div class="tab-vertical-menu">
    <div class="tab-interface">
      <Container @toggleExpand="toggleExpand" title="Menu" :expanded="expanded">
        <ul role="tablist">
          <li
            role="presentation"
            v-for="(tab, index) in tabs"
            v-bind:key="index"
          >
            <a
              role="tab"
              :tabindex="active === index ? '0' : '-1'"
              :aria-selected="active === index ? 'true' : 'false'"
              @click="selectTab(index)"
              >{{ tab.props.name }}</a
            >
          </li>
        </ul>
      </Container>
      <div v-if="!isMobilePhone" class="tab-action">
        <button type="submit" data-clear class="simple">
          Reset to default
        </button>
        <button class="strong" type="submit">Save</button>
      </div>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { provide, computed, ref } from 'vue';
import { mainconfig } from '../../global';
import Container from '../controls/Container.vue';

export default {
  props: {
    modelValue: {
      type: [String, Number],
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const active = computed(() => props.modelValue);
    const tabs = ref([]);

    function selectTab(tab) {
      emit('update:modelValue', tab);
    }

    provide('tabsState', {
      active,
      tabs,
    });

    return {
      ...mainconfig,
      tabs,
      active,
      selectTab,
    };
  },
  components: {
    Container,
  },
};
</script>
