<template>
  <MashupMainArea/>
</template>

<script>
import { mainconfig } from "../../global";
import TopNav from "./TopNav.vue";
import MashupMainArea from "../MashupMainArea.vue";

export default {
  data: function() {
    return mainconfig;
  },
  components: {
    TopNav,
    MashupMainArea
  },
  methods: {
    selectLink: function(index) {
      this.quickLinkId = index;
    }
  }
};
</script>