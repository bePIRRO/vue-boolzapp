console.log("Vue ready", Vue);

Vue.config.devtools = true;

const app = new Vue({
    el: "#app",
    data: {
        user: {
            name: "bePIRRO",
            avatar: "_io",
        },
        contacts,
    },
    methods: {},
});