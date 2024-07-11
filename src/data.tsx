export const styles: Record<string, React.CSSProperties> = {
  baseStyle: {
    width: "100vw",
    height: "100vh",
    position: "relative",
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
    backgroundImage: "",
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
export const idAndChildren = {
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
export const styleObjMaker = () => {
  const styleMap: Record<string, React.CSSProperties> = {};
  const addStyles = (
    id: string,
    children: React.CSSProperties | object | number
  ) => {
    const styleKey = `${id}Style`;
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
