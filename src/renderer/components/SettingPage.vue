<template>
    <div class="">
        设置页面
        <tencent v-if="path == 'token'"></tencent>
        <directory v-if="path == 'directory'"></directory>
    </div>
</template>
<script>
  import Tencent from './SettingPage/TencentToken'
  import Directory from './SettingPage/SetDirectory'
  
  export default {
    components: { Tencent, Directory },
    computed: {
      path () {
        return this.$route.params.path
      }
    }
  }
</script>