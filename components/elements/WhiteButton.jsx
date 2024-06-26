"use client";
import { cn } from "@/lib/utils";
import React from "react";

const WhiteButton = ({
	onClick = () => {},
	icon = <></>,
	label,
	className = "",
	...props
}) => {
	return (
		<div
			onClick={onClick}
			className={cn(
				"bg-white text-black rounded-2xl flex flex-row items-center min-w-[80px] h-[36px] p-4 gap-2 cursor-pointer hover:bg-neutral-500",
				className
			)}
			{...props}
		>
			<span>{icon}</span>
			<span>{label}</span>
		</div>
	);
};

export default WhiteButton;
