<template>
  <div>
    <div class="hero--section" id="top">
      <div class="container">
        <h1>Buy <span class="span">BNB</span> Instantly with <span class="text-success">NGN</span></h1>
        <div class="prices">
          <div class="price--options price--options-1">
            <h4>&#8358; 100,000</h4>
            <h6 class="my-3">Get</h6>
            <h2>  ~{{ (100000 / (naira_rate*bnb_rate)).toFixed(4) }} <span class="span2">BNB</span> </h2>
            <button class="buy--btn" v-if="checkLogin" @click="buy100">Buy</button>
            <button class="buy--btn" v-else  @click="register">Register</button>
          </div>
          <div class="price--options price--options-2">
            <h4>&#8358; 200,000</h4>
            <h6 class="my-3">Get</h6>
            <h2>  ~{{ (200000 / (naira_rate*bnb_rate)).toFixed(4) }} <span class="span2">BNB</span></h2>
            <button class="buy--btn" v-if="checkLogin"  @click="buy200">Buy</button>
             <button class="buy--btn" v-else  @click="register">Register</button>
          </div>
          <div class="price--options price--options-3">
            <h4>&#8358; 500,000</h4>
            <h6 class="my-3" >Get</h6>
            <h2> ~{{ (500000 / (naira_rate*bnb_rate)).toFixed(4) }}<span class="span2">BNB</span></h2>
            <button class="buy--btn" v-if="checkLogin"  @click="buy500">Buy</button>
             <button class="buy--btn" v-else  @click="register">Register</button>
          </div>
          <div class="price--options price--options-4">
            <h4>&#8358; 1M</h4>
            <h6 class="my-3">Get</h6>
            <h2> ~{{ (1000000 / (naira_rate*bnb_rate)).toFixed(4) }}<span class="span2">BNB</span></h2>
            <button class="buy--btn" v-if="checkLogin"  @click="buym">Buy</button>
             <button class="buy--btn" v-else  @click="register">Register</button>
          </div>
        </div>
      </div>
    </div>
    <section class="amount">
      <!-- Enter Amount -->
      <div class="container" id="amount">
          <h2 class="text-center mb-4">Enter your Amount</h2>
          <p class="text-center text-danger" v-if="!checkLogin">Please <router-link class="text-white" to="/register">Register</router-link> or  <router-link class="text-white" to="/sign-in">Login</router-link> to buy BNB </p>
        <div class="amount--container">
          
          <div>
            <label class="text-left" for="">NGN</label>
            <input type="number form-control"  v-model="amount.amount_ngn" @keyup="exchange_ngn" :disabled="disabled"/>
          </div>
          <div>
            <label class="text-left" for="">BNB</label>
            <input type="number form-control"  v-model="amount.amount_bnb" @keyup="exchange_bnb" :disabled="disabled"/>
          </div>
          <div><button class="buy--btn w-100" v-if="checkLogin" @click="showPaymentModal">Buy</button>
           <button class="buy--btn" v-else  @click="register">Register</button></div>
        </div>
      </div>
    </section>

    <!-- How it Works  -->
    <section class="how-it-works">
        <div class="container">
            <h2 class="text-center mb-4">How it Works</h2>
            <div>
                <p>
                    Binance Coin was initially created as an Ethereum-based utility token for paying transaction fees on Binance ecosystem. Then it has become a native token of Binance Chain  and Binance Smart Chain 
<pre></pre>

As a native token, BNB is used in both Binance Chain and acts as a community utility token for maintaining dApps on Binance Smart Chain. Initially, Binance Coin had a total supply of 200 million tokens but the current total supply is lower and decreasing due to periodical burning events.
<pre></pre><b> BUYBNB.IO ACCEPTS PAYMENTS DONE MANUALLY INTO A SPECIFIC BANK ACCOUNTS AND CONFIRMATION IS DONE 10MIN AFTER A SUCCESFUL TRANSACTION. </b>

