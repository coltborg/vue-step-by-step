Vue.component('coupon', {
  template: `
    <input class="input" type="text" placeholder="Enter your coupon code" @blur="onCouponApplied">
  `,
  methods: {
    onCouponApplied() {
      this.$emit('applied');
      console.log('teaw');
    },
  },
});

new Vue({
  el: '#root',
  data: {
    couponApplied: false,
  },
  methods: {
    onCouponApplied() {
      this.couponApplied = true;
    },
  },
});
