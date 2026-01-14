import { useState } from 'react';

export const useModal = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  function handleOpenModal() {
    setIsVisible(true);
  }

  return {
    isVisible,
    handleOpenModal,
  };
};
