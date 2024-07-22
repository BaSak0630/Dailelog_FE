<script setup lang="ts">
import Post from '@/entity/post/Post'
import PostEdit from '@/entity/post/PostEdit'
import PostRepository from '@/repository/PostRepository'
import { container } from 'tsyringe'
import { onMounted, reactive } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps<{
  postId: number
}>()

const POST_REPOSITORY = container.resolve(PostRepository)

type StateType = {
  post: Post
  postEdit: PostEdit
}

const state = reactive<StateType>({
  post: new Post(),
  postEdit: new PostEdit()
})

const router = useRouter()

function getPost() {
  POST_REPOSITORY.get(props.postId)
    .then((post: Post) => {
      state.post = post
    })
    .catch((e) => {
      console.error(e)
    })
}

function edit() {
  // POST_REPOSITORY.write(state.postWrite)
  //   .then(() => {
  //     ElMessage({ type: 'success', message: '글 수정이 완료되었습니다.' })
  //     router.replace('/')
  //   })
  //   .catch((e: HttpError) => {
  //     ElMessage({ type: 'error', message: e.getMessage() })
  //   })
}

onMounted(() => {
  getPost()
})
</script>

<template>
  <el-form label-position="top">
    <el-form-item label="제목">
      <el-input v-model="state.postEdit.title" :value="state.post.title" size="large" />
    </el-form-item>

    <el-form-item label="내용">
      <el-input v-model="state.postEdit.content" :value="state.post.content" type="textarea" rows="15" alt="내용" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" style="width: 100%" @click="edit()">수정완료</el-button>
    </el-form-item>
  </el-form>
</template>

<style></style>
