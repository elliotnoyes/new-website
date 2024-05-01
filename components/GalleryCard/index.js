import React from "react";
import Image from "next/image";

const GalleryCard = ({ img, AR_src, w_disp, h_disp, name}) => {

  return (
    <div
      className="p-2 first:ml-0"
    >
      <div
        className="rounded-lg overflow-hidden relative"
        // onClick={openModal}
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
  );
};

export default GalleryCard;
