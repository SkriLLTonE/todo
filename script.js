const app = {
    data() {
        return {
            title: "Title",
            body: "Text",
            titleValue: '',
            bodyValue: '',
            arr: []
        }
    },
    methods: {
        getPosts(limit = 7) {
            fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    this.arr = data
                    console.log(this.arr);
                });
        }
    },
    created() {
        this.getPosts()
    }
}
Vue.createApp(app).mount('#app')