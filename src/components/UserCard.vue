<template>
    <div>
        <div class="card h-100 shadow-sm user-card" @click="selectUser(user)">
            <img src="https://via.placeholder.com/120" class="card-img-top rounded-circle mx-auto mt-3"
                style="width: 120px; height: 120px; object-fit: cover;" alt="Avatar" />
            <div class="card-body text-center">
                <h5 class="card-title mb-1">{{ user.name }}</h5>
                <p class="card-text text-muted small mb-2">{{ user.email }}</p>
                <button class="btn btn-sm btn-primary">View Profile</button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: "UserCard",
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectUser(user) {
            this.$emit('user-selected', user);
        }
    }
};

</script>
