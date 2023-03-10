/**
 * 확인 메세지 출력 후 이동하는 링크
 * 
 * 만든이 : 불타는파이리
 * 
 * 만든 날짜 : 23.3.10
 */

window.addEventListener("load",function(){
        
    var confirmLinkList = document.querySelectorAll(".confirm-link");
    for(var i=0; i<confirmLinkList.length; i++){
      confirmLinkList[i].addEventListener("click",function(e){
        //안내메세지 설정
        //앞에께 있으면 앞에께 나오고 없으면 뒤에께 나온다 - 자바에선 안됨
        var text = this.dataset.message || "정말 이동하시겠습니까?"

        if(!this.dataset.message){
          text = "정말 이동하시겠습니까?";
        }else{
          text = this.dataset.message;
        }

        var choice = window.confirm(text);
        if(choice == false){
          e.preventDefault();
        }
      })
    }


  });
