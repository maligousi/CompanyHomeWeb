<template>
  <div class="developHistory">
    <h3 class="backend-item-title">发展史列表</h3>
    <div class="developHistory-list">
      <el-row class="developHistory-list-title" :gutter="10">
        <el-col :md="8">
          <h4>年份</h4>
        </el-col>
        <el-col :md="8">
          <h4>优先级</h4>
        </el-col>
        <el-col :md="8">
          <h4>操作</h4>
        </el-col>
      </el-row>
      <div v-for="item in list" :key="item.id" class="developHistory-list-item">
        <el-row class="developHistory-list-item-content" :gutter="10">
          <el-col :md="8">
            {{item.happenYear}}
          </el-col>
          <el-col :md="8">
            {{item.historyOrder}}
          </el-col>
          <el-col :md="8">
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
  computed: mapState({
    list: state => state.developHistory.list
  }),
  mounted() {
    this.getAllDevelopHistorys()
  },
  methods: {
    ...mapActions(['getAllDevelopHistorys', 'deleteDevelopHistory']),
    // edit
    edit(id) {
      this.$router.push({
        path: '/menuContentManage/developHistoryAdd',
        query: { id: id }
      })
    },
    // delete
    deleteItem(id) {
      const payload = {
        id: id,
        that: this
      }

      this.deleteDevelopHistory(payload)
    }
  }
}
</script>
