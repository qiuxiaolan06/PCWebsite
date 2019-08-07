<template>
    <div>
        <div class="shopping_haeder">
            <div class="container">
                <div class="menu">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
                        <el-menu-item index="1">首页</el-menu-item>
                        <el-menu-item index="2">
                            <router-link to="/shoppingMall/detail/vase">所有商品</router-link>
                        </el-menu-item>
                        <el-menu-item index="3">装饰摆件</el-menu-item>
                        <el-menu-item index="4">布艺软饰</el-menu-item>
                        <el-menu-item index="5">墙式挂壁</el-menu-item>
                        <el-menu-item index="6">蜡艺香薰</el-menu-item>
                        <el-menu-item index="7">创意家居</el-menu-item>
                    </el-menu>
                </div>
                <div class="login">
                   <div class="search">
                       <el-input
                               placeholder="热门搜索"
                               prefix-icon="el-icon-search"
                               v-model="hotsearch">
                       </el-input>
                   </div>

                    <div class="shopping_cart">
                        <div class="mine">
                            <el-avatar :size="'small'" :src="'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'"></el-avatar>
                        </div>
                        <div class="cart">
                            <i class="el-icon-shopping-cart-2"></i>
                        </div>
                        <!--<div class="erCode">3</div>-->
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Header",
        data(){
            return {
                activeIndex: '1',
                activeIndex2: '1',
                hotsearch: '',
            };
        },
        methods: {
        }
    }
</script>

<style lang="scss">
    .el-menu{
        background-color: transparent !important;
    }

    .el-avatar--small{
        margin-top: 18px!important;
    }

    .el-menu-item{
        a{
            text-decoration: none!important;
        }
    }
</style>

<style lang="scss" scoped>
    .shopping_haeder{
        width: 100%;
        height: 62px;
        line-height: 62px;
        position: fixed;
        top: 0;
        z-index: 110;
        box-shadow: rgba(0, 0, 0, 0.15) 0 0 12px;
        background-color: rgba(255, 255, 255, 0.8);

        .container{
            width: 1200px;
            margin: 0 auto;
            display: flex;

            .menu{
                /*flex: 2;*/
            }

            .login{
                flex: 1;
                .search{
                    width: 250px;
                    float: left;
                    margin-left: 60px;
                }

                .shopping_cart{
                    display: flex;
                    float: right;
                    .mine{
                        width: 60px;
                    }
                    .cart{
                        width: 60px;
                        i{
                            width: 28px;
                            height: 28px;
                            font-size: 28px;
                            padding-top: 17px;
                            font-weight: bold;
                            color: #C0C4CC;
                        }
                    }
                }
            }
        }
    }
</style>
