halex::Motor leftMotor(&htim2, TIM_CHANNEL_1, &htim2, TIM_CHANNEL_2);
halex::Motor rightMotor(&htim3, TIM_CHANNEL_1, &htim3, TIM_CHANNEL_2);

void driveForward() {
    leftMotor.start();
    rightMotor.start();

    // true runs forward. 1 / 2 sets the PWM duty cycle to 50%.
    leftMotor.setSpeed(true, 1, 2);
    rightMotor.setSpeed(true, 1, 2);
}
