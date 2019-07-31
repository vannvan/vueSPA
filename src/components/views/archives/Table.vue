<template lang="html">
  <div class="spa-content-box">
    <el-table
     :data="tableData"
     stripe=true
     style="width: 100%">
     <el-table-column
       label="文章标题"
       >
       <template slot-scope="scope">
        <el-button @click="windowLocation(scope.row.link)" type="text" size="small">{{scope.row.title}}</el-button>
      </template>
     </el-table-column>
     <el-table-column
       prop="type"
       label="文章类型">
     </el-table-column>
     <el-table-column
       prop="time"
       label="发表时间">
     </el-table-column>
   </el-table>
  </div>
</template>

<script>
import Archives from './archives'
export default {
  data() {
        return {
          tableData:Archives
        }
  },
  mounted() {
    //do something after mounting vue instance
    console.log(Archives);
  },
  methods: {
    windowLocation(link) {
      // console.log(row);
      window.open(link);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
