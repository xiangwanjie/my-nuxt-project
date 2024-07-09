<template>
  <div>
    <h1>欢迎来到首页</h1>
    <p style="color: red;">{{ $t('homeTitle') }}</p>
    <nuxt-link to="/list">跳转列表页</nuxt-link>
    <MyDialog />
    <MyCalendar />
  </div>
</template>
