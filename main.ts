/*
 avoid_sensor package
*/
//% weight=10 icon="\uf140" color=#2896ff
namespace avoid_sensor {
    /**
    * Get the obstacle avoidance sensor status,true detect obstacle,false no detect obstacle
    */
    //% weight=98 blockId=avoidSensor block="Obstacle avoidance sensor pin|%avoidPin|detect obstacle ?"
    export function avoidSensor(avoidPin: DigitalPin): boolean {
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
