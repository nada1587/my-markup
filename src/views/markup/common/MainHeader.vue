<template>
  <header id="header">
      <!-- is-sub : 서브페이지 헤더 / is-search : 검색헤더 / 버튼이 없을경우 .header-left, .header-right 삭제 -->
    <div class="header-wrap is-sub">
      <div class="header-left">
        <button type="button" class="btn-back"><span>메뉴</span></button>
      </div>
      <div class="header-center">
        <!-- <h1>Trip note</h1> -->
        <h2>
          이것은 서브헤더<br><span>서브헤더 디테일</span>
        </h2>
        <!-- <h2 class="search-header">
          <a href="#"><span>여행지</span>를 검색합니다.</a>
        </h2> -->
      </div>
      <div class="header-right">
        <button type="button" class="btn-close"><span>닫기</span></button>
      </div>
    </div>
    <!-- 아래의 코드는 예제로 g-link 예제 때문에 주석처리하여 남긴다. -->
    <!-- <strong>
      <g-link to="/">{{ $static.metadata.siteName }}</g-link>
    </strong> -->
  </header>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {

    }
  }
}
</script>

<style>

</style>