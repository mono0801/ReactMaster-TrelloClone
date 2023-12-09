import { atom, selector } from "recoil";

export interface ITodo {
    id: number;
    text: string;
}

interface ItoDoState {
    // list를 추가할 수 있으므로 이런식으로 표기
    [key: string]: ITodo[];
}

// To Do를 저장
export const toDoState = atom<ItoDoState>({
    key: "toDo",
    default: {
        "To Do": [],
        Doing: [],
        Done: [],
    },
});
