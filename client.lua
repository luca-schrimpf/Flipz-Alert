function Alert(type, title, message, time)
	SendNUIMessage({
		action = 'notify',
		type = type,
        title = title,
        message = message,
        time = time
	})
end

RegisterNetEvent('flipz-alert:Alert')
AddEventHandler('flipz-alert:Alert', function(type, title, message, time)
	Alert(type, title, message, time)
end)

RegisterCommand("notify", function() 
	Alert("general", "General", "General Notification Message", 2000)
	Alert("info", "Info", "Info Notification Message", 2000)
	Alert("success", "Success", "Success Notification Message", 2000)
	Alert("error", "Error", "Error Notification Message", 2000)
	Alert("warning", "Warning", "Warning Notification Message", 2000)
end, false )


exports['flipz-alert']:Alert("info", "Info Notification Title", "Info Notification Message", 2000)	


RegisterCommand("notfiyTest", function()
	TriggerEvent('flipz-alert:Alert', "general", "General", "General Notification Message", 2000)

end)