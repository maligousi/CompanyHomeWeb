<template>
  <div class="textAndImageManage">
    <h3 class="backend-item-title">菜单页面类型为图片/文本域列表</h3>
    <div v-for="item in list.list" :key="item.id">
      <div class="textAndImageManage-list-item">
        <div v-if="item.htmlType === 1">
          <el-row class="textAndImageManage-list-item-title" :gutter="10">
            <el-col :md="2">
              <h4>类型</h4>
            </el-col>
            <el-col :md="5">
              <h4>PC图片</h4>
            </el-col>
            <el-col :md="5">
              <h4>H5图片</h4>
            </el-col>
            <el-col :md="4">
              <h4>关联菜单</h4>
            </el-col>
            <el-col :md="4">
              <h4>相关链接</h4>
            </el-col>
            <el-col :md="4">
              <h4>操作</h4>
            </el-col>
          </el-row>
          <el-row class="textAndImageManage-list-item-content" :gutter="10">
            <el-col :md="2">
              {{item.htmlType}}
            </el-col>
            <el-col :md="5">
              <img :src="item.picUrl" alt="PC">
            </el-col>
            <el-col :md="5">
              <img :src="item.hrPicUrl" alt="H5">
            </el-col>
            <el-col :md="4">
              {{item.menuName}}
            </el-col>
            <el-col :md="4">
              {{item.referUrl}}
            </el-col>
            <el-col :md="4">
              <el-button @click="deleteItem(item.id)" type="danger">删除</el-button>
              <el-button @click="edit(item.id)" type="primary">编辑</el-button>
            </el-col>
          </el-row>
        </div>
        <div v-else>
          <el-row :gutter="10">
            <el-col :md="4">
              <h4>类型</h4>
            </el-col>
            <el-col :md="10">
              <h4>文本内容</h4>
            </el-col>
            <el-col :md="4">
              <h4>相关菜单</h4>
            </el-col>
            <el-col :md="6">
              <h4>操作</h4>
            </el-col>
          </el-row>
          <el-row :gutter="10">
            <el-col :md="4">
              文本类型
            </el-col>
            <el-col :md="10">
              <div v-html="item.htmlContent"></div>
            </el-col>
            <el-col :md="4">
              {{item.menuName}}
            </el-col>
            <el-col :md="6">
              <el-button @click="deleteItem(item.id)" type="danger">删除</el-button>
              <el-button @click="edit(item.id)" type="primary">编辑</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
      <hr/>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    list: state => state.textAndImageManage.list
  }),
  mounted() {
    this.getTextAndImageModules()
  },
  methods: {
    ...mapActions(['getTextAndImageModules', 'deleteTextAndImageModule']),
    // 编辑
    edit(id) {
      this.$router.push({
        path: '/menuContentManage/textAndImageAdd',
        query: { id: id }
      })
    },
    // 删除
    deleteItem(id) {
      const payload = {
        id: id,
        that: this
      }
      this.deleteTextAndImageModule(payload)
    }
  }
}
</script>
