<template lang="html">
  <div class="spa-content-box" v-loading="loading">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <template v-for="(item, index) in npmList">
        <el-tab-pane :label="item.label" :name="item.name"></el-tab-pane>
      </template>
    </el-tabs>
    <div style="height:400px;width:80%;background:#fff;margin:30px auto">
      <div id="myChart"></div>
    </div>
    <!-- {{count}} -->
  </div>
</template>

<script>
import echarts from '@/components/common/echarts'
import { mapState } from 'vuex'
export default {
  name:'NpmPackages',
  data() {
    return {
      activeName: "wwvue-cli",
      npmList:[
        {
          name:'wwvue-cli',
          label:'wwvue-cli'
        },
        {
          name:'set-node-server',
          label:"set-node-server"
        }
      ],
      myChartData:{},
      count:''
    }
  },
  computed:{
    ...mapState({
      npmListStroe:state => state.npmListStroe.npmList
    })
  },
  mounted() {
    //do something after mounting vue instance
    this.drawLine(this.npmList[0].name)
  },
  methods: {
    handleClick(tab, event) {
        // console.log(tab, event);
        this.drawLine(tab.label)
    },
    drawLine(npmName) {
      let today = this.formatDateObj(new Date(),'yyyy-MM-dd')
      let preFourteenDay = this.getDay(-30)
      var optionData = {}
      this.$http.get('https://api.npmjs.org/downloads/range'+`/${preFourteenDay}:${today}/${npmName}`)
      // this.$http.get('https://api.npmjs.org/downloads/range/2019-05-20:2019-06-06/wwvue-cli')
      .then(res =>{
        this.loading = false
        optionData=res.data.downloads
        optionData.dateList = optionData.map(function (item) {
          return (item.day).slice(5)
        })
        optionData.valueList = optionData.map(function (item) {
            return item.downloads;
        });
        this.count = eval(optionData.valueList.join("+"))
        optionData.npmName = npmName
        this.$store.commit('setNpmList',optionData)
        this.myChartData = optionData
        this.setCharts()
    }).catch(error =>{
      console.log(error)
    })

    },
    sum(arr){
      return eval(arr.join("+"));
    },
    async setCharts(){
      let myChart = echarts.init(document.getElementById('myChart'))
      myChart.setOption({
          color:"#42E5D3",
          title: [{
               left: 'center',
               text: `${this.myChartData.npmName}  past 30 days downloads，count ${this.count} times`
          }],
          tooltip: {
              trigger: 'axis',
              formatter:'{b}<br />\
                    <span style="display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:#42E5D3"></span>\
                    	{c0}times<br />\
                    '
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            data: this.myChartData.dateList,

          }],
          yAxis: [{
              splitLine: {show: false}
          }],
          grid: {
              bottom: '60%',
          },
          series: [{
            type: 'line',
            showSymbol: false,
            data: this.myChartData.valueList
          }]
      })
    }

  }
}
</script>

<style lang="scss">
#myChart{
  // background: #fff;
  height: 600px;
  width:auto;
  margin: 0 auto !important;
}
#myChart>div>canvas{
  // width: 800px !important;
  margin:0 auto !important;
}
</style>
