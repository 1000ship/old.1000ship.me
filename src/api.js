const works = [
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/221843365322",
        imageName: "remocon.jpg",
        supportVideo: true,
        videoName: "remocon.mp4",
        title: "간단한 PC원격제어, Remocon",
        description: "QR코드를 찍으면 모바일 컨트롤러가 나타난다. 터치패드, 키보드 조작하듯 웹소켓 통신으로 원격 제어하도록 만들었다.",
        createdYear: "2020년",
        tags: ["Web Socket", "Python", "Javascript", "Framework7"],
        techIcons: ["python", 'javascript', 'framework7'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/221833669565",
        imageName: "travelbadge.jpg",
        supportVideo: false,
        videoName: null,
        title: "내 여행 발자취, TravelBadge",
        description: "단순히 내가 여행을 좋아해서 만들게되었다. 다녀온 나라를 iOS Today 위젯을 띄울 수 있다.",
        createdYear: "2020년",
        tags: ["개인 앱 개발","Swift","iOS"],
        techIcons: ['swift', 'ios'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/221833705335",
        imageName: "foodiary.jpg",
        supportVideo: true,
        videoName: "foodiary.mp4",
        title: "오늘의 음식 일기장, Foodiary",
        description: "SW마에스트로 과정 중 진행한 팀프로젝트",
        createdYear: "2019년",
        tags: ["Web App","Ruby on rails","Android/iOS","소프트웨어마에스트로"],
        techIcons: ['ruby', 'rails', 'framework7', 'android', 'ios', 'aws'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/130179162297",
        imageName: "cookeat.jpg",
        supportVideo: false,
        videoName: null,
        title: "요리 레시피 SNS, CookEat",
        description: "왜 요리 레시피는 전문적인 셰프들만 작성하는걸까? 생활 속 나만의 요리책도 공유할 수 있지 않을까?",
        createdYear: "2013년",
        tags: ["2013 SK 스마틴앱챌린지 최우수","Adobe AIR","ActionScript"],
        techIcons: ['air', 'php'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/130144509321",
        imageName: "android_game.jpg",
        supportVideo: false,
        videoName: null,
        title: "안드로이드 게임 개발용 개인 라이브러리",
        description: "플래시 IDE로 게임 개발하는게 너무 익숙해서 최대한 비슷하게 게임라이브러리를 만들어보고자했다. 완벽하지 않지만 화면 렌더링용으로 그냥 그럭저럭 쓸만했다.",
        createdYear: "2012년",
        tags: ["개인 라이브러리","Android"],
        techIcons: ['android'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/130171930719",
        imageName: "evermind_pc.jpg",
        supportVideo: false,
        videoName: null,
        title: "마인드맵 그리기, Evermind for PC",
        description: "SK STAC 팀 프로젝트로 개발했던 것을 PC버전으로 다시 만들어본 손 쉽게 마인드맵을 그리는 프로그램. XML형식 파일로 내보내고 불러올 수 있다.",
        createdYear: "2012년",
        tags: ["베지어 곡선","Adobe AIR","ActionScript","한국디지털미디어고등학교 IT경진대회 최우수"],
        techIcons: ['air'],
    },
    {
        linkHref: "https://github.com/devxoul/Evermind",
        imageName: "evermind.jpg",
        supportVideo: false,
        videoName: null,
        title: "마인드맵 그리기, Evermind for Android",
        description: "고등학교 입학 후 첫 공모전 입상 작품이자 첫 팀프로젝트 작품. GitHub, REST API 등 모르던 것들을 많이 배울 수 있었다.",
        createdYear: "2012년",
        tags: ["베지어 곡선","Adobe AIR","ActionScript","2013 SK 스마틴앱챌린지 우수"],
        techIcons: ['air', 'android'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/130141493586",
        imageName: "dimimons.jpg",
        supportVideo: false,
        videoName: null,
        title: "교내 인트라넷 앱, Dimimons",
        description: "모바일 앱이 처음 등장할 무렵, 비공식적으로 만든 교내 인트라넷 앱. 기상송 신청, 잔류 확인, 급식 평가 등 기능이 있었다.",
        createdYear: "2012년",
        tags: ["교내 앱 개발","Adobe AIR","ActionScript","행정안전부 SW인재발굴 앱개발경진대회 장려"],
        techIcons: ['air'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/130130619961",
        imageName: "kickball.jpg",
        supportVideo: true,
        videoName: "kickball.mp4",
        title: "볼 트래핑 게임, KickBall",
        description: "처음으로 만들어본 안드로이드 게임. 구리지만 스마트폰 초창기라 많이들 즐겨주셨다.",
        createdYear: "2012년",
        tags: ["개인 게임 어플","Adobe AIR","ActionScript","44.51K Downloads"],
        techIcons: ['air', 'android'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/130141988984",
        imageName: "ship2d.jpg",
        supportVideo: true,
        videoName: "ship2d.mp4",
        title: "2D 그래픽 하드웨어가속렌더링, Ship2D 개인 라이브러리 개발",
        description: "기존 CPU 단에서 렌더링하여 그래픽처리 속도가 느렸던 플래시게임을 위해 GPU를 사용하여 그림을 그리도록 돕는 라이브러리를 만들었다.",
        createdYear: "2011년",
        tags: ["비공식 개인프로젝트","ActionScript 3.0","하드웨어가속렌더링"],
        techIcons: ['flash'],
    },
    {
        linkHref: "https://blog.naver.com/cjstjdgur123/130120715679",
        imageName: "molehill.jpg",
        supportVideo: true,
        videoName: "molehill.mp4",
        title: "두더지 잡기 게임, Molehill",
        description: "AS3.0 내 OpenGL처럼 GPU 가속 렌더링을 도와주는 Molehill API를 활용한 3D 두더지 잡기 게임",
        createdYear: "2011년",
        tags: ["비공식 팀프로젝트","ActionScript 3.0","하드웨어가속렌더링"],
        techIcons: ['flash'],
    },
]

export const workspaceApi = {
    getWorks: ()=>works,
}

export const rootApi = {
    getRootPath: () => {
        if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
            return "/"
        } else {
            // return "https://1000ship.github.io/1000ship.me/"
            return "http://1000sh.ipdisk.co.kr:8000/list/HDD1/1000sh-disk/_page/"
        }
    }
}