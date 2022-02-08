"use strict";

// シリアルポートに定期的に書き込んではデータを受け取る
// パーストークンは \n
// 1秒おき送信

const SerialPort = require("serialport");
const Readline = require("@serialport/parser-readline");
const port = new SerialPort("/dev/cu.usbserial-023EDE0D", {
  baudRate: 9600, //9600,11520,
});

const parser = port.pipe(new Readline({ delimiter: "\n" }));

port.on("open", function () {
  console.log("Serial open.");
  setInterval(write, 1000, "test\n");
});

port.on("data", function (data) {
  console.log("Data: " + data);
});

function write(data) {
  console.log("Write: " + data);
  port.write(new Buffer(data), function (err, results) {
    if (err) {
      console.log("Err: " + err);
      console.log("Results: " + results);
    }
  });
}
