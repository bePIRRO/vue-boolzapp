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

    // create and send a message
    sendMessage() {
      if (!this.newMessage) return;

      const newMessage = {
        status: "sent",
        message: this.newMessage,
        date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
      };
      this.data.contacts[this.data.currentContact].messages.push(newMessage);

      this.newMessage = "";

      // auto reply
      setTimeout(() => {
        const replyMessage = {
          status: "received",
          message: "ok",
          date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
        };
        this.data.contacts[this.data.currentContact].messages.push(
          replyMessage
        );
      }, 1000);
    },
  },
});
