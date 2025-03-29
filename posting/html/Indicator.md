ES6를 이용한 Indicator bar (Design)
=========================

#### <mark>*이 글은 HTML, CSS, ES6를 이용하여 만들었고, 본인이 사용하기 위한 개인창작 코드입니다.<br>부족한 점이 있을 수 있으니 참고 부탁드립니다.*</mark> 

## Indicator(인디케이터)가 뭔가요?    

>#### 내가 보고있는 홈페이지의 스크롤 위치를 알려주고 있는 하나의 표시(디자인)라고 보면 될 거 같다.<br><br>코드는 상당히 단순하다.

**HTML**
```html
<div class="indicator-bar"></div>
<div class="text">
    <p>높이값을 줄 수 있는 내용</p>
</div>
```
>##### *indicator-bar 라는 표시가 될 수 있는 요소를 생성 한 후, 스크롤을 할 수 있게끔 컨텐츠 요소를 집어넣었다.*

**CSS**
```css
.indicator-bar{
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: red;
    z-index: 9999;
}
.text{
    height: 2000px;
}
```
>##### *indicator-bar 가 있어야 할 위치를 position으로 잡아주고 z-index값을 어떠한 경우에도 덮어지지 않게끔 위치하게 한다.<br>(보통은 UI상 상단에 위치하는 경우가 많다. 간혹 하단에 위치하는 경우도 있긴한데, 상단에 위치해야 가시성이 좋아진다.)<br>bar라고 표현한 만큼 막대가 되어야 하니 높이값 3px을 주고, 스크롤시 width값이 0부터 움직여야 하니 0을 넣어준다.*


**Javascript**
```javascript
const indicator = document.querySelector('.indicator-bar');

window.addEventListener("scroll" , () => {
    const {scrollTop , clientHeight , scrollHeight} = document.documentElement;
    const scrolling = (scrollTop / (scrollHeight - clientHeight) * 100);

    indicator.style.width = `${scrolling}%`;
});
```
>##### *보면 코드가 정말 단순하다.*
>##### *ES6기술인 상수값으로 요소를 다 잡은 후,<br>구조분해할당 식인 {}를 사용하여 스크롤 시 높이값 / 컨텐츠의 내부 높이값 / 컨텐츠의 전체 높이값을 잡아준다.<br>그런 후, scrolling이라는 상수값에 스크롤 시 0~100까지 나올 수 있게끔 백분율로 계산 한 값을 넣어,<br>indicator에 템플릿 리터럴을 이용하여, scrolling값을 width% 넣어준다.*

#### 확인해보니, 잘 작동된다.<br>추후 필요한 디자인에 잘 복붙해서 사용해야겠다.
#### ES6에는 다양한 기능을 갖고 있는 표현방식들이 많다.<br>추후 싹 한번 정리하는 글을 올려보도록 하겠다.






