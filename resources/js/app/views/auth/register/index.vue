<template>
    <div class="register row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">Register</div>
                <div class="card-body">
                    <form @submit.prevent="register">
                        <div class="form-group row">
                            <label for="name">Name:</label>
                            <input type="text" v-model="form.name" name="nombre" class="form-control" placeholder="Name Address" 
                            v-validate="'required|alpha'" 
                            :class="{ 'is-invalid':errors.has('nombre') }">
                            <span class="invalid-feedback">{{ errors.first('nombre') }}</span>
                        </div>
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" v-model="form.email" name="email" class="form-control" placeholder="Email Address" 
                            v-validate="'required|email'" 
                            :class="{ 'is-invalid':errors.has('email') }">
                            <span class="invalid-feedback">{{ errors.first('email') }}</span>
                        </div>

                        <div class="form-group row">
                            <label for="password">Password:</label>
                            <input type="password" v-model="form.password" name="contraseña" class="form-control" placeholder="Password"
                            v-validate="'required'"
                            :class="{ 'is-invalid':errors.has('contraseña') }">
                            <span class="invalid-feedback">{{ errors.first('contraseña') }}</span>
                        </div>

                        <div class="form-group row">
                            <input type="submit" value="Register">
                            <div class="float-right">
                                <router-link to="/login" class="nav-link">Login</router-link>
                            </div>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "auth-register",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    password: ''
                },
                error: null
            };
        },
        methods: {
            register(e){
                var url = '/auth/register';
                var vm = this;
                this.$validator.validate().then(valid => {
                    if (valid) {
                        api.call('post', url, this.form).then( function(response) {

                            console.log(response);
                            vm.$router.push({path: '/login'});

                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                })
               
            }
        },
        computed: {
           
        }
    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>
