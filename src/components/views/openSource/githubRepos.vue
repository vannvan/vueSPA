<template lang="html">
  <div class="spa-content-box">
    <div>
      <el-row :gutter="24">
        <template v-for="(item, index) in reposList">
          <el-col :span="12" style="margin-bottom:20px">
            <el-card shadow="hover">
              <h3>Name:{{item.name}}</h3>
              <p>Shh:{{item.ssh_url}}</p>
              <p>clone:{{item.clone_url}}</p>
              <p>
                <i class="icon-eye"></i>
                {{item.watchers_count}}
              </p>
              <p>
                forks:{{item.forks}}
              </p>
              <p>
                创建时间:{{item.created_at}}
              </p>
            </el-card>
          </el-col>
        </template>
      </el-row>

    </div>
  <el-dialog
    title="提示"
    :visible.sync="dialogVisible"
    :modal-append-to-body='false'
    width="30%"
    >
    <el-input v-model="githubToken" placeholder="请输入token"></el-input>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="getReposList()">确 定</el-button>
    </span>
  </el-dialog>
  </div>
</template>

<script>
export default {
  data(){
    return {
      reposList:[],
      dialogVisible:true,
      githubToken:''
    }
  },
  mounted() {
    //do something after mounting vue instance
    // this.getReposList()
  },
  methods: {
    getReposList() {
      let token = 'token '+this.githubToken
      this.$http.defaults.headers.common['Authorization'] = token;
      this.$http.get('https://api.github.com/user/repos')
      .then(res => {
        this.dialogVisible = false
        this.reposList = res.data
      })
    }
  }
}
</script>

<style lang="scss">
</style>
