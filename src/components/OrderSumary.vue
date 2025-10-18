<template>
    <div>
    <div class="card mb-4 shadow-sm">
      <div class="card-body d-flex justify-content-between align-items-center">
        <div>✅ Completed Orders: <strong>{{ completedOrdersCount }}</strong></div>
        <div>💰 Total Revenue: <strong>{{ completedOrdersTotal | currency }}</strong></div>
      </div>
    </div>    
    </div>
</template>
<script>
export default {
  name: "OrderSummary",
  props: {
    completedOrdersCount: {
      type: Number,
      required: true
    },
    completedOrdersTotal: {
      type: Number,
      required: true
    }
  },
  filters: {
    currency(value) {
      return "$" + Number(value).toLocaleString();
    }
  }
};
</script>