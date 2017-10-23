<template>
    <div id="box">
        <h1>我是图表</h1>
        <div class="layerBox">
            <div class="layer-title">
                <i class="icon iconfont icon-home icon-setting"></i><span class="layer-text">图层</span>
            </div>
            <el-tree
                    :data="data3"
                    show-checkbox
                    node-key="id"
                    :props="defaultProps"
                    :default-expanded-keys="[2, 3]"
                    :default-checked-keys="[5]">
            </el-tree>
        </div>
        <el-tree
                :data="dataList"
                show-checkbox
                node-key="id"
                :default-checked-keys="checkList">
        </el-tree>
        <el-tree
                :data="data2"
                :props="defaultProps"
                show-checkbox
                node-key="id"
                default-expand-all
                :expand-on-click-node="false"
                :render-content="renderContent">
        </el-tree>
    </div>
</template>

<script>
    var Mock = require('mockjs');
    var Random = Mock.Random;
    let dataList = Mock.mock({
        'dataList|10':[{
            'id|+1':1,
            label:()=>Random.cname(),
            disabled:()=>Random.boolean()
        }]
    });
    function transform(obj){
        var arr = [];
        for(var item in obj){
            arr.push(obj[item]);
        }
        return arr;
    }
    let data = transform(dataList)[0];

    let id = 1000;
    export default {
        data () {
            return {
                checkList:[5],
                data3: [{
                    id: 1,
                    label: '一级 2',
                    children: [{
                        id: 3,
                        label: '二级 2-1',
                        children: [{
                            id: 4,
                            label: '三级 3-1-1'
                        }, {
                            id: 5,
                            label: '三级 3-1-2',
                            disabled: true
                        }]
                    }, {
                        id: 2,
                        label: '二级 2-2',
                        disabled: true,
                        children: [{
                            id: 6,
                            label: '三级 3-2-1'
                        }, {
                            id: 7,
                            label: '三级 3-2-2',
                            disabled: true
                        }]
                    }]
                }],
                data2: [{
                    id: 1,
                    label: '一级 1',
                    children: [{
                        id: 4,
                        label: '二级 1-1',
                        children: [{
                            id: 9,
                            label: '三级 1-1-1'
                        }, {
                            id: 10,
                            label: '三级 1-1-2'
                        }]
                    }]
                }, {
                    id: 2,
                    label: '一级 2',
                    children: [{
                        id: 5,
                        label: '二级 2-1'
                    }, {
                        id: 6,
                        label: '二级 2-2'
                    }]
                }, {
                    id: 3,
                    label: '一级 3',
                    children: [{
                        id: 7,
                        label: '二级 3-1'
                    }, {
                        id: 8,
                        label: '二级 3-2'
                    }]
                }],
                dataList:data,
                defaultProps: {
                    children: 'children',
                    label: 'label'
                }
            }
        },
        methods:{
            append(store, data) {
                store.append({ id: id++, label: 'testtest', children: [] }, data);
            },

            remove(store, data) {
                store.remove(data);
            },
            renderContent(h, { node, data, store }) {
                return (
                    <span>
                    <span>
                    <span>{node.label}</span>
                </span>
                <span style="float: right; margin-right: 20px">
                    <el-button size="mini" on-click={ () => this.append(store, data) }>Append</el-button>
                <el-button size="mini" on-click={ () => this.remove(store, data) }>Delete</el-button>
                </span>
                </span>);
            }
        }
    }
</script>
<style scoped>
    .layerBox{
        width:13em;
        background: #fff;
        border-radius:5px;
        text-align: left;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.2);
    }
    .layer-title{
        background: #157DD6;
        text-align: center;
        color: #fff;
        padding:0.5em 0;
        border-top-left-radius: 5px;
        border-top-right-radius:5px;
    }
    .layer-text{
        margin-left:0.5em;
    }
    /*.layerTree{*/
        /*border:none;*/
    /*}*/
    /*.layerTree .el-tree-node__content{*/
        /*position: relative;*/
    /*}*/
    /*.layerTree .el-tree-node__content:hover{*/

    /*}*/
    /*.layerTree .el-tree-node__expand-icon{*/
        /*position: absolute;*/
        /*right: 5px;*/
        /*top: 50%;*/
        /*transform: translate(0,-50%) rotate(0);*/
    /*}*/
    /*.layerTree .el-tree-node__expand-icon.expanded{*/
        /*transform: translate(0,-50%) rotate(0);*/
    /*}*/
</style>
