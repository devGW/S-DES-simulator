function _p(key, len) {
  var setBit = [];
  setBit = (len == 10 ? _setBit(key, len) : key);
  var list = (len == 10 ? [3, 5, 2, 7, 4, 10, 1, 9, 8, 6] :
    len == 8 ? [6, 3, 7, 4, 8, 5, 10, 9] : [2, 4, 3, 1]);
  var result = [];
  for (var i = 0; i < len; i++) {
    result[i] = setBit[list[i] - 1];
  }
  return result;
}

function _getBit(key) {
  var result = "";
  for (var i = 0; i < key.length; i++) {
    result += key[i];
  }
  return result;
}

function _convertTen(bin) {
  var result = 0;
  if (typeof bin === 'object') {
    for (i = 0; i < bin.length; i++) {
      result |= bin[i];
      if (i != bin.length - 1) {
        result = result << 1;
      }
    }
  } else {
    bin *= 1;
    var result = parseInt(bin, 2);
  }
  return result;
}

function _setBit(key, len) {
  var result = [];
  for (var i = 0; i < len; i++) {
    result[i] = (key >> (len - (i + 1))) & 1;
  }
  return result;
}

function _shl(key, cnt) {
  var result = [];
  if (key.length == 10) {
    var result = [];
    for (var i = 0; i < cnt; i++) {
      var lk = key.slice(0, 5);
      var rk = key.slice(5, 10);
      var lkH = lk[0];
      var rkH = rk[0];
      for (var j = 0; j < lk.length; j++) {
        lk[j] = lk[j + 1];
        rk[j] = rk[j + 1];
        if (j == lk.length - 1) {
          lk[j] = lkH;
          rk[j] = rkH;
        }
      }
      key = result = lk.concat(rk);
    }
    return result;
  } else if (key.length == 8) {
    var result = [];
    for (var i = 0; i < cnt; i++) {
      var lk = key.slice(0, 4);
      var rk = key.slice(4, 8);
      var lkH = lk[0];
      var rkH = rk[0];
      for (var j = 0; j < lk.length; j++) {
        lk[j] = lk[j + 1];
        rk[j] = rk[j + 1];
        if (j == lk.length - 1) {
          lk[j] = lkH;
          rk[j] = rkH;
        }
      }
      key = result = lk.concat(rk);
    }
    return result;
  }
}
