<template>
  <div class="menuNewsManage">
    <h3 class="backend-item-title">新闻添加</h3>
    <div>
      <div class="menuNewsManage-bind">
        <p>已绑定菜单：{{specMenus.menuName}}</p>
        <p>绑定新闻菜单：</p>
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

      <div class="menuNewsManage-add">
        <el-form ref="form" :model="form" label-width="140px">
          <el-form-item label="新闻标题">
            <el-input v-model="form.newsTitle" placeholder="请输入新闻标题"></el-input>
          </el-form-item>
          <el-form-item label="新闻描述">
            <el-input v-model="form.newsDesc" placeholder="请输入新闻标题"></el-input>
          </el-form-item>
          <el-form-item label="新闻图 PC">
            <div class="dialog-common-img-module">
              <img v-if="isShowPc" class="dialog-common-img-module-img" :src="form.picUrl" alt="pc">
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
          <el-form-item label="新闻图 H5">
            <div class="dialog-common-img-module">
              <img v-if="isShowH5" class="dialog-common-img-module-img" :src="form.h5PicUrl" alt="pc">
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
          <tinymce :height="300" v-model="form.newsContent"></tinymce>
          <el-form-item style="margin-top: 20px;">
            <el-button @click="submit" type="primary">提交</el-button>
          </el-form-item>
        </el-form>
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
      value: '',
      value2: '',
      form: {
        h5PicUrl: '',
        id: '',
        newsContent: '',
        newsDesc: '',
        newsTitle: '',
        picUrl: ''
      },
      imgLimit: 1,
      isShowPc: false,
      isShowH5: false
    }
  },
  computed: mapState({
    menuTypes: state => state.menuNewsManage.menuTypes,
    specMenus: state => state.menuNewsManage.specMenus,
    menuLists: state => state.menuManage.list,
    subList: state => state.menuManage.subList,
    newsList: state => state.menuNewsManage.newList
  }),
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions([
      'getAllMenyType',
      'getAllMenusByMenusType',
      'getAllMenusCommon',
      'bindNewsMenu',
      'submitNews',
      'getAllNews'
    ]),
    async init() {
      let type
      const data = {
        parentId: 0
      }
      const id = this.$route.query.id
      await this.getAllMenyType()
      await this.getAllMenusCommon(data)
      Object.keys(this.menuTypes).forEach(key => {
        if (this.menuTypes[key] === '新闻') {
          type = key
        }
      })
      const payload = {
        menuType: type
      }
      await this.getAllMenusByMenusType(payload)
      if (this.newsList === '') {
        await this.getAllNews()
      }

      if (id) {
        this.isShowPc = true
        this.isShowH5 = true
      }
      this.newsList.list.some(element => {
        if (element.id === id || `${element.id}` === id) {
          this.form = this._.cloneDeep(element)
        }
      })
    },
    // 获取二级菜单
    getTwoMenus() {
      const payload = {
        parentId: this.value
      }
      this.getAllMenusCommon(payload)
    },
    // 绑定菜单
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
      this.bindNewsMenu(payload)
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
          this.form.picUrl = ''
        } else {
          this.form.h5PicUrl = ''
        }
      }
    },
    onSuccess(type) {
      return response => {
        if (type === 'pc') {
          this.form.picUrl = response.msg
          this.isShowPc = false
        } else {
          this.form.h5PicUrl = response.msg
          this.isShowH5 = false
        }
      }
    },
    submit() {
      const payload = {
        data: this.form,
        that: this
      }
      this.submitNews(payload)
    }
  }
}
</script>
