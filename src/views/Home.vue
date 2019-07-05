<template>
    <div>
        <page-header></page-header>

        <!--轮播部分-->
        <div class="swipe">
            <el-carousel :height="carouselHeight" arrow="always">
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../assets/img/index/h7.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../assets/img/index/h5.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../assets/img/index/h2.3.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../assets/img/index/h1.jpg')+')'}">
                    </div>
                </el-carousel-item>
            </el-carousel>
        </div>

        <!--正文内容-->
        <div class="container">
            <div class="page_title">
                致力于打造最规范的O2O平台
            </div>

            <div class="page_four">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
                                8
                            </div>
                            <p>8大审核标准</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
                                365
                            </div>
                            <p>365天管家式服务</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
                                1500
                            </div>
                            <p>1500+实体店的选择</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
                                3
                            </div>
                            <p>3大平台支持</p>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <!--主要范围-->
            <div class="page_scope">
                <el-row type="flex" class="row-bg" justify="space-around">
                    <el-col :span="6">
                        <div class="grid-content" :style="{backgroundImage:'url('+require('../assets/img/imgs/z1.jpg')+')'}">
                            <h2>PC端商城</h2>
                            <h5>
                                PC端商城打造一个链接商家，消费者， 最快捷的网购平台
                            </h5>

                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content" :style="{backgroundImage:'url('+require('../assets/img/imgs/z2.jpg')+')'}">
                            <h2>移动端APP</h2>
                            <h5> 让商家随时随地卖商品让消费者随时随地购买商品</h5>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content" :style="{backgroundImage:'url('+require('../assets/img/imgs/z3.jpg')+')'}">
                            <h2>微信端商城</h2>
                            <h5>扩大会员数量，让每个地方都有谷创会员</h5>
                        </div>
                    </el-col>
                </el-row>
            </div>

            <div class="page_news">
                <!--<div class="textBox">-->
                    <!--<transition name="slide">-->
                        <!--<p class="text" :key="text.id">-->
                            <!--<img src="../assets/img/imgs/b1.png" alt="">-->
                            <!--{{text.val}}-->
                        <!--</p>-->
                    <!--</transition>-->
                <!--</div>-->
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from '../components/Header'
    export default {
        name: "Home",
        components: {PageHeader},
        data() {
            return {
                carouselHeight: '500px',//轮播图高度
                textArr: [
                    '1 第一条公告',
                    '2 第二条公告第二条公告',
                    '3 第三条公告第三条公告第三条公告'
                ],
                number: 0
            }
        },
        computed: {
            text () {
                return {
                    id: this.number,
                    val: this.textArr[this.number]
                }
            }
        },
        mounted() {
            this.startMove();
            //根据窗口宽度设置轮播图高度
            this.resizeCarouselHeight();
            window.onresize = (() => {
                this.resizeCarouselHeight();
            });
        },
        methods: {
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
            startMove () {
                // eslint-disable-next-line
                let timer = setTimeout(() => {
                    if (this.number === 2) {
                        this.number = 0;
                    } else {
                        this.number += 1;
                    }
                    this.startMove();
                }, 2000); // 滚动不需要停顿则将2000改成动画持续时间
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/css/page";
    .textBox {
        width: 100%;
        height: 40px;
        margin: 0 auto;
        overflow: hidden;
        position: relative;
        text-align: center;
    }
    .text {
        width: 100%;
        position: absolute;
        bottom: 0;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 0.5s linear;
    }
    .slide-enter{
        transform: translateY(20px) scale(1);
        opacity: 1;
    }
    .slide-leave-to {
        transform: translateY(-20px) scale(0.8);
        opacity: 0;
    }
</style>
