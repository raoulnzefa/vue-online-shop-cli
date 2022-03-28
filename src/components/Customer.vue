<template>
    <div>
    <br><br>
        <div class="container">
            <div class="card">
            <div class="card-body"><br>
              <h3 class="card-title"><center>Customer List</center></h3><br>

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">Username</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="cl in cust_list" :key="cl">
                    <td>{{ cl.cust_id }}</td>
                    <td>{{ cl.name }}</td>
                    <td>{{ cl.address }}</td>
                    <td>{{ cl.telp }}</td>
                    <td>{{ cl.username }}</td>
                    <td>
                      <router-link type="button" class="btn btn-info" :to="{path:'/cust/upCust/' + cl.cust_id}"><i class="fas fa-pencil-alt fa-fw"></i></router-link>
                      <button class="btn btn-danger" @click="Remove(cl.cust_id)"><i class="fas fa-trash-alt fa-fw"></i></button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <router-link class="btn btn-outline-primary btn-sm float-left" :to="{path:'/cust/addCust'}">Add Customer</router-link><br>
              <!-- End Table with hoverable rows -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "Customer_page",
    
    //state
    data(){
        return {
            cust_list : [],
        }
    },

    methods : {
        getData : function(){
            this.axios.get('http://localhost:8000/api/customer')
            .then((response) => {
                this.cust_list = response.data;
                // console.log(response);
            })
        },

        Remove(id){
          if(confirm('Are you sure to delete this data?')){
                    this.axios.delete('http://localhost:8000/api/customer/' + id)
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