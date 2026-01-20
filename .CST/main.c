#include <stdio.h>
#include <string.h>
  struct users {
  char username[16];
  char password[32];
  char name[32];
  int id;
};//Establish user template

struct users u[3] = {
  {"c@d3N","(0d3r_4_L1FE","ThatGuyOverThere",1},
  {"$|m0n","Dev","TacoMan",2},
  {"t","t","TEST_USER",3}
};//Create users
char user[32];
char pass[32];
int UID;
char cmd[64];
void runCmd() {
    printf("CST/%s-->",u[UID].name);
    scanf("%s",&cmd);
    runCmd();
}
void main() {
    printf("Enter your username: ");
    scanf("%s",&user);
    printf("Enter your password: ");
    scanf("%s",&pass);
    printf("Enter your UID: ");
    scanf("%d",&UID);
    if (strcmp(user,u[UID].username)==0 && strcmp(pass,u[UID].password)==0) {
        printf("Logged in as: %s\n",u[UID].name);
        runCmd();
    } else {
        printf("Username and or password entered incorrectly.");
    }
};
