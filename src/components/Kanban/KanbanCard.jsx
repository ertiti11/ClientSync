import { Draggable } from 'react-beautiful-dnd';

const KanbanCard = ({ Card, index }) => {
  return (
    <Draggable draggableId={Card.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            border: '1px solid #ddd',
            padding: '8px',
            margin: '8px',
            backgroundColor: '#fff',
          }}
        >
          {Card.contenido}
        </div>
      )}
    </Draggable>
  );
};

export default KanbanCard;
