<template>
  <router-view v-slot="{ Component, route }"> 
    <transition mode="out-in">
      <div>
        <keep-alive>
          <component :is="Component" :key="route.fullPath"></component>
        </keep-alive>
      </div>
    </transition>
  </router-view>
</template>

<script lang="ts" setup></script>