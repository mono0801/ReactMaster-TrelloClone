import "styled-components";

// styled-components의 테마 정의를 확장
declare module "styled-components" {
    export interface DefaultTheme {
        bgColor: "#3F8CF2";
        boardColor: "#DADFE9";
        cardColor: "white";
    }
}
