<template>
    <el-container>
        <el-header><img src="../assets/logo.jpg" alt="" style="width: 150px">
            <div class="wrap flex flex-c-b">
                <div class="flex-c flex" style="background-color: rgba(255,255,255,.1);border-radius: 10px;flex-direction: column;">
                    <i class="el-icon-edit"></i>
                </div>
                <span>首页</span>
            </div>
            <div class="wrap flex flex-c-b">
                <div class="flex-c flex"
                    style="background-color: rgba(255,255,255,.1);border-radius: 10px;flex-direction: column;">
                    <i class="el-icon-upload"></i>
                </div>
                <span>主数据</span>
            </div>
            <div class="wrap flex flex-c-b">
                <div class="flex-c flex" style="background-color: rgba(255,255,255,.1);border-radius: 10px;flex-direction: column;">
                    <i class="el-icon-edit"></i>
                </div>
                <span>辖区管理</span>
            </div>
            <div class="flex flex-c-b">
                <img src="../assets/head-right.jpg" alt="" style="width: 130px!important;height: 50px;">
            </div>
        </el-header>
        <el-container>
            <el-aside width="150px">
                <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose"
                    background-color="#333" text-color="#fff" active-text-color="#ffd04b">
                    <el-submenu index="1">
                        <template slot="title">
                            <i class="el-icon-s-order"></i>
                            <span>功能A</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                     <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-s-cooperation"></i>
                            <span>功能B</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-s-claim"></i>
                            <span>功能C</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-s-data"></i>
                            <span>功能D</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-s-flag"></i>
                            <span>功能E</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-s-tools"></i>
                            <span>功能F</span>
                        </template>
                        <el-menu-item-group>
                            <el-menu-item index="1-1">选项1</el-menu-item>
                        </el-menu-item-group>
                    </el-submenu>
                </el-menu>
            </el-aside>
            <el-main>
                <div class="main-top">
                    <el-breadcrumb separator="/">
                        <el-breadcrumb-item class="breadcrumbNavigation breadcrumbNavigationText" :to="{ path: '/' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbNavigationText">年度协议管理</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbNavigationText">二级商协议</el-breadcrumb-item>
                        <el-breadcrumb-item class="breadcrumbNavigationText">二级新增协议</el-breadcrumb-item>
                    </el-breadcrumb>
                    <div class="txt">新增二级商协议</div>
                </div>
                <div class="dot flex flex-c-b">
                    <div class="left"></div>
                    <el-badge value="1" class="item">协议主体</el-badge>
                    <div class="right"></div>
                </div>
                <el-card class="box-card">
                    <div class="card-top">
                        <el-form ref="form" :model="form" label-width="80px" :rules="rules" size="mini"
                            class="demo-form-inline">
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="协议客户" prop="xykh">
                                        <el-button>选择客户</el-button>
                                        上海正也医药有限公司
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="协议客户">
                                        <el-select v-model="value" placeholder="请选择">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="购进指标">
                                        <el-select v-model="value" placeholder="选择" style="width: 80px">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <el-input placeholder="请输入金额/数量" disabled
                                            style="width: 200px; margin: 0 10px"></el-input>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="纯销指标">
                                        <el-input placeholder="金额" style="width: 80px;"></el-input>
                                        <el-input placeholder="请输入金额/数量" disabled
                                            style="width: 200px; margin: 0 10px"></el-input>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="销售区域">
                                        <el-button>选择区域</el-button>
                                        <el-tag closable size="medium" style="margin-left: 10px">全国</el-tag>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="签订时间">
                                        <el-date-picker type="datetime" placeholder="选择日期时间" style="width:290px">
                                        </el-date-picker>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <el-row>
                                <el-col :span="12">
                                    <el-form-item label="购进渠道">
                                        <el-select v-model="value" placeholder="请选择" style="width: 80px;">
                                            <el-option v-for="item in options" :key="item.value" :label="item.label"
                                                :value="item.value">
                                            </el-option>
                                        </el-select>
                                        <el-button style="margin-left: 10px;">请选择渠道</el-button>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                        </el-form>
                    </div>
                    <el-table :data="tableData" style="width: 100%;padding-left: 90px" size="mini" :header-cell-style="{
                        background: '#F5F7FA'
                    }">
                        <el-table-column prop="date" label="指定渠道编码">
                        </el-table-column>
                        <el-table-column prop="name" label="指定渠道名称">
                        </el-table-column>
                        <el-table-column prop="address" label="所在省">
                        </el-table-column>
                    </el-table>
                </el-card>
                <div class="dot flex flex-c-b">
                    <div class="left"></div>
                    <el-badge value="2" class="item">产品政策</el-badge>
                    <div class="right"></div>
                </div>
                <el-row class="flex span-wrap" style="margin-bottom: 10px;">
                    <el-button type="primary" size="mini" style="margin: 0px 20px">添加产品</el-button>
                    <span>购进总指标（万元）：¥152.65</span>
                    <span>按指标季度分析（万元）：【Q1】¥12.5，【Q2】¥12.5，【Q3】¥12.5，【Q4】¥12.5，</span>
                    <span>纯销总指标（万元）：¥152.65</span></el-row>
                <el-card>
                    <div slot="header" class="clearfix">
                        <div style="text-align: left;">
                            <span style="font-size: 14px;">产品:</span>
                            <el-button size="mini" style="margin: 0px 15px">选择产品</el-button>
                            <span style="color: blue">美复胶丸 24粒/盒</span>
                            <span style="margin: 0px 15px 0 65px;font-size: 14px;">协议效期</span>
                            <el-date-picker v-model="value9" type="daterange" start-placeholder="开始日期"
                                end-placeholder="结束日期" default-value="2010-10-01" size="mini">
                            </el-date-picker>
                            <el-button style="float: right; padding: 3px 8px;color: #e6a23c;" size="mini">删除</el-button>
                        </div>
                    </div>
                    <div>
                        <el-row :gutter="10">
                            <el-col :span="3" class="public-style">协议价（元）</el-col>
                            <el-col :span="4" class="public-style">票折（元）</el-col>
                            <el-col :span="3" class="public-style">购进指标（大单位）</el-col>
                            <el-col :span="4" class="public-style">购进指标量（小单位）</el-col>
                            <el-col :span="3" class="public-style">购进金额（万元）</el-col>
                            <el-col :span="4" class="public-style">纯销指标量（小单位）</el-col>
                            <el-col :span="3" class="public-style">纯销指金额（万元）</el-col>
                        </el-row>
                        <el-row :gutter="10" style="padding: 10px 0;border: 1px solid gainsboro">
                            <el-col :span="3">
                                <el-input placeholder="请输入" size="mini"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-input placeholder="请输入" size="mini"></el-input>
                            </el-col>
                            <el-col :span="3">
                                <el-input placeholder="请输入" size="mini"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-input placeholder="请输入" size="mini"></el-input>
                            </el-col>
                            <el-col :span="3">
                                <el-input placeholder="请输入" size="mini"></el-input>
                            </el-col>
                            <el-col :span="4">
                                <el-input placeholder="请输入" size="mini"></el-input>
                            </el-col>
                            <el-col :span="3">
                                <el-input placeholder="请输入" size="mini"></el-input>
                            </el-col>
                        </el-row>
                    </div>
                    <el-row :gutter="10">
                        <el-col :span="3" class="public-style">分销奖励</el-col>
                        <el-col :span="3" class="public-style">费用科目</el-col>
                        <el-col :span="3" class="public-style">零售配送</el-col>
                        <el-col :span="3" class="public-style">费用科目</el-col>
                        <el-col :span="3" class="public-style">医疗配送费</el-col>
                        <el-col :span="3" class="public-style">医疗科目</el-col>
                        <el-col :span="3" class="public-style">自定义7</el-col>
                        <el-col :span="3" class="public-style">自定义8</el-col>
                    </el-row>
                    <el-row :gutter="10" style="padding: 10px 0;border: 1px solid gainsboro">
                        <el-col :span="3">
                            <el-input placeholder="请输入" size="mini"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <el-select v-model="value" placeholder="请选择" size="mini">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="请输入" size="mini"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <el-select v-model="value" placeholder="请选择" size="mini">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="请输入" size="mini"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <el-select v-model="value" placeholder="请选择" size="mini">
                                <el-option v-for="item in options" :key="item.value" :label="item.label"
                                    :value="item.value">
                                </el-option>
                            </el-select>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="请输入" value="2020-12-12" size="mini"></el-input>
                        </el-col>
                        <el-col :span="3">
                            <el-input placeholder="请输入" value="2020-12-12" size="mini"></el-input>
                        </el-col>
                    </el-row>
                </el-card>
                <div class="dot flex flex-c-b">
                    <div class="left"></div>
                    <el-badge value="3" class="item">补充协议</el-badge>
                    <div class="right"></div>
                </div>
                <div style="position: relative;">
                    <el-button type="primary" size="mini" style="position: absolute;right: 20px;top: 5px;">新增</el-button>
                    <el-tabs v-model="activeName2" type="card" style="text-align: left;">
                        <el-tab-pane label="用户管理" name="first"><el-card>用户管理：
                                <el-button style="float: right; padding: 3px 8px;color: #e6a23c;float: right;"
                                    size="mini">删除</el-button>
                                <el-input type="textarea"></el-input></el-card></el-tab-pane>
                        <el-tab-pane label="配置管理" name="second"><el-card>配置管理：
                                <el-button style="float: right; padding: 3px 8px;color: #e6a23c;float: right;"
                                    size="mini">删除</el-button>
                                <el-input type="textarea"></el-input></el-card></el-tab-pane>
                        <el-tab-pane label="角色管理" name="third"><el-card>角色管理：
                                <el-button style="float: right; padding: 3px 8px;color: #e6a23c;float: right;"
                                    size="mini">删除</el-button>
                                <el-input type="textarea"></el-input></el-card></el-tab-pane>
                        <el-tab-pane label="定时任务补偿" name="fourth"><el-card>定时任务补偿：
                                <el-button style="float: right; padding: 3px 8px;color: #e6a23c;float: right;"
                                    size="mini">删除</el-button>
                                <el-input type="textarea"></el-input></el-card></el-tab-pane>
                    </el-tabs>
                </div>
                <el-card class="flex flex-s" style="margin-top: 30px;"><el-button type="primary">保存</el-button></el-card>
            </el-main>
        </el-container>
    </el-container>
