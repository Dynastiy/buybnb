<template>
  <div>
    <div class="user-login-container">
      <div class="user--login">
        <div class="login--box">
          <div class="text-center mb-4">
            <img src="@/assets/img/icon.svg" width="50" alt="" />
          </div>
          <div class="mb-4 text-center">
            <h2 class=" ">User Registration</h2>
            <small>Enter details to create a new account</small>
          </div>
          <form action="" @submit.prevent="register">
            <div class="mb-4">
              <label class="" for="">Name</label>
              <input type="text" v-model="credentials.name"/>
              <small
                class="text-danger"
                v-for="error in errorMsg.name"
                :key="error.id"
                >* {{ error }}
              </small>
            </div>
            <div class="mb-4">
              <label class="" for="">Email</label>
              <input type="email" v-model="credentials.email"/>
              <small
                class="text-danger"
                v-for="error in errorMsg.email"
                :key="error.id"
                >* {{ error }}
              </small>
            </div>
            <div class="mb-4">
              <label class="" for="">Password</label>
              <input type="password" v-model="credentials.password"/>
              <small
                class="text-danger"
                v-for="error in errorMsg.password"
                :key="error.id"
                >* {{ error }}
              </small>
            </div>
            <div>
              <div class="d-flex justify-content-center" v-if="loading">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
              <button type="submit" class="buy--btn" v-else>Register</button>
            </div>
          </form>
          <div class="text-center mt-4">
            <span class="">
              Please
              <router-link to="/sign-in" class="text-info font-weight-bold"
                >Login</router-link
              >
              if have an existing account
            </span>
          </div>
          <div class="text-center">
            <span class="">
              Go back to
              <router-link to="/" class="text-info font-weight-bold"
                >Homepage</router-link
              >
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      errorMsg: {},
      credentials:{
        name: '',
        email: '',
        password: ''
      },
      loading: false,
    };
  },
  methods: {
    async register() {
      this.loading = true;
      try {
        let res = await axios.post("https://api.buybnb.io/api/auth/signup", this.credentials);
        this.$toastify({
          text: res.data.message,
          className: "info",
          style: {
            background: "green",
          },
        }).showToast();
        console.log(res.data);
        this.$router.push('/sign-in')
      } catch (error) {
        console.log(error.response.data.errors);
        this.errorMsg = error.response.data.errors;
      }
      this.loading = false;
      this.credentials = {}
    },
  },
};
</script>
