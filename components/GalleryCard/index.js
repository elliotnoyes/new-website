import React, { useState }from "react";
import Image from "next/image";
import Button from "../Button";
import Link from "next/link";
import { useTheme } from "next-themes";

const GalleryCard = ({ img, AR_src, w_disp, h_disp, name}) => {

  const [isModalOpen, setModalOpen] = useState(false);
  const { theme } = useTheme();


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <div
      className="p-2 first:ml-0"
    >
      <div
        className="rounded-lg overflow-hidden relative"
        onClick={openModal}
      >
        <Image
          alt={name}
          className="image-solo"
          src={img}
          width={w_disp}
          height={h_disp}
          sizes="100vw"
        ></Image>
      </div>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <div className="flex-row">
              <Button type="cancel" onClick={closeModal}>
                <Image
                  alt="close"
                  src="/images/header/cancel-white.svg"
                  width={32}
                  height={32}
                ></Image>
              </Button>
              <Image alt={name} src={img} 
              width={(window.innerWidth < 768 ? window.innerHeight : window.innerWidth) * 0.35 * AR_src}
              height={(window.innerWidth < 768 ? window.innerHeight : window.innerWidth) * 0.35}/>
            </div>
          </div>
        </div>
      )}
    
    </div>
  );
};

export default GalleryCard;
