# Flipz-Alert
Enhance your FiveM gaming experience with the Flipz-Alert Script. This innovative extension takes your gameplay to the next level by providing tailored, interactive notifications right in your game.

Whether you're a police officer chasing criminals, a gang member embarking on thrilling missions, or simply exploring the streets of Los Santos, the Alert Script keeps you informed. Receive real-time updates on important events, missions, or challenges happening in your game.

Never miss crucial moments again with dynamic notifications. Stay instantly informed about new assignments, mission accomplishments, dangers, or other relevant events. These notifications appear discreetly on your screen, without interrupting gameplay, allowing you to react promptly.

The Flipz-Alert Script offers a user-friendly interface, allowing you to customize notifications to your preferences. Adjust the appearance, position, and duration of notifications to seamlessly integrate them into your gameplay.

## Content
- [Flipz-Alert](#flipz-alert)
  - [Content](#content)
  - [Installation](#installation)
  - [How to use](#how-to-use)
  - [Export](#export)
  - [Event](#event)
  - [Thanks for your Support!](#thanks-for-your-support)

For more content join our **[Discord](https://discord.gg/hgHNRvXmF9)** server to be kept up to date!

## Installation
1. Download the code here from GitHub or from **[Tebex](https://flipz-resources.tebex.io/)**.
2. Import the script into your FiveM Server Resource Folder
3. Add in the server.cfg -> "start flipz-alert
4. Finish!

## How to use
To trigger the notify, use the exports or TriggerEvent funktions.

`type` and `duration` are optional. For type, general will be used and for duration, 5000 will be used.

```lua
Alert("header", "message", 'type', duration --[[number]])
```

**Types:**
- general
- info
- success
- error
- warning

Info! Duration in ms (1000ms = 1s)

## Export
```lua
-- clientside
exports['flipz-alert']:Notify("General", "General Notification Message", "general", 5000)

-- serverside
exports['flipz-alert']:Notify(source, "General", "General Notification Message", "general", 5000)
```
## Event
```lua
-- serverside
TriggerClientEvent('flipz-alert:Notify', source, "General", "General Notification Message", "general", 5000)
```

## Thanks for your Support!
This is my first script, and I hope you like that 💖
