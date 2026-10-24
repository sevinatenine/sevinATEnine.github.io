# import os, sys, requests

# websites = [
#     'linkedin.com',
#     'instagram.com',
#     'youtube.com',
#     'tiktok.com',
#     'facebook.com',
#     'google.com'
# ]

# dorks = [
#     '"{}" site:{}',
#     '{} site:{}'
# ]

# userApps = {
#     'username':'instagram.com/{}',
#     'firstname, lastname, id':'https://www.linkedin.com/in/{}-{}-{}?trk=people-guest_people_search-card',
#     'username':'www.youtube.com/@{}'
# }

# userSearchApps = {
#     'firstname, lastname': 'https://www.linkedin.com/pub/dir?firstName={}&lastName={}&trk=people-guest_people-search-bar_search-submit'
# }


# print('Enter information about user in format <type>:<info>\n\nValid types:\nname\nusername\ncompany\nemail\naddress\ndomain\n(press ^C when finished inserting data)\n')

# data = {}

# searches = []

# try:
#     while True:
#         n = input(' > ')
#         if(n.split(':')[0].lower().strip() in ['name', 'username', 'company','email','address','domain']):
#             data[n.split(':')[0].lower().strip()]=(n.split(':')[1].lower().lstrip().rstrip())
#         else:
#             print('Invalid type')
        
# except KeyboardInterrupt:
#     print('\n')
#     print(data)
    
#     for value in data.items():
#         for dork in dorks:
#             for url in websites:
#                 searches.append(dork.format(value[1], url))
#                 if (value[0] == 'name'):
#                     searches.append(dork.format((''.join(value[1].split(' '))), url))
#                     searches.append(dork.format(('-'.join(value[1].split(' '))), url))


# for i in searches:
#     print('https://www.google.com/search?q='+i)





# from http.server import BaseHTTPRequestHandler, HTTPServer
# import time

# hostName = "localhost"
# serverPort = 8080

# class MyServer(BaseHTTPRequestHandler):
#     def do_GET(self):
#         self.send_response(200)
#         self.send_header("Content-type", "text/html")
#         self.end_headers()
#         self.wfile.write(bytes(f'''
#                                <html>
#                                <head>
#                                <title>Simon Person Finder</title>
#                                </head>
#                                <body>
#                                <p>{self.path}</p>
#                                </body>
#                                ''', "utf-8"))

# if __name__ == "__main__":        
#     webServer = HTTPServer((hostName, serverPort), MyServer)
#     print("Server started http://%s:%s" % (hostName, serverPort))

#     try:
#         webServer.serve_forever()
#     except KeyboardInterrupt:
#         pass

#     webServer.server_close()
#     print("Server stopped.")
