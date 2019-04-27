<template>
  <section
    :id="href"
    role="tabpanel"
    :aria-labelledby="href + '-tab'"
    :aria-hidden="isActive ? 'false' : 'true'"
  >
    <slot></slot>
  </section>
</template>

<script>
export default {
  props: {
    name: { required: true },
    selected: { default: false },
  },
  data() {
    return {
      isActive: false,
    };
  },
  computed: {
    href() {
      return `#${this.name.toLowerCase().replace(/ /g, '-')}`;
    },
  },
  mounted() {
    this.isActive = this.selected;
  },
};
</script>
