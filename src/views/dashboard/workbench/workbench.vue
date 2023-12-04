<template>
  工作台
  <br/>
  <button class="cursor-pointer" @click="dropper">取色器</button>
  <p :style="`background`">{{ color }}</p>
  <div>
    <div v-for="item in colorList" :key="item" :class="['w-100px', 'h-32px']" :style="{background: item}"></div>
  </div>
  <button @click="addscale">scale</button>
  <el-tabs>
    <el-tab-pane label="11111">1</el-tab-pane>
    <el-tab-pane label="22222">2</el-tab-pane>
    <el-tab-pane label="33333">
      <div class="parent">
        <div class="h-full">
          <div style="     
          display: flex;
          flex-direction: column;
          align-items: center;" class="h-full">
          <div class="child" :style="`transform: scale(${scaleN})`">
            
          </div>
        </div>
        </div>

        </div>
    </el-tab-pane>
  </el-tabs>

</template>

<script lang="ts" setup>
import { colorList } from '~/src/config';
const scaleN = ref<number>(1);
const color = ref<string>('');
function addscale() {
  scaleN.value++
}

 function dropper() {
  new EyeDropper().open().then(res => {
    color.value = res.sRGBHex;
 })
}
</script>

<style lang="scss" scoped>
  .parent {
    height: 400px;
    overflow: auto;
    border: 1px solid red;
    transform-origin: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    .child {
      width: 300px;
      height: 300px;
      border-radius: 50%;
      background: yellowgreen;
      // transform: scale(v-bind(scaleN));
    }
  }
</style>


