"use client";
import { Song } from "@/types";
import Image from "next/image";
import React from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { FaCircle } from "react-icons/fa";
import {
	FiMoreVertical,
	FiPlayCircle,
	FiThumbsDown,
	FiThumbsUp,
} from "react-icons/fi";
import IconButton from "./elements/IconButton";
import { useRouter } from "next/navigation";

interface SongCardRowExpandProps {
	song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
	const { channel, channelId } = song;
	const { push } = useRouter();
	const onClickChannel = () => {
		push(`/channel/${channelId}`);
	};

	return (
		<article className='flex flex-row items-center gap-4 h-[48px] w-full relative group'>
			<div className='w-[48px] h-[48px] relative'>
				<Image src={song.imageSrc} alt='img' fill className='object-cover' />
				<section className='w-[48px] h-[48px] items-center justify-center hidden group-hover:flex absolute top-0 bg-black cursor-pointer'>
					<FiPlayCircle size={20} />
				</section>
			</div>
			<div className='flex flex-row gap-4 justify-between basis-1/3'>
				<div className='w-[130px] truncate'>{song.name}</div>
				<div
					className='text-neutral-500 hover:underline cursor-pointer'
					onClick={onClickChannel}
				>
					{channel}
				</div>
			</div>
			<section className='absolute top-0 right-0 hidden group-hover:flex flex-row justify-end items-center h-[48px] w-[120px] bg-[rgba(0,0,0,0.7)]'>
				<IconButton icon={<FiThumbsDown size={20} />} />
				<IconButton icon={<FiThumbsUp size={20} />} />
				<IconButton icon={<FiMoreVertical size={20} />} />
			</section>
		</article>
	);
};

export default SongCardRowExpand;
