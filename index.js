const example = document.getElementById("example");

/* <div id="root"></div>
<div id="Card-Container1">
  <div id="Card-text"></div>
  <div id="Card-title"></div>
  <div id="Card-line"></div>
</div>
<div id="Card-Container2">
  <div id="Card-text"></div>
  <div id="Card-title"></div>
  <div id="Card-line"></div>
</div>
<div id="vertical">
  <div id="Vertical-dot"></div>
  <div id="Vertical-line"></div>
</div>
<div id="Aroow-dot"></div> */
const indexStyle = {
  width: "100vw",
  height: "100vh",
  absolute: "absolute",
  relative: "relative",
  textAlign: "justify",
  boxSizing: "border-box",
};
const idAndChildren = {
  root: 0,
  CardContainerOne: {
    CardTextOne: 0,
    CardTitleOne: 0,
    CardLineOne: 0,
  },
  CardContaineTwo: {
    CardTextTwo: 0,
    CardTitleTwo: 0,
    CardLineTwo: 0,
  },
  vertical: {
    VerticalDot: 0,
    VerticalLine: 0,
  },
  ArrowDot: 0,
};
const AllMaker = () => {
  //divMaker 호출부
  //idAndChildren을 사용해 id와 children 값을 divMaker에 할당
  const fragment = document.createDocumentFragment();
  // DOM에 직접적으로 삽입되지 않는 가상의 노드 객체를 생성
  //한 번에 여러 요소를 추가할 수 있어 DOM 조작이 효율적
  for (const [id, children] of Object.entries(idAndChildren)) {
    //Object.entries()를 사용해 객체를 배열로 변환,
    //변환한 값을 for...of로 배열을 순회하며 divMaker을 호풀해 fragment에 추가
    const div = divMaker(id, children);
    fragment.appendChild(div);
  }
  document.body.appendChild(fragment);
};
const divMaker = (id, children) => {
  //전달받은 id 값과 children 값을 통해 div를 만든다.
  //children이 0이라면 자식 요소를 만들지 않고 div만 만들고
  //value가 객체라면 그 객체 안의 key 값을 조회해 자식 요소로 append 한다.
  const div = document.createElement("div");
  div.id = id;

  if (typeof children === "object") {
    for (const [childId, grandChildren] of Object.entries(children)) {
      //객체의 모든 속성과 값을 배열로 반환 (key, value)
      //중첩된 배열 탐색
      const childDiv = divMaker(childId, grandChildren);
      div.appendChild(childDiv);
    }
  }

  return div;
};
AllMaker();
