import React, { HTMLInputTypeAttribute } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";

const Wrapper = styled.div`
    max-width: 480px;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Boards = styled.div`
    width: 100%;
    min-height: 200px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
    padding: 20px 10px;
    padding-top: 30px;
    background-color: ${(props) => props.theme.boardColor};
    border-radius: 5px;
`;

const Card = styled.div`
    padding: 10px 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: ${(props) => props.theme.cardColor};
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

function App() {
    const onDragEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {/* <Droppable>과 <Draggable>의 child에는 함수가 들어가야한다 */}
                    <Droppable droppableId="one">
                        {(magic) => (
                            <Board
                                ref={magic.innerRef}
                                {...magic.droppableProps}
                            >
                                {toDos.map((toDo, index) => (
                                    <Draggable draggableId={toDo} index={index}>
                                        {(magic) => (
                                            <Card
                                                key={index}
                                                ref={magic.innerRef}
                                                {...magic.draggableProps}
                                                {...magic.dragHandleProps}
                                            >
                                                {toDo}
                                            </Card>
                                        )}
                                    </Draggable>
                                ))}
                                {/* 리스트 내의 원소를 드래그 중일 때 리스트 전체 크기 고정한다 */}
                                {magic.placeholder}
                            </Board>
                        )}
                    </Droppable>
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
