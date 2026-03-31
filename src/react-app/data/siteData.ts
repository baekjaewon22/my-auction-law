export const siteInfo = {
	name: "법률사무소 명승",
	phone: "02-555-1234",
	address: "서울특별시 서초구 서초대로 250, 명승빌딩 7층",
	businessNumber: "123-45-67890",
	email: "contact@myungseung.law",
};

export const navLinks = [
	{ label: "소개", href: "#about" },
	{ label: "전문분야", href: "#practice" },
	{ label: "성공사례", href: "#cases" },
	{ label: "상담문의", href: "#contact" },
];

export const practiceAreas = [
	{
		title: "명도소송",
		description:
			"건물 인도 청구, 임차인 퇴거, 불법 점유자 명도 등 부동산 명도소송 전반을 전문적으로 수행합니다.",
		icon: "gavel",
	},
	{
		title: "부동산 분쟁",
		description:
			"소유권 분쟁, 경계 분쟁, 공유물 분할 등 다양한 부동산 관련 분쟁을 해결합니다.",
		icon: "building",
	},
	{
		title: "경매 컨설팅",
		description:
			"부동산 경매 절차 안내, 권리분석, 입찰 전략 수립, 낙찰 후 명도까지 원스톱 서비스를 제공합니다.",
		icon: "auction",
	},
	{
		title: "점유이전금지 가처분",
		description:
			"소송 전 점유이전금지가처분 신청을 통해 명도 집행의 실효성을 확보합니다.",
		icon: "shield",
	},
	{
		title: "상가 임대차 분쟁",
		description:
			"상가건물 임대차보호법에 따른 권리금 회수, 계약갱신 거절, 차임 증감 등을 다룹니다.",
		icon: "store",
	},
	{
		title: "부동산 계약 분쟁",
		description:
			"매매계약 해제, 계약금 반환, 중도금·잔금 분쟁, 하자담보책임 등을 처리합니다.",
		icon: "document",
	},
];

export const processSteps = [
	{
		step: 1,
		title: "상담",
		description: "전화 또는 방문 상담을 통해 사건 개요를 파악합니다.",
	},
	{
		step: 2,
		title: "사건 분석",
		description: "관련 서류와 증거를 검토하여 법적 쟁점을 분석합니다.",
	},
	{
		step: 3,
		title: "전략 수립",
		description: "최적의 법적 대응 전략과 예상 결과를 안내합니다.",
	},
	{
		step: 4,
		title: "소송 진행",
		description: "소장 작성부터 변론까지 체계적으로 소송을 수행합니다.",
	},
	{
		step: 5,
		title: "판결 및 집행",
		description: "승소 판결 확보 후 강제집행까지 완료합니다.",
	},
];

export const successCases = [
	{
		title: "상가 임차인 명도소송 승소",
		category: "명도소송",
		summary:
			"임대차 기간 만료 후 상가를 반환하지 않는 임차인에 대해 명도소송을 제기하여 전면 승소하였습니다.",
		result: "건물 인도 및 미납 차임 전액 회수",
		tags: ["명도소송", "상가", "승소"],
	},
	{
		title: "경매 낙찰 부동산 점유자 퇴거",
		category: "경매분쟁",
		summary:
			"경매로 낙찰받은 아파트의 기존 점유자가 퇴거를 거부하여 점유이전금지가처분 및 명도소송을 진행하였습니다.",
		result: "가처분 인용 및 명도 집행 완료",
		tags: ["경매", "가처분", "명도"],
	},
	{
		title: "상가 권리금 회수 분쟁 해결",
		category: "상가분쟁",
		summary:
			"임대인의 부당한 계약갱신 거절로 인해 권리금을 회수하지 못한 임차인을 대리하여 손해배상을 청구하였습니다.",
		result: "권리금 상당 손해배상 4억 2천만원 인용",
		tags: ["상가분쟁", "권리금", "손해배상"],
	},
	{
		title: "부동산 매매계약 해제 및 계약금 반환",
		category: "계약분쟁",
		summary:
			"매도인의 이중매매로 인한 매매계약 해제 및 계약금 배액 반환 청구 소송을 수행하였습니다.",
		result: "계약금 배액 반환 판결 확정",
		tags: ["계약분쟁", "매매계약", "해제"],
	},
];
