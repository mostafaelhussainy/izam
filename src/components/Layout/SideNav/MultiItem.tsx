import { Accordion, AccordionDetails, AccordionSummary, IconButton, Typography } from "@mui/material";
import DragButton from "../../../assets/dragNdrop.svg";
import AccordionArrowDown from "../../../assets/arrow-up-outlined.svg";
import { useDragDrop } from "./useDragDrop";
import { useRef } from "react";
import { useDrag, useDrop } from "react-dnd";

const accordionStyles = {
  borderRadius: "8px",
  boxShadow: "none !important",
  "&::before": { content: "unset" },
  "& .MuiAccordionSummary-root": { background: "#F7F7F7" },
  "& .MuiAccordionSummary-root p": { fontSize: "24px", fontWeight: 500, lineHeight: "normal" },
  "& .MuiAccordionDetails-root": { display: "flex", flexDirection: "column", rowGap: "15px" },
};

const ItemType = "MENU_INNER_ITEM";

export const MultiItem = ({
  canEdit,
  title,
  items,
  handleChange,
  expanded,
  index,
  moveItem,
  moveInnerItem,
}: {
  canEdit: boolean;
  title: string;
  items: string[];
  handleChange: (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => void;
  expanded: string | false;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
  moveInnerItem: (parentIndex: number, dragIndex: number, hoverIndex: number) => void;
}) => {
  const ref = useDragDrop(index, moveItem);

  return (
    <Accordion ref={ref} sx={accordionStyles} expanded={expanded === title} onChange={handleChange(title)}>
      <AccordionSummary expandIcon={<img src={AccordionArrowDown} alt="Expand" />}>
        <Typography>
          {canEdit && (
            <IconButton>
              <img src={DragButton} style={{ marginRight: "10px" }} alt="Drag" />
            </IconButton>
          )}
          {title}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        {items.map((item, idx) => (
          <InnerItem
            key={idx}
            canEdit={canEdit}
            item={item}
            parentIndex={index}
            index={idx}
            moveInnerItem={moveInnerItem}
          />
        ))}
      </AccordionDetails>
    </Accordion>
  );
};

const InnerItem = ({
  canEdit,
  item,
  parentIndex,
  index,
  moveInnerItem,
}: {
  canEdit: boolean;
  item: string;
  parentIndex: number;
  index: number;
  moveInnerItem: (parentIndex: number, dragIndex: number, hoverIndex: number) => void;
}) => {
  const ref = useInnerDragDrop(parentIndex, index, moveInnerItem);

  return (
    <Typography
      ref={ref}
      sx={{ paddingLeft: "20px", display: "flex", alignItems: "center", cursor: canEdit ? "move" : "default" }}
    >
      {canEdit && (
        <IconButton>
          <img src={DragButton} style={{ marginRight: "10px" }} alt="Drag" />
        </IconButton>
      )}
      {item}
    </Typography>
  );
};

const useInnerDragDrop = (
  parentIndex: number,
  index: number,
  moveInnerItem: (parentIndex: number, dragIndex: number, hoverIndex: number) => void
) => {
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: ItemType,
    hover: (draggedItem: { parentIndex: number; index: number }) => {
      if (draggedItem.index !== index && draggedItem.parentIndex === parentIndex) {
        moveInnerItem(parentIndex, draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  // @ts-ignore
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { parentIndex, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));
  return ref;
};
