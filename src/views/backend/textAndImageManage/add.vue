<template>
  <div class="textAndImageManage">
    <h3 class="backend-item-title">菜单页面类型为图片/文本域添加</h3>
    <div>
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="类型选择">
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="一级菜单选择">
          <el-select @change="getMenuTwo" v-model="menuOne" placeholder="请选择">
            <el-option
              v-for="item in menuList"
              :key="item.id"
              :label="item.menuName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item v-if="subList !== '' && subList.length !== 0" label="二级菜单选择">
          <el-select @change="getMenuTwo" v-model="menuTwo" placeholder="请选择">
            <el-option
              v-for="item in subList"
              :key="item.id"
              :label="item.menuName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <!-- 图片类型 -->
        <div v-if="value === '0'">
          <el-form-item label="选择图片 PC">
            <div class="dialog-common-img-module">
              <img v-if="isShowPc" class="dialog-common-img-module-img" :src="form.picUrl" alt="pc">
              <el-upload
                :action="imgUpload"
                list-type="picture-card"
                :limit="imgLimit"
                :on-exceed="onExceed"
                :on-remove="onRemove('addPc')"
                :on-success="onSuccess('addPc')"
                >
                <i class="el-icon-plus"></i>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item label="选择图片 H5">
            <div class="dialog-common-img-module">
              <img v-if="isShowH5" class="dialog-common-img-module-img" :src="form.hrPicUrl" alt="pc">
              <el-upload
                :action="imgUpload"
                list-type="picture-card"
                :limit="imgLimit"
                :on-exceed="onExceed"
                :on-remove="onRemove('addh5')"
                :on-success="onSuccess('addh5')"
                >
                <i class="el-icon-plus"></i>
              </el-upload>
            </div>
          </el-form-item>
          <el-form-item label="相关链接地址">
            <el-input v-model="form.referUrl" placeholder="输入相关链接地址"></el-input>
          </el-form-item>
        </div>
        <!-- end -->
      </el-form>
      <!-- 文本类型 -->
        <div v-if="value === '1'">
          <tinymce :height="300" v-model="content"></tinymce>
        </div>
      <!-- end -->

      <div class="textAndImageManage-submit">
        <el-button @click="submit" type="primary">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Tinymce from '@/components/Tinymce'

export default {
  components: { Tinymce },
  data() {
    return {
      form: {
        id: 0,
        picUrl: '',
        hrPicUrl: '',
        htmlType: '',
        menuId: '',
        htmlContent: '',
        referUrl: ''
      },
      options: [
        {
          value: '0',
          label: '图片类型'
        },
        {
          value: '1',
          label: '文本类型'
        }
      ],
      value: '',
      menuOne: '',
      menuTwo: '',
      imgLimit: 1,
      content: `输入内容`,
      isShowPc: false,
      isShowH5: false
    }
  },
  computed: mapState({
    menuList: state => state.menuManage.list,
    subList: state => state.menuManage.subList,
    list: state => state.textAndImageManage.list
  }),
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions([
      'getAllMenusCommon',
      'addTextAndImageModule',
      'getTextAndImageModules'
    ]),
    async init() {
      const payload = {
        parentId: 0
      }
      const id = this.$route.query.id
      this.getAllMenusCommon(payload)
      if (this.list === '') {
        await this.getTextAndImageModules()
      }
      this.list.list.some(element => {
        if (`${element.id}` === id || element.id === id) {
          this.form = this._.cloneDeep(element)
          this.isShowPc = true
          this.isShowH5 = true
          if (this.form.htmlType === 1) {
            this.value = '0'
          } else {
            this.value = '1'
          }
          return true
        }
      })
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
        if (type === 'addPc') {
          this.form.picUrl = ''
        } else if (type === 'addh5') {
          this.form.hrPicUrl = ''
        }
      }
    },
    onSuccess(type) {
      return response => {
        if (type === 'addPc') {
          this.form.picUrl = response.msg
          this.isShowPc = false
        } else if (type === 'addh5') {
          this.form.hrPicUrl = response.msg
          this.isShowH5 = false
        }
      }
    },
    // 获取二级菜单
    getMenuTwo(id) {
      const payload = {
        parentId: id
      }
      this.getAllMenusCommon(payload)
    },
    // 提交
    submit() {
      if (this.value === '0') {
        this.form.htmlType = 1
      } else {
        this.form.htmlContent = this.content
        this.form.htmlType = 2
      }

      if (this.menuTwo === '') {
        this.form.menuId = this.menuOne
      } else {
        this.form.menuId = this.menuTwo
      }

      const payload = {
        data: this.form,
        that: this
      }

      this.addTextAndImageModule(payload)
    }
  }
}
</script>
