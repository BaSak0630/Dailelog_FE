<script setup lang="ts">
import Comment from '@/entity/comment/Comment'
import CommentList from '@/entity/comment/CommentList'
import CommentWrite from '@/entity/comment/CommentWrite'
import type HttpError from '@/http/HttpError'
import CommentRepository from '@/repository/CommentRepository'
import { ElMessage } from 'element-plus'
import { container } from 'tsyringe'
import { reactive } from 'vue'
import { useRouter } from 'vue-router'
import CommentComponent from './CommentComponent.vue'

const state = reactive({
  CommentWrite: new CommentWrite()
})

const COMMENT_REPOSITORY = container.resolve(CommentRepository)

const props = defineProps<{
  commentList: CommentList<Comment>
  postId: number
}>()

const router = useRouter()

function CommentPost() {
  COMMENT_REPOSITORY.write(state.CommentWrite, props.postId)
    .then(() => {
      console.log('success')
      ElMessage({ type: 'success', message: '댓글 등록이 완료되었습니다.' })
      router.replace('/')
    })
    .catch((e: HttpError) => {
      ElMessage({ type: 'error', message: e.getMessage() })
    })
}
</script>

<template>
  <div class="totalCount">댓글 {{ commentList.totalCount }}개</div>

  <div class="write">
    <div class="form">
      <div class="section">
        <div>
          <label for="author">작성자</label>
          <el-input v-model="state.CommentWrite.author" placeholder="id"></el-input>
        </div>

        <div>
          <label for="password">비밀번호</label>
          <el-input type="password" v-model="state.CommentWrite.password"></el-input>
        </div>
      </div>

      <div class="content">
        <label for="password">내용</label>
        <el-input
          v-model="state.CommentWrite.content"
          type="textarea"
          :rows="5"
          :autosize="{ minRows: 5, maxRows: 4 }"
        ></el-input>
      </div>
    </div>

    <el-button type="primary" class="button" @clock="CommentPost()">등록하기</el-button>
  </div>

  <ul class="comments">
    <li v-for="comment in commentList.items" :key="comment.id" class="comment">
      <CommentComponent :comment="comment as Comment" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.totalCount {
  font-size: 1.4rem;
}

.write {
  display: flex;
  flex-direction: column;
  gap: 12px;

  .form {
    display: flex;
    gap: 12px;
    margin-top: 10px;

    .section {
      width: 140px;
      display: flex;
      gap: 5px;
      flex-direction: column;
    }

    .content {
      flex-grow: 1;
    }
  }

  .button {
    width: 100px;
    align-self: flex-end;
  }
}

label {
  font-size: 0.78rem;
}

.comments {
  margin-top: 3rem;
  list-style: none;
  padding: 0;

  .comment {
    margin-bottom: 2.4rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
