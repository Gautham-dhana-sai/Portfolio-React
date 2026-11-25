import urllib.request
import ssl
import re
import os

os.makedirs('public/logos', exist_ok=True)

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}

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

# 1. Akrivia HCM
download('https://akriviahcm.com/assets/images/akrivia-logo.svg', 'public/logos/akrivia.svg')

# 2. Motivity Labs
download('https://motivitylabs.com/logo.png', 'public/logos/motivity.png')

# 3. Inncircles
try:
    req = urllib.request.Request('https://inncircles.com', headers=headers)
    with urllib.request.urlopen(req, context=ctx, timeout=10) as r:
        html = r.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https://assets\.inncircles\.com/[^"\'>\s]+', html)
        for m in matches:
            if 'logo' in m.lower():
                print('Found Inncircles logo URL:', m)
                download(m, 'public/logos/inncircles.svg' if '.svg' in m else 'public/logos/inncircles.png')
                break
        else:
            if matches:
                print('First asset candidate:', matches[0])
                download(matches[0], 'public/logos/inncircles.png')
except Exception as e:
    print('Inncircles fetch error:', e)

# 4. Raghu Engineering College
try:
    req = urllib.request.Request('https://www.raghuenggcollege.com/', headers=headers)
    with urllib.request.urlopen(req, context=ctx, timeout=10) as r:
        html = r.read().decode('utf-8', errors='ignore')
        matches = re.findall(r'https://www\.raghuenggcollege\.com/wp-content/uploads/[^"\'>\s]+logo[^"\'>\s]*', html, re.I)
        if matches:
            print('Found Raghu logo:', matches[0])
            download(matches[0], 'public/logos/raghu.png')
        else:
            print('Raghu no direct match in html, trying common paths...')
            # Let's search general img tags
            for img in re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html):
                if 'logo' in img.lower():
                    print('Candidate:', img)
                    download(img, 'public/logos/raghu.png')
                    break
except Exception as e:
    print('Raghu fetch error:', e)
