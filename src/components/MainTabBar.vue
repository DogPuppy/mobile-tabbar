<template>
    <tab-bar>
    <tab-bar-item path="/home" >
      <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/homeActive.svg" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" >
      <img slot="item-icon" src="@/assets/img/tabbar/Category.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/CategoryActive.svg" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcar" >
      <img slot="item-icon" src="@/assets/img/tabbar/shop.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/shopActive.svg" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="blue">
      <img slot="item-icon" src="@/assets/img/tabbar/message.svg" alt="">
      <img slot="item-icon-active" src="@/assets/img/tabbar/messageActive.svg" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from "./tabbar/TabBar"
  import TabBarItem from "./tabbar/TabBarItem"
export default {
 name:'MainTabBar',
  data () {
    return {}
  },
  methods: {},
components:{
  TabBar,
  TabBarItem
}
}
</script>

<style scoped>
</style>
