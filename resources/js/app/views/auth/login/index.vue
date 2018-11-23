<template>
    <div class="login row justify-content-center">
        <div class="col-md-4">
            <div class="card">
                <div class="card-header">login</div>
                <div class="card-body">
                    <form @submit.prevent="authenticate">
                        <div class="form-group row">
                            <label for="email">Email:</label>
                            <input type="email" v-model="form.email" class="form-control" placeholder="Email Address">
                        </div>
                        <div class="form-group row">
                            <label for="password">Password:</label>
                            <input type="password" v-model="form.password" class="form-control" placeholder="Password">
                        </div>
                        <div class="form-group row">
                            <input type="submit" value="Login">
                            <div class="float-right">
                                <router-link to="/register" class="nav-link">Register</router-link>
                            </div>
                        </div>
                        <div class="form-group row" v-if="authError">
                            <p class="error">
                                {{ authError }}
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {login} from '../../../../helpers/auth';
    export default {
        name: "auth-login",
        data() {
            return {
                form: {
                    email: 'fahey.vince@example.net',
                    password: 'secret'
                },
                error: null
            };
        },
        methods: {
            authenticate() {
                this.$store.dispatch('infoUser/login');
                login(this.$data.form)
                    .then((res) => {
                        this.$store.commit("infoUser/loginSuccess", res);
                        this.$router.push({path: '/admin'});
                    })
                    .catch((error) => {
                        this.$store.commit("infoUser/loginFailed", {error});
                    });
            }
        },
        computed: {
            authError() {
                return this.$store.getters['infoUser/authError'];
            }
        }
    }
</script>

<style scoped>
.error {
    text-align: center;
    color: red;
}
</style>
