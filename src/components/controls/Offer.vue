<template>
  <section class="secondary-card offer-card-col">
    <img class="offer-img" :src="img" :alt="$t('message.offerforyou')">
    <div class="content">
      <h3>{{ $t("message." + title) }}</h3>
      <p>{{ $t("message." + message) }}</p>
      <a>{{ $t("message.learnmore") }}</a>
    </div>
  </section>
</template>

<script>
export default {
  props: ["title", "message", "img"]
};
</script>
