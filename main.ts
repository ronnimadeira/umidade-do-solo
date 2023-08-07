let umidade = 0
let número = 900
basic.forever(function () {
    basic.clearScreen()
    umidade = pins.analogReadPin(AnalogPin.P1)
    led.plotBarGraph(
    umidade,
    1023
    )
    if (umidade >= número) {
        music.playTone(698, music.beat(BeatFraction.Whole))
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.clearScreen()
        basic.showNumber(umidade)
    }
    basic.pause(200)
})
