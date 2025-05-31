---

# 🗂️ Class를 이용한 Tab (Design)

> 💡 이 글은 HTML, CSS, ES6를 이용해 만든 **개인 창작 코드**이다.  
> 사용 목적은 개인 참고용이며, 다소 부족한 부분이 있을 수 있다.

---

## 📌 목표

ES6의 **Class 문법**을 사용해 **재사용 가능한 탭 UI**를 구현해본다.  
코드는 단순하지만, **구조화**를 통해 유지보수성과 확장성을 높일 수 있다.

---

## 🧩 HTML 구조

```html
<div class="js-tabModule"><!-- 탭1 -->
    <div class="js-tabBtn">
        <button type="button" class="js-btn on">버튼1</button>
        <button type="button" class="js-btn">버튼2</button>
        <button type="button" class="js-btn">버튼3</button>
        <button type="button" class="js-btn">버튼4</button>
    </div>
    <div class="tabContents on">섹션1</div>
    <div class="tabContents">섹션2</div>
    <div class="tabContents">섹션3</div>
    <div class="tabContents">섹션4</div> 
</div>

<div class="js-tabModule"><!-- 탭2 -->
    <div class="js-tabBtn">
        <button type="button" class="js-btn on">버튼1</button>
        <button type="button" class="js-btn">버튼2</button>
        <button type="button" class="js-btn">버튼3</button>
        <button type="button" class="js-btn">버튼4</button>
    </div>
    <div class="tabContents on">섹션1</div>
    <div class="tabContents">섹션2</div>
    <div class="tabContents">섹션3</div>
    <div class="tabContents">섹션4</div> 
</div>
```

- `.js-tabModule` 단위로 **모듈화**해 구성한다.  
- 각 탭은 버튼 그룹과 콘텐츠 그룹으로 구성된다.  
- 여러 개의 탭을 동시에 사용해도 **독립적으로 작동**할 수 있다.

---

## 🎨 CSS 스타일

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.wrap {
    margin: 30px auto 0;
    width: 1200px;
}
.js-tabBtn {
    display: flex;
}
.js-tabBtn .js-btn {
    flex: 1;
    height: 40px;
    color: #000;
    font-size: 16px;
    font-weight: bold;
    border: 0;
    border-bottom: 2px solid #000;
    background: none;
}
.js-tabBtn .js-btn.on {
    border-top: 2px solid #000;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-bottom: 0;
}
.tabContents {
    display: none;
    height: 200px;
}
.tabContents.on {
    display: block;
    border-bottom: 2px solid #000;
    border-left: 2px solid #000;
    border-right: 2px solid #000;
    border-top: 0;
}
```

- `.on` 클래스 유무에 따라 **선택된 탭 스타일**을 구분한다.  
- 탭 버튼은 **가로 정렬(flex)**을 사용한다.  
- 선택된 탭 콘텐츠만 `.tabContents.on`으로 표시되도록 처리한다.

---

## ⚙️ JavaScript (ES6 Class 기반)

```javascript
const tabModule = document.querySelectorAll('.js-tabModule');

class Tab {
    constructor(target) {
        this.target = target;
        this.tabBtnArray = this.target.querySelectorAll('.js-btn');
        this.tabConArray = this.target.querySelectorAll(".tabContents");
    }

    tabFn() {
        const _this = this;

        this.tabBtnArray.forEach((el, index) => {
            el.addEventListener("click", () => {
                _this.tabBtnArray.forEach(el => el.classList.remove("on"));
                _this.tabBtnArray[index].classList.add("on");

                _this.tabConArray.forEach(el => el.classList.remove("on"));
                _this.tabConArray[index].classList.add("on");
            });
        });
    }
}

tabModule.forEach(el => {
    new Tab(el).tabFn();
});
```

- **Class 문법**을 사용해 탭을 컴포넌트화한다.  
- 각 탭 모듈마다 고유한 인스턴스를 생성하여 **독립적인 작동**이 가능하다.  
- `this` 접근을 위해 `_this` 보조 변수를 사용한다.  
- 클릭 이벤트 내에서 `index` 값을 활용해 탭 전환을 처리한다.

---

## ✅ 마무리

단일 탭만 사용할 경우에는 클래스화가 불필요할 수도 있지만,  
**협업 환경이나 다양한 컴포넌트가 필요한 프로젝트**에서는  
**모듈화와 캡슐화**가 유리하므로 클래스 패턴을 추천한다.

---

## 🔁 복붙용으로 활용 가능!

이 구조는 단순한 콘텐츠 탭부터 **데이터 연동 탭**이나  
**중첩 탭 구성**에도 응용 가능하므로  
잘 정리해서 재사용할 수 있도록 관리해두는 것이 좋다.
