import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import Image from "next/image";
const ModalAccesories = ({ quantity, product }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <Button onClick={() => setOpenModal(true)} className="bg-red-400">
        Accesorios ({quantity})
      </Button>
      <Modal
        show={openModal}
        onClose={() => setOpenModal(false)}
        className="bg-gray-950 bg-opacity-30 flex justify-center items-center"
      >
    
        <Modal.Header className="text-sm h-14 pr-3 flex items-center  bg-red-600 sm:text-base md:text-xl font-sans ">
          <span className="text-white pl-4 ">
            Este producto es compatible con los siguientes accesorios:
          </span>
        </Modal.Header>
        <Modal.Body >
          <div className="space-y-6">
            {product.Accesorios_compatibles.map((accesorio, index) => (
              <div key={index} className="flex items-center space-x-4">
                <Image
                  src={accesorio.imagen_accesorio}
                  width={80}
                  height={80}
                  priority
                  alt={accesorio.nombre_accesorio}
                ></Image>
                <div className="flex flex-col">
                  <h4>{accesorio.nombre_accesorio}</h4>

                  <p className="text-xs">{accesorio.codigo_accesorio}</p>
                </div>
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ModalAccesories;
