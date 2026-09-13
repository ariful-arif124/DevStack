import { use, useState } from "react";
import type { TechType } from "../../Types/TechnologyType";
import AvailTechnology from "./AvailableTechnology";
import YourStack from "./YourStack";


interface TechProps {
    TechPromise: Promise<TechType[]>
}


const Technology = ({ TechPromise }: TechProps) => {

    const Tech = use(TechPromise);

    const [selectedTechnology, setSelectedTechnology] =
        useState<TechType[]>([]);


    return (
        <div className="max-w-6xl mx-auto px-4 py-10">

            <div>
                <h2 className="text-3xl font-extrabold">
                    Explore the{" "}
                    <span className="text-[#ec4899]">
                        Technologies
                    </span>
                </h2>

                <p className="mt-2 text-sm max-w-lg text-slate-500">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">

                <div className="lg:col-span-3">

                    <AvailTechnology   
                        Tech={Tech}
                        selectedTechnology={selectedTechnology}
                        setSelectedTechnology={setSelectedTechnology}
                    />

                </div>

                <div className="lg:col-span-1 mt-7">

                    <YourStack
                        selectedTechnology={selectedTechnology}
                        setSelectedTechnology={setSelectedTechnology}
                    />

                </div>

            </div>

        </div>
    );
};

export default Technology;