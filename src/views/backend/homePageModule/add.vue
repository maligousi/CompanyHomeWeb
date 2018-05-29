<template>
  <div>
    <el-form ref="form" label-width="160px">
      <!-- 模块添加通用部分 -->
      <el-form-item label="模块标题 PC">
        <div class="dialog-common-img-module">
          <img
            v-if="item !== '' && data.labelUrl === item.labelUrl"
            class="dialog-common-img-module-img"
            :src="data.labelUrl"
            alt="pc">
          <el-upload
            :action="imgUpload"
            :limit="limit"
            :on-exceed="onExceed"
            list-type="picture-card"
            :on-remove="handleRemove('common-pc')"
            :on-success="handleSuccess('common-pc')">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="模块标题 H5">
        <div class="dialog-common-img-module">
          <img
            v-if="item !== '' && data.h5LabelUrl === item.h5LabelUrl"
            class="dialog-common-img-module-img"
            :src="data.h5LabelUrl"
            alt="pc">
          <el-upload
            :action="imgUpload"
            :limit="limit"
            :on-exceed="onExceed"
            list-type="picture-card"
            :on-remove="handleRemove('common-h5')"
            :on-success="handleSuccess('common-h5')">
            <i class="el-icon-plus"></i>
          </el-upload>
        </div>
      </el-form-item>
      <el-form-item label="是否隐藏">
        <el-switch v-model="data.delFlag"></el-switch>
      </el-form-item>
      <el-form-item label="选择模块类型">
        <el-select v-model="data.modelType" placeholder="请选择模块类型">
          <el-option label="类型一" value="1"></el-option>
          <el-option label="类型二" value="2"></el-option>
          <el-option label="类型三" value="3"></el-option>
        </el-select>
      </el-form-item>
      <!-- 通用部分结束 -->

      <!-- 类型一 -->
      <div v-if="data.modelType === '1'">
        <el-form-item label="左侧图片1 - PC">
          <div class="dialog-common-img-module">
          <img
            v-if="item !== '' && indexModelTypeOneVo[0].imageOne === item.indexModelTypeOne[0].imageOne"
            class="dialog-common-img-module-img"
            :src="indexModelTypeOneVo[0].imageOne"
            alt="pc">
          <el-upload
            :action="imgUpload"
            :limit="limit"
            :on-exceed="onExceed"
            list-type="picture-card"
            :on-remove="handleRemove('type1-left1-pc')"
            :on-success="handleSuccess('type1-left1-pc')">
            <i class="el-icon-plus"></i>
          </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片1 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeOneVo[0].h5ImageOne === item.indexModelTypeOne[0].h5ImageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeOneVo[0].h5ImageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type1-left1-h5')"
              :on-success="handleSuccess('type1-left1-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片1的链接">
          <el-input v-model="indexModelTypeOneVo[0].h5ReferUrlOne" placeholder="请输入左侧图片1的链接"></el-input>
        </el-form-item>
        <el-form-item label="左侧图片2 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeOneVo[1].imageOne === item.indexModelTypeOne[1].imageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeOneVo[1].imageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type1-left2-pc')"
              :on-success="handleSuccess('type1-left2-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片2 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeOneVo[1].h5ImageOne === item.indexModelTypeOne[1].h5ImageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeOneVo[1].h5ImageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type1-left2-h5')"
              :on-success="handleSuccess('type1-left2-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片2的链接">
          <el-input v-model="indexModelTypeOneVo[1].h5ReferUrlOne" placeholder="请输入左侧图片2的链接"></el-input>
        </el-form-item>
        <el-form-item label="右侧大图 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeOneVo[2].imageOne === item.indexModelTypeOne[2].imageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeOneVo[2].imageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type1-right-pc')"
              :on-success="handleSuccess('type1-right-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧大图 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeOneVo[2].h5ImageOne === item.indexModelTypeOne[2].h5ImageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeOneVo[2].h5ImageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type1-right-h5')"
              :on-success="handleSuccess('type1-right-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧大图的链接">
          <el-input v-model="indexModelTypeOneVo[2].h5ReferUrlOne" placeholder="请输入右侧大图的链接"></el-input>
        </el-form-item>
      </div>
      <!-- 类型一结束 -->

      <!-- 类型二 -->
      <div v-if="data.modelType === '2'">
        <el-form-item label="左侧图片 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeTwoVo.imageUrlOne === item.indexModelTypeTwo.imageUrlOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeTwoVo.imageUrlOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type2-left-pc')"
              :on-success="handleSuccess('type2-left-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeTwoVo.h5ImageUrlOne === item.indexModelTypeTwo.h5ImageUrlOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeTwoVo.h5ImageUrlOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type2-left-h5')"
              :on-success="handleSuccess('type2-left-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片的相关链接">
          <el-input v-model="indexModelTypeTwoVo.referUrlOne" placeholder="请输入左侧图片的相关链接"></el-input>
        </el-form-item>
        <el-form-item label="左侧内容的标题">
          <el-input v-model="indexModelTypeTwoVo.typeHeaderOne" placeholder="请输入左侧内容的标题"></el-input>
        </el-form-item>
        <el-form-item label="左侧内容">
          <el-input v-model="indexModelTypeTwoVo.typeHeaderDescOne" type="textarea" placeholder="请输入左侧内容"></el-input>
        </el-form-item>
        <el-form-item label="右侧图片 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeTwoVo.imageUrlTwo === item.indexModelTypeTwo.imageUrlTwo"
              class="dialog-common-img-module-img"
              :src="indexModelTypeTwoVo.imageUrlTwo"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type2-right-pc')"
              :on-success="handleSuccess('type2-right-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图片 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeTwoVo.h5ImageUrlTwo === item.indexModelTypeTwo.h5ImageUrlTwo"
              class="dialog-common-img-module-img"
              :src="indexModelTypeTwoVo.h5ImageUrlTwo"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type2-right-h5')"
              :on-success="handleSuccess('type2-right-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图片的相关链接">
          <el-input v-model="indexModelTypeTwoVo.referUrlTwo" placeholder="请输入右侧图片的相关链接"></el-input>
        </el-form-item>
        <el-form-item label="右侧内容的标题">
          <el-input v-model="indexModelTypeTwoVo.typeHeaderTwo" placeholder="请输入右侧内容的标题"></el-input>
        </el-form-item>
        <el-form-item label="右侧内容">
          <el-input v-model="indexModelTypeTwoVo.typeHeaderDescTwo" type="textarea" placeholder="请输入右侧内容"></el-input>
        </el-form-item>
        <el-form-item label="上传video">
          <el-upload
            ref="uploadVideo"
            action="http://comanyhome.tunnel.qydev.com/upload/video"
            :file-list="fileList"
            :limit="limit"
            :on-exceed="onExceed"
            :on-success="dealSuccessUploadVideo"
            :auto-upload="false">
            <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            <el-button @click.native="submitVideo" style="margin-left: 10px;" size="small" type="success">上传到服务器</el-button>
            <div slot="tip" class="el-upload__tip">上传mp4等格式视频</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="video描述">
          <el-input v-model="indexModelTypeTwoVo.typeVideoDesc" type="textarea" placeholder="请输入video描述内容"></el-input>
        </el-form-item>
      </div>
      <!-- 类型二结束 -->

      <!-- 类型三 -->
      <div v-if="data.modelType === '3'">
        <el-form-item label="左侧图1 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.prodImageUrlOne === item.indexModelTypeThree.prodImageUrlOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.prodImageUrlOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-left1-pc')"
              :on-success="handleSuccess('type3-left1-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图1 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.h5TypeModelLabelImageOne === item.indexModelTypeThree.h5TypeModelLabelImageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.h5TypeModelLabelImageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-left1-h5')"
              :on-success="handleSuccess('type3-left1-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图1 - 标题类型图">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.typeModelLabelImageOne === item.indexModelTypeThree.typeModelLabelImageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.typeModelLabelImageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-left1-type-pc')"
              :on-success="handleSuccess('type3-left1-type-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片1的链接">
          <el-input v-model="indexModelTypeThreeVo.typeModelLabelImageOneReferUrl" placeholder="请输入左侧图片1的链接"></el-input>
        </el-form-item>
        <el-form-item label="左侧图片1的描述">
          <el-input v-model="indexModelTypeThreeVo.prodDescOne" type="textarea" placeholder="请输入左侧图片1的描述"></el-input>
        </el-form-item>
        <el-form-item label="左侧图2 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.prodImageUrlTwo === item.indexModelTypeThree.prodImageUrlTwo"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.prodImageUrlTwo"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-left2-pc')"
              :on-success="handleSuccess('type3-left2-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图2 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.h5TypeModelLabelImageTwo === item.indexModelTypeThree.h5TypeModelLabelImageTwo"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.h5TypeModelLabelImageTwo"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-left2-h5')"
              :on-success="handleSuccess('type3-left2-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图2 - 标题类型图">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.typeModelLabelImageTwo === item.indexModelTypeThree.typeModelLabelImageTwo"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.typeModelLabelImageTwo"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-left2-type-pc')"
              :on-success="handleSuccess('type3-left2-type-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="左侧图片2的链接">
          <el-input v-model="indexModelTypeThreeVo.typeModelLabelImageTwoReferUrl" placeholder="请输入左侧图片2的链接"></el-input>
        </el-form-item>
        <el-form-item label="左侧图片2的描述">
          <el-input v-model="indexModelTypeThreeVo.prodDescTwo" type="textarea" placeholder="请输入左侧图片2的描述"></el-input>
        </el-form-item>
        <el-form-item label="右侧图1 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.prodImageUrlThree === item.indexModelTypeThree.prodImageUrlThree"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.prodImageUrlThree"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-right1-pc')"
              :on-success="handleSuccess('type3-right1-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图1 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.h5TypeModelLabelImageThree === item.indexModelTypeThree.h5TypeModelLabelImageThree"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.h5TypeModelLabelImageThree"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-right1-h5')"
              :on-success="handleSuccess('type3-right1-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图1 - 标题类型图">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.typeModelLabelImageThree === item.indexModelTypeThree.typeModelLabelImageThree"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.typeModelLabelImageThree"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-right1-type-pc')"
              :on-success="handleSuccess('type3-right1-type-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图片1的链接">
          <el-input v-model="indexModelTypeThreeVo.typeModelLabelImageThreeReferUrl" placeholder="请输入右侧图片1的链接"></el-input>
        </el-form-item>
        <el-form-item label="右侧图片1的描述">
          <el-input v-model="indexModelTypeThreeVo.prodDescThree" type="textarea" placeholder="请输入右侧图片1的描述"></el-input>
        </el-form-item>
        <el-form-item label="右侧图2 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.prodImageUrlFour === item.indexModelTypeThree.prodImageUrlFour"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.prodImageUrlFour"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-right2-pc')"
              :on-success="handleSuccess('type3-right2-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图2 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.h5TypeModelLabelImageFour === item.indexModelTypeThree.h5TypeModelLabelImageFour"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.h5TypeModelLabelImageFour"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-right2-h5')"
              :on-success="handleSuccess('type3-right2-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图2 - 标题类型图">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.typeModelLabelImageFour === item.indexModelTypeThree.typeModelLabelImageFour"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.typeModelLabelImageFour"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-right2-type-pc')"
              :on-success="handleSuccess('type3-right2-type-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="右侧图片2的链接">
          <el-input v-model="indexModelTypeThreeVo.typeModelLabelImageFourReferUrl" placeholder="请输入右侧图片2的链接"></el-input>
        </el-form-item>
        <el-form-item label="轮播图1 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.typeModelBroadcastImageOne === item.indexModelTypeThree.typeModelBroadcastImageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.typeModelBroadcastImageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-Broadcast1-pc')"
              :on-success="handleSuccess('type3-Broadcast1-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="轮播图1 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.h5TypeModelBroadcastImageOne === item.indexModelTypeThree.h5TypeModelBroadcastImageOne"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.h5TypeModelBroadcastImageOne"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-Broadcast1-h5')"
              :on-success="handleSuccess('type3-Broadcast1-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="轮播图1的链接">
          <el-input v-model="indexModelTypeThreeVo.typeModelBroadcastReferUrlOne" placeholder="请输入轮播图1的链接"></el-input>
        </el-form-item>
        <el-form-item label="轮播图2 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.typeModelBroadcastImageTwo === item.indexModelTypeThree.typeModelBroadcastImageTwo"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.typeModelBroadcastImageTwo"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-Broadcast2-pc')"
              :on-success="handleSuccess('type3-Broadcast2-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="轮播图2 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.h5TypeModelBroadcastImageTwo === item.indexModelTypeThree.h5TypeModelBroadcastImageTwo"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.h5TypeModelBroadcastImageTwo"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-Broadcast2-h5')"
              :on-success="handleSuccess('type3-Broadcast2-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="轮播图2的链接">
          <el-input v-model="indexModelTypeThreeVo.typeModelBroadcastReferUrlTwo" placeholder="请输入轮播图2的链接"></el-input>
        </el-form-item>
        <el-form-item label="轮播图3 - PC">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.typeModelBroadcastImageThree === item.indexModelTypeThree.typeModelBroadcastImageThree"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.typeModelBroadcastImageThree"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-Broadcast3-pc')"
              :on-success="handleSuccess('type3-Broadcast3-pc')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="轮播图3 - H5">
          <div class="dialog-common-img-module">
            <img
              v-if="item !== '' && indexModelTypeThreeVo.h5TypeModelBroadcastImageThree === item.indexModelTypeThree.h5TypeModelBroadcastImageThree"
              class="dialog-common-img-module-img"
              :src="indexModelTypeThreeVo.h5TypeModelBroadcastImageThree"
              alt="pc">
            <el-upload
              :action="imgUpload"
              :limit="limit"
              :on-exceed="onExceed"
              list-type="picture-card"
              :on-remove="handleRemove('type3-Broadcast3-h5')"
              :on-success="handleSuccess('type3-Broadcast3-h5')">
              <i class="el-icon-plus"></i>
            </el-upload>
          </div>
        </el-form-item>
        <el-form-item label="轮播图3的链接">
          <el-input v-model="indexModelTypeThreeVo.typeModelBroadcastReferUrlThree" placeholder="请输入轮播图3的链接"></el-input>
        </el-form-item>
      </div>
      <!-- 类型三结束 -->
      <!-- 提交 -->
      <el-form-item>
        <el-button type="primary" @click="submit">添加模块</el-button>
      </el-form-item>
      <!-- end -->
    </el-form>
  </div>
