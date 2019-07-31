<template>
    <div>
        <!--面包屑导航-->
        <div class="breadcrumb">
            <div class="container">
                <el-breadcrumb separator="/" style="height: 50px;line-height: 50px;">
                    <el-breadcrumb-item >首页</el-breadcrumb-item>
                    <el-breadcrumb-item>装饰摆件</el-breadcrumb-item>
                    <el-breadcrumb-item>干花花艺</el-breadcrumb-item>
                    <el-breadcrumb-item>【xx】非洲菊仿真干花</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="container">
            <!--大图 及 商品介绍-->
            <div class="proDet">
                <div class="pro_big">
                    <img :src="bigImg" alt="">
                    <div class="tro_list">
                            <span v-for="item in smallImg" :key="item.id" >
                                <a href="#" :title="item.title">
                                    <img :src="item.url" @mouseenter="getIndex(item.url)">
                                </a>
                            </span>
                    </div>
                    <div style="clear: both"></div>
                </div>
                <div class="intro">
                    <div class="intro_title">
                        <h3>【最家】非洲菊仿真花干花</h3>
                        <h5>【破损补寄】【适合放室内、卧室、书房、餐桌、办公室、客厅、电视柜等地方】【无理由退换货】【包邮】【白色现代简约花瓶】</h5>
                        <h3 class="price">&yen;17.96</h3>
                    </div>

                    <div class="proIntro">
                        <p>颜色分类</p>
                        <div class="tro_list">
                            <span v-for="item in smallImg" :key="item.id" >
                                <a href="#" :title="item.title">
                                    <img :src="item.url" @click="getIndex(item.url)">
                                </a>
                            </span>
                        </div>
                        <p>数量 库存数量<span>1456</span>件</p>
                        <p> <el-input-number v-model="num" @change="handleChange"  :min="1" :max="5"  size="mini" label="描述文字"></el-input-number></p>
                    </div>

                    <div>
                        <span style="padding-right:30px;"><el-button>加入购物车</el-button></span>
                        <span style="padding-left: 30px;"><el-button type="danger">立即购买</el-button></span>
                    </div>

                </div>
            </div>

            <div class="pro_information">
                <div class="comment">
                    <div class="tab">
                        <el-tabs v-model="activeName">
                            <el-tab-pane label="商品详情" name="first">
                                <div class="pro_img" v-for="item in 3" :key="item.id">
                                    <img src="../../../assets/img/shoppingMall/detail/det07.jpg" alt="">
                                </div>
                            </el-tab-pane>
                            <el-tab-pane label="相关评论" name="second">
                                <div class="per" v-for="item in 4" :key="item.id">
                                    <div class="per_img">
                                        <img src="../../../assets/img/shoppingMall/detail/per01.jpg" alt="">
                                    </div>

                                    <div class="perR">
                                        <p class="perR_name">馨***呀</p>
                                        <p class="perR_comment">不好意思评价晚了，产品很好，价格比玻璃品便宜，没有我担心的杂色，发货快，包装好，全5分!不好意思评价晚了，产品很好，价格比玻璃品便宜，没有我担心的杂色，发货快，包装好，全5分</p>
                                        <p class="perR_img">
                                            <span v-for="item in 5" :key="item.id">
                                                <img src="../../../assets/img/shoppingMall/detail/eva01.jpg" alt="">
                                            </span>
                                        </p>
                                        <p class="perR_date">
                                            2016年12月27日08:31
                                            <span>颜色分类：大中小三件套（不含花）</span>
                                        </p>
                                    </div>
                                </div>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
                <div class="recommended">
                    <p class="recommended_title">
                        为你推荐
                    </p>
                    <div class="recommended_list">
                        <div class="recommended_item" v-for="i in 5" :key="i.id">
                            <div class="item_img">
                                <img src="../../../assets/img/shoppingMall/detail/see01.jpg" alt="">
                            </div>
                            <p>【最家】复古文艺风玻璃花瓶</p>
                            <p class="item_price">&yen;193.20</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "detail",
        data(){
            return{
                bigImg:require('../../../assets/img/shoppingMall/detail/proBig02.jpg'),
                num: 1,
                activeName:'first',
                smallImg:[
                    {
                        index:1,
                        url:require('../../../assets/img/shoppingMall/detail/pro01.jpg'),
                        title:'【1111】,xxxxxxxxxxx'
                    },
                    {
                        index:2,
                        url:require('../../../assets/img/shoppingMall/detail/pro02.jpg'),
                        title:'【2222】,xxxxxxxxxxx'
                    },
                    {
                        index:3,
                        url:require('../../../assets/img/shoppingMall/detail/pro03.jpg'),
                        title:'【3333】,xxxxxxxxxxx'
                    },
                    {
                        index:4,
                        url:require('../../../assets/img/shoppingMall/detail/pro04.jpg'),
                        title:'【4444】,xxxxxxxxxxx'
                    },
                ],
            }
        },
        methods:{
            //判断选中数量是否>5,超过5就提示
            handleChange(value) {
                if (value == 5){
                    this.$notify({
                        title: '温馨提示',
                        message: '购买数量最多为5件',
                        type: 'warning'
                    });
                }
            },
            //点击小图片时将图片路径赋值给大图
            getIndex(smallImg){
                this.bigImg = smallImg;
            }
        }
    }
</script>

<style lang="scss" scoped>
  @import "../../../assets/css/shoppingMall/detail";
</style>
