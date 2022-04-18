<template>
    <div>
        <h2>User Dashboard</h2>
        <!-- Analytics  -->
        <section class="mt-4 analytics">
            <div class="price--options-1 price--options">
                <h1  v-if="deposits">
                    {{ totalDeposits }}
                </h1>
                <h6>Total Deposits</h6>
            </div>
             <div class="price--options-2 price--options">
                <h1 v-if="deposits">
                    {{ deposits.pending_deposits.length }}
                </h1>
                <h6>Pending Deposits</h6>
            </div>
             <div class="price--options-3 price--options">
                 <h1 v-if="deposits">
                    {{ deposits.completed_deposits.length }}
                </h1>
                <h6>Completed Deposits</h6>
            </div>
             <div class="price--options-4 price--options">
                 <h1 v-if="deposits">
                    {{ deposits.canceled_deposits.length }}
                </h1>
                <h6>Cancelled Deposits</h6>
            </div>
        </section>

        <!-- Deposits Table  -->
        <section class="mt-4">
            <h3 class="text-bold">Recent Deposits</h3>
             <div class="mt-4 other--tables">
                     <div class="table-responsive">
                            <table class="table table-centered table-nowrap mb-0">
                                <thead>
                                <tr>
                                    <th scope="col">Reference</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Amount (NGN)</th>
                                    <th scope="col">Amount (BNB)</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                 <tr v-for="deposit in pending" :key="deposit.id">
                                     <td> {{ deposit.ref_no }} </td>
                                    <td> {{ timeStamp(deposit.created_at) }} </td>
                                    <td>&#8358; {{ nairaFilter(deposit.amount_naira) }} </td>
                                    <td>{{deposit.amount_bnb}}BNB</td>
                                    <td> <span :class="[deposit.status]">{{ deposit.status}} </span> </td>
                                </tr>
                                
                                </tbody>
                            </table>
                        </div>
                </div>
        </section>
    </div>
</template>

<script>
import { nairaFilter, percentFilter, timeStamp } from '@/plugins/filter'
export default {
    data(){
        return {
            nairaFilter, percentFilter, timeStamp,
            deposits: []
        }
    },
    methods: {
        async getDeposits() {
            let res = await this.$axios.get('/user-dashboard')
            console.log(res.data.user.data[0]);
            this.deposits =res.data.user.data[0];
            this.pending = res.data.user.data[0].pending_deposits
        }
    },
    async created(){
        this.getDeposits();
    },
    computed:{
        totalDeposits(){
            return Number(this.deposits.canceled_deposits.length) + Number(this.deposits.completed_deposits.length) + Number(this.deposits.pending_deposits.length)
        }
    }
}
</script>