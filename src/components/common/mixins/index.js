import URL_CONFIG from '@/assets/js/urlConfig.js';
import { formatDate } from '@/assets/js/date.js';
const mixin = {
     data(){
      return {
        URL_CONFIG:URL_CONFIG,
        loading:true
      }
     },
     filters:{
         fdate:function(timestamp){
           // 这里默认认为是11位时间戳
           let date=new Date(timestamp*1000)
           return formatDate(date,'yyyy-MM-dd hh:mm')
       }
     },
     computed:{
       RandomColor() {
         return function(){
           let r, g, b;
           r = Math.floor(Math.random() * 256);
           g = Math.floor(Math.random() * 256);
           b = Math.floor(Math.random() * 256);
           return "rgb(" +r + ',' +g+ ',' +b+ ")";
         }
       }
     },
     methods: {
      formatTime(timestamp) {
        let date = new Date(timestamp*1000)
        return formatDate(date,'yyyy-MM-dd hh:mm')
      },
      formatDateObj(date,type) {
        return formatDate(date,type)
      },
      //获取过去几天
      getDay(day){
      　　var today = new Date();
      　　var targetday_milliseconds=today.getTime() + 1000*60*60*24*day;
      　　today.setTime(targetday_milliseconds); //注意，这行是关键代码
      　　var tYear = today.getFullYear();
      　　var tMonth = today.getMonth();
      　　var tDate = today.getDate();
      　　tMonth = this.doHandleMonth(tMonth + 1);
      　　tDate = this.doHandleMonth(tDate);
      　　return tYear+"-"+tMonth+"-"+tDate;
      },
      doHandleMonth(month){
      　　var m = month;
      　　if(month.toString().length == 1){
      　　　　m = "0" + month;
      　　}
      　　return m;
      },
      padLeftZero(str) {
          return ('00' + str).substr(str.length);
      },
      loadPage(path,query){
        this.$router.push({
          path:path,
          query:query
        })
      }
    }
}

export default mixin
