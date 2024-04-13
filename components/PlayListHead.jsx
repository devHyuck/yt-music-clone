'use client';
import React from 'react';
import IconButton from './elements/IconButton';
import { FiMoreVertical } from 'react-icons/fi';
import Image from 'next/image';
import { getRandomElementFromArray } from '@/lib/utils';

const PlayListHead = ({ playlist = {} } = {}) => {
	const { playlistName, owner, songList } = playlist;

	const randomSong = getRandomElementFromArray(songList);
	return (
		<section className='flex gap-[50px] flex-row'>
			<div className='relative h-[160px] w-[160px] lg:h-[240px] lg:w-[240px]'>
				<Image alt='songImg' fill src={randomSong?.imageSrc} />
			</div>
			<article className='flex flex-col justify-center'>
				<div className='font-bold text-[28px]'>{playlistName}</div>
				<div className='text-neutral-400 mt-4 text-[14px]'>
					<div>{`앨범 • ${owner} • 2024`}</div>
					<div>{`${songList.length}곡 • 30분`}</div>
				</div>
				<ul>
					<div>dsd</div>
					<div>dsd</div>
					<div>dsd</div>
					<div>dsd</div>
					<div>dsd</div>
					<div>dsd</div>
					<div>dsd</div>
					<div>dsd</div>
					<div>dsd</div>
					<IconButton icon={<FiMoreVertical size={24} />} />
				</ul>
			</article>
		</section>
	);
};

export default PlayListHead;
