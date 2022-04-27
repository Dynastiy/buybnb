<template>
    <div>
        <app-drawer/>
        <app-header/>
        <div id="main--dashboard">
            <div class="mb-3 text-right">
              <button class="login main--btn ">
              <router-link to="/" class="text-dark">BuyBNB</router-link>
            </button>
            </div>
            <router-view />
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/static/appDrawer.vue'
import AppHeader from '@/components/static/dashboardHeader.vue'
export default {
    components:{
        AppDrawer, AppHeader
    },
   async created(){
        if (!this.$store.getters.isLoggedIn) {
            this.$toastify({
          text: `Please Login`,
          className: "alert",
          style: {
            background: "red",
          },
        }).showToast();
      this.$router.push("/sign-in");
    }
   }
}
</script>