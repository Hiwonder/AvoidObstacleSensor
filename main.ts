/*
 avoid_sensor package
*/
//% weight=10 icon="\uf140" color=#2896ff
namespace avoid_sensor {

    export enum avoidSensorPin {
        P0 = DigitalPin.P0,
        P1 = DigitalPin.P1,
        P2 = DigitalPin.P2,
        P3 = DigitalPin.P3,
        P4 = DigitalPin.P4,
        P5 = DigitalPin.P5,
        P6 = DigitalPin.P6,
        P7 = DigitalPin.P7,
        P8 = DigitalPin.P8,
        P9 = DigitalPin.P9,
        P10 = DigitalPin.P10,
        P11 = DigitalPin.P11,
        P12 = DigitalPin.P12,
        P13 = DigitalPin.P13,
        P14 = DigitalPin.P14,
        P15 = DigitalPin.P15,
        P16 = DigitalPin.P16,
        P19 = DigitalPin.P19,
        P20 = DigitalPin.P20
    }


    /**
    * Get the obstacle avoidance sensor status,true detect obstacle,false no detect obstacle
    */
    //% weight=98 blockId=avoidSensor block="Obstacle avoidance sensor pin|%avoidPin|detect obstacle ?"
    export function avoidSensor(avoidPin: avoidSensorPin): boolean {
        let status = 0;
        let flag = false;
        pins.setPull(avoidPin, PinPullMode.PullUp);
        status = pins.digitalReadPin(avoidPin);
        if (status == 1)
            flag = false;
        else
            flag = true;
        return flag;
    }
}
