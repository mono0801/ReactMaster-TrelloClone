// To Do 리스트 컴포넌트
import { Droppable } from "react-beautiful-dnd";
import { styled } from "styled-components";
import DraggableCard from "./DraggableCard";

const Wrapper = styled.div`
    padding: 20px 10px;
    padding-top: 30px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
`;

interface IBoardProps {
    toDos: string[];
    boardId: string;
}

function Board({ toDos, boardId }: IBoardProps) {
    return (
        // <Droppable>과 <Draggable>의 child에는 함수가 들어가야한다
        <Droppable droppableId={boardId}>
            {(magic) => (
                <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
                    <h1>{boardId}</h1>
                    {toDos.map((toDo, index) => (
                        <DraggableCard
                            // key와 draggableId가 같아야한다
                            key={toDo}
                            toDo={toDo}
                            index={index}
                        />
                    ))}
                    {/* 리스트 내의 원소를 드래그 중일 때 리스트 전체 크기 고정한다 */}
                    {magic.placeholder}
                </Wrapper>
            )}
        </Droppable>
    );
}

export default Board;
