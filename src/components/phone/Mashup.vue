<template>
  <div class="flex flex-col">
    <TopNav style="display:none" previousPage="quicklinks1"/>
    <MashupMainArea/>
  </div>
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
  } 
};
</script>