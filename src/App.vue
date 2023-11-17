<template>
  <el-config-provider :locale="zhCn">
    <router-view v-slot="{ Component, route }">
      <transition
        mode="out-in"
      >
        <div class="h-full">
          <keep-alive>
            <component :is="Component" :key="route.fullPath" />
          </keep-alive>
        </div>
      </transition>
    </router-view>
  </el-config-provider>
</template>

<script lang="ts" setup>
import zhCn from 'element-plus/es/locale/lang/zh-cn';

</script>

<style lang="scss" scoped>
</style>