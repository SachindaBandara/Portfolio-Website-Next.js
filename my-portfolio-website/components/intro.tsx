import React from "react";
import Image from "next/image";
import Profile from "@/public/profile pic.jpg";
export default function intro() {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={Profile}
            alt="Sachinda Bandara"
            width="192"
            height="192"
            quality="95"
            priority={true}
            className="h-34 w-34 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
