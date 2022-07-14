<template>
  <h1>데이터 바인딩 - row v-html</h1>
  <p>
    중괄호 두개를 이용해 html 태그 내에 삽입하는 변수는
    단순 스트링 혹은 숫자만 가능하다. html 태그를 element로 삽입 하기 위해서는
    v-html 디렉티브를 사용해야 한다.<br><br>
    <b>사용법</b>: html 태그에 attribute처럼 v-html 디렉티브를 추가해 준다.<br>
    <b>예시</b>: {{ Ex }}
  </p>
  <div
    class="title"
    v-html="htmlString"
  />
</template>

<script>
export default {
  data () {
    return {
      htmlString: '<span>This is Span tag.</span>',
      Ex: '<div v-html="htmlString"></div>'
    }
  }
}
</script>
<style scoped>
.title{
  font-weight:600;
  font-size:20px;
}
</style>
