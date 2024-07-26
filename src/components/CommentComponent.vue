<script setup lang="ts">
import Comment from '@/entity/comment/Comment'
import { reactive } from 'vue'

const props = defineProps<{
  comment: Comment
}>()

type StateType = {
  comment: Comment
}
const state = reactive<StateType>({
  comment: props.comment
})

function remove() {
  console.log('remove')
}
</script>

<template>
  <div class="comment">
    <div class="header">
      <div class="section">
        <div class="author">{{ state.comment.author }}</div>
      </div>
      <div class="delete" @click="remove()">삭제</div>
    </div>
    <div class="content">{{ state.comment.content }}</div>
  </div>
</template>

<style scoped lang="scss">
.comment {
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
}

.section {
  display: flex;
  flex-direction: column;
}

.author {
  font-weight: 600;
  font-size: 1.2rem;
}

.content {
  margin-top: 0.8rem;
  font-size: 0.88rem;
}

.delete {
  font-size: 0.78rem;
  color: red;
}
</style>