</template>

<script>
import { mapActions, mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      data: {
        delFlag: 0,
        h5LabelUrl: '',
        labelUrl: '',
        modelType: '',
        id: 0
      },
      indexModelTypeOneVo: [
        {
          h5ImageOne: '',
          h5ReferUrlOne: '',
          imageOne: '',
          indexModelId: 0
        },
        {
          h5ImageOne: '',
          h5ReferUrlOne: '',
          imageOne: '',
          indexModelId: 0
        },
        {
          h5ImageOne: '',
          h5ReferUrlOne: '',
          imageOne: '',
          indexModelId: 0
        }
      ],
      indexModelTypeTwoVo: {
        h5ImageUrlOne: '',
        h5ImageUrlTwo: '',
        imageUrlOne: '',
        imageUrlTwo: '',
        indexModelId: 0,
        referUrlOne: '',
        referUrlTwo: '',
        typeHeaderDescOne: '',
        typeHeaderDescTwo: '',
        typeHeaderOne: '',
        typeHeaderTwo: '',
        typeVideoDesc: '',
        typeVideoUrl: ''
      },
      indexModelTypeThreeVo: {
        h5TypeModelBroadcastImageOne: '',
        h5TypeModelBroadcastImageThree: '',
        h5TypeModelBroadcastImageTwo: '',
        h5TypeModelLabelImageFour: '',
        h5TypeModelLabelImageOne: '',
        h5TypeModelLabelImageThree: '',
        h5TypeModelLabelImageTwo: '',
        indexModelId: 0,
        prodDescOne: '',
        prodDescThree: '',
        prodDescTwo: '',
        prodImageUrlFour: '',
        prodImageUrlOne: '',
        prodImageUrlThree: '',
        prodImageUrlTwo: '',
        typeModelBroadcastImageOne: '',
        typeModelBroadcastImageThree: '',
        typeModelBroadcastImageTwo: '',
        typeModelBroadcastReferUrlFour: '',
        typeModelBroadcastReferUrlOne: '',
        typeModelBroadcastReferUrlThree: '',
        typeModelBroadcastReferUrlTwo: '',
        typeModelLabelImageFour: '',
        typeModelLabelImageFourReferUrl: '',
        typeModelLabelImageOne: '',
        typeModelLabelImageOneReferUrl: '',
        typeModelLabelImageThree: '',
        typeModelLabelImageThreeReferUrl: '',
        typeModelLabelImageTwo: '',
        typeModelLabelImageTwoReferUrl: ''
      },
      limit: 1,
      fileList: []
    }
  },
  mounted() {
    this.init()
  },
  computed: mapState({
    item: state => state.homePageModule.item,
    list: state => state.homePageModule.list
  }),
  methods: {
    ...mapActions(['addNewModule', 'getAllModule']),
    ...mapMutations(['SET_SPECICAL_ITEM']),
    // 初始化
    async init() {
      // 是编辑 输入已有内容
      const id = this.$route.query.id
      let item
      if (id !== undefined) {
        if (this.item !== '') {
          item = this._.cloneDeep(this.item)
        } else {
          await this.getAllModule()
          this.list.some(element => {
            if (`${element.id}` === id) {
              this.SET_SPECICAL_ITEM(element)
              item = this._.cloneDeep(this.item)
              if (item.modelType === 1) {
                this.indexModelTypeOneVo = item.indexModelTypeOne
              } else if (item.modelType === 2) {
                this.indexModelTypeTwoVo = item.indexModelTypeTwo
              } else if (item.modelType === 3) {
                this.indexModelTypeThreeVo = item.indexModelTypeThree
              }
              this.data = {
                /* eslint-disable*/
                delFlag: item.delFlag ? false : true,
                h5LabelUrl: item.h5LabelUrl,
                labelUrl: item.labelUrl,
                modelType: `${item.modelType}`,
                id: item.id
              }
              return true
            }
          })
        }
      }
    },
    handleRemove(type) {
      return () => {
        if (type === 'common-pc') {
          this.data.labelUrl = ''
        } else if (type === 'common-h5') {
          this.data.h5LabelUrl = ''
        } else if (type === 'type1-left1-pc') {
          this.indexModelTypeOneVo[0].imageOne = ''
        } else if (type === 'type1-left1-h5') {
          this.indexModelTypeOneVo[0].h5ImageOne = ''
        } else if (type === 'type1-left2-pc') {
          this.indexModelTypeOneVo[1].imageOne = ''
        } else if (type === 'type1-left2-h5') {
          this.indexModelTypeOneVo[1].h5ImageOne = ''
        } else if (type === 'type1-right-pc') {
          this.indexModelTypeOneVo[2].imageOne = ''
        } else if (type === 'type1-right-h5') {
          this.indexModelTypeOneVo[2].h5ImageOne = ''
        } else if (type === 'type2-left-pc') {
          this.indexModelTypeTwoVo.imageUrlOne = ''
        } else if (type === 'type2-left-h5') {
          this.indexModelTypeTwoVo.h5ImageUrlOne = ''
        } else if (type === 'type2-right-pc') {
          this.indexModelTypeTwoVo.imageUrlTwo = ''
        } else if (type === 'type2-right-h5') {
          this.indexModelTypeTwoVo.h5ImageUrlTwo = ''
        } else if (type === 'type3-left1-pc') {
          this.indexModelTypeTwoVo.prodImageUrlOne = ''
        } else if (type === 'type3-left1-h5') {
          this.indexModelTypeTwoVo.h5TypeModelLabelImageOne = ''
        } else if (type === 'type3-left2-pc') {
          this.indexModelTypeTwoVo.prodImageUrlTwo = ''
        } else if (type === 'type3-left2-h5') {
          this.indexModelTypeTwoVo.h5TypeModelLabelImageTwo = ''
        } else if (type === 'type3-right1-pc') {
          this.indexModelTypeTwoVo.prodImageUrlThree = ''
        } else if (type === 'type3-right1-h5') {
          this.indexModelTypeTwoVo.h5TypeModelLabelImageThree = ''
        } else if (type === 'type3-right2-pc') {
          this.indexModelTypeTwoVo.prodImageUrlFour = ''
        } else if (type === 'type3-right2-h5') {
          this.indexModelTypeTwoVo.h5TypeModelLabelImageFour = ''
        } else if (type === 'type3-Broadcast1-pc') {
          this.indexModelTypeThreeVo.typeModelBroadcastImageOne = ''
        } else if (type === 'type3-Broadcast1-h5') {
          this.indexModelTypeThreeVo.h5TypeModelBroadcastImageOne = ''
        } else if (type === 'type3-Broadcast2-pc') {
          this.indexModelTypeThreeVo.typeModelBroadcastImageTwo = ''
        } else if (type === 'type3-Broadcast2-h5') {
          this.indexModelTypeThreeVo.h5TypeModelBroadcastImageTwo = ''
        } else if (type === 'type3-Broadcast3-pc') {
          this.indexModelTypeThreeVo.typeModelBroadcastImageThree = ''
        } else if (type === 'type3-Broadcast3-h5') {
          this.indexModelTypeThreeVo.h5TypeModelBroadcastImageThree = ''
        } else if (type === 'type3-left1-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageOne = ''
        } else if (type === 'type3-left2-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageTwo = ''
        } else if (type === 'type3-right1-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageThree = ''
        } else if (type === 'type3-right2-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageFour = ''
        }
      }
    },
    onExceed() {
      this.$message({
        message: '最多只能上传一张图片！',
        type: 'warning'
      })
    },
    handleSuccess(type) {
      return response => {
        if (type === 'common-pc') {
          this.data.labelUrl = response.msg
        } else if (type === 'common-h5') {
          this.data.h5LabelUrl = response.msg
        } else if (type === 'type1-left1-pc') {
          this.indexModelTypeOneVo[0].imageOne = response.msg
        } else if (type === 'type1-left1-h5') {
          this.indexModelTypeOneVo[0].h5ImageOne = response.msg
        } else if (type === 'type1-left2-pc') {
          this.indexModelTypeOneVo[1].imageOne = response.msg
        } else if (type === 'type1-left2-h5') {
          this.indexModelTypeOneVo[1].h5ImageOne = response.msg
        } else if (type === 'type1-right-pc') {
          this.indexModelTypeOneVo[2].imageOne = response.msg
        } else if (type === 'type1-right-h5') {
          this.indexModelTypeOneVo[2].h5ImageOne = response.msg
        } else if (type === 'type2-left-pc') {
          this.indexModelTypeTwoVo.imageUrlOne = response.msg
        } else if (type === 'type2-left-h5') {
          this.indexModelTypeTwoVo.h5ImageUrlOne = response.msg
        } else if (type === 'type2-right-pc') {
          this.indexModelTypeTwoVo.imageUrlTwo = response.msg
        } else if (type === 'type2-right-h5') {
          this.indexModelTypeTwoVo.h5ImageUrlTwo = response.msg
        } else if (type === 'type3-left1-pc') {
          this.indexModelTypeThreeVo.prodImageUrlOne = response.msg
        } else if (type === 'type3-left1-h5') {
          this.indexModelTypeThreeVo.h5TypeModelLabelImageOne = response.msg
        } else if (type === 'type3-left2-pc') {
          this.indexModelTypeThreeVo.prodImageUrlTwo = response.msg
        } else if (type === 'type3-left2-h5') {
          this.indexModelTypeThreeVo.h5TypeModelLabelImageTwo = response.msg
        } else if (type === 'type3-right1-pc') {
          this.indexModelTypeThreeVo.prodImageUrlThree = response.msg
        } else if (type === 'type3-right1-h5') {
          this.indexModelTypeThreeVo.h5TypeModelLabelImageThree = response.msg
        } else if (type === 'type3-right2-pc') {
          this.indexModelTypeThreeVo.prodImageUrlFour = response.msg
        } else if (type === 'type3-right2-h5') {
          this.indexModelTypeThreeVo.h5TypeModelLabelImageFour = response.msg
        } else if (type === 'type3-Broadcast1-pc') {
          this.indexModelTypeThreeVo.typeModelBroadcastImageOne = response.msg
        } else if (type === 'type3-Broadcast1-h5') {
          this.indexModelTypeThreeVo.h5TypeModelBroadcastImageOne = response.msg
        } else if (type === 'type3-Broadcast2-pc') {
          this.indexModelTypeThreeVo.typeModelBroadcastImageTwo = response.msg
        } else if (type === 'type3-Broadcast2-h5') {
          this.indexModelTypeThreeVo.h5TypeModelBroadcastImageTwo = response.msg
        } else if (type === 'type3-Broadcast3-pc') {
          this.indexModelTypeThreeVo.typeModelBroadcastImageThree = response.msg
        } else if (type === 'type3-Broadcast3-h5') {
          this.indexModelTypeThreeVo.h5TypeModelBroadcastImageThree =
            response.msg
        } else if (type === 'type3-left1-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageOne = response.msg
        } else if (type === 'type3-left2-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageTwo = response.msg
        } else if (type === 'type3-right1-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageThree = response.msg
        } else if (type === 'type3-right2-type-pc') {
          this.indexModelTypeThreeVo.typeModelLabelImageFour = response.msg
        }
      }
    },
    // 上传video
    submitVideo() {
      this.$refs.uploadVideo.submit()
    },
    // 处理成功上传video
    dealSuccessUploadVideo(response) {
      this.indexModelTypeTwoVo.typeVideoUrl = response.msg
    },
    // 提交
    async submit() {
      let payload = this._.cloneDeep(this.data)
      let data
      if (payload.delFlag) {
        payload.delFlag = 1
      } else {
        payload.delFlag = 0
      }
      if (this.data.modelType === '1') {
        payload.indexModelTypeOneVo = this._.cloneDeep(this.indexModelTypeOneVo)
      } else if (this.data.modelType === '2') {
        payload.indexModelTypeTwoVo = this._.cloneDeep(this.indexModelTypeTwoVo)
      } else if (this.data.modelType === '3') {
        payload.indexModelTypeThreeVo = this._.cloneDeep(
          this.indexModelTypeThreeVo
        )
      }
      data = {
        router: this.$router,
        payload: payload
      }
      await this.addNewModule(data)
    }
  }
}
</script>
