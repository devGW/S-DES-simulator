const _fk = (key, subKey) => {
  var rk = [];
  var lk = [];
  for (let i of key.keys()) {
    i < 4 ? lk[i] = key[i] : rk[i - 4] = key[i];
  }

  return _setBit(((_convertTen(lk) ^ _F(rk, subKey)) << 4) | _convertTen(rk), 8);
}

const _F = (rk, subKey) => {
  const s0 = [
    [1, 0, 3, 2],
    [3, 2, 1, 0],
    [0, 2, 1, 3],
    [3, 1, 3, 2]
  ];
  const s1 = [
    [0, 1, 2, 3],
    [2, 0, 1, 3],
    [3, 0, 1, 0],
    [2, 1, 0, 3]
  ];

  const list = [4, 1, 2, 3, 2, 3, 4, 1];
  const ep = [];
  const p = [];
  
  for (let i of list.keys()) {
    ep[i] = rk[list[i] - 1];
    p[i] = ep[i] ^ subKey[i];
  }

   const index = [
    p[0].toString() + p[3].toString(),
    p[1].toString() + p[2].toString(),
    p[4].toString() + p[7].toString(),
    p[5].toString() + p[6].toString()
  ];

  sbox = _p(_setBit(s0[_convertTen(index[0])][_convertTen(index[1])], 2)
  .concat(_setBit(s1[_convertTen(index[2])][_convertTen(index[3])], 2)), 4);
  let result = 0;
  result = _convertTen(sbox);
  return result;
}

const _sw = (key) => {
  key = _convertTen(key);
  return _setBit(((key & 0xF) << 4) | (key >> 4), 8);
}


const _ip = (key, len, ch) => {
  const setBit = _setBit(key, len);
  const list = (ch == 1 ? [2, 6, 3, 1, 4, 8, 5, 7] :
    ch == 2 ? [4, 1, 3, 5, 7, 2, 8, 6] : []);
  const result = [];
  for (let i = 0; i < len; i++) {
    result[i] = setBit[list[i] - 1];
  }
  return result;
}
