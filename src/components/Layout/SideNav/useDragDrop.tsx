import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const ItemType = "MENU_ITEM";

export const useDragDrop = (index: number, moveItem: (dragIndex: number, hoverIndex: number) => void) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { index: number }) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return ref;
};
