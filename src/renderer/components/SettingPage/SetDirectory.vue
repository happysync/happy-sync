<template>
  <div class="">
  
  <div class="">设置需要同步的目录</div>
  <button id="select-directory" @click="select">button</button>
  <div id="selected-file"></div>
  
  </div>
</template>

<script>
  
  export default {
    methods: {
      select () {
        console.log('select')
        const ipc = this.$electron.ipcRenderer

        ipc.send('open-file-dialog')
  
        ipc.on('selected-directory', function (event, path) {
          console.log(Date.now())
          document.getElementById('selected-file').innerHTML = `You selected: ${path}`
        })
      }
    }
  }
</script>

<style>

</style>