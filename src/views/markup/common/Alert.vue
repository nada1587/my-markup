<template>

    <div class="u-alert">
      <div class="pop-container">
        <!-- <div class="pop-header">
          <h1>알럿</h1>
        </div> -->
        <div class="pop-contents">
          <ul>
            <li v-for="list in 10" :key="list">{{ list }}</li>
          </ul>
        </div>
        <div class="pop-btn-area">
          <div><button type="button">추천 건너뛰기</button></div>
          <div><button type="button">추천받기</button></div>
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