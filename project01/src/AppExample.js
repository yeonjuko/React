function AppExample(){

    // 1. 사용자에게 이름을 입력받아준다
    // prompt('이름을 말해주세요!)
    // index.js의 <React.StrictMode>를 주석처리하면 두번 뜨지 않음
    let name = prompt('이름을 입력하세요')
    // 2. 현재 날짜 가지고 오기
    // 현재 몇월인지가 필요함 getMonth()
    var today = new Date();
    var month = (today.getMonth()+1);
    let season = "";
    var date = today.toLocaleDateString()
    // 3. 
    // 조건1) 3~5월 : 봄
    // 조건2) 6~8월 : 여름
    // 조건3) 9~11월 : 가을
    // 조건4) 12,1,2월 : 겨울
    if(month<=2||month==12){
        season = "겨울";
      }else if(month>=3 && month<=5){
        season = "봄";
      }else if(month>=6 && month<=8){
        season = "여름";
      }else if(month>=9 && month<=11){
        season = "가을";}

    // 결과창
    // 2022.9.27
    // <hr></hr>
    // 000님 지금은 가을입니다. 좋은 하루 보내세요!
    return(
        <>
        <h1>{date}</h1>
        <hr></hr>
        <h4>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</h4>
        </>
    )
}

export default AppExample;