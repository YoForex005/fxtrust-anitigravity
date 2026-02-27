const fs = require('fs');
const path = require('path');

const auditFile = fs.readFileSync('SEO_Audit_Structure.md', 'utf-8');
const lines = auditFile.split('\n');
const pagesToFix = [];

let inHeadingSection = false;
for (const line of lines) {
    if (line.startsWith('## Heading Tags')) {
        inHeadingSection = true;
        continue;
    }
    if (inHeadingSection && line.startsWith('## ')) {
        inHeadingSection = false;
        continue;
    }
    if (inHeadingSection && line.startsWith('- **')) {
        const match = line.match(/\*\*([^*]+)\*\*/);
        if (match) {
            pagesToFix.push(match[1]);
        }
    }
}

console.log(`Found ${pagesToFix.length} pages to fix.`);

for (const p of pagesToFix) {
    const fullPath = path.resolve(p);
    if (!fs.existsSync(fullPath)) {
        console.log(`File not found: ${fullPath}`);
        continue;
    }
    let content = fs.readFileSync(fullPath, 'utf-8');

    // Check if it already has an h1
    if (content.toLowerCase().includes('<h1')) {
        console.log(`Already has H1: ${p}`);
        continue;
    }

    // For pages, we are looking for the default export.
    const defaultExportMatch = content.match(/export default function\s+([A-Za-z0-9_]+)\s*\([^\)]*\)\s*\{/);
    if (!defaultExportMatch) {
        console.log(`Could not find default export in ${p}`);
        continue;
    }

    const pageTitle = defaultExportMatch[1].replace(/([A-Z])/g, ' $1').trim();
    const startIndex = defaultExportMatch.index + defaultExportMatch[0].length;

    // Find the first 'return' inside the main component body
    const firstReturnIndex = content.indexOf('return', startIndex);
    if (firstReturnIndex === -1) {
        console.log(`Could not find return in ${p}`);
        continue;
    }

    // We will find "return (" to wrap the content
    const returnParenIndex = content.indexOf('return (', startIndex);
    if (returnParenIndex !== -1 && returnParenIndex - firstReturnIndex < 10) {
        // Find if it starts with Fragment return ( <>
        const justAfterReturn = content.substring(returnParenIndex + 8, returnParenIndex + 30);
        if (justAfterReturn.includes('<>')) {
            const replaceAt = content.indexOf('<>', returnParenIndex) + 2;
            content = content.substring(0, replaceAt) + `\n            <h1 className="sr-only">${pageTitle}</h1>` + content.substring(replaceAt);
            fs.writeFileSync(fullPath, content);
            console.log(`Fixed (Fragment): ${p}`);
        } else {
            // Need to wrap
            // Find the matching closing parenthesis for this return
            let openParenCount = 0;
            let closingParenIndex = -1;
            for (let i = returnParenIndex + 6; i < content.length; i++) {
                if (content[i] === '(') openParenCount++;
                if (content[i] === ')') {
                    openParenCount--;
                    if (openParenCount === 0) {
                        closingParenIndex = i;
                        break;
                    }
                }
            }
            if (closingParenIndex !== -1) {
                const innerContent = content.substring(returnParenIndex + 8, closingParenIndex);
                const before = content.substring(0, returnParenIndex);
                const after = content.substring(closingParenIndex + 1);

                content = before + `return (\n        <>\n            <h1 className="sr-only">${pageTitle}</h1>\n            {/* Original Component */}\n            ${innerContent}\n        </>\n    )` + after;
                fs.writeFileSync(fullPath, content);
                console.log(`Fixed (Wrapped): ${p}`);
            } else {
                console.log(`Parenthesis mismatch in ${p}`);
            }
        }
    } else {
        // Basic single line return: return <div>...</div>;
        // We'll just look for return < ... >
        const returnTagIndex = content.indexOf('return <', startIndex);
        if (returnTagIndex !== -1 && returnTagIndex - firstReturnIndex < 10) {
            const endSemicolon = content.indexOf(';', returnTagIndex);
            if (endSemicolon !== -1) {
                const innerContent = content.substring(returnTagIndex + 7, endSemicolon);
                const before = content.substring(0, returnTagIndex);
                const after = content.substring(endSemicolon + 1);

                content = before + `return (\n        <>\n            <h1 className="sr-only">${pageTitle}</h1>\n            ${innerContent}\n        </>\n    );` + after;
                fs.writeFileSync(fullPath, content);
                console.log(`Fixed (Single line wrapped): ${p}`);
            } else {
                console.log(`No semicolon after single line return in ${p}`);
            }
        } else {
            console.log(`Could not pattern match return statement in ${p}`);
        }
    }
}
