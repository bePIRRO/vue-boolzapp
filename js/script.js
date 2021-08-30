console.log("test", Vue);

console.log("Vue ready", Vue);

Vue.config.devtools = true;

var app = new Vue({
    el: "#app",
    data: {
        data,
    },
    methods: {},
});