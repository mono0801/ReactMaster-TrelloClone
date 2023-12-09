// To Do 리스트 컴포넌트
import { useForm } from "react-hook-form";
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import DraggableCard from "./DraggableCard";
import { ITodo, toDoState } from "../atom";
import { useSetRecoilState } from "recoil";

const Wrapper = styled.div`
    width: 300px;
    min-height: 300px;
    padding: 10px 0px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
`;

interface IAreaProps {
    isDraggingOver: boolean;
    draggingFromThisWith: boolean;
}

const Area = styled.div<IAreaProps>`
    padding: 10px;
    border-radius: 5px;
    background-color: ${(props) =>
        props.isDraggingOver
            ? "#b2bec3"
            : props.draggingFromThisWith
            ? "#dfe6e9"
            : "transparent"};
    flex-grow: 1;
    transition: background-color 0.2s ease-in-out;
`;

const Form = styled.form`
    width: 100%;
    input {
        width: 100%;
    }
`;

const Title = styled.h2`
    text-align: center;
    font-weight: 600;
    margin-top: -10px;
    margin-bottom: 10px;
    font-size: 18px;
`;

interface IBoardProps {
    toDos: ITodo[];
    boardId: string;
}

interface IForm {
    toDo: string;
}

function Board({ toDos, boardId }: IBoardProps) {
    const setToDos = useSetRecoilState(toDoState);
    // useRef() == document.getelementbyId와 역할이 같다 : 해당 HTML 태그를 가져온다
    const { register, setValue, handleSubmit } = useForm<IForm>();
    const onValid = ({ toDo }: IForm) => {
        const newToDo = {
            id: Date.now(),
            text: toDo,
        };

        setToDos((allBoards) => {
            return {
                // 기존에 있던 To Do 리스트를 복사
                ...allBoards,
                // 해당 Board에 새로 추가된 To Do를 추가
                [boardId]: [...allBoards[boardId], newToDo],
            };
        });
        setValue("toDo", "");
    };

    return (
        <Wrapper>
            <Title>{boardId}</Title>
            <Form onSubmit={handleSubmit(onValid)}>
                <input
                    {...register("toDo", { required: true })}
                    type={"text"}
                    placeholder={`Add task ${boardId}`}
                />
            </Form>
            <Droppable droppableId={boardId}>
                {(magic, info) => (
                    <Area
                        // isDraggingOver => 해당 Droppable위로 Drag가 되면 true
                        isDraggingOver={info.isDraggingOver}
                        // draggingFromThisWith => 해당 Droppable을 떠나면 true
                        draggingFromThisWith={Boolean(
                            info.draggingFromThisWith
                        )}
                        ref={magic.innerRef}
                        {...magic.droppableProps}
                    >
                        {toDos.map((toDo, index) => (
                            <DraggableCard
                                // key와 draggableId가 같아야한다
                                key={toDo.id}
                                index={index}
                                toDoId={toDo.id}
                                toDoText={toDo.text}
                            />
                        ))}
                        {/* 리스트 내의 원소를 드래그 중일 때 리스트 전체 크기 고정한다 */}
                        {magic.placeholder}
                    </Area>
                )}
            </Droppable>
        </Wrapper>
        // <Droppable>과 <Draggable>의 child에는 함수가 들어가야한다
    );
}

export default Board;
