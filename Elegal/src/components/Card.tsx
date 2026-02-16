import React from 'react';
import Badge from '../common/Badge';

interface Lawyer {
    name: string;
    image: string;
    address?: string;
    description?: string;
    expertise?: string[];
}

interface CardProps {
    data: Lawyer;
}


const Card = ({ data }: CardProps) => {

    console.log(data, "data");

    return (
        <div className="bg-white rounded-2xl shadow-md p-6 flex gap-6 flex-col md:flex-row">
            <img
                src={data.image}
                alt="lawyer"
                className="w-40 h-48 object-cover rounded-xl h-auto"
            />

            <div className="flex-1">
                <h3 className="text-xl font-semibold">{data.name}</h3>
                <p className="text-gray-500 mb-3">{data.address}</p>

                <div className="flex gap-2 mb-3">
                    {data?.expertise.map((item) => {
                        return(
                            <Badge title={item}/>
                        )
                    })}
                </div>

                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {data.description}
                </p>

                <button className="bg-[#1F2E4A] text-white px-6 py-2 rounded-lg">
                    View Profile
                </button>
            </div>
        </div>
    )
}


export default Card
