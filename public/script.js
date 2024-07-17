// script.js
document.addEventListener('DOMContentLoaded', () => {
    const countryNameElement = document.getElementById('country-name');
    const capitalInput = document.getElementById('capital-input');
    const submitBtn = document.getElementById('submit-btn');
    const resultContainer = document.getElementById('result-container');
    const resultMessage = document.getElementById('result-message');
    const score_display = document.getElementById('score');
    const remain = document.getElementById('Timer');
    const startButton = document.getElementById('startButton');
    const timerDisplay = document.getElementById('timer');

    const countries =[
        { name: '대한민국', capital: '서울' },
                { name: '일본', capital: '도쿄' },
                { name: '중국', capital: '베이징' },
           
       
          
        
            {
              "name": "과테말라",
              "capital": "과테말라시티"
            },
          
           
          
            {
              "name": "그리스",
              "capital": "아테네"
            },
          
           
           
            {
              "name": "나이지리아",
              "capital": "아부자"
            },
            {
              "name": "남아프리카",
              "capital": "프리토리아"
            },
            {
              "name": "네덜란드",
              "capital": "암스테르담"
            },
            {
              "name": "네팔",
              "capital": "카트만두"
            },
            {
              "name": "노르웨이",
              "capital": "오슬로"
            },
            {
              "name": "뉴질랜드",
              "capital": "웰링턴"
            },
            {
              "name": "니제르",
              "capital": "니아메"
            },
            
            {
              "name": "덴마크",
              "capital": "코펜하겐"
            },
            {
              "name": "도미니카",
              "capital": "산토도밍고"
            },
            {
              "name": "독일",
              "capital": "베를린"
            },
            {
              "name": "라오스",
              "capital": "비엔티안"
            },
            {
              "name": "라이베리아",
              "capital": "몬로비아"
            },
            {
              "name": "라트비아",
              "capital": "리가"
            },
            {
              "name": "러시아",
              "capital": "모스크바"
            },
            {
              "name": "레바논",
              "capital": "베이루트"
            },
            {
              "name": "루마니아",
              "capital": "부크레슈티"
            },
            {
              "name": "룩셈부르크",
              "capital": "룩셈부루크"
            },
            {
              "name": "르완다",
              "capital": "키칼리"
            },
            {
              "name": "리비아",
              "capital": "트리폴리"
            },
            {
              "name": "리투아니아",
              "capital": "빌뉴스"
            },
            {
              "name": "마다가스카르",
              "capital": "안타나나리보"
            },
         
            {
              "name": "말레이시아",
              "capital": "쿠알라룸푸르"
            },
         
            {
              "name": "멕시코",
              "capital": "멕시코시티"
            },
            {
              "name": "모로코",
              "capital": "라바트"
            },
            {
              "name": "모리타니",
              "capital": "누악쇼트"
            },
            {
              "name": "모잠비크",
              "capital": "마푸토"
            },
           
            {
              "name": "몰타",
              "capital": "발레타"
            },
            {
              "name": "몽골",
              "capital": "울란바토르"
            },
            {
              "name": "미국",
              "capital": "워싱턴D.C"
            },
            {
              "name": "미얀마",
              "capital": "양곤"
            },
           
            {
              "name": "방글라데시",
              "capital": "다카"
            },
            {
              "name": "베네주엘라",
              "capital": "카라카스"
            },
         
            {
              "name": "베트남",
              "capital": "하노이"
            },
            {
              "name": "벨기에",
              "capital": "브뤼셀"
            },
            {
              "name": "벨라루스",
              "capital": "민스크"
            },
           
            {
              "name": "보스니아",
              "capital": "사라예보"
            },
         
            {
              "name": "볼리비아",
              "capital": "라파스"
            },
            {
              "name": "부룬디",
              "capital": "부줌부라"
            },
            
            {
              "name": "부탄",
              "capital": "팀부"
            },
            {
              "name": "스페인",
              "capital": "마드리드"
            },
            {
              "name": "슬로바키아",
              "capital": "브라티슬라바"
            },
            {
              "name": "슬로베니아",
              "capital": "류블랴나"
            },
            {
              "name": "시리아",
              "capital": "다마스쿠스"
            },
           
            {
              "name": "중국",
              "capital": "베이징"
            },
            {
              "name": "아이슬란드",
              "capital": "레이캬비크"
            },
            {
              "name": "아이티",
              "capital": "포르트프랭스"
            },
            {
              "name": "아일랜드",
              "capital": "더블린"
            },
            {
              "name": "아제르바이잔",
              "capital": "바쿠"
            },
            {
              "name": "아프카니스탄",
              "capital": "카불"
            },
            {
              "name": "알바니아",
              "capital": "티라나"
            },
            {
              "name": "알제리",
              "capital": "알제"
            },
            {
              "name": "앙골라",
              "capital": "루안다"
            },
            
            {
              "name": "에스토니아",
              "capital": "탈린"
            },
            {
              "name": "에스파냐",
              "capital": "마드리드"
            },
            {
              "name": "에이레",
              "capital": "더블린"
            },
            {
              "name": "에콰도르",
              "capital": "키토"
            },
            {
              "name": "에티오피아",
              "capital": "아디스아바바"
            },
            {
              "name": "엘살바도르",
              "capital": "산살바도르"
            },
            {
              "name": "영국",
              "capital": "런던"
            },
            {
              "name": "예멘",
              "capital": "사나"
            },
           
            {
              "name": "오스트렐리아",
              "capital": "캔버라"
            },
            {
              "name": "오스트리아",
              "capital": "빈"
            },
            
            {
              "name": "요르단",
              "capital": "암만"
            },
            {
              "name": "우간다",
              "capital": "캄팔라"
            },
            {
              "name": "우루과이",
              "capital": "몬테비데오"
            },
            {
              "name": "우즈베키스탄",
              "capital": "타슈켄트"
            },
            {
              "name": "우크라이나",
              "capital": "키에프"
            },
            {
              "name": "유고슬라비아",
              "capital": "베오그라드"
            },
            {
              "name": "이라크",
              "capital": "바그다드"
            },
            {
              "name": "이란",
              "capital": "테헤란"
            },
            {
              "name": "이스라엘",
              "capital": "예루살렘"
            },
            {
              "name": "이집트",
              "capital": "카이로"
            },
            {
              "name": "이탈리아",
              "capital": "로마"
            },
            {
              "name": "인도",
              "capital": "뉴델리"
            },
            {
              "name": "인도네시아",
              "capital": "자카르타"
            },
            {
              "name": "일본",
              "capital": "도쿄"
            },
            {
              "name": "자메이카",
              "capital": "킹스턴"
            },
            {
              "name": "잠비아",
              "capital": "루사카"
            },
            
            {
              "name": "싱가포르",
              "capital": "싱가포르"
            },
            {
              "name": "아랍에미리트",
              "capital": "아부다비"
            },
            {
              "name": "아르메니아",
              "capital": "예레반"
            },
            {
              "name": "아르헨티나",
              "capital": "부에노스아이레스"
            },
           
            {
              "name": "파나마",
              "capital": "파나마"
            },
            {
              "name": "파라과이",
              "capital": "아순시온"
            },
            {
              "name": "파키스탄",
              "capital": "이슬라마바드"
            },
            {
              "name": "파푸아뉴기니",
              "capital": "포토모르즈비"
            },
           
            {
              "name": "페루",
              "capital": "리마"
            },
            {
              "name": "포르투칼",
              "capital": "리스본"
            },
            {
              "name": "폴란드",
              "capital": "바르샤바"
            },
            {
              "name": "프랑스",
              "capital": "파리"
            },
            
            {
              "name": "핀란드",
              "capital": "헬싱키"
            },
            {
              "name": "필리핀",
              "capital": "마닐라"
            },
            {
              "name": "한국",
              "capital": "서울"
            },
            {
              "name": "헝가리",
              "capital": "부다페스트"
            },
            
            {
              "name": "세네갈",
              "capital": "다카르"
            },
            
            {
              "name": "소말리아",
              "capital": "모가디슈"
            },
            {
              "name": "투발루",
              "capital": "푸나푸티"
            },
            {
              "name": "튀니지",
              "capital": "튀니스"
            },
            {
              "name": "불가리아",
              "capital": "소피아"
            },
            {
              "name": "브라질",
              "capital": "브라질리아"
            },
            
           
            {
              "name": "사우디아라비아",
              "capital": "리야드"
            },
            
        
          
            {
              "name": "중앙아프리카",
              "capital": "방기"
            },
            {
              "name": "지부티",
              "capital": "지부티"
            },
            {
              "name": "짐바브웨",
              "capital": "하라레이"
            },
            {
              "name": "짐바브웨",
              "capital": "하라테"
            },
            {
              "name": "차드",
              "capital": "엔자메나"
            },
            {
              "name": "체코",
              "capital": "프라하"
            },
            {
              "name": "칠레",
              "capital": "산티아고"
            },
            {
              "name": "카메룬",
              "capital": "야운데"
            },
            
            {
              "name": "카자흐스탄",
              "capital": "알마티"
            },
            {
              "name": "카타르",
              "capital": "도하"
            },
            {
              "name": "캄보디아",
              "capital": "프놈펜"
            },
            {
              "name": "캐나다",
              "capital": "오타와"
            },
            {
              "name": "케냐",
              "capital": "나이로비"
            },
            
            {
              "name": "콜롬비아",
              "capital": "보고타"
            },
            {
              "name": "콩고공화국",
              "capital": "브라자빌"
            },
            {
              "name": "콩고민주공화국",
              "capital": "킨샤샤"
            },
            {
              "name": "쿠바",
              "capital": "아나바"
            },
            {
              "name": "쿠웨이트",
              "capital": "쿠웨이트"
            },
            {
              "name": "크로아티아",
              "capital": "자그레브"
            },
            {
              "name": "키르기스스탄",
              "capital": "비슈케크"
            },
            
            {
              "name": "타이",
              "capital": "방콕"
            },
            {
              "name": "타이완",
              "capital": "타이베이"
            },
           
            {
              "name": "수단",
              "capital": "하르툼"
            },
            
            {
              "name": "수리남",
              "capital": "파라마리보"
            },
            
           
            {
              "name": "스웨덴",
              "capital": "스톡홀름"
            },
            {
              "name": "스위스",
              "capital": "베른"
            },
            {
              "name": "터키",
              "capital": "앙카라"
            }
           
          ];

      
    let currentCountryIndex = 0;

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
      }
   

      shuffle(countries);
    function showNextCountry() {
        
        const country = countries[currentCountryIndex];
        countryNameElement.textContent = country.name;
        capitalInput.value = null   ;
        
        capitalInput.focus();
    }
    let score = 0;
    function checkAnswer() {
        const userAnswer = capitalInput.value.trim();
        const correctAnswer = countries[currentCountryIndex].capital;

        if (userAnswer === correctAnswer) {
            gameTime = gameTime + 3;
            score = score + 1;
            score_display.textContent = "점수: " + score.toString();
            resultMessage.textContent = '정답입니다! 시간이 3초 늘었습니다';
            resultMessage.style.color = 'green';
            
        } else {
            gameTime = gameTime - 6;
            resultMessage.textContent = `오답입니다! 정답은 ${correctAnswer}입니다. 시간이 6초 줄었습니다`;
            resultMessage.style.color = 'red';
           
        }

        resultContainer.style.display = 'block';
        currentCountryIndex = (currentCountryIndex + 1) % countries.length;
        showNextCountry()
    }

    submitBtn.addEventListener('click', checkAnswer);

    document.getElementById("capital-input").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            // Enter 키가 눌렸을 때 실행할 함수 호출
            checkAnswer();
        }
    });
    
   

    setTimeout(function() {
        //your code to be executed after 1 second
      }, 1000);
    
    startButton.style.display = 'block';

    startButton.addEventListener('click', () => {
      startButton.style.display = 'none';
      let countdown = 5;
      timerDisplay.innerHTML = `게임 시작까지 ${countdown}초`;
  
      const countdownInterval = setInterval(() => {
        countdown--;
        timerDisplay.innerHTML = `게임 시작까지 ${countdown}초`;
        if (countdown <= 0) {
          clearInterval(countdownInterval);
          startGame();
        }
      }, 1000);
    });
    let gameTime = 60;
    function startGame() {
     
    
      timerDisplay.innerHTML = `남은 시간: ${gameTime}초`;
      showNextCountry();
      const gameInterval = setInterval(() => {
        gameTime--;
        timerDisplay.innerHTML = `남은 시간: ${gameTime}초`;
        if (gameTime <= 0) {
          clearInterval(gameInterval);
          endGame();
        }
      }, 1000);
    }
  
    function endGame() {
        alert("게임 종료! 당신의 점수는 : "+ score.toString() + "점입니다. 다시 시도해서 세계지리의 왕이 되어보세요!");
        location.reload(true);
    }
  });