</template>

<script>
export default {
    data () {
        return {
            form: {
                name: ''
            },
            rules: {
                xykh: [
                    { required: true }
                ]
            },
            options: [{
                value: '选项1',
                label: '黄金糕'
            }, {
                value: '选项2',
                label: '双皮奶'
            }],
            value: '',
            tableData: [{
                date: 'BJ000192',
                name: '老百姓药业有限公司',
                address: '浙江省'
            }, {
                date: 'BJ000191',
                name: '老百姓药业有限公司',
                address: '浙江省'
            }, {
                date: 'BJ000193',
                name: '老百姓药业有限公司',
                address: '浙江省'
            }],
            activeName2: 'first',
            value9: ''
        }
    },
    methods: {
        handleOpen (key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose (key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style>
.box-card {
    background-color: rgb(232, 237, 242) !important;
}
.card-top {
    background-color: white;
}
.breadcrumbNavigation {
    margin-left: 10px;
}
.breadcrumbNavigationText {
    font-size: 13px;
}

#app {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.flex {
    display: flex;
}

.flex-c {
    align-items: center;
    justify-content: center;
}

.flex-s {
    align-items: center;
    justify-content: flex-start;
}

.flex-c-b {
    align-items: center;
    justify-content: space-between;
}

.el-header {
    background-color: #333;
    color: #fff;
    text-align: left;
    line-height: 60px;
    padding: 0 !important;
    display: flex;
    align-items: center;
}

.wrap {
    width: 85px;
    height: 50px;
    margin-right: 20px;
}
.wrap:nth-of-type(1) span {
    margin-right: 20px;
}

.wrap:nth-of-type(1) {
    width: 95px;
    /* background-color: skyblue; */
    margin-left: 50px;
}
.wrap:nth-of-type(2) {
    width: 95px;
    /* background-color: skyblue; */
}
.wrap:nth-of-type(3) {
    width: 100px;
}

.wrap div {
    width: 30px;
    height: 30px;
}

.wrap img {
    width: 30px;
    height: 30px;
}

.el-aside {
    background-color: #333;
    color: #fff;
    text-align: center;
    line-height: 200px;
}

.el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    padding: 0 !important;
}

body>.el-container {
    margin-bottom: 40px;
    height: 100%;
}

.main-top {
    position: relative;
    background-color: #fff;
    height: 50px;
    padding: 10px;
}

.txt {
    position: absolute;
    height: 20px;

    bottom: 15px;
    line-height: 20px;
    left: 20px;
}

.dot {
    position: relative;
    height: 35px;
}

.dot .left,
.dot .right {
    width: 47%;
    height: 2px;
    border-bottom: 1px dashed gray;
}

.el-badge__content {
    background-color: #3a8ee6 !important;
    margin-right: 80px;
    top: 45% !important;
}

.item {
    position: absolute;
}


.el-tabs__header {
    margin: 0 !important;
}

.el-textarea__inner {
    background-color: #E9EEF3 !important;
    height: 100px;
    border: 1px solid #E9EEF3 !important;
    margin-top: 10px !important;
}

.el-form-item__content {
    display: flex;
}

.public-style {
    text-align: left;
    font-weight: 400;
    font-size: 14px;
    height: 40px;
    line-height: 40px;
    background-color: #E9EEF3;
}

.span-wrap>span {
    display: inline-block;
    margin-top: 3px;
}
.el-tabs__nav {
    background: #fff;
}
</style>