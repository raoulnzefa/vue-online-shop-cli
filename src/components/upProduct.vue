<template>
    <div><br><br>
        <div class="container">
            <div class="card"><br>
                <h3 class="card-title"><center>Update Product</center></h3>
                <div class="card-body">

                    <input type="hidden" class="form-control" id="name" v-model="product_id">

                    <div class="mb-3">
                        <label for="product_name" class="form-label">Product Name</label>
                        <input type="text" class="form-control" id="product_name" v-model="product_name" placeholder="Product Name">
                    </div>

                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea class="form-control" v-model="description" id="description" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" class="form-control" id="price" v-model="price" placeholder="Price">
                    </div>

                    <div class="mb-3">
                        <label for="photo" class="form-label">Photo</label>
                        <input type="text" class="form-control" id="photo" v-model="photo" placeholder="Photo">
                    </div>

                    <button class="btn btn-outline-dark" @click="Update()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "update_product",
        data() {
            return {
                product_id : "",
                product_name : "",
                description : "",
                price : "",
                photo : "",
            }
        },
        methods : {
            getDetail(id){
                this.axios.get('http://localhost:8000/api/product/'+id)
                .then(response => {
                    //vmodel
                    this.product_id    = response.data[0].product_id,
                    this.product_name  = response.data[0].product_name,
                    this.description   = response.data[0].description,
                    this.price         = response.data[0].price,
                    this.photo         = response.data[0].photo
                })
            },

            Update(){
                let form = {
                    //back end    //state
                    'product_name' : this.product_name,
                    'description'  : this.description,
                    'price'        : this.price,
                    'photo'        : this.photo
                }
                
                this.axios.put('http://localhost:8000/api/product/' + this.product_id, form)
                    .then(response =>{
                        this.product_list = response.data;
                        this.$router.push('/product')
                    })
                }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
        
    }
</script>