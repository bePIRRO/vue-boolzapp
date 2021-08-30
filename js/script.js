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

    sendMessage() {
      if (!this.newMessage) return;

      const newMessage = {
        status: "sent",
        message: this.newMessage,
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
      };
      this.data.contacts[this.data.currentContact].messages.push(newMessage);

      this.newMessage = "";
    },
  },
});
