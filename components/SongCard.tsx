"use client";
import { TopSong } from "@/types";
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
import usePlayerState from "@/hooks/usePlayerState";

interface SongCardProps {
	song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
	const { addSongList } = usePlayerState();

	const onCLickPlay = () => {
		addSongList([song]);
	};

	return (
		<article className='flex flex-row items-center gap-4 h-[48px] w-full relative group'>
			<div className='w-[48px] h-[48px] relative'>
				<Image src={song.imageSrc} alt='img' fill className='object-cover' />
				<section
					className='w-[48px] h-[48px] items-center justify-center hidden group-hover:flex absolute top-0 bg-black cursor-pointer'
					onClick={onCLickPlay}
				>
					<FiPlayCircle size={20} />
				</section>
			</div>
			<div className='flex flex-row items-center gap-4'>
				<div>
					{song.rank === song.prevRank ? (
						<FaCircle size={10} />
					) : song.rank > song.prevRank ? (
						<AiOutlineCaretUp size={10} color='#3Ca63F' />
					) : (
						<AiOutlineCaretDown size={10} color='#fff000' />
					)}
				</div>
				<div>{song.rank + 1}</div>
			</div>
			<div>
				<div>{song.name}</div>
			</div>
			<section className='absolute top-0 right-0 hidden group-hover:flex flex-row justify-end items-center h-[48px] w-1/2 bg-[rgba(0,0,0,0.7)]'>
				<IconButton icon={<FiThumbsDown size={20} />} />
				<IconButton icon={<FiThumbsUp size={20} />} />
				<IconButton icon={<FiMoreVertical size={20} />} />
			</section>
		</article>
	);
};

export default SongCard;
