import { useRecoilState } from "recoil";
import { hourSelector, minuteState } from "./studySetAtom";

function SelectorSetFn() {
    const [minutes, setMinutes] = useRecoilState(minuteState);
    // hours는 selcetor의 get을 return 값을 받아온다
    // setHours는 selector의 set을 부르는 함수가 된다
    const [hours, setHours] = useRecoilState(hourSelector);

    const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
        //문자열 앞에 +를 붙이면 숫자로 바뀐다
        setMinutes(+event.currentTarget.value);
    };
    const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
        //문자열 앞에 +를 붙이면 숫자로 바뀐다
        setHours(+event.currentTarget.value);
    };

    return (
        <div>
            <input
                value={minutes}
                onChange={onMinutesChange}
                type="number"
                placeholder="Minutes"
            />
            <input
                value={hours}
                onChange={onHoursChange}
                type="number"
                placeholder="Hours"
            />
        </div>
    );
}
