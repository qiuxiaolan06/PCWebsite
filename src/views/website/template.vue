<template>
    <div style="height: 100%">
        <website-header></website-header>
        <router-view></router-view>
        <website-footer></website-footer>
    </div>
</template>

<script>
    import  websiteHeader from "../../components/website/Header";
    import  websiteFooter from "../../components/website/Footer"
    export default {
        components:{websiteHeader,websiteFooter},
    }
</script>

<style scoped>

</style>
