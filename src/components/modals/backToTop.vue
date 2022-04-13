<template>
  <div>
    <div class="back-to-top" id="navbar" v-show="back_to_top">
      <button class="back-to-top"  @click="buttonClick">
          <span class="material-icons"> expand_less </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            back_to_top: false
        }
    },
    methods:{
        buttonClick(){
            this.$emit('btnClick')
        }
    },
    mounted(){
        // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
      console.log(sticky);
    // navbar.classList.add("sticky")
    // this.back_to_top = true
  } else {
    // navbar.classList.remove("sticky");
    // this.back_to_top = false
  }
}
    }
}
</script>
