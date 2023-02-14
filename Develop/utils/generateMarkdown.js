// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') return ""
 else {
  const licenses = [
    {license: 'Apache 2.0 License',badge: '[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)'},
    {license: 'Boost Software License 1.0',badge: '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'},
    {license: 'BSD 3-Clause License',badge: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)'},
    {license: 'BSD 2-Clause License',badge: '[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'},
    {license: 'CC0',badge: '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'},
    {license: 'Attribution 4.0 International',badge: '[![License: CC BY 4.0](https://licensebuttons.net/l/by/4.0/80x15.png)](https://creativecommons.org/licenses/by/4.0/)'},
    {license: 'Attribution-ShareAlike 4.0 International',badge: '[![License: CC BY-SA 4.0](https://licensebuttons.net/l/by-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-sa/4.0/)'},
    {license: 'Attribution-NonCommercial 4.0 International',badge: '[![License: CC BY-NC 4.0](https://licensebuttons.net/l/by-nc/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc/4.0/)'},
    {license: 'Attribution-NoDerivates 4.0 International',badge: '[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)'},
    {license: 'Attribution-NonCommmercial-ShareAlike 4.0 International',badge: '[![License: CC BY-NC-SA 4.0](https://licensebuttons.net/l/by-nc-sa/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-sa/4.0/)'},
    {license: 'Attribution-NonCommercial-NoDerivatives 4.0 International',badge: '[![License: CC BY-NC-ND 4.0](https://licensebuttons.net/l/by-nc-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nc-nd/4.0/)'},
    {license: 'Eclipse Public License 1.0',badge: '[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'},
    {license: 'GNU GPL v3',badge: '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'},
    {license: 'GNU GPL v2',badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)'},
    {license: 'GNU AGPL v3',badge: '[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)'},
    {license: 'GNU LGPL v3',badge: '[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)'},
    {license: 'GNU FDL v1.3',badge: '[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)'},
    {license: 'The Hippocratic License 2.1',badge: '[![License: Hippocratic 2.1](https://img.shields.io/badge/License-Hippocratic_2.1-lightgrey.svg)](https://firstdonoharm.dev)'},
    {license: 'The Hippocratic License 3.0',badge: '[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)'},
    {license: 'IBM Public License Version 1.0',badge: '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)'},
    {license: 'ISC License (ISC)',badge: '[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'},
    {license: 'The MIT License',badge: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'},
    {license: 'Mozilla Public License 2.0',badge: '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'},
    {license: 'Attribution License (BY)',badge: '[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)'},
    {license: 'Open Database License (ODbL)',badge: '[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)'},
    {license: 'The Perl License',badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
    {license: 'The Artistic License 2.0',badge: '[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)'},
    {license: 'SIL Open Font License 1.1',badge: '[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)'},
    {license: 'The Unlicense',badge: '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'},
    {license: 'WTFPL',badge: '[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)'},
    {license: 'The zlib/libpng License',badge: '[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)'},
];

for (const badge of licenses){
  if (badge.license === license) return badge.badge
}

}


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') return ""
 else {
  const licenses = [
    {license: 'Apache 2.0 License',link: 'https://opensource.org/licenses/Apache-2.0'},
    {license: 'Boost Software License 1.0',link: 'https://www.boost.org/LICENSE_1_0.txt'},
    {license: 'BSD 3-Clause License',link: 'https://opensource.org/licenses/BSD-3-Clause'},
    {license: 'BSD 2-Clause License',link: 'https://opensource.org/licenses/BSD-2-Clause'},
    {license: 'CC0',link: 'http://creativecommons.org/publicdomain/zero/1.0/'},
    {license: 'Attribution 4.0 International',link: 'https://creativecommons.org/licenses/by/4.0/'},
    {license: 'Attribution-ShareAlike 4.0 International',link: 'https://creativecommons.org/licenses/by-sa/4.0/'},
    {license: 'Attribution-NonCommercial 4.0 International',link: 'https://creativecommons.org/licenses/by-nc/4.0/'},
    {license: 'Attribution-NoDerivates 4.0 International',link: 'https://creativecommons.org/licenses/by-nd/4.0/'},
    {license: 'Attribution-NonCommmercial-ShareAlike 4.0 International',link: 'https://creativecommons.org/licenses/by-nc-sa/4.0/'},
    {license: 'Attribution-NonCommercial-NoDerivatives 4.0 International',link: 'https://creativecommons.org/licenses/by-nc-nd/4.0/'},
    {license: 'Eclipse Public License 1.0',link: 'https://opensource.org/licenses/EPL-1.0'},
    {license: 'GNU GPL v3',link: 'https://www.gnu.org/licenses/gpl-3.0'},
    {license: 'GNU GPL v2',link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'},
    {license: 'GNU AGPL v3',link: 'https://www.gnu.org/licenses/agpl-3.0'},
    {license: 'GNU LGPL v3',link: 'https://www.gnu.org/licenses/lgpl-3.0'},
    {license: 'GNU FDL v1.3',link: 'https://www.gnu.org/licenses/fdl-1.3'},
    {license: 'The Hippocratic License 2.1',link: 'https://firstdonoharm.dev'},
    {license: 'The Hippocratic License 3.0',link: 'https://firstdonoharm.dev'},
    {license: 'IBM Public License Version 1.0',link: 'https://opensource.org/licenses/IPL-1.0'},
    {license: 'ISC License (ISC)',link: 'https://opensource.org/licenses/ISC'},
    {license: 'The MIT License',link: 'https://opensource.org/licenses/MIT'},
    {license: 'Mozilla Public License 2.0',link: 'https://opensource.org/licenses/MPL-2.0'},
    {license: 'Attribution License (BY)',link: 'https://opendatacommons.org/licenses/by/'},
    {license: 'Open Database License (ODbL)',link: 'https://opendatacommons.org/licenses/odbl/'},
    {license: 'The Perl License',link: 'https://opensource.org/licenses/Artistic-2.0'},
    {license: 'The Artistic License 2.0',link: 'https://opensource.org/licenses/Artistic-2.0'},
    {license: 'SIL Open Font License 1.1',link: 'https://opensource.org/licenses/OFL-1.1'},
    {license: 'The Unlicense',link: 'http://unlicense.org/'},
    {license: 'WTFPL',link: 'http://www.wtfpl.net/about/'},
    {license: 'The zlib/libpng License',link: 'https://opensource.org/licenses/Zlib'},
  ];
  
  for (const link of licenses){
    if (link.license === license) return link.link
  }

} 
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') return ""
 else {return `## License
  The license for this project is **${license}**<br>
  To learn more about this license, please access ${renderLicenseLink(license)}`
 }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}
  ## Table of Contents
  [Description](#description)<br>
  [Installation](#installation)<br>
  [Usage](#usage)<br>
  [Credits](#credits)<br>
  ${data.license === 'None' ? "" : "[License](#license)<br>"}
  [Contributing](#contributing)<br>
  [Tests](#tests)<br>
  [Questions](#questions)<br>
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.test}
  ## Questions
  Visit my GitHub profile page: https://github.com/${data.username}<br>
  If you have additional questions, please send an email to ${data.email}
`;
}

module.exports = generateMarkdown
