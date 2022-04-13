<template>
  <div>
    <div class="payment--modal">
      <div class="payment-modal-mask">
        <div class="payment-modal-content">
            <div class="mb-3 text-right" @click="buttonClick">
                <span class="material-icons  bg-danger font-weight-bold rounded-circle text-white p-1" style="font-size: 20px">
                    close
                </span>
            </div>
          <div class="d-flex mb-3" style="gap: 10px">
            <div class="slide1 slides" id="slide1" @click="previousSlide"></div>
            <div class="slide2 slides" id="slide2" @click="nextSlide"></div>
          </div>
          <div class="payment-slide-1" v-show="slide1">
            <h4>
              Make Payment to receive <span class="span">1.2343BNB</span> worth
              <span class="text-success"> &#8358;123,000</span>
            </h4>
            <div class="mt-3">
              <label for="">Select Bank</label>
              <select class="bank--options mt-1 d-block" name="" id="">
                <option v-for="bank in bank_list" :key="bank.id" value="">
                  {{ bank.name }}
                </option>
              </select>

              <div class="bank--details mt-3">
                <h5>Account Name: <span> John Doe </span></h5>
                <h5>Account Number: <span> 12232323312 </span></h5>
              </div>
            </div>

            <div class="mt-3">
              <button class="continue--button" @click="nextSlide">Next</button>
            </div>
          </div>
          <div class="payment-slide-2" v-show="slide2">
            <h4>
              Upload proof to receive <span class="span">1.2343BNB</span> worth
              <span class="text-success"> &#8358;123,000</span>
            </h4>
            <div class="mt-3">
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
                        <input class="form-control" type="text" name="" id="">
                    </div>
                </div>
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

<script>
export default {
  data() {
    return {
      bank_list: [{ name: "Access Bank", slug: "access" }],
      slide1: true,
      slide2: false,
      image: '',
      completed: false,
    };
  },
  methods: {
      buttonClick() {
      this.$emit('close')
    },
    nextSlide() {
      this.slide1 = false;
      this.slide2 = true;
      var slide2 = document.getElementById("slide2");
      slide2.classList.add("active");
    },
    previousSlide(){
        this.slide2 = false;
      this.slide1 = true;
      var slide2 = document.getElementById("slide2");
      slide2.classList.remove("active");
    },
    finish(){
         this.slide2 = false;
        this.completed = true
    },
    goToDashboard(){
        this.$router.push('/pending')
    },
    showPreview($event) {
      var input = event.target;
      this.image = input.files[0];
      console.log(this.image);
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
};
</script>
