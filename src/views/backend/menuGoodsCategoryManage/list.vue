<template>
  <div class="menuGoodsManage">
    <div class="menuGoodsManage-list">
      <el-row class="menuGoodsManage-list-title" :gutter="10">
        <el-col :md="4">
          <h4>商品名</h4>
        </el-col>
        <el-col :md="6">
          <h4>商品图 PC</h4>
        </el-col>
        <el-col :md="6">
          <h4>商品图 H5</h4>
        </el-col>
        <el-col :md="4">
          <h4>优先级</h4>
        </el-col>
        <el-col :md="4">
          <h4>操作</h4>
        </el-col>
      </el-row>
      <div v-for="item in list" :key="item.id" class="menuGoodsManage-list-item">
        <el-row class="menuGoodsManage-list-item-content" :gutter="10">
          <el-col :md="4">
            {{item.categoryName}}
          </el-col>
          <el-col :md="6">
            <img :src="item.categoryPic" alt="pc">
          </el-col>
          <el-col :md="6">
            <img :src="item.categoryH5Pic" alt="h5">
          </el-col>
          <el-col :md="4">
            {{item.categoryOrder}}
          </el-col>
          <el-col :md="4">
            <el-button @click="deleteItem(item.id)" type="danger">删除</el-button>
            <el-button @click="edit(item.id)" type="primary">编辑</el-button>
            <el-button @click="editSpecMenuGoods(item.id)" type="primary">编辑商品</el-button>
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
    list: state => state.menuGoodsManage.list
  }),
  mounted() {
    this.getAllGoodsMenu()
  },
  methods: {
    ...mapActions(['getAllGoodsMenu', 'deleteGoodsMenus']),
    deleteItem(id) {
      const payload = {
        id: id,
        that: this
      }

      this.deleteGoodsMenus(payload)
    },
    edit(id) {
      this.$router.push({
        path: '/menuContentManage/menuGoodsAdd',
        query: { id: id }
      })
    },
    // 编辑分类商品
    editSpecMenuGoods(id) {
      this.$router.push({
        path: '/menuContentManage/menuGoodsConetent',
        query: { Category: id }
      })
    }
  }
}
</script>
