 const _p = (key, len) => {
  let setBit = [];
  setBit = (len == 10 ? _setBit(key, len) : key);
  const list = (len == 10 ? [3, 5, 2, 7, 4, 10, 1, 9, 8, 6] :
    len == 8 ? [6, 3, 7, 4, 8, 5, 10, 9] : [2, 4, 3, 1]);
  let result = [];
  for (let [i, value] of list.entries()) {
    result[i] = setBit[value - 1];
  }
  return result;
}

const _getBit = key => {
  let result = "";
  for (let value of key) {
    result += value;
  }
  return result;
}

const _convertTen = bin => {
  let result = 0;
  if (typeof bin === 'object') {
    for (let [i, value] of bin.entries()) {
      result |= value;
      i !=  bin.length - 1 && (result = result << 1);
    }
  } else {
    bin *= 1;
    result = parseInt(bin, 2);
  }
  return result;
}

const _setBit = (key, len) => {
  let result = [];
  for (let i = 0; i < len; i++) {
    result[i] = (key >> (len - (i + 1))) & 1;
  }
  return result;
}

const _shl = (key, cnt) => {
  
  if (key.length == 10) {
    let result = [];
    for (var i = 0; i < cnt; i++) {
      const lk = key.slice(0, 5);
      const rk = key.slice(5, 10);
      const lkH = lk[0];
      const rkH = rk[0];
      for (let j of lk.keys()) {
        lk[j] = lk[j + 1];
        rk[j] = rk[j + 1];
        // if (j == lk.length - 1) {
        //   lk[j] = lkH;
        //   rk[j] = rkH;
        // }
        j ==  lk.length - 1 && (lk[j] = lkH, rk[j] = rkH)
      }
      key = result = lk.concat(rk);
    }
    return result;
  } else if (key.length == 8) {
    let result = [];
    for (var i = 0; i < cnt; i++) {
      const lk = key.slice(0, 4);
      const rk = key.slice(4, 8);
      const lkH = lk[0];
      const rkH = rk[0];
      for (let j of lk.keys()) {
        lk[j] = lk[j + 1];
        rk[j] = rk[j + 1];
        j ==  lk.length - 1 && (lk[j] = lkH, rk[j] = rkH)
      }
      key = result = lk.concat(rk);
    }
    return result;
  }
}
