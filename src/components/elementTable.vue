<template>
    <el-row class="wrap">
        <el-col :span="24" class="toolbar" style="padding-bottom:0px;">
            <!--工具箱-->
            <el-form :inline="true" :model="filters">
                <el-form-item>
                    <el-input v-model="select" placeholder="请输入查询项"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="search">查询</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="addFormItem">新增</el-button>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="batchDelete" :disabled="this.sels.length===0">批量删除</el-button>
                </el-form-item>
            </el-form>

            <!--列表-->
            <el-table :data="tableDatas" highlight-current-row v-loading.body="isLoading" @selection-change="selsChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="expand">
                    <template scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="[图书简介]">
                                <span>{{ props.row.description }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column prop="name" label="书名" sortable></el-table-column>
                <el-table-column prop="author" label="作者" width="100" sortable></el-table-column>
                <el-table-column prop="publishAt" label="出版日期" width="150" sortable></el-table-column>
                <el-table-column label="操作" width="150">
                    <template scope="scope">
                        <el-button size="small" @click="editItem(scope.$index,scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="delItem(scope.$index,scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>

            <!--分页-->
            <el-col :span="24" class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="pageSizes"
                        :page-size="pageSize"
                        layout="total, sizes, prev, pager, next, jumper"
                        :total="total">
                </el-pagination>
            </el-col>

            <!--编辑-->
            <el-dialog title="编辑" v-model="editFormVisible" :close-on-click-modal="false">
                <el-form :model="editForm" label-width="100px" :rules="editFormRules" ref="editForm">
                    <el-form-item label="书名" prop="name">
                        <el-input v-model="editForm.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="作者" prop="author">
                        <el-input v-model="editForm.author" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="出版日期">
                        <el-date-picker type="date" placeholder="选择日期" v-model="editForm.publishAt"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="简介" prop="description">
                        <el-input type="textarea" v-model="editForm.description" :rows="8"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="editFormVisible = false">取消</el-button>
                    <el-button type="primary" @click.native="editSubmit" :loading="editLoading">提交</el-button>
                </div>
            </el-dialog>

            <!--新增界面-->
            <el-dialog title="新增" v-model="addFormVisible" :close-on-click-modal="false">
                <el-form :model="addForm" label-width="80px" :rules="addFormRules" ref="addForm">
                    <el-form-item label="书名" prop="name">
                        <el-input v-model="addForm.name" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="作者" prop="author">
                        <el-input v-model="addForm.author" auto-complete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="出版日期">
                        <el-date-picker type="date" placeholder="选择日期" v-model="addForm.publishAt"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="简介" prop="description">
                        <el-input type="textarea" v-model="addForm.description" :rows="8"></el-input>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click.native="addFormVisible = false">取消</el-button>
                    <el-button type="primary" @click.native="addSubmit" :loading="addLoading">提交</el-button>
                </div>
            </el-dialog>
        </el-col>
    </el-row>
</template>

<script>
    var Mock = require('mockjs');
    var Random = Mock.Random;
    let tableDatas = Mock.mock({
        'tableData|100':[{
            'id|+1':1,
            name:()=>Random.ctitle(1,12),
            author:()=>Random.cname(),
            description:()=>Random.csentence(180,500),
            publishAt:()=>Random.date()
        }]
    });
    function transform(obj){
        var arr = [];
        for(var item in obj){
            arr.push(obj[item]);
        }
        return arr;
    }
    let data = transform(tableDatas)[0];
    export default {
        data () {
            return {
                select:'',
                //条件查询
                filters:{
                    name:'',
                    author:''
                },
                tableDatas:[],//表格数据
                sels:[],
                //分页
                total:0,       //分页总数
                isLoading:false,
                pageSizes:[10, 20, 30, 40],//分页选项
                pageSize:10,
                currentPage:1, //当前页
                //编辑
                editFormVisible:false,//编辑面板开合
                editLoading: false,
                editFormRules: {
                    name: [
                        {required: true, message: '请输入书名', trigger: 'blur'}
                    ],
                    author: [
                        {required: true, message: '请输入作者', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入简介', trigger: 'blur'}
                    ]
                },
                editForm: {
                    id: 0,
                    name: '',
                    author: '',
                    publishAt: '',
                    description: ''
                },
                //新增
                addFormVisible:false,
                addLoading: false,
                addFormRules: {
                    name: [
                        {required: true, message: '请输入书名', trigger: 'blur'}
                    ],
                    author: [
                        {required: true, message: '请输入作者', trigger: 'blur'}
                    ],
                    description: [
                        {required: true, message: '请输入简介', trigger: 'blur'}
                    ]
                },
                addForm: {
                    name: '',
                    author: '',
                    publishAt: '',
                    description: ''
                }
            }
        },
        watch:{
            select:function(item,oldVal){
                let newData = data.filter(item => (~item.name.indexOf(this.select)) || (~item.author.indexOf(this.select)));
                this.tableDatas = newData.slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage));
                this.total = newData.length;
            }
        },
        methods:{
            //查询
            search(){
//                if(!this.select){
//                    this.$message({
//                        message:'请输入查询条件'
//                    });
//                    this.dealData(this.pageSize,this.currentPage);
//                }else{
//                    let newData = data.filter(item => (~item.name.indexOf(this.select)) || (~item.author.indexOf(this.select)));
//                    this.tableDatas = newData.slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage));
//                    this.total = newData.length;
//                }
            },
            //处理分页
            handleSizeChange(pageSize) {
                this.pageSize = pageSize;
                this.dealData(this.pageSize,this.currentPage);
            },
            handleCurrentChange(currentPage) {
                this.currentPage = currentPage;
                this.dealData(this.pageSize,this.currentPage);
            },
            //数据加载
            dealData(pageSize,currentPage){
                this.tableDatas = data.slice(this.pageSize * (this.currentPage - 1), this.pageSize * (this.currentPage));
                this.total = data.length;
            },
            //删除选项
            delItem(index,row){
                this.$confirm('确认删除该记录吗？','提示',{type:'warning'}).then(()=>{
                    this.tableDatas.splice(index,1);
                    var item = this.pageSize * (this.currentPage - 1) + index;
                    data.splice(item,1);
                    this.dealData(this.pageSize,this.currentPage);
                    this.$message({
                        message:'删除成功',
                        type:'success'
                    });
                });
            },
            //编辑选项
            editItem(index,row){
                this.editFormVisible = true;
                //Object.assign用于将所有可枚举的属性的值从一个或多个源对象复制到目标对象，返回目标对象
                this.editForm = Object.assign({},row);
            },
            editSubmit(){
                this.$refs.editForm.validate((valid)=>{
                    console.log(valid);
                    if(valid){
                        this.$confirm('确认提交吗？','提示',{}).then(()=>{
                            this.$message({
                                message:'提交成功',
                                type:'success'
                            });
                            this.$refs['editForm'].resetFields();
                            this.editFormVisible = false;
                        })
                    }else{
                        console.log('error');
                        return false;
                    }
                })
            },
            //新增
            addFormItem() {
                this.addFormVisible = true;
                this.addForm = {
                    name: '',
                    author: '',
                    publishAt: '',
                    description: ''
                };
            },
            addSubmit(){
                this.$refs.addForm.validate((valid)=>{
                    if(valid){
                        var para = Object.assign({}, this.addForm);
                        console.log(para);
                        para.publishAt = (!para.publishAt || para.publishAt == '') ? '' : moment(para.publishAt).format('YYYY-MM-DD');
                        data.push(para);
                        this.dealData(this.pageSize,this.currentPage);
                        this.$message({
                            message:'新增成功',
                            type:'success'
                        });
                        this.$refs['addForm'].resetFields();
                        this.addFormVisible = false;
                    }
                })
            },
            //批量删除
            selsChange(sels){
                this.sels = sels;
            },
            batchDelete(){
                var ids = this.sels.map(item => item.id);
                console.log(ids);
                console.log(typeof(ids));
                this.$confirm('确认删除选中的记录吗?','提示',{
                    type:'warning'
                }).then(()=>{
                    ids.forEach((val)=>{
                        data.forEach((item)=>{
                            if(item.id === val){
                                data.splice(item,1);
                            }
                        });
                        console.log(data);
                    });
                    this.dealData(this.pageSize,this.currentPage);
                })
            }
        },
        mounted:function(){
            this.dealData(this.pageSize,this.currentPage);
        }
    }
</script>
<style>
    .toolbar{
        text-align: left;
    }
    .pagination{
        text-align: center;
        padding:1em 0;
    }
</style>