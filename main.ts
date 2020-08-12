input.onButtonPressed(Button.A, function () {
    radio.sendNumber(4)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(6)
    basic.showIcon(IconNames.Happy)
})
radio.onReceivedString(function (receivedString) {
    let receivedNumber = 0
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Yes)
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.No)
    }
    if (receivedNumber == 3) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(5)
})
radio.setGroup(1)
basic.forever(function () {
	
})
