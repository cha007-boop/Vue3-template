const app = Vue.createApp({
    data() {
        return {
            intro: 'Welcome to my Vue template',
            name: '',
            surname: 'Ammentorp',
            age: 0,
            list: [1, 2, 3, 4, 5],
            nr: 0,
            shownumbers: false,
            listpeople: [
                { name: 'Alice', age: 24 },
                { name: 'Bob', age: 30 },
                { name: 'Charlie', age: 21 }
            ]
        }
    },
    methods: {
        myMethod() {
        },
        add() {
            this.list.push(this.nr)
            this.list.sort((a, b) => a - b)
        },
        hidelist() {
            this.shownumbers = !this.shownumbers
        },
        addperson() {
            this.listpeople.push({ name: this.name, age: this.age })
        }
    },
    computed: {
        myComputed() {
            return ''
        },

    }
})
