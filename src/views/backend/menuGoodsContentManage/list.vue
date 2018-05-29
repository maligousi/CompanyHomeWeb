<template>
  <div class="menuGoodsManage">
    <h3 class="backend-item-title">商品分类详情列表</h3>
    <div class="menuGoodsManage-content-list">
      <div class="menuGoodsManage-content-list-add">
        <el-button @click="add" type="primary">添加商品</el-button>
        <div class="menuGoodsManage-content-list-main">
          <el-row class="menuGoodsManage-content-list-main-title" :gutter="10">
            <el-col :md="3">商品名</el-col>
            <el-col :md="4">商品图PC</el-col>
            <el-col :md="4">商品图H5</el-col>
            <el-col :md="4">描述</el-col>
            <el-col :md="3">相关链接</el-col>
            <el-col :md="6">操作</el-col>
          </el-row>
          <el-row
          class="menuGoodsManage-content-list-main-content"
          v-for="item in specList"
          :key="item.id"
          :gutter="10">
            <el-col :md="3">{{item.prodName}}</el-col>
            <el-col :md="4">
              <img :src="item.prodPic" alt="pc">
            </el-col>
            <el-col :md="4">
              <img :src="item.prodH5Pic" alt="h5">
            </el-col>
            <el-col :md="4">
              {{item.prodDesc}}
            </el-col>
            <el-col :md="3">
              <el-button type="primary">查看相关链接</el-button>
            </el-col>
            <el-col :md="6">
              <el-button @click="deleteItem(item.id)" type="danger">删除</el-button>
              <el-button @click="edit(item.id)" type="primary">编辑</el-button>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  computed: mapState({
    specList: state => state.menuGoodsManage.specList
  }),
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions(['getSpecMenuGoods', 'deleteSpecMenuGood']),
    init() {
      const payload = {
        prodCategoryId: this.$route.query.Category
      }
      this.getSpecMenuGoods(payload)
    },
    add() {
      this.$router.push({
        path: '/menuContentManage/menuGoodsContentAdd',
        query: { Category: this.$route.query.Category }
      })
    },
    // edit
    edit(id) {
      this.$router.push({
        path: '/menuContentManage/menuGoodsContentAdd',
        query: { Category: this.$route.query.Category, id: id }
      })
    },
    deleteItem(id) {
      const payload = {
        id: id,
        that: this
      }
      this.deleteSpecMenuGood(payload)
    }
  }
}
</script>
