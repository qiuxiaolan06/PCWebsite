<template>
    <div>
        <!--轮播部分-->
        <div class="swipe">
            <el-carousel :height="carouselHeight" arrow="always">
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../../assets/img/shoppingMall/home/banner1.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../../assets/img/shoppingMall/home/banner2.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../../assets/img/shoppingMall/home/banner3.jpg')+')'}">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <div class="container">
            <div class="thImg">
                <div class="clearfix" :style="{backgroundImage:'url('+require('../../assets/img/shoppingMall/home/bg.jpg')+')'}">
                    <div class="imgs">
                        <router-link to>
                            <img src="../../assets/img/shoppingMall/home/i1.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="imgs">
                        <router-link to>
                            <img src="../../assets/img/shoppingMall/home/i2.jpg" alt="">
                        </router-link>
                    </div>
                    <div class="imgs">
                        <router-link to>
                            <img src="../../assets/img/shoppingMall/home/i3.jpg" alt="">
                        </router-link>
                    </div>

                </div>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "Home",
        components: {},
        data() {
            return {
                carouselHeight: '500px',//轮播图高度
            }
        },
        computed: {
        },
        mounted() {
            //根据窗口宽度设置轮播图高度
            this.resizeCarouselHeight();
            window.onresize = (() => {
                this.resizeCarouselHeight();
            });
        },
        methods: {
            //轮播图高度
            resizeCarouselHeight() {
                let innerWidth = window.innerWidth;
                if (innerWidth <= 768) {
                    this.carouselHeight = '280px'
                } else if (innerWidth > 768 && innerWidth <= 1024) {
                    this.carouselHeight = '360px'
                } else if (innerWidth > 1024 && innerWidth <= 1280) {
                    this.carouselHeight = '440px'
                } else if (innerWidth > 1280 && innerWidth <= 1366) {
                    this.carouselHeight = '480px'
                } else if (innerWidth > 1366 && innerWidth <= 1680) {
                    this.carouselHeight = '640px'
                } else if (innerWidth > 1680 && innerWidth <= 1920) {
                    this.carouselHeight = '720px'
                } else if (innerWidth > 1920 && innerWidth <= 2560) {
                    this.carouselHeight = '820px'
                } else if (innerWidth > 2560) {
                    this.carouselHeight = '900px'
                }
            },
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/shoppingMall/shoppingMall_home";

</style>
