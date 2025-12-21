/**
 * Run Content Verification and Output Results
 * Task: 15.2 Verify content completeness
 */

import { verifyAllContent, formatVerificationResults } from './contentVerification';

// Run verification
const results = verifyAllContent();

// Output formatted results
console.log(formatVerificationResults(results));

// Output detailed JSON for debugging if needed
if (!results.passed || results.summary.totalWarnings > 0) {
  console.log('\n=== DETAILED RESULTS (JSON) ===');
  console.log(JSON.stringify(results, null, 2));
}

// Exit with appropriate code
process.exit(results.passed ? 0 : 1);
