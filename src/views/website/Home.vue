<template>
    <div>
        <page-header></page-header>

        <!--轮播部分-->
        <div class="swipe">
            <el-carousel :height="carouselHeight" arrow="always">
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../../assets/img/index/h7.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../../assets/img/index/h5.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../../assets/img/index/h2.3.jpg')+')'}">
                    </div>
                </el-carousel-item>
                <el-carousel-item>
                    <div class="swipe_img"
                         :style="{backgroundImage:'url('+require('../../assets/img/index/h1.jpg')+')'}">
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
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
                                8
                            </div>
                            <p>8大审核标准</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
                                365
                            </div>
                            <p>365天管家式服务</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
                                1500
                            </div>
                            <p>1500+实体店的选择</p>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content bg-purple">
                            <div class="page_circle" :style="{backgroundImage:'url('+require('../../assets/img/imgs/service_tuoyuan1-1.png')+')'}">
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
                        <div class="grid-content" :style="{backgroundImage:'url('+require('../../assets/img/imgs/z1.jpg')+')'}">
                            <h2>PC端商城</h2>
                            <h5>
                                PC端商城打造一个链接商家，消费者， 最快捷的网购平台
                            </h5>

                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content" :style="{backgroundImage:'url('+require('../../assets/img/imgs/z2.jpg')+')'}">
                            <h2>移动端APP</h2>
                            <h5> 让商家随时随地卖商品让消费者随时随地购买商品</h5>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="grid-content" :style="{backgroundImage:'url('+require('../../assets/img/imgs/z3.jpg')+')'}">
                            <h2>微信端商城</h2>
                            <h5>扩大会员数量，让每个地方都有谷创会员</h5>
                        </div>
                    </el-col>
                </el-row>
            </div>
            <!--新闻部分-->
            <div class="page_news">
                <div class="news_img">
                    <p>生意难做?</p>
                    <p>没关系</p>
                    <div class="img_inner">
                        <div>XX专为实体商户而生</div>
                        <div class="img">
                            <img src="../../assets/img/header/logo.png" alt="">
                        </div>
                        <div>我们的使命是让实体商户生意不再难做</div>
                    </div>
                </div>

                <div class="page_toutiao">
                    <div class="toutiao_title">
                        谷创头条/NEWS
                    </div>
                    <div class="toutiao_swipe">
                        <el-carousel height="200px" direction="vertical" :autoplay="true" arrow="always">
                            <el-carousel-item v-for="item in 3" :key="item">
                               <div class="toutiao_info">
                                   <div class="info_img">
                                       <img src="../../assets/img/imgs/b1.png" alt="">
                                   </div>
                                   <div class="info_font">
                                       <p class="info_time">/2017/05/18</p>
                                       <p class="info_title">谷创百货超市在梅州成立</p>
                                       <p class="info_show">5月9日上午，我们在梅州成立了第一家谷创百货超市，谷创正式迈出了零售企业的步伐;谷创百货超市在梅州只是一个起点，在日后还会有更多的谷创百货超市。</p>
                                   </div>
                               </div>
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                </div>
            </div>
        </div>
        <!--底部广告-->
        <div class="page_banner" :style="{backgroundImage:'url('+require('../../assets/img/imgs/shanghai.png')+')'}">
            <div class="container">
                <h1>谷创电子商务——专注实体商户的自救</h1>
                <h3>
                    创业一年，入驻商户就已经超过1500多家，商城会员数量正在逐日剧增；
                    <br>
                    我们的使命是让实体商户生意不再难做，谷创致力于打通新型网购销售模式。
                </h3>
            </div>
        </div>

        <!--联系我们-->
        <div class="container">
            <div class="contact_inner">
                <div class="contact_about">
                    <p>江苏省谷创电子商务南通有限公司</p>
                    <p>地址：江苏省南通市崇川区尚东国际商务中心5号楼601室</p>
                    <p>全国业务咨询热线：<span>400-668-1058</span></p>
                    <p>全国售后服务热线：<span>0513-66679579</span></p>
                </div>
                <div class="contact">
                    <div class="toutiao_title">
                        联系我们/NEWS
                    </div>
                    <div class="wire">
                        <img src="../../assets/img/imgs/tianxian4.png" alt="">
                    </div>
                    <!--<div class="map_box">-->
                        <!--<div id="all-map" class="all-map" style="width:590px;height: 330px"></div>-->
                    <!--</div>-->
                </div>
            </div>
        </div>
        <page-footer></page-footer>
  </div>
</template>

<script>
    import PageHeader from '../../components/website/Header'
    import PageFooter from '../../components/website/Footer'
    // import BMap from '../../BMap'

    export default {
        name: "Home",
        components: {PageHeader,PageFooter},
        data() {
            return {
                carouselHeight: '500px',//轮播图高度
            }
        },
        computed: {
            text () {
                return {
                }
            }
        },
        mounted() {
            // this.BaiduMap();
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

            // //百度地图
            // BaiduMap() {
            //     /**地图初始化 start */
            //     var map = new BMap.Map("all-map")// 创建Map实例
            //     map.centerAndZoom(new BMap.Point(120.913772,32.030526), 11)// 初始化地图,设置中心点坐标和地图级别
            //     // 添加地图类型控件
            //     map.addControl(new BMap.MapTypeControl({
            //         mapTypes: [
            //             BMAP_NORMAL_MAP,
            //             BMAP_HYBRID_MAP
            //         ]
            //     }));
            //     let marker = new BMap.Marker(120.913772,32.030526);        // 创建标注
            //     this.map.addOverlay(marker);
            //     map.setCurrentCity("南通")// 设置地图显示的城市 此项是必须设置的
            //     map.enableScrollWheelZoom(true)//开启鼠标滚轮缩放
            // }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/page";

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #d3dce6;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>
