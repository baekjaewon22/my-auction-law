import { siteInfo } from "../data/siteData";

export default function Footer() {
	return (
		<footer className="bg-navy-900 py-12 lg:py-16">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="grid gap-8 md:grid-cols-3">
					{/* Brand */}
					<div>
						<h3 className="mb-4 text-xl font-bold text-white">
							{siteInfo.name}
						</h3>
						<p className="text-sm leading-relaxed text-navy-300">
							부동산 분쟁 전문 법률사무소로서
							<br />
							의뢰인의 권리를 끝까지 지켜드립니다.
						</p>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="mb-4 text-sm font-semibold tracking-wider text-gold-400 uppercase">
							연락처
						</h4>
						<ul className="space-y-2 text-sm text-navy-300">
							<li className="flex items-start gap-2">
								<span className="mt-0.5 text-gold-500">&#9742;</span>
								{siteInfo.phone}
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-0.5 text-gold-500">&#9993;</span>
								{siteInfo.email}
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-0.5 text-gold-500">&#9679;</span>
								{siteInfo.address}
							</li>
							<li className="flex items-start gap-2">
								<span className="mt-0.5 text-gold-500">&#9679;</span>
								사업자등록번호: {siteInfo.businessNumber}
							</li>
						</ul>
					</div>

					{/* Links */}
					<div>
						<h4 className="mb-4 text-sm font-semibold tracking-wider text-gold-400 uppercase">
							정보
						</h4>
						<ul className="space-y-2 text-sm text-navy-300">
							<li>
								<a href="#" className="transition hover:text-white">
									개인정보처리방침
								</a>
							</li>
							<li>
								<a href="#" className="transition hover:text-white">
									이용약관
								</a>
							</li>
						</ul>
					</div>
				</div>

				{/* Bottom */}
				<div className="mt-10 border-t border-navy-700 pt-6 text-center text-xs text-navy-400">
					&copy; {new Date().getFullYear()} {siteInfo.name}. All rights reserved.
				</div>
			</div>
		</footer>
	);
}
