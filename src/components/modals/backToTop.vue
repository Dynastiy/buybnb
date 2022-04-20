<template>
  <div>
    <div class="customer--care">
      <div class="back-to-top" id="navbar" >
      <button class="back-to-top" @click="buttonClick">
        <span class="material-icons"> support_agent </span>
      </button>
    </div>
    <div>
        <div class="popup" v-show="popup">
          
          <div class="text-right p-1" >
                <a class="text-white" style="text-decoration:none" href="https://chat.whatsapp.com/CC7gMzPetgv08EE0EchOFi">
                  <span class="material-icons text-danger font-weight-bold" @click="close" style="font-size: 24px">
                    close
                </span>
                </a>
            </div>
          <h3>Hi there 👋</h3>
          <p>We are here to help you buy BNB with NGN on buybnb.io. Ask us if you have any problem </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["popup"],
  data() {
    return {
      // back_to_top: false,
    };
  },
  methods: {
   close(){
     this.$emit("closePopup")
   },
   buttonClick(){
     this.$emit(" btnClick")
   }
  },
};
</script>
