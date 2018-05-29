<template>
  <div>
    <div class="home-module">
      <!-- 模块新增按钮 -->
      <div class="home-module-add">
        <el-button @click.native="add" type="primary">添加首页模块</el-button>
      </div>
      <!-- 模块列表 -->
      <div class="home-module-list">
        <div v-for="item in list" :key="item.id" class="home-module-item">
          <div class="home-module-item-module">
            <h4 class="home-module-item-title">标题</h4>
            <img class="home-module-item-title-img" :src="item.labelUrl" alt="title">
          </div>
          <div class="home-module-item-module">
            <h4 class="home-module-item-title">类型</h4>
            <p class="home-module-item-module-content">{{item.modelType}}</p>
          </div>
          <div class="home-module-item-module">
            <h4 class="home-module-item-title">操作</h4>
            <p class="home-module-item-module-content">
              <el-button @click.native="edit(item)" type="primary">编辑</el-button>
              <el-button @click.native="deleteModule(item.id)" type="danger">删除</el-button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  computed: mapState({
    list: state => state.homePageModule.list
  }),
  async mounted() {
    await this.getAllModule()
  },
  methods: {
    ...mapMutations(['SET_SPECICAL_ITEM']),
    ...mapActions(['getAllModule', 'deleteHomePageModule']),
    add() {
      this.$router.push('/homePageModule/add')
    },
    // 编辑
    edit(item) {
      this.SET_SPECICAL_ITEM(item)
      this.$router.push({ path: '/homePageModule/add', query: { id: item.id } })
    },
    // 删除
    deleteModule(id) {
      this.deleteHomePageModule(id)
      this.getAllModule()
    }
  }
}
</script>
