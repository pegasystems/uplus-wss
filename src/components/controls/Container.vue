<template>
  <div
    :class="
      'flex flex-col container' +
      (isExpanded ? '' : ' collapsed') +
      ' ' +
      format
    "
  >
    <div v-on:click.stop="toggleExpand" class="header flex">
      <h3>{{ title }}</h3>
      <button class="simple" title="click to expand or collapse">
        <i
          :class="'pi' + (isExpanded ? ' pi-caret-down' : ' pi-caret-right')"
        />
      </button>
    </div>
    <div class="body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: { required: true },
    expanded: { type: Boolean, default: false },
    format: { default: '' },
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand(event) {
      this.isExpanded = !this.isExpanded;
      this.$emit('toggleExpand');
      event.preventDefault();
    },
  },
  watch: {
    expanded: {
      handler(val) {
        this.isExpanded = val;
      },
    },
  },
  mounted() {
    this.isExpanded = this.expanded;
  },
};
</script>
