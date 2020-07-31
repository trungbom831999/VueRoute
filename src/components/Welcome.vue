<template>
    <div>
        <h1>Welcome {{user}}</h1>
        <h2>Mật khẩu hiện tại: {{password}}</h2>
        <button @click="logOut" class="btn btn-primary">Đăng xuất</button>
    </div>
</template>

<script>
import store from '@/store'
export default {
    data() {
        return {
            user: store.user,
            password: store.password
        }
    },
    methods: {
        logOut(){
            store.user = null;
            this.$router.push("/");
        }
    },
}
</script>