const express = require('express');
const bodyparser = require('body-parser');
const admin = require('firebase-admin');
const fs = require('fs');

var serviceAccount = require("./message-5c0a2-firebase-adminsdk-5l4ts-03f8e9eaa6.json");
let registrationToken = "ffqFfOP4Svu2OrOZL8Gx_W:APA91bHYb8VleQy4K62D61lCxPLPf_-Jm-k-GLVCTLdIIUtupU33zvI6c7bfBnisLuPvpDV20O5Qr3aWt_aqGeM2CLuivAzbghVV7eBuTFk4flgSNLOgHkdzQg9bCaRTEthcxEB5SuRj";

var SerialPort = require('serialport').SerialPort;

var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyNode', {
  baudRate: 115200
});

const app = express();
app.use(express.static('app'));
app.use(bodyparser.json())
const server = app.listen(3000, function () {
    const host = server.address().address
    const port = server.address().port
    console.log("Example app listening at http://%s:%s", host, port)
});

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://javamsgs-5da73-default-rtdb.firebaseio.com"
  });

  port.on('data', (req, res) => {
    let payload = {
        notification: {
            title: "패드가 더럽습니다!",
            body: "패드 교체해주세요!"
        }
    };
    admin.messaging().sendToDevice(registrationToken, payload)
  
})

app.use(express.static(__dirname + '/public'));
