<template>
    <div>
        <div class="app--header">
            <div class="container d-flex align-items-center justify-content-between">
                <div class="logo text-white">
                    <img src="@/assets/img/logo.svg" width="120" alt="">
                </div>
                <div class="d-flex" style="gap: 20px">
                    <button class="main--btn login" @click="login">login</button>
                    <button class="main--btn signup" @click="signup">signup</button>
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
        }
    }
}
</script>