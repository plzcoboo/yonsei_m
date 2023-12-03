const doctor = () => {
    let doctor = get('.doctor');
    if (doctor) {
        const body = document.getElementsByTagName('body')[0];
        let $p = getAll('.doc-pop .gallelry-body p');
        let $docBtn = getAll('.doc-pop .sub-btn');
        let $docPopup = getAll('.doc-pop .popup-gallery');
        let $docPopupClose = getAll('.doc-pop .popup-gallery .gallelry-header i');
        let $bg = get('.sub-bg');
        
        $docBtn.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                body.classList.add('scrollLock');
                $docPopup.forEach((item) => {
                    item.classList.remove('show');
                });
                $docPopup[idx].classList.add('show');
                $bg.style.display = 'block';
            });
        });
        $docPopupClose.forEach((item, idx) => {
            item.addEventListener('click', (e) => {
                $docPopup[idx].classList.remove('show');
                $bg.style.display = 'none';
                body.classList.remove('scrollLock');
            });
        });
    }
}; 

const interior = () => {
    const interior = get('.interior');
    if (interior) {
        const textData = [
            `연세사랑병원의 인공관절수술은 3D맞춤형인공관절수술로, 특허청으로부터 획득한 2건의 특허 기술 [브릿지 구조를 포함한 인공 무릎관절 환자 맞춤형 수술 가이드 및 제작]과 [정렬 로드를 포함하는 인공 무릎관절 환자 맞춤형 수술가이드 제작]을 이용해 수술을 진행하고 있습니다.`,
            `연세사랑병원은 무엇보다 환자분들에게 더 나은 환경과 서비스를 제공하기 위해 노력하고 있습니다. 이에 본원은 서울 서초, 강남에서 유일하게 3회 연속 보건복지부지정 관절전문병원으로 지정됨과 동시에 의료기관 인증을 2회 연속 획득하는 쾌거를 이룩함으로써 관절 분야의 전문성을 입증하였습니다.`,
            `2019년에는 중국 청도시립병원과 MOU를 체결을 하며 청도시립병원 내에 연세사랑병원의 관절전문센터를 개소하였습니다. 이처럼 국내뿐 아니라 국외에서도 활동하며, 본원의 3D 인공관절 수술기법과 의료기술 둥을 세계에 널리 알렸습니다.`,
            `강남 교보타워의 멋진 경치와 여유로움이 어우러진 연세사랑병원의 진정한 가치를 느낄 수 있는 공간입니다. 안락한 대기공간과 업무를 보실 수 있는 편리한 시설들이 준비되어 있습니다.`,
        ];
        var swiper = new Swiper(".interior .mySwiper", {
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            loop: true,
            cssMode: true,
          }); 
          const $next = get('.swiper-button-next')
          const $prev = get('.swiper-button-prev')
          const $li = getAll('.interior .text-box li')
          const $p = get('.interior .text-box p')
          let cnt = 0;
          $next.addEventListener('click', e=>{
              cnt++
              if(cnt > 3) cnt = 0;
              $li.forEach(item => {
                  item.classList.remove('active'); 
              })
              $li[cnt].classList.add('active');
              $p.textContent = textData[cnt];
          })
      
          $prev.addEventListener('click', e=>{
              cnt--
              if(cnt < 0) cnt = 3;
              $li.forEach(item => {
                  item.classList.remove('active'); 
              })
              $li[cnt].classList.add('active');
              $p.textContent = textData[cnt];
          })
    }
};
const findAddr=()=>{
    const findAdd = document.querySelector('.search-add');
    if(findAdd) {
        findAdd.addEventListener('click',e =>{new daum.Postcode({
        oncomplete: function(data) {
            console.log(data);
            var roadAddr = data.roadAddress; // 도로명 주소 변수
            var jibunAddr = data.jibunAddress; // 지번 주소 변수
            document.getElementById('member-post').value = data.zonecode+' '+roadAddr;
            
        }
        }).open(); })
    }
}

const subInit = () => {
    doctor();
    interior();
    findAddr();
};

(() => {
    window.addEventListener('load', (e) => {
        subInit();
    });
})();

