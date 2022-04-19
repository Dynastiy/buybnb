<template>
  <div>
    <div class="payment--modal">
      <div class="payment-modal-mask">
        <div class="payment-modal-content">
            <div class="mb-3 text-right" @click="buttonClick">
                <span class="material-icons  bg-danger font-weight-bold rounded-circle text-white p-1" type="button" style="font-size: 20px">
                    close
                </span>
            </div>
          <div class="d-flex mb-3" style="gap: 10px">
            <div class="slide1 slides" id="slide1" @click="previousSlide"></div>
            <div class="slide2 slides" id="slide2" @click="nextSlide"></div>
          </div>
          <div class="payment-slide-1" v-show="slide1">
            <h4>
              Make Payment to receive <span class="span"> {{ amount.amount_bnb }} BNB</span> worth
              <span class="text-success"> &#8358;{{ amount.amount_ngn }} </span>
            </h4>
            <div class="mt-3">
              <!-- <label for="">Select Bank</label> -->
              <!-- <select id="my-select" class="bank--options mt-1 d-block" name="" @change="getNum">
                <option value="" selected>---</option>
                <option v-for="bank in bank_list" :value="bank.id" :key="bank.id" >
                  {{ bank.name }}
                </option>
              </select> -->

              <div class="bank--details mt-3" >
                <h5 class="mb-3">Bank Name: <span> Wema Bank </span></h5>
                <h5 class="mb-3">Account Name: <span> {{ account_details.account_name }} </span></h5>
                
                <h5>Account Number: <span> {{ account_details.account_number }} </span>
                <span class="material-icons" type="button" style="font-size:16px; color: #ff0000"
                  v-clipboard:copy="account_details.account_number"
                  v-clipboard:success="onCopy"
                  v-clipboard:error="onError">content_copy</span></h5>
              </div>
            </div>

            <div class="mt-3">
              <button class="continue--button" @click="nextSlide">Next</button>
            </div>
          </div>
          <div class="payment-slide-2" v-show="slide2">
            <h4>
              Upload proof to receive <span class="span"> {{ amount.amount_bnb }} BNB</span> worth
              <span class="text-success"> &#8358;{{ amount.amount_ngn }} </span>
            </h4>
            <div class="mt-3" v-if="!loading">
                <div class="center" >
                    <div class="form-input">
                    <div class="preview">
                        <img id="file-ip-1-preview" />
                    </div>
                    <label class="px-3 py-1" for="file-ip-1">Upload Proof</label>
                    <input
                        type="file"
                        id="file-ip-1"
                        accept="image/*"
                        @change="showPreview($event)"
                    />
                    </div>
                </div>
                <div class="mt-3">
                    <label for="">Enter Wallet Address</label>
                    <div>
                        <input class="form-control" v-model="payload.wallet_address" type="text" name="" id="">
                    </div>
                </div>
            </div>

            <div v-else>
              <p class="text-danger" >Please Wait...</p>
            </div>

            <div class="mt-3 d-flex" style="gap:10px">
              <button class="continue--button2" @click="previousSlide">Previous</button>
              <button class="continue--button2" @click="finish">Finish</button>
            </div>
          </div>
          <div class="payment--completed text-center" v-show="completed">
            <span class="material-icons bg-success rounded-circle text-white p-2" style="font-size: 60px">
                check
            </span>
            <h3 class="text-success">Success</h3>
            <h6>Funds will be disbursed soon!!!</h6>
            <p>View Dashboard for Status</p>
             <div class="mt-3">
              <button class="continue--button" @click="goToDashboard">Go to Dashboard</button>
            </div>
        </div>
        </div>

        
      </div>
    </div>
  </div>
</template>

<script src="vue-clipboard2-master/dist/vue-clipboard.min.js"></script>
<script>
import banks from '@/api/banks.js'
export default {
  props: ["amount"],
  data() {
    return {
      loading: false,
      bank_list: banks,
      slide1: true,
      slide2: false,
      image: '',
      completed: false,
      copiedText: '',
      account_details: {
        account_number: 7358059127,
        account_name: "Perfect Merchandise",
      },
      payload: {
        wallet_address: '',
        payment_proof: null,
        amount_bnb: this.amount.amount_bnb,
        amount_ngn: this.amount.amount_ngn
      }
    };
  },
  methods: {
     onCopy: function (e) {
       console.log(e);
       this.$toastify({
          text: `Account Number Copied`,
          className: "info",
          style: {
            background: "#f00",
          },
        }).showToast();
    },
    onError: function (e) {
       console.log('Failed to copy texts')
    },
      buttonClick() {
      this.$emit('close')
    },
     getNum(){
        var priceOptions = document.getElementById("my-select");
      var selOption = priceOptions.options[priceOptions.selectedIndex].value;
        this.getVal(Number(selOption))
      },
    nextSlide() {
      this.slide1 = false;
      this.slide2 = true;
      var slide2 = document.getElementById("slide2");
      slide2.classList.add("active");

      console.log(this.$store.getters.getAmounts);
    },
    previousSlide(){
        this.slide2 = false;
      this.slide1 = true;
      var slide2 = document.getElementById("slide2");
      slide2.classList.remove("active");
    },
    async finish(){
      this.loading = true;
      try {
        let formData = new FormData();
          formData.append("wallet_address", this.payload.wallet_address);
          formData.append("amount_bnb", this.getAmount.amount_bnb);
          formData.append("amount_naira", this.getAmount.amount_ngn);
          formData.append("payment_proof", this.payload.payment_proof);
          let res = await this.$axios.post('/create-deposit', formData)
          console.log(res);
          this.slide2 = false;
          this.completed = true
        } catch (error) {
          console.log(error);
        }
         this.loading = false;
    },
    getVal(id) {

   let res = this.bank_list.find(item => item.id === id)
   this.account_details = res;
  // let obj = this.bank_list.filter(item => item.id === id);
  // console.log( obj[0].name);
},
     goToDashboard(){
        this.$router.push('/pending')
    },
    showPreview($event) {
      var input = event.target;
      this.payload.payment_proof = input.files[0];
      console.log(this.payload.payment_proof);
      if ($event.target.files.length > 0) {
        var src = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("file-ip-1-preview");
        preview.src = src;
        preview.style.display = "block";
      }
    },
  },
  mounted() {
    var slide1 = document.getElementById("slide1");
    slide1.classList.add("active");
  },
  computed:{
    getAmount(){
      return this.$store.getters.getAmounts
    }
  }
};
</script>
