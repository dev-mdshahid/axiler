const fs = require('fs');

function fix(file, match, replacement) {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(match, replacement);
  fs.writeFileSync(file, content, 'utf8');
}

fix('c:/dev/axiler/components/sections/home/Lifecycle.tsx', /continuously\.\s*\{/, 'continuously.\n            </p>\n          </div>\n\n        {');
fix('c:/dev/axiler/components/sections/home/Testimonials.tsx', /securely\.\s*<div className=.mx-auto grid/, 'securely.\n            </p>\n          </div>\n\n          {/* Testimonials Grid */}\n          <div className=\"mx-auto grid');
fix('c:/dev/axiler/components/sections/home/IndustryEvents.tsx', /measures\.\s*\{/, 'measures.\n            </p>\n          </div>\n\n          {');
fix('c:/dev/axiler/components/sections/home/Services.tsx', /seamlessly\.\s*\{/, 'seamlessly.\n              </p>\n            </div>\n\n            {');
fix('c:/dev/axiler/components/sections/home/Blogs.tsx', /security\.\s*<div className=.flex/, 'security.\n            </p>\n          </div>\n\n          <div className=\"flex');
fix('c:/dev/axiler/components/sections/home/FAQ.tsx', /infrastructure\.\s*\{/, 'infrastructure.\n                    </p>\n                  </div>\n\n                  {');

console.log('Fixed successfully');
