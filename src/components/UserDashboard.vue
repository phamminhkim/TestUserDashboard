<template>
    <div class="container py-4">
        <h2 class="mb-4 font-weight-bold text-primary">{{ $t('user_dashboard') }}</h2>

        <div v-if="selected_user" class="alert alert-info">
            Selected: <strong>{{ selected_user.name }}</strong>
        </div>

        <OrderSummary :completed-orders-count="completedOrdersCount" :completed-orders-total="completedOrdersTotal" />

        <div class="row">
            <div v-for="user in users" :key="user.id" class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
                <UserCard :user="user" @user-selected="selectUser" />
            </div>
        </div>
    </div>
</template>

<script>
import usersData from "@/assets/users.json";
import UserCard from "@/components/UserCard.vue";
import OrderSummary from "@/components/OrderSumary.vue";
export default {
    name: "UserDashboard",
    components: {
        UserCard,
        OrderSummary
    },
    data() {
        return {
            users: [],
            selected_user: null
        };
    },
    computed: {
        completedOrders() {
            return this.users.filter(u => u.status === "completed");
        },
        completedOrdersCount() {
            return this.completedOrders.length;
        },
        completedOrdersTotal() {
            return this.completedOrders.reduce((sum, u) => sum + u.total, 0);
        }
    },
    filters: {
        currency(value) {
            return "$" + Number(value).toLocaleString();
        }
    },
    created() {
        this.users = usersData;
    },
    methods: {
        selectUser(user) {
            this.selected_user = user;
        }
    }
};
</script>

<style scoped>
.user-card {
    transition: transform 0.2s, box-shadow 0.2s;
    cursor: pointer;
}

.user-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
}
</style>
