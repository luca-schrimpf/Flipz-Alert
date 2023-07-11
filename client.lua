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
		Notify("General", "General ~c~Notification~s~ Message", "general", 5000)
		Wait(1000)
		Notify("Info", "Info ~b~Notification~s~ Message", "info", 5000)
		Wait(1000)
		Notify("Success", "Success ~g~Notification~s~ Message", "success", 5000)
		Wait(1000)
		Notify("Warning", "Warning ~o~Notification~s~ Message", "warning", 5000)
		Wait(1000)
		Notify("Error", "Error ~r~Notification~s~ Message", "error", 5000)
	end)
end