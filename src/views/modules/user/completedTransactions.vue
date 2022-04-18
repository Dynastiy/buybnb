<template>
  <div>
    <h3 class="text-bold">Completed Deposits</h3>
    <div class="mt-4 other--tables">
      <div class="table-responsive">
        <table class="table table-centered table-nowrap mb-0">
          <thead>
            <tr>
              <th scope="col">Reference</th>
              <th scope="col">Date</th>
              <th scope="col">Amount (NGN)</th>
              <th scope="col">Amount (BNB)</th>
              <th scope="col">Wallet Address</th>
              <th scope="col">Payment Proof</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-if="loading">
              Fetching Data . . .
            </tr>
            <tr v-for="deposit in deposits" :key="deposit.id" v-else>
              <td>{{ deposit.ref_no }}</td>
              <td>{{ timeStamp(deposit.created_at) }}</td>
              <td>&#8358;{{ nairaFilter(deposit.amount_naira) }}</td>
              <td>{{ deposit.amount_bnb }}BNB</td>
              <td> {{ deposit.wallet_address }} </td>
              <td>
                <a
                  target="_blank"
                  :href="'https://api.buybnb.io/' + deposit.payment_proof"
                >
                  {{ deposit.payment_proof }}
                </a>
              </td>
              <td>
                <span :class="[deposit.status]"> {{ deposit.status }} </span>
              </td>
            </tr>
            <tr v-show="deposits.length === 0" class="text-danger">
              Nothing Here . . .
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal to Credit User -->
    <!-- <div class="sure-modal" v-show="confirm_box">
      <div class="are-you-sure text-center">
        <h1>
          💡⁉️ <br />
          Are you Sure?
        </h1>
        <div class="d-flex justify-content-center mt-3" style="gap: 10px">
          <button class="btn btn-success" @click="credit">Yes</button
          ><button class="btn btn-danger" @click="closeModal">No</button>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import {
  nairaFilter,
  percentFilter,
  percentageFilter,
  timeStamp,
} from "@/plugins/filter.js";
export default {
  data() {
    return {
      nairaFilter,
      percentFilter,
      percentageFilter,
      timeStamp,
      loading: false,
      deposits: [],
      confirm_box: false,
    };
  },
  methods: {
    async getDeposits() {
      this.loading = true;
      try {
        let res = await this.$axios.get("/user-dashboard");
        console.log(res.data.user.data[0]);
        this.deposits = res.data.user.data[0].completed_deposits;
      } catch (error) {
        console.log(error);
      }
      this.loading = false;
    },
    // creditUser(){
    //     try {
    //         let res = await this.$axios.post("")
    //     } catch (error) {
            
    //     }
    // }
  },
  async created() {
    this.getDeposits();
  },
};
</script>
