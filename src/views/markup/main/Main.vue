<template>
  <div>
    <main-header></main-header>
    <div>
      <ul class="u_list_horizontal recommend">
        <li v-for="list in 7" :key="list">
          <a href="#" style="display:inline-block;width:100px;">{{ list }}</a>
        </li>
      </ul>
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