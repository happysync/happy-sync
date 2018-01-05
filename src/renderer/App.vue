<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <nav-comp></nav-comp>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
  import NavComp from './components/NavComp'
  export default {
    name: 'happy-sync',
    components: { NavComp }
  }
</script>

<style>
  html,body,#app{
    height: 100%;
  }
</style>

<style scoped>
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: left;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }

  .el-container {
    height: 100%;
  }

</style>
