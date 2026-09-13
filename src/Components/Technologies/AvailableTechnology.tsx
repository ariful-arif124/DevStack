// import React from 'react';
import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../../Types/TechnologyType";
import TechnologyCard from "./TechnologyCard";

interface TechnologyProps {
  Tech: TechType[];
  selectedTechnology: TechType[];
  setSelectedTechnology: Dispatch<SetStateAction<TechType[]>>;
}

const AvailableTechnology = ({
  Tech,
  selectedTechnology,
  setSelectedTechnology,
}: TechnologyProps) => {
  // console.log(Tech, "Available ")
  return (
    <div className="grid grid-cols-3 gap-4 mt-7">
      {Tech.map((Technology: TechType) => {
        return (
          <TechnologyCard
            key={Technology.id}
            Technology={Technology}
            selectedTechnology={selectedTechnology}
            setSelectedTechnology={setSelectedTechnology}
          ></TechnologyCard>
        );
      })}
    </div>
  );
};

export default AvailableTechnology;
