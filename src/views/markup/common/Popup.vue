<template>

    <div class="u-popup">
      <div class="max-fixed-width">
        <div class="pop-container">
          <button type="button" class="pop-close"><span>팝업닫기</span></button>
          <div class="pop-header is-line">
            <button type="button" class="pop-btn-back">뒤로</button>
            <h1>일정보기</h1>
            <button type="button" class="pop-btn-text active">저장</button>
          </div>
          <div class="pop-contents">
            <ul>
              <li v-for="list in 10" :key="list">{{ list }}</li>
            </ul>
            <div class="pop-btn-area">
              <div class="max-fixed-width">
                <div><button type="button">취소</button></div>
                <div><button type="button">확인</button></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>