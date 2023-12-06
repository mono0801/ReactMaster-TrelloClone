import React, { HTMLInputTypeAttribute } from "react";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { useRecoilState, useRecoilValue } from "recoil";

function App() {
    const onDragEnd = () => {};
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <div>
                {/* <Droppable>과 <Draggable>의 child에는 함수가 들어가야한다 */}
                <Droppable droppableId="one">
                    {(imsi) => (
                        <ul
                            style={{
                                width: "max-content",
                                flex: "50%",
                                marginBottom: 10,
                            }}
                            ref={imsi.innerRef}
                            {...imsi.droppableProps}
                        >
                            <Draggable draggableId="first" index={0}>
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                    >
                                        <span
                                            style={{
                                                fontSize: "400%",
                                            }}
                                            {...magic.dragHandleProps}
                                        >
                                            💥
                                        </span>
                                        one
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="Second" index={1}>
                                {(magic) => (
                                    <li
                                        ref={magic.innerRef}
                                        {...magic.draggableProps}
                                        {...magic.dragHandleProps}
                                    >
                                        <span
                                            style={{
                                                fontSize: "400%",
                                            }}
                                        >
                                            Two
                                        </span>
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="Third" index={2}>
                                {(temp) => (
                                    <li
                                        ref={temp.innerRef}
                                        {...temp.draggableProps}
                                        {...temp.dragHandleProps}
                                    >
                                        <div
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                                backgroundColor: "wheat",
                                            }}
                                        ></div>
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="Forth" index={3}>
                                {(temp) => (
                                    <li
                                        ref={temp.innerRef}
                                        {...temp.draggableProps}
                                        {...temp.dragHandleProps}
                                    >
                                        <div
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                                backgroundColor: "teal",
                                            }}
                                        ></div>
                                    </li>
                                )}
                            </Draggable>
                            <Draggable draggableId="Fifth" index={4}>
                                {(temp) => (
                                    <li
                                        ref={temp.innerRef}
                                        {...temp.draggableProps}
                                        {...temp.dragHandleProps}
                                    >
                                        <div
                                            style={{
                                                width: "150px",
                                                height: "150px",
                                                backgroundColor: "tomato",
                                            }}
                                        ></div>
                                    </li>
                                )}
                            </Draggable>
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
    );
}

export default App;
