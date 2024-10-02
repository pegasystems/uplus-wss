<template>
  <section
    v-if="CDHContainer.useURL === true"
    class="flex flex-col full-height"
  >
    <iframe
      @load="onLoadIframe"
      :src="offerURL"
      style="overflow: hidden"
      width="100%"
      height="100%"
      border="0"
      frameborder="0"
    ></iframe>
  </section>
  <section
    v-else-if="!isprocessed && offerURL.indexOf('/Basic') === 0"
    class="flex flex-col"
  >
    <h1>{{ CDHContainer.title }}</h1>
    <div class="main-offer builtin-offer primary-card flex flex-nowrap">
      <img
        class="offer-img"
        :src="CDHContainer.img"
        :alt="CDHContainer.title"
      />
      <div class="details">
        <div v-if="typeof CDHContainer.message !== 'undefined'">
          <label>{{ $t('message.offer_builtin_description') }}</label>
          <p>{{ CDHContainer.message }}</p>
        </div>
        <div v-if="typeof CDHContainer.benefits !== 'undefined'">
          <label>{{ $t('message.offer_builtin_benefits') }}</label>
          <p>{{ CDHContainer.benefits }}</p>
        </div>
        <div class="button-row padding-t-2x">
          <button v-on:click="processOffer('Rejected')" class="tertiary">
            {{ $t('message.offer_builtin_button_rejected') }}
          </button>
          <button v-on:click="processOffer('Accepted')" class="strong">
            {{ $t('message.offer_builtin_button_accepted') }}
          </button>
        </div>
      </div>
    </div>
  </section>
  <section
    v-else-if="!isprocessed && offerURL.indexOf('/Detailed') === 0"
    class="flex flex-col"
  >
    <h1>{{ CDHContainer.title }}</h1>
    <div class="primary-card builtin-offer flex flex-nowrap">
      <img
        class="offer-img"
        :src="CDHContainer.img"
        :alt="CDHContainer.title"
      />
      <div class="details">
        <div v-if="typeof CDHContainer.message !== 'undefined'">
          <label>{{ $t('message.offer_builtin_description') }}</label>
          <p>{{ CDHContainer.message }}</p>
        </div>
        <div v-if="typeof CDHContainer.benefits !== 'undefined'">
          <label>{{ $t('message.offer_builtin_benefits') }}</label>
          <p>{{ CDHContainer.benefits }}</p>
        </div>
        <div
          v-for="(item, index) in CDHContainer.attributes"
          v-bind:key="index"
        >
          <label
            v-if="
              typeof CDHContainer[item] !== 'undefined' &&
              CDHContainer[item] !== ''
            "
            >{{
              $t(`message.offer_builtin_${item}`) ===
              `message.offer_builtin_${item}`
                ? item
                : $t(`message.offer_builtin_${item}`)
            }}</label
          >
          <p
            v-if="
              typeof CDHContainer[item] !== 'undefined' &&
              CDHContainer[item] !== ''
            "
          >
            {{ CDHContainer[item] }}
          </p>
        </div>
        <div class="button-row padding-t-2x">
          <button v-on:click="processOffer('Rejected')" class="tertiary">
            {{ $t('message.offer_builtin_button_rejected') }}
          </button>
          <button v-on:click="processOffer('Accepted')" class="strong">
            {{ $t('message.offer_builtin_button_accepted') }}
          </button>
        </div>
      </div>
    </div>
  </section>
  <section v-else class="flex flex-col" style="width: 100%">
    <h1>{{ $t('message.offer_builtin_response_heading') }}</h1>
    <div class="primary-card flex-mid-align flex flex-col">
      <i class="product-icon pi pi-check"></i>
      <p class="success-text">{{ $t('message.offer_builtin_thankyou') }}</p>
      <p>{{ $t('message.offer_builtin_response') }}</p>
      <div>
        <button v-on:click="closeOffer()" class="strong">
          {{ $t('message.offer_builtin_button_close') }}
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mainconfig } from '../global';
import { captureResponse } from '../CDHIntegration';

export default {
  data() {
    return {
      ...mainconfig,
      isprocessed: false,
    };
  },
  methods: {
    processOffer(outcome) {
      captureResponse(this, this.CDHContainer, outcome);
      this.isprocessed = true;
    },
    closeOffer() {
      top.postMessage('pegaMashupNavigateBack', location.origin);
    },
    onLoadIframe(e) {
      try {
        var url = e.target.contentWindow.location.pathname;
        if (url.indexOf('/Basic') === 0 || url.indexOf('/Detailed') === 0) {
          this.offerURL = url;
          this.CDHContainer.useURL = false;
        }
      } catch {
        console.log('CDH is not in the same origin as the Uplus app');
      }
    },
  },
};
</script>
