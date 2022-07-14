<template>
  <h1>Data Bind</h1>
  <p>
    vue는 angular와 마찬가지로 양방향 데이터 바인딩을 지원한다.
    양방향 데이터 바인딩은 모델(Model - viewModel)에서 정의한 데이터가
    모델(Model)과 뷰(view - 화면)중 어느 한쪽에 변경이 일어 났을 때 자동으로
    다른 한쪽에 자동으로 반영 해주는 것이다.<br><br>
    <b>사용법</b>: 기본 데이터 바인딩은 {{}} 중괄호 두개를 사용하여 html 코드 내에 원하는<br>
    위치에 변수를 넣어주면 된다.<br>
    <b>예시</b>: {{ Ex }}
  </p>
  <h2>{{ DataBind }}</h2>
</template>
<script>
export default {
  data () {
    return {
      DataBind: 'This is binded data',
      Ex: '<h2>{{DataBind}}</h2>'
    }
  }
}
</script>
