@Echo off
netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1
TIMEOUT /T 10
Echo Iniciando cuenta regresiva
Set _seconds=0
:waitloop
  :: Wait for 10 seconds
  Set /a "_seconds=_seconds+10">nul
  PING -n 11 127.0.0.1>nul
  :: If 60 seconds have elapsed exit the loop
  If %_seconds%==30 goto nextstep
  If not exist \\Server64\updates\monday.csv goto waitloop
:nextstep 
netsh wlan connect ssid=Smart_Lamp_2v1 name=Smart_Lamp_2v1