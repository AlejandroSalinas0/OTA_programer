#!/bin/bash
iwconfig wlan0 essid Smart_Lamp_2v1 key Lasec123.
echo "conecting"
delay 15
node "main.js"

echo "Codigos $?"

#iwconfig wlan0 essid Smart_Lamp_2v1 key Lasec123.
