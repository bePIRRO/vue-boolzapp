console.log("test", Vue);

Vue.config.devtools = true;

var app = new Vue({
  el: "#app",
  data: {
    data,
  },
  methods: {
    setCurrentContact(index) {
      this.data.currentContact = index;
    },
  },
});
