/**
 * data.js — Test Incident Room v3.1
 * ISO/IEC/IEEE 29119-2 Test Processes Educational Game
 *
 * Each incident:
 *   id     : unique number
 *   sev    : 'critical' | 'high' | 'medium' | 'info'
 *   tag    : CSS class
 *   tl     : severity label
 *   title  : incident title
 *   desc   : short description
 *   actions: 4 options — shuffled at runtime, so correct answer is never always "A"
 *     .l   : option label
 *     .s   : ISO reference
 *     .c   : correct? (boolean)
 *     .p   : points (+/-)
 *     .f   : feedback after selection
 */

const ALL_INCIDENTS = [

  /* ─── 1. LOGIN CRASH ─── */
  {
    id: 1, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Login module crashed in production",
    desc: "80% of users cannot log in. Error log: NullPointerException @ AuthService.java:142",
    actions: [
      { l:'Open an incident record, classify severity, and escalate', s:'29119-2: Incident Management process', c:true,  p:150, f:'Correct! The Incident Management process requires opening a record and determining severity first. Critical = immediate escalation.' },
      { l:'Shut the system down immediately, investigate later',       s:'Zero out availability',               c:false, p:-80, f:'Wrong. A test manager has no authority to shut down production. First: incident record + escalation.' },
      { l:'Tell the dev team verbally and wait',                       s:'Monitor-free wait',                   c:false, p:-40, f:'Insufficient. Verbal communication is not enough — a formal incident record and tracking are required.' },
      { l:'Narrow the test scope and ignore the bug',                  s:'No documentation',                    c:false, p:-100,f:'Critical failure! Ignoring a critical incident violates ISO 29119-2 and puts the project at severe risk.' }
    ]
  },

  /* ─── 2. ENV MISMATCH ─── */
  {
    id: 2, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: 'Test environment mismatches production',
    desc: "Test DB has 10K records; production has 2.3M. Performance test results may be completely misleading.",
    actions: [
      { l:'Rebuild the test environment, align the dataset',             s:'29119-2: Test Environment Management', c:true,  p:120, f:'Correct! Test Environment Management requires consistency with production. Reconfigure and document the results.' },
      { l:'Accept existing test results and continue',                   s:'Ignore the risk',                      c:false, p:-60, f:'Wrong. Decisions based on misleading test data can be catastrophic in production. Results must be declared invalid.' },
      { l:'Update the Test Plan and log the discrepancy as a risk',      s:'Partial fix — documentation only',     c:false, p:40,  f:'Partly right but insufficient. Logging is good, but the real fix is correcting the environment — notes alone are not enough.' },
      { l:'Notify the client and wait for approval',                     s:'Escalation only',                      c:false, p:-20, f:'Internal correction should come first. Client communication follows after the fix.' }
    ]
  },

  /* ─── 3. STALE REPORT ─── */
  {
    id: 3, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: 'Test Progress Report not updated for 3 days',
    desc: 'Project sponsor requested a status update. The test team forgot to fill in the report.',
    actions: [
      { l:'Prepare the report now: metrics, completed tests, open defects', s:'29119-2: Monitor & Control', c:true,  p:100, f:"Correct! The Monitor & Control process mandates regular updates to the Test Progress Report. The sponsor needs accurate, current information." },
      { l:'Say "everything is fine" and write the report later',            s:'Verbal assurance only',      c:false, p:-70, f:"Dangerous! Providing undocumented assurance violates ISO 29119-2 and professional ethics standards." },
      { l:'Assign someone on the team to write the report',                 s:'Delegation',                 c:false, p:30,  f:"Partly acceptable, but the test manager must verify the report's accuracy — delegation alone is not sufficient." },
      { l:'Redesign the report template to be better',                      s:'Process improvement',        c:false, p:-10, f:'Wrong priority. The urgent need right now is to fill in the existing report. Template redesign can wait.' }
    ]
  },

  /* ─── 4. REGRESSION FAILURE ─── */
  {
    id: 4, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "40% of regression suite failing",
    desc: "847 tests that passed yesterday are failing today. Last commit: 'Refactored payment module' — no reviewer.",
    actions: [
      { l:'Analyze failing tests, identify root cause, open a defect', s:'29119-2: Dynamic Test — Test Result Evaluation', c:true,  p:140, f:'Excellent! The Test Result Evaluation phase is exactly this: analyze failures, find the cause, create a defect record, and hand it to the dev team.' },
      { l:'Mark all tests as "known failure" and move on',             s:'Documentation only',                            c:false, p:-90, f:'Wrong! Ignoring regression failures hides a systemic issue. This approach is completely unacceptable.' },
      { l:'Revert the commit and re-run the tests',                    s:'Quick fix',                                     c:false, p:50,  f:"A sensible action, but it's the dev team's call — not the test manager's. Your job: analyze and log the defect." },
      { l:'Write new test cases to expand coverage',                   s:'Test development',                              c:false, p:-30, f:'In an emergency, fix the existing problem first. Coverage expansion is a long-term activity.' }
    ]
  },

  /* ─── 5. EXIT CRITERIA ─── */
  {
    id: 5, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: 'Test exit criteria not yet defined',
    desc: 'The project ends in 2 weeks, but nobody knows under what conditions testing will stop.',
    actions: [
      { l:'Add Test Completion Criteria to the Test Plan: defect density, coverage, risk thresholds', s:'29119-2: Test Planning',        c:true,  p:110, f:"Great! The Test Plan must define exit criteria. Defect density, test coverage, and acceptable risk level are all part of those criteria." },
      { l:"Testing ends when the client says so — written criteria aren't necessary",                  s:'Intuitive decision',            c:false, p:-80, f:"Wrong. ISO 29119-2 explicitly mandates documented completion criteria. Subjective decisions are unacceptable." },
      { l:"Put only 'all test cases green' as the criterion",                                          s:'Simple criterion',              c:false, p:20,  f:'Insufficient. Pass rate alone is not enough — risk level, defect density, and coverage must also be included.' },
      { l:"Apply the general criteria from the Organizational Test Strategy",                          s:'Strategy reference',            c:false, p:60,  f:'Partly correct. The organizational strategy can be referenced, but project-specific customization is mandatory.' }
    ]
  },

  /* ─── 6. RELEASE PRESSURE ─── */
  {
    id: 6, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: 'Pressure to release before testing is complete',
    desc: "The sales team says 'the customer asked' and wants to release tomorrow. Test coverage is still 67%.",
    actions: [
      { l:'Document the risk analysis and escalate the decision to management', s:'29119-2: Test Completion + Monitor & Control', c:true,  p:130, f:"Correct! A test manager can't block the release, but documenting and reporting the risk to senior management is mandatory — both as a standard requirement and an ethical obligation." },
      { l:"Do what the sales team wants — approve the release",                 s:'Yield to pressure',                          c:false, p:-100,f:"Critical error! A test manager cannot approve a release while hiding incomplete test results. This violates ISO 29119-2 and professional ethics." },
      { l:'Stop testing and fully block the release',                           s:'Hard block',                                 c:false, p:-20, f:"A test manager has no authority to unilaterally block a release. The right path: document the risk and escalate." },
      { l:'Accelerate the remaining 33% of testing — work overnight',           s:'Process acceleration',                       c:false, p:40,  f:'Reasonable but insufficient without a risk document. Accelerate AND formally report the current coverage in writing.' }
    ]
  },

  /* ─── 7. DATA LEAK ─── */
  {
    id: 7, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Test data leaked into production",
    desc: "An automation script connected to the wrong environment and modified the live database.",
    actions: [
      { l:'Document the event, coordinate with DBA, create an incident report', s:'29119-2: Incident Management + Test Environment', c:true,  p:160, f:'Correct! A data leak is a critical incident — it must be documented immediately and coordinated with all relevant parties.' },
      { l:"Silently roll it back, tell nobody",                                  s:'Conceal it',                                     c:false, p:-150,f:'Completely unacceptable. This is both an ethical violation and a standard requirement — it must be reported.' },
      { l:'Blame the automation team',                                           s:'Blame the person',                               c:false, p:-40, f:'Blame does not fix the process. The priority is managing the incident.' },
      { l:"Immediately isolate the test environment from production",            s:'Isolation',                                      c:false, p:60,  f:'A good step, but not sufficient alone — formal documentation is also required.' }
    ]
  },

  /* ─── 8. STALE TEST PLAN ─── */
  {
    id: 8, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Test Plan not updated in 4 months",
    desc: 'Project scope has changed significantly, but the Test Plan remains as originally written.',
    actions: [
      { l:"Update the Test Plan: revised scope, risks, and schedule", s:'29119-2: Test Planning — Keep Plan Current', c:true,  p:120, f:"Correct! The Test Plan is a living document — it must be updated whenever scope changes." },
      { l:'The old plan is still valid — leave the document as is',   s:'Status quo',                                c:false, p:-70, f:'Wrong. Tests run against an outdated plan measure the wrong targets.' },
      { l:'Write a brand new Test Plan from scratch',                 s:'Rewrite from scratch',                      c:false, p:30,  f:'Writing from scratch takes too long. The existing plan should be updated.' },
      { l:'Send an email announcing the scope changes',               s:'Informal communication',                    c:false, p:-20, f:'An email is not a formal document. The plan document itself must be updated.' }
    ]
  },

  /* ─── 9. POOR DEFECT REPORTS ─── */
  {
    id: 9, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Defect reports are too vague — devs can't understand them",
    desc: "Bug tickets contain descriptions like 'it doesn't work.'",
    actions: [
      { l:'Define an incident reporting standard: steps, expected, actual, environment', s:'29119-2: Incident Report format', c:true,  p:100, f:"Correct! ISO 29119-2 requires incident reports to include reproduction steps, expected/actual results, and environment details." },
      { l:'Train the developers; fix all the tickets yourself',                           s:'Do it all yourself',             c:false, p:20,  f:'Partly right but not scalable. Define a standard and have the team apply it.' },
      { l:'Switch ticket systems — the problem is in the tool',                           s:'Blame the tool',                 c:false, p:-30, f:'The problem is in the process, not the tool. A new tool will not fix it.' },
      { l:"Understanding the reports is the developers' problem",                         s:'Deny responsibility',            c:false, p:-60, f:'Wrong. The test team is responsible for producing clear, actionable reports.' }
    ]
  },

  /* ─── 10. NO PERF TEST ─── */
  {
    id: 10, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: 'Performance testing never performed',
    desc: 'Release in 3 days. The system has never been tested under 1,000 concurrent users.',
    actions: [
      { l:'Document the risk, plan a rapid performance test, escalate to management', s:'29119-2: Test Planning + Risk Management', c:true,  p:130, f:'Correct! First document the risk, then plan what can realistically be done within the time constraint.' },
      { l:'User volume will probably be low — skip performance testing',               s:'Ignore the risk',                         c:false, p:-90, f:'Wrong. Accepting risk based on assumption is unacceptable without documentation.' },
      { l:'Postpone the release by 2 weeks',                                           s:'Delay release',                           c:false, p:-10, f:'You cannot make that decision unilaterally. Present the case to management first.' },
      { l:"Run only a smoke test and call it 'passed'",                                s:'Inadequate testing',                      c:false, p:-50, f:'A smoke test does not measure performance. This is misleading.' }
    ]
  },

  /* ─── 11. CI/CD DOWN ─── */
  {
    id: 11, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: 'Test automation infrastructure is down',
    desc: 'The CI/CD pipeline has been broken for 6 hours. Manual test capacity is insufficient.',
    actions: [
      { l:'Open an incident, coordinate with DevOps, increase manual test capacity', s:'29119-2: Test Infrastructure Management', c:true,  p:110, f:'Correct! The Test Infrastructure Management process covers managing infrastructure failures.' },
      { l:'Release without automation',                                               s:'Skip testing',                           c:false, p:-80, f:'Wrong. Without automation, coverage cannot be guaranteed.' },
      { l:'Run all test cases manually',                                              s:'Manual fallback',                        c:false, p:40,  f:'Partly right, but a capacity analysis must be done and the risk must be documented.' },
      { l:'Cancel the release entirely',                                              s:'Full cancellation',                      c:false, p:-20, f:'First assess capacity, then decide.' }
    ]
  },

  /* ─── 12. SECURITY BUG ON RELEASE DAY ─── */
  {
    id: 12, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: 'Security vulnerability found — on release day',
    desc: 'Penetration testing identified an SQL injection flaw. CVSS score: 9.1 (Critical)',
    actions: [
      { l:'Open a high-severity incident, escalate to security team + management, block release', s:'29119-2: Incident Management — Critical Security', c:true,  p:170, f:'Excellent! A CVSS 9.1 vulnerability cannot be released under any circumstances. Escalation is mandatory.' },
      { l:"Keep the vulnerability secret, patch after release",                                   s:'Conceal and release',                             c:false, p:-200,f:'This is both an ethical and legal violation. It completely contravenes ISO 29119-2 and security standards.' },
      { l:'Just add it to the penetration test report',                                           s:'Log only',                                        c:false, p:-60, f:'Logging is good but insufficient without escalation.' },
      { l:"Ask the developer for a 'quick' fix",                                                  s:'Rush fix',                                        c:false, p:30,  f:'A fix is needed, but formal escalation and a release block must come first.' }
    ]
  }

];