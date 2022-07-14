<template>
  <p>attribute 바인딩은 v-bind: 디렉티브를 사용 하는데, v-bind는 생략하고 :(콜론)만 사용할 수 도 있다.</p>
  <h2>1. Img attr bind</h2>
  <img
    :src="ImgSrc"
    :alt="alt"
  >
  <h2>2. Button attr bind</h2>
  <p>data 조건에 따라서 button의 활성 비활성을 세팅 해줄 수 있다.</p>
  <input
    v-model="textValue"
    type="text"
  >
  <button
    type="button"
    :disabled="textValue === ''"
  >
    Click
  </button>
</template>

<script>
export default {
  data () {
    return {
      ImgSrc: 'https://kr.vuejs.org/images/logo.png',
      alt: 'vue logo',
      textValue: ''
    }
  }
}
</script>
