const fs = require('fs');
const path = require('path');

const filePath = process.argv[2];

if (!filePath) {
    console.error('Usage: node analyze-results.js <path-to-json-results>');
    process.exit(1);
}

try {
    const rawData = fs.readFileSync(filePath, 'utf8');
    const results = JSON.parse(rawData);

    // Check for failures
    if (results.run.failures.length > 0) {
        console.error('❌ Performance Test Failures Found:');
        results.run.failures.forEach(failure => {
            console.error(`  - ${failure.error.name}: ${failure.error.message}`);
        });
        process.exit(1);
    }

    // Basic performance checks
    const totalRequests = results.run.timings.completed;
    const totalTime = results.run.timings.responseAverage;

    console.log('✅ Performance Test Analysis:');
    console.log(`  Total Requests: ${totalRequests}`);
    console.log(`  Average Response Time: ${totalTime.toFixed(2)}ms`);

} catch (error) {
    console.error('An error occurred during results analysis:', error);
    process.exit(1);
}
