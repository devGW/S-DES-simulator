_reload = () => {
  location.reload();
}


_sleep = t => {
  return new Promise(resolve => setTimeout(resolve, t));
}


_keyRun = async () => {

  var key = document.getElementById("key").value;

  if (key < 0 || key > 1023) {
    alert("키 값 범위 초과\n키 값의 범위는 0 ~ 1023 입니다.");
    return;
  } else {
    var p10 = _p(key, 10);
    var shift1 = _shl(p10, 1);
    var k1 = _p(shift1, 8);
    var shift2 = _shl(shift1, 2);
    var k2 = _p(shift2, 8);
    var printKey = [
      () => {
         document.getElementById("P10").value = _getBit(p10);
      },
      () => {
         document.getElementById("Shift1").value = _getBit(shift1);
      },
      () => {
         document.getElementById("K1").value = _getBit(k1);
      },
      () => {
         document.getElementById("Shift2").value = _getBit(shift2);
      },
      () => {
         document.getElementById("K2").value = _getBit(k2);
      },
      () => {
        return document.getElementById("plaintext1").value;
      }
    ];

    for (var i = 0; i < printKey.length - 1; i++) {
      printKey[i]();
      await _sleep(100);
    }

    var plaintext1 = printKey[5]();
    var enc = "";
    var encF = "";
    var dec = "";
    var decF = "";
    //암호화
    for (var i = 0; i < plaintext1.length; i++) {
      var decBit = 0;
      var printEnc = [
        () => {
           document.getElementById("IP1").value = _getBit(ip);
        },
        () => {
           document.getElementById("fk1").value = _getBit(fk);
        },
        () => {
           document.getElementById("SW1").value = _getBit(sw);
        },
        () => {
           document.getElementById("fk2").value = _getBit(fk2);
        },
        () => {
           document.getElementById("IPm1").value = _getBit(ipm1);
        },
        enc => {
           document.getElementById("encrypt1").value = enc;
        },
        enc => {
           document.getElementById("encrypt2").value = enc;
        }
      ];
      if (plaintext1[i].charCodeAt(0) > 255) {
        var setBit = [plaintext1[i].charCodeAt(0) >> 8, plaintext1[i].charCodeAt(0) & 255];
        for (var j = 0; j < setBit.length; j++) {
          var ip = _ip(setBit[j], 8, 1);
          var fk = _fk(ip, k1);
          var sw = _sw(fk);
          var fk2 = _fk(sw, k2);
          var ipm1 = _ip(_convertTen(fk2), 8, 2);
          decBit |= _convertTen(ipm1);
          j == 0 ? decBit = decBit << 8 : decBit = decBit;

          for (var k = 0; k < printEnc.length-2; k++) {
            printEnc[k]();
            await _sleep(100);
          }
       
          enc = String.fromCharCode(decBit);
          printEnc[5](encF + enc);
        }
        encF += enc;
        printEnc[6](encF); 
        await _sleep(100);
      } else {
        var ip = _ip(plaintext1[i].charCodeAt(0), 8, 1);
        var fk = _fk(ip, k1);
        var sw = _sw(fk);
        var fk2 = _fk(sw, k2);
        var ipm1 = _ip(_convertTen(fk2), 8, 2);
        encF += String.fromCharCode(_convertTen(ipm1));
        
        for (var k = 0; k < printEnc.length-2; k++) {
          printEnc[k]();
          await _sleep(100);
          
        }
        printEnc[5](encF);
        await _sleep(100);
        printEnc[6](encF);
        await _sleep(100);
      }
    }

    //복호화

    for (var i = 0; i < encF.length; i++) {
      var decBit = 0;
      var printDec = [
        () => {
          document.getElementById("IP2").value = _getBit(ip);
        },
        () => {
          document.getElementById("fkOne").value = _getBit(fk1);
        },
        () => {
          document.getElementById("SW2").value = _getBit(sw);
        },
        () => {
          document.getElementById("fkTwo").value = _getBit(fk2);
        },
        () => {
          document.getElementById("IPm2").value = _getBit(ipm1);
        },
        dec => {
          document.getElementById("plaintext2").value = dec;
        }
      ]
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
       
          for (var k = 0; k < printDec.length-1; k++) {
            printDec[k]();
            await _sleep(100);
          }
          dec = String.fromCharCode(decBit);
          printDec[5]() == "" ?  printDec[5](dec) : printDec[5](decF + dec);
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
       
        for (var k = 0; k < printDec.length-1; k++) {
          printDec[k]();
          await _sleep(100);
        }
       printDec[5](decF);
        await _sleep(100);
      }
    }
  }
}
