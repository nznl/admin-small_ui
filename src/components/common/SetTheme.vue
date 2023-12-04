<template>
  <el-button
    class="fixed right-16px bottom-50% translate-y-[-50%]"
    type="primary"
    link
    @click="isOpenDrawer = true"
  >
    <Icon
      class="text-32px"
      icon="uil:setting" 
    >
    </Icon>
  </el-button>
  <el-drawer
    v-model="isOpenDrawer"
    title="主题配置"
    size="400px"
  >
    <el-divider>
      系统主题
    </el-divider>
    <el-space>
      <span>颜色选择器：</span>
      <el-color-picker 
        v-model="themeColor"
        :predefine="predefineColors"
      >
      </el-color-picker>
    </el-space>
    <br/>
    <button @click="toggleSystemMode">
      <Icon icon="entypo:light-up" v-if="isDark" class="text-#000"></Icon>
      <Icon icon="circum:dark" v-else class="text-#000"></Icon>
    </button>
  </el-drawer>
</template>

<script lang="ts" setup>
import { getRgbOfColor } from '@/utils/common';
import { colorList } from '@/config';

const isOpenDrawer = ref<boolean>(false);
const themeColor = ref<string>('#409eff');
const predefineColors = ref(colorList);
const isDark = ref<boolean>(document.getElementsByTagName('html')[0].classList.contains('dark'));

watch(themeColor, color => {
  if (color) {
    const style = `
      --el-color-primary: ${ getRgbOfColor(color)};
      --el-color-primary-light-9: ${ getRgbOfColor(color, 0.1) };
      --el-color-primary-light-8: ${ getRgbOfColor(color, 0.2) };
      --el-color-primary-light-7: ${ getRgbOfColor(color, 0.3) };
      --el-color-primary-light-6: ${ getRgbOfColor(color, 0.4) };
      --el-color-primary-light-5: ${ getRgbOfColor(color, 0.5) };
      --el-color-primary-light-4: ${ getRgbOfColor(color, 0.6) };
      --el-color-primary-light-3: ${ getRgbOfColor(color, 0.7) };
      --el-color-primary-light-2: ${ getRgbOfColor(color, 0.8) };
      --el-color-primary-light-1: ${ getRgbOfColor(color, 0.9) };
      --el-color-primary-dark-2: ${ getRgbOfColor(color, 0.55) }
    `;
    document.documentElement.style.cssText = style;
  }
})

function toggleSystemMode() {
  if (document.getElementsByTagName('html')[0].classList.contains('dark')) {
    document.getElementsByTagName('html')[0].classList.remove('dark');
  } else {
    document.getElementsByTagName('html')[0].classList.add('dark');
  }
  isDark.value = document.getElementsByTagName('html')[0].classList.contains('dark');
}
</script>

<style lang="scss" scoped>

</style>