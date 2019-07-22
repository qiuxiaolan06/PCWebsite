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
                    <el-col :span="6">
                        <div class="grid-content">1</div>
                    </el-col>
                    <el-col :span="6"><div class="grid-content">1</div></el-col>
                    <el-col :span="6"><div class="grid-content">1</div></el-col>
                    <el-col :span="6"><div class="grid-content">1</div></el-col>
                </el-row>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
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
        }
    }
</script>


<style lang="scss" scoped>
    @import "../../../assets/css/shoppingMall/vaseDetail";
</style>
