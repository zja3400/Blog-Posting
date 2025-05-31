---

# 📐 CSS 방법론 - BEM 알아보기

> 💡 HTML/CSS 작업 중 클래스명이 길고 특이하게 구성된 걸 본 적 있다면,  
그건 바로 **BEM(Block, Element, Modifier)** 방식일 가능성이 높다!

---

## 📌 BEM이란?

> **BEM = Block / Element / Modifier**  
→ CSS 클래스 네이밍을 **구조적으로 명확하게** 하기 위한 방법론

### 예시:

```html
<div class="block-box">
  <div class="block-box__header">
    <h2 class="block-box__header__title">Title</h2>
  </div>
</div>
```

이 코드에서의 의미:
- `block-box`: **Block**
- `block-box__header`: **Element**
- `block-box__header__title`: **Element의 하위 요소**
- `block-box__header__title--on`: **Modifier**

---

## ⚙️ BEM의 기본 규칙

| 구분 | 설명 | 예시 |
|------|------|------|
| **Block** | 재사용 가능한 독립 컴포넌트 | `.form`, `.modal`, `.button` |
| **Element** | Block의 하위 구성요소 | `.form__input`, `.modal__title` |
| **Modifier** | Block/Element의 상태나 변형 | `.button--primary`, `.modal__title--highlight` |

---

## ✅ 각각 쉽게 이해해보기

### 🔷 Block이란?
> 📦 독립적으로 존재할 수 있는 **기능 단위**

예: 카드, 버튼, 폼 등  
→ 어디서든 재사용 가능한 **큰 단위**

---

### 🔹 Element란?
> 🔧 Block을 구성하는 **내부 구성요소**

→ 오직 자기 Block 안에서만 의미가 있음  
→ Block 밖으로 나가면 의미 없음

❌ 잘못된 구조:

```html
<div class="block-box"></div>
<div class="block-box__header"></div> <!-- ❗ Block 바깥에 존재 -->
```

✅ 올바른 구조:

```html
<div class="block-box">
  <div class="block-box__header"></div>
</div>
```

---

### 🟡 Modifier란?
> 🎚️ 상태(state)나 속성(property)을 표현

#### 📍 불리언 타입
```html
<h2 class="block-box__title--on">ON 상태</h2>
```

→ on/off, active/inactive 등 **참/거짓 상태**

#### 📍 키-값 타입
```html
<h2 class="block-box__title--color-red">빨간 텍스트</h2>
```

→ 속성 변경을 위한 **속성-값 형태**

---

## 🧵 너무 길어진 클래스명?

```html
<!-- 길어지기 쉬운 예시 -->
<h2 class="block-box__header__title--on"></h2>
<h2 class="block-box__header__title--color-red"></h2>
```

→ Element가 중첩되며 **가독성 저하** 발생

✅ 개선한 구조:

```html
<h2 class="block-box__title--on"></h2>
<h2 class="block-box__title--color-red"></h2>
```

→ 어차피 Element는 Block 안에 존재하므로,  
__header 같은 중간 구조는 **생략 가능**!

---

## 📊 BEM의 장점과 단점

### ✅ 장점

1. 마크업 구조 파악이 쉬움 (특히 큰 프로젝트에서 유리)
2. SCSS/SASS와 함께 쓸 때 구조적으로 코드가 더 깔끔해짐
3. 네이밍만으로도 구성 요소의 **역할을 추론** 가능

---

### ❌ 단점

1. 클래스명이 **너무 길어짐**
2. 마우스로 클래스명 복사할 때 불편 (특히 언더바 `__`가 포함된 경우)
3. **모든 상황에 BEM이 꼭 필요한 건 아님**

---

## 🧾 정리하자면?

```
Q. BEM 왜 쓰나요?
A. 마크업 구조를 명확하게 구분하고, CSS 유지보수를 쉽게 하기 위해요.

Q. 단점은요?
A. 클래스명이 길어져서 피로감이 생길 수 있어요.

Q. 꼭 써야 하나요?
A. 정답은 없어요. 프로젝트에 맞게 쓰는 게 제일 좋아요.
```

---

## 📎 문서참조

- [Battling BEM – Smashing Magazine](https://www.smashingmagazine.com/2016/06/battling-bem-extended-edition-common-problems-and-how-to-avoid-them/)
- [nykim.work: BEM CSS 방법론](https://nykim.work/15)

---