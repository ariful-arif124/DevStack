// import React from 'react';
import type { Dispatch, SetStateAction } from 'react';
import type { TechType } from "../../Types/TechnologyType";
import { toast } from 'react-toastify';

interface TechnologyCardProps {
        Technology: TechType,
        selectedTechnology : TechType[]
        setSelectedTechnology : Dispatch<SetStateAction<TechType[]>>
}

const TechnologyCard = ({
    Technology,
    selectedTechnology,
    setSelectedTechnology
}: TechnologyCardProps) => {

    const isSelected = selectedTechnology.some(
        (tech) => tech.id === Technology.id
    );

    const handleSelectTechnology = () => {

        if (isSelected) {
            return;
        }
        toast.success(`${Technology.name} is selected`)
        setSelectedTechnology([
            ...selectedTechnology,
            Technology
        ]);
    };

    return (
        <div className="card bg-base-100 border border-base-300 py-6 px-6 flex flex-col overflow-hidden">

            <figure className="relative pt-6 pb-4 px-0 flex justify-start w-full">
                <img
                    src={Technology.icon}
                    alt={Technology.name}
                    className="w-10"
                />
            </figure>

            <p className="absolute top-4 right-4 bg-linear-to-r from-orange-500 to-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                {Technology.badge}
            </p>

            <div className="card-body p-0 space-y-3 w-full min-w-0">

                <h2 className="text-xl font-bold">
                    {Technology.name}
                </h2>

                <p className="text-sm text-slate-500">
                    {Technology.description}
                </p>

                <div className="grid grid-cols-[auto_1fr_auto] items-center gap-2 pt-2 text-slate-500 w-full">

                    <p className="rounded-lg border px-3 py-1 font-normal whitespace-nowrap">
                        {Technology.category}
                    </p>

                    <p className="px-2 py-1 text-xs font-normal min-w-0">
                        {Technology.difficulty}
                    </p>

                    <p className="whitespace-nowrap">
                        ⭐ {Technology.rating}
                    </p>

                </div>

                <div className="pt-4">
                    <button
                        onClick={handleSelectTechnology}
                        disabled={isSelected}
                        className={`btn rounded-xl border-0 w-full text-white ${
                            isSelected
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-black hover:bg-gray-800"
                        }`}
                    >
                        {isSelected ? "✓Added to Stack" : "Add to Stack"}
                    </button>
                </div>

            </div>
        </div>
    );
};

export default TechnologyCard;