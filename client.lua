Notify = function(title, message, type, time)
	SendNUIMessage({
		action = 'notify',
        title = title,
        message = message,
		type = type or 'general',
        time = time or 5000
	})
end
exports('Notify', Notify)

RegisterNetEvent('flipz-alert:Notify')
AddEventHandler('flipz-alert:Notify', function(title, message, type, time)
	Notify(title, message, type, time)
end)

local testCommand = true
if testCommand then
	RegisterCommand("notify", function(source, args, raw)
		Notify("General", "General Notification Message", "general", 5000)
		Wait(1000)
		Notify("Info", "Info Notification Message", "info", 5000)
		Wait(1000)
		Notify("Success", "Success Notification Message", "success", 5000)
		Wait(1000)
		Notify("Warning", "Warning Notification Message", "warning", 5000)
		Wait(1000)
		Notify("Error", "Error Notification Message", "error", 5000)
	end)
end