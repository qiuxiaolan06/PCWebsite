<template>
    <div>
        <!--顶部大图-->
        <div class="top_banner">
            <img src="../../../assets/img/shoppingMall/detail/banner1.jpg" alt="">
        </div>

        <!--面包屑导航-->
        <div class="breadcrumb">
            <div class="container">
                <el-breadcrumb separator="/" style="height: 50px;line-height: 50px;">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>

        <!--类型-->
        <div class="page_type">
            <div class="container">
                <div class="type_name">花瓶花器</div>
                <div class="type_select">
                    <template>
                        <el-select v-model="value" placeholder="排序方式">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </template>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="type_list">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="item in 12" :key="item.id">
                        <div class="grid-content">
                            <div class="vase_item">
                                   <dl>
                                       <router-link to="/shoppingMall/detail/detail">
                                           <dt><img src="../../../assets/img/shoppingMall/detail/vase01.jpg" alt=""></dt>
                                           <dd>【最家】创意现代简约白瓷干花花瓶摆件</dd>
                                       </router-link>
                                       <dd class="price">
                                           <span>&yen;17.90</span>
                                           <span class="button">
                                               <el-button size="small" type="danger" @click="showDetail">极速购买</el-button>
                                           </span>
                                       </dd>
                                   </dl>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>
        </div>
        <fast-detail ref="FastDetail"></fast-detail>
    </div>
</template>

<script>
    import FastDetail from "./fastDetailModal";

    export default {
        components: {FastDetail},
        data() {
            return {
                options: [{
                    value: '选项1',
                    label: '新品上市'
                }, {
                    value: '选项2',
                    label: '销量从高到低'
                }, {
                    value: '选项3',
                    label: '销量从低到高'
                }, {
                    value: '选项4',
                    label: '价格从低到高'
                }, {
                    value: '选项5',
                    label: '价格从高到低'
                }],
                value: ''
            }
        },
        mounted() {
        },
        methods: {
        //快速浏览
            showDetail(){
                this.$refs.FastDetail.show();
            }
        }
    }
</script>


<style lang="scss" scoped>
    @import "../../../assets/css/shoppingMall/vaseDetail";
</style>
