import React from 'react';

interface BadgeProps {
    title: string;
}

const Badge: React.FC<BadgeProps> = ({ title }) => {
    return (
        <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">
            {title}
        </span>
    )
}

export default Badge
