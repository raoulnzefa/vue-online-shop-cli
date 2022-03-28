<template>
    <div>
    <br><br>
        <div class="container">
            <router-view></router-view>
            <div class="card"><br>
                <h3 class="card-title"><center>Add Product</center></h3>
                <div class="card-body">
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

                    <button class="btn btn-outline-dark" @click="Save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "addProduct",
        data() {
            return {
                product_name : "",
                description : "",
                price : "",
                photo : "",
            }
        },
        methods : {
            Save : function(){
                let form = {
                    //back end    //state
                    'product_name'  : this.product_name,
                    'description'   : this.description,
                    'price'         : this.price,
                    'photo'         : this.photo,
                }
                
                this.axios.post('http://localhost:8000/api/product', form)
                    .then((response) =>{
                        // console.log(response);
                        this.$swal('Success!', 'Success add new data', 'OK');
                        this.cust_list = response.data;
                        this.$router.push('/product')
                    })
                }
        }  
        
    }
</script>