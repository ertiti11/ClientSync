import  { useState } from "react";
import Board, { moveCard } from "@asseinfo/react-kanban";
import "@asseinfo/react-kanban/dist/styles.css";

export default function KanbanBoard() {
    const board = {
        columns: [
          {
            id: 1,
            title: "Backlog",
            backgroundColor: "#fff",
            cards: [
              {
                id: 1,
                title: "Card title 1",
                description: "Card content"
              },
              {
                id: 2,
                title: "Card title 2",
                description: "Card content"
              },
              {
                id: 3,
                title: "Card title 3",
                description: "Card content"
              },
                {
                    id: 4,
                    title: "Card title 4",
                    description: "Card content"
                },
                {
                    id: 5,
                    title: "Card title 5",
                    description: "Card content"
                },
                {
                    id: 6,
                    title: "Card title 6",
                    description: "Card content"
                },
                {
                    id: 7,
                    title: "Card title 7",
                    description: "Card content"
                },
                {
                    id: 8,
                    title: "Card title 8",
                    description: "Card content"
                },
                
            ]
          },
          {
            id: 2,
            title: "Doing",
            cards: [
              {
                id: 9,
                title: "Card title 9",
                description: "Card content"
              }
            ]
          },
          {
            id: 3,
            title: "Q&A",
            cards: [
              {
                id: 10,
                title: "Card title 10",
                description: "Card content"
              },
              {
                id: 11,
                title: "Card title 11",
                description: "Card content"
              }
            ]
          },
          {
            id: 4,
            title: "Production",
            cards: [
              {
                id: 12,
                title: "Card title 12",
                description: "Card content"
              },
              {
                id: 13,
                title: "Card title 13",
                description: "Card content"
              }
            ]
          }
        ]
      };
    // You need to control the state yourself.
    const [controlledBoard, setBoard] = useState(board);
  
    function handleCardMove(_card, source, destination) {
      const updatedBoard = moveCard(controlledBoard, source, destination);
      setBoard(updatedBoard);
    }
  
    return (
      <Board onCardDragEnd={handleCardMove} disableColumnDrag>
        {controlledBoard}
      </Board>
    );
  }
