import React, { useEffect } from "react";
import "./ShowNotification.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { setNotification } from "../../Store/NotificationSlice";

const ShowNotification = () => {
  const Notification = useSelector((state) => state.Notification.Notification);
  const dispatch = useDispatch();

  useEffect(() => {
    const timeout = setTimeout(() => {
        dispatch(setNotification());
    }, 2000); 
    return () => clearTimeout(timeout);
  }); 

  return (
    <>
  
      {Notification.length !== 0 && (
        <>
        
          <label>
            <input type="checkbox" className="alertCheckbox"  />
            <div className="alert info">
              <div
                className="alertClose"
                onClick={() => {
                  dispatch(setNotification());
                }}
              >
                X
              </div>
              <span className="alertText">
                {" "}
               {Notification}
                <br className="clear" />
              </span>
            </div>
          </label>
       
        
          
        </>
      )}
    </>
  );
};

export default ShowNotification;
