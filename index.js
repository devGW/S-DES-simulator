<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title></title>
  <link rel="stylesheet" href="https://unpkg.com/purecss@1.0.0/build/pure-min.css" integrity="sha384-nn4HPE8lTHyVtfCBi5yW9d20FjT8BJwUXyWZT9InLYax14RDjBj46LmSztkmNP9w" crossorigin="anonymous">
  <link rel="stylesheet" href="form.css">
  <script type="text/javascript" src="key.js"></script>
  <script type="text/javascript" src="encrytion.js"></script>
  <script type="text/javascript">
    function _reload(){
      location.reload();
    }


    function sleep(t) {
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
          await sleep(100);
          document.getElementById("Shift1").value = _getBit(shift1);
          await sleep(100);
          document.getElementById("K1").value = _getBit(k1);
          await sleep(100);
          document.getElementById("Shift2").value = _getBit(shift2);
          await sleep(100);
          document.getElementById("K2").value = _getBit(k2);
          await sleep(100);
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
                await sleep(100);
                document.getElementById("fk1").value = _getBit(fk); // set fk
                await sleep(100);
                document.getElementById("SW1").value = _getBit(sw); // fk switch
                await sleep(100);
                document.getElementById("fk2").value = _getBit(fk2); // set second f2
                await sleep(100);
                document.getElementById("IPm1").value = _getBit(ipm1); // set ip-1
                await sleep(100);
                enc = String.fromCharCode(decBit);
                document.getElementById("encrypt1").value == "" ? document.getElementById("encrypt1").value = enc : document.getElementById("encrypt1").value = encF + enc;
              }
              encF += enc;
              document.getElementById("encrypt2").value = encF; // set decrytion plaintext
              await sleep(100);
            } else {
              var ip = _ip(plaintext1[i].charCodeAt(0), 8, 1);
              var fk = _fk(ip, k1);
              var sw = _sw(fk);
              var fk2 = _fk(sw, k2);
              var ipm1 = _ip(_convertTen(fk2), 8, 2);
              var sum;
              encF += String.fromCharCode(_convertTen(ipm1));

              document.getElementById("IP1").value = _getBit(ip);
              await sleep(100);
              document.getElementById("fk1").value = _getBit(fk);
              await sleep(100);
              document.getElementById("SW1").value = _getBit(sw);
              await sleep(100);
              document.getElementById("fk2").value = _getBit(fk2);
              await sleep(100);
              document.getElementById("IPm1").value = _getBit(ipm1);
              await sleep(100);
              document.getElementById("encrypt1").value = encF;
              await sleep(100);
              document.getElementById("encrypt2").value = encF;
              await sleep(100);
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
                await sleep(100);
                document.getElementById("fkOne").value = _getBit(fk1);
                await sleep(100);
                document.getElementById("SW2").value = _getBit(sw);
                await sleep(100);
                document.getElementById("fkTwo").value = _getBit(fk2);
                await sleep(100);
                document.getElementById("IPm2").value = _getBit(ipm1);
                await sleep(100);
                dec = String.fromCharCode(decBit);
                document.getElementById("plaintext2").value == "" ? document.getElementById("plaintext2").value = dec : document.getElementById("plaintext2").value = decF + dec;
                await sleep(100);
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
              await sleep(100);
              document.getElementById("fkOne").value = _getBit(fk1);
              await sleep(100);
              document.getElementById("SW2").value = _getBit(sw);
              await sleep(100);
              document.getElementById("fkTwo").value = _getBit(fk2);
              await sleep(100);
              document.getElementById("IPm2").value = _getBit(ipm1);
              await sleep(100);
              document.getElementById("plaintext2").value = decF;
              await sleep(100);
            }
          }
        }
      })();
    }
  </script>
  <style media="screen">
    .form{
    display : flex;
    float : left;
    margin-top : 5%;
  }
   .section{
     margin-left : 20%;
   }
</style>
</head>

<body>
  <nav class="demo imponent">
    <a href="#" class="brand">
    <img class="logo" src="./img/tu.png" />
    <span>S-DES</span>
  </a>
  </nav>

  <div class="form">
    <section class="section">
      <form class="pure-form pure-form-stacked">
        <label for="plaintext1">문장</label>
        <input id="plaintext1" type="text"/>

        <label for="IP1">IP</label>
        <input id="IP1" type="text">

        <label for="fk1">fk</label>
        <input id="fk1" type="text">

        <label for="SW1">SW</label>
        <input id="SW1" type="text">

        <label for="fk2">fk</label>
        <input id="fk2" type="text">

        <label for="IPm1">IP-</label>
        <input id="IPm1" type="text">

        <label for="encrypt1">암호문</label>
        <input id="encrypt1" type="text">
      </form>
    </section>

    <section class="section">
      <form class="pure-form pure-form-stacked">
        <label for="key">Key</label>
        <input id="key" type="number"/>

        <label for="P10">P10</label>
        <input id="P10" type="text">

        <label for="Shift1">Shift1</label>
        <input id="Shift1" type="text">

        <label for="K1">K1</label>
        <input id="K1" type="text">

        <label for="Shift2">Shift2</label>
        <input id="Shift2" type="text">

        <label for="K2">K2</label>
        <input id="K2" type="text">
        <div class="container">
          <button class="error" type="button" name="button" onclick="_keyRun()" style="margin-left:10%">RUN</button>
          <button class="error" type="button" name="button" onclick="_reload()" style="margin-left:10%">REROAD</button>
        </div>
        <br><br><br><br>


      </form>
    </section>

    <section class="section">
      <form class="pure-form pure-form-stacked">
        <label for="plaintext2">문장</label>
        <input id="plaintext2" type="text"/>

        <label for="IPm2">IP-</label>
        <input id="IPm2" type="text">

        <label for="fk2">fk</label>
        <input id="fkTwo" type="text">

        <label for="SW2">SW</label>
        <input id="SW2" type="text">

        <label for="fkOne">fk</label>
        <input id="fkOne" type="text">

        <label for="IP2">IP</label>
        <input id="IP2" type="text">

        <label for="encrypt2">암호문</label>
        <input id="encrypt2" type="text">
      </form>
    </section>
</div>
<div id="footer">
  <p> Tongmyong University 14110088 정건우 | <a href="https://github.com/devGW" target="_blank">gitHub</a> </p>
</div>
</body>

</html>