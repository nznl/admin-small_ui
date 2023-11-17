<template>
  <el-space>基础布局</el-space>
  <set-theme></set-theme>
  <div class="text-primary text-20px hover:text-#5f5f5f cursor-pointer">
    <el-button type="primary">AutoImport</el-button>
  </div>
  <router-view v-slot="{ Component, route }">
    <transition mode="out-in">
      <div>
        <keep-alive>
          <component :is="Component" ::key="route.fullPath"></component>
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script>