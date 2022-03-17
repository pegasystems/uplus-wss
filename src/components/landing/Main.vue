<template>
  <main class="flex flex-col">
    <OfferRequest />
    <Details />
    <Benefits />
  </main>
</template>

<script>
import { mainconfig } from '../../global';
import Benefits from './Benefits.vue';
import OfferRequest from './OfferRequest.vue';
import Details from './Details.vue';

export default {
  data() {
    return mainconfig;
  },
  components: {
    Benefits,
    OfferRequest,
    Details,
  },
};
</script>
