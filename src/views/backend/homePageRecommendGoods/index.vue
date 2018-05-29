<template>
  <div class="app-container">
    <h3 class="backend-item-title">首页推荐商品管理</h3>
    <div class="homePageRecommendGoods">
      <div class="homePageRecommendGoods-add">
        <el-button @click.native="openAddDialog" type="primary">添加首页推荐商品</el-button>
      </div>
      <div class="homePageRecommendGoods-main">
        <el-row :gutter="10">
          <el-col :md="4">
            <h4 class="homePageRecommendGoods-main-title">商品名</h4>
          </el-col>
          <el-col :md="8">
            <h4 class="homePageRecommendGoods-main-title">描述</h4>
          </el-col>
          <el-col :md="6">
            <h4 class="homePageRecommendGoods-main-title">PC图</h4>
          </el-col>
          <el-col :md="6">
            <h4 class="homePageRecommendGoods-main-title">H5图</h4>
          </el-col>
        </el-row>
        <div v-for="item in list" :key="item.id">
          <div class="homePageRecommendGoods-main-item">
            <el-row :gutter="10">
              <el-col :md="4">
                <div class="homePageRecommendGoods-main-item-content">{{item.prodOneName}}</div>
              </el-col>
              <el-col :md="8">
                <div class="homePageRecommendGoods-main-item-content">{{item.prodOneDesc}}</div>
              </el-col>
              <el-col :md="6">
                <img class="homePageRecommendGoods-main-item-img" :src="item.prodOneImgUrl" alt="PC">
              </el-col>
              <el-col :md="6">
                <img class="homePageRecommendGoods-main-item-img" :src="item.h5ProdOneImgUrl" alt="h5">
              </el-col>
            </el-row>
            <div class="homePageRecommendGoods-main-item-controller">
              <el-button @click="deleteItem(item.id)" type="danger">删除</el-button>
              <el-button @click="edit(item)" type="primary">编辑</el-button>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="商品一 PC图片">
          <el-upload
            :action="imgUpload"
            list-type="picture-card"
            :limit="imgLimit"
            :on-exceed="onExceed"
            :on-remove="onRemove('addPc1')"
            :on-success="onSuccess('addPc1')"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品一 H5图片">
          <el-upload
            :action="imgUpload"
            list-type="picture-card"
            :limit="imgLimit"
            :on-exceed="onExceed"
            :on-remove="onRemove('addH51')"
            :on-success="onSuccess('addH51')"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品一 名字">
          <el-input v-model="form.prodOneName"></el-input>
        </el-form-item>
        <el-form-item label="商品一 描述">
          <el-input type="textarea" v-model="form.prodOneDesc"></el-input>
        </el-form-item>
        <el-form-item label="商品一 详情链接">
          <el-input v-model="form.referOneUrl"></el-input>
        </el-form-item>
        <el-form-item label="商品二 PC图片">
          <el-upload
            :action="imgUpload"
            list-type="picture-card"
            :limit="imgLimit"
            :on-exceed="onExceed"
            :on-remove="onRemove('addPc2')"
            :on-success="onSuccess('addPc2')"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品二 H5图片">
          <el-upload
            :action="imgUpload"
            list-type="picture-card"
            :limit="imgLimit"
            :on-exceed="onExceed"
            :on-remove="onRemove('addH52')"
            :on-success="onSuccess('addH52')"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品二 名字">
          <el-input v-model="form.prodTwoName"></el-input>
        </el-form-item>
        <el-form-item label="商品二 描述">
          <el-input type="textarea" v-model="form.prodTwoDesc"></el-input>
        </el-form-item>
        <el-form-item label="商品二 详情链接">
          <el-input v-model="form.referTwoUrl"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      dialogVisible: false,
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        },
        {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      form: {
        prodOneName: '',
        prodOneDesc: '',
        referOneUrl: '',
        prodTwoName: '',
        prodTwoDesc: '',
        referTwoUrl: '',
        prodOneImgUrl: '',
        h5ProdOneImgUrl: '',
        prodTwoImgUrl: '',
        h5ProdTwoImgUrl: '',
        id: 0
      },
      imgLimit: 1
    }
  },
  computed: mapState({
    list: state => state.homePageRecommendGoods.list
  }),
  mounted() {
    this.getHomePageRecommendGoods()
  },
  methods: {
    ...mapActions([
      'addGoods',
      'getHomePageRecommendGoods',
      'deleteHomePageRecommendGoods'
    ]),
    // add
    openAddDialog() {
      this.dialogVisible = true
    },
    // 超出上传图片限制提醒
    onExceed() {
      this.$message({
        message: '最多只能上传一张图片！',
        type: 'warning'
      })
    },
    onRemove(type) {
      return () => {
        if (type === 'addPc1') {
          this.form.prodOneImgUrl = ''
        } else if (type === 'addH51') {
          this.form.h5ProdOneImgUrl = ''
        } else if (type === 'addPc2') {
          this.form.prodTwoImgUrl = ''
        } else if (type === 'addH52') {
          this.form.h5ProdTwoImgUrl = ''
        }
      }
    },
    onSuccess(type) {
      return response => {
        if (type === 'addPc1') {
          this.form.prodOneImgUrl = response.msg
        } else if (type === 'addH51') {
          this.form.h5ProdOneImgUrl = response.msg
        } else if (type === 'addPc2') {
          this.form.prodTwoImgUrl = response.msg
        } else if (type === 'addH52') {
          this.form.h5ProdTwoImgUrl = response.msg
        }
      }
    },
    submit() {
      const data = this._.cloneDeep(this.form)
      const payload = {
        data: data,
        that: this
      }
      this.addGoods(payload)
    },
    // edit
    edit(item) {
      this.form = item
      this.dialogVisible = true
    },
    // delete
    deleteItem(id) {
      const payload = {
        id: id,
        that: this
      }
      this.deleteHomePageRecommendGoods(payload)
    }
  }
}
</script>
