Vue.component('product', {
    template: `
        <div class="product">
            <div class="product-image">
                <img :src="image" />      
            </div>
        
            <div class="product-info">
              <h1>{{ title }}</h1>
              <p>Shipping: {{ shipping }}</p>
              
              <p v-if="inStock">In Stock</p>
              <p v-else>Out of Stock</p>
              
              <h2>Details</h2>
              <ul>
                <li v-for="detail in details">{{ detail }}</li>
              </ul>
              
              <h3>Colors:</h3>
              <div v-for="(variant, index) in variants" 
                   :key="variant.variantId">
                <div class="color-box" 
                     :style="{ backgroundColor: variant.variantColor }"
                     @mouseover="updateProduct(index)">
                </div>
              </div>
              
              <button :class="{ disabledButton: !inStock }" 
                      @click="addToCart"
                      :disabled="!inStock">
                      Add to Cart
              </button>
            </div>
        </div>
    `,
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            selectedVariant: 0,
            details: ['80% cotton', '20% polyester', 'Gender-neutral'],
            variants: [
                {
                    variantId: 2234,
                    variantColor: 'green',
                    variantImage: './assets/vmSocks-green.jpg',
                    variantQuantity: 10
                },
                {
                    variantId: 2235,
                    variantColor: 'blue',
                    variantImage: './assets/vmSocks-blue.jpg',
                    variantQuantity: 0
                }
            ]
        };
    },
    methods: {
        addToCart() {

        },
        updateProduct(variantIndex) {
            this.selectedVariant = variantIndex;
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product;
        },
        image() {
            return this.variants[this.selectedVariant].variantImage;
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity > 0;
        },
        shipping() {
            if (this.premium) {
                return 'Free';
            } else {
                return '2.99$';
            }
        }
    }
});

var app = new Vue({
    el: '#app',
    data: {
        premium: false,
        cart: 0
    }
});
