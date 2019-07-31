<template>
    <el-dialog :visible.sync="isShowModal">
        <div class="detail">
            <div class="detail_info">
                <div>【最家】非洲菊仿真花干花</div>
                <div>&yen;17.90</div>
            </div>
            <div class="detail_pic">
                <div class="pic_big">
                    <div><img :src="bigImg" alt=""></div>
                    <div class="tro_list">
                            <span v-for="item in smallImg" :key="item.id" >
                                <img :src="item.url" @mouseenter="getIndex(item.url)">
                            </span>
                    </div>
                </div>
                <div class="pic_info">
                    <div class="info_tro">
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

                    <div class="more_detail">
                        <router-link to="/shoppingMall/detail/detail">查看更多细节</router-link>
                    </div>
                </div>
            </div>
        </div>
        <span slot="footer" class="dialog-footer" >
            <el-button >立即购买</el-button>
            <el-button type="danger">加购物车</el-button>
        </span>
    </el-dialog>
</template>

<script>
    export default {
        name: "fastDetail",
        data(){
            return {
                isShowModal: false,//是否展示发现modals
                num: 1,
                bigImg:require('../../../assets/img/shoppingMall/detail/proDet.jpg'),//大图
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
        methods: {
            //是否现实模态框
            show() {
                this.isShowModal = true;
            },

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
    .detail{
        .detail_info{

            display: flex;

            div{
                flex: 1;
            }

            div:nth-child(1){
                text-align: left;
                font-size: 20px;
                font-weight: bold;
            }

            div:nth-child(2){
                text-align: right;
                font-size: 20px;
                font-weight: normal;
                color: #C10000;
            }
        }

        .detail_pic{
            display: flex;
            margin-top: 15px;

            .pic_big{
                flex: 1;
                div{
                    img{
                        width: 100%;
                    }
                }

                .tro_list{
                    margin-top: 10px;
                    span{
                        width: 45px;
                        height: 45px;
                        display: inline-block;
                        padding: 2px;
                        margin: 0 7px;
                        cursor: pointer;

                        img{
                            width: 45px;
                            height: 45px;
                        }
                    }

                }

            }

            .pic_info{
                flex: 1;
                padding-left: 20px;

                .info_tro{
                    width: 350px;
                    padding: 10px 10px;
                    margin: 15px 0;
                    border-top: 1px solid #dbdbdb;
                    border-bottom: 1px solid #dbdbdb;

                    p{
                        height: 30px;
                        line-height: 30px;

                        span{
                            color: #C10000;
                            padding: 0 5px;
                        }
                    }

                    .tro_list{
                        span{
                            width: 45px;
                            height: 45px;
                            display: inline-block;
                            padding: 2px;
                            margin-right: 15px;
                            cursor: pointer;
                            border:1px solid transparent;

                            a{
                                img{
                                    width: 45px;
                                    height: 45px;
                                }
                            }
                        }

                        span:hover{
                            border:1px solid #C10000;
                            border-radius: 2px;
                        }
                    }
                }

                .more_detail{
                    height: 45px;
                    line-height: 45px;
                    cursor: pointer;

                    a{
                        padding: 30px 20px;
                        color: #606266;
                    }
                }
            }
        }
    }
</style>
