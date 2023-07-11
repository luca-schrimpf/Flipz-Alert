Notify = function(src, title, message, type, time)
	if not src then return end
	TriggerClientEvent('flipz-alert:Notify', src, title, message, type, time)
end
exports('Notify', Notify)