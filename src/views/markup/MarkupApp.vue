<template>
  <div>
    <div class="wrap-index">
      <header class="header">
        <h1>위메프투어 마크업 산출물</h1>
      </header>
      <main id="main" role="main">
        <h2>공통</h2>
        <ul class="lst_view">
          <li><router-link to="markup/common/popup">팝업</router-link></li>
          <li><router-link to="markup/main/main">메인</router-link></li>
        </ul>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MarkupApp',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
  .wrap-index{position:relative;padding:15px}
  .header{border-bottom:2px}
  .header h1{padding-bottom:5px;border-bottom:2px solid #2f2f2f;font-size:20px;color:#111}
  #main{padding-bottom:20px}
  #main h2{margin-top:15px;padding:10px 0 5px;border-bottom:1px solid #2f2f2f;font-size:16px;color:#111}
  .lst_view li{position:relative;border-bottom:1px solid #d9d9d9;}
  .lst_view li span{display:block;}
  .lst_view li a{display:block;padding:8px 30px 8px 8px;font-size:14px;}
  .lst_view li  a:after{position:absolute;right:15px;top:50%;margin-top:-7px;content:'〉';line-height:1}
  .noti_filename{font-size:12px;color:#999}
  .noti_filename:before{margin-left:5px;padding-right:5px;content:'/';color:#999}
  .footer{position:fixed;left:15px;right:15px;bottom:0;padding-bottom:15px;background:#fff;text-align:center;}
  .footer dl{padding:8px;background:#f1f1f1;}
  .footer dl dt{font-size:15px}
</style>
