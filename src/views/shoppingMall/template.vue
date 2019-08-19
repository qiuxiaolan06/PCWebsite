<template>
    <div style="height: 100%">
        <shopping-header></shopping-header>
        <router-view></router-view>
        <shopping-footer></shopping-footer>
    </div>
</template>

<script>
    import shoppingHeader from "../../components/shoppingMall/Header";
    import shoppingFooter from "../../components/shoppingMall/Footer";
    export default {
        name: "template.vue",
        components:{shoppingHeader,shoppingFooter},
    }
</script>

<style scoped>

</style>
