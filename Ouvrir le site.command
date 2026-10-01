#!/bin/bash
cd -- "$(dirname -- "$0")" || exit 1
python3 - <<'PY'
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import threading
import webbrowser

root = Path.cwd()
handler = partial(SimpleHTTPRequestHandler, directory=str(root))
server = ThreadingHTTPServer(('127.0.0.1', 0), handler)
url = f'http://localhost:{server.server_port}/index.html'
print(f'Site ouvert : {url}\nGardez cette fenêtre ouverte. Ctrl+C pour arrêter.', flush=True)
threading.Timer(0.5, lambda: webbrowser.open(url)).start()
try:
    server.serve_forever()
except KeyboardInterrupt:
    pass
finally:
    server.server_close()
PY
