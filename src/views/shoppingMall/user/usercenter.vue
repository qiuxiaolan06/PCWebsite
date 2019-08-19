<template>
    <div>
        <div class="usercenter">
            <!--面包屑导航-->
            <div class="breadcrumb">
                <div class="container">
                    <el-breadcrumb separator="/" style="height: 50px;line-height: 50px;">
                        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item>个人中心</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
            </div>

            <div class="container user_info">
                <div class="user_tab">
                    <div class="user_img">
                        <img src="../../../assets/img/shoppingMall/detail/proDet.jpg" alt="">
                    </div>
                    <div class="user_choose">
                        <span>大橙子</span>
                        <span>[ 退出登录 ]</span>
                    </div>

                    <!--我的交易-->
                    <div class="trading base">
                        <ul>
                            <li>我的交易</li>
                            <li>我的购物车</li>
                            <li>我的订单</li>
                            <li>评价晒单</li>
                        </ul>
                    </div>

                    <!--个人中心-->
                    <div class="personal base">
                        <ul>
                            <li>个人中心</li>
                            <li>我的中心</li>
                            <li>地址管理</li>
                        </ul>
                    </div>

                    <!--账户管理-->
                    <div class="account base">
                        <ul>
                            <li>账户管理</li>
                            <li>个人信息</li>
                            <li>修改密码</li>
                        </ul>
                    </div>

                </div>
                <div class="user_type">2</div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "usercenter",
    }
</script>

<style lang="scss" scoped>
@import "../../../assets/css/shoppingMall/usercenter";
</style>
