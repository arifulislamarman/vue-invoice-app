import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import InvoiceSingle from "../views/invoiceSingle.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/invoice/:invoiceId",
    name: "Invoice",
    component: InvoiceSingle,
  },
];

const route = createRouter({
  history: createWebHistory(),
  routes,
});

export default route;
