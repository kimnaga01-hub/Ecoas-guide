document.addEventListener('DOMContentLoaded', () => {
    // Header Scroll Effect
    const header = document.querySelector('.header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // 시행령 별표 3 대상 제품 목록 (전기·전자제품 및 자동차의 자원순환에 관한 법률 시행령)
    const targetProducts = {
        // 제1호: 온도교환기기 (냉매를 포함하는 기기)
        '냉장고': { category: '별표 3 제1호 (온도교환기기)', name: '냉장고', target: true },
        '전기정수기': { category: '별표 3 제1호 (온도교환기기)', name: '전기정수기', target: true },
        '정수기': { category: '별표 3 제1호 (온도교환기기)', name: '전기정수기', target: true },
        '냉온수기': { category: '별표 3 제1호 (온도교환기기)', name: '전기정수기', target: true },
        '자동판매기': { category: '별표 3 제1호 (온도교환기기)', name: '자동판매기', target: true },
        '에어컨': { category: '별표 3 제1호 (온도교환기기)', name: '에어컨디셔너', target: true },
        '에어컨디셔너': { category: '별표 3 제1호 (온도교환기기)', name: '에어컨디셔너', target: true },
        '제습기': { category: '별표 3 제1호 (온도교환기기)', name: '제습기', target: true },
        
        // 제2호: 디스플레이기기 (100㎠ 이상의 화면을 포함하는 기기)
        '텔레비전': { category: '별표 3 제2호 (디스플레이기기)', name: '텔레비전', target: true },
        'tv': { category: '별표 3 제2호 (디스플레이기기)', name: '텔레비전', target: true },
        '모니터': { category: '별표 3 제2호 (디스플레이기기)', name: '모니터', target: true },
        '데스크톱': { category: '별표 3 제2호 (디스플레이기기)', name: '데스크톱형 개인용 컴퓨터', target: true },
        '노트북': { category: '별표 3 제2호 (디스플레이기기)', name: '노트북형 개인용 컴퓨터', target: true },
        '랩톱': { category: '별표 3 제2호 (디스플레이기기)', name: '랩톱형 개인용 컴퓨터', target: true },
        '내비게이션': { category: '별표 3 제2호 (디스플레이기기)', name: '내비게이션', target: true },
        '네비게이션': { category: '별표 3 제2호 (디스플레이기기)', name: '내비게이션', target: true },
        
        // 제3호: 통신·사무기기
        '컴퓨터': { category: '별표 3 제3호 (통신·사무기기)', name: '데스크톱형 개인용 컴퓨터', target: true },
        'pc': { category: '별표 3 제3호 (통신·사무기기)', name: '데스크톱형 개인용 컴퓨터', target: true },
        '자판': { category: '별표 3 제3호 (통신·사무기기)', name: '자판', target: true },
        '키보드': { category: '별표 3 제3호 (통신·사무기기)', name: '자판', target: true },
        '마우스': { category: '별표 3 제3호 (통신·사무기기)', name: '마우스', target: true },
        '스피커': { category: '별표 3 제3호 (통신·사무기기)', name: '스피커', target: true },
        '복사기': { category: '별표 3 제3호 (통신·사무기기)', name: '복사기', target: true },
        '프린터': { category: '별표 3 제3호 (통신·사무기기)', name: '프린터', target: true },
        '팩시밀리': { category: '별표 3 제3호 (통신·사무기기)', name: '팩시밀리', target: true },
        '팩스': { category: '별표 3 제3호 (통신·사무기기)', name: '팩시밀리', target: true },
        '스캐너': { category: '별표 3 제3호 (통신·사무기기)', name: '스캐너', target: true },
        '범프로젝터': { category: '별표 3 제3호 (통신·사무기기)', name: '범프로젝터', target: true },
        '프로젝터': { category: '별표 3 제3호 (통신·사무기기)', name: '범프로젝터', target: true },
        '공유기': { category: '별표 3 제3호 (통신·사무기기)', name: '유무선공유기', target: true },
        '라우터': { category: '별표 3 제3호 (통신·사무기기)', name: '유무선공유기', target: true },
        '이동전화단말기': { category: '별표 3 제3호 (통신·사무기기)', name: '이동전화단말기', target: true },
        '휴대폰': { category: '별표 3 제3호 (통신·사무기기)', name: '이동전화단말기', target: true },
        '스마트폰': { category: '별표 3 제3호 (통신·사무기기)', name: '이동전화단말기', target: true },
        '폰': { category: '별표 3 제3호 (통신·사무기기)', name: '이동전화단말기', target: true },
        '전지': { category: '별표 3 제3호 (통신·사무기기)', name: '전지', target: true },
        '배터리': { category: '별표 3 제3호 (통신·사무기기)', name: '전지', target: true },
        '충전기': { category: '별표 3 제3호 (통신·사무기기)', name: '충전기', target: true },
        
        // 제4호: 일반 전기·전자제품
        '세탁기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '세탁기', target: true },
        '전기오븐': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기오븐', target: true },
        '오븐': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기오븐', target: true },
        '전자레인지': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전자레인지', target: true },
        '음식물처리기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '음식물처리기', target: true },
        '식기건조기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '식기건조기', target: true },
        '식기세척기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '식기세척기', target: true },
        '전기비데': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기비데', target: true },
        '비데': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기비데', target: true },
        '공기청정기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '공기청정기', target: true },
        '전기히터': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기히터', target: true },
        '히터': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기히터', target: true },
        '오디오': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '오디오', target: true },
        '전기밥솥': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기밥솥', target: true },
        '밥솥': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기밥솥', target: true },
        '연수기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '연수기', target: true },
        '가습기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '가습기', target: true },
        '전기다리미': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기다리미', target: true },
        '다리미': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기다리미', target: true },
        '선풍기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '선풍기', target: true },
        '믹서': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '믹서', target: true },
        '주서': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '믹서', target: true },
        '청소기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '청소기', target: true },
        '비디오플레이어': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '비디오플레이어', target: true },
        'vcr': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '비디오플레이어', target: true },
        'dvd': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '비디오플레이어', target: true },
        '토스트기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '토스트기', target: true },
        '전기주전자': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기주전자', target: true },
        '주전자': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기주전자', target: true },
        '전기온수기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기온수기', target: true },
        '온수기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기온수기', target: true },
        '전기프라이팬': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기프라이팬', target: true },
        '프라이팬': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기프라이팬', target: true },
        '헤어드라이어': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '헤어드라이어', target: true },
        '드라이어': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '헤어드라이어', target: true },
        '러닝머신': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '러닝머신', target: true },
        '감시카메라': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '감시카메라', target: true },
        'cctv': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '감시카메라', target: true },
        '식품건조기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '식품건조기', target: true },
        '전기안마기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기안마기', target: true },
        '안마기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '전기안마기', target: true },
        '족욕기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '족욕기', target: true },
        '재봉틀': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '재봉틀', target: true },
        '영상게임기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '영상게임기', target: true },
        '게임기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '영상게임기', target: true },
        '제빵기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '제빵기', target: true },
        '튀김기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '튀김기', target: true },
        '커피메이커': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '커피메이커', target: true },
        '커피머신': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '커피메이커', target: true },
        '약탕기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '약탕기', target: true },
        '탈수기': { category: '별표 3 제4호 (일반 전기·전자제품)', name: '탈수기', target: true },
        
        // 제5호: 태양광 패널
        '태양광패널': { category: '별표 3 제5호 (태양광 패널)', name: '태양광 패널', target: true },
        '태양광': { category: '별표 3 제5호 (태양광 패널)', name: '태양광 패널', target: true },
        '태양전지': { category: '별표 3 제5호 (태양광 패널)', name: '태양광 패널', target: true },
        '태양전지판': { category: '별표 3 제5호 (태양광 패널)', name: '태양광 패널', target: true },
    };

    // 제품 검색 기능
    const productSearch = document.getElementById('product-search');
    const checkBtn = document.getElementById('check-btn');
    const resultArea = document.getElementById('result-area');
    const resultCard = document.getElementById('result-card');

    function checkProduct() {
        const searchTerm = productSearch.value.trim().toLowerCase();
        
        if (!searchTerm) {
            alert('제품명을 입력해주세요.');
            return;
        }

        // 제품 검색
        let found = null;
        for (const [key, value] of Object.entries(targetProducts)) {
            if (searchTerm.includes(key) || key.includes(searchTerm)) {
                found = value;
                break;
            }
        }

        // 결과 표시
        if (found && found.target) {
            // 대상인 경우
            resultCard.innerHTML = `
                <div style="text-align: center; margin-bottom: 32px; padding-bottom: 32px; border-bottom: 2px solid #e8f5e9;">
                    <div style="width: 100px; height: 100px; background: linear-gradient(135deg, var(--success-color) 0%, #00a085 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; box-shadow: 0 8px 24px rgba(0, 184, 148, 0.4); animation: scaleIn 0.5s ease-out;">
                        <span style="font-size: 3rem; color: white;">✓</span>
                    </div>
                    <div style="display: inline-block; padding: 8px 20px; background: linear-gradient(135deg, rgba(0, 184, 148, 0.1) 0%, rgba(0, 184, 148, 0.05) 100%); border-radius: 30px; margin-bottom: 16px;">
                        <span style="font-size: 0.9rem; font-weight: 600; color: var(--success-color);">${found.category}</span>
                    </div>
                    <h3 style="font-size: 2rem; color: var(--success-color); margin-bottom: 16px; font-weight: 700; line-height: 1.3;">
                        재활용 의무 대상
                    </h3>
                    <p style="font-size: 1.2rem; color: var(--text-color); margin-bottom: 12px; line-height: 1.6;">
                        <strong style="color: var(--primary-color); font-size: 1.3rem;">"${productSearch.value}"</strong>은(는)<br>
                        재활용 의무 대상 제품입니다.
                    </p>
                </div>
                <div style="background: linear-gradient(135deg, #e8f5e9 0%, #ffffff 100%); padding: 28px; border-radius: var(--radius-lg); border-left: 5px solid var(--success-color); margin-top: 24px; box-shadow: 0 4px 12px rgba(0, 184, 148, 0.1);">
                    <div style="display: flex; align-items: start; gap: 12px;">
                        <span style="font-size: 1.5rem; flex-shrink: 0;">📋</span>
                        <div>
                            <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-color); margin-bottom: 8px;">의무 사항</h4>
                            <p style="margin: 0; color: var(--text-color); line-height: 1.8; font-size: 1rem;">
                                이 제품을 제조·수입·판매하는 사업자는 재활용 의무를 이행하고, 매년 4월 15일까지 전년도 실적을 신고해야 합니다.
                            </p>
                        </div>
                    </div>
                </div>
            `;
            resultArea.style.display = 'block';
        } else {
            // 비대상인 경우
            resultCard.innerHTML = `
                <div style="text-align: center; margin-bottom: 32px; padding-bottom: 32px; border-bottom: 2px solid #fff3e0;">
                    <div style="width: 100px; height: 100px; background: linear-gradient(135deg, var(--warning-color) 0%, #f57c00 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 24px; box-shadow: 0 8px 24px rgba(253, 203, 110, 0.4); animation: scaleIn 0.5s ease-out;">
                        <span style="font-size: 3rem; color: white;">✗</span>
                    </div>
                    <h3 style="font-size: 2rem; color: #f57c00; margin-bottom: 16px; font-weight: 700; line-height: 1.3;">
                        재활용 의무 비대상
                    </h3>
                    <p style="font-size: 1.2rem; color: var(--text-color); margin-bottom: 12px; line-height: 1.6;">
                        <strong style="color: var(--primary-color); font-size: 1.3rem;">"${productSearch.value}"</strong>은(는)<br>
                        시행령 별표 3에 명시되지 않은 제품입니다.
                    </p>
                    <p style="font-size: 0.95rem; color: var(--text-light);">
                        재활용 의무 대상이 아닐 수 있습니다.
                    </p>
                </div>
                <div style="background: linear-gradient(135deg, #fff3e0 0%, #ffffff 100%); padding: 28px; border-radius: var(--radius-lg); border-left: 5px solid var(--warning-color); margin-top: 24px; box-shadow: 0 4px 12px rgba(253, 203, 110, 0.1);">
                    <div style="display: flex; align-items: start; gap: 12px;">
                        <span style="font-size: 1.5rem; flex-shrink: 0;">💡</span>
                        <div>
                            <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-color); margin-bottom: 8px;">참고</h4>
                            <p style="margin: 0; color: var(--text-color); line-height: 1.8; font-size: 1rem;">
                                정확한 판단을 위해서는 제품의 세부 분류를 확인하시거나, 한국환경공단(1544-1234)에 문의하시기 바랍니다.
                            </p>
                        </div>
                    </div>
                </div>
            `;
            resultArea.style.display = 'block';
        }

        // 결과 영역으로 스크롤
        resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    if (checkBtn) {
        checkBtn.addEventListener('click', checkProduct);
    }

    if (productSearch) {
        productSearch.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                checkProduct();
            }
        });
    }

    // Accordion Functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const item = header.parentElement;
            const isActive = item.classList.contains('active');

            // Close all other items
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-body').style.maxHeight = null;
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            const body = item.querySelector('.accordion-body');

            if (!isActive) {
                body.style.maxHeight = body.scrollHeight + "px";
            } else {
                body.style.maxHeight = null;
            }
        });
    });

    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');

    if (mobileBtn && nav) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent click from bubbling
            nav.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileBtn.querySelectorAll('span');
            if (nav.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (nav.classList.contains('active') && !nav.contains(e.target) && !mobileBtn.contains(e.target)) {
                nav.classList.remove('active');
                // Reset icon
                const spans = mobileBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                // Reset icon
                const spans = mobileBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Contact Form Validation (Simple)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (!name.value || !email.value || !message.value) {
                alert('모든 항목을 입력해주세요.');
                return;
            }

            // Simulate sending
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = '전송 중...';
            btn.disabled = true;

            setTimeout(() => {
                alert('문의가 성공적으로 접수되었습니다.\n빠른 시일 내에 답변 드리겠습니다.');
                contactForm.reset();
                btn.innerText = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
});
