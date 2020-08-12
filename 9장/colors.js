// 객체 생성
let Body = {
    setColor:function(color){
        //document.querySelector('body').style.color = color;
        $('body').css('color',color);
    },
    setBgColor:function(color){
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('backgroundColor',color);
    }
}
let Links = {
    setColor : function(color){
    //  let links = document.querySelectorAll('a');
    //  links.forEach(element => element.style.color = color);

    // JQuery로 동일하게 구현
        $('a').css('color',color);
    }
}

// 함수로 생성함
function nightDayHandler(self)
{
    // 중복 제거
    let target = document.querySelector('body')
    // dataset.mode가 day일 경우 if의 코드가, 아닐 경우 else의 코드가 실행
    if(self.value === 'night')
    {
        Body.setBgColor('black');
        Body.setColor('white');
        self.value = 'day';
        
        Links.setColor('powderblue');
    }
    else
    {
        Body.setBgColor('white');
        Body.setColor('black');
        self.value = 'night';
        Links.setColor('blue');
    }
}