const fs = require('fs');
const path = require('path');

const reportsPath = process.argv[2];

if (!reportsPath) {
    console.error('Usage: node generate-summary.js <path-to-reports-directory>');
    process.exit(1);
}

function processResults(dirPath) {
    const results = {
        functional: { total: 0, passed: 0, failed: 0 },
        performance: { total: 0, passed: 0, failed: 0 },
        reports: []
    };

    if (!fs.existsSync(dirPath)) {
        console.log(`Reports directory not found: ${dirPath}`);
        return results;
    }

    const reportFiles = fs.readdirSync(dirPath);

    reportFiles.forEach(subDir => {
        const fullSubDirPath = path.join(dirPath, subDir);
        if (fs.statSync(fullSubDirPath).isDirectory()) {
            const files = fs.readdirSync(fullSubDirPath);

            files.forEach(file => {
                if (file.endsWith('.json')) {
                    const filePath = path.join(fullSubDirPath, file);
                    const rawData = fs.readFileSync(filePath, 'utf8');
                    const runResults = JSON.parse(rawData);

                    const testType = file.includes('functional') ? 'functional' : 'performance';
                    const passed = runResults.run.stats.tests.total - runResults.run.stats.tests.failed;
                    const failed = runResults.run.stats.tests.failed;

                    results[testType].total += runResults.run.stats.tests.total;
                    results[testType].passed += passed;
                    results[testType].failed += failed;

                } else if (file.endsWith('.html')) {
                    results.reports.push(path.join(fullSubDirPath, file));
                }
            });
        }
    });

    return results;
}

const reportData = processResults(reportsPath);

let summary = '# API Test Summary\n\n';

// Functional Tests Summary
summary += '## 🧪 Functional Tests\n';
if (reportData.functional.total > 0) {
    const status = reportData.functional.failed === 0 ? '✅ All tests passed' : '❌ Tests failed';
    summary += `- **Status:** ${status}\n`;
    summary += `- **Passed:** ${reportData.functional.passed}\n`;
    summary += `- **Failed:** ${reportData.functional.failed}\n`;
    summary += `- **Total:** ${reportData.functional.total}\n`;
} else {
    summary += 'No functional tests were executed.\n';
}

summary += '\n';

// Performance Tests Summary
summary += '## 🚀 Performance Tests\n';
if (reportData.performance.total > 0) {
    const status = reportData.performance.failed === 0 ? '✅ All tests passed' : '❌ Tests failed';
    summary += `- **Status:** ${status}\n`;
    summary += `- **Passed:** ${reportData.performance.passed}\n`;
    summary += `- **Failed:** ${reportData.performance.failed}\n`;
    summary += `- **Total:** ${reportData.performance.total}\n`;
} else {
    summary += 'No performance tests were executed.\n';
}

summary += '\n';

// Links to Detailed Reports
if (reportData.reports.length > 0) {
    summary += '## 📊 Detailed Reports\n';
    summary += 'Links to detailed HTML reports:\n';
    reportData.reports.forEach(reportPath => {
        const reportName = path.basename(reportPath, path.extname(reportPath));
        summary += `- [${reportName}](${reportPath})\n`;
    });
}

console.log(summary);
