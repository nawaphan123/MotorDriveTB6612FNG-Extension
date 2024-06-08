from machine import Pin, PWM
from time import sleep

class Motor:
    def __init__(self, m1a, m1b, m2a, m2b):
        self.m1a = PWM(Pin(m1a), 5000)
        self.m1b = PWM(Pin(m1b), 5000)
        self.m2a = PWM(Pin(m2a), 5000)
        self.m2b = PWM(Pin(m2b), 5000)

    def motor(self, pin, _speed):
        _speed = int(_speed * 10.23)
        if pin == 1:
            if _speed > 0:
                self.m1a.duty(abs(1023 - _speed))
                self.m1b.duty(1023)
                sleep(0.001)
            elif _speed <= 0:
                self.m1a.duty(1023)
                self.m1b.duty(abs(1023 + _speed))
                sleep(0.001)
        elif pin == 2:
            if _speed > 0:
                self.m2a.duty(abs(1023 - _speed))
                self.m2b.duty(1023)
                sleep(0.001)
            elif _speed <= 0:
                self.m2a.duty(1023)
                self.m2b.duty(abs(1023 + _speed))
                sleep(0.001)
        
    def stop(self):
        self.motor(1, 0)
        self.motor(2, 0)

    def fd(self, _speed):
        self.motor(1, _speed)
        self.motor(2, _speed)

    def sl(self, _speed):
        self.motor(1, -_speed)
        self.motor(2, _speed)

    def sr(self, _speed):
        self.motor(1, _speed)
        self.motor(2, -_speed)
    def Motor(self,Lspeed,Rspeed):
        self.motor(1,Lspeed)
        self.motor(2,Rspeed)

