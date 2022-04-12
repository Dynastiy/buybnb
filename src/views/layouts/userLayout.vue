<template>
    <div>
        <app-drawer/>
        <app-header/>
        <div id="main--dashboard">
            <router-view/>
        </div>
    </div>
</template>

<script>
import AppDrawer from '@/components/static/appDrawer.vue'
import AppHeader from '@/components/static/dashboardHeader.vue'
export default {
    components:{
        AppDrawer, AppHeader
    }
}
</script>