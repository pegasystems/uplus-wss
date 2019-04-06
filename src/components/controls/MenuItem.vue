<template>
  <li>
    <a href="#">{{ $t("message." + title) }}</a>
  </li>
</template>

<script>
export default {
  props: ["title"]
};
</script>
