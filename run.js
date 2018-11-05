function _reload() {
  location.reload();
}


function _sleep(t) {
  return new Promise(resolve => setTimeout(resolve, t));
}

function _keyRun() {

  var key = document.getElementById("key").value;
  (async function() {
    if (key < 0 || key > 1023) {
      alert("키 값 범위 초과\n키 값의 범위는 0 ~ 1023 입니다.");
      return;
    } else {
      var p10 = _p(key, 10);
      var shift1 = _shl(p10, 1);
      var k1 = _p(shift1, 8);
      var shift2 = _shl(shift1, 2);
      var k2 = _p(shift2, 8);
      document.getElementById("P10").value = _getBit(p10);
      await _sleep(100);
      document.getElementById("Shift1").value = _getBit(shift1);
      await _sleep(100);
      document.getElementById("K1").value = _getBit(k1);
      await _sleep(100);
      document.getElementById("Shift2").value = _getBit(shift2);
      await _sleep(100);
      document.getElementById("K2").value = _getBit(k2);
      await _sleep(100);
      var plaintext1 = document.getElementById("plaintext1").value;
      var enc = "";
      var encF = "";
      var dec = "";
      var decF = "";
      //암호화
      for (var i = 0; i < plaintext1.length; i++) {
        var decBit = 0;
        if (plaintext1[i].charCodeAt(0) > 255) {
          var list1 = [];
          var list2 = [];
          var list3 = [];
          var setBit = [plaintext1[i].charCodeAt(0) >> 8, plaintext1[i].charCodeAt(0) & 255];
          for (var j = 0; j < setBit.length; j++) {
            var ip = _ip(setBit[j], 8, 1);
            var fk = _fk(ip, k1);
            var sw = _sw(fk);
            var fk2 = _fk(sw, k2);
            var ipm1 = _ip(_convertTen(fk2), 8, 2);
            decBit |= _convertTen(ipm1);
            j == 0 ? decBit = decBit << 8 : decBit = decBit;
            document.getElementById("IP1").value = _getBit(ip); // set ip
            await _sleep(100);
            document.getElementById("fk1").value = _getBit(fk); // set fk
            await _sleep(100);
            document.getElementById("SW1").value = _getBit(sw); // fk switch
            await _sleep(100);
            document.getElementById("fk2").value = _getBit(fk2); // set second f2
            await _sleep(100);
            document.getElementById("IPm1").value = _getBit(ipm1); // set ip-1
            await _sleep(100);
            enc = String.fromCharCode(decBit);
            document.getElementById("encrypt1").value == "" ? document.getElementById("encrypt1").value = enc : document.getElementById("encrypt1").value = encF + enc;
          }
          encF += enc;
          document.getElementById("encrypt2").value = encF; // set decrytion plaintext
          await _sleep(100);
        } else {
          var ip = _ip(plaintext1[i].charCodeAt(0), 8, 1);
          var fk = _fk(ip, k1);
          var sw = _sw(fk);
          var fk2 = _fk(sw, k2);
          var ipm1 = _ip(_convertTen(fk2), 8, 2);
          var sum;
          encF += String.fromCharCode(_convertTen(ipm1));

          document.getElementById("IP1").value = _getBit(ip);
          await _sleep(100);
          document.getElementById("fk1").value = _getBit(fk);
          await _sleep(100);
          document.getElementById("SW1").value = _getBit(sw);
          await _sleep(100);
          document.getElementById("fk2").value = _getBit(fk2);
          await _sleep(100);
          document.getElementById("IPm1").value = _getBit(ipm1);
          await _sleep(100);
          document.getElementById("encrypt1").value = encF;
          await _sleep(100);
          document.getElementById("encrypt2").value = encF;
          await _sleep(100);
        }
      }

      //복호화

      for (var i = 0; i < encF.length; i++) {
        var decBit = 0;
        if (encF[i].charCodeAt(0) > 255) {
          var setBit = [encF[i].charCodeAt(0) >> 8, encF[i].charCodeAt(0) & 255];
          for (var j = 0; j < setBit.length; j++) {
            var ip = _ip(setBit[j], 8, 1);
            var fk1 = _fk(ip, k2);
            var sw = _sw(fk1);
            var fk2 = _fk(sw, k1);
            var ipm1 = _ip(_convertTen(fk2), 8, 2);
            decBit |= _convertTen(ipm1);
            j == 0 ? decBit = decBit << 8 : decBit = decBit;

            document.getElementById("IP2").value = _getBit(ip);
            await _sleep(100);
            document.getElementById("fkOne").value = _getBit(fk1);
            await _sleep(100);
            document.getElementById("SW2").value = _getBit(sw);
            await _sleep(100);
            document.getElementById("fkTwo").value = _getBit(fk2);
            await _sleep(100);
            document.getElementById("IPm2").value = _getBit(ipm1);
            await _sleep(100);
            dec = String.fromCharCode(decBit);
            document.getElementById("plaintext2").value == "" ? document.getElementById("plaintext2").value = dec : document.getElementById("plaintext2").value = decF + dec;
            await _sleep(100);
          }
          decF += dec;
        } else {
          var ip = _ip(encF[i].charCodeAt(0), 8, 1);
          var fk1 = _fk(ip, k2);
          var sw = _sw(fk1);
          var fk2 = _fk(sw, k1);
          var ipm1 = _ip(_convertTen(fk2), 8, 2);
          decF += String.fromCharCode(_convertTen(ipm1));
          document.getElementById("IP2").value = _getBit(ip);
          await _sleep(100);
          document.getElementById("fkOne").value = _getBit(fk1);
          await _sleep(100);
          document.getElementById("SW2").value = _getBit(sw);
          await _sleep(100);
          document.getElementById("fkTwo").value = _getBit(fk2);
          await _sleep(100);
          document.getElementById("IPm2").value = _getBit(ipm1);
          await _sleep(100);
          document.getElementById("plaintext2").value = decF;
          await _sleep(100);
        }
      }
    }
  })();
}
