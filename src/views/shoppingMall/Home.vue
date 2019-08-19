<template>
    <div>
        <!--轮播部分-->
        <div class="swipe" style="margin-top:62px;">
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
            <!--三张小图-->
            <div class="thImg">
                <div class="clearfix" :style="{backgroundImage:'url('+require('../../assets/img/shoppingMall/home/bg.jpg')+')'}">
                    <div class="imgs">
                        <router-link to="/shoppingMall/detail/vase">
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
            <div style="clear: both"></div>

            <!--分割线-->
            <div class="image">
                <img src="../../assets/img/shoppingMall/home/ih1.jpg" alt="">
            </div>

            <!--区域内容-->
            <div class="clearfix">
                <div>
                    <router-link to>
                        <img src="../../assets/img/shoppingMall/home/n1.jpg" alt="">
                    </router-link>
                    <p></p>
                </div>
                <div>
                    <router-link to>
                        <img src="../../assets/img/shoppingMall/home/n2.jpg" alt="">
                    </router-link>
                    <p></p>
                </div>
                <div>
                    <router-link to>
                        <img src="../../assets/img/shoppingMall/home/n3.jpg" alt="">
                    </router-link>
                    <p></p>
                </div>
            </div>
            <div class="clearfix">
                <div>
                    <router-link to>
                        <img src="../../assets/img/shoppingMall/home/n4.jpg" alt="">
                    </router-link>
                    <p></p>
                </div>
                <div>
                    <router-link to>
                        <img src="../../assets/img/shoppingMall/home/n5.jpg" alt="">
                    </router-link>
                    <p></p>
                </div>
                <div>
                    <router-link to>
                        <img src="../../assets/img/shoppingMall/home/n6.jpg" alt="">
                    </router-link>
                    <p></p>
                </div>
            </div>

            <!--分割线-->
            <div class="image">
                <img src="../../assets/img/shoppingMall/home/ih2.jpg" alt="">
            </div>

            <!--摆件 花艺-->
            <div class="flower">
                <el-row>
                    <el-col :span="8" v-for="item in flowerList" :key="item.id">
                        <div class="grid-content tran">
                            <dl>
                                <dt>
                                    <span class="abl"></span>
                                    <img src="../../assets/img/shoppingMall/home/flo4.jpg" alt="">
                                    <span class="abr"></span>
                                </dt>
                                <dd class="name">
                                    {{item.flowerName}}
                                </dd>
                                <dd class="price">
                                    &yen;{{item.flowerPrice}}
                                </dd>
                            </dl>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <!--大图广告-->
        <div class="big_banner">
            <img src="../../assets/img/shoppingMall/home/ib1.jpg" alt="">
        </div>

        <!--底部区域-->
        <div class="container">
            <!--分割线-->
            <div class="image">
                <img src="../../assets/img/shoppingMall/home/ih3.jpg" alt="">
            </div>

            <!--商品-->
            <div class="pro">
                <el-row>
                    <el-col :span="6" v-for="item in proList" :key="item.id">
                        <div class="grid-content">
                            <dl>
                                <dt>
                                    <img src="../../assets/img/shoppingMall/home/s3.jpg" alt="">
                                </dt>
                                <dd class="name">
                                    {{item.proName}}
                                </dd>
                                <dd class="price">
                                    &yen;{{item.proPrice}}
                                </dd>
                            </dl>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                carouselHeight: '500px',//轮播图高度
                flowerList:[
                    {
                        flowerId:'001',
                        flowerName:'【花艺】七头美丽玫瑰仿真花束',
                        flowerPrice:'89.00'
                    },
                    {
                        flowerId:'002',
                        flowerName:'【花艺】七头美丽玫瑰仿真花束',
                        flowerPrice:'150.00'
                    },
                    {
                        flowerId:'003',
                        flowerName:'【花艺】七头美丽玫瑰仿真花束',
                        flowerPrice:'88.00'
                    },
                    {
                        flowerId:'004',
                        flowerName:'【花艺】七头美丽玫瑰仿真花束',
                        flowerPrice:'96.00'
                    },
                    {
                        flowerId:'005',
                        flowerName:'【花艺】七头美丽玫瑰仿真花束',
                        flowerPrice:'72.00'
                    },
                    {
                        flowerId:'006',
                        flowerName:'【花艺】七头美丽玫瑰仿真花束',
                        flowerPrice:'108.00'
                    },
                ],
                proList:[
                    {
                        proId:'001',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'89.00'
                    },
                    {
                        proId:'002',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'150.00'
                    },
                    {
                        proId:'003',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'88.00'
                    },
                    {
                        proId:'004',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'96.00'
                    },
                    {
                        proId:'005',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'72.00'
                    },
                    {
                        proId:'006',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'108.00'
                    },
                    {
                        proId:'007',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'108.00'
                    },
                    {
                        proId:'008',
                        proName:'【GC】七头美丽玫瑰仿真花束',
                        proPrice:'108.00'
                    },
                ]
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
