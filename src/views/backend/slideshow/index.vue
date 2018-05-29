<template>
  <div class="app-container">
    <div class="slideshow">
      <!-- add button -->
      <div class="slideshow-add-button gonggao">
        <!--<el-button @click.native="dialogFormVisible = true" type="success">添加轮播图</el-button>-->
        <el-button @click.native="showDialogFormVisible" type="success">添加轮播图</el-button>
      </div>
      <!-- slideshow list -->
      <h3>轮播图列表</h3>
      <div v-if="slideshowList.length !== 0" class="slideshow-list">
        <div v-for="item in slideshowList" :key="item.id" class="slideshow-list-item">
          <img
            class="slideshow-list-item-img"
            :src="item.picUrl"
            alt="slideshow"
          >
          <div class="slideshow-list-item-button">
            <el-button @click.native="getSpecificalItem(item.id)" type="primary">编辑</el-button>
          </div>
          <div class="slideshow-list-item-button">
            <el-button @click.native="deleteSlideshowItem(item.id)" type="danger">删除</el-button>
          </div>
        </div>
      </div>
      <div class="slideshow-none" v-else>
        暂时没数据
      </div>
    </div>
    <!-- 添加轮播图 -->
    <el-dialog title="添加轮播图" :close-on-click-modal='false' :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="PC图片" :label-width="formLabelWidth">
          <el-upload
            :action="imgUpload"
            list-type="picture-card"
            :limit="imgLimit"
            :on-exceed="onExceed"
            :on-remove="onRemove('addPc')"
            :on-success="onSuccess('addPc')"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="H5图片" :label-width="formLabelWidth">
          <el-upload
            :action="imgUpload"
            list-type="picture-card"
            :limit="imgLimit"
            :on-exceed="onExceed"
            :on-remove="onRemove('addH5')"
            :on-success="onSuccess('addH5')"
            >
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="图片顺序度" :label-width="formLabelWidth">
          <el-input type="number" v-model="slideshowItem.picOrder" placeholder="请输入图片顺序度"></el-input>
        </el-form-item>
        <el-form-item label="图片相关连接" :label-width="formLabelWidth">
          <el-input v-model="slideshowItem.referUrl" placeholder="请输入图片相关连接"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click.native="submit">确 定</el-button>
      </div>
    </el-dialog>
    <!-- end -->

    <!-- 编辑轮播图 -->
    <el-dialog title="编辑轮播图" :close-on-click-modal='false' :visible.sync="dialogFormVisibleEdit">
      <el-form>
        <el-form-item label="PC图片" :label-width="formLabelWidth">
          <div class="dialog-common-img-module">
            <img v-if="isShowEditPcImg" class="dialog-common-img-module-img" :src="editSlideshowItem.picUrl" alt="pc">
            <el-upload
              ref="upload"
              :action="imgUpload"
              list-type="picture-card"
              :limit="imgLimit"
              :on-exceed="onExceed"
              :on-remove="onRemove('editPc')"
              :on-success="onSuccess('editPc')"
              >
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="H5图片" :label-width="formLabelWidth">
          <div class="dialog-common-img-module">
            <img v-if="isShowEditH5Img" class="dialog-common-img-module-img" :src="editSlideshowItem.h5PicUrl" alt="pc">
            <el-upload
              ref="upload2"
              :action="imgUpload"
              list-type="picture-card"
              :limit="imgLimit"
              :on-exceed="onExceed"
              :on-remove="onRemove('editH5')"
              :on-success="onSuccess('editH5')"
              >
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="图片顺序度" :label-width="formLabelWidth">
          <el-input type="number" v-model="editSlideshowItem.picOrder" placeholder="请输入图片顺序度"></el-input>
        </el-form-item>
        <el-form-item label="图片相关连接" :label-width="formLabelWidth">
          <el-input v-model="editSlideshowItem.referUrl" placeholder="请输入图片相关连接"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisibleEdit = false">取 消</el-button>
        <el-button type="primary" @click.native="submitEdit">确 定</el-button>
      </div>
    </el-dialog>
    <!-- end -->
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      // 添加轮播图时的数据
      slideshowItem: {
        h5PicUrl: '',
        picOrder: '',
        picUrl: '',
        referUrl: ''
      },
      editSlideshowItem: {
        h5PicUrl: '',
        picOrder: '',
        picUrl: '',
        referUrl: ''
      },
      dialogFormVisible: false,
      dialogFormVisibleEdit: false,
      formLabelWidth: '120px',
      dialogImageUrl: '',
      dialogVisible: false,
      // 图片可上传图片限制
      imgLimit: 1,
      isShowEditPcImg: true,
      isShowEditH5Img: true
    }
  },
  mounted() {
    this.getSlideshowList()
  },
  computed: mapState({
    slideshowList: state => state.slideshow.slideshowList,
    isAdd: state => state.slideshow.isAdd,
    isDelete: state => state.slideshow.isDelete,
    isEdit: state => state.slideshow.isEdit,
    errorMsg: state => state.slideshow.errorMsg
  }),
  methods: {
    ...mapActions([
      'addSlideshow',
      'getSlideshowList',
      'deleteSlideshowItemVuex',
      'editSlideshowItemVuex'
    ]),
    ...mapMutations(['RESTORE_STATE']),
    // 添加轮播item
    async submit() {
      const data = {
        h5PicUrl: this.slideshowItem.h5PicUrl,
        picOrder: this.slideshowItem.picOrder,
        picUrl: this.slideshowItem.picUrl,
        referUrl: this.slideshowItem.referUrl
      }
      // 进行轮播图添加
      await this.addSlideshow(data)
      // 判断是否成功添加
      if (this.isAdd) {
        this.$message({
          type: 'success',
          message: '添加成功!'
        })
        this.dialogFormVisible = false
        this.slideshowItem = {
          h5PicUrl: '',
          picOrder: '',
          picUrl: '',
          referUrl: '',
          id: ''
        }
        this.RESTORE_STATE()
        this.getSlideshowList()
      } else {
        this.$message({
          type: 'error',
          message: '添加失败!'
        })
      }
    },
    // 超出上传图片限制提醒
    onExceed() {
      this.$message({
        message: '最多只能上传一张图片！',
        type: 'warning'
      })
    },
    // 删除图片后的处理
    onRemove(type) {
      return () => {
        if (type === 'addPc') {
          this.slideshowItem.picUrl = ''
        } else if (type === 'addH5') {
          this.slideshowItem.h5PicUrl = ''
        } else if (type === 'editPc') {
          this.editSlideshowItem.picUrl = ''
        } else if (type === 'editH5') {
          this.editSlideshowItem.h5PicUrl = ''
        }
      }
    },
    // 成功上传图片后的处理
    onSuccess(type) {
      return response => {
        if (type === 'addPc') {
          this.slideshowItem.picUrl = response.msg
        } else if (type === 'addH5') {
          this.slideshowItem.h5PicUrl = response.msg
        } else if (type === 'editPc') {
          this.isShowEditPcImg = false
          this.editSlideshowItem.picUrl = response.msg
        } else if (type === 'editH5') {
          this.isShowEditH5Img = false
          this.editSlideshowItem.h5PicUrl = response.msg
        }
      }
    },
    // 删除轮播列表item
    deleteSlideshowItem(id) {
      this.$confirm('此操作将永久删除该轮播图, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(async () => {
          await this.deleteSlideshowItemVuex(id)
          if (this.isDelete) {
            // 重新获取最新轮播图列表
            this.getSlideshowList()
            this.RESTORE_STATE()
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 编辑轮播图 --- 获取轮播图信息
    getSpecificalItem(id) {
      this.dialogFormVisibleEdit = true
      this.slideshowList.some(element => {
        if (element.id === id) {
          // 深度克隆element 因为js的对象是引用的
          const object = this._.cloneDeep(element)
          this.editSlideshowItem = object
          return true
        }
      })
    },
    // 提交编辑信息
    async submitEdit() {
      await this.editSlideshowItemVuex(this.editSlideshowItem)
      if (this.isEdit) {
        this.dialogFormVisibleEdit = false
        this.editSlideshowItem = {
          h5PicUrl: '',
          picOrder: '',
          picUrl: '',
          referUrl: ''
        }
        this.isShowEditPcImg = true
        this.isShowEditH5Img = true
        this.$refs.upload.clearFiles()
        this.$refs.upload2.clearFiles()
        this.RESTORE_STATE()
        this.getSlideshowList()
        this.$message({
          type: 'success',
          message: '编辑成功!'
        })
      } else {
        this.$message({
          type: 'error',
          message: `${this.errorMsg}!`
        })
      }
    },
    showDialogFormVisible(){
      this.dialogFormVisible=true;
    }
  }
}
</script>
<style scoped>
  .gonggao {
    z-index: 100;
  }
</style>
