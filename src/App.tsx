import * as styled from "../components/history/history";

function App() {

  return (
    <styled.HistoryWrapper>
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSejLO8YisYWE2VvaazymfAXUxcPrItGNxpl4Kfvmz0fgPkyCw/viewform?usp=dialog" target="_blank" rel="noopener norefferer">
        <styled.ApplyButton>2025 COIN 지원하기</styled.ApplyButton>
      </a>
      <styled.HistoryArticleWrapper>
        <styled.HistoryLine />
        <styled.Circle top="0px" color="#C066F7"></styled.Circle>
        <styled.Circle top="159px" color="#8E61E9"></styled.Circle>
        <styled.Circle top="381px" color="#646FF0"></styled.Circle>
        <styled.Circle top="486px" color="#329CDA"></styled.Circle>
        <styled.Circle top="625px" color="#358BE2"></styled.Circle>
        <styled.Circle top="764px" color="#40C3BE"></styled.Circle>
        <styled.Circle top="903px" color="#40C37B"></styled.Circle>
        <styled.Circle top="1067px" color="#40C37B"></styled.Circle>
        <styled.Circle top="1200px" color="#40C37B"></styled.Circle>
        <styled.BGImage src="history/history1.png" width="240px" height="163px" left="-358px" top="-68px" style={{ rotate: "-30deg"}}/>
        <styled.BGImage src="history/history2.png" width="164px" height="164px" left= "270px" top="463px" />
        <styled.BGImage src="history/history3.png" width="173px" height="173px" left="-508px" top="883px" />
        <styled.Article top="-20px" left="24px" align="left">
          <h1>2024</h1>
          <p>제 14회 G-창업리그 대상 Qood. (큐드)</p>
          <p>제 14회 G-창업리그 장려상 FitNow (핏나우)</p>
          <p>전공그룹스터디 대상</p>
          <p>전공그룹스터디 금상</p>
        </styled.Article> 
        <styled.Article top="138px" left="-344px" align="right">
          <h1>2023</h1>
          <p>ICC 연계 창업캠프 창의상</p>
          <p>제 13회 G-창업리그 최우수상 (팜팜)</p>
          <p>제 13회 G-창업리그 우수상 (MWM)</p>
          <p>제 13회 G-창업리그 장려상 (캠퍼니)</p>
          <p>전공 그룹스터디 은상</p>
          <p>전공 그룹스터디 동상</p>
        </styled.Article> 
        <styled.Article top="361px" left="24px" align="left">
          <h1>2022</h1>
          <p>제 12회 G-창업리그 대상 (짤랑)</p>
        </styled.Article> 
        <styled.Article top="466px" left="-397px" align="right" big={true}>
          <h1>2021</h1>
          <p>교육부, 과학기술정보통신부 주최 2021 학생 창업</p>
          <p>유망팀 300대회 참여 및 창업도전형 최종선발팀</p>
        </styled.Article> 
        <styled.Article top="605px" left="24px" align="left" big={true}>
          <h1>2018</h1>
          <p>특허 출원(소셜다이닝 서비스 제공 시스템 및 방법)</p>
          <p>K-Hackathon 전국 대학생 앱 챌린지 최우수상</p>
          <p>(과학기술정보통신부 장관상)</p>
        </styled.Article> 
        <styled.Article top="744px" left="-397px" align="right" big={true}>
          <h1>2017</h1>
          <p>제 7회 G-창업리그 대상(네팡이)</p>
          <p>K-Hackathon 지역 예선 통과 / 수도권 본선 진출</p>
        </styled.Article> 
        <styled.Article top="883px" left="24px" align="left" big={true}>
          <h1>2016</h1>
          <p>제 6회 G-창업리그 금상</p>
          <p>제 6회 G-창업리그 은상</p>
          <p>특허 출원(NFC를 구비한 도어락 제어 시스템)</p>
          <p>특허 출원(비콘을 이용한 출석 확인 방법)</p>
        </styled.Article> 
        <styled.Article top="1047px" left="-397px" align="right" big={true}>
          <h1>2015</h1>
          <p>제 5회 G-창업리그 대상</p>
          <p>특허 출원(OTP를 이용한 NFC 태그 보안개폐 시스템)</p>
        </styled.Article> 
        <styled.Article top="1180px" left="24px" align="left" big={true}>
          <h1>2014</h1>
          <p>제 1회 대학연합 창업아이디어 경진대회 대상</p>
          <p>제 1회 대학연합 창업아이디어 경진대회 동상</p>
          <p>제 4회 G-창업프로젝트 지원사업 과제 선정</p>
        </styled.Article> 
        
        
        
        
      </styled.HistoryArticleWrapper>

      
    </styled.HistoryWrapper>
  )
}

export default App
