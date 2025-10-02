export type Language = "ko" | "en";

export interface Translations {
  nav: {
    portfolio: string;
    projects: string;
    contact: string;
  };
  home: {
    hero: {
      greeting: string;
      role: string;
      description: string;
    };
    projects: {
      title: string;
      subtitle: string;
    };
    contact: {
      title: string;
      description: string;
      emailButton: string;
      downloadButton: string;
    };
    footer: {
      copyright: string;
    };
  };
  detail: {
    notFound: {
      title: string;
      backLink: string;
    };
    sections: {
      overview: string;
      technologies: string;
      features: string;
      gallery: string;
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
    footer: {
      copyright: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  ko: {
    nav: {
      portfolio: "Portfolio",
      projects: "프로젝트",
      contact: "연락하기",
    },
    home: {
      hero: {
        greeting: "안녕하세요.",
        role: "크리에이티브 개발자",
        description:
          "혁신적인 디지털 경험을 만들어내는 것이 저의 열정입니다.\n각 프로젝트에서 완벽함을 추구합니다.",
      },
      projects: {
        title: "최신 프로젝트",
        subtitle: "최근에 완성한 작업들을 만나보세요.",
      },
      contact: {
        title: "함께 작업하고 싶으신가요?",
        description: "새로운 프로젝트에 대해 이야기를 나눠보세요.",
        emailButton: "이메일 보내기",
        downloadButton: "포트폴리오 다운로드",
      },
      footer: {
        copyright: "© 2025 Portfolio. All rights reserved.",
      },
    },
    detail: {
      notFound: {
        title: "프로젝트를 찾을 수 없습니다",
        backLink: "홈으로 돌아가기",
      },
      sections: {
        overview: "프로젝트 개요",
        technologies: "기술 스택",
        features: "주요 기능",
        gallery: "프로젝트 갤러리",
      },
      cta: {
        title: "더 많은 프로젝트 보기",
        description: "다른 흥미로운 프로젝트들도 확인해보세요.",
        button: "전체 프로젝트 보기",
      },
      footer: {
        copyright: "© 2025 Portfolio. All rights reserved.",
      },
    },
  },
  en: {
    nav: {
      portfolio: "Portfolio",
      projects: "Projects",
      contact: "Contact",
    },
    home: {
      hero: {
        greeting: "Hello.",
        role: "Creative Developer",
        description:
          "Creating innovative digital experiences is my passion.\nI pursue perfection in every project.",
      },
      projects: {
        title: "Latest Projects",
        subtitle: "Check out my recent work.",
      },
      contact: {
        title: "Want to work together?",
        description: "Let's talk about your new project.",
        emailButton: "Send Email",
        downloadButton: "Download Portfolio",
      },
      footer: {
        copyright: "© 2025 Portfolio. All rights reserved.",
      },
    },
    detail: {
      notFound: {
        title: "Project not found",
        backLink: "Back to home",
      },
      sections: {
        overview: "Project Overview",
        technologies: "Tech Stack",
        features: "Key Features",
        gallery: "Project Gallery",
      },
      cta: {
        title: "View More Projects",
        description: "Discover other exciting projects.",
        button: "View All Projects",
      },
      footer: {
        copyright: "© 2025 Portfolio. All rights reserved.",
      },
    },
  },
};