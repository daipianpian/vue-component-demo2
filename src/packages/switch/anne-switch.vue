<template>
  <div class="anne-switchh">
    <div class="wrapper">
      <span><slot></slot></span>
      <div>开关选择器</div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "AnneSwitch",
    data() {
      return {}
    },
    props: {
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      activeValue: {
        type: [Boolean, String, Number],
        default: true
      },
      inactiveValue: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      checked() {
        return this.value === this.activeValue;
      }
    },
    methods: {
      handleChange(value) {
        this.$emit('input', !this.checked ? this.activeValue : this.inactiveValue);
      }
    }
  }
</script>
