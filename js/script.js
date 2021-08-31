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

    // search

    /*filteredList() {
      return this.data.contacts.filter((data) => {
        return data.contacts.name
          .toLowercase()
          .includes(this.search.toLowercase());
      });
    },*/

    isVisible(name) {
      var result = false;

      if (this.search.trim() == "") result = true;
      else {
        result = name.includes(this.search.trim());
      }

      return result;
    },

    /*darkMode() {
      const active = false,
      const link = ""
      link = getElementById("dark-mode")
      if (active === false) {
        !active,
        link = "./css/dark-mode.css"
      } else {
        !active,
        link = "",
      },
        
    },*/
  },
});
