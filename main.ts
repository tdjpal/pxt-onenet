/*
Riven
Onenet extension based on kittenbot's wifi module ()
load dependency
"onenet": "file:../pxt-onenet"
*/

//% color="#00bbff" weight=10 icon="\uf1fa"
namespace onenet {

    //% blockId=onenet_connect block="Connect ProductID|%prodid DevID|%deviceid SN|%sn"
    //% weight=90
    export function onenet_connect(prodid: string, deviceid: string, sn: string): void {
        kittenwifi.mqtt_sethost_auth_port("mqtt.heclouds.com", 6002, deviceid, prodid, sn)
    }

    //% blockId=onenet_pub block="Publish DataStream|%topic Data|%data"
    //% weight=80
    export function onenet_pub(topic: string, data: string): void {
        let cmd = ",;"+topic+","+data+";"
        let output = "${5}${0}${"+cmd.length+"}"+cmd;
        kittenwifi.mqtt_publish("$dp", output);
    }
}
