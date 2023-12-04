<template>
  <div class="login-layout">
    <div class="login-layout_card">
      <div class="login-layout_title">
        {{ title }}
      </div>
      <div class="login-layout_form">
        <div class="item">
          <input 
            v-model.trim="username"
            type="search" 
            id="usrname" 
            class="text-14px" 
            required 
            autocomplete="new-password"
          />
          <span class="bar"></span>
          <label for="usrname">User name</label>
        </div>
        <div class="item">
          <input
            v-model.trim="password"
            type="password" 
            id="password" 
            class="text-14px" 
            required 
            autocomplete="new-password"
          />
          <span class="bar"></span>
          <label for="password">User password</label>
        </div>
      </div>
      <div class="login-submit">
        <button class="btn" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { loginApi } from '~/src/service';

const title = ref<string>(import.meta.env.VITE_APP_NAME);
const username = ref<string>('');
const password = ref<string>('');
const $router = useRouter();

async function login() {
  const { code } = await loginApi({
    username: username.value,
    password: password.value
  });
  if (code === 200) {
    window.$message.success("登录成功！");
    $router.push('/');
  }
}
</script>


<style lang="scss" scoped>
.login-layout {
  width: 100vw;
  height: 100vh;
  background: url(@/assets/image/bg.jpeg);
  background-size: 100%;
  position: relative;
  &_title {
    font-size: 21px;
    font-weight: 600;
    color: var(--el-color-primary);
    text-align: center;
    margin-bottom: 40px;
  }
  &_card {
    padding: 20px;
    background: #fff;
    position: fixed;
    top: 50%;
    right: 200px;
    transform: translate(0, -50%);
    border-radius: 20px;
    box-shadow: 0 0 20px 0 rgba($color:#efefef, $alpha: 0.5);
  }
  &_form {
    .item {
      position: relative;
      input {
        width: 360px;
        height: 32px;
        line-height: 32px;
        border-bottom: 1px solid #Ccc;
        margin-top: 0;
        transition: all 0.5s ease;
        &:focus~.bar {
          width: 100%;
          height: 1px;
        }
        &:focus~label {
          top: -20px;
          color: #333;
        }
        &:valid~.bar{
          width: 100%;
          height: 2px;
        }
        &:valid~label {
          top: -20px;
          color: #333;
        }
      }
      .bar {
        position: absolute;
        width: 0;
        bottom: 0;
        height: 0;
        background: #666;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.5s ease;
      }
      label {
        position: absolute;
        left: 0;
        color: #888;
        top: 5px;
        transition: all 0.5s;
      }
      &:last-child {
        margin-top: 36px;
        input {
          &:focus~label {
            top: -20px;
            color: #333;
          }
          &:valid~label {
            top: -20px;
            color: #333;
          }
        }
      }
    }
  }
  .login-submit {
    margin: 50px 0 30px 0;
    .btn {
      width: 280px;
      display: block;
      margin: 0 auto;
      line-height: 32px;
      letter-spacing: 1px;
      background-color: var(--el-color-primary);
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>