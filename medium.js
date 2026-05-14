const MEDIUM_INCIDENTS = [
  {
    id: 201, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Missing Test Plan",
    desc: "The project has already started testing, but no approved Test Plan exists.",
    actions: [
      { l: 'Continue testing and write the plan later', s: 'Planning skipped', c: false, p: -70, f: 'Wrong. Testing without an agreed plan creates uncontrolled scope and reporting risk.' },
      { l: 'Create, agree, and communicate the Test Plan before continuing', s: '29119-2: Test Strategy and Planning', c: true, p: 130, f: 'Correct! The Test Plan should define scope, approach, resources, schedule, and responsibilities.' },
      { l: 'Ask developers to decide the testing approach', s: 'Wrong ownership', c: false, p: -50, f: 'Wrong. Developers may contribute, but test planning must be managed as a testing activity.' },
      { l: 'Only announce the plan verbally', s: 'Informal planning', c: false, p: -60, f: 'Wrong. A verbal plan is not enough for control and stakeholder agreement.' }
    ]
  },

  {
    id: 202, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Unclear Requirements",
    desc: "Requirements are ambiguous, and testers are unsure what behavior should be validated.",
    actions: [
      { l: 'Assume expected behavior and test anyway', s: 'Assumption-based testing', c: false, p: -80, f: 'Wrong. Assumptions can lead to invalid test cases and misleading results.' },
      { l: 'Clarify the test basis with stakeholders before designing tests', s: '29119-2: Test Basis / Test Design', c: true, p: 130, f: 'Correct! The test basis must be understood before reliable test cases can be designed.' },
      { l: 'Skip unclear requirements silently', s: 'Hidden coverage gap', c: false, p: -90, f: 'Wrong. Skipped scope must be documented and communicated.' },
      { l: 'Create random test cases to save time', s: 'Uncontrolled design', c: false, p: -70, f: 'Wrong. Test cases should be derived from the test basis and objectives.' }
    ]
  },

  {
    id: 203, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Critical Defect Before Release",
    desc: "A severe defect is discovered one day before release and affects user login.",
    actions: [
      { l: 'Fix it silently without recording anything', s: 'No incident record', c: false, p: -100, f: 'Wrong. A critical defect must be formally recorded and tracked.' },
      { l: 'Document the incident, classify severity, and escalate immediately', s: '29119-2: Test Incident Reporting', c: true, p: 150, f: 'Correct! Critical incidents require timely reporting, classification, and communication to stakeholders.' },
      { l: 'Ignore it because release is tomorrow', s: 'Risk ignored', c: false, p: -150, f: 'Wrong. Ignoring a critical defect creates severe release risk.' },
      { l: 'Mention it casually after the release', s: 'Delayed reporting', c: false, p: -120, f: 'Wrong. Incident reporting must happen while action is still possible.' }
    ]
  },

  {
    id: 204, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Environment Mismatch",
    desc: "The test environment has much less data than production, so performance results may be misleading.",
    actions: [
      { l: 'Use the results because tests completed successfully', s: 'Invalid evidence', c: false, p: -90, f: 'Wrong. Results from an unsuitable environment may not support release decisions.' },
      { l: 'Align the environment or document limitations and risk', s: '29119-2: Test Environment and Data Management', c: true, p: 140, f: 'Correct! The environment must support valid testing, and limitations must be visible.' },
      { l: 'Delete the performance results', s: 'Evidence removal', c: false, p: -100, f: 'Wrong. Invalid or limited evidence should be documented, not hidden.' },
      { l: 'Blame the infrastructure team only', s: 'Blame response', c: false, p: -50, f: 'Wrong. The priority is controlling the environment issue and reporting impact.' }
    ]
  },

  {
    id: 205, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Incomplete Test Coverage",
    desc: "Only 60% of planned test cases were executed before the deadline.",
    actions: [
      { l: 'Mark testing complete to meet the deadline', s: 'False completion', c: false, p: -120, f: 'Wrong. Completion must be based on evidence and criteria, not pressure.' },
      { l: 'Report coverage, remaining tests, and release risk', s: '29119-2: Test Monitoring and Control', c: true, p: 140, f: 'Correct! Progress, gaps, and risks must be communicated for informed decisions.' },
      { l: 'Delete remaining tests from the plan', s: 'Scope manipulation', c: false, p: -130, f: 'Wrong. Removing tests to look complete misleads stakeholders.' },
      { l: 'Hide missing tests from the report', s: 'Misleading reporting', c: false, p: -140, f: 'Wrong. Test reporting must include limitations and risks.' }
    ]
  },

  {
    id: 206, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Bug Report Without Steps",
    desc: "Developers cannot reproduce reported defects because tickets lack steps, expected results, and environment details.",
    actions: [
      { l: 'Change the ticket tool immediately', s: 'Tool blame', c: false, p: -40, f: 'Wrong. The problem is report quality, not necessarily the tool.' },
      { l: 'Define incident reporting rules and update weak reports', s: '29119-2: Incident Report Quality', c: true, p: 120, f: 'Correct! Incident reports should include enough information for analysis and reproduction.' },
      { l: 'Tell developers to figure it out', s: 'Poor collaboration', c: false, p: -70, f: 'Wrong. Testers are responsible for clear and actionable incident reports.' },
      { l: 'Close vague reports without review', s: 'False closure', c: false, p: -90, f: 'Wrong. Reports should be improved, not discarded.' }
    ]
  },

  {
    id: 207, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Unexpected Behavior Without Requirement",
    desc: "The system behaves strangely, but there is no clear requirement explaining expected behavior.",
    actions: [
      { l: 'Log a critical defect immediately without checking', s: 'Premature classification', c: false, p: -50, f: 'Not enough. The expected behavior must first be clarified.' },
      { l: 'Clarify expected behavior and update the test basis if needed', s: '29119-2: Test Basis / Test Design', c: true, p: 120, f: 'Correct! Testing requires a clear expected result based on a valid test basis.' },
      { l: 'Ignore the behavior completely', s: 'Risk ignored', c: false, p: -80, f: 'Wrong. Unexpected behavior should be investigated.' },
      { l: 'Fix the code yourself', s: 'Wrong role', c: false, p: -70, f: 'Wrong. The tester should report evidence, not directly modify product code.' }
    ]
  },

  {
    id: 208, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Management Pressure",
    desc: "Management asks the team to release even though several planned tests are not executed.",
    actions: [
      { l: 'Agree to release without reporting gaps', s: 'Hidden risk', c: false, p: -130, f: 'Wrong. Release pressure does not remove the need for transparent test reporting.' },
      { l: 'Document test status, risks, and escalate the decision', s: '29119-2: Test Completion / Monitoring', c: true, p: 150, f: 'Correct! The test manager reports evidence and risk; release authority decides.' },
      { l: 'Block release alone without communication', s: 'Authority issue', c: false, p: -50, f: 'Wrong. The correct action is evidence-based escalation.' },
      { l: 'Ignore management request', s: 'Poor communication', c: false, p: -60, f: 'Wrong. Stakeholders must receive clear testing status.' }
    ]
  },

  {
    id: 209, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Automation Pipeline Failure",
    desc: "The CI/CD test automation pipeline has been down for six hours before release testing.",
    actions: [
      { l: 'Skip automated tests and approve release', s: 'Missing evidence', c: false, p: -110, f: 'Wrong. Missing automation evidence creates coverage risk.' },
      { l: 'Open an infrastructure incident and assess manual fallback', s: '29119-2: Test Environment / Infrastructure', c: true, p: 130, f: 'Correct! Infrastructure problems should be recorded, coordinated, and assessed for impact.' },
      { l: 'Pretend automation passed', s: 'False reporting', c: false, p: -150, f: 'Wrong. False reporting destroys test integrity.' },
      { l: 'Blame the DevOps team and stop communication', s: 'Blame response', c: false, p: -50, f: 'Wrong. Coordination and risk control are needed.' }
    ]
  },

  {
    id: 210, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Outdated Test Plan",
    desc: "Project scope changed significantly, but the Test Plan still reflects the old scope.",
    actions: [
      { l: 'Keep using the old plan because it was approved', s: 'Outdated planning', c: false, p: -90, f: 'Wrong. A plan must remain aligned with the current project scope.' },
      { l: 'Update the Test Plan with changed scope, risks, and schedule', s: '29119-2: Test Strategy and Planning', c: true, p: 130, f: 'Correct! The Test Plan should be maintained when scope or risk changes.' },
      { l: 'Only send a short email and continue', s: 'Informal update', c: false, p: -50, f: 'Wrong. Communication helps, but the formal plan should be updated.' },
      { l: 'Delete old plan and test randomly', s: 'Uncontrolled testing', c: false, p: -100, f: 'Wrong. Testing still needs a controlled plan.' }
    ]
  },

  {
    id: 211, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Duplicate Defect Reports",
    desc: "The same defect has been reported by three testers with slightly different descriptions.",
    actions: [
      { l: 'Delete all reports immediately', s: 'Evidence loss', c: false, p: -90, f: 'Wrong. At least one valid traceable record must remain.' },
      { l: 'Merge duplicates and keep one traceable main record', s: '29119-2: Incident Management', c: true, p: 120, f: 'Correct! Duplicates should be consolidated without losing useful information.' },
      { l: 'Ignore duplicates because they are harmless', s: 'Poor control', c: false, p: -60, f: 'Wrong. Duplicates distort metrics and tracking.' },
      { l: 'Close the oldest report without review', s: 'Uncontrolled closure', c: false, p: -70, f: 'Wrong. Closure should be reviewed and justified.' }
    ]
  },

  {
    id: 212, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "High-Risk Feature Tested Last",
    desc: "Low-risk UI tests are complete, but payment and authentication tests remain unexecuted.",
    actions: [
      { l: 'Continue with the original order no matter what', s: 'Rigid execution', c: false, p: -70, f: 'Wrong. Monitoring may require priority changes.' },
      { l: 'Reprioritize remaining testing based on product risk', s: '29119-2: Risk-based Testing', c: true, p: 140, f: 'Correct! High-risk areas should receive priority.' },
      { l: 'Skip payment tests to save time', s: 'Coverage gap', c: false, p: -120, f: 'Wrong. High-risk areas cannot be skipped silently.' },
      { l: 'Report only completed UI tests', s: 'Selective reporting', c: false, p: -90, f: 'Wrong. Reporting must include remaining risks.' }
    ]
  },

  {
    id: 213, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Missing Execution Evidence",
    desc: "Several test cases are marked as passed, but there are no logs, screenshots, or execution notes.",
    actions: [
      { l: 'Trust the tester’s memory', s: 'No evidence', c: false, p: -70, f: 'Wrong. Test execution should be auditable.' },
      { l: 'Collect evidence or re-execute affected tests', s: '29119-2: Test Execution', c: true, p: 120, f: 'Correct! Passed results should be supported by execution evidence.' },
      { l: 'Remove those tests from scope', s: 'Scope manipulation', c: false, p: -90, f: 'Wrong. Missing evidence must be corrected, not hidden.' },
      { l: 'Mark them failed automatically without checking', s: 'Incorrect conclusion', c: false, p: -30, f: 'Not necessarily. First obtain evidence or re-execute.' }
    ]
  },

  {
    id: 214, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Requirement Changed After Test Design",
    desc: "A checkout requirement changed after the test cases were already designed.",
    actions: [
      { l: 'Run the old test cases unchanged', s: 'Outdated test basis', c: false, p: -80, f: 'Wrong. Old tests may validate obsolete behavior.' },
      { l: 'Assess impact and update affected test cases', s: '29119-2: Test Design and Implementation', c: true, p: 130, f: 'Correct! Test cases must stay aligned with the current test basis.' },
      { l: 'Ignore the new requirement', s: 'Scope miss', c: false, p: -100, f: 'Wrong. Requirement changes affect test scope.' },
      { l: 'Cancel all checkout testing', s: 'Overreaction', c: false, p: -60, f: 'Wrong. Update affected tests instead.' }
    ]
  },

  {
    id: 215, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Flaky Test Blocks Confidence",
    desc: "A test sometimes passes and sometimes fails without any code changes.",
    actions: [
      { l: 'Count it as passed if it passed once', s: 'False confidence', c: false, p: -90, f: 'Wrong. One passing run does not prove reliability.' },
      { l: 'Investigate instability and mark the test as unreliable until fixed', s: '29119-2: Test Maintenance', c: true, p: 120, f: 'Correct! Flaky tests reduce trust in results and must be investigated.' },
      { l: 'Always ignore flaky failures', s: 'Risk hidden', c: false, p: -80, f: 'Wrong. Flakiness can hide real defects.' },
      { l: 'Delete the test immediately', s: 'Coverage loss', c: false, p: -70, f: 'Wrong. Investigate before removing coverage.' }
    ]
  },

  {
    id: 216, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Completion Report Hides Limitations",
    desc: "The completion report shows pass rate but does not mention untested critical scenarios.",
    actions: [
      { l: 'Keep the report positive for stakeholders', s: 'Misleading report', c: false, p: -110, f: 'Wrong. Reports must be accurate, not only positive.' },
      { l: 'Add untested scope, limitations, and residual risks', s: '29119-2: Test Completion', c: true, p: 140, f: 'Correct! Test completion reporting must communicate remaining risk.' },
      { l: 'Delete untested scenarios from the plan', s: 'Scope manipulation', c: false, p: -130, f: 'Wrong. Do not alter scope to hide gaps.' },
      { l: 'Report only number of passed tests', s: 'Incomplete reporting', c: false, p: -70, f: 'Wrong. Pass rate alone is not enough.' }
    ]
  },

  {
    id: 217, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident Severity Disagreement",
    desc: "Developers classify a defect as minor, but testers believe it has high user impact.",
    actions: [
      { l: 'Let developers decide alone', s: 'One-sided decision', c: false, p: -60, f: 'Wrong. Classification should follow agreed criteria.' },
      { l: 'Use agreed severity criteria and document rationale', s: '29119-2: Incident Reporting', c: true, p: 120, f: 'Correct! Severity should be based on defined criteria and evidence.' },
      { l: 'Let testers decide alone', s: 'One-sided decision', c: false, p: -50, f: 'Wrong. Shared severity rules should be used.' },
      { l: 'Ignore severity and continue', s: 'No prioritization', c: false, p: -70, f: 'Wrong. Severity affects prioritization and risk.' }
    ]
  },

  {
    id: 218, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Production-Like Browser Not Tested",
    desc: "Most users use Safari, but all acceptance tests were executed only on Chrome.",
    actions: [
      { l: 'Assume Chrome results are enough', s: 'Unsupported assumption', c: false, p: -80, f: 'Wrong. Browser differences can create real failures.' },
      { l: 'Document the coverage gap and execute priority Safari tests', s: '29119-2: Test Planning and Execution', c: true, p: 130, f: 'Correct! Test coverage should reflect realistic user environments.' },
      { l: 'Remove Safari from scope silently', s: 'Hidden scope reduction', c: false, p: -100, f: 'Wrong. Scope changes must be documented and approved.' },
      { l: 'Tell users to avoid Safari', s: 'Avoidance', c: false, p: -60, f: 'Wrong. Testing should match expected usage.' }
    ]
  },

  {
    id: 219, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test Data Privacy Concern",
    desc: "A tester copied real customer data into a shared test environment.",
    actions: [
      { l: 'Continue because real data is more realistic', s: 'Privacy risk ignored', c: false, p: -120, f: 'Wrong. Realism does not justify unsafe data handling.' },
      { l: 'Stop unsafe use, document issue, and replace with controlled test data', s: '29119-2: Test Environment and Data Management', c: true, p: 130, f: 'Correct! Test data must be controlled, especially when privacy risks exist.' },
      { l: 'Delete evidence and move on', s: 'Concealment', c: false, p: -130, f: 'Wrong. The issue must be documented and corrected.' },
      { l: 'Only warn the tester privately', s: 'Insufficient response', c: false, p: -50, f: 'Wrong. The data management process must be corrected.' }
    ]
  },

  {
    id: 220, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Misleading Pass Rate",
    desc: "The test report shows 95% pass rate, but high-risk scenarios were not executed.",
    actions: [
      { l: 'Use pass rate alone to approve release', s: 'Misleading metric', c: false, p: -130, f: 'Wrong. A high pass rate can hide untested critical areas.' },
      { l: 'Report pass rate together with coverage gaps and risk', s: '29119-2: Test Monitoring and Control', c: true, p: 140, f: 'Correct! Metrics must be interpreted with coverage and risk context.' },
      { l: 'Hide unexecuted scenarios', s: 'Concealment', c: false, p: -150, f: 'Wrong. Gaps must be transparent.' },
      { l: 'Delete critical scenarios from scope', s: 'Scope manipulation', c: false, p: -140, f: 'Wrong. Scope changes must be approved.' }
    ]
  },

  {
    id: 221, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Defect Lifecycle Unclear",
    desc: "Some defects move from Open to Closed without retesting or verification.",
    actions: [
      { l: 'Trust closure without verification', s: 'Weak control', c: false, p: -80, f: 'Wrong. Closure should be supported by evidence.' },
      { l: 'Define and enforce workflow with verification before closure', s: '29119-2: Incident Management', c: true, p: 120, f: 'Correct! Defect closure should be controlled and verified.' },
      { l: 'Keep every defect open forever', s: 'No lifecycle control', c: false, p: -50, f: 'Wrong. Defects need controlled closure.' },
      { l: 'Let anyone close defects anytime', s: 'Uncontrolled workflow', c: false, p: -100, f: 'Wrong. Roles and workflow should be clear.' }
    ]
  },

  {
    id: 222, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Late Requirement Change Affects Evidence",
    desc: "A tax calculation rule changed after related tests had already passed.",
    actions: [
      { l: 'Keep old results because they passed', s: 'Outdated evidence', c: false, p: -120, f: 'Wrong. Results may no longer apply.' },
      { l: 'Assess impact, update tests, and identify invalidated evidence', s: '29119-2: Test Planning and Design', c: true, p: 150, f: 'Correct! A changed test basis can invalidate previous test evidence.' },
      { l: 'Ignore the rule because it changed late', s: 'Scope miss', c: false, p: -130, f: 'Wrong. Late changes still require impact assessment.' },
      { l: 'Approve release if old tests passed', s: 'Invalid decision', c: false, p: -140, f: 'Wrong. The evidence may be invalid.' }
    ]
  },

  {
    id: 223, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Exploratory Testing Finds Issue",
    desc: "A tester finds a defect outside the scripted test cases.",
    actions: [
      { l: 'Ignore it because it was not scripted', s: 'Coverage blindness', c: false, p: -80, f: 'Wrong. Real defects matter even outside scripted tests.' },
      { l: 'Log the incident and consider adding coverage for that scenario', s: '29119-2: Incident Reporting + Test Design', c: true, p: 110, f: 'Correct! Unexpected findings should be recorded and can improve future coverage.' },
      { l: 'Tell testers not to explore', s: 'Poor testing practice', c: false, p: -60, f: 'Wrong. Exploratory findings can be valuable.' },
      { l: 'Fail the entire test suite', s: 'Overreaction', c: false, p: -40, f: 'Wrong. Log the specific incident.' }
    ]
  },

  {
    id: 224, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Release Readiness Lacks Evidence",
    desc: "Management asks whether release is ready, but test evidence is fragmented across tools.",
    actions: [
      { l: 'Give only verbal opinion', s: 'Unsupported opinion', c: false, p: -100, f: 'Wrong. Release decisions need evidence.' },
      { l: 'Prepare consolidated evidence: coverage, defects, risks, limitations', s: '29119-2: Test Completion', c: true, p: 150, f: 'Correct! Release readiness requires consolidated and understandable test evidence.' },
      { l: 'Show only successful tests', s: 'Selective evidence', c: false, p: -120, f: 'Wrong. Risks and limitations must be included.' },
      { l: 'Avoid the meeting', s: 'Poor communication', c: false, p: -80, f: 'Wrong. Test management must communicate status.' }
    ]
  },

  {
    id: 225, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident Report Missing Environment",
    desc: "A mobile defect appears only on Safari, but the incident report does not mention browser or device.",
    actions: [
      { l: 'Ask developers to guess the environment', s: 'Poor reporting', c: false, p: -80, f: 'Wrong. Reports should be actionable.' },
      { l: 'Update report with device, browser, environment, and reproduction details', s: '29119-2: Incident Report Quality', c: true, p: 120, f: 'Correct! Environment details are essential for reproduction and analysis.' },
      { l: 'Close it as not reproducible immediately', s: 'Premature closure', c: false, p: -90, f: 'Wrong. Improve the report before closure.' },
      { l: 'Lower severity because details are missing', s: 'Wrong triage', c: false, p: -60, f: 'Wrong. Missing details should be corrected, not used to reduce severity.' }
    ]
  }
  ,
  {
    id: 226, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Missing risk register",
    desc: "The test plan exists, but it does not include a risk register or any risk-based priorities.",
    actions: [
      { l: 'Add a risk register and use it to prioritize testing', s: '29119-3: Test plan risk register', c: true, p: 140, f: 'Correct! A risk register helps connect testing priorities to product and project risks.' },
      { l: 'Continue testing without risk information', s: 'Uncontrolled priority', c: false, p: -80, f: 'Wrong. Without risk information, high-impact areas may be tested too late or missed.' },
      { l: 'Test only the easiest features first', s: 'Poor prioritization', c: false, p: -70, f: 'Wrong. Ease of testing should not override risk.' },
      { l: 'Remove risky features from the report', s: 'Concealment', c: false, p: -120, f: 'Wrong. Risks must remain visible to stakeholders.' }
    ]
  },

  {
    id: 227, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Status report lacks blockers",
    desc: "The weekly test status report lists executed tests but does not mention blocked tests or environment problems.",
    actions: [
      { l: 'Add blockers, progress against plan, and changed risks', s: '29119-3: Test status report', c: true, p: 120, f: 'Correct! A useful status report includes progress, blockers, measures, planned testing, and risk changes.' },
      { l: 'Keep the report positive only', s: 'Misleading reporting', c: false, p: -90, f: 'Wrong. Status reports should support decisions, not hide problems.' },
      { l: 'Delete blocked tests from the plan', s: 'Scope manipulation', c: false, p: -110, f: 'Wrong. Blocked work should be reported, not removed.' },
      { l: 'Wait until the end of the project to report blockers', s: 'Late reporting', c: false, p: -80, f: 'Wrong. Blockers should be communicated while action is still possible.' }
    ]
  },

  {
    id: 228, category: 'environment', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Environment readiness missing",
    desc: "Execution starts before the team confirms database version, browser versions, and test data reset procedures.",
    actions: [
      { l: 'Confirm environment and data readiness before trusting results', s: '29119-3: Test environment readiness report', c: true, p: 140, f: 'Correct! Environment readiness evidence helps ensure that test results are valid and repeatable.' },
      { l: 'Execute anyway and hope the setup is correct', s: 'Unsupported assumption', c: false, p: -90, f: 'Wrong. An unconfirmed environment can invalidate test evidence.' },
      { l: 'Delete setup logs after failures', s: 'Evidence loss', c: false, p: -100, f: 'Wrong. Setup logs help diagnose readiness issues.' },
      { l: 'Classify all setup failures as product defects', s: 'Misclassification', c: false, p: -70, f: 'Wrong. Environment failures should be distinguished from product defects.' }
    ]
  },

  {
    id: 229, category: 'incident', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident report missing priority",
    desc: "A defect report includes severity but does not define priority.",
    actions: [
      { l: 'Add priority information to support planning and resolution order', s: '29119-3: Test incident report', c: true, p: 120, f: 'Correct! Severity describes impact; priority supports planning and scheduling.' },
      { l: 'Ignore priority because severity is enough', s: 'Incomplete incident report', c: false, p: -70, f: 'Wrong. Severity and priority answer different questions.' },
      { l: 'Close the incident immediately', s: 'Premature closure', c: false, p: -80, f: 'Wrong. Missing priority should be corrected, not used to close the issue.' },
      { l: 'Lower severity instead of adding priority', s: 'Wrong classification', c: false, p: -70, f: 'Wrong. Severity should not be changed to compensate for missing priority.' }
    ]
  },

  {
    id: 230, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Reusable test assets ignored",
    desc: "The team recreates the same regression test cases manually for every release.",
    actions: [
      { l: 'Archive and reuse stable test assets where appropriate', s: '29119-3: Reusable test assets', c: true, p: 120, f: 'Correct! Reusable test assets improve consistency, efficiency, and maintainability.' },
      { l: 'Delete old test cases after every release', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Useful test assets should be preserved when they remain valid.' },
      { l: 'Rewrite everything manually forever', s: 'Inefficient practice', c: false, p: -50, f: 'Wrong. Reuse can reduce repeated effort.' },
      { l: 'Avoid documentation to move faster', s: 'No traceability', c: false, p: -80, f: 'Wrong. Documentation supports reuse and traceability.' }
    ]
  },

  {
    id: 231, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Assumptions not documented",
    desc: "The test team assumes the staging environment will be available every night, but this assumption is not written anywhere.",
    actions: [
      { l: 'Document assumptions and constraints in the test plan', s: '29119-3: Test plan assumptions and constraints', c: true, p: 140, f: 'Correct! Assumptions and constraints help stakeholders understand dependencies and planning risk.' },
      { l: 'Leave assumptions informal', s: 'Hidden planning risk', c: false, p: -70, f: 'Wrong. Hidden assumptions can cause schedule and execution problems.' },
      { l: 'Blame testers if the environment is unavailable', s: 'Poor management', c: false, p: -60, f: 'Wrong. Planning dependencies should be visible and managed.' },
      { l: 'Start execution without checking availability', s: 'Execution risk', c: false, p: -80, f: 'Wrong. Environment availability affects test execution.' }
    ]
  },

  {
    id: 232, category: 'communication', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Stakeholders unclear",
    desc: "The test plan does not identify who should receive test progress, risk, and completion information.",
    actions: [
      { l: 'Identify stakeholders and communication needs in the test plan', s: '29119-3: Test plan stakeholders and communication', c: true, p: 120, f: 'Correct! Stakeholder identification supports clear reporting and decision-making.' },
      { l: 'Report only to the test team', s: 'Incomplete communication', c: false, p: -60, f: 'Wrong. Product owners, managers, developers, and clients may need testing information.' },
      { l: 'Send every report to random recipients', s: 'Poor communication', c: false, p: -60, f: 'Wrong. Communication should be planned and relevant.' },
      { l: 'Avoid naming stakeholders', s: 'Weak planning', c: false, p: -50, f: 'Wrong. Unclear stakeholders create reporting confusion.' }
    ]
  },

  {
    id: 233, category: 'execution', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Actual result not recorded",
    desc: "A tester marks a test as passed but leaves the actual result and evidence fields empty.",
    actions: [
      { l: 'Record actual result and supporting evidence', s: '29119-3: Actual results and test result', c: true, p: 120, f: 'Correct! Actual results make test execution auditable and support the test result.' },
      { l: 'Trust the tester’s memory', s: 'No evidence', c: false, p: -70, f: 'Wrong. Test results should be supported by recorded evidence.' },
      { l: 'Delete the test case', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Fix the evidence gap instead of deleting coverage.' },
      { l: 'Mark it failed automatically', s: 'Unsupported conclusion', c: false, p: -40, f: 'Wrong. Missing evidence should lead to correction or re-execution, not guessing.' }
    ]
  },

  {
    id: 234, category: 'traceability', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Requirement cannot be traced",
    desc: "A critical requirement has no linked test case and no linked execution result.",
    actions: [
      { l: 'Restore traceability from requirement to test case and result', s: '29119-3: Traceability', c: true, p: 140, f: 'Correct! Traceability shows whether requirements are covered and supported by evidence.' },
      { l: 'Assume it was tested', s: 'Unsupported coverage', c: false, p: -90, f: 'Wrong. Coverage claims need traceable evidence.' },
      { l: 'Remove the requirement silently', s: 'Scope manipulation', c: false, p: -120, f: 'Wrong. Scope changes require agreement and documentation.' },
      { l: 'Create fake trace links quickly', s: 'False traceability', c: false, p: -150, f: 'Wrong. Fabricating traceability is unacceptable.' }
    ]
  },

  {
    id: 235, category: 'completion', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Completion report incomplete",
    desc: "The completion report includes pass rate but omits deviations from planned testing and residual risks.",
    actions: [
      { l: 'Add deviations, residual risks, measures, and completion evaluation', s: '29119-3: Test completion report', c: true, p: 140, f: 'Correct! Completion reports should summarize testing performed, deviations, measures, deliverables, and residual risks.' },
      { l: 'Report only pass rate', s: 'Incomplete reporting', c: false, p: -90, f: 'Wrong. Pass rate alone can mislead stakeholders.' },
      { l: 'Hide deviations to look successful', s: 'Misleading report', c: false, p: -120, f: 'Wrong. Deviations from planned testing must be visible.' },
      { l: 'Delete residual risks from the report', s: 'Concealment', c: false, p: -130, f: 'Wrong. Remaining risks are essential for release decisions.' }
    ]
  },

  {
    id: 236, category: 'risk', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Risk changes during testing",
    desc: "A newly discovered authentication weakness increases release risk, but the test status report is not updated.",
    actions: [
      { l: 'Update the status report with the changed risk and planned response', s: '29119-3: Test status report — new and changed risks', c: true, p: 140, f: 'Correct! New and changed risks should be communicated during monitoring and reporting.' },
      { l: 'Wait until final completion to mention it', s: 'Late risk reporting', c: false, p: -90, f: 'Wrong. Stakeholders need changed risk information while they can act.' },
      { l: 'Hide the weakness because it is uncomfortable', s: 'Concealment', c: false, p: -140, f: 'Wrong. Security-related risk must be transparent.' },
      { l: 'Mark authentication tests as passed without execution', s: 'False evidence', c: false, p: -150, f: 'Wrong. Test results must reflect real evidence.' }
    ]
  },

  {
    id: 237, category: 'regression', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Regression impact missed",
    desc: "A payment fix is retested successfully, but checkout history and invoice generation are not tested.",
    actions: [
      { l: 'Run impact-based regression tests after confirming the fix', s: '29119-2: Retesting and regression testing', c: true, p: 140, f: 'Correct! Retesting confirms the fix, while regression testing checks unintended side effects.' },
      { l: 'Only retest the exact failed step', s: 'Insufficient regression', c: false, p: -80, f: 'Wrong. Related areas can break after a change.' },
      { l: 'Skip regression because the bug is fixed', s: 'False confidence', c: false, p: -90, f: 'Wrong. A fix can introduce new failures.' },
      { l: 'Run only unrelated UI color tests', s: 'Wrong regression scope', c: false, p: -60, f: 'Wrong. Regression should follow change impact.' }
    ]
  },

  {
    id: 238, category: 'automation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Flaky automation",
    desc: "An automated test sometimes passes and sometimes fails with no product code change.",
    actions: [
      { l: 'Investigate flakiness and separate product, environment, and testware causes', s: '29119-2: Test execution control', c: true, p: 120, f: 'Correct! Flaky tests reduce confidence and must be analyzed before using results for decisions.' },
      { l: 'Ignore every automation failure', s: 'Risk hidden', c: false, p: -80, f: 'Wrong. Flaky failures can hide real defects.' },
      { l: 'Delete all automated tests', s: 'Coverage loss', c: false, p: -90, f: 'Wrong. Investigate and maintain useful automation instead.' },
      { l: 'Mark random failures as passed', s: 'False reporting', c: false, p: -120, f: 'Wrong. Test results must reflect evidence.' }
    ]
  },

  {
    id: 239, category: 'metrics', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Misleading pass rate",
    desc: "The dashboard shows 96% pass rate, but most high-risk security tests were not executed.",
    actions: [
      { l: 'Report pass rate together with coverage gaps and risk context', s: '29119-2/3: Test monitoring and metrics', c: true, p: 120, f: 'Correct! Metrics must be interpreted with coverage and risk context.' },
      { l: 'Approve release using pass rate alone', s: 'Metric misuse', c: false, p: -90, f: 'Wrong. A high pass rate can hide untested critical areas.' },
      { l: 'Hide unexecuted security tests', s: 'Concealment', c: false, p: -130, f: 'Wrong. Security coverage gaps must be transparent.' },
      { l: 'Delete unexecuted tests from the dashboard', s: 'Scope manipulation', c: false, p: -120, f: 'Wrong. Do not manipulate scope to improve metrics.' }
    ]
  },

  {
    id: 240, category: 'incident', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Severity disagreement",
    desc: "Developers call a defect minor, but testers believe it affects many users.",
    actions: [
      { l: 'Use agreed severity criteria and document rationale', s: '29119-3: Incident severity assessment', c: true, p: 120, f: 'Correct! Severity should be based on defined criteria and evidence, not personal preference.' },
      { l: 'Let developers decide alone', s: 'One-sided classification', c: false, p: -60, f: 'Wrong. Classification should follow agreed criteria.' },
      { l: 'Let testers decide alone without evidence', s: 'Unsupported classification', c: false, p: -60, f: 'Wrong. Severity should be justified by impact evidence.' },
      { l: 'Ignore severity completely', s: 'Poor prioritization', c: false, p: -70, f: 'Wrong. Severity affects risk and planning.' }
    ]
  },

  {
    id: 241, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "High-risk tests scheduled last",
    desc: "Low-risk UI tests are complete, but payment, authentication, and data recovery tests are still unexecuted.",
    actions: [
      { l: 'Reprioritize remaining tests based on product risk', s: '29119-2: Risk-based test planning', c: true, p: 140, f: 'Correct! Risk-based testing focuses effort where failure impact is highest.' },
      { l: 'Continue with the original order no matter what', s: 'Rigid execution', c: false, p: -70, f: 'Wrong. Monitoring can require corrective prioritization.' },
      { l: 'Skip high-risk tests to finish on time', s: 'Coverage gap', c: false, p: -120, f: 'Wrong. High-risk tests are especially important.' },
      { l: 'Report only completed UI tests', s: 'Selective reporting', c: false, p: -90, f: 'Wrong. Remaining risk must be communicated.' }
    ]
  },

  {
    id: 242, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test procedure unclear",
    desc: "A test procedure lists test cases but does not define the order or startup conditions.",
    actions: [
      { l: 'Update the procedure with startup, order, and wrap-up information', s: '29119-3: Test procedure specification', c: true, p: 120, f: 'Correct! Test procedures should support repeatable execution by describing order and required setup.' },
      { l: 'Let each tester guess the order', s: 'Poor repeatability', c: false, p: -60, f: 'Wrong. Unclear order can cause inconsistent results.' },
      { l: 'Delete procedure documentation', s: 'Documentation loss', c: false, p: -80, f: 'Wrong. Improve the procedure instead.' },
      { l: 'Treat all inconsistent results as product defects', s: 'Misclassification', c: false, p: -60, f: 'Wrong. Procedure ambiguity should be fixed first.' }
    ]
  },

  {
    id: 243, category: 'environment', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test data reset issue",
    desc: "One test changes shared data and causes later tests to fail unpredictably.",
    actions: [
      { l: 'Define test data reset and isolation needs', s: '29119-3: Test data requirements', c: true, p: 120, f: 'Correct! Test data requirements should include resetting needs to support repeatable execution.' },
      { l: 'Ignore cascading failures', s: 'Weak control', c: false, p: -70, f: 'Wrong. Shared-state problems reduce reliability.' },
      { l: 'Delete later tests', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Fix data isolation rather than removing coverage.' },
      { l: 'Assume every later failure is a product defect', s: 'Misclassification', c: false, p: -60, f: 'Wrong. Data dependency must be analyzed.' }
    ]
  },

  {
    id: 244, category: 'communication', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Conflicting status numbers",
    desc: "The test lead says 70% executed, the dashboard says 85%, and the status report says 60%.",
    actions: [
      { l: 'Reconcile the data sources and publish one traceable status', s: '29119-2/3: Test monitoring and reporting', c: true, p: 120, f: 'Correct! Stakeholders need consistent and traceable status information.' },
      { l: 'Use the highest number because it looks better', s: 'Misleading metric', c: false, p: -90, f: 'Wrong. Reporting should be accurate, not optimistic.' },
      { l: 'Ignore the mismatch', s: 'Poor control', c: false, p: -70, f: 'Wrong. Conflicting status weakens trust.' },
      { l: 'Delete the dashboard', s: 'Overreaction', c: false, p: -60, f: 'Wrong. Fix the data quality instead.' }
    ]
  },

  {
    id: 245, category: 'process', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Late requirement change",
    desc: "A tax rule changes after related test cases already passed.",
    actions: [
      { l: 'Assess impact, update tests, and identify invalidated evidence', s: '29119-2: Test design and monitoring control', c: true, p: 140, f: 'Correct! A changed test basis can invalidate previous test evidence.' },
      { l: 'Keep old results because they passed', s: 'Outdated evidence', c: false, p: -120, f: 'Wrong. Results may no longer apply to the changed requirement.' },
      { l: 'Ignore the rule because it changed late', s: 'Scope miss', c: false, p: -130, f: 'Wrong. Late changes still require impact assessment.' },
      { l: 'Approve release using old evidence only', s: 'Invalid decision', c: false, p: -140, f: 'Wrong. The evidence may no longer be valid.' }
    ]
  },

  {
    id: 246, category: 'security', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Real customer data in test",
    desc: "A tester copied real customer data into a shared test environment.",
    actions: [
      { l: 'Stop unsafe use, document the issue, and replace with controlled test data', s: '29119-2/3: Test data management and incident reporting', c: true, p: 140, f: 'Correct! Test data must be controlled, especially when privacy risk exists.' },
      { l: 'Continue because real data is realistic', s: 'Privacy risk ignored', c: false, p: -120, f: 'Wrong. Realism does not justify unsafe data handling.' },
      { l: 'Delete evidence and move on', s: 'Concealment', c: false, p: -130, f: 'Wrong. The issue must be documented and corrected.' },
      { l: 'Only warn the tester privately', s: 'Insufficient response', c: false, p: -60, f: 'Wrong. Process and data controls must be corrected.' }
    ]
  },

  {
    id: 247, category: 'completion', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Release readiness lacks evidence",
    desc: "Management asks whether release is ready, but evidence is scattered across tools and chats.",
    actions: [
      { l: 'Prepare consolidated evidence: coverage, defects, risks, and limitations', s: '29119-3: Test completion report', c: true, p: 140, f: 'Correct! Release readiness needs consolidated and understandable evidence.' },
      { l: 'Give only a verbal opinion', s: 'Unsupported opinion', c: false, p: -100, f: 'Wrong. Release decisions need evidence.' },
      { l: 'Show only successful tests', s: 'Selective evidence', c: false, p: -120, f: 'Wrong. Risks and limitations must also be included.' },
      { l: 'Avoid the meeting', s: 'Poor communication', c: false, p: -80, f: 'Wrong. Test management must communicate status clearly.' }
    ]
  },

  {
    id: 248, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Exploratory finding outside script",
    desc: "A tester finds a defect while exploring outside the scripted test cases.",
    actions: [
      { l: 'Log the incident and consider adding coverage for that scenario', s: '29119-1/2: Exploratory testing and incident reporting', c: true, p: 120, f: 'Correct! Valid defects matter even when found outside scripted tests.' },
      { l: 'Ignore it because it was not scripted', s: 'Coverage blindness', c: false, p: -80, f: 'Wrong. Real defects should be recorded and analyzed.' },
      { l: 'Tell testers not to explore', s: 'Poor testing practice', c: false, p: -60, f: 'Wrong. Exploratory testing can reveal valuable issues.' },
      { l: 'Fail the entire suite automatically', s: 'Overreaction', c: false, p: -50, f: 'Wrong. Log and analyze the specific incident.' }
    ]
  },

  {
    id: 249, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Approval authority missing",
    desc: "A test plan is changed, but no approval authority is recorded.",
    actions: [
      { l: 'Record approval authority and change history', s: '29119-3: Common information elements', c: true, p: 120, f: 'Correct! Approval authority and change history help control important test documentation.' },
      { l: 'Let anyone edit without record', s: 'Weak governance', c: false, p: -70, f: 'Wrong. Important documentation changes should be controlled.' },
      { l: 'Overwrite previous versions silently', s: 'Lost history', c: false, p: -80, f: 'Wrong. Change history supports traceability.' },
      { l: 'Ignore approvals because testing is agile', s: 'Misunderstood tailoring', c: false, p: -60, f: 'Wrong. Tailoring should still be justified and agreed.' }
    ]
  },

  {
    id: 250, category: 'process', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Process tailoring not justified",
    desc: "The team skips formal incident reporting and says the project is agile, but no tailoring rationale exists.",
    actions: [
      { l: 'Document tailoring decision, rationale, risks, and stakeholder agreement', s: '29119 series: Tailored conformance', c: true, p: 140, f: 'Correct! Tailoring is acceptable when its scope, rationale, and agreement are documented.' },
      { l: 'Accept skipping because agile means no documentation', s: 'Misunderstood tailoring', c: false, p: -100, f: 'Wrong. Agile does not mean no evidence or no process.' },
      { l: 'Hide incidents in chat only', s: 'No traceability', c: false, p: -110, f: 'Wrong. Incident information still needs appropriate traceability.' },
      { l: 'Claim full conformance without evidence', s: 'False conformance', c: false, p: -130, f: 'Wrong. Conformance claims must match actual practice.' }
    ]
  }
  ,
  {
    id: 251, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Entry criteria undefined",
    desc: "Testing begins even though no entry criteria were defined for the integration phase.",
    actions: [
      { l: 'Define measurable entry criteria before continuing execution', s: '29119-2: Test planning and control', c: true, p: 140, f: 'Correct! Entry criteria help ensure testing starts under controlled conditions.' },
      { l: 'Start testing immediately without conditions', s: 'Uncontrolled execution', c: false, p: -80, f: 'Wrong. Missing entry criteria increases execution risk and confusion.' },
      { l: 'Ignore incomplete builds', s: 'Weak quality control', c: false, p: -90, f: 'Wrong. Build readiness should be part of entry evaluation.' },
      { l: 'Delete failed tests caused by unstable builds', s: 'Evidence manipulation', c: false, p: -120, f: 'Wrong. Build instability should be reported, not hidden.' }
    ]
  },

  {
    id: 252, category: 'execution', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Tester skipped preconditions",
    desc: "A tester executed test cases without completing required preconditions.",
    actions: [
      { l: 'Re-execute tests after ensuring preconditions are satisfied', s: '29119-3: Test case specification', c: true, p: 120, f: 'Correct! Preconditions support repeatable and valid execution.' },
      { l: 'Keep the existing results', s: 'Invalid evidence', c: false, p: -70, f: 'Wrong. Missing preconditions can invalidate the result.' },
      { l: 'Ignore the issue because tests passed', s: 'False confidence', c: false, p: -80, f: 'Wrong. A passed result is unreliable if execution conditions were incorrect.' },
      { l: 'Remove preconditions from documentation', s: 'Weak specification', c: false, p: -90, f: 'Wrong. Preconditions exist to support controlled execution.' }
    ]
  },

  {
    id: 253, category: 'traceability', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Defect not linked to requirement",
    desc: "A critical defect exists, but it cannot be traced back to any requirement or test case.",
    actions: [
      { l: 'Restore traceability links between requirement, test, and defect', s: '29119-3: Traceability management', c: true, p: 140, f: 'Correct! Traceability supports impact analysis and coverage visibility.' },
      { l: 'Close the defect because linkage is missing', s: 'Premature closure', c: false, p: -90, f: 'Wrong. Missing traceability should be corrected, not used to hide issues.' },
      { l: 'Ignore the missing links', s: 'Weak governance', c: false, p: -80, f: 'Wrong. Traceability is important for analysis and reporting.' },
      { l: 'Create fake links to satisfy audit checks', s: 'False evidence', c: false, p: -140, f: 'Wrong. Fabricating traceability is unacceptable.' }
    ]
  },

  {
    id: 254, category: 'metrics', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Execution metrics inconsistent",
    desc: "Different tools report different numbers for executed and blocked tests.",
    actions: [
      { l: 'Investigate metric sources and reconcile inconsistencies', s: '29119-2: Test monitoring', c: true, p: 120, f: 'Correct! Metrics should be consistent, explainable, and traceable.' },
      { l: 'Use whichever metric looks best', s: 'Misleading reporting', c: false, p: -90, f: 'Wrong. Metrics should support accurate decision-making.' },
      { l: 'Delete blocked tests from reporting', s: 'Concealment', c: false, p: -110, f: 'Wrong. Blocked tests are important status information.' },
      { l: 'Ignore the inconsistency', s: 'Weak control', c: false, p: -70, f: 'Wrong. Inconsistent metrics reduce confidence in reporting.' }
    ]
  },

  {
    id: 255, category: 'incident', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Critical defect reopened",
    desc: "A defect marked as fixed fails again during regression testing.",
    actions: [
      { l: 'Reopen the incident and update evidence and status', s: '29119-2: Incident lifecycle management', c: true, p: 140, f: 'Correct! Defect status should reflect verified evidence.' },
      { l: 'Ignore the regression failure', s: 'Hidden risk', c: false, p: -120, f: 'Wrong. Reappearing failures indicate unresolved risk.' },
      { l: 'Close the defect permanently', s: 'False closure', c: false, p: -130, f: 'Wrong. The defect should remain open until verified.' },
      { l: 'Delete the failed regression result', s: 'Evidence manipulation', c: false, p: -150, f: 'Wrong. Regression evidence should remain visible.' }
    ]
  },

  {
    id: 256, category: 'environment', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Shared environment conflict",
    desc: "Another team deploys unstable code into the shared test environment during execution.",
    actions: [
      { l: 'Coordinate environment usage and document impact on execution', s: '29119-2: Test environment management', c: true, p: 120, f: 'Correct! Shared environments require coordination and change control.' },
      { l: 'Continue execution without reporting instability', s: 'Uncontrolled environment', c: false, p: -80, f: 'Wrong. Environment instability affects confidence in results.' },
      { l: 'Mark all failures as product defects automatically', s: 'Misclassification', c: false, p: -70, f: 'Wrong. Environment causes should be analyzed separately.' },
      { l: 'Delete unstable test runs', s: 'Evidence loss', c: false, p: -90, f: 'Wrong. Instability evidence may be important for diagnosis.' }
    ]
  },

  {
    id: 257, category: 'completion', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Exit criteria partially met",
    desc: "Coverage targets are achieved, but open high-severity incidents remain unresolved.",
    actions: [
      { l: 'Evaluate all exit criteria together and escalate remaining risk', s: '29119-2: Test completion evaluation', c: true, p: 140, f: 'Correct! Completion decisions should consider all defined criteria and remaining risks.' },
      { l: 'Approve release because coverage is high', s: 'Single metric misuse', c: false, p: -110, f: 'Wrong. Coverage alone does not remove severe defect risk.' },
      { l: 'Close incidents to satisfy criteria', s: 'Integrity violation', c: false, p: -150, f: 'Wrong. Defect status must reflect reality.' },
      { l: 'Ignore the open incidents in the report', s: 'Concealment', c: false, p: -130, f: 'Wrong. Remaining risk must be visible.' }
    ]
  },

  {
    id: 258, category: 'security', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Access rights too broad",
    desc: "All testers have administrator access to production-like databases.",
    actions: [
      { l: 'Review and restrict access according to testing needs', s: '29119-2: Environment and data control', c: true, p: 140, f: 'Correct! Access should follow least-privilege principles and controlled testing needs.' },
      { l: 'Ignore because testers are trusted', s: 'Weak access control', c: false, p: -100, f: 'Wrong. Trust does not replace proper controls.' },
      { l: 'Share admin passwords openly', s: 'Security violation', c: false, p: -140, f: 'Wrong. Shared unrestricted access increases operational and security risk.' },
      { l: 'Disable logging to simplify access', s: 'Auditability loss', c: false, p: -130, f: 'Wrong. Logging supports accountability and investigation.' }
    ]
  },

  {
    id: 259, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Outdated test procedure",
    desc: "The documented test procedure still references screens removed months ago.",
    actions: [
      { l: 'Update procedures to match the current system behavior', s: '29119-3: Test procedure maintenance', c: true, p: 120, f: 'Correct! Procedures should remain aligned with the current test basis and system.' },
      { l: 'Keep using the outdated procedure', s: 'Invalid guidance', c: false, p: -80, f: 'Wrong. Outdated procedures reduce execution reliability.' },
      { l: 'Tell testers to improvise', s: 'Weak repeatability', c: false, p: -70, f: 'Wrong. Repeatable execution requires controlled procedures.' },
      { l: 'Delete all procedure documentation', s: 'Documentation loss', c: false, p: -90, f: 'Wrong. Controlled documentation supports consistency.' }
    ]
  },

  {
    id: 260, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Resource estimation unrealistic",
    desc: "The plan estimates one tester can execute 800 complex test cases in a single day.",
    actions: [
      { l: 'Reassess estimation using realistic execution effort and constraints', s: '29119-2: Test planning estimation', c: true, p: 140, f: 'Correct! Unrealistic estimation creates schedule and quality risks.' },
      { l: 'Force testers to work continuously', s: 'Unsustainable execution', c: false, p: -100, f: 'Wrong. Pressure does not replace realistic planning.' },
      { l: 'Hide the missed schedule', s: 'Misleading reporting', c: false, p: -120, f: 'Wrong. Planning deviations should be reported.' },
      { l: 'Reduce execution evidence requirements', s: 'Weak quality control', c: false, p: -90, f: 'Wrong. Evidence quality should not be sacrificed to hide planning problems.' }
    ]
  },

  {
    id: 261, category: 'communication', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Stakeholders receive conflicting updates",
    desc: "Managers, developers, and clients receive different versions of the testing status.",
    actions: [
      { l: 'Create one controlled and consistent reporting source', s: '29119-2: Test communication and reporting', c: true, p: 120, f: 'Correct! Consistent reporting improves trust and decision-making.' },
      { l: 'Customize numbers to satisfy each stakeholder', s: 'Misleading communication', c: false, p: -120, f: 'Wrong. Reports should remain accurate and consistent.' },
      { l: 'Stop reporting completely', s: 'Communication failure', c: false, p: -80, f: 'Wrong. Stakeholders still require visibility.' },
      { l: 'Blame the dashboard tool', s: 'Avoiding root cause', c: false, p: -60, f: 'Wrong. Reporting governance should be improved.' }
    ]
  },

  {
    id: 262, category: 'automation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Automation logs missing",
    desc: "Automated tests fail overnight, but execution logs were not retained.",
    actions: [
      { l: 'Retain logs and evidence for diagnosis and auditability', s: '29119-2: Test execution evidence', c: true, p: 120, f: 'Correct! Logs help analyze failures and support repeatable investigation.' },
      { l: 'Ignore failed runs', s: 'Hidden instability', c: false, p: -90, f: 'Wrong. Failed automation should be investigated.' },
      { l: 'Mark all overnight runs as passed', s: 'False evidence', c: false, p: -130, f: 'Wrong. Results must reflect actual execution.' },
      { l: 'Disable logging permanently', s: 'Auditability loss', c: false, p: -120, f: 'Wrong. Logs support traceability and diagnosis.' }
    ]
  },

  {
    id: 263, category: 'risk', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "New dependency introduced",
    desc: "A third-party payment service is added late in the project, but no risk reassessment is performed.",
    actions: [
      { l: 'Reassess project and product risks based on the new dependency', s: '29119-2: Risk monitoring and control', c: true, p: 140, f: 'Correct! Significant changes should trigger updated risk analysis.' },
      { l: 'Assume the vendor already tested everything', s: 'Unsupported assumption', c: false, p: -90, f: 'Wrong. External dependencies still require risk evaluation.' },
      { l: 'Ignore the integration because release is close', s: 'Unmanaged risk', c: false, p: -120, f: 'Wrong. Late changes can introduce major failures.' },
      { l: 'Remove payment testing from scope', s: 'Scope manipulation', c: false, p: -130, f: 'Wrong. Critical integrations require coverage.' }
    ]
  },

  {
    id: 264, category: 'traceability', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test case version unclear",
    desc: "Testers are unsure which version of a test case is the approved one.",
    actions: [
      { l: 'Introduce controlled versioning and approval tracking', s: '29119-3: Document control', c: true, p: 120, f: 'Correct! Version control supports consistency and traceability.' },
      { l: 'Allow everyone to use any version', s: 'Weak configuration control', c: false, p: -80, f: 'Wrong. Uncontrolled versions can invalidate results.' },
      { l: 'Delete old versions without records', s: 'Lost history', c: false, p: -90, f: 'Wrong. Historical traceability can be important.' },
      { l: 'Ignore the confusion', s: 'Weak governance', c: false, p: -70, f: 'Wrong. Controlled documentation improves execution quality.' }
    ]
  },

  {
    id: 265, category: 'incident', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Incident aging ignored",
    desc: "Critical defects remain open for weeks with no escalation or review.",
    actions: [
      { l: 'Monitor aging trends and escalate unresolved critical incidents', s: '29119-2: Incident monitoring and control', c: true, p: 140, f: 'Correct! Long-open critical incidents require visibility and escalation.' },
      { l: 'Ignore aging because defects already exist', s: 'Weak control', c: false, p: -90, f: 'Wrong. Aging trends can indicate process or prioritization problems.' },
      { l: 'Close old incidents automatically', s: 'False closure', c: false, p: -130, f: 'Wrong. Closure requires verification and agreement.' },
      { l: 'Hide aging metrics from reports', s: 'Concealment', c: false, p: -120, f: 'Wrong. Aging information supports decision-making.' }
    ]
  },

  {
    id: 266, category: 'completion', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Lessons learned missing",
    desc: "The project closes without documenting testing lessons learned or process improvements.",
    actions: [
      { l: 'Capture lessons learned and improvement opportunities', s: '29119-2: Test completion activities', c: true, p: 120, f: 'Correct! Retrospective learning supports future process improvement.' },
      { l: 'Ignore retrospective analysis', s: 'Lost improvement opportunity', c: false, p: -70, f: 'Wrong. Completion activities should support organizational learning.' },
      { l: 'Delete project metrics after release', s: 'Evidence loss', c: false, p: -90, f: 'Wrong. Historical metrics can support future estimation and analysis.' },
      { l: 'Blame individuals only', s: 'Weak root cause analysis', c: false, p: -60, f: 'Wrong. Improvement should focus on process and systemic learning too.' }
    ]
  },

  {
    id: 267, category: 'execution', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test interruptions not recorded",
    desc: "Execution was interrupted by outages several times, but interruptions were never documented.",
    actions: [
      { l: 'Record interruptions and evaluate impact on execution results', s: '29119-2: Test execution records', c: true, p: 120, f: 'Correct! Interruptions may affect validity, timing, and repeatability of results.' },
      { l: 'Ignore interruptions completely', s: 'Hidden execution issue', c: false, p: -70, f: 'Wrong. Interruptions can affect evidence quality.' },
      { l: 'Mark interrupted tests as passed', s: 'False reporting', c: false, p: -110, f: 'Wrong. Interrupted tests require proper status handling.' },
      { l: 'Delete interrupted runs', s: 'Evidence loss', c: false, p: -90, f: 'Wrong. Interrupted execution should remain traceable.' }
    ]
  },

  {
    id: 268, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Ambiguous expected result",
    desc: "A test case says 'system should work correctly' as the expected result.",
    actions: [
      { l: 'Rewrite expected results to be measurable and observable', s: '29119-3: Test case specification quality', c: true, p: 120, f: 'Correct! Expected results should support objective evaluation.' },
      { l: 'Leave the statement vague', s: 'Weak specification', c: false, p: -80, f: 'Wrong. Ambiguous expected results reduce consistency.' },
      { l: 'Ask testers to interpret it individually', s: 'Inconsistent execution', c: false, p: -70, f: 'Wrong. Different interpretations create unreliable results.' },
      { l: 'Mark all executions as passed', s: 'False confidence', c: false, p: -100, f: 'Wrong. Results should be based on clear criteria.' }
    ]
  },

  {
    id: 269, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Dependencies omitted from plan",
    desc: "The test plan does not mention dependency on an external identity provider service.",
    actions: [
      { l: 'Update the plan with external dependencies and related risks', s: '29119-3: Test plan dependencies and assumptions', c: true, p: 140, f: 'Correct! Dependencies affect scheduling, risk, and execution readiness.' },
      { l: 'Ignore dependencies because they are external', s: 'Hidden planning risk', c: false, p: -90, f: 'Wrong. External services can strongly affect testing.' },
      { l: 'Assume the provider is always stable', s: 'Unsupported assumption', c: false, p: -80, f: 'Wrong. Dependencies should be evaluated realistically.' },
      { l: 'Remove identity testing from scope', s: 'Coverage gap', c: false, p: -120, f: 'Wrong. Authentication-related dependencies are critical.' }
    ]
  },

  {
    id: 270, category: 'process', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Tailoring decision undocumented",
    desc: "The team removed formal review activities but never documented why.",
    actions: [
      { l: 'Document tailoring rationale, scope, and approval', s: '29119: Tailored conformance', c: true, p: 140, f: 'Correct! Tailoring should be controlled, justified, and agreed.' },
      { l: 'Claim reviews are unnecessary in agile projects', s: 'Misunderstood tailoring', c: false, p: -100, f: 'Wrong. Agile projects may tailor activities, but rationale should still exist.' },
      { l: 'Hide the missing reviews from audits', s: 'Concealment', c: false, p: -130, f: 'Wrong. Missing process activities should not be hidden.' },
      { l: 'Ignore governance completely', s: 'Weak process control', c: false, p: -90, f: 'Wrong. Controlled tailoring supports trustworthy conformance claims.' }
    ]
  }
  ,
  {
    id: 271, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test data requirements missing",
    desc: "The team needs special accounts, reset rules, and archived records, but test data requirements are not documented.",
    actions: [
      { l: 'Document test data requirements including responsibility, reset, and archiving needs', s: '29119-3: Test data requirements', c: true, p: 120, f: 'Correct! Test data requirements should describe needed data, responsibilities, reset needs, and disposal or archiving expectations.' },
      { l: 'Let every tester create random data independently', s: 'Uncontrolled test data', c: false, p: -70, f: 'Wrong. Uncontrolled data can make results inconsistent and hard to reproduce.' },
      { l: 'Use production data without controls', s: 'Privacy and control risk', c: false, p: -120, f: 'Wrong. Real data must not be used casually or unsafely.' },
      { l: 'Ignore data setup until execution fails', s: 'Reactive planning', c: false, p: -80, f: 'Wrong. Data needs should be planned before execution.' }
    ]
  },

  {
    id: 272, category: 'environment', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Environment ownership unclear",
    desc: "The staging environment is broken, but nobody knows who is responsible for fixing it.",
    actions: [
      { l: 'Define environment responsibilities and escalation path', s: '29119-3: Test environment requirements', c: true, p: 140, f: 'Correct! Environment requirements should include responsibility so blockers can be handled quickly.' },
      { l: 'Wait until someone volunteers', s: 'Unclear ownership', c: false, p: -80, f: 'Wrong. Undefined responsibility delays testing and increases project risk.' },
      { l: 'Blame the last tester who used it', s: 'Blame response', c: false, p: -60, f: 'Wrong. The issue is process ownership, not blame.' },
      { l: 'Continue testing and ignore the broken environment', s: 'Invalid evidence', c: false, p: -110, f: 'Wrong. Results from a broken environment may be unreliable.' }
    ]
  },

  {
    id: 273, category: 'incident', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident status unclear",
    desc: "A defect is shown as both Open in the tracker and Fixed in a spreadsheet.",
    actions: [
      { l: 'Reconcile incident status and maintain one controlled source of truth', s: '29119-2/3: Incident status management', c: true, p: 120, f: 'Correct! Incident status should be consistent and traceable to avoid bad planning decisions.' },
      { l: 'Use the status that looks more positive', s: 'Misleading status', c: false, p: -90, f: 'Wrong. Status must reflect evidence, not optimism.' },
      { l: 'Ignore the inconsistency', s: 'Poor control', c: false, p: -70, f: 'Wrong. Conflicting status reduces trust in incident management.' },
      { l: 'Close the defect without verification', s: 'False closure', c: false, p: -100, f: 'Wrong. Closure should be based on verified evidence.' }
    ]
  },

  {
    id: 274, category: 'metrics', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Coverage percentage misunderstood",
    desc: "A manager sees 90% test case execution and assumes 90% of risk is removed.",
    actions: [
      { l: 'Explain that execution percentage must be interpreted with risk, scope, and defect status', s: '29119-2: Test measures interpretation', c: true, p: 120, f: 'Correct! Metrics need context. Execution percentage alone does not equal risk reduction.' },
      { l: 'Agree that 90% execution means 90% risk removed', s: 'Metric misuse', c: false, p: -90, f: 'Wrong. Risk reduction depends on what was tested and what was found.' },
      { l: 'Hide defect data to keep the metric simple', s: 'Misleading reporting', c: false, p: -120, f: 'Wrong. Defect and risk information are essential context.' },
      { l: 'Stop using metrics completely', s: 'Overreaction', c: false, p: -50, f: 'Wrong. Metrics are useful when explained properly.' }
    ]
  },

  {
    id: 275, category: 'regression', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Regression suite outdated",
    desc: "The regression suite still tests removed features and misses new high-risk workflows.",
    actions: [
      { l: 'Review and update the regression suite based on current risk and test basis', s: '29119-2: Regression test maintenance', c: true, p: 140, f: 'Correct! Regression assets must stay aligned with the current product and risk profile.' },
      { l: 'Keep the old suite because it once worked', s: 'Outdated testware', c: false, p: -90, f: 'Wrong. Old tests can give false confidence if they no longer match the product.' },
      { l: 'Delete the whole suite without replacement', s: 'Coverage loss', c: false, p: -120, f: 'Wrong. The suite should be maintained, not abandoned.' },
      { l: 'Report high pass rate from obsolete tests only', s: 'Misleading metric', c: false, p: -130, f: 'Wrong. Passing obsolete tests does not prove current risk is covered.' }
    ]
  },

  {
    id: 276, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Test strategy ignores non-functional risk",
    desc: "The strategy covers functional tests only, although the system has strict performance and security needs.",
    actions: [
      { l: 'Update the strategy to include relevant test types based on risk', s: '29119-1/2: Test strategy and test types', c: true, p: 140, f: 'Correct! The test strategy should reflect product risks, including non-functional quality characteristics.' },
      { l: 'Keep only functional tests because they are easier', s: 'Incomplete strategy', c: false, p: -90, f: 'Wrong. Ease does not remove performance or security risk.' },
      { l: 'Assume security is handled by users', s: 'Risk ignored', c: false, p: -120, f: 'Wrong. Security risk should be addressed in the test approach.' },
      { l: 'Remove performance requirements from scope silently', s: 'Scope manipulation', c: false, p: -130, f: 'Wrong. Scope changes need agreement and visibility.' }
    ]
  },

  {
    id: 277, category: 'communication', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Risk accepted verbally",
    desc: "A product owner verbally accepts a known release risk, but there is no record of the decision.",
    actions: [
      { l: 'Record the decision owner, rationale, and residual risk', s: '29119-2/3: Risk communication and completion reporting', c: true, p: 120, f: 'Correct! Accepted risk is still risk and should be traceable with ownership and rationale.' },
      { l: 'Proceed because verbal approval is enough', s: 'No audit trail', c: false, p: -80, f: 'Wrong. Verbal acceptance can be misunderstood or forgotten.' },
      { l: 'Mark the risk as resolved', s: 'False risk closure', c: false, p: -90, f: 'Wrong. Accepted risk is not the same as eliminated risk.' },
      { l: 'Remove the risk from the report', s: 'Concealment', c: false, p: -110, f: 'Wrong. Stakeholders need visibility into accepted residual risk.' }
    ]
  },

  {
    id: 278, category: 'execution', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test result changed after discussion",
    desc: "A failed test is changed to Passed after a meeting, but no new execution evidence exists.",
    actions: [
      { l: 'Keep the failed result until new evidence supports a change', s: '29119-3: Test result evidence', c: true, p: 120, f: 'Correct! Test result changes should be based on evidence, not pressure or discussion alone.' },
      { l: 'Change it to Passed because the team agreed verbally', s: 'Unsupported status change', c: false, p: -90, f: 'Wrong. Agreement without evidence does not validate the result.' },
      { l: 'Delete the failed execution record', s: 'Evidence manipulation', c: false, p: -120, f: 'Wrong. Failed evidence should remain traceable.' },
      { l: 'Mark all related tests passed too', s: 'False reporting', c: false, p: -130, f: 'Wrong. Each result needs its own evidence.' }
    ]
  },

  {
    id: 279, category: 'process', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Testing starts before design completion",
    desc: "Execution begins even though test models and coverage items were never identified.",
    actions: [
      { l: 'Complete test design activities before relying on execution results', s: '29119-2/4: Test design and implementation', c: true, p: 140, f: 'Correct! Test design identifies models, coverage items, and test cases so execution has a clear basis.' },
      { l: 'Execute random tests and call it complete', s: 'Uncontrolled testing', c: false, p: -100, f: 'Wrong. Random execution alone cannot replace planned test design.' },
      { l: 'Hide missing coverage analysis', s: 'Concealment', c: false, p: -120, f: 'Wrong. Missing design work should be visible and corrected.' },
      { l: 'Use only production incidents as test cases', s: 'Reactive approach', c: false, p: -90, f: 'Wrong. Production incidents can inform improvement but should not be the only test basis.' }
    ]
  },

  {
    id: 280, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Glossary missing",
    desc: "Different teams use the words defect, incident, failure, and risk differently.",
    actions: [
      { l: 'Add or reference a glossary for shared testing terminology', s: '29119-3: Common information elements — glossary', c: true, p: 120, f: 'Correct! A glossary helps teams interpret documentation consistently.' },
      { l: 'Let each team define terms independently', s: 'Terminology conflict', c: false, p: -60, f: 'Wrong. Inconsistent terminology causes reporting and decision confusion.' },
      { l: 'Avoid using testing terms at all', s: 'Poor communication', c: false, p: -50, f: 'Wrong. Clear terms are better than avoiding important concepts.' },
      { l: 'Change meanings depending on audience', s: 'Misleading communication', c: false, p: -70, f: 'Wrong. Terms should be used consistently.' }
    ]
  },

  {
    id: 281, category: 'security', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Security defect lacks risk assessment",
    desc: "A vulnerability is logged, but the report does not describe risk or potential impact.",
    actions: [
      { l: 'Update the incident with risk and impact assessment', s: '29119-3: Test incident report risk field', c: true, p: 140, f: 'Correct! Incident reports should support prioritization by describing risk and impact.' },
      { l: 'Leave the report technical only', s: 'Incomplete risk communication', c: false, p: -80, f: 'Wrong. Technical detail alone may not support release decisions.' },
      { l: 'Lower priority because impact is unknown', s: 'Unsupported classification', c: false, p: -90, f: 'Wrong. Unknown impact should trigger analysis, not automatic lowering.' },
      { l: 'Hide the vulnerability until fixed', s: 'Concealment', c: false, p: -140, f: 'Wrong. Security risk must be communicated appropriately.' }
    ]
  },

  {
    id: 282, category: 'environment', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Environment period not planned",
    desc: "The team needs a performance environment for three days, but the reservation period was never defined.",
    actions: [
      { l: 'Specify the period needed for the test environment', s: '29119-3: Test environment requirements', c: true, p: 120, f: 'Correct! Environment requirements should include when the environment is needed.' },
      { l: 'Assume it will always be available', s: 'Planning assumption risk', c: false, p: -70, f: 'Wrong. Environment availability should be planned.' },
      { l: 'Start performance testing on a random machine', s: 'Invalid environment', c: false, p: -90, f: 'Wrong. Performance tests need suitable environments.' },
      { l: 'Cancel performance testing without reporting', s: 'Hidden coverage gap', c: false, p: -100, f: 'Wrong. Coverage changes must be visible.' }
    ]
  },

  {
    id: 283, category: 'incident', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident originator unknown",
    desc: "A defect report lacks information about who observed and reported the issue.",
    actions: [
      { l: 'Record the originator and timing information', s: '29119-3: Test incident report timing and originator', c: true, p: 120, f: 'Correct! Originator and timing information help investigation and follow-up.' },
      { l: 'Ignore missing originator data', s: 'Weak incident record', c: false, p: -60, f: 'Wrong. Missing originator information can slow investigation.' },
      { l: 'Close the defect because reporter is unknown', s: 'Premature closure', c: false, p: -80, f: 'Wrong. Improve the report and investigate the issue.' },
      { l: 'Invent a reporter name', s: 'False documentation', c: false, p: -100, f: 'Wrong. Documentation must remain accurate.' }
    ]
  },

  {
    id: 284, category: 'automation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Automated test without oracle",
    desc: "A script checks that the application opens but never verifies whether the result is correct.",
    actions: [
      { l: 'Add meaningful checks based on expected results or a test oracle', s: '29119-1/3: Test oracle and expected results', c: true, p: 120, f: 'Correct! Automation should evaluate behavior, not just perform actions.' },
      { l: 'Keep it because it runs successfully', s: 'Weak automation', c: false, p: -70, f: 'Wrong. A script that does not check outcomes gives weak evidence.' },
      { l: 'Count it as full functional coverage', s: 'False coverage', c: false, p: -90, f: 'Wrong. Opening the app is not enough to cover functionality.' },
      { l: 'Delete all automation', s: 'Overreaction', c: false, p: -60, f: 'Wrong. Improve the script rather than abandoning automation.' }
    ]
  },

  {
    id: 285, category: 'metrics', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Defect trend rising",
    desc: "The number of new high-severity incidents increases each day near release.",
    actions: [
      { l: 'Report the trend and reassess release risk', s: '29119-2: Test monitoring measures', c: true, p: 120, f: 'Correct! Defect trends can show increasing risk and should inform decisions.' },
      { l: 'Hide the trend because release is close', s: 'Concealment', c: false, p: -110, f: 'Wrong. Late risk trends are especially important.' },
      { l: 'Report only total executed tests', s: 'Incomplete metrics', c: false, p: -60, f: 'Wrong. Execution count alone misses defect trend risk.' },
      { l: 'Close new incidents automatically', s: 'False closure', c: false, p: -120, f: 'Wrong. Incident status must reflect evidence.' }
    ]
  },

  {
    id: 286, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "No staffing plan",
    desc: "The test plan does not say who is responsible for test design, execution, reporting, or environment setup.",
    actions: [
      { l: 'Add staffing and responsibilities to the test plan', s: '29119-3: Test plan staffing', c: true, p: 140, f: 'Correct! Staffing information clarifies responsibilities and supports realistic planning.' },
      { l: 'Let tasks be assigned randomly each day', s: 'Uncontrolled staffing', c: false, p: -70, f: 'Wrong. Random responsibility causes gaps and confusion.' },
      { l: 'Assume developers will handle all testing', s: 'Wrong assumption', c: false, p: -80, f: 'Wrong. Testing responsibilities should be explicit.' },
      { l: 'Ignore environment setup ownership', s: 'Environment risk', c: false, p: -90, f: 'Wrong. Environment responsibility affects execution readiness.' }
    ]
  },

  {
    id: 287, category: 'completion', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Reusable assets not identified",
    desc: "At project closure, nobody identifies which test cases, scripts, or data can be reused.",
    actions: [
      { l: 'Identify reusable test assets during completion activities', s: '29119-3: Test completion report — reusable assets', c: true, p: 140, f: 'Correct! Reusable assets can improve future test efficiency and consistency.' },
      { l: 'Delete all project testware', s: 'Asset loss', c: false, p: -100, f: 'Wrong. Useful testware should be preserved where appropriate.' },
      { l: 'Keep assets but never label or organize them', s: 'Poor reuse', c: false, p: -60, f: 'Wrong. Reuse requires understandable and accessible assets.' },
      { l: 'Ignore reuse because release is done', s: 'Lost improvement opportunity', c: false, p: -70, f: 'Wrong. Completion activities support future projects.' }
    ]
  },

  {
    id: 288, category: 'communication', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Blocked testing not escalated",
    desc: "A third-party service outage blocks critical tests, but the issue is only mentioned in a private chat.",
    actions: [
      { l: 'Escalate the blocker through the planned communication channel', s: '29119-2/3: Test communication and blockers', c: true, p: 120, f: 'Correct! Critical blockers should be visible through planned reporting and escalation paths.' },
      { l: 'Keep it in private chat only', s: 'No visibility', c: false, p: -80, f: 'Wrong. Private messages may not reach decision-makers.' },
      { l: 'Mark blocked tests as passed', s: 'False reporting', c: false, p: -130, f: 'Wrong. Blocked tests are not passed tests.' },
      { l: 'Delete the blocked test cases', s: 'Coverage manipulation', c: false, p: -110, f: 'Wrong. Blocked scope must remain visible.' }
    ]
  },

  {
    id: 289, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test process improvement",
    desc: "The same environment issue delays every release.",
    actions: [
      { l: 'Record the repeated issue and propose test process improvement', s: '29119-1/2: Test process improvement', c: true, p: 120, f: 'Correct! Recurring testing problems should feed process improvement activities.' },
      { l: 'Accept the delay as normal forever', s: 'No improvement', c: false, p: -70, f: 'Wrong. Repeated problems should be analyzed and improved.' },
      { l: 'Blame a different person each release', s: 'Blame culture', c: false, p: -50, f: 'Wrong. Process improvement focuses on systemic causes.' },
      { l: 'Hide the delay from retrospectives', s: 'Lost learning', c: false, p: -80, f: 'Wrong. Improvement requires honest evidence.' }
    ]
  },

  {
    id: 290, category: 'traceability', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Changed requirement not linked",
    desc: "A changed requirement has updated tests, but old execution results are still linked as if they were valid.",
    actions: [
      { l: 'Update traceability and mark old evidence as superseded or invalidated', s: '29119-3: Traceability and change control', c: true, p: 140, f: 'Correct! Traceability must reflect current requirements and valid evidence.' },
      { l: 'Keep old links to look complete', s: 'False coverage', c: false, p: -120, f: 'Wrong. Old evidence may no longer support the changed requirement.' },
      { l: 'Delete the changed requirement', s: 'Scope manipulation', c: false, p: -130, f: 'Wrong. Requirement changes should be controlled, not hidden.' },
      { l: 'Ignore traceability after execution', s: 'Weak governance', c: false, p: -80, f: 'Wrong. Traceability remains important after changes.' }
    ]
  },

  {
    id: 291, category: 'risk', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Risk response not assigned",
    desc: "The risk register lists a major performance risk but no owner or response action.",
    actions: [
      { l: 'Assign risk owner and planned response action', s: '29119-3: Test plan risk register', c: true, p: 140, f: 'Correct! A risk register should support action, not just list concerns.' },
      { l: 'Leave risk owner blank', s: 'Unmanaged risk', c: false, p: -80, f: 'Wrong. Without ownership, risk treatment may not happen.' },
      { l: 'Remove the risk because no owner exists', s: 'Concealment', c: false, p: -120, f: 'Wrong. Missing owner should be fixed, not hidden.' },
      { l: 'Assume testing will somehow cover it', s: 'Unsupported assumption', c: false, p: -90, f: 'Wrong. Risk response should be explicit.' }
    ]
  },

  {
    id: 292, category: 'security', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Sensitive logs in test evidence",
    desc: "Test execution logs include passwords and personal identifiers.",
    actions: [
      { l: 'Sanitize sensitive evidence and improve logging controls', s: '29119-2/3: Test evidence and data control', c: true, p: 140, f: 'Correct! Test evidence should preserve useful information without exposing sensitive data.' },
      { l: 'Share logs publicly for faster debugging', s: 'Privacy risk', c: false, p: -140, f: 'Wrong. Sensitive data must be protected.' },
      { l: 'Delete all logs without replacement', s: 'Evidence loss', c: false, p: -100, f: 'Wrong. Logs should be controlled and sanitized, not blindly destroyed.' },
      { l: 'Ignore because it is only a test log', s: 'Security misconception', c: false, p: -110, f: 'Wrong. Test artifacts can still contain sensitive information.' }
    ]
  },

  {
    id: 293, category: 'execution', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Pass/fail criteria unclear",
    desc: "Different testers mark the same behavior as pass or fail because criteria are vague.",
    actions: [
      { l: 'Clarify expected results and pass/fail criteria', s: '29119-3: Test case specification', c: true, p: 120, f: 'Correct! Clear expected results improve consistency of test evaluation.' },
      { l: 'Let each tester decide personally', s: 'Inconsistent evaluation', c: false, p: -70, f: 'Wrong. Test results should be based on shared criteria.' },
      { l: 'Always mark ambiguous tests as passed', s: 'False confidence', c: false, p: -90, f: 'Wrong. Ambiguity should be resolved, not hidden.' },
      { l: 'Remove all ambiguous tests', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Improve unclear tests instead of deleting them.' }
    ]
  },

  {
    id: 294, category: 'automation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Automation coverage overstated",
    desc: "The team says automation covers checkout, but scripts only verify that the page opens.",
    actions: [
      { l: 'Correct the coverage claim and add meaningful assertions', s: '29119-1/3: Automated testing and expected results', c: true, p: 120, f: 'Correct! Automation must verify expected behavior to support coverage claims.' },
      { l: 'Keep claiming full checkout coverage', s: 'False coverage', c: false, p: -100, f: 'Wrong. Opening a page is not full checkout verification.' },
      { l: 'Delete manual checkout tests immediately', s: 'Coverage loss', c: false, p: -90, f: 'Wrong. Manual tests may still cover important behavior.' },
      { l: 'Ignore missing assertions', s: 'Weak automation', c: false, p: -80, f: 'Wrong. Assertions are essential for meaningful automated evidence.' }
    ]
  },

  {
    id: 295, category: 'compliance', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Documentation needed for audit",
    desc: "An external audit asks for test plan, status reports, incident reports, and completion evidence.",
    actions: [
      { l: 'Provide controlled test documentation and explain any tailored gaps', s: '29119-3: Test documentation set', c: true, p: 140, f: 'Correct! Documentation supports auditability, and tailoring should be explained.' },
      { l: 'Create fake documents after the audit request', s: 'False documentation', c: false, p: -150, f: 'Wrong. Fabricating audit evidence is unacceptable.' },
      { l: 'Say testing was done but provide no evidence', s: 'Unsupported claim', c: false, p: -120, f: 'Wrong. Audits need traceable evidence.' },
      { l: 'Delete incomplete records before audit', s: 'Evidence destruction', c: false, p: -150, f: 'Wrong. Destroying records damages integrity.' }
    ]
  }
  ,
  {
    id: 296, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Schedule compression risk",
    desc: "Management cuts the test schedule by 40%, but expects the same coverage and confidence.",
    actions: [
      { l: 'Reassess scope, risk, priorities, and communicate the impact', s: '29119-2: Test planning and control', c: true, p: 140, f: 'Correct! A compressed schedule requires risk-based replanning and transparent communication.' },
      { l: 'Promise the same confidence with less time', s: 'False assurance', c: false, p: -120, f: 'Wrong. Less time can reduce coverage and evidence quality.' },
      { l: 'Hide skipped tests from the report', s: 'Concealment', c: false, p: -130, f: 'Wrong. Skipped scope and residual risk must be visible.' },
      { l: 'Randomly remove tests without analysis', s: 'Uncontrolled scope reduction', c: false, p: -100, f: 'Wrong. Test reduction should be risk-based.' }
    ]
  },

  {
    id: 297, category: 'execution', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Blocked test handling",
    desc: "Several tests cannot run because a required external service is unavailable.",
    actions: [
      { l: 'Mark tests as blocked, document cause, and report impact', s: '29119-2/3: Test execution status reporting', c: true, p: 120, f: 'Correct! Blocked tests are not passed or failed; their cause and impact should be communicated.' },
      { l: 'Mark blocked tests as passed', s: 'False reporting', c: false, p: -120, f: 'Wrong. A test that was not executed cannot be reported as passed.' },
      { l: 'Delete blocked tests from scope silently', s: 'Scope manipulation', c: false, p: -110, f: 'Wrong. Blocked coverage should remain visible.' },
      { l: 'Ignore the external service dependency', s: 'Hidden dependency risk', c: false, p: -80, f: 'Wrong. Dependencies affect execution and release confidence.' }
    ]
  },

  {
    id: 298, category: 'incident', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Incident impact unclear",
    desc: "A defect is marked high severity, but the business impact and affected users are not described.",
    actions: [
      { l: 'Update the incident with impact, affected scope, and rationale', s: '29119-3: Test incident report', c: true, p: 140, f: 'Correct! Impact and rationale help stakeholders understand severity and priority.' },
      { l: 'Leave severity unexplained', s: 'Weak incident evidence', c: false, p: -80, f: 'Wrong. Severity should be supported by evidence and rationale.' },
      { l: 'Lower severity just because impact is undocumented', s: 'Incorrect triage', c: false, p: -90, f: 'Wrong. Missing information should be investigated, not used to minimize the issue.' },
      { l: 'Close the defect to avoid debate', s: 'Premature closure', c: false, p: -120, f: 'Wrong. Unclear impact requires analysis, not closure.' }
    ]
  },

  {
    id: 299, category: 'completion', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Final recommendation unclear",
    desc: "The test completion report lists results but does not clearly state release risks or recommendation.",
    actions: [
      { l: 'Add a clear completion evaluation with residual risks and recommendation', s: '29119-3: Test completion report', c: true, p: 140, f: 'Correct! Completion reporting should help stakeholders understand readiness, remaining risks, and evidence.' },
      { l: 'Let stakeholders guess from raw numbers', s: 'Poor decision support', c: false, p: -80, f: 'Wrong. Raw results need interpretation.' },
      { l: 'Remove risks to make the report shorter', s: 'Misleading summary', c: false, p: -120, f: 'Wrong. A concise report must still preserve critical risk information.' },
      { l: 'Recommend release without reviewing evidence', s: 'Unsupported recommendation', c: false, p: -130, f: 'Wrong. Recommendations should be evidence-based.' }
    ]
  },

  {
    id: 300, category: 'process', sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Process focus preserved",
    desc: "The question bank now includes documentation and technique topics, but the course focus is still Test Processes.",
    actions: [
      { l: 'Keep process decisions central and use documentation/techniques as support', s: '29119-2 core with 29119-3/4 support', c: true, p: 140, f: 'Correct! The strongest design keeps ISO 29119-2 Test Processes as the main learning objective while connecting related standards.' },
      { l: 'Turn medium mode into only terminology questions', s: 'Weak simulation', c: false, p: -80, f: 'Wrong. Medium should emphasize realistic process decisions.' },
      { l: 'Remove all process scenarios', s: 'Wrong project focus', c: false, p: -120, f: 'Wrong. The project is primarily about Test Processes.' },
      { l: 'Use techniques without explaining process context', s: 'Disconnected standards', c: false, p: -90, f: 'Wrong. Techniques are strongest when connected to planning, execution, and reporting decisions.' }
    ]
  }
];
window.MEDIUM_INCIDENTS = MEDIUM_INCIDENTS;
