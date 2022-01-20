const app = new Vue({
    el: "#app",
    data: {
        elements: []
    },
    created(){
        axios.get('http://localhost/php-ajax-dischi/backend.php')
        .then( (response) =>{
            this.elements = response.data;
        })
    }
})