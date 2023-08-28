import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [isOpenMessage, setIsOpenMessage] = useState(false);
  const [isOpenNotification, setIsOpenNotification] = useState(false);

  const handleOpenNotification = () => {
    setIsOpenNotification(true);
    setIsOpenMessage(false)
  };

  const handleCloseNotification = () => {
    setIsOpenNotification(false);
  };

  const handleOpenMessage = () => {
    setIsOpenMessage(true);
    setIsOpenNotification(false);
  };

  const handleCloseMessage = () => {
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
