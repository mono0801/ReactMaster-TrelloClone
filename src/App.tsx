import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import Board from "./Components/Board";

const Wrapper = styled.div`
    height: 100vh;
    width: 100vw;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Boards = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    gap: 10px;
`;

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);

    const onDragEnd = (info: DropResult) => {
        console.log(info);
        const { destination, draggableId, source } = info;

        // 변경하지 않을 경우
        if (!destination) return;
        // 같은 리스트 내에서 Drag가 일어날 경우
        else if (destination?.droppableId === source.droppableId) {
            setToDos((allBoards) => {
                const baoardCopy = [...allBoards[source.droppableId]];

                baoardCopy.splice(source.index, 1);
                baoardCopy.splice(destination?.index, 0, draggableId);

                return {
                    // 기존 리스트에 변경된 리스트를 붙임
                    ...allBoards,
                    [destination.droppableId]: baoardCopy,
                };
            });
        }
        // 다른 리스트끼리 Drag가 일어날 경우
        if (destination?.droppableId !== source.droppableId) {
            setToDos((allBoards) => {
                const sourceBoard = [...allBoards[source.droppableId]];
                const destinationBoard = [
                    ...allBoards[destination.droppableId],
                ];

                sourceBoard.splice(source.index, 1);
                destinationBoard.splice(destination?.index, 0, draggableId);

                return {
                    ...allBoards,
                    [source.droppableId]: sourceBoard,
                    [destination.droppableId]: destinationBoard,
                };
            });
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Wrapper>
                <Boards>
                    {Object.keys(toDos).map((boardId) => (
                        <Board
                            key={boardId}
                            boardId={boardId}
                            toDos={toDos[boardId]}
                        />
                    ))}
                </Boards>
            </Wrapper>
        </DragDropContext>
    );
}

export default App;
