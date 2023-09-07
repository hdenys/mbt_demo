Set shell = CreateObject("WScript.Shell")

Set notepadApp = shell.Exec("Notepad.exe")
If notepadApp.Status = 0 Then notepadApp.Terminate()

