<template lang="html">
  <div class="spa-content-box" v-loading="loading">
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

  </div>
</template>

<script>
export default {
  data(){
    return {
      reposList:[]
    }
  },
  mounted() {
    //do something after mounting vue instance
    this.getReposList()
  },
  methods: {
    getReposList() {
      let token = 'token '
      this.$http.defaults.headers.common['Authorization'] = token;
      this.$http.get('https://api.github.com/user/repos')
      .then(res => {
        this.loading = false
        this.reposList = res.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
