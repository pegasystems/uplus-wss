<template>
  <div>
    <div class="primary-card margin-t-0 quick-links-account">
      <h2>{{ $t('message.phone_quick_links_title')}}</h2>
      <nav>
        <ul>
          <li v-for="(item,index) in settings.quicklinks" :key="index">
            <a v-on:click="selectLink(index)">{{ settings.quicklinks[index].title[currentLocale] }}</a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="primary-card" v-if="settings.pega_marketing.Host === '' || loading">
      <section class="offer-card-col" v-for="item in app.offers" :key="item.title">
        <img class="offer-img" :src="('./img/' + item.img)" :alt="$t('message.' + item.title)" />
        <div class="content">
          <h3>{{ $t('message.' + item.title) }}</h3>
          <p>{{ $t('message.' + item.message) }}</p>
          <a href="./offer.html">{{ $t('message.learnmore') }}</a>
        </div>
      </section>
    </div>
    <div class="primary-card" v-else>
      <Offer v-for="item in data" :key="item.title" v-bind:offer="item" />
    </div>
  </div>
</template>

<script>
import Offer from '../widgets/Offer.vue';
import { mainconfig, initNBAM } from '../../global';

export default {
  data() {
    return Object.assign({}, mainconfig, {
      loading: true,
      data: [],
    });
  },
  mounted() {
    if (
      this.settings.pega_marketing.Host !== '' &&
      this.settings.pega_marketing.accountPage.placement !== '' &&
      this.settings.pega_marketing.accountPage.containerName !== ''
    ) {
      const self = this;
      let customerID = '';
      if (this.userId !== -1 && this.settings.users[this.userId].customerID) {
        customerID = this.settings.users[this.userId].customerID;
      }
      setTimeout(() => {
        initNBAM(
          self,
          'accountPage',
          customerID,
          self.previousPage,
          'account.html',
        );
      }, 200);
    }
  },
  methods: {
    selectLink(index) {
      mainconfig.quickLinkId = index;
    },
  },
  components: {
    Offer,
  },
};
</script>
