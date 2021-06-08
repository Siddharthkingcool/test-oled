OrientBit.enableEncoder(
DigitalPin.P0,
DigitalPin.P1,
16,
14
)
OLED12864_I2C.init(60)
maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 10)
basic.forever(function () {
    OLED12864_I2C.showNumber(
    0,
    0,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.left),
    1
    )
    OLED12864_I2C.showNumber(
    0,
    1,
    OrientBit.getwheelPulseCount(OrientBit.wheelSide.right),
    1
    )
    basic.pause(100)
})
