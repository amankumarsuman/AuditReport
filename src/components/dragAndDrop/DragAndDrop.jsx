import { Paper } from "@mui/material";
import React, { useRef, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import styles from "./dragAndDrop.module.css";
function DragAndDrop() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const [list, setList] = useState([
    "Shopping in Barcelona",
    "Famous shopping Streets",
    "Shopping malls",
    "Markets",
    "Opening Time",
    "Sales Tax Refunds",
    "You may also be interested in",
    "Where to say",
  ]);

  const handleDragStart = (e, position) => {
    dragItem.current = position;
  };

  const handleDragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const handleDrop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  return (
    <>
      <Paper className={styles.mainContainer}>
        {list &&
          list.map((item, index) => (
            <Paper
              className={styles.paperDiv}
              onDragStart={(e) => handleDragStart(e, index)}
              onDragEnter={(e) => handleDragEnter(e, index)}
              onDragEnd={handleDrop}
              key={index}
              draggable
            >
              <div>{item}</div>
              <div>
                <AppsIcon />
              </div>
            </Paper>
          ))}
      </Paper>
    </>
  );
}

export default DragAndDrop;
