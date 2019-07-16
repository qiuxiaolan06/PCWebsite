<template>
    <div>
        <div class="features">
            <div class="container">
                <div>
                    <span><img src="../../assets/img/shoppingMall/footer/foot1.png" alt=""></span>
                    <span>7天无理由退货</span>
                </div>
                <div>
                    <span><img src="../../assets/img/shoppingMall/footer/foot2.png" alt=""></span>
                    <span>15天免费换货</span>
                </div>
                <div>
                    <span><img src="../../assets/img/shoppingMall/footer/foot3.png" alt=""></span>
                    <span>满599包邮</span>
                </div>
                <div>
                    <span><img src="../../assets/img/shoppingMall/footer/foot4.png" alt=""></span>
                    <span>手机特色服务</span>
                </div>
            </div>
        </div>

        <div class="dibu">
            <div class="container">
                <p>****©2017-2018公司版权所有 苏ICP备***********号</p>
                <p>网站均为面试作品使用,继承原"谷创商城"</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style lang="scss" scoped>
    .features{
        padding: 30px 0;
        border-top: 1px solid #DBDBDB;
        border-bottom: 1px solid #DBDBDB;

        .container{
            display: flex;
            div{
                margin: 0;
                display: inline-block;
                flex: 1;
                text-align: center;
                border-right: 1px solid #dbdbdb ;

                span{
                    display: inline-block;
                }

                span:nth-child(2){
                    height: 53px;
                    line-height: 53px;
                    font-size: 16px;
                    font-weight: bold;
                    vertical-align: bottom;
                    margin-left: 15px;
                }
            }

            div:last-child{
                border-right: none 0;
            }

        }
    }

    .dibu{
        background: #000;
        padding: 30px 0;
        text-align: center;
        color: #fff;
        .container{
            p{
                margin: 0;
                padding:0;
                font-size: 12px;
                height: 26px;
                line-height: 26px;
            }
        }
    }

    .container{
        width: 1200px;
        margin: 0 auto;
    }

</style>
