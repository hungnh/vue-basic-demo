new Vue({
    el: '#app',
    data: {
        title: 'Hello VueJS',
        showParagraph: false
    },
    methods: {
        show: function() {
            this.showParagraph = true;
            this.updateTitle('Hello VueJS (Updated)');
        },
        updateTitle: function(title) {
            this.title = title;
        }
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        }
    },
    watch: {
        title: function(newValue, oldValue) {
            alert(`Title changed from "${oldValue}" to "${newValue}"`);
        }
    }
});
