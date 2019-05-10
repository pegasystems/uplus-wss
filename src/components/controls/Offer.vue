<template>
  <section class="secondary-card offer-card-col">
    <img class="offer-img" :src="img" :alt="title">
    <div class="content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
      <a :href="url">{{ link }}</a>
    </div>
  </section>
</template>

<script>
export default {
  props: ['title', 'message', 'img', 'url', 'link'],
};
</script>
