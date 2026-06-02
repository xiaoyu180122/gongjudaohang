import glob
import re

files = glob.glob('src/components/*.tsx') + ['src/app/page.tsx']

def add_alert_to_button(match):
    tag = match.group(0)
    if 'onClick' in tag or 'type="submit"' in tag:
        return tag
    return tag.replace('<button', '<button onClick={() => alert("此功能尚未接入 API (WIP)")}')

def add_alert_to_link(match):
    tag = match.group(0)
    if 'onClick' in tag:
        return tag
    return tag.replace('href="#"', 'href="#" onClick={(e) => { e.preventDefault(); alert("此功能尚未接入 API (WIP)"); }}')

def add_alert_to_div(match):
    tag = match.group(0)
    if 'onClick' in tag:
        return tag
    return tag.replace('<div', '<div onClick={() => alert("页面内容开发中 (WIP)")}')

for filepath in files:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # 1. Update <button>
        content = re.sub(r'<button[^>]*>', add_alert_to_button, content)
        
        # 2. Update <a href="#">
        content = re.sub(r'<a[^>]*href="#"[^>]*>', add_alert_to_link, content)
        
        # 3. Update <div ... cursor-pointer ...>
        # Match <div followed by any characters, then class="..." containing cursor-pointer
        content = re.sub(r'<div [^>]*className="[^"]*cursor-pointer[^"]*"[^>]*>', add_alert_to_div, content)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
            
    except Exception as e:
        print(f"Error {filepath}: {e}")

print("Added generic feedback to all interactive elements.")
