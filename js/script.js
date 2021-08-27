console.log("Vue ready", Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        user: {
            name: "Nuovo Nome",
            avatar: "_io",
        },
        contacts,
    },
    methods: {},
});