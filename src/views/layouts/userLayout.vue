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
    },
    mounted(){
        const toggller = document.getElementById("tog");
        const sidee = document.getElementById('side-bar');
        const closeMenu = document.getElementById('close-menu');
        const bodyEl = document.getElementsByTagName('body')[0]
        document.onclick = function(e) {
          if(e.target.id !== "tog" && e.target.id !== "side-bar"){
            sidee.classList.remove('active');
            bodyEl.classList.remove("active");
          }
        }
        toggller.onclick = function(){
        sidee.classList.toggle('active');
        bodyEl.classList.toggle("active")
        }
        closeMenu.onclick = function(){
        sidee.classList.remove('active');
        bodyEl.classList.remove("active")
        }
    }
}
</script>