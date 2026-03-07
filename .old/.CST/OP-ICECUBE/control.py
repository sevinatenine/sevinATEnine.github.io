import time
import select,sys
import paramiko
from paramiko.ssh_exception import BadHostKeyException, AuthenticationException, SSHException, NoValidConnectionsError
from os import path,rename
host = '10.42.0.1'
user = 'pi'
password = 'pi'

a = time.time_ns()/1000000000

ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(hostname=host, username=user, password=password)

print("\033[96m", end='')
print('[DEBUG] Connected')


def say(text, arguments=''):
    print("\033[92m", end='')
    print(('\n'+text))

    cmd='espeak "'+text+'" '+arguments
    print("\033[96m", end='')
    print('[DEBUG] Executing.')
    stdin, stdout, stderr = ssh.exec_command(cmd)
    print('[DEBUG] Executed.')
    print('[DEBUG] Reading.')
    print(stdout.read())
    print(stderr.read())
    print('[DEBUG] Finished.')

def detonate():
    print("\033[96m", end='')
    print('[DEBUG] Executing.')
    stdin, stdout, stderr = ssh.exec_command('/home/pi/AutoBoot/detonate.sh')
    print('[DEBUG] Executed.')
    print('[DEBUG] Reading.')
    print(stdout.read())
    print(stderr.read())
    print('[DEBUG] Finished.')

armed = False
detonated = False

say('SSH connection made. Waiting for user input.', '-g 4')
say('Please swipe card connected to command', '-g 4')

while True:
    cardIn = input('\033[92m > ')
    if (cardIn == '%B1110210353317748351^07675018165$05000$^?;1110210353317748351=4912?'):
        say('Detected cardswipe for command: arm. Arming detonation device. Successfully armed device. Ready for detonation.')
        armed = True
    elif (cardIn == '%B6006496721574275825^LLBMC                     ^72051101BN?;6006496721574275825=720511021281595?'):
        if (armed):
            say('Detected cardswipe for command: detonate. Detonation device is armed. Preparing for detonation. DANGER: Stay away from detonation device while exploding. Starting countdown.')
            time.sleep(1)
            say('10 9 8 7 6 5 4 3 2 1 0 Detonating!', '-g 100')
            detonate()
            detonated = True
            break
        else:
            say('Detected cardswipe for command: detonate. Detonation device is not armed. Please arm before detonating.')



try:
    ssh.close()
except:
    pass

print("\033[96m")
print('[DEBUG] Disconnected')


