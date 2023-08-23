import React, { useState } from "react";
import Header from "./Header";

const HeaderContainer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenNotification = () => {
    setIsOpen(true);
  };

  const handleCloseNotification = () => {
    console.log("clode");
    setIsOpen(false);
  };

  return (
    <Header
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      handleOpenNotification={handleOpenNotification}
      handleCloseNotification={handleCloseNotification}
    />
  );
};

export default HeaderContainer;
