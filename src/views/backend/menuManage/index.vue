<template>
  <div class="app-container">
    <h3 class="backend-item-title">首页菜单管理</h3>
    <div class="menuManage">
      <div class="menuManage-add">
        <el-button @click.native="addMasterMenu" type="primary">添加主菜单</el-button>
      </div>
      <div v-if="list !== '' && list.length !== 0">
        <div v-for="item in list" :key="item.id" class="menuManage-item">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12">
              <div class="menuManage-item-content">
                {{item.menuName}}
              </div>
            </el-col>
            <el-col style="text-align: right" :xs="24" :sm="12" :md="12">
              <el-button @click="deleteMenu(item.id, item.parentId)" type="danger">删除</el-button>
              <el-button @click="edit(item)" type="primary">编辑</el-button>
              <el-button @click="addSubMenu(item.id)" type="primary">添加子菜单</el-button>
              <el-button @click="getSubMenu(item.id)" type="primary">查看子菜单</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 添加模态框 -->
    <el-dialog
      title="添加菜单"
      :visible.sync="dialogVisible">
      <el-form ref="form" :model="data" label-width="140px">
        <el-form-item label="菜单名称">
          <el-input v-model="data.menuName"></el-input>
        </el-form-item>
        <el-form-item label="是否可见">
          <el-switch
            v-model="data.delFlag"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <el-form-item label="是否可删除">
          <el-switch
            v-model="data.allowDelete"
            active-color="#13ce66"
            inactive-color="#ff4949">
          </el-switch>
        </el-form-item>
        <el-form-item label="菜单排序">
          <el-input type="number" v-model="data.menuOrder"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sumit">确 定</el-button>
      </span>
    </el-dialog>
    <!-- end -->

    <!-- 子菜单模态框 -->
    <el-dialog
      title="子菜单"
      :visible.sync="dialogVisible2"
      width="90%">
      <div class="menuManage" v-if="subList !== '' && subList.length !== 0">
        <div v-for="item in subList" :key="item.id" class="menuManage-item">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="12">
              <div class="menuManage-item-content">
                {{item.menuName}}
              </div>
            </el-col>
            <el-col style="text-align: right" :xs="24" :sm="12" :md="12">
              <el-button @click="deleteMenu(item.id, item.parentId)" type="danger">删除</el-button>
              <el-button @click="edit(item)" type="primary">编辑</el-button>
              <el-button @click="addSubMenu(item.id)" type="primary">添加子菜单</el-button>
              <el-button @click="getSubMenu(item.id)" type="primary">查看子菜单</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible2 = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible2 = false">确 定</el-button>
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
      dialogVisible2: false,
      data: {
        menuName: '',
        allowDelete: false,
        delFlag: false,
        menuOrder: '',
        parentId: 0,
        hasChild: 0,
        id: 0
      }
    }
  },
  computed: mapState({
    list: state => state.menuManage.list,
    subList: state => state.menuManage.subList
  }),
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions(['getAllMenus', 'addMenu', 'deleteSpecMenu']),
    // init
    init() {
      const data = {
        parentId: 0
      }

      const payload = {
        data: data,
        that: this
      }
      this.getAllMenus(payload)
    },
    // add
    sumit() {
      let payload = this._.cloneDeep(this.data)
      if (payload.allowDelete) {
        payload.allowDelete = 0
      } else {
        payload.allowDelete = 1
      }

      if (payload.delFlag) {
        payload.delFlag = 0
      } else {
        payload.delFlag = 1
      }

      payload.menuOrder = Number(payload.menuOrder)

      const data = {
        payload: payload,
        that: this
      }

      this.addMenu(data)
    },
    // edit
    edit(item) {
      const data = this._.cloneDeep(item)
      this.data = data

      if (this.data.delFlag === 0) {
        this.data.delFlag = true
      } else {
        this.data.delFlag = false
      }

      if (this.data.allowDelete === 0) {
        this.data.allowDelete = true
      } else {
        this.data.allowDelete = false
      }

      this.dialogVisible = true
    },
    clean() {
      this.data = {
        menuName: '',
        allowDelete: false,
        delFlag: false,
        menuOrder: '',
        parentId: 0,
        hasChild: 0,
        id: 0
      }
    },
    // 添加主菜单
    addMasterMenu() {
      this.clean()
      this.dialogVisible = true
    },
    // 添加子菜单
    addSubMenu(id) {
      this.clean()
      this.data.parentId = id
      this.dialogVisible = true
    },
    // 查询子菜单
    getSubMenu(id) {
      const data = {
        parentId: id
      }

      const payload = {
        data: data,
        that: this
      }
      this.getAllMenus(payload)
    },
    // 删除菜单
    deleteMenu(id, parentId) {
      const payload = {
        id: id,
        parentId: parentId,
        that: this
      }
      this.deleteSpecMenu(payload)
    }
  }
}
</script>
