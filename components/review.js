app.component('review-form', {
    template: `
    <form class="review-form" @submit.prevent="onSubmit">
        <h3>If you like the product, feel free to leave a review:</h3>

        <label for="name">Name:</label>
        <input id="name" v-model="name" placeholder="Enter your name">

        <label for="review">Review:</label>
        <textarea id="review" v-model="review" placeholder="Write your review"></textarea>

        <label for="rating">Rating:</label>
        <select id="rating" v-model.number="rating">
            <option value="5">5 - Excellent</option>
            <option value="4">4 - Good</option>
            <option value="3">3 - Average</option>
            <option value="2">2 - Poor</option>
            <option value="1">1 - Terrible</option>
            <option value="0">0 - No Rating</option>
        </select>

        <input class="button" type="submit" value="Submit">
    </form>
    `,
    data() {
        return {
            name: '',
            review: '',
            rating: null
        }
    },
    methods: {
        onSubmit() {
            if (this.name && this.review && this.rating !== null) {
                let productReview = {
                    name: this.name,
                    review: this.review,
                    rating: this.rating
                };
                this.$emit('review-submitted', productReview);

                // Reset form fields
                this.name = '';
                this.review = '';
                this.rating = null;
            } else {
                alert('Please fill out all fields before submitting.');
            }
        }
    }
});
