

#  The following document is owned by:
#  @sevinATEnine (and alt) @Cesium72 @tacocat15 and @cmsmith02
#
#  It is under the Creative Commons license and may not be reproduced commercially or without
#  direct permission from the authors.
#
#  Other files linked to this repository, with the exception of some of the assets, also hold
#  the same criteria.



import os
import sys
import time





users = {
    "$|m0n":"Dev",
    "c@d3N":"Dev"
}

userId = {
    "$|m0n":"TacoMan",
    "c@d3N":"You"
}


run = False
path = sys.path

#######################################


# while True:
#     x = input("Enter user > ")
#     try:
#         password = users[x]
#         y = input("Enter pass > ")
#         if y == password:
#             break
#         else:
#             print("Invalid")
#     except:
#         print("Invalid")

# user = userId[x]
# password = y


#######################################
user = "Dev Test"
#######################################


print("Login succesful")
print("Initiating...")
print("Welcome back, " + user)
print()
run = True


while run:


    current_time = time.localtime()
    hour = current_time.tm_hour
    minute = current_time.tm_min
    second = current_time.tm_sec
    
    inputString = (("[{}:{}:{}] ".format(hour,minute,second))+user+"@"+path[0])
    userInput = input(inputString + " > ")



    if (userInput == "quit") or (userInput == "exit"):
        sys.exit()
    elif (userInput == "help") or (userInput == "?"):
        print("""Commands:
    help or ?      shows list of commands
    quit or exit   exits the terminal
    read           reads file
    append         adds to a file
    write          clears a file then appends to it
    erase          clears a file
    clear          removes previous output
    make           makes a file
    remove         removes a file
    change         changes directory to a folder
    move           moves a file from one location to another""")
        


    elif (userInput.split()[0])=="read":
        # try:
            filetoopen = (userInput.split())[1]
            f = open(filetoopen)
            for i in f.readlines():
                print(i)
            f.close()

    elif (userInput.split()[0])=="erase":
        # try:
            filetoopen = (userInput.split())[1]
            f = open(filetoopen, "w")
            f.close()

    import os
import sys
import time





users = {
    "$|m0n":"Dev",
    "c@d3N":"Dev"
}

userId = {
    "$|m0n":"TacoMan",
    "c@d3N":"You"
}


run = False
path = sys.path

#######################################


# while True:
#     x = input("Enter user > ")
#     try:
#         password = users[x]
#         y = input("Enter pass > ")
#         if y == password:
#             break
#         else:
#             print("Invalid")
#     except:
#         print("Invalid")

# user = userId[x]
# password = y


#######################################
user = "Dev Test"
#######################################


print("Login succesful")
print("Initiating...")
print("Welcome back, " + user)
print()
run = True


while run:


    current_time = time.localtime()
    hour = current_time.tm_hour
    minute = current_time.tm_min
    second = current_time.tm_sec
    
    inputString = (("[{}:{}:{}] ".format(hour,minute,second))+user+"@"+path[0])
    userInput = input(inputString + " > ")

    print(userInput.split())


    if (userInput == "quit") or (userInput == "exit"):
        sys.exit()
    elif (userInput == "help") or (userInput == "?"):
        print("""Commands:
    # help or ?      shows list of commands
    # quit or exit   exits the terminal
    # read           reads file
    append         adds to a file
    write          clears a file then appends to it
    # erase          clears a file
    clear          removes previous output
    make           makes a file
    remove         removes a file
    change         changes directory to a folder
    move           moves a file from one location to another""")
        


    elif (userInput.split()[0])=="read":
        try:
            filetoopen = (userInput.split())[1]
            f = open(filetoopen)
            for i in f.readlines():
                print(i)
            f.close()
        except:
            print(" > Error: could not open file")

    elif (userInput.split()[0])=="erase":
        try:
            filetoopen = (userInput.split())[1]
            f = open(filetoopen, "w")
            f.close()
        except:
            print(" > Error: could not open file")

    elif (userInput.split()[0])=="write":
        try:
            pass
            # filetoopen = (userInput.split())[1]
            # f = open(filetoopen, "rw")
            # f.write((userInput.split())[2])
            # f.close()
        except:
            print(" > Error: could not open file")

        
