import fs from 'fs';
import path from 'path';

const filesToFix = [
    'src/components/blocks/shadcnblocks-com-feature108.tsx',
    'src/components/blocks/shadcnblocks-com-navbar1.tsx',
    'src/components/demos/bento-grid-demo.tsx',
    'src/components/DetailedProducts.tsx',
    'src/components/home/LogoCloudSection.tsx',
    'src/components/home/TestimonialsSection.tsx',
    'src/components/Products.tsx',
    'src/components/TrustBadges.tsx',
    'src/components/ui/logo-cloud-2.tsx',
    'src/components/ui/logo-cloud-3.tsx',
    'src/components/ui/unique-testimonial.tsx'
];

filesToFix.forEach(relPath => {
    const fullPath = path.join(process.cwd(), relPath);
    if(fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        
        // Ensure import exists
        if(!content.includes('import Image from')) {
            const lastImportIndex = content.lastIndexOf('import ');
            const endOfLine = content.indexOf('\n', lastImportIndex);
            if(endOfLine !== -1 && !content.includes('next/image')) {
                content = content.slice(0, endOfLine + 1) + 'import Image from "next/image";\n' + content.slice(endOfLine + 1);
            }
        }
        
        // Replace <img ... >
        content = content.replace(/<img([^>]*)>/gi, (match, p1) => {
            let inner = p1;
            
            // Add alt if missing
            if(!inner.toLowerCase().includes('alt=')) {
                const srcMatch = inner.match(/src=["']([^"']+)["']/);
                let altText = "Image";
                if(srcMatch && srcMatch[1]) {
                    const filename = srcMatch[1].split('/').pop().split('.')[0];
                    altText = filename.replace(/[-_]/g, ' ') || "Graphic";
                }
                inner += ` alt="${altText}"`;
            }
            
            if(!inner.includes('width=') && !inner.includes('fill')) {
                inner += ` width={500} height={500} style={{ width: '100%', height: 'auto' }}`;
            }

            return `<Image${inner} />`;
        });
        
        fs.writeFileSync(fullPath, content);
        console.log(`Refactored images in ${relPath}`);
    }
});

const heroFiles = [
    'src/components/Hero.tsx',
    'src/app/page.tsx',
    'src/app/solutions/prop-firm/DemoAccessSection.tsx',
    'src/app/solutions/trade-copier/DemoAccessSection.tsx',
    'src/app/solutions/crm/DemoAccessSection.tsx',
    'src/app/solutions/yoforex-ai/DemoAccessSection.tsx'
];

heroFiles.forEach(relPath => {
    const fullPath = path.join(process.cwd(), relPath);
    if(fs.existsSync(fullPath)) {
        let content = fs.readFileSync(fullPath, 'utf8');
        content = content.replace(/<Image([^>]*)>/, (match, p1) => {
            if(!p1.includes('priority')) {
                return `<Image priority={true}${p1}>`;
            }
            return match;
        });
        fs.writeFileSync(fullPath, content);
        console.log(`Added LCP priority to ${relPath}`);
    }
});
