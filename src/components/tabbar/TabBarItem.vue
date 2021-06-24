<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: '',
    props: {
      path: String,
      activeColor: {
        type: String,
        default: "#d81e06"
      }
    },
    data() {
      return {
        // isActive: false,
      }
    },
    computed: {
      isActive() {
        return !this.$route.path.indexOf(this.path)
      },
      activeStyle() {
        return this.isActive?{color:this.activeColor}:{}
      }
    }
    ,
    methods: {
      itemClick() {
        this.$router.push(this.path)
      }
    },
  }
</script>

<style scoped>
  .tab-bar-item
  {
  margin:
  2px
  0;
  flex-grow:1;
  text-align:center;
  font-size:
  14px;
  }
  .tab-bar-item
  img
  {
  width:24px;
  height:24px;
  }
</style>