import Vue from "vue";
import PopupComponent from "./components/Popup.vue";

Vue.config.productionTip = false;

new Vue({
    render: h => h(PopupComponent)
}).$mount("#app");
