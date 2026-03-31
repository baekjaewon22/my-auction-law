import { siteInfo } from "../data/siteData";

export default function Hero() {
	return (
		<section className="relative min-h-[600px] lg:min-h-[700px]">
			{/* Background Image */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: "url('/assets/images/hero-law.webp')" }}
			/>
			{/* Gradient Overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-navy-900/90 via-navy-800/80 to-navy-900/60" />

			<div className="relative mx-auto flex max-w-7xl flex-col items-center gap-10 px-4 pt-28 pb-16 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:pt-36 lg:pb-24">
				{/* Left Text */}
				<div className="flex-1 text-center lg:text-left">
					<p className="mb-4 text-sm font-semibold tracking-widest text-gold-400 uppercase">
						부동산 분쟁 전문 법률사무소
					</p>
					<h1 className="mb-6 text-3xl leading-tight font-bold text-white sm:text-4xl lg:text-5xl lg:leading-tight">
						부동산 분쟁,
						<br />
						명도소송 전문 법률 대응
					</h1>
					<p className="mb-8 max-w-lg text-base leading-relaxed text-navy-200 sm:text-lg lg:mx-0 mx-auto">
						20년 이상의 부동산 소송 경험을 바탕으로 의뢰인의 권리를 확실하게 보호합니다.
						명도소송, 경매, 임대차 분쟁까지 원스톱 법률 서비스를 제공합니다.
					</p>
					<div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
						<a
							href="#contact"
							className="w-full rounded-lg bg-gold-500 px-8 py-3.5 text-center text-base font-semibold text-white shadow-lg transition hover:bg-gold-600 sm:w-auto"
						>
							무료 상담 신청
						</a>
						<a
							href={`tel:${siteInfo.phone}`}
							className="flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition hover:border-white/60 sm:w-auto"
						>
							<svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
							</svg>
							전화 상담
						</a>
					</div>
				</div>

				{/* Right CTA Card */}
				<div className="w-full max-w-md lg:w-[400px]">
					<div className="rounded-2xl border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-md sm:p-8">
						<h3 className="mb-2 text-center text-xl font-bold text-white">
							빠른 상담 신청
						</h3>
						<p className="mb-6 text-center text-sm text-navy-200">
							연락처를 남겨주시면 30분 내 회신드립니다
						</p>
						<form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
							<input
								type="text"
								placeholder="이름"
								className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-navy-300 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
							/>
							<input
								type="tel"
								placeholder="연락처"
								className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-white placeholder-navy-300 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
							/>
							<select
								className="rounded-lg border border-white/20 bg-white/10 px-4 py-3 text-navy-300 outline-none focus:border-gold-400 focus:ring-1 focus:ring-gold-400"
								defaultValue=""
							>
								<option value="" disabled>상담 분야 선택</option>
								<option value="명도소송">명도소송</option>
								<option value="부동산분쟁">부동산 분쟁</option>
								<option value="경매">경매 컨설팅</option>
								<option value="임대차">임대차 분쟁</option>
								<option value="기타">기타</option>
							</select>
							<button
								type="submit"
								className="rounded-lg bg-gold-500 py-3.5 text-base font-semibold text-white transition hover:bg-gold-600"
							>
								무료 상담 신청하기
							</button>
						</form>
						<p className="mt-4 text-center text-xs text-navy-300">
							상담 내용은 철저히 비밀이 보장됩니다
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
