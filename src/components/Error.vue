<template>
    <div>
        <strong>Oops!!! 404 not Found</strong>
        <br>
        <a href="#" @click.prevent="back">Go back</a>
    </div>
</template>
<script>
export default {
    methods: {
        back() {
            this.$router.go(-1);
        }
    }
}
</script>