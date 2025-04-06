---

# 📊 ES6를 이용한 Indicator Bar (Design)

> 💡 이 글은 HTML, CSS, ES6를 이용해 만든 **개인 창작 코드**이다.  
> 사용 목적은 개인 참고용이며, 부족한 부분이 있을 수 있으니 참고 부탁한다.

---

## ❓ Indicator(인디케이터)란?

Indicator란 현재 내가 보고 있는 **페이지의 스크롤 위치**를 시각적으로 알려주는 **디자인 요소**이다.  
보통 웹페이지 상단에 **얇은 막대 형태로 표시**되며, 스크롤의 진행 정도를 알려주는 UX/UI 구성요소로 자주 쓰인다.

---

## 🧩 HTML 구조

```html
<div class="indicator-bar"></div>
<div class="text">
    <p>높이값을 줄 수 있는 내용</p>
</div>
```

- `indicator-bar`는 **스크롤 위치를 나타내는 막대 요소**이다.  
- `text` 영역은 스크롤이 발생할 수 있도록 **높이를 확보하는 콘텐츠 블럭**이다.

---

## 🎨 CSS 스타일

```css
.indicator-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 0;
    height: 3px;
    background: red;
    z-index: 9999;
}
.text {
    height: 2000px;
}
```

### ✔️ 설명
- `position: fixed` : 항상 **화면 상단에 고정**
- `height: 3px` : 얇은 막대 형태
- `width: 0` : 초기에는 0%로 시작
- `z-index: 9999` : 다른 요소보다 **항상 위에 표시**

> 🔺 Tip: 보통 인디케이터는 상단에 위치해야 **시인성**이 좋기 때문에 하단보다 선호된다.

---

## ⚙️ JavaScript (ES6)

```javascript
const indicator = document.querySelector('.indicator-bar');

window.addEventListener("scroll", () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    const scrolling = (scrollTop / (scrollHeight - clientHeight)) * 100;
    
    indicator.style.width = `${scrolling}%`;
});
```

### 📌 설명 포인트
- `const` : ES6에서 사용하는 **상수 선언 방식**
- 구조 분해 할당 `{}`을 사용해 `scrollTop`, `clientHeight`, `scrollHeight` 값을 한 줄로 추출
- `scrolling` : 현재 스크롤 비율을 **백분율(%)로 계산**
- `${scrolling}%` : 템플릿 리터럴을 활용해 **실시간으로 width 값 조정**

---

## ✅ 확인 결과

해당 코드로 구현한 인디케이터는 **스크롤 위치에 맞춰 자연스럽게 작동**함을 확인했다.  
향후 개인 프로젝트나 간단한 웹 UI에 **재사용하기에도 적절하다**고 판단된다.

---

## ✨ 마무리

ES6 문법을 이용하면 이렇게 **간결하면서도 직관적인 표현**이 가능하다.  
앞으로도 자주 쓰이는 ES6 패턴이나 기능들을 정리해서 공유할 예정이며,  
**기억해두면 다양한 상황에서 요긴하게 사용할 수 있을 것** 같다.

> 💻 개발이란 결국, **잘 만들고 잘 재활용하는 것!**

---