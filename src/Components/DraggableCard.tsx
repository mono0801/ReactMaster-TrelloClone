// To Do 리스트안에 들어갈 to do 컴포넌트
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { styled } from "styled-components";

interface ICardProps {
    isDragging: boolean;
}

const Card = styled.div<ICardProps>`
    padding: 10px 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    background-color: ${(props) =>
        props.isDragging ? "#bcffff" : props.theme.cardColor};
    box-shadow: ${(props) =>
        props.isDragging ? "0px 2px 10px rgba(0, 0, 0, 0.5)" : "none"};
    transition: background-color 0.2s ease-in-out;
`;

interface IDraggableCardProps {
    toDo: string;
    index: number;
}

function DraggableCard({ toDo, index }: IDraggableCardProps) {
    return (
        <Draggable
            // key와 draggableId가 같아야한다
            key={toDo}
            draggableId={toDo}
            index={index}
        >
            {(provided, snapshot) => (
                <Card
                    isDragging={snapshot.isDragging}
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    {toDo}
                </Card>
            )}
        </Draggable>
    );
}

// state가 바뀐 prop만 재렌더링되게 하는 기능
export default React.memo(DraggableCard);
