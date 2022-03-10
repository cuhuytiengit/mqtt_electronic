const express = require('express')
const app = express()
const port = 3000
const mqtt = require('mqtt')
const cors = require('cors')
const router = express.Router();
router.get("/",function(req,res,next){
    res.send("API is working properly");
})



app.use(cors())
module.exports =router;
app.get('/', (req, res) => {
    let jsonObject = {
        foods: [
            {
                foodName: "Cream Tea",
                foodDescription: "This is a cup of tea"
            },
            {
                foodName: "Japanese Salad",
                foodDescription: "Very delicious Janpanese Salad"
            },
            {
                foodName: "Cream Tea",
                foodDescription: "This is a cup of tea"
            },
            {
                foodName: "Korean Kimchi",
                foodDescription: "Traditional Korean Kimchi"
            },
            {
                foodName: "Fresh mushroom",
                foodDescription: "Fresh mushroom with vegatables"
            },
            {
                foodName: "Oysters",
                foodDescription: "Oysters with ice rock"
            },
        ],
        resultCode: 200,
        restaurantName: "Sasimi BBQ"}
    // tạo option sử dụng thuộc tính connect để kết nối đến broket MQTT 
    var options = {
        port: 23640,
        host: 'mqtt://168.138.165.18',
        clientId: 'mqttjs_' + Math.random().toString(16).substr(2, 8),
        username: 'taikhoansv',
        password: 'MatKhauMQTT+075800',
        keepalive: 60,
        reconnectPeriod: 1000,
        protocolId: 'MQIsdp',
        protocolVersion: 3,
        clean: true,
        encoding: 'utf8'
    };
    var client = mqtt.connect('mqtt://168.138.165.18', options);
    
    // function có chức năng subscribe 1 topic nếu đã kết nối thành công đến broker
    client.on('connect', function() {
        console.log('Client A connected')
        // client subcribe topic /client-a/sub
        client.subscribe('/client-a/sub')


    })
    // function có chức năng gửi 1 gói tin đễn đến topic đã đăng kí
    client.on('message', function(topic, message) {
        // in ra màn hình console 1 message ở định dạng string
        console.log(message.toString())
        // publish gói tin 'Hello from client A' đến topic /client-b/sub
        client.publish('/client-b/sub', 'Hello from client A')
        // đóng kết nối của client
        client.end()
    })
    console.log('Client A started')
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})