<pre></pre>
You can logged into your dashboard to monitor your transaction STATUS if SUCCESFULL or PENDING.
                </p>
            </div>
        </div>
    </section>

    <section class="mt-4">
      <div class="container">
        <h2 class="text-center">
          For Delayed Transactions
        </h2>
        <div class="social--media mt-4">
          <div class="whatsapp social" >
            <a href="https://chat.whatsapp.com/CC7gMzPetgv08EE0EchOFi">
            <span>START CHAT</span>
            <img src="@/assets/img/whatsapp.svg" width="40" alt="">
            </a>
          </div>
          <div class="telegram social">
            <a href="https://t.me/officialbuybnb">
            <span>
              START CHAT
            </span>
            <img src="@/assets/img/telegram.svg" width="40" alt="">
            </a>
          </div>
        </div>
      </div>
    </section>


    <!-- payment Modal  -->
    <payment-modal v-show="paymentModal" @close="closeModal" :amount="amount"/>

    <!-- BAck to Top -->
    <back-to-top  @closePopup="closePopup" :popup="popup" ></back-to-top>
  </div>
</template>

<script>
import PaymentModal from '@/components/modals/paymentModal.vue';
import BackToTop from '@/components/modals/backToTop.vue'
import axios from 'axios'
export default {
    components:{
        PaymentModal, BackToTop
    },
    data(){
        return {
            amount: {
              amount_bnb: '',
              amount_ngn: '',
            },
            naira_rate: 590,
            bnb_rate: '',
            paymentModal: false,
            popup: true,
            disabled: true,
        }
    },
    methods: {
        closeModal(){
            this.paymentModal = false
        },
        showPaymentModal(){
         if (!this.$store.getters.isLoggedIn) {
            this.$toastify({
          text: `Please Login`,
          className: "alert",
          style: {
            background: "red",
          },
        }).showToast();
      // this.$router.push("/sign-in");
      this.$router.push({path:'/sign-in', query:{ redirects: 'login'}});
    }
    else{
    this.paymentModal = true
    }
        let amount = this.amount
        this.$store.dispatch("amounts", { amount });
    },
    buy100(){
      this.amount.amount_ngn = 100000;
    let store_amount = Number(this.amount.amount_ngn) / (this.bnb_rate * this.naira_rate);
             this.amount.amount_bnb = store_amount;
             this.paymentModal = true;
             let amount = this.amount
             this.$store.dispatch("amounts", {amount})
    },
    buy200(){
      this.amount.amount_ngn = 200000;
    let store_amount = Number(this.amount.amount_ngn) / (this.bnb_rate * this.naira_rate);
             this.amount.amount_bnb = store_amount;
             this.paymentModal = true;
             let amount = this.amount
             this.$store.dispatch("amounts", {amount})
    },
    buy500(){
      this.amount.amount_ngn = 500000;
    let store_amount = Number(this.amount.amount_ngn) / (this.bnb_rate * this.naira_rate);
             this.amount.amount_bnb = store_amount;
             this.paymentModal = true;
             let amount = this.amount
             this.$store.dispatch("amounts", {amount})
    },
    buym(){
      this.amount.amount_ngn = 1000000;
    let store_amount = Number(this.amount.amount_ngn) / (this.bnb_rate * this.naira_rate);
             this.amount.amount_bnb = store_amount;
             this.paymentModal = true;
             let amount = this.amount
             this.$store.dispatch("amounts", {amount})
    },
    
    async getBnB(){
        let response = await axios.get('https://api.coincap.io/v2/assets/binance-coin')
            this.bnb_rate = response.data.data.priceUsd
            console.log(this.bnb_rate);
            
    },
    closePopup(){
      this.popup = false
    },
    exchange_ngn(){
       if (this.$store.getters.isLoggedIn) {
           this.disabled = false;
          let amount = Number(this.amount.amount_ngn) / (this.bnb_rate * this.naira_rate);
             this.amount.amount_bnb = amount
        }
    },
    register(){
      this.$router.push("/register")
    },
    exchange_bnb(){
      if (this.$store.getters.isLoggedIn) {
            this.disabled = false;
          let amount = this.amount.amount_bnb * this.naira_rate * this.bnb_rate
         this.amount.amount_ngn = amount
        }
    },
    },
    async created(){
        this.getBnB();
         if (this.$store.getters.isLoggedIn) {
           this.disabled = false;
        }
        
    },
    computed:{
      checkLogin(){
            return this.$store.getters.isLoggedIn
      }
    },
     mounted(){
this.getBnB()
//       setInterval(() => {
//         this.getBnB();
        
//       }, 1000);
    }
}
</script>
