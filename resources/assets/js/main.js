var Vue = require('vue');

var vm = new Vue({
    el:'#email',
    data: {
        placeholder: "youremail@gmail.com"
    },
    methods: {
        sayHello: function(){
            alert("Hola!")
        }
    }
})