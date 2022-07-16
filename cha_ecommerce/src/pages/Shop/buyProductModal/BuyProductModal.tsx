import { Modal, Title3 } from "@/components/core";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const BuyProductModal = () => {
  const navigate = useNavigate();
  const onClose = () => {
    navigate("/cart");
  };

  return (
    <Modal open={true} close={onClose}>
      <div className="p-8 w-[50em] max-w-[100%] text-center">
        <Title3> buy the product </Title3>
      </div>
    </Modal>
  );
};
