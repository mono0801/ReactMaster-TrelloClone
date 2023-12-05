import { atom, selector } from "recoil";

export const minuteState = atom({
    key: "minutes",
    default: 0,
});

export const hourSelector = selector<number>({
    key: "hours",
    // state를 가져오기
    get: ({ get }) => {
        const minutes = get(minuteState);
        return minutes / 60;
    },
    // state를 수정
    set: ({ set }, newValue) => {
        const minutes = Number(newValue) * 60;
        set(minuteState, minutes);
    },
});
