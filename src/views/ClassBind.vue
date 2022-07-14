<template>
  <p>
    클래스 바인딩에서 특이한 점은 기존 html에서 사용하는 class와 데이터바인딩을 하는
    클래스를 따로 사용 할 수 있다는 것이다. 보통 다른 속성들은 데이터 바인딩시 기존의
    속성 하나만을 이용 할 수 있지만, 클래스는 추가적으로 사용이 가능 하다.
  </p>
  <div
    class="container"
    :class="{'active':isActive, 'text-red': hasError}"
  >
    Class Binding
  </div>
  <button
    type="button"
    @click="isActive ? isActive = false : isActive = true"
  >
  Click reverse
  </button>
    <button
      type="button"
      @click="hasError ? hasError = false : hasError = true"
    >
      Error
    </button>
</template>
<script>
export default {
  data () {
    return {
      isActive: true,
      hasError: false
    }
  }

}
</script>
<style scoped>
.container {
  margin: 0 auto;
  line-height:200px;
  width: 200px;
  height:200px;
  background-color: blue;
  color: #fff;
}
.container.active {
  background-color: yellow;
  font-weight: bold;
  color: #000;
}
.container.text-red {
  color: red;
}
</style>
