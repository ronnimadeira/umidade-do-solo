input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    umidade = pins.analogReadPin(AnalogPin.P1)
    if (umidade >= numero) {
        basic.showIcon(IconNames.Happy)
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Sad)
        music.playTone(698, music.beat(BeatFraction.Whole))
    }
})
input.onButtonPressed(Button.A, function () {
    if (numero > 100) {
        numero += -100
    }
    basic.clearScreen()
    basic.showNumber(numero)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    basic.pause(1000)
    basic.clearScreen()
    basic.showNumber(numero)
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    if (numero < 1024) {
        numero += 100
    }
    basic.clearScreen()
    basic.showNumber(numero)
})
let umidade = 0
let numero = 0
numero = 0
