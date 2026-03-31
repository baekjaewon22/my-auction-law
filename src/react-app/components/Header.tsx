import { useState } from "react";
import { siteInfo, navLinks } from "../data/siteData";

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-16 items-center justify-between md:h-20">
					{/* Logo */}
					<a href="#" className="flex items-center gap-2">
						<span className="text-xl font-bold text-navy-800 md:text-2xl">
							{siteInfo.name}
						</span>
					</a>

					{/* Desktop Nav */}
					<nav className="hidden items-center gap-8 md:flex">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="text-sm font-medium text-navy-700 transition hover:text-gold-500"
							>
								{link.label}
							</a>
						))}
					</nav>

					{/* Desktop CTA */}
					<div className="hidden items-center gap-3 md:flex">
						<a
							href={`tel:${siteInfo.phone}`}
							className="flex items-center gap-1.5 rounded-lg border border-navy-800 px-4 py-2 text-sm font-medium text-navy-800 transition hover:bg-navy-800 hover:text-white"
						>
							<PhoneIcon />
							{siteInfo.phone}
						</a>
						<a
							href="#contact"
							className="rounded-lg bg-gold-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-gold-600"
						>
							상담예약
						</a>
					</div>

					{/* Mobile Menu Button */}
					<button
						className="md:hidden p-2 text-navy-800"
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label="메뉴 열기"
					>
						{mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			{mobileOpen && (
				<div className="border-t border-gray-100 bg-white md:hidden">
					<nav className="flex flex-col px-4 py-4">
						{navLinks.map((link) => (
							<a
								key={link.href}
								href={link.href}
								className="border-b border-gray-50 py-3 text-base font-medium text-navy-700 transition hover:text-gold-500"
								onClick={() => setMobileOpen(false)}
							>
								{link.label}
							</a>
						))}
						<div className="mt-4 flex flex-col gap-3">
							<a
								href={`tel:${siteInfo.phone}`}
								className="flex items-center justify-center gap-2 rounded-lg border border-navy-800 py-3 text-sm font-medium text-navy-800"
							>
								<PhoneIcon />
								{siteInfo.phone}
							</a>
							<a
								href="#contact"
								className="rounded-lg bg-gold-500 py-3 text-center text-sm font-semibold text-white"
								onClick={() => setMobileOpen(false)}
							>
								상담예약
							</a>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}

function PhoneIcon() {
	return (
		<svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
		</svg>
	);
}

function HamburgerIcon() {
	return (
		<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
		</svg>
	);
}

function CloseIcon() {
	return (
		<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
		</svg>
	);
}
