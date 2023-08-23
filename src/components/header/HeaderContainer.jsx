import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [isOpenMessage, setIsOpenMessage] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const handleOpenNotification = () => {
    setIsOpenNotification(true);
  };

  const handleCloseNotification = () => {
    console.log("clode");
    setIsOpenNotification(false);
  };

  const handleOpenMessage = () => {
    setIsOpenMessage(true);
  };

  const handleCloseMessage = () => {
    console.log("close");
    setIsOpenMessage(false);
  };

  return (
    <Header
      isOpenMessage={isOpenMessage}
      setIsOpenMessage={setIsOpenMessage}
      isOpenNotification={isOpenNotification}
      setIsOpenNotification={setIsOpenNotification}
      handleOpenNotification={handleOpenNotification}
      handleCloseNotification={handleCloseNotification}
      handleCloseMessage={handleCloseMessage}
      handleOpenMessage={handleOpenMessage}
    />
  );
};

export default HeaderContainer;
