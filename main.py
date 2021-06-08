OLED12864_I2C.init(60)
OLED12864_I2C.rect(0, 0, 60, 30, 1)

def on_forever():
    pass
basic.forever(on_forever)
