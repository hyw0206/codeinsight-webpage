import { Test1, Test2, Test3, Image } from "../components/title/title";


import * as styled from "../components/history/history";
import * as Styled from "../components/about/about";
import { ProcessWrapper, ProcessTitle, ProcessLine, ProcessItemWrapper
  , ProcessItem ,ProcessItemImg, ProcessItemText, ProcessNextIcon, ProcessItem2
 } from "../components/withcoin/withcoin";

function App() {

  return (
    <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minWidth: "1100px", paddingTop: "5px"}}>
      <svg xmlns="http://www.w3.org/2000/svg" width="57.864" height="57.749" viewBox="0 0 57.864 57.749">
        <g id="logo_login" transform="translate(7 6)">
          <g id="그룹_94" data-name="그룹 94">
            <g id="그룹_93" data-name="그룹 93" transform="translate(0 0)">
              <g id="그룹_92" data-name="그룹 92">
                <path id="패스_159-2" data-name="패스 159" d="M128.208,472.471c-.005-.19-.005-.379-.005-.569a11.58,11.58,0,0,1,6.882-10.3s-5.575.606-15.187,10.45a19.9,19.9,0,0,0,15.177,19.376C125.631,481.972,127.655,474.073,128.208,472.471Z" transform="translate(-112.9 -446.24)" fill="white"/>
                <path id="패스_160-2" data-name="패스 160" d="M135.087,293.359a11.891,11.891,0,0,1,4.89-1.054l19.777.005a.011.011,0,0,0,.011-.011v-8.284a.011.011,0,0,0-.011-.01L140.046,284A20.048,20.048,0,0,0,119.9,303.687v.121C129.512,293.965,135.087,293.359,135.087,293.359Z" transform="translate(-112.9 -278)" fill="white"/>
                <path id="패스_161-2" data-name="패스 161" d="M274.286,678.118h0a11.585,11.585,0,0,1-6.872-10.218c-.553,1.6-2.577,9.5,6.866,18.955a19.814,19.814,0,0,0,15.9-2.909C278.438,683.946,274.286,678.118,274.286,678.118Z" transform="translate(-252.1 -641.67)" fill="white"/>
                <path id="패스_162-2" data-name="패스 162" d="M432,666.375a4.069,4.069,0,0,0-3.958-5.075H427.9a4.111,4.111,0,0,0-3.952,3.062,11.564,11.564,0,0,1-15.846,7.5h0s4.152,5.828,15.893,5.833A19.945,19.945,0,0,0,432,666.375Z" transform="translate(-385.91 -635.42)" fill="white"/>
                
              </g>
            </g>
          </g>
        </g>
      </svg>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", width: "100%", maxWidth: "900px",position: "relative" }}>
          <div style={{ textAlign: "left",zIndex: 3, marginRight: "266px"}}>
          <Test1>2025</Test1>
          <Test1>COIN</Test1>
          <Test1>RECRUITING</Test1>
          <Test2>경기과학기술대학교 프로그래밍 동아리</Test2>
          </div>

          <div style={{
            
            zIndex: 2
          }}>
            <Image src='/title/image_4.png' alt="image_4" />
          </div>
      </div>
      <Styled.AboutUsWrapper>
        <Styled.AboutUsTitle>About us.</Styled.AboutUsTitle>
        <Styled.AboutUsAllBoxWrapper>
          <Styled.AboutUsBoxWrapper>
            수상 횟수 
            <Styled.AboutUsLine />
            <Styled.AboutUsColorTextWrapper startColor="#CA6492" endColor="#B923F5">26</Styled.AboutUsColorTextWrapper> 회
          </Styled.AboutUsBoxWrapper>
          <Styled.AboutUsBoxWrapper>
            특허 출원
            <Styled.AboutUsLine />
            <Styled.AboutUsColorTextWrapper startColor="#BA24F5" endColor="#3C3FFF">4</Styled.AboutUsColorTextWrapper> 회
          </Styled.AboutUsBoxWrapper>
          <Styled.AboutUsBoxWrapper>
            설립기간
            <Styled.AboutUsLine />
            <Styled.AboutUsColorTextWrapper startColor="#3C3FFF" endColor="#2AB446">13</Styled.AboutUsColorTextWrapper> 년
          </Styled.AboutUsBoxWrapper>
        </Styled.AboutUsAllBoxWrapper>
        <Styled.AboutUsTextWrapper> 
          COIN은 다양한 프로그래밍 언어를 연구하고 실전 경험을 쌓는<br/>
          프로그래밍 동아리입니다.<br/>
          웹, 앱, 알고리즘 등 다양한 분야의 개발을 탐구하며,<br/>
          팀 프로젝트와 해커톤과 같은 대외활동을 통해 실력을 키울 수 있습니다.<br/>
          경험이 부족해도 괜찮습니다!<br/>   
          함께 공부하며 성장할 수 있도록 스터디와 멘토링을 제공합니다.<br/>
          프로그래밍을 즐기고, 열정적인 팀원들과 협업하며<br/> 
          더 나은 개발자로 성장하고 싶다면?<br/> 
          COIN에서 시작하세요 🚀
        </Styled.AboutUsTextWrapper>
      </Styled.AboutUsWrapper>
      <ProcessWrapper>
        <ProcessTitle>COIN과 함께하면</ProcessTitle>
        <ProcessLine />
        <ProcessItemWrapper>
          <ProcessItem>
            <ProcessItemImg src="../ProcessImg/family_home.png" />
            <ProcessItemText>동방에서 함께해요</ProcessItemText>
          </ProcessItem>
          <ProcessItem style={{margin: '37px 217px 0px 222px'}}>
            <ProcessItemImg src="../ProcessImg/business_messages.png" />
            <ProcessItemText style={{width: '260px'}}>다양한 지식을 공유해요</ProcessItemText>
          </ProcessItem>
          <ProcessItem >
            <ProcessItemImg src="../ProcessImg/icecream.png" />
            <ProcessItemText style={{width: '260px'}}>다양한 간식과 함께해요</ProcessItemText>
          </ProcessItem>
        </ProcessItemWrapper>
        <ProcessTitle style={{marginTop: '134px'}}>모집절차</ProcessTitle>
        <ProcessLine style={{marginTop: '12px'}}/>
        <ProcessItemWrapper>
          <ProcessItem2 style={{marginRight: '64px'}}>
            <ProcessItemImg src="../ProcessImg/add_to_home_screen.png" />
            <ProcessItemText style={{width: '180px', height: '27px'}}>구글폼 지원하기</ProcessItemText>
          </ProcessItem2>
          <ProcessNextIcon src="../ProcessImg/arrow_forward_ios.png"/>
          <ProcessItem2 style={{marginLeft: '63px', marginRight: '64px'}}>
            <ProcessItemImg src="../ProcessImg/task.png" />
            <ProcessItemText style={{width: '151px', height: '27px'}}>1차 서류 심사</ProcessItemText>
          </ProcessItem2>
          <ProcessNextIcon src="../ProcessImg/arrow_forward_ios.png"/>
          <ProcessItem2 style={{marginLeft: '63px', marginRight: '71px'}}>
            <ProcessItemImg src="../ProcessImg/group.png" />
            <ProcessItemText style={{width: '151px', height: '27px'}}>2차 임원 면접</ProcessItemText>
          </ProcessItem2>
          <ProcessNextIcon src="../ProcessImg/arrow_forward_ios.png"/>
          <ProcessItem2 style={{marginLeft: '63px'}}>
            <ProcessItemImg src="../ProcessImg/beenhere.png" />
            <ProcessItemText style={{width: '109px', height: '27px'}}>최종 합격</ProcessItemText>
          </ProcessItem2>
        </ProcessItemWrapper>
      </ProcessWrapper>
      <Styled.RecruitingWrapper>
        <Styled.BackgroundWrapper>
                  <Styled.RecruitingContentWrapper>

                      <Styled.RecruitingTitle>
                          Recruiting.
                      </Styled.RecruitingTitle>
                      <div>
                          <div style={{ display: 'flex' }}>
                              <div style={{ width: '449px' }}>
                                  <Styled.RecruitingContentTitle>
                                      모집분야
                                  </Styled.RecruitingContentTitle>
                                  <Styled.RecruitingLine />
                                  <Styled.RecruitingContent>
                                      ✓ 개발자<br />
                                      ✓ 웹 디자이너(웹 퍼블리싱)
                                  </Styled.RecruitingContent>
                              </div>

                              <div>
                                  <Styled.RecruitingContentTitle>
                                      활동 내용
                                  </Styled.RecruitingContentTitle>
                                  <Styled.RecruitingLine />
                                  <Styled.RecruitingContent>
                                      각 종 대외 활동<br />
                                      교내/외 창업 대회<br />
                                      팀 개발 프로젝트<br />
                                      코딩 멘토링
                                  </Styled.RecruitingContent>
                              </div>
                          </div>

                          <div style={{ display: 'flex', marginTop: '40px'}}>
                              <div style={{ width: '449px'}}>
                                  <Styled.RecruitingContentTitle>
                                      지원자격
                                  </Styled.RecruitingContentTitle>
                                  <Styled.RecruitingLine />
                                  <Styled.RecruitingContent>
                                      <Styled.noLineHeight>
                                          ✓ 경기과학기술대학교 재학생<br />
                                          &emsp;(신입학/복학 무관)<br />
                                      </Styled.noLineHeight>

                                      ✓ 학과 무관<br />
                                      <Styled.noLineHeight>
                                          ✓ 코딩 혹은 웹 디자인에<br />
                                          &emsp;관심이 있는 재학생<br />
                                      </Styled.noLineHeight>
                                      ✓ 매일 동아리에 참여 가능한 자
                                  </Styled.RecruitingContent>
                              </div>

                              <div>
                                  <Styled.RecruitingContentTitle>
                                      모집기간
                                  </Styled.RecruitingContentTitle>
                                  <Styled.RecruitingLine />
                                  <Styled.RecruitingContent>
                                      신청기한: 2월 28일 ~ 3월 7일<br />
                                      면접일자: 3월 10일 ~ 3월 11일
                                  </Styled.RecruitingContent>
                              </div>
                          </div>
                      </div>
                  </Styled.RecruitingContentWrapper>
                  </Styled.BackgroundWrapper>
          </Styled.RecruitingWrapper>

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
        <styled.MainAlign>
        <styled.TitleText>Where we at.</styled.TitleText>
        <styled.MapImage src="./image3.png"></styled.MapImage>
        <styled.LocInfo>경기과학기술대 2캠퍼스 제1중소기업관 (H동) 314호<br />(경기 시흥시 경기과기대로 270 제1중소기업관 314호)</styled.LocInfo>
      </styled.MainAlign>
      <div style={{ textAlign: "center", padding: "100px 0 20px 0" }}>
        <img src='/title/image_1.png' alt="image_1" width="406px" height="147px" style={{ marginBottom: "10px" }} />
        <Test3>경기과학기술대학교 창업동아리 COIN</Test3>
        <Test3>©2025 COIN, ALL RIGHTS RESERVED</Test3>
      </div>
    </div>
  )
}

export default App
