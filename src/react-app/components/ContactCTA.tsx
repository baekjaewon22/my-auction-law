import { siteInfo } from "../data/siteData";

export default function ContactCTA() {
	return (
		<section id="contact" className="relative overflow-hidden bg-navy-800 py-20 lg:py-24">
			{/* Decorative */}
			<div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-gold-500/10" />
			<div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-gold-500/5" />

			<div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
				<p className="mb-3 text-sm font-semibold tracking-widest text-gold-400 uppercase">
					Contact Us
				</p>
				<h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
					지금 상담하세요
				</h2>
				<p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-navy-200">
					부동산 분쟁으로 고민하고 계신가요?
					<br />
					전문 변호사가 최적의 해결 방안을 제시해 드립니다.
				</p>

				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<a
						href={`tel:${siteInfo.phone}`}
						className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-navy-800 sm:w-auto"
					>
						<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
						</svg>
						전화 상담
					</a>
					<a
						href="#contact"
						className="w-full rounded-lg bg-gold-500 px-8 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-gold-600 sm:w-auto"
					>
						온라인 상담 신청
					</a>
				</div>

				<p className="mt-6 text-sm text-navy-300">
					평일 09:00 ~ 18:00 | 토요일 예약 상담 가능
				</p>
			</div>
		</section>
	);
}
