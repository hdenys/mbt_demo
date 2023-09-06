WpfWindow("Micro Focus MyFlight Sample").WpfEdit("agentName").Set "John"
WpfWindow("Micro Focus MyFlight Sample").WpfEdit("password").Set "hp"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("OK").Click
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("fromCity").Select "Los Angeles"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("toCity").Select "San Francisco"
WpfWindow("Micro Focus MyFlight Sample").WpfComboBox("Class").Select "Business"
WpfWindow("Micro Focus MyFlight Sample").WpfButton("FIND FLIGHTS").Click
WpfWindow("Micro Focus MyFlight Sample").Close
