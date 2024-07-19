<script setup lang="ts"></script>
<template>
  <el-form label-position="top">
    <el-form-item label="제목">
      <el-input v-model="state.postWrite.title" size="large" placeholder="제목을 입력해주세요" />
    </el-form-item>

    <el-form-item label="내용">
      <el-input v-model="state.postWrite.content" type="textarea" rows="15" alt="내용" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" style="width: 100%">수정완료</el-button>
    </el-form-item>
  </el-form>
</template>

<style></style>
