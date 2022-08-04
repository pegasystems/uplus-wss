<template>
  <div class="ai-overlay">
    <ul>
      <li>
        <label>Real-time container</label>
        <span>{{ offer.container }}</span>
      </li>
      <li>
        <label>Customer ID</label>
        <span>{{ offer.customerID }}</span>
      </li>
      <li>
        <label>Interaction ID</label>
        <span>{{ offer.interactionID }}</span>
      </li>
      <li>
        <label>Action</label>
        <span>{{ offer.identifier }}</span>
      </li>
      <li>
        <label>Treatment</label>
        <span>{{ offer.treatment }}</span>
      </li>
      <li>
        <label>Category</label>
        <span>{{ offer.category }}</span>
      </li>
      <li>
        <label>Propensity</label>
        <span>{{ offer.propensity && $n(offer.propensity, 'score') }}</span>
      </li>
      <li>
        <label>Priority (P*C*V*L)</label>
        <span>{{ offer.priority && $n(offer.priority, 'score') }}</span>
      </li>
      <li>
        <label>Rank</label>
        <span>{{ offer.rank }}</span>
      </li>
      <li>
        <label>Placement type</label>
        <span>{{ offer.placement }}</span>
      </li>
    </ul>
    <div class="footer-img"></div>
  </div>
</template>

<script>
export default {
  props: {
    offer: { required: true, type: Object },
  },
};
</script>
