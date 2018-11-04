function _fk(key, subKey) {
  var rk = [];
  var lk = [];
  for (var i = 0; i < key.length; i++) {
    i < 4 ? lk[i] = key[i] : rk[i - 4] = key[i];
  }

  return _setBit(((_convertTen(lk) ^ _F(rk, subKey)) << 4) | _convertTen(rk), 8);
}

function _F(rk, subKey) {
  var s0 = [
    [1, 0, 3, 2],
    [3, 2, 1, 0],
    [0, 2, 1, 3],
    [3, 1, 3, 2]
  ];
  var s1 = [
    [0, 1, 2, 3],
    [2, 0, 1, 3],
    [3, 0, 1, 0],
    [2, 1, 0, 3]
  ];

  var list = [4, 1, 2, 3, 2, 3, 4, 1];

  var ep = [];
  var p = [];
  for (var i = 0; i < 8; i++) {
    ep[i] = rk[list[i] - 1];
    p[i] = ep[i] ^ subKey[i];
  }

  var index = [];
  index = [
    p[0].toString() + p[3].toString(),
    p[1].toString() + p[2].toString(),
    p[4].toString() + p[7].toString(),
    p[5].toString() + p[6].toString()
  ];

  var sbox = _setBit(s0[_convertTen(index[0])][_convertTen(index[1])], 2).concat(_setBit(s1[_convertTen(index[2])][_convertTen(index[3])], 2));
  sbox = _p(sbox, 4);

  var result = 0;
  result = _convertTen(sbox);
  return result;
}

function _sw(key) {
  key = _convertTen(key);
  return _setBit(((key & 0xF) << 4) | (key >> 4), 8);
}


function _ip(key, len, ch) {
  var setBit = [];
  setBit = _setBit(key, len);
  var list = (ch == 1 ? [2, 6, 3, 1, 4, 8, 5, 7] :
    ch == 2 ? [4, 1, 3, 5, 7, 2, 8, 6] : []);
  var result = [];
  for (var i = 0; i < len; i++) {
    result[i] = setBit[list[i] - 1];
  }
  return result;
}
