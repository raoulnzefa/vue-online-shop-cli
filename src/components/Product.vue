<template>
    <div>
    <br><br>
        <div class="container">
            <div class="card">
            <div class="card-body"><br>
              <h3 class="card-title"><center>Product List</center></h3><br>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Product Name</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price</th>
                    <th scope="col">Photo</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="pl in product_list" :key="pl">
                    <td>{{ pl.product_id }}</td>
                    <td>{{ pl.product_name }}</td>
                    <td>{{ pl.description }}</td>
                    <td>{{ pl.price }}</td>
                    <td>{{ pl.photo }}</td>
                    <td>
                      <router-link type="button" class="btn btn-info" :to="{path:'/product/upProduct/' + pl.product_id}"><i class="fas fa-pencil-alt fa-fw"></i></router-link>
                      <button class="btn btn-danger" @click="Remove(pl.product_id)"><i class="fas fa-trash-alt fa-fw"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <router-link class="btn btn-outline-primary btn-sm float-left" :to="{path:'/product/addProduct'}">Add Product</router-link><br>
              <!-- End Table with hoverable rows -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Product_page",
    
    //state
    data(){
        return {
            product_list : [],
        }
    },

    methods : {
        getData : function(){
            this.axios.get('http://localhost:8000/api/product')
            .then((response) => {
                this.product_list = response.data;
                // console.log(response);
            })
        },

        Remove(id){
          if(confirm('Are you sure to delete this data?')){
                    this.axios.delete('http://localhost:8000/api/product/' + id)
                    .then(() => {
                        this.getData()
                        location.reload();
                    })
                }
        }
    },

    mounted(){
        this.getData()
    }
    }
</script>