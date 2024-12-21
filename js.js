// 모든 사이드바 버튼 선택
const sidebarButtons = document.querySelectorAll('.sidebarbutton a');

// 클릭 이벤트 추가
sidebarButtons.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // 기본 동작 방지

        // 링크의 href 속성에서 대상 ID 가져오기
        const targetId = link.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // 부드럽게 스크롤 이동
            targetElement.scrollIntoView({
                behavior: 'smooth', // 스크롤 애니메이션
                block: 'start' // 콘텐츠 상단 정렬
            });
        } else {
            console.error(`해당 ID(${targetId})를 가진 요소를 찾을 수 없습니다.`);
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // 모든 JavaScript 코드를 이 안에 작성
    const thumbnails = document.querySelectorAll('.thumbnail');
    const zoomOverlay = document.getElementById('zoom-overlay');
    const zoomedImage = document.getElementById('zoomed-image');
    const closeBtn = document.querySelector('.close-btn');

    // 확대 이미지를 표시하는 함수
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            const imageUrl = thumbnail.src; // 클릭한 썸네일 이미지의 URL 가져오기
            zoomedImage.src = imageUrl; // 확대 이미지에 URL 설정
            zoomOverlay.classList.remove('hidden'); // 확대 이미지 오버레이 표시
        });
    });

    // 확대 오버레이를 닫는 함수
    const closeZoom = () => {
        zoomOverlay.classList.add('hidden'); // 확대 이미지 오버레이 숨기기
        zoomedImage.src = ''; // 이미지 소스 초기화
    };

    // 오버레이 바깥 영역이나 닫기 버튼을 클릭하면 닫기
    zoomOverlay.addEventListener('click', (e) => {
        if (e.target === zoomOverlay || e.target === closeBtn) {
            closeZoom(); // 확대 화면 닫기
        }
    });
});


//========================================2===========================================

// 요소 선택
const thumbnails2 = document.querySelectorAll('.thumbnail2');
const zoomOverlay2 = document.getElementById('zoom-overlay2');
const zoomedImage2 = document.getElementById('zoomed-image2');
const closeBtn2 = document.querySelector('.close-btn2');

// 확대 이미지를 표시하는 함수
thumbnails2.forEach(thumbnail2 => {
    thumbnail2.addEventListener('click', () => {
        const imageUrl = thumbnail2.src; // 클릭한 썸네일 이미지의 URL 가져오기
        zoomedImage2.src = imageUrl; // 확대 이미지에 URL 설정
        zoomOverlay2.classList.remove('hidden2'); // 확대 이미지 오버레이 표시
    });
});

// 확대 오버레이를 닫는 함수
const closeZoom2 = () => {
    zoomOverlay2.classList.add('hidden2'); // 확대 이미지 오버레이 숨기기
    zoomedImage2.src = ''; // 이미지 소스 초기화
};

// 오버레이 바깥 영역이나 닫기 버튼을 클릭하면 닫기
zoomOverlay2.addEventListener('click', (e) => {
    if (e.target === zoomOverlay2 || e.target === closeBtn2) {
        closeZoom2(); // 확대 화면 닫기
    }
});
