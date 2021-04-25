// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';

// 按需引入失败了
// import { Menu, Button, Carousel, Divider, Icon, MenuItem, MenuItemGroup, CarouselItem, Submenu, Alert, Message, MessageBox, Input } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// Vue.use(animated);
// Vue.use(Menu);
// Vue.use(Button);
// Vue.use(Carousel);
// Vue.use(Divider);
// Vue.use(Icon);
// Vue.use(CarouselItem);
// Vue.use(MenuItemGroup);
// Vue.use(MenuItem);
// Vue.use(Submenu);
// Vue.use(Alert);
// Vue.use(Input);
// Vue.use(Message);
// Vue.use(MessageBox);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
