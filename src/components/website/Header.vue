<template>
    <div>
        <div class="page_header">
           <div class="container">
               <div class="nav">
                   <div class="nav_logo">
                       <img src="../../assets/img/header/logo2.png" alt="">
                   </div>
                   <div class="nav_link">
                       <span>
                           <router-link to="/">首页</router-link>
                           <i></i>
                       </span>
                       <span>
                           <router-link to="/">玩转通宝</router-link>
                           <i></i>
                       </span>
                       <span>
                           <router-link to="/">商家入驻</router-link>
                           <i></i>
                       </span>
                       <span>
                           <router-link to="/">关于我们</router-link>
                           <i></i>
                       </span>
                   </div>

                   <div class="nav_phone">
                       <span>联系电话：400-668-1058</span>
                   </div>

                   <div class="enter_button">
                       <el-button type="warning" round>
                          <router-link to="/shppingMall/Home" style="color: #fff"> 进入商城</router-link>
                       </el-button>
                   </div>
               </div>
           </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/css/base";
    @import "../../assets/css/page";
</style>
