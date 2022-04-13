<template>
    <div>
        <app-header/>
        <router-view/>
        <app-footer/>
    </div>
</template>

<script>
import AppHeader from '@/components/static/appHeader.vue'
import AppFooter from '@/components/static/appFooter.vue'
export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>