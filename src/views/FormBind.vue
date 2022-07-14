<template>
  <p>
    Form 요소들은 v-model 디렉티브로 양방향 데이터 바인딩을 할 수 있다.
    v-model을 사용 할 때 주의 할 점은 내부적으로 서로 다른 속성을 사용하고
    서로 다른 입력 요소에 대해 서로 다른 이벤트를 전송 한다는 것이다.<br><br>
    참고로 v-model은 모든 form 엘리먼트의 초기 value와 checked, selected 속성을 무시한다.
    항상 vue 인스턴스 데이터를 원본 소스로 취급한다. 따라서 data 옵션에서 초기값을 선언 해주어야 한다.
  </p>

  <h2>1. Input Type of Text</h2>
  <p>
    input type="text"는 v-model을 사용 하면, 바인딩 된 데이터가 input의 value 값으로
    세팅되어서 사용자가 직접 input에 입력하여도, 코드 내에서 직접 데이터를 변경해도
    동일하게 데이터가 바인딩 되는 것을 볼 수 있다.<br><br>
    (참고: textarea tag도 동일한 방식으로 동작한다.)
  </p>
  <input
    v-model="valueModel"
    type="text"
  >
  <span> value: {{ valueModel }}</span>
  <br><br>

  <h2>2. Input Type of Number</h2>
  <p>타입이 number인 경우에는 "v-model.number"를 사용 하여 바인딩 할 수 있다.</p>
  <input
    v-model.number="valueNumber"
    type="number"
  >
  <span> value: {{ valueNumber }}</span>
  <br><br>

  <h2>3. Select</h2>
  <p>input type="text"와 동일하게 value 값을 바인딩 한다.</p>
  <select v-model="city">
    <option value="서울">
      서울
    </option>
    <option value="경기">
      경기
    </option>
    <option value="부산">
      부산
    </option>
  </select>
  <span> value: {{ city }}</span>

  <h2>4. Checkbox</h2>
  <p>
    checkbox는 위의 요소들과 달리 내부적으로 checked 속성을 사용한다.
    따라서 checkbox의 value값을 바인딩 하려면 v-model이 아닌 v-bind:value를 사용 해야 한다.<br><br>
    checkbox가 하나일 때는 true, false 값으로 data를 바인딩 해주면 되지만 checkbox가 여러개 일 경우에는
    "[]" 빈 배열을 data에 넣어준다.<br><br>
    <b>checkbox 1개</b>: data(){return {checked: true}}<br>
    <b>checkbox 여러개</b>: data(){return {checked: []}}<br><br>
    checkbox의 기본 value값을 설정해 줄 수도 있다. checked 되었을때는 'true-value', checked가 해제되었을때는
    'false-value'를 넣어준다. <br><br>
    <b>기본 value 값 세팅</b>: v-model="checked" type="checkbox" true-value="yes" false-value="no"
  </p>
  <div>
    <label>
      <input
        v-model="checked"
        type="checkbox"
        value="01"
      >
      01
    </label>
    <label>
      <input
        v-model="checked"
        type="checkbox"
        value="02"
      >
      02
    </label>
    <label>
      <input
        v-model="checked"
        type="checkbox"
        value="03"
      >
      03
    </label>
    <span>체크한 것: {{ checked }} </span>
  </div>

  <h2>5. Radio</h2>
  <p>Radio도 checkbox와 마찬가지로 동일하게 사용 가능하다.</p>
  <div>
    <label>
      <input
        v-model="radio.picked"
        type="radio"
        value="01"
      >
      01
    </label>
    <label>
      <input
        v-model="radio.picked"
        type="radio"
        value="02"
      >
      02
    </label>
    <label>
      <input
        v-model="radio.picked"
        type="radio"
        value="03"
      >
      03
    </label>
    <span>체크한 것: {{ radio.picked }} </span>
  </div>
</template>

<script>

export default {
  data () {
    return {
      valueModel: 'South',
      valueNumber: 3,
      city: '경기',
      checked: ['01'],
      radio: {
        picked: '01'
        // radioValue1: '01',
        // radioValue2: '02',
        // radioValue3: '03'
      }
    }
  }
}
</script>
