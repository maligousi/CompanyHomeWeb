<template>
  <div class="menuNewsManage">
    <h3 class="backend-item-title">新闻列表</h3>
    <div class="menuNewsManage-list">
      <el-row class="menuNewsManage-list-title" :gutter="10">
        <el-col :md="4">
          <h4>新闻标题</h4>
        </el-col>
        <el-col :md="6">
          <h4>新闻描述</h4>
        </el-col>
        <el-col :md="8">
          <h4>新闻图片</h4>
        </el-col>
        <el-col :md="6">
          <h4>操作</h4>
        </el-col>
      </el-row>
      <div v-for="item in newsList.list" :key="item.id" class="menuNewsManage-list-item">
        <el-row class="menuNewsManage-list-content" :gutter="10">
          <el-col :md="4">
            {{item.newsTitle}}
          </el-col>
          <el-col :md="6">
            {{item.newsDesc}}
          </el-col>
          <el-col :md="8">
            <img :src="item.picUrl" alt="pc">
          </el-col>
          <el-col :md="6">
            <el-button @click="deleteItem(item.id)" type="danger">删除</el-button>
            <el-button @click="edit(item.id)" type="primary">编辑</el-button>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  methods: {
    ...mapActions(['getAllNews', 'deleteNew']),
    edit(id) {
      this.$router.push({
        path: '/menuContentManage/newsAdd',
        query: { id: id }
      })
    },
    deleteItem(id) {
      const payload = {
        id: id,
        that: this
      }

      this.deleteNew(payload)
    }
  },
  mounted() {
    this.getAllNews()
  },
  computed: mapState({
    newsList: state => state.menuNewsManage.newList
  })
}
</script>
