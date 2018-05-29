<template>
  <div class="app-container">
    <h3 class="backend-item-title">首页Logo管理</h3>
    <div class="logo-manage">
      <div class="logo-manage-add">
        <el-button @click.native="dialogVisible = true" type="primary">设置官网Logo</el-button>
      </div>
      <div class="logo-manage-main">
        <div style="margin-right: 20px;" v-if="logo.id !== null && logo.imgUrl !== null">
          <h4>PC Logo：</h4>
          <img class="logo-manage-main-img" :src="logo.imgUrl" alt="">
        </div>
        <div v-if="logo.id !== null && logo.h5ImageUrl !== null">
          <h4>H5 Logo：</h4>
          <img class="logo-manage-main-img" :src="logo.h5ImageUrl" alt="h5">
        </div>
        <div v-else class="logo-manage-info">
          暂无官网首页Logo,添加一个吧！
        </div>
      </div>
    </div>
    <el-dialog
      title="设置官网Logo"
      :visible.sync="dialogVisible">
      <el-form>
        <el-form-item label="PC Logo" :label-width="formLabelWidth">
          <div class="logo-manage-dialog-main">
            <img v-if="isShowPc" class="logo-manage-dialog-img" :src="logo.imgUrl" alt="pc">
            <el-upload
              ref="upload"
              :action="imgUpload"
              list-type="picture-card"
              :on-remove="remove('pc')"
              :on-success="successUpload('pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="H5 Logo" :label-width="formLabelWidth">
          <div class="logo-manage-dialog-main">
            <img v-if="isSHowH5" class="logo-manage-dialog-img" :src="logo.h5ImageUrl" alt="h5">
            <el-upload
              ref="upload"
              :action="imgUpload"
              list-type="picture-card"
              :on-remove="remove('h5')"
              :on-success="successUpload('h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="Logo相关链接" :label-width="formLabelWidth">
          <el-input v-model="setLogoConfig.referUrl" placeholder="请输入Logo相关连接"></el-input>
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
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      dialogVisible: false,
      formLabelWidth: '120px',
      // 设置Logo api所需字段
      setLogoConfig: {
        id: null,
        imgUrl: '',
        referUrl: '',
        h5ImageUrl: ''
      },
      isShowPc: false,
      isSHowH5: false
    }
  },
  async mounted() {
    // 获取logo
    await this.getLogo()
    this.setLogoConfig = {
      id: this.logo.id || null,
      imgUrl: this.logo.imgUrl || null,
      referUrl: this.logo.referUrl || null,
      h5ImageUrl: this.logo.h5ImageUrl || null
    }
    if (
      this.logo.imgUrl !== null &&
      this.logo.imgUrl !== '' &&
      this.logo.imgUrl !== undefined
    ) {
      this.isShowPc = true
    }

    if (
      this.logo.h5ImageUrl !== null &&
      this.logo.h5ImageUrl !== '' &&
      this.logo.h5ImageUrl !== undefined
    ) {
      this.isSHowH5 = true
    }
  },
  computed: mapState({
    logo: state => state.logoManage.logo,
    isSet: state => state.logoManage.isSet
  }),
  methods: {
    ...mapActions(['getLogo', 'setLogo']),
    ...mapMutations(['RESTORE_STATE']),
    // 上传图片后的操作
    successUpload(type) {
      return respond => {
        if (type === 'pc') {
          this.setLogoConfig.imgUrl = respond.msg
          this.isShowPc = false
        } else {
          this.setLogoConfig.h5ImageUrl = respond.msg
          this.isSHowH5 = false
        }
      }
    },
    // 移除图片后的操作
    remove(type) {
      return () => {
        if (type === 'pc') {
          this.setLogoConfig.imgUrl = ''
        } else {
          this.setLogoConfig.h5ImageUrl = ''
        }
      }
    },
    // 上传logo
    async submit() {
      await this.setLogo(this.setLogoConfig)
      if (this.isSet) {
        this.$refs.upload.clearFiles()
        this.dialogVisible = false
        this.$message({
          type: 'success',
          message: '设置成功!'
        })
        await this.getLogo()
        this.setLogoConfig = {
          id: this.logo.id || null,
          imgUrl: this.logo.imgUrl || null,
          referUrl: this.logo.referUrl || null,
          h5ImageUrl: this.logo.h5ImageUrl || null
        }
        this.RESTORE_STATE()
      } else {
        this.$message({
          type: 'error',
          message: '设置失败!'
        })
      }
    }
  }
}
</script>
