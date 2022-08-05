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
                    console.log(data);
                    this.arr = data
                });
        },
        addNote() {
            if (this.titleValue.length > 0 && this.bodyValue.length > 0) {
                this.arr.push({
                    id: this.arr.length + 1,
                    title: this.titleValue,
                    body: this.bodyValue,
                })
                console.log(this.arr.id);

                this.titleValue = ''
                this.bodyValue = ''
            }
        },
        removeNote(index) {
            this.arr.splice(index, 1)
        }
    },
    created() {
        this.getPosts()
    }
}
Vue.createApp(app).mount('#app')