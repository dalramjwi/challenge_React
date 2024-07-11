const example = document.getElementById("example");
const styles = {
  baseStyle: {
    width: "100vw",
    height: "100vh",
    absolute: "absolute",
    relative: "relative",
    textAlign: "justify",
    boxSizing: "border-box",
    fontFamily: "Inter",
    fontStyle: "normal",
    fontWeight: "400",
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
  },
  rootStyle: {
    bakgroundImage: "",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  CardContainerOneStyle: {
    background:
      "linear-gradient(90deg, rgba(180, 165, 122, 0.3) 0%, rgba(214, 195, 149, 0.3) 100%)",
    boxShadow: "1px 4px 15.6px -5px #574c31",
    borderRadius: "31px",
  },
  CardTextOneStyle: {
    color: "#23201a",
    left: "19.83%",
    right: "2.97%",
    top: "38.6%",
    bottom: "4.52%",
    fontSize: "12px",
    lineHeight: "15px",
  },
  CardTitleOneStyle: {
    fontSize: "64px",
    lineHeight: "77px",
    color: "#23201a",
    left: "13.79%",
    right: "45.4%",
    top: "21.15%",
    bottom: "63.04%",
  },
  CardLineOneStyle: {
    left: "54.98%",
    right: "2.97%",
    top: "24.23%",
    bottom: "75.36%",
    background:
      "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
  },
  CardContainerTwoStyle: {
    background:
      "linear-gradient(90deg, rgba(180, 165, 122, 0.3) 0%, rgba(214, 195, 149, 0.3) 100%)",
    boxShadow: "1px 4px 15.6px -5px #574c31",
    backdropFilter: "blur(29px)",
    borderRadius: "31px",
  },
  ArrowDotStyle: {
    left: "65.57%",
    right: "33.23%",
    top: "78.7%",
    bottom: "17.59%",
    background: "#ffb14f",
    transform: "rotate(-90deg)",
  },
  VerticalStyle: {
    width: "10px",
    height: "532px",
    left: "1699px",
    top: "311px",
  },
  VerticalLineStyle: {
    left: "88.85%",
    right: "-11.72%",
    top: "28.8%",
    bottom: "71.02%",
    background:
      "linear-gradient(90deg, rgba(210, 143, 67, 0.5) 0%, rgba(80, 47, 10, 0.5) 100%)",
    transform: "rotate(90deg)",
  },
  VerticalDotStyle: {
    width: "10px",
    height: "10px",
    left: "1699px",
    top: "833px",
    background: "#977240",
    borderRadius: "5px",
  },
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
const styleObjMaker = () => {
  //obj와 stlye 값을 매칭시켜주는 객체를 만드는 함수.
  //idAndChildren의 key와 styles 객체의 key가 동일하다면, idAndChildren key의
  //value를 style의 value로 할당해 객체를 만든다.
  const styleMap = {};
  const addStyles = (id, children) => {
    const styleKey = `${id}Style`;
    // styles에서 해당 스타일이 존재하면 가져옴
    if (styles[styleKey]) {
      styleMap[id] = styles[styleKey];
      //styleMap의 id에 해당되는 style 객체 값이 StyleMap 객체에 할당
    }

    if (typeof children === "object") {
      for (const [childId, grandChildren] of Object.entries(children)) {
        addStyles(childId, grandChildren);
        // 재귀 호출로 자식 요소의 스타일도 추가
      }
    }
  };

  for (const [id, children] of Object.entries(idAndChildren)) {
    //idAndChildren의 key와 value를 배열로 변환해, addStyles의 매개변수로 작용
    addStyles(id, children);
  }

  return styleMap;
};
const styleAttach = () => {
  //styleObjMaker의 값인 객체를 기반으로, style을 할당한다.
};
AllMaker();
