import React from "react";
import { Popover, Whisper, Button, CustomProvider} from "rsuite";
import "rsuite/dist/rsuite.min.css";
function Filtering() {
  return (
    <div className="filter-section">
        <CustomProvider theme="dark">
        <Whisper
        placement="top"
        trigger="click"
        speaker={
          <Popover arrow={false}>
            This is a Popover 
          </Popover>
        }
      >
        <Button >Filter</Button>
      </Whisper>            
            
            </CustomProvider>;

    </div>


  );
}

export default Filtering;
