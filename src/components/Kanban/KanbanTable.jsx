// src/components/Tablero.js
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import KanbanCard from './KanbanCard';

const KanbanTable = ({ cards, onDragEnd }) => {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tarjetas" direction="horizontal">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ display: 'flex' }}
          >
            {cards.map((tarjeta, index) => (
              <KanbanCard key={tarjeta.id} tarjeta={tarjeta} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default KanbanTable;
