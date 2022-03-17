<template>
  <div class="form category">
    <MainHeader />
    <main class="flex flex-col">
      <h1>{{ $t('message.' + app.category.header.title) }}</h1>
      <p>{{ $t('message.' + app.category.header.msg) }}</p>
      <div class="wrap">
        <div class="primary-card">
          <h2>{{ $t('message.' + app.category.cards.title) }}</h2>
          <div class="flex separator">
            <section
              class="front-option category-option"
              v-for="(item, index) in app.category.cards.data"
              v-bind:key="index"
            >
              <div>
                <img class="option" :src="'./img/' + item.image" />
              </div>
              <div class="flex flex-col flex-grow-1">
                <h3>{{ $t('message.' + item.title) }}</h3>
                <p class="flex-grow-1">{{ $t('message.' + item.message) }}</p>
                <button class="strong">
                  {{ $t('message.' + item.applylabel) }}
                </button>
                <button class="simple">
                  {{ $t('message.' + item.detailslabel) }}
                </button>
              </div>
            </section>
          </div>
        </div>
        <Details />
      </div>
      <Highlight />
    </main>
    <Footer />
  </div>
</template>

<script>
import { mainconfig } from '../../global';

import MainHeader from '../MainHeader.vue';
import Highlight from './Highlight.vue';
import Details from './Details.vue';
import Footer from './Footer.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    MainHeader,
    Details,
    Highlight,
    Footer,
  },
};
</script>
