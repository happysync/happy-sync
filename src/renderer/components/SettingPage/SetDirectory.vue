<template>
  <div class="">
  
  <div class="">设置需要同步的目录</div>
  <button id="select-directory" @click="select">button</button>
  <div id="selected-file" v-show="Setting.directory">You selected:{{ Setting.directory}}</div>

  </div>
</template>

<script>
  import { mapState, createNamespacedHelpers } from 'vuex'
  const { mapMutations } = createNamespacedHelpers('Setting')
  
  export default {
    computed: {
      ...mapState(['Setting'])
    },
    mounted () {
      let that = this
      this.$electron.ipcRenderer.on('selected-directory', function (event, path) {
        console.log(Date.now())
        that.SET_DIRECTORY(path)
        console.log(path)
        console.log(that.Setting)
      })
    },
    methods: {
      ...mapMutations([
        'SET_DIRECTORY'
      ]),
      select () {
        console.log('select')
        this.$electron.ipcRenderer.send('open-file-dialog')
      }
    }
  }
</script>

<style>

</style>