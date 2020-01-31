<template>
  <div>
    <main-header></main-header>
    <div>
      <ul class="u-list-horizontal recommend">
        <li v-for="list in 7" :key="list">
          <a href="#" style="display:inline-block;width:100px;">{{ list }}</a>
        </li>
      </ul>
    </div>

    <div>
      <ul class="flex-box">
        <li><a href="#">#가</a></li>
        <li><a href="#">#가나</a></li>
        <li><a href="#">#가나다</a></li>
        <li><a href="#">#가나다라</a></li>
        <li><a href="#">#가나다라마</a></li>
        <li><a href="#">#가나다라마바</a></li>
        <li><a href="#">#가나다라마바사</a></li>
        <li><a href="#">#가나다라마바사아</a></li>
        <li><a href="#">#가나다라마바사아자</a></li>
        <li><a href="#">#가나다라마바사아자차</a></li>
      </ul>
    </div>

    <div class="u-drag-box">
      <Container @drop="onDrop" drag-handle-selector=".column-drag-handle">
        <Draggable v-for="item in items" :key="item.id">
          <div class="draggable-item">
            <i>비행기</i>
            <div>
              <span class="column-drag-handle">&#x2630;</span>
              <div class="item-inner">
                {{item.data}}
              </div>
            </div>
          </div>
        </Draggable>
      </Container>
    </div>
  </div>
</template>

<script>
import MainHeader from '@/views/markup/common/MainHeader.vue'
import { Container, Draggable } from "vue-smooth-dnd";
import { applyDrag, generateItems } from "@/utils/helpers";

export default {
  name: 'Main',
  components: {
    Container,
    Draggable,
    MainHeader,
  },
  data() {
    return {
      items: generateItems(15, i => ({ id: i, data: "Draggable " + i }))
    };
  },
  methods: {
    onDrop(dropResult) {
      this.items = applyDrag(this.items, dropResult);
    }
  }
}
</script>

<style>

</style>