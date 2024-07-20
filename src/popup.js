import Vue from "vue";
import Popup from "./components/Popup.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(Popup)
}).$mount("#app");
