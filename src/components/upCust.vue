<template>
    <div><br><br>
        <div class="container">
            <div class="card"><br>
                <h3 class="card-title"><center>Update Customer</center></h3>
                <div class="card-body">

                    <input type="hidden" class="form-control" id="name" v-model="cust_id">

                    <div class="mb-3">
                        <label for="name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="name" v-model="name" placeholder="Full Name">
                    </div>

                    <div class="mb-3">
                        <label for="address" class="form-label">Address</label>
                        <textarea class="form-control" v-model="address" id="address" rows="3"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="telp" class="form-label">Telephone</label>
                        <input type="number" class="form-control" id="telp" v-model="telp" placeholder="Telephone">
                    </div>

                    <div class="mb-3">
                        <label for="username" class="form-label">Username</label>
                        <input type="text" class="form-control" id="username" v-model="username" placeholder="Username">
                    </div>

                    <div class="mb-3">
                        <label for="password" class="form-label">Password</label>
                        <input type="password" class="form-control" id="password" v-model="password" placeholder="Password">
                    </div>

                    <button class="btn btn-outline-dark" @click="Update()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "update_cust",
        data() {
            return {
                cust_id : "",
                name : "",
                address : "",
                telp : "",
                username : "",
                password : "",
            }
        },
        methods : {
            getDetail(id){
                this.axios.get('http://localhost:8000/api/customer/'+id)
                .then(response => {
                    //vmodel
                    this.cust_id    = response.data[0].cust_id,
                    this.name       = response.data[0].name,
                    this.address    = response.data[0].address,
                    this.telp       = response.data[0].telp,
                    this.username   = response.data[0].username,
                    this.password   = response.data[0].password
                })
            },

            Update(){
                let form = {
                    //back end    //state
                    'name'       : this.name,
                    'address'    : this.address,
                    'telp'       : this.telp,
                    'username'   : this.username,
                    'password'   : this.password,
                }
                
                this.axios.put('http://localhost:8000/api/customer/' + this.cust_id, form)
                    .then(response =>{
                        this.cust_list = response.data;
                        this.$router.push('/cust')
                    })
                }
        },
        mounted(){
            this.getDetail(this.$route.params.id)
        }
        
    }
</script>