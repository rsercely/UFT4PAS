SystemUtil.CloseProcessByName "RumbaPage.exe"
SystemUtil.Run "c:\Users\Administrator\Desktop\RPA\CICS.rsdm"

TeWindow("TeWindow").TeScreen("Si").TeField("USERID").Set "SYSAD" @@ hightlight id_;_746_;_script infofile_;_ZIP::ssf1.xml_;_
TeWindow("TeWindow").TeScreen("Si").TeField("Password").SetSecure "602c3059ae00f17e316656f446a37130" @@ hightlight id_;_826_;_script infofile_;_ZIP::ssf2.xml_;_
TeWindow("TeWindow").TeScreen("Si").SendKey TE_ENTER @@ hightlight id_;_7958_;_script infofile_;_ZIP::ssf4.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey "ACCT" @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf5.xml_;_
TeWindow("TeWindow").TeScreen("ACCTE0012I Signon complete").SendKey TE_ENTER @@ hightlight id_;_7213_;_script infofile_;_ZIP::ssf7.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUEST TYPE").Set "M" @@ hightlight id_;_662_;_script infofile_;_ZIP::ssf8.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("ACCOUNT").Set "10001" @@ hightlight id_;_675_;_script infofile_;_ZIP::ssf9.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").SendKey TE_ENTER @@ hightlight id_;_9864_;_script infofile_;_ZIP::ssf11.xml_;_
' as recorded
'TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED").Set "10" @@ hightlight id_;_922_;_script infofile_;_ZIP::ssf12.xml_;_
curDate = TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED"). _
	getROProperty("text") @@ hightlight id_;_922_;_script infofile_;_ZIP::ssf12.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").TeField("DATE ISSUED"). _
	Set curDate + 1 @@ hightlight id_;_922_;_script infofile_;_ZIP::ssf12.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: RECORD CHANGE").SendKey TE_ENTER @@ hightlight id_;_13614_;_script infofile_;_ZIP::ssf14.xml_;_
TeWindow("TeWindow").TeScreen("ACCOUNT FILE: MENU").TeField("REQUESTED(protected)").Check CheckPoint("REQUESTED(protected)") @@ hightlight id_;_1842_;_script infofile_;_ZIP::ssf17.xml_;_

TeWindow("TeWindow").InsightObject("InsightObject").Click @@ hightlight id_;_3_;_script infofile_;_ZIP::ssf18.xml_;_
TeWindow("TeWindow").InsightObject("InsightObject_2").Click @@ hightlight id_;_11_;_script infofile_;_ZIP::ssf19.xml_;_
SystemUtil.CloseProcessByName "RumbaPage.exe"

Window("Micro Focus Rumba").InsightObject("InsightObject").Click @@ hightlight id_;_2_;_script infofile_;_ZIP::ssf20.xml_;_



