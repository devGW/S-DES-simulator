const _reload = () => {
  location.reload();
}


const _sleep = t => {
  return new Promise(resolve => setTimeout(resolve, t));
}


const _keyRun = async () => {
  const keyId = document.getElementById("key");
  const key = keyId ? keyId.value : undefined;
  if (key < 0 || key > 1023 || key == "") { // key 값이 유효한 값인지 검사 
    alert("Key value error\nKey range from 0 to 1023.");
    return;
  } else { // 유효한 값이라면 
    const p10 = _p(key, 10); // _p(val, pBox)
    const shift1 = _shl(p10, 1); // _shl(val, LShift 횟수)
    const k1 = _p(shift1, 8); 
    const shift2 = _shl(shift1, 2);
    const k2 = _p(shift2, 8); 
    const printKey = [ // 화면에 보여줄 값 저장
      () => document.getElementById("P10").value = _getBit(p10),
      () => document.getElementById("Shift1").value = _getBit(shift1),
      () => document.getElementById("K1").value = _getBit(k1),
      () => document.getElementById("Shift2").value = _getBit(shift2),
      () => document.getElementById("K2").value = _getBit(k2),
      () => document.getElementById("plaintext1").value
    ];

    for (let show of printKey) {
      show(); // 화면에 뿌림
      await _sleep(100);
    }

    const plaintext1 = printKey[5]();
    let enc = ""; // 암호화 
    let encF = "";
    let dec = "";
    let decF = "";
    //암호화
    for (let i = 0; i < plaintext1.length; i++) {
      let encBit = 0, ip, fk1, sw, fk2, ipm1;
      const printEnc = [
        () => document.getElementById("IP1").value = _getBit(ip),
        () => document.getElementById("fk1").value = _getBit(fk1),
        () => document.getElementById("SW1").value = _getBit(sw),
        () => document.getElementById("fk2").value = _getBit(fk2),
        () => document.getElementById("IPm1").value = _getBit(ipm1),
        enc => document.getElementById("encrypt1").value = enc,
        enc => document.getElementById("encrypt2").value = enc
      ];
if (plaintext1[i].charCodeAt(0) > 255) {
  const setBit = [plaintext1[i].charCodeAt(0) >> 8, plaintext1[i].charCodeAt(0) & 255];
  for (let j of setBit.keys()) {
    ip = _ip(setBit[j], 8, 1); // ip(key, val, first ip)
    fk1 = _fk(ip, k1); // fk(ip, subkey)
    sw = _sw(fk1); // sw(key)
    fk2 = _fk(sw, k2);
    ipm1 = _ip(_convertTen(fk2), 8, 2);
    encBit |= _convertTen(ipm1);
    j == 0 ? encBit = encBit << 8 : encBit = encBit;
    for (let k = 0; k < printEnc.length - 2; k++) {
      printEnc[k]();
      await _sleep(100);
    }
    enc = String.fromCharCode(encBit);
    printEnc[5](encF + enc);
  }
  encF += enc;
  printEnc[6](encF);
  await _sleep(100);
} else {
  ip = _ip(plaintext1[i].charCodeAt(0), 8, 1);
  fk1 = _fk(ip, k1);
  sw = _sw(fk1);
  fk2 = _fk(sw, k2);
  ipm1 = _ip(_convertTen(fk2), 8, 2);
  encF += String.fromCharCode(_convertTen(ipm1));
  for (let j = 0; j < printEnc.length - 2; j++) {
    printEnc[j]();
    await _sleep(100);
  }
  printEnc[5](encF);
  await _sleep(100);
  printEnc[6](encF);
  await _sleep(100);
}
    }

//복호화

for (let i = 0; i < encF.length; i++) {
  let decBit = 0, ip, fk1, sw, fk2, ipm1;
  const printDec = [
    () => document.getElementById("IP2").value = _getBit(ip),
    () => document.getElementById("fkOne").value = _getBit(fk1),
    () => document.getElementById("SW2").value = _getBit(sw),
    () => document.getElementById("fkTwo").value = _getBit(fk2),
    () => document.getElementById("IPm2").value = _getBit(ipm1),
    
    dec => document.getElementById("plaintext2").value = dec
  ]
  if (encF[i].charCodeAt(0) > 255) {
    const setBit = [encF[i].charCodeAt(0) >> 8, encF[i].charCodeAt(0) & 255];
    for (let j of setBit.keys()) {
      ip = _ip(setBit[j], 8, 1);
      fk1 = _fk(ip, k2);
      sw = _sw(fk1);
      fk2 = _fk(sw, k1);
      ipm1 = _ip(_convertTen(fk2), 8, 2);
      decBit |= _convertTen(ipm1);
      j == 0 ? decBit = decBit << 8 : decBit = decBit;

      for (let [k, show] of printDec.entries()) {
        if (k < printDec.length - 1) show();
        await _sleep(100);
      }
      dec = String.fromCharCode(decBit);
      printDec[5]() == "" ? printDec[5](dec) : printDec[5](decF + dec);
      await _sleep(100);
    }
    decF += dec;
  } else {
    ip = _ip(encF[i].charCodeAt(0), 8, 1);
    fk1 = _fk(ip, k2);
    sw = _sw(fk1);
    fk2 = _fk(sw, k1);
    ipm1 = _ip(_convertTen(fk2), 8, 2);
    decF += String.fromCharCode(_convertTen(ipm1));

    for (let [j, show] of printDec.entries()) {
      if (j < printDec.length - 1) show();
      await _sleep(100);
    }
    printDec[5](decF);
    await _sleep(100);
  }
}
  }
}
