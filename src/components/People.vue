<template>
    <div>
        <h1>Name: {{$route.params.name}}</h1>
        <br>
        <h2>Pass: {{$route.params.pass}}</h2>
        <button @click="logOut" class="btn btn-primary">Đăng xuất</button>
    </div>
</template>

<script>
export default {
    methods: {
        logOut(){
            this.$router.push("/");
        }
    },
}
</script>