#include <M5Stack.h>

void setup()
{
    M5.begin();
    Serial.updateBaudRate(9600);
    M5.Lcd.setTextSize(2);
    M5.Lcd.println("READY");

}

void loop()
{
  String aStr;

  if ( Serial.available() > 0 )
  {
    aStr = Serial.readStringUntil('\n');
    M5.Lcd.println("Received:"+aStr);
    Serial.print("Input:");
    Serial.println(aStr);
    M5.Lcd.println("*");
  }
}
