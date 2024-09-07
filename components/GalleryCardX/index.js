import React, { useState }from "react";
import Image from "next/image";
import Button from "../Button";

const GalleryCard = ({ img, AR_src, w_disp, h_disp, name}) => {

  const [isModalOpen, setModalOpen] = useState(false);
  let w_frac, h_frac;
  if (AR_src < 1) {
    w_frac = 0.28;
    h_frac = 0.28 / AR_src;
  } else {
    w_frac = 0.37 * AR_src;
    h_frac = 0.37;
  }


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  
  return (
    <>
      <div
        className="p-2 first:ml-0 tablet:hidden"
      >
        <div
          className="rounded-lg overflow-hidden relative"
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
      </div>

      <div
        className="p-2 first:ml-0 hidden tablet:block"
      >
        <div
          className="rounded-lg overflow-hidden relative"
          onClick={openModal}
        >
          <Image
            alt={name}
            className="image-solo hover:cursor-zoom-in"
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
                width={window.innerWidth * w_frac}
                height={window.innerWidth * h_frac}/>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default GalleryCard;
