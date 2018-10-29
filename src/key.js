    
    function _pTen(key , bit){
        var setBit = [];
        for(var i = 0; i < bit; i ++){
            setBit[i] = (key >> (bit - (i+1))) & 1;
        }
    }
    function _keyLength(key) {
        if(typeof key != 'number') {
            alert("정수 값을 입력해주세요.");
            return;
        }
        else if(key<0 || key > 1023) {
            alert("키 값 범위 초과 \n 키 값의 범위는 0 ~ 1023 입니다.");
            return;
        } else {
            _pTen();
        } 
    }