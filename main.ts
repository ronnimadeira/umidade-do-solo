input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.showNumber(input.temperature())
    basic.pause(2000)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(input.compassHeading())
    basic.pause(2000)
})
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
    basic.pause(2000)
})
