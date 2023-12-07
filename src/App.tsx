import React from "react";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atom";
import Board from "./Components/Board";

const Wrapper = styled.div`
    max-width: 680px;
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
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
`;

function App() {
    const [toDos, setToDos] = useRecoilState(toDoState);

    const onDragEnd = ({ draggableId, destination, source }: DropResult) => {
        if (!destination) return;
        // setToDos((oldToDos) => {
        //     const toDosCopy = [...oldToDos];

        //     toDosCopy.splice(source.index, 1);
        //     toDosCopy.splice(destination?.index, 0, draggableId);
        //     console.log(toDosCopy);
        //     return toDosCopy;
        // });
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
