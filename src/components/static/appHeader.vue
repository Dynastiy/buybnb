<template>
    <div>
        <div class="app--header">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo text-white">
                    <img src="@/assets/img/logo.svg" width="120" alt="">
                </div>
                <div class="d-flex" style="gap: 20px" v-if="!checkLogin">
                    <button class="main--btn login" @click="login">login</button>
                    <button class="main--btn signup" @click="signup">signup</button>
                </div>
                <div class="d-flex" style="gap: 20px" v-else>
                    <button class="main--btn login" @click="dashboard">dashboard</button>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    methods: {
        login(){
            this.$router.push('/sign-in')
        },
        signup(){
            this.$router.push('/register')
        },
        dashboard(){
            this.$router.push('/dashboard')
        }
    },
    computed:{
        checkLogin(){
            return this.$store.getters.isLoggedIn
        }
    }
}
</script>