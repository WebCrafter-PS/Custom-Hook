//return online status(BOOLEAN)

import { useState } from "react";

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  //    console.log(window.navigator.onLine) returns true/false

  //but we need to monitor changing online status so use event listener
  window.addEventListener("offline", () => {
    setOnlineStatus(false);
  });
  window.addEventListener("online", () => {
    setOnlineStatus(true);
  });
  return onlineStatus;
};
export default useOnlineStatus;
