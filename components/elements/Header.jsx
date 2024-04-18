"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import UserIcon from "../UserIcon";
import PagePadding from "../PagePadding";
import { FaChromecast } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import Logo from "./Logo";
import Navigator from "./Navigator";
import { cn } from "@/lib/utils";
import useUIState from "@/hooks/useUIState";

const HeaderDrawer = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Drawer direction='left' open={isOpen} onOpenChange={setIsOpen}>
			<DrawerTrigger>{children}</DrawerTrigger>
			<DrawerContent className='w-[250px] h-full'>
				{/* logo */}
				{/* 네비게이션 + 재생목록 */}
				<div className='py-3'>
					<div className='px-3'>
						<Logo isInDrawer onClickClose={() => setIsOpen(false)} />
					</div>
					<Navigator />
				</div>
			</DrawerContent>
		</Drawer>
	);
};

const Header = ({ children }) => {
	const { headerImageSrc, setHeaderImageSrc } = useUIState();
	const [isScrolled, setIsScolled] = useState(false);
	const headRef = useRef();

	useEffect(() => {
		const currentHeadRef = headRef.current;
		// 스크롤 함수
		const handleScroll = () => {
			const scrollValue = headRef?.current?.scrollTop;
			setIsScolled(scrollValue !== 0);
		};
		// 디바운스 함수 (원본함수, 기다릴시간)
		const debounce = (func, waitTime) => {
			let timeOut;
			return function executedFunction(...arg) {
				const later = () => {
					// 먼저 실행된 timeOut을 초기화
					timeOut = null;
					// 원본함수 실행
					func(...arg);
				};
				// 이전에 설정된 타이머 초기화
				clearTimeout(timeOut);
				// later함수를 기다릴시간뒤에 실행시킨다
				timeOut = setTimeout(later, waitTime);
			};
		};

		const debouncedHandleScroll = debounce(handleScroll, 200);

		currentHeadRef?.addEventListener("scroll", debouncedHandleScroll);

		return () => {
			currentHeadRef?.removeEventListener("scroll", debouncedHandleScroll);
		};
	}, []);

	return (
		<header ref={headRef} className='relative overflow-y-auto w-full h-full'>
			{/* bg section */}
			<section className='absolute top-0 w-full'>
				<div className='relative h-[400px] w-full'>
					<Image
						alt='mediaItem'
						className='object-cover'
						fill
						src={
							headerImageSrc ||
							"https://images.unsplash.com/photo-1712375787673-b412be45f0b5?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						}
					/>
				</div>
				<div className='absolute top-0 bg-black opacity-40 w-full h-[400px]'></div>
				<div className='absolute top-0 bg-gradient-to-t from-black w-full h-[400px]'></div>
			</section>
			{/* Search Section */}
			<section
				className={cn("sticky top-0 left-0 z-10", isScrolled && "bg-black")}
			>
				<PagePadding>
					<div className='flex flex-row justify-between items-center h-[64px]'>
						<article className='hidden lg:flex flex-row items-center h-[42px] min-w-[480px] bg-[rgba(0,0,0,0.14)] rounded-2xl px-[16px] gap-[16px] border border-neutral-500'>
							<div>
								<FiSearch size={24} />
							</div>
							<input
								className='h-full w-full bg-transparent'
								placeholder='노래, 앨범, 아티스트, 팟캐스트 검색'
								type='text'
							/>
						</article>
						<HeaderDrawer>
							<article className='lg:hidden'>
								<Logo />
							</article>
						</HeaderDrawer>
						<article className='flex flex-row gap-6 items-center'>
							<FaChromecast size={26} />
							<UserIcon />
						</article>
					</div>
				</PagePadding>
			</section>
			<section className='relative'>{children}</section>
		</header>
	);
};

export default Header;
