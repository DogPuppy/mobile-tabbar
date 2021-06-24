<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabBar',
    data() {
      return {}
    },
    methods: {},
  }
</script>

<style scoped>
  #tab-bar {
    width:100%;
    display:flex;
    height: 49px;
    position:fixed;
    bottom: 0;
    background-color:rgb(231,231,231);
    box-shadow:0 -1px 5px rgb(196,196,196);
  }
</style>