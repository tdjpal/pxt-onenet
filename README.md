# OneNet

Extension for [onenet](open.iot.10086.cn) iot based on kittenbot's wifi module

## Usage

* Register a dev account at https://open.iot.10086.cn/
* Follow the guide at https://open.iot.10086.cn/doc/book/device-develop/multpro/MQTT/MQTT-manual.html to setup your product and device, data stream is optional you can create on the fly.
* load extension in microbit makecode by the github url: https://github.com/KittenBot/pxt-onenet
* Follow the picture bellow to find your `product ID, device ID and SN`

![image](https://user-images.githubusercontent.com/3390845/58794413-ad8da380-862a-11e9-85a4-5cc8da0af94f.png)

![image](https://user-images.githubusercontent.com/3390845/58794477-dc0b7e80-862a-11e9-92d2-e6099e851df5.png)

* Put everything into the block slots, and here we show a very basic program:

![image](https://user-images.githubusercontent.com/3390845/58794257-5ab3ec00-862a-11e9-8ad8-cc0f5532b5aa.png)

* If everything goes well, you may see the device report in datastream panel.

  ![image](https://user-images.githubusercontent.com/3390845/58794656-445a6000-862b-11e9-8b48-583ee0b557c7.png)

* have fun~

## Notice

Please make sure you have upgraded you wifi module's firmware to v2.82 or above.

----------

## License

MIT

## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)

```package
onenet=github:Kittenbot/pxt-onenet
```