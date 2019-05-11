const _p = (key, len) => {
  let setBit = [];
  setBit = len == 10 ? _setBit(key, len) : key;
  const list =
    len == 10
      ? [3, 5, 2, 7, 4, 10, 1, 9, 8, 6]
      : len == 8
      ? [6, 3, 7, 4, 8, 5, 10, 9]
      : [2, 4, 3, 1];
  let result = [];
  for (let [i, value] of list.entries()) {
    result[i] = setBit[value - 1];
  }
  return result;
};

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
        j == lk.length - 1 && ((lk[j] = lkH), (rk[j] = rkH));
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
        j == lk.length - 1 && ((lk[j] = lkH), (rk[j] = rkH));
      }
      key = result = lk.concat(rk);
    }
    return result;
  }
};

const _ip = (key, len, ch) => {
  const setBit = _setBit(key, len);
  const list =
    ch == 1 ? [2, 6, 3, 1, 4, 8, 5, 7] : ch == 2 && [4, 1, 3, 5, 7, 2, 8, 6];
  const result = [];
  for (let i = 0; i < len; i++) {
    result[i] = setBit[list[i] - 1];
  }
  return result;
};

const _fk = (key, subKey) => {
  const rk = [];
  const lk = [];
  for (let i of key.keys()) {
    // 왼쪽 4bit, 오른쪽 4bit 분리
    i < 4 ? (lk[i] = key[i]) : (rk[i - 4] = key[i]);
  }

  return _setBit(
    ((_convertTen(lk) ^ _F(rk, subKey)) << 4) | _convertTen(rk),
    8
  );
};

const _sw = key => {
  key = _convertTen(key);
  return _setBit(((key & 0xf) << 4) | (key >> 4), 8);
};

const _F = (rk, subKey) => {
  const s0 = [[1, 0, 3, 2], [3, 2, 1, 0], [0, 2, 1, 3], [3, 1, 3, 2]];
  const s1 = [[0, 1, 2, 3], [2, 0, 1, 3], [3, 0, 1, 0], [2, 1, 0, 3]];

  const list = [4, 1, 2, 3, 2, 3, 4, 1];
  const ep = [];
  const p = [];

  for (let i of list.keys()) {
    // ep & p 과정
    ep[i] = rk[list[i] - 1];
    p[i] = ep[i] ^ subKey[i];
  }

  const index = [
    // p mapping
    p[0].toString() + p[3].toString(),
    p[1].toString() + p[2].toString(),
    p[4].toString() + p[7].toString(),
    p[5].toString() + p[6].toString()
  ];

  const sbox = _p(
    _setBit(s0[_convertTen(index[0])][_convertTen(index[1])], 2).concat(
      _setBit(s1[_convertTen(index[2])][_convertTen(index[3])], 2)
    ),
    4
  );
  let result = _convertTen(sbox);
  return result;
};

const _getBit = key => {
  let result = "";
  for (let value of key) {
    result += value;
  }
  return result;
};

const _convertTen = bin => {
  let result = 0;
  if (typeof bin === "object") {
    for (let [i, value] of bin.entries()) {
      result |= value;
      i != bin.length - 1 && (result = result << 1);
    }
  } else {
    bin *= 1;
    result = parseInt(bin, 2);
  }
  return result;
};

const _setBit = (key, len) => {
  let result = [];
  for (let i = 0; i < len; i++) {
    result[i] = (key >> (len - (i + 1))) & 1;
  }
  return result;
};
