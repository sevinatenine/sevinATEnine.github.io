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

globalUser = ""
globalPassword = ""
globalName = ""

def logIn():
    users = {
        "$|m0n":"Dev",
        "c@d3N":"Dev"
    }
    userId = {
        "$|m0n":"TacoMan",
        "c@d3N":"You"
    }

    while True:
        x = input("Enter user > ")
        try:
            password = users[x]
            y = input("Enter pass > ")
            if y == password:
                break
            else:
                print("Invalid")
        except:
            print("Invalid")

    user = x
    password = y
    authorized = True

    name = userId[user]

    print("Login succesful")
    print("Initiating...")
    print("Welcome back, " + name)
    print()

    global globalUser
    global globalPassword
    global globalName

    globalName = name
    globalPassword = password
    globalUser = user


def runCommand(command, arg1="", arg2=""):
    if command == "help":
        print("""Commands:
    help or ?      shows list of commands                         v1.0
    quit or exit   exits the terminal                             v1.0
    read           reads file                                     v1.0
    append         adds to a file                                 v0.0
    write          overides the file then writes to it            v1.0
    erase          clears a file                                  v0.0
    clear          removes previous output                        v0.0
    make           makes a file                                   v0.0
    remove         removes a file                                 v0.0
    change         changes directory to a folder                  v0.0
    move           moves a file from one location to another      v0.0""")
    elif command == "quit" or command == "exit":
        sys.exit()
    elif command == "read":
        try:
            with open(arg1, "r") as f:
                for i in f.readlines():
                    print(i,end="")
        except:
            print("Error: could not read file")
        print()
    elif command == "write":
        try:
            with open(arg1, "w") as f:
                f.write(arg2)
        except:
            print("Error: could not read file")
        print()
    else:
        print("Error: invalid command")

    




user = "Dev Test"

# logIn()

runCommand("help")
runCommand("write", "test.txt", "before")
runCommand("read", "test.txt")
runCommand("write", "test.txt", "after")
runCommand("read", "test.txt")
runCommand("quit")
