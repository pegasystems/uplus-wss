<template>
  <li>
    <a>{{ $t("message." + title) }}</a>
  </li>
</template>

<script>
export default {
  props: ["title"]
};
</script>
