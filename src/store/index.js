import { createStore } from "vuex";

// Create a new store instance.

export default createStore({
  state: {
    invoiceModal: null,
  },
  mutations: {
    toggle_model(state) {
      state.invoiceModal = !state.invoiceModal;
    },
  },
  modules: {},
  actions: {},
});
