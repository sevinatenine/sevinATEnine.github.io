def Log(value, end="<br>"):
    print(str(value)+end)

def Code(value):
    print(value)

def Error(value, end="<br>"):
    print("<font color='red'>"+str(value)+"</font>"+end)

def Init():
    print("<head><style>* {font-family: monospace;}</style></head><body>")

def End():
    print("</body>")