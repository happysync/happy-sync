<template>
    <el-row class="tac">
        <el-col>
            <el-menu
                    default-active="2"
                    class="el-menu-vertical-demo"
                    @open="handleOpen"
                    @close="handleClose"
                    @select="handleSelect"
                    :router="true"
            >
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                    <!--<el-menu-item-group>-->
                        <!--<template slot="title">分组一</template>-->
                        <el-menu-item index="1-1"><i class="el-icon-location"></i>选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    <!--</el-menu-item-group>-->
                    <el-menu-item-group title="分组2">
                        <el-menu-item index="1-3">选项3</el-menu-item>
                    </el-menu-item-group>
                    <el-submenu index="1-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="1-4-1">选项1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                <el-menu-item index="/" @select="handleSelect">
                    <i class="el-icon-menu"></i>
                    <span slot="title">文件同步</span>
                </el-menu-item>
                <!--<el-menu-item index="/setting" @select="handleSelect">-->
                    <!--<i class="el-icon-setting"></i>-->
                    <!--<span slot="title">参数设置</span>-->
                <!--</el-menu-item>-->
                <el-submenu index="4">
                    <template slot="title">
                        <i class="el-icon-setting"></i>
                        <span>设置</span>
                    </template>
                    <el-menu-item index="/setting/token">云存储参数</el-menu-item>
                    <el-menu-item index="/setting/directory">同步目录</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    computed: {
      hahaha () {
        return 1
      },
      ...mapState(['Counter'])
    },
    methods: {
      handleOpen (key, keyPath) {
        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
        console.log(key, keyPath)
      },
      handleSelect (index, path) {
        console.log(index, path)
        console.log(this)
        console.log(this.Counter)
        // this.$route.push('')
      }
    }
  }
</script>