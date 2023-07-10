# Flipz-Alert



Enhance your FiveM gaming experience with the Flipz-Alert Script. This innovative extension takes your gameplay to the next level by providing tailored, interactive notifications right in your game.

Whether you're a police officer chasing criminals, a gang member embarking on thrilling missions, or simply exploring the streets of Los Santos, the Alert Script keeps you informed. Receive real-time updates on important events, missions, or challenges happening in your game.

Never miss crucial moments again with dynamic notifications. Stay instantly informed about new assignments, mission accomplishments, dangers, or other relevant events. These notifications appear discreetly on your screen, without interrupting gameplay, allowing you to react promptly.

The Flipz-Alert Script offers a user-friendly interface, allowing you to customize notifications to your preferences. Adjust the appearance, position, and duration of notifications to seamlessly integrate them into your gameplay.


## Inhaltsverzeichnis

- [Installation](#installation)
- [Verwendung](#verwendung)
- [Beispiel](#beispiel)

## Installation

1. Download the code here from GitHub or from **[Tebex](https://flipz-resources.tebex.io/)**.
2. Import the script into your FiveM Server Resource Folder
3. Add in the server.cfg -> "start flipz-alert
4. Finish!


## Verwendung

To trigger the alert, use the exports or TriggerEvent funktions.

Alert("types", "header", "message", duration)

Types:
- general
- info
- success
- error
- warning


Info! Duration in ms (1000ms = 1s)

## Beispiel

Füge hier einen Beispielcode oder ein Beispiel an, um zu zeigen, wie dein Projekt verwendet werden kann. Dies kann den Lesern helfen, das Konzept besser zu verstehen und es selbst auszuprobieren.

```

//Example for Exports:
exports['flipz-alert']:Alert("info", "Info Notification Title", "Info Notification Message", 2000)	

//Example for TriggerEvent:
TriggerEvent('flipz-alert:Alert', "general", "General", "General Notification Message", 2000)

```
