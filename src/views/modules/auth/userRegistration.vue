<template>
  <div>
    <div class="user-login-container">
       
      <div class="user--login">
       <div class="login--box">
            <div class="text-center mb-4">
            <img src="@/assets/img/icon.svg" width="50" alt="">
        </div>
            <div class="mb-4 text-center">
                <h2 class=" ">User Registration</h2>
            <small>Enter details to create a new account</small>
            </div>
            <div>
          <label class="" for="">Username</label>
          <input type="text form-control" />
        </div>
        <div>
          <label class="" for="">Email</label>
          <input type="email form-control" />
        </div>
        <div>
          <label class="" for="">Password</label>
          <input type="password form-control" />
        </div>
        <div><button class="buy--btn " @click="register">Register</button></div>
         <div class="text-center  mt-4">
            <span class=""> Please <router-link to="/sign-in" class="text-info font-weight-bold">Login</router-link> if have an existing account </span>
          </div>  
          <div class="text-center ">
            <span class=""> Go back to <router-link to="/" class="text-info font-weight-bold">Homepage</router-link> </span>
          </div>  
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        register(){
            this.$router.push('/dashboard')
        },
    }
}
</script>
