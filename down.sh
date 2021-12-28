#!/bin/bash
sudo ifconfig wlan0 down
sleep 20
sudo iwconfig wlan0 mode ad-hoc
sleep 20
sudo ifconfig wlan0 up