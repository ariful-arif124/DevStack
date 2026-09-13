import type { Dispatch, SetStateAction } from "react";
import type { TechType } from "../../Types/TechnologyType";
import { toast } from "react-toastify";



interface YourStackProps {
    selectedTechnology: TechType[];
    setSelectedTechnology: Dispatch<SetStateAction<TechType[]>>;
}

const YourStack = ({
    selectedTechnology,
    setSelectedTechnology
}: YourStackProps) => {

    const handleRemove = (id: number) => {

    const technologyToRemove = selectedTechnology.find(
        (technology) => technology.id === id
    );

    const remainingTechnology = selectedTechnology.filter(
        (technology) => technology.id !== id
    );

    setSelectedTechnology(remainingTechnology);

    if (technologyToRemove) {
        toast.success(`${technologyToRemove.name} removed`);
    }
};

    const handleRemoveAll = () => {

        setSelectedTechnology([]);
        toast.success(`All the Technologies was Removed`)
    };


    return (

        <div className="border border-base-300 rounded-xl p-4 bg-base-100 shadow-sm sticky top-24">

            <h2 className="text-sm font-bold">
                Your Stack
            </h2>
            <p className="mt-1 text-xs text-slate-400">
                {selectedTechnology.length} technology selected
            </p>

            <div className="mt-4 space-y-2">

                {
                    selectedTechnology.map(
                        (Technology: TechType) => (

                            <div
                                key={Technology.id}
                                className="flex items-center justify-between border border-base-300 rounded-lg p-2"
                            >

                                <div className="flex items-center gap-2">

                                    <img
                                        src={Technology.icon}
                                        alt={Technology.name}
                                        className="w-6 h-6 object-contain"
                                    />

                                    <span className="text-xs font-medium">
                                        {Technology.name}
                                    </span>

                                </div>

                                <button
                                    onClick={() =>
                                        handleRemove(Technology.id)
                                    }
                                    className="text-slate-400 hover:text-red-500 text-lg"
                                >
                                    ×
                                </button>

                            </div>

                        )
                    )
                }

            </div>

            {
                selectedTechnology.length === 0 && (

                    <p className="text-center text-xs text-slate-400 py-5">
                        No technology selected
                    </p>

                )
            }
            <button
                onClick={handleRemoveAll}
                disabled={selectedTechnology.length === 0}
                className="mt-4 w-full rounded-lg border border-red-200 py-2 text-xs font-medium text-red-500 hover:bg-red-50 disabled:opacity-40 disabled:cursor-not-allowed"
            >
                Remove All
            </button>

        </div>

    );
};

export default YourStack;