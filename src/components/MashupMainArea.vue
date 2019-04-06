<template>
  <main class="flex flex-col">
    <div class="wrap cols flex flex-wrap">
      <div
        v-if="isMashupInitialized"
        data-pega-gadgetname="PegaGadget"
        data-pega-action="createNewWork"
        :data-pega-action-param-classname="objClass"
        :data-pega-action-param-flowname="startCase"
        data-pega-isdeferloaded="false"
        :data-pega-applicationname="appName"
        :data-pega-threadname="threadName"
        data-pega-resizetype="stretch"
        :data-pega-url="serverUrl"
        :data-pega-action-param-parameters="actionParam"
      ></div>
      <iframe
        v-else
        class="pega"
        src="form-embed.html"
        style="overflow: hidden; height: 570px"
        width="100%"
        height="100%"
        border="0"
        frameborder="0"
      ></iframe>
    </div>
  </main>
</template>

<script>
import { mainconfig } from "../global";

export default {
  data: function() {
    return Object.assign({}, mainconfig, {
      mashupScript: "",
      isMashupInitialized: false,
      serverUrl: "",
      objClass: "",
      startCase: "",
      threadName: "",
      appName: "",
      actionParam: ""
    });
  },
  created: function() {
    this.mashupScript = document.createElement("script");
    if (this.quickLinkId !== -1) {
      this.serverUrl = this.settings.quicklinks[this.quickLinkId].url;
      this.objClass = this.settings.quicklinks[this.quickLinkId].objclass;
      this.startCase = this.settings.quicklinks[this.quickLinkId].startcase;
      this.appName = this.settings.quicklinks[this.quickLinkId].application;
    }
    if (this.viewBill !== -1) {
      this.serverUrl = this.settings.billpay.url;
      this.objClass = this.settings.billpay.objclass;
      this.startCase = this.settings.billpay.startcase;
      this.appName = this.settings.billpay.application;
    }
    if (this.homeHeroAction !== -1) {
      this.serverUrl = this.settings.homeheroaction.url;
      this.objClass = this.settings.homeheroaction.objclass;
      this.startCase = this.settings.homeheroaction.startcase;
      this.appName = this.settings.homeheroaction.application;
    }
    if (this.serverUrl === "" || this.objClass === "" || this.startCase === "")
      return;
    this.threadName = this.objClass.replace(/-/g, "");
    this.mashupScript.setAttribute(
      "src",
      this.serverUrl + "?pyActivity=pzIncludeMashupScripts"
    );
    var tmpActionParam = {};
    tmpActionParam.pzSkinName = "ClaritySkin";
    if (app.industry === "comms") {
      tmpActionParam.pzSkinName = "ClaritySkin_HoneyFlower";
    } else if (app.industry === "gov" || app.industry === "health") {
      tmpActionParam.pzSkinName = "ClaritySkin_Keppel";
    } else if (
      app.industry === "retail_bank" ||
      app.industry === "commercial_bank"
    ) {
      tmpActionParam.pzSkinName = "ClaritySkin_Mantis";
    } else if (app.industry === "insurance") {
      tmpActionParam.pzSkinName = "ClaritySkin_Flame";
    } else if (app.industry === "manufacturing") {
      tmpActionParam.pzSkinName = "ClaritySkin_TulipTree";
    }
    tmpActionParam.pyMashupSkeletonName = "pyDefaultMashupSkeleton";
    if (this.userId !== -1) {
      tmpActionParam.UserIdentifier = this.settings.users[
        this.userId
      ].pega_userid;
      tmpActionParam.Password = encodeURI(
        btoa(this.settings.users[this.userId].pega_pwd)
      );
    } else if (this.homeHeroAction !== -1) {
      tmpActionParam.UserIdentifier = this.settings.homeheroaction.pega_userid;
      tmpActionParam.Password = encodeURI(
        btoa(this.settings.homeheroaction.pega_pwd)
      );
    }
    this.actionParam = JSON.stringify(tmpActionParam);
    document.head.appendChild(this.mashupScript);
    this.isMashupInitialized = true;
  },
  mounted: function() {
    var _initMashup = function() {
      if (typeof pega !== "undefined" && typeof pega.Mashup !== "undefined") {
        pega.Mashup.Communicator.register(pega.Mashup.hostActionsProcessor);
        _initAllPegaObjects();
      } else {
        setTimeout(_initMashup, 200);
      }
    };
    _initMashup();
  },
  beforeDestroy() {
    pega = {};
    document.head.removeChild(this.mashupScript);
  }
};
</script>
