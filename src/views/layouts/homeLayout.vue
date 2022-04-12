<template>
    <div>
        <app-header/>
        <router-view/>
    </div>
</template>

<script>
import AppHeader from '@/components/static/appHeader.vue'
export default {
    components: {
        AppHeader
    }
}
</script>