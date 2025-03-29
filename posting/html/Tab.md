Class를 이용한 Tab (Design)
=========================

#### <mark>*이 글은 HTML, CSS, ES6를 이용하여 만들었고, 본인이 사용하기 위한 개인창작 코드입니다.<br>부족한 점이 있을 수 있으니 참고 부탁드립니다.*</mark> 

## 오늘은 ES6 Class문법을 사용하여 탭을 만들어 보려고 한다.    

>#### 내가 보고있는 홈페이지의 스크롤 위치를 알려주고 있는 하나의 표시(디자인)라고 보면 될 거 같다.<br><br>코드는 상당히 단순하다.

**HTML**
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
>##### *탭의 디자인을 구성할 태그들을 마크업 해놓는다.*

**CSS**
```css
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}
.wrap{
    margin:30px auto 0;
    width:1200px;
}
.js-tabBtn{
    display:flex;
}
.js-tabBtn .js-btn{
    flex:1;
    height:40px;
    color:#000;
    font-size:16px;
    font-weight:bold;
    border:0;
    border-bottom:2px solid #000;
    background:none;
}
.js-tabBtn .js-btn.on{
    border-top:2px solid #000;
    border-left:2px solid #000;
    border-right:2px solid #000;
    border-bottom:0;
}
.tabContents{
    display:none;
    height:200px;
}
.tabContents.on{
    display:block;
    border-bottom:2px solid #000;
    border-left:2px solid #000;
    border-right:2px solid #000;
    border-top:0;
}
```
>##### *CSS로 탭의 디자인을 만들어준다. CSS속성은 본인의 선택이다.*


**Javascript**
```javascript
const tabModule = document.querySelectorAll('.js-tabModule');

class tab {
    constructor(target) {
        this.target = target;
        this.tabBtnArray = this.target.querySelectorAll('.js-btn');
        this.tabConArray = this.target.querySelectorAll(".tabContents");
    }
    
    tabFn() {
        const _this = this;                            

            this.tabBtnArray.forEach((el,inedx) =>{
            el.addEventListener("click" , ()=> {
                _this.tabBtnArray.forEach(el => el.classList.remove("on"));                
                _this.tabBtnArray[index].classList.add("on");     

                _this.tabConArray.forEach(el => el.classList.remove("on"));
                _this.tabConArray[index].classList.add("on");
            })
        })
    }
}
                
tabModule.forEach(el =>{
    new tab(el).tabFn();
})
```
>##### *보면 코드가 정말 단순하다.*
>##### *ES6기술인 Class를 활용하여 생성자 함수를 생성하여 탭의 디자인이 여러개여도 각각 동작하게끔 만들었다.*

#### 하나의 탭만 필요로 하고, 추후 데이터코드가 붙지 않는다면 속성값을 잘 활용하여 일일히 지정해줘도 무방하겠지만 협업을 하게 되거나 프로젝트를 진행하다보면 그런일이 거의 없다. 데이터를 불러와서 탭에 적용할 수 도 있고 수많은 탭을 필요로 하거나 탭안에 탭이 들어갈 수 도 있다. 그런일이 있을 수 있기때문에 모듈 혹은 캡슐화가 중요할 거 같다.

#### 확인해보니, 잘 작동된다.<br>추후 필요한 디자인에 잘 복붙해서 사용해야겠다.






