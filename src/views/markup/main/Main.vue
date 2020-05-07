<template>
  <div>
    <main-header></main-header>
    <div class="container">
      <div class="nav-list">
        <ul>
          <li><a href="#">항공권</a></li>
          <li><a href="#">국내숙박</a></li>
          <li><a href="#">해외숙박</a></li>
          <li><a href="#">해외패키지</a></li>
          <li><a href="#">티켓</a></li>
        </ul>
      </div>

      <div class="cal-list is-btn">
        <ul class="u-list-horizontal">
          <li><a href="#" class="active">5·1 (금)</a></li>
          <li><a href="#">5·2 (토)</a></li>
          <li><a href="#">5·3 (일)</a></li>
          <li><a href="#">5·4 (월)</a></li>
          <li><a href="#">5·5 (화)</a></li>
          <li><a href="#">5·6 (수)</a></li>
          <li><a href="#">5·7 (목)</a></li>
        </ul>
        <button type="button">달력</button>
      </div>

      <div>
        <ul class="tag-list">
          <li><a href="#">#가</a></li>
          <li><a href="#">#가나</a></li>
          <li><a href="#">#가나다</a></li>
          <li><a href="#">#가나다라</a></li>
          <li><a href="#">#가나다라마</a></li>
        </ul>
      </div>

      <div class="u-list-none">
        <div>
          <p>리스트가 없습니다.</p>
          <span>블라블라</span>
        </div>
      </div>

      <div class="list-menu"> 
        <ul class="u-list-horizontal">
          <li><a href="#" class="active">BEST</a></li>
          <li><a href="#">3박4일</a></li>
          <li><a href="#">동남아</a></li>
          <li><a href="#">가족여행</a></li>
          <li><a href="#">우정여행</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/views/markup/common/MainHeader.vue'

export default {
  name: 'Main',
  components: {
    MainHeader,
  },
  data() {
    return {

    }
  }
}
</script>

<style>

</style>