<template>
  <div class="menuGoodsManage">
    <h3 class="backend-item-title">商品分类详情添加</h3>
    <div class="menuGoodsManage-content-add">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="商品名称">
          <el-input placeholder="请输入商品名称" v-model="form.prodName"></el-input>
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input type="number" placeholder="请输入商品价格" v-model="form.prodPrice"></el-input>
        </el-form-item>
        <el-form-item label="商品图片 PC">
          <div class="dialog-common-img-module">
            <img v-if="isShowPC" class="dialog-common-img-module-img" :src="form.prodPic" alt="pc">
            <el-upload
              :action="imgUpload"
              list-type="picture-card"
              :limit="imgLimit"
              :on-exceed="onExceed"
              :on-remove="onRemove('pc')"
              :on-success="onSuccess('pc')"
            >
            <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="商品图片 H5">
          <div class="dialog-common-img-module">
            <img v-if="isShowH5" class="dialog-common-img-module-img" :src="form.prodH5Pic" alt="h5">
            <el-upload
              :action="imgUpload"
              list-type="picture-card"
              :limit="imgLimit"
              :on-exceed="onExceed"
              :on-remove="onRemove('h5')"
              :on-success="onSuccess('h5')"
            >
            <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="商品相关链接">
          <el-input placeholder="请输入商品相关链接" v-model="form.referUrl"></el-input>
        </el-form-item>
        <el-form-item label="商品描述">
          <el-input type="textarea" placeholder="请输入商品描述" v-model="form.prodDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="submit" type="primary">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data() {
    return {
      form: {
        categoryId: '',
        id: 0,
        prodDesc: '',
        prodH5Pic: '',
        prodName: '',
        prodPic: '',
        prodPrice: '',
        referUrl: ''
      },
      imgLimit: 1,
      isShowPC: false,
      isShowH5: false
    }
  },
  computed: mapState({
    specList: state => state.menuGoodsManage.specList
  }),
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions(['postSpecMenuGood', 'getSpecMenuGoods']),
    async init() {
      const id = this.$route.query.id
      if (id) {
        if (this.specList === '') {
          const payload = {
            prodCategoryId: this.$route.query.Category
          }
          await this.getSpecMenuGoods(payload)
        }
        this.specList.some(element => {
          if (element.id === id || `${element.id}` === id) {
            this.form = this._.cloneDeep(element)
            this.isShowPC = true
            this.isShowH5 = true
          }
        })
      }
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
        if (type === 'pc') {
          this.form.prodPic = ''
        } else {
          this.form.prodH5Pic = ''
        }
      }
    },
    onSuccess(type) {
      return response => {
        if (type === 'pc') {
          this.form.prodPic = response.msg
          this.isShowPC = false
        } else {
          this.form.prodH5Pic = response.msg
          this.isShowH5 = false
        }
      }
    },
    submit() {
      if (
        !this.form.prodName ||
        !this.form.prodPic ||
        !this.form.prodPrice ||
        !this.form.referUrl ||
        !this.form.prodH5Pic ||
        !this.form.prodDesc
      ) {
        this.$message({
          message: '请填写完整商品信息后提交！',
          type: 'warning'
        })
        return true
      }
      const data = this._.cloneDeep(this.form)
      data.prodPrice = Number(data.prodPrice)
      data.categoryId = Number(this.$route.query.Category)
      const payload = {
        data: data,
        that: this
      }
      this.postSpecMenuGood(payload)
    }
  }
}
</script>
