import { Box, IconButton, Typography } from "@mui/material";
import SettingsIcon from "../../../assets/settings.svg";
import { useState, useCallback } from "react";
import SaveIcon from "../../../assets/save.svg";
import CancelIcon from "../../../assets/cancel.svg";
import DragButton from "../../../assets/dragNdrop.svg";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useDragDrop } from "./useDragDrop";
import { MultiItem } from "./MultiItem";

const containerStyles = {
  display: "flex",
  flexDirection: "column",
  width: "440px",
  background: "#FFF",
};

const headerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "20px",
  borderBottom: "1px solid #E9E9E9",
};

const menuTitleStyles = {
  fontSize: "25px",
  fontWeight: 500,
  color: "#404040",
};

const sectionContainerStyles = {
  padding: "20px 10px",
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
};

const typographyItemStyles = {
  padding: "15px 25px",
  borderRadius: "8px",
  fontSize: "24px",
  fontStyle: "normal",
  fontWeight: 500,
  lineHeight: "normal",
  background: "#F7F7F7",
};

const SingleItem = ({
  canEdit,
  title,
  index,
  moveItem,
}: {
  canEdit: boolean;
  title: string;
  index: number;
  moveItem: (dragIndex: number, hoverIndex: number) => void;
}) => {
  const ref = useDragDrop(index, moveItem);

  return (
    <Typography
      ref={ref}
      sx={typographyItemStyles}
      style={{ display: "flex", alignItems: "center", cursor: canEdit ? "move" : "default" }}
    >
      {canEdit && (
        <IconButton>
          <img src={DragButton} style={{ marginRight: "10px" }} alt="Drag" />
        </IconButton>
      )}
      {title}
    </Typography>
  );
};

const SideNav = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  const [canEdit, setCanEdit] = useState<boolean>(false);
  const [itemsList, setItemsList] = useState([
    { title: "Dashboard" },
    { title: "Job application", items: ["John Doe", "James Bond"] },
    { title: "Qualifications" },
    { title: "About" },
    { title: "Contact" },
  ]);

  const [originalItemsList, setOriginalItemsList] = useState(itemsList);

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  const moveItem = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const updatedItems = [...itemsList];
      const [draggedItem] = updatedItems.splice(dragIndex, 1);
      updatedItems.splice(hoverIndex, 0, draggedItem);
      setItemsList(updatedItems);
    },
    [itemsList]
  );

  const moveInnerItem = useCallback(
    (parentIndex: number, dragIndex: number, hoverIndex: number) => {
      const updatedItems = [...itemsList];
      const innerItems = updatedItems[parentIndex].items ?? [];
      const [draggedItem] = innerItems.splice(dragIndex, 1);
      innerItems.splice(hoverIndex, 0, draggedItem);
      updatedItems[parentIndex] = { ...updatedItems[parentIndex], items: innerItems };
      setItemsList(updatedItems);
    },
    [itemsList]
  );

  const handleSave = () => {
    setOriginalItemsList(itemsList);
    setCanEdit(false);
  };

  const handleCancel = () => {
    setItemsList(originalItemsList);
    setCanEdit(false);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <Box sx={containerStyles}>
        <Box sx={headerStyles}>
          <Typography sx={menuTitleStyles}>Menu</Typography>
          {canEdit ? (
            <Box sx={{ display: "flex" }}>
              <IconButton onClick={handleSave}>
                <img src={SaveIcon} width="30" height="30" alt="Save" />
              </IconButton>
              <IconButton onClick={handleCancel}>
                <img src={CancelIcon} width="30" height="30" alt="Cancel" />
              </IconButton>
            </Box>
          ) : (
            <IconButton onClick={() => setCanEdit(true)}>
              <img src={SettingsIcon} alt="Settings" />
            </IconButton>
          )}
        </Box>

        <Box sx={sectionContainerStyles}>
          {itemsList.map((item, index) => {
            if (item.items) {
              return (
                <MultiItem
                  key={item.title}
                  canEdit={canEdit}
                  title={item.title}
                  items={item.items}
                  handleChange={handleChange}
                  expanded={expanded}
                  index={index}
                  moveItem={moveItem}
                  moveInnerItem={moveInnerItem}
                />
              );
            }
            return (
              <SingleItem key={item.title} canEdit={canEdit} title={item.title} index={index} moveItem={moveItem} />
            );
          })}
        </Box>
      </Box>
    </DndProvider>
  );
};

export default SideNav;
