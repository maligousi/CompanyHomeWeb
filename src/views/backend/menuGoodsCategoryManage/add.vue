<template>
  <div class="menuGoodsManage">
    <h3 class="backend-item-title">商品分类添加</h3>
    <div class="menuGoodsManage-bind">
      <p>已绑定菜单：{{specMenus?specMenus.menuName:specMenus}}</p>
      <p>绑定商品菜单：</p>
      <el-form ref="form" label-width="140px">
        <el-form-item label="选择一级菜单">
          <el-select @change="getTwoMenus" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in menuLists"
              :key="item.id"
              :label="item.menuName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item v-if="subList !=='' && subList.length !== 0" label="选择二级菜单">
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in subList"
              :key="item.id"
              :label="item.menuName"
              :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button @click="bind" type="primary">绑定</el-button>
        </el-form-item>
      </el-form>
    </div>

    <div class="menuGoodsManage-add">
      <el-form ref="form" :model="form" label-width="140px">
        <el-form-item label="商品分类名">
          <el-input v-model="form.categoryName" placeholder="请输入商品分类名"></el-input>
        </el-form-item>
        <el-form-item label="商品分类优先级">
          <el-input v-model="form.categoryOrder" placeholder="请输入商品分类优先级"></el-input>
        </el-form-item>
        <el-form-item label="PC图">
          <div class="dialog-common-img-module">
            <img v-if="isShowPc" class="dialog-common-img-module-img" :src="form.categoryPic" alt="pc">
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
        <el-form-item label="H5图">
          <div class="dialog-common-img-module">
            <img v-if="isShowH5" class="dialog-common-img-module-img" :src="form.categoryH5Pic" alt="h5">
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
      value: '',
      value2: '',
      form: {
        categoryH5Pic: '',
        categoryPic: '',
        categoryName: '',
        categoryOrder: '',
        id: 0
      },
      isShowPc: false,
      isShowH5: false,
      imgLimit: 1
    }
  },
  mounted() {
    this.init()
  },
  computed: mapState({
    menuLists: state => state.menuManage.list,
    subList: state => state.menuManage.subList,
    menuTypes: state => state.menuNewsManage.menuTypes,
    specMenus: state => state.menuNewsManage.specMenus,
    list: state => state.menuGoodsManage.list
  }),
  methods: {
    ...mapActions([
      'getAllMenyType',
      'getAllMenusByMenusType',
      'getAllMenusCommon',
      'postGoodsMenu',
      'bindGoodsMenu',
      'getAllGoodsMenu'
    ]),
    async init() {
      let type
      const data = {
        parentId: 0
      }
      const id = this.$route.query.id
      if (id !== undefined) {
        if (this.list === '') {
          await this.getAllGoodsMenu()
        }
        this.list.some(element => {
          if (element.id === id || `${element.id}` === id) {
            this.form = this._.cloneDeep(element)
          }
        })
        this.isShowPc = true
        this.isShowH5 = true
      }
      await this.getAllMenyType()
      await this.getAllMenusCommon(data)
      Object.keys(this.menuTypes).forEach(key => {
        if (this.menuTypes[key] === '发展史') {
          type = key
        }
      })
      const payload = {
        menuType: type
      }
      await this.getAllMenusByMenusType(payload)
    },
    // 获取二级菜单
    getTwoMenus() {
      const payload = {
        parentId: this.value
      }
      this.getAllMenusCommon(payload)
    },
    bind() {
      let menuId
      if (this.value2 !== '') {
        menuId = this.value2
      } else {
        menuId = this.value
      }

      const payload = {
        data: menuId,
        that: this
      }

      this.bindGoodsMenu(payload)
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
          this.form.categoryPic = ''
        } else {
          this.form.categoryH5Pic = ''
        }
      }
    },
    onSuccess(type) {
      return response => {
        if (type === 'pc') {
          this.form.categoryPic = response.msg
        } else {
          this.form.categoryH5Pic = response.msg
        }
      }
    },
    submit() {
      const data = this._.cloneDeep(this.form)
      data.categoryOrder = Number(data.categoryOrder)
      const payload = {
        data: data,
        that: this
      }

      this.postGoodsMenu(payload)
    }
  }
}
</script>
