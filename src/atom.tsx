import { atom, selector } from "recoil";

interface ItoDoState {
    // list를 추가할 수 있으므로 이런식으로 표기
    [key: string]: string[];
}

// To Do를 저장
export const toDoState = atom<ItoDoState>({
    key: "toDo",
    default: {
        to_do: ["a", "b", "c", "d", "e", "f"],
        doing: ["1", "2", "3", "4", "5"],
        done: ["one", "Two", "Three", "Four"],
    },
});
