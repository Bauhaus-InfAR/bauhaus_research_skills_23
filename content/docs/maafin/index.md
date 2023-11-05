---
title: QR Codes
date: 2023-11-05
---
<script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>

Here you go sweet Maafin

<div id="qrcode-container">
<div>EN</div>
<div id="qrcode0"></div>
<div>RU</div>
<div id="qrcode1"></div>
<div>TR</div>
<div id="qrcode2"></div>
<div>AR</div>
<div id="qrcode3"></div>
<div>NL</div>
<div id="qrcode4"></div>
</div>


<script type="text/javascript">
  var qrcodes = [
    "https://forms.gle/ZHmubFppnrPdaNhE6",
    "https://forms.gle/6ef7noX8nMdFpZK4A",
    "https://forms.gle/y1FMNE2N2KvECTBC8",
    "https://forms.gle/EZN3SdLwPZ6MtmSX7",
    "https://forms.gle/XDwia4N5XjVJUdFV7",
  ]

let qr0 = new QRCode(document.getElementById(`qrcode0`), {
    text: qrcodes[0],
    width: 180,
    height: 180,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
})
let qr1 = new QRCode(document.getElementById(`qrcode1`), {
    text: qrcodes[1],
    width: 180,
    height: 180,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
})
let qr2 = new QRCode(document.getElementById(`qrcode2`), {
    text: qrcodes[2],
    width: 180,
    height: 180,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
})
let qr3 = new QRCode(document.getElementById(`qrcode3`), {
    text: qrcodes[3],
    width: 180,
    height: 180,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
})
let qr4 = new QRCode(document.getElementById(`qrcode4`), {
    text: qrcodes[4],
    width: 180,
    height: 180,
    colorDark : "#000",
    colorLight : "#fff",
    correctLevel : QRCode.CorrectLevel.H
})
</script>