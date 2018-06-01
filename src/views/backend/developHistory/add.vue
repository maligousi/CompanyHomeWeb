<template>
  <div class="developHistory">
    <h3 class="backend-item-title">发展史添加</h3>
    <div>
      <div class="developHistory-bind">
        <p>已绑定菜单：{{specMenus?specMenus.menuName:specMenus}}</p>
        <p>绑定发展史菜单：</p>
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

      <div class="developHistory-add">
        <el-form ref="form" :model="form" label-width="140px">
          <el-form-item label="年份">
            <el-input v-model="form.happenYear" placeholder="请输入年份"></el-input>
          </el-form-item>
          <el-form-item label="优先级排序">
            <el-input v-model="form.historyOrder" placeholder="请输入优先级数字"></el-input>
          </el-form-item>
          <tinymce :height="300" v-model="form.happenContent"></tinymce>
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
        happenContent: '请输入发展史内容...',
        happenYear: '',
        historyOrder: '',
        id: ''
      }
    }
  },
  computed: mapState({
    menuLists: state => state.menuManage.list,
    subList: state => state.menuManage.subList,
    menuTypes: state => state.menuNewsManage.menuTypes,
    specMenus: state => state.menuNewsManage.specMenus,
    list: state => state.developHistory.list
  }),
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions([
      'getAllMenyType',
      'getAllMenusByMenusType',
      'getAllMenusCommon',
      'bindDevelopHistorysMenu',
      'addDevelopHistory',
      'getAllDevelopHistorys'
    ]),
    async init() {
      let type
      const data = {
        parentId: 0
      }
      const id = this.$route.query.id
      if (id !== undefined) {
        if (this.list === '') {
          await this.getAllDevelopHistorys()
        }
        this.list.some(element => {
          if (element.id === id || `${element.id}` === id) {
            this.form = this._.cloneDeep(element)
          }
        })
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

      this.bindDevelopHistorysMenu(payload)
    },
    // 获取二级菜单
    getTwoMenus() {
      const payload = {
        parentId: this.value
      }
      this.getAllMenusCommon(payload)
    },
    submit() {
      const payload = {
        data: this.form,
        that: this
      }

      this.addDevelopHistory(payload)
    }
  }
}
</script>
