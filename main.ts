/*
Riven
Onenet extension based on kittenbot's wifi module ()
load dependency
"onenet": "file:../pxt-onenet"
*/

//% color="#00bbff" weight=10 icon="\uf1fa"
namespace onenet {

    let isRequestConfiged:boolean = false;
    let apiKey:string = null;

    let queryEvt: (data: string) => void = null;


    function configRequest() {
        kittenwifi.rest_host("api.heclouds.com", 80)
        basic.pause(100)
        kittenwifi.rest_header(0, `api-key:${apiKey}`)
        basic.pause(100)
        kittenwifi.rest_header(1, `application/json`)
        basic.pause(100)
        
        isRequestConfiged = true;
    }

    //% blockId=onenet_connect block="Connect ProductID|%prodid DevID|%deviceid SN|%sn"
    //% weight=90
    export function onenet_connect(prodid: string, deviceid: string, sn: string): void {
        kittenwifi.mqtt_sethost_auth_port("mqtt.heclouds.com", 6002, deviceid, prodid, sn)
    }

    //% blockId=onenet_apikey block="Api-Key %key"
    //% weight=90
    export function onenet_apikey(key: string): void {
        apiKey = key
    }

    //% blockId=onenet_pub block="Publish DataStream|%topic Data|%data"
    //% weight=80
    export function onenet_pub(topic: string, data: string): void {
        let cmd = ",;"+topic+","+data+";"
        let output = "${5}${0}${"+cmd.length+"}"+cmd;
        kittenwifi.mqtt_publish("$dp", output);
    }

    //% blockId=onenet_query block="Query DeviceID%devid DataPoint%dp"
    //% weight=80
    export function onenet_query(devid: string, dp: string): void {
        if (!isRequestConfiged){
            configRequest()
        }
        kittenwifi.rest_request('GET', `/devices/${devid}/datastreams/${dp}`)

    }

    //% blockId=onenet_query_ret block="Query Return"
    //% weight=75
    //% draggableParameters=reporter
    export function onenet_query_ret(handler: (ret: string) => void): void {
        kittenwifi.rest_ret(function (code: number, a: string) {
            let cur = "current_value"
            let c = a.indexOf(cur)
            if (code == 200 && c > -1) {
                let d = a.slice(c + cur.length + 3)
                d = d.slice(0, d.indexOf("\""))
                handler(d)
            }
        })
    }


}
