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
                            <li @click="cur=0" :class="{active:cur==0}">我的购物车</li>
                            <li @click="cur=1" :class="{active:cur==1}">我的订单</li>
                            <li @click="cur=2" :class="{active:cur==2}">评价晒单</li>
                        </ul>
                    </div>

                    <!--个人中心-->
                    <div class="personal base">
                        <ul>
                            <li>个人中心</li>
                            <li @click="cur=3" :class="{active:cur==3}">我的中心</li>
                            <li @click="cur=4" :class="{active:cur==4}">地址管理</li>
                        </ul>
                    </div>

                    <!--账户管理-->
                    <div class="account base">
                        <ul>
                            <li>账户管理</li>
                            <li @click="cur=5" :class="{active:cur==5}">个人信息</li>
                            <li @click="cur=6" :class="{active:cur==6}">修改密码</li>
                        </ul>
                    </div>

                </div>
                <div class="user_type">
                    <div v-show="cur==0">内容一</div>
                    <div v-show="cur==1">内容二</div>
                    <div v-show="cur==2">内容三</div>
                    <div v-show="cur==3" class="mine_center">
                        <div class="type_header">
                            <div class="header_img">
                                <img src="../../../assets/img/shoppingMall/detail/proDet.jpg" alt="">
                            </div>
                            <div class="type_info">
                                <p>大橙子</p>
                                <p>绑定邮箱:178****1506@qq.com</p>
                                <p>修改资料>></p>
                            </div>
                        </div>

                        <div class="type_box">
                            <div class="box_one">
                                <div class="box_bg">
                                    <i class="el-icon-s-finance"></i>
                                </div>

                                <div class="box_font">
                                    <p>待支付的订单：<span>10</span></p>
                                    <p>查看待支付订单>></p>
                                </div>
                            </div>
                            <div class="box_one">
                                <div class="box_bg two">
                                    <i class="el-icon-truck"></i>
                                </div>
                                <div class="box_font">
                                    <p>待收货的订单：<span>10</span></p>
                                    <p>查看待收货订单>></p>
                                </div>
                            </div>
                            <div class="box_one">
                                <div class="box_bg three">
                                    <i class="el-icon-chat-dot-round"></i>
                                </div>
                                <div class="box_font">
                                    <p>待评价的订单：<span>10</span></p>
                                    <p>查看待评价订单>></p>
                                </div>
                            </div>
                            <div class="box_one">
                                <div class="box_bg four">
                                    <i class="el-icon-star-off"></i>
                                </div>
                                <div class="box_font">
                                    <p>喜欢的商品：<span>10</span></p>
                                    <p>查看喜欢的商品>></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-show="cur==4">地址管理</div>
                    <div v-show="cur==5">个人信息</div>
                    <div v-show="cur==6">修改密码</div>
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        name: "usercenter",
        data(){
            return {
                tabPosition: 'left',
                cur: 3 //默认选中我的中心
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../../assets/css/shoppingMall/usercenter";
</style>
