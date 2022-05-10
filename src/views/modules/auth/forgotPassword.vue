<template>
  <div>
    <div class="user-login-container">
      <div class="user--login">
        <div class="login--box">
          <div>
              <div class="mb-4 text-center">
               <div class="text-center mb-4">
            <img src="@/assets/img/icon.svg" width="50" alt="">
            </div>
            <h2 class=" ">Forgot Password</h2>
            <small>Enter the email address you used when you joined and we'll send you instructions to reset your password.</small>
          </div>
         <form action="" @submit.prevent="reset" >
            <div class="mb-4">
              <label class="" for="">Email</label>
              <input type="email" v-model="credentials.email"/>
              <small
                class="text-danger"
               v-if="errorMsg"
                >* {{ errorMsg }}
              </small>
            </div>
            <div>
              <div class="d-flex justify-content-center" v-if="loading">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div>
                <button type="submit" class="buy--btn" v-else>Send Reset Mail</button>
              </div>
          </form>
          </div>
          <!-- <div v-else>
              <h5>If this email address was used to create an account, instructions to reset your password will be sent to you. Please check your email.</h5>
          </div> -->

          
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
      errorMsg: '',
      credentials:{
        email: '',
      },
      loading: false,
    };
  },
  methods: {
    async reset() {
      this.loading = true;
      try {
        let res = await axios.post("https://api.buybnb.io/api/auth/forgot-password", this.credentials);
        console.log(res);
        this.$toastify({
          text: `If this email address was used to create an account, instructions to reset your password will be sent to you. Please check your email.`,
          className: "info",
          style: {
            background: "green",
          },
        }).showToast();
          this.$router.replace('/sign-in')
      } catch (error) {
        // console.log(error.response.data.message);
        this.errorMsg = error.response.data.message;
         this.$toastify({
          text: `${error.response.data.message}`,
          className: "info",
          style: {
            background: "#f00",
          },
        }).showToast();
      }
      this.loading = false;
      this.credentials = {}
    },
  },
};
</script>