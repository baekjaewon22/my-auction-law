import { successCases } from "../data/siteData";

export default function SuccessCases() {
	return (
		<section id="cases" className="bg-gray-50 py-20 lg:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<div className="mb-14 text-center">
					<p className="mb-2 text-sm font-semibold tracking-widest text-gold-500 uppercase">
						Success Cases
					</p>
					<h2 className="mb-4 text-3xl font-bold text-navy-800 lg:text-4xl">
						성공 사례
					</h2>
					<p className="mx-auto max-w-2xl text-base text-gray-600">
						실제 사건을 통해 입증된 전문성과 성과를 확인하세요
					</p>
				</div>

				{/* Cards */}
				<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
					{successCases.map((item, idx) => (
						<div
							key={idx}
							className="flex flex-col rounded-xl border border-gray-100 bg-white p-6 shadow-sm transition hover:shadow-lg sm:p-8"
						>
							{/* Category Badge */}
							<span className="mb-4 w-fit rounded-full bg-navy-50 px-3 py-1 text-xs font-semibold text-navy-700">
								{item.category}
							</span>

							<h3 className="mb-3 text-lg font-bold text-navy-800">
								{item.title}
							</h3>
							<p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
								{item.summary}
							</p>

							{/* Result */}
							<div className="mb-4 rounded-lg bg-gold-50 px-4 py-3">
								<p className="text-sm font-semibold text-gold-700">
									<span className="mr-1 text-gold-500">&#10003;</span>
									{item.result}
								</p>
							</div>

							{/* Tags */}
							<div className="flex flex-wrap gap-2">
								{item.tags.map((tag) => (
									<span
										key={tag}
										className="rounded border border-gray-200 px-2.5 py-0.5 text-xs text-gray-500"
									>
										#{tag}
									</span>
								))}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
