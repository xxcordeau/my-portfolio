export interface Portfolio {
  id: string;
  title: string;
  subtitle: string;
  price: string;
  category: string;
  thumbnail: string;
  color: string;
  description: string;
  details: {
    overview: string;
    technologies: string[];
    features: string[];
    images: string[];
  };
}

export const portfolios: Portfolio[] = [
  {
    id: "project-1",
    title: "E-Commerce Platform",
    subtitle: "현대적인 쇼핑 경험을 제공하는 플랫폼",
    price: "2024.01",
    category: "Web Development",
    thumbnail: "ecommerce platform",
    color: "#1d1d1f",
    description: "사용자 중심의 직관적인 인터페이스와 강력한 관리 시스템을 갖춘 이커머스 플랫폼입니다.",
    details: {
      overview: "Next.js와 React를 활용하여 구축한 고성능 이커머스 플랫폼입니다. 실시간 재고 관리, 결제 시스템 통합, 사용자 맞춤 추천 기능을 제공합니다.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
      features: [
        "반응형 디자인으로 모든 기기에서 최적화된 경험 제공",
        "실시간 재고 관리 및 주문 처리 시스템",
        "AI 기반 상품 추천 알고리즘",
        "안전한 결제 시스템 통합",
        "관리자 대시보드 및 분석 도구"
      ],
      images: ["ecommerce dashboard", "online shopping", "product catalog"]
    }
  },
  {
    id: "project-2",
    title: "Mobile Banking App",
    subtitle: "혁신적인 모바일 뱅킹 경험",
    price: "2024.03",
    category: "Mobile App",
    thumbnail: "mobile banking",
    color: "#06c",
    description: "간편하고 안전한 모바일 금융 서비스를 제공하는 뱅킹 앱입니다.",
    details: {
      overview: "React Native로 개발된 크로스 플랫폼 모바일 뱅킹 애플리케이션입니다. 생체 인증, 실시간 거래 알림, QR 결제 등 다양한 기능을 제공합니다.",
      technologies: ["React Native", "TypeScript", "Redux", "Firebase", "Node.js"],
      features: [
        "생체 인증을 통한 안전한 로그인",
        "실시간 계좌 잔액 및 거래 내역 조회",
        "QR 코드 기반 간편 결제",
        "자동 저축 및 투자 추천 기능",
        "푸시 알림을 통한 거래 알림"
      ],
      images: ["mobile banking app", "financial dashboard", "payment interface"]
    }
  },
  {
    id: "project-3",
    title: "AI Chat Assistant",
    subtitle: "지능형 대화형 AI 어시스턴트",
    price: "2024.05",
    category: "AI/ML",
    thumbnail: "ai assistant",
    color: "#bf4800",
    description: "자연어 처리를 활용한 스마트 고객 지원 시스템입니다.",
    details: {
      overview: "GPT 기반의 AI 챗봇으로, 고객 문의를 자동으로 처리하고 맞춤형 응답을 제공합니다. 다국어 지원 및 감정 분석 기능이 포함되어 있습니다.",
      technologies: ["Python", "OpenAI API", "React", "FastAPI", "PostgreSQL"],
      features: [
        "자연어 이해를 통한 정확한 응답",
        "다국어 지원 (한국어, 영어, 일본어)",
        "감정 분석 기반 맞춤형 대응",
        "대화 히스토리 및 분석 대시보드",
        "기존 시스템과의 원활한 통합"
      ],
      images: ["ai chatbot", "conversation interface", "analytics dashboard"]
    }
  },
  {
    id: "project-4",
    title: "Fitness Tracking App",
    subtitle: "건강한 라이프스타일을 위한 동반자",
    price: "2024.07",
    category: "Health & Fitness",
    thumbnail: "fitness tracking",
    color: "#86868b",
    description: "운동, 영양, 수면을 통합 관리하는 헬스케어 플랫폼입니다.",
    details: {
      overview: "웨어러블 기기와 연동하여 사용자의 건강 데이터를 실시간으로 수집하고 분석합니다. AI 코치가 개인화된 운동 및 식단 계획을 제공합니다.",
      technologies: ["React Native", "Swift", "HealthKit", "TensorFlow", "AWS"],
      features: [
        "웨어러블 기기 연동 (Apple Watch, Fitbit)",
        "AI 기반 개인 맞춤형 운동 계획",
        "영양 섭취 추적 및 칼로리 계산",
        "수면 패턴 분석 및 개선 제안",
        "소셜 기능으로 친구들과 경쟁"
      ],
      images: ["fitness tracker", "workout app", "health monitoring"]
    }
  },
  {
    id: "project-5",
    title: "Smart Home Dashboard",
    subtitle: "통합 스마트홈 제어 시스템",
    price: "2024.09",
    category: "IoT",
    thumbnail: "smart home",
    color: "#1d1d1f",
    description: "모든 스마트 기기를 하나의 대시보드에서 제어하는 솔루션입니다.",
    details: {
      overview: "다양한 IoT 기기들을 통합 관리할 수 있는 스마트홈 대시보드입니다. 음성 제어, 자동화 시나리오, 에너지 사용량 모니터링 기능을 제공합니다.",
      technologies: ["React", "Node.js", "MQTT", "InfluxDB", "Grafana"],
      features: [
        "다양한 IoT 프로토콜 지원 (Zigbee, Z-Wave, WiFi)",
        "음성 제어 (Alexa, Google Assistant)",
        "자동화 시나리오 생성 및 관리",
        "실시간 에너지 사용량 모니터링",
        "원격 접속 및 제어"
      ],
      images: ["smart home control", "iot dashboard", "home automation"]
    }
  },
  {
    id: "project-6",
    title: "Video Streaming Platform",
    subtitle: "차세대 비디오 스트리밍 서비스",
    price: "2024.11",
    category: "Media & Entertainment",
    thumbnail: "video streaming",
    color: "#06c",
    description: "고품질 비디오 스트리밍과 소셜 기능이 결합된 플랫폼입니다.",
    details: {
      overview: "적응형 비트레이트 스트리밍과 AI 기반 콘텐츠 추천을 제공하는 OTT 플랫폼입니다. 라이브 스트리밍, VOD, 인터랙티브 기능을 지원합니다.",
      technologies: ["React", "Video.js", "AWS MediaConvert", "Redis", "Elasticsearch"],
      features: [
        "4K UHD 고품질 스트리밍 지원",
        "AI 기반 개인화 추천 알고리즘",
        "실시간 라이브 스트리밍 및 채팅",
        "다운로드 기능으로 오프라인 시청",
        "멀티 프로필 및 부모 통제 기능"
      ],
      images: ["video player", "streaming platform", "media library"]
    }
  }
];