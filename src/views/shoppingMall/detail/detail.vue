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
            <div class="proDet">
                <div class="pro_big">
                    <img :src="bigImg" alt="">
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
