import re

with open('src/app/page.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

match = re.search(r'<main[^>]*>(.*?)</main>', content, re.DOTALL)
if match:
    inner = match.group(1)
    
    # We also need to keep the state logic that was used inside the Dashboard.
    # The Dashboard uses `showInsights`, so let's include that state.
    out = f"""import React, {{ useState }} from 'react';

export default function Dashboard() {{
  const [showInsights, setShowInsights] = useState(false);
  return (
    <>
{inner}
    </>
  );
}}
"""
    with open('src/components/Dashboard.tsx', 'w', encoding='utf-8') as out_file:
        out_file.write(out)
    print("Dashboard.tsx generated")
else:
    print("Failed to extract <main>")
