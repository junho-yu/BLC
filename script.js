const id = document.getElementById('id')
const password = document.getElementById('password')
const login = document.getElementById('login')
let errStack = 0;

login.addEventListener('click', () => {
    if (id.value == 'acid') {
        if (password.value == '0000') {
            alert('로그인 되었습니다!')
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
            errStack++;
        }
    }
    else {
        alert('존재하지 않는 계정입니다.')
    }


})
function decrypt(pwd) {
    var str = "5ef076786860e1cdb8e892ba279ae7ac56b5bec9e8c8554705ac72142d7d7610a0bfa2af71cf0a16b804d90cd6";
    if (pwd == null || pwd.length <= 0) {
        alert('비밀번호를 입력하세요.');
        return;
    }
    var prand = "";
    for (var i = 0; i < pwd.length; i++) {
        prand += pwd.charCodeAt(i).toString();
    }
    var sPos = Math.floor(prand.length / 5);
    var mult = parseInt(prand.charAt(sPos) + prand.charAt(sPos * 2) + prand.charAt(sPos * 3) + prand.charAt(sPos * 4) + prand.charAt(sPos * 5));
    var incr = Math.round(pwd.length / 2);
    var modu = Math.pow(2, 31) - 1;
    var salt = parseInt(str.substring(str.length - 8, str.length), 16);
    str = str.substring(0, str.length - 8);
    prand += salt;
    while (prand.length > 10) {
        prand = (parseInt(prand.substring(0, 10)) + parseInt(prand.substring(10, prand.length))).toString();
    }
    prand = (mult * prand + incr) % modu;
    var enc_chr = "";
    var enc_str = "";
    for (var i = 0; i < str.length; i += 2) {
        enc_chr = parseInt(parseInt(str.substring(i, i + 2), 16) ^ Math.floor((prand / modu) * 255));
        enc_str += String.fromCharCode(enc_chr);
        prand = (mult * prand + incr) % modu;
    }
    if (!enc_str.match(/\.html/g)) {
        alert("틀렸어...잘 생각해봐");
    }
    else {
        window.location.href = enc_str;
    }
}

function darkDayHandler(self) {
    var target = document.querySelector('body');
    
    console.log=""
    if (self.value === 'DarkMode') {
        target.style.backgroundColor = 'black';
        target.style.color = 'white';
        self.value = 'DayMode';

        var alist = document.querySelectorAll('a');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = 'white';
            i = i + 1;
        }
    } else {
        target.style.backgroundColor = 'white';
        target.style.color = 'black';
        
        self.value = 'DarkMode';

        var alist = document.querySelectorAll('a');
        
        var hhbody = document.getElementByClass('nav');
        var i = 0;
        while (i < alist.length) {
            alist[i].style.color = 'black';
            
            i = i + 1;
            
            
           

        }
    }
}
