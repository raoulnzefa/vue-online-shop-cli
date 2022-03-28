<template>
    <div>
    <br><br>
        <div class="container">
            <router-view></router-view>
            <div class="card"><br>
                <h3 class="card-title"><center>Add Customer</center></h3>
                <div class="card-body">
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

                    <button class="btn btn-outline-dark" @click="Save()">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "addCust",
        data() {
            return {
                name : "",
                address : "",
                telp : "",
                username : "",
                password : "",
            }
        },
        methods : {
            Save : function(){
                let form = {
                    //back end    //state
                    'name'       : this.name,
                    'address'    : this.address,
                    'telp'       : this.telp,
                    'username'   : this.username,
                    'password'   : this.password,
                }
                
                this.axios.post('http://localhost:8000/api/customer', form)
                    .then((response) =>{
                        // console.log(response);
                        this.$swal('Success!', 'Success add new data', 'OK');
                        this.cust_list = response.data;
                        this.$router.push('/cust')
                    })
                }
        }  
        
    }
</script>