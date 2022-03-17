<template>
  <div class="primary-card">
    <form>
      <h3>{{ $t('message.' + app.landing.main_form.title) }}</h3>
      <div class="layout-stacked">
        <div
          class="field-item"
          v-for="(item, index) in app.landing.main_form.data"
          v-bind:key="index"
        >
          <input
            :id="'landing_main_form_data_' + index"
            type="text"
            :name="$t('message.' + item.label)"
            :placeholder="$t('message.' + item.label)"
          />
          <label :for="'landing_main_form_data_' + index">{{
            $t('message.' + item.label)
          }}</label>
        </div>
        <button class="strong width-100-pct margin-t-2x">
          {{ $t('message.' + app.landing.main_form.button_label) }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { mainconfig } from '../../global';

export default {
  data() {
    return mainconfig;
  },
};
</script>
