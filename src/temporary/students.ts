enum WorkType {
    OnSite = "Na miejscu",
    ReadyToMove = "Gotowość do przeprowadzki",
    RemoteOnly = "Wyłącznie zdalnie",
    NoMatter = "Bez znaczenia"
}

enum ContractType {
    PermanentOnly = "Tylko UoP",
    B2BPossible = "Możliwe B2B",
    Contract = "Możliwe UZ/UoD",
    NoPreferences = "Brak preferencji"
}

interface Students {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    tel?: string | null;
    githubUsername: string;
    portfolioUrls?: string[] | null;
    projectUrls: string[];
    bio?: string | null;
    expectedTypeWork: WorkType;
    targetWorkCity: string | null;
    expectedContractType: ContractType;
    expectedSalary: number | null;
    canTakeApprenticeship: string;
    monthsOfCommercialExp: number;
    education?: string | null;
    workExperience?: string | null;
    courses?: string | null;
    courseCompletion: number;
    courseEngagment: number;
    projectDegree: number;
    teamProjectDegree: number;
    bonusProjectUrls: string[];
    reservation: boolean;
}

export const users: Students[] = [
    {
        id: 1,
        firstName: "Andrzej",
        lastName: "Nowak",
        courseCompletion: 4,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.RemoteOnly,
        targetWorkCity: "Warszawa",
        expectedContractType: ContractType.PermanentOnly,
        expectedSalary: 5000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 2,
        firstName: "Jan",
        lastName: "Darski",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.NoMatter,
        targetWorkCity: "Warszawa",
        expectedContractType: ContractType.PermanentOnly,
        expectedSalary: 5000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 0,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 3,
        firstName: "Bartosz",
        lastName: "Kowalski",
        courseCompletion: 4,
        courseEngagment: 4,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.ReadyToMove,
        targetWorkCity: "Warszawa",
        expectedContractType: ContractType.PermanentOnly,
        expectedSalary: 5000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 3,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 4,
        firstName: "Dariusz",
        lastName: "Kowalski",
        courseCompletion: 4,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.ReadyToMove,
        targetWorkCity: "Warszawa",
        expectedContractType: ContractType.PermanentOnly,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 3,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 5,
        firstName: "Mariusz",
        lastName: "Leśny",
        courseCompletion: 4,
        courseEngagment: 4,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.OnSite,
        targetWorkCity: "Warszawa",
        expectedContractType: ContractType.B2BPossible,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 3,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 6,
        firstName: "Janusz",
        lastName: "Dersa",
        courseCompletion: 3,
        courseEngagment: 4,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.RemoteOnly,
        targetWorkCity: "Warszawa",
        expectedContractType: ContractType.B2BPossible,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "expressjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 7,
        firstName: "Marek",
        lastName: "Kowal",
        courseCompletion: 5,
        courseEngagment: 4,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.ReadyToMove,
        targetWorkCity: "Poznań",
        expectedContractType: ContractType.B2BPossible,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "expressjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 8,
        firstName: "Anna",
        lastName: "Kowalska",
        courseCompletion: 5,
        courseEngagment: 4,
        projectDegree: 3,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.NoMatter,
        targetWorkCity: "Poznań",
        expectedContractType: ContractType.B2BPossible,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "expressjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 9,
        firstName: "Maria",
        lastName: "Łacka",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 3,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.ReadyToMove,
        targetWorkCity: "Poznań",
        expectedContractType: ContractType.NoPreferences,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 0,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "expressjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 10,
        firstName: "Zofia",
        lastName: "Sarna",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 3,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.NoMatter,
        targetWorkCity: "Katowice",
        expectedContractType: ContractType.NoPreferences,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 0,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nodejs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 11,
        firstName: "Dominik",
        lastName: "Domańkski",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 3,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.OnSite,
        targetWorkCity: "Katowice",
        expectedContractType: ContractType.NoPreferences,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nodejs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 12,
        firstName: "Jan",
        lastName: "Kowalski",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 3,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.OnSite,
        targetWorkCity: "Katowice",
        expectedContractType: ContractType.NoPreferences,
        expectedSalary: 4000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: false,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nodejs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 13,
        firstName: "Ola",
        lastName: "Rucka",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.OnSite,
        targetWorkCity: "Wrocław",
        expectedContractType: ContractType.Contract,
        expectedSalary: 4000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nodejs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        courses: "course 1, course 2, course 3",
    },
    {
        id: 14,
        firstName: "Krzysztof",
        lastName: "Olski",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.NoMatter,
        targetWorkCity: "Wrocław",
        expectedContractType: ContractType.Contract,
        expectedSalary: 4000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 15,
        firstName: "Grzegorz",
        lastName: "Handler",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.ReadyToMove,
        targetWorkCity: "Wrocław",
        expectedContractType: ContractType.Contract,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
    },
    {
        id: 16,
        firstName: "Jan",
        lastName: "Rywa",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.RemoteOnly,
        targetWorkCity: "Gdańsk",
        expectedContractType: ContractType.Contract,
        expectedSalary: 8000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 0,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "nestjs",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 17,
        firstName: "Kacper",
        lastName: "Konieczny",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.RemoteOnly,
        targetWorkCity: "Gdańsk",
        expectedContractType: ContractType.PermanentOnly,
        expectedSalary: 6000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "angular",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },
    {
        id: 18,
        firstName: "Adrian",
        lastName: "Wolny",
        courseCompletion: 5,
        courseEngagment: 3,
        projectDegree: 4,
        teamProjectDegree: 5,
        expectedTypeWork: WorkType.RemoteOnly,
        targetWorkCity: "Gdańsk",
        expectedContractType: ContractType.PermanentOnly,
        expectedSalary: 6000,
        canTakeApprenticeship: "Tak",
        monthsOfCommercialExp: 6,
        reservation: true,
        bonusProjectUrls: ['https://project-back.com', "https://project-front.com"],
        email: "example@example.com",
        tel: "123 123 123",
        githubUsername: "angular",
        portfolioUrls: ["https://portfolio1.com", "https://portfolio2.com"],
        projectUrls: ["https://project-from-course.com"],
        bio: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        education: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet dolor ducimus suscipit tempora lensa!",
        workExperience: "Lorem ipsum dolor sit amet, conectur adiping elit.",
        courses: "course 1, course 2, course 3",
    },

]
