import urllib.request
import ssl
import re

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {'User-Agent': 'Mozilla/5.0'}

def download(url, dest):
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req, context=ctx, timeout=10) as r:
            data = r.read()
            with open(dest, 'wb') as f:
                f.write(data)
            print(f'Successfully downloaded {dest} ({len(data)} bytes)')
            return True
    except Exception as e:
        print(f'Failed {url} -> {dest}: {e}')
        return False

try:
    req = urllib.request.Request('https://www.govtpolyvisakhapatnam.in', headers=headers)
    with urllib.request.urlopen(req, context=ctx, timeout=10) as r:
        html = r.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html)
        for m in matches:
            if any(k in m.lower() for k in ['logo', 'emblem', 'header', 'banner']):
                print('GovtPoly candidate:', m)
                full_url = m if m.startswith('http') else 'https://www.govtpolyvisakhapatnam.in/' + m.lstrip('/')
                download(full_url, 'public/logos/govtpoly.png')
                break
except Exception as e:
    print('GovtPoly error:', e)
