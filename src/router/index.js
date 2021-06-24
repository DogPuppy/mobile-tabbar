import Vue from "vue"
import VueRouter from "vue-router"
import Router from 'vue-router'
Vue.use(VueRouter)

const Home = () => import("../views/home/Home")
const ShopCar = () => import("../views/shopcar/ShopCar")
const Profile = () => import("../views/profile/Profile")
const Category = () => import("../views/category/category")

const routes = [{
    path: "",
    redirect: "/home"
  }, {
    path: "/home",
    component: Home
  },
  {
    path: "/profile",
    component: Profile
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/shopcar",
    component: ShopCar
  }
]

const router = new VueRouter({
  routes,
  mode: "history"
})

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}

export default router
