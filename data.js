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


  /* ─── EASY MODE ─── */
const EASY_INCIDENTS = [
  {
    id: 101, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "What is testing?",
    desc: "According to ISO 29119-2, what is the main idea of testing?",
    actions: [
      { l:'Executing and evaluating a test item', s:'29119-2: Testing definition', c:true, p:100, f:'Correct! Testing includes execution, observation, and evaluation of results.' },
      { l:'Only fixing defects in code', s:'Development activity', c:false, p:-60, f:'Wrong. Testing identifies or evaluates defects; fixing is development work.' },
      { l:'Only writing documentation', s:'Documentation only', c:false, p:-40, f:'Wrong. Documentation supports testing but is not the whole process.' },
      { l:'Only deploying software', s:'Release activity', c:false, p:-50, f:'Wrong. Deployment is separate from testing.' }
    ]
  },

  {
    id: 102, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test case meaning",
    desc: "Which option best describes a test case?",
    actions: [
      { l:'A defect report', s:'Incident report', c:false, p:-50, f:'Wrong. A defect report records an incident, not a test case.' },
      { l:'A set of preconditions, inputs, and expected results', s:'29119-2: Test case', c:true, p:100, f:'Correct! A test case defines what is needed to execute and evaluate a test.' },
      { l:'A project schedule', s:'Project planning', c:false, p:-40, f:'Wrong. A schedule is not a test case.' },
      { l:'A software release note', s:'Release documentation', c:false, p:-40, f:'Wrong. Release notes are not test cases.' }
    ]
  },

  {
    id: 103, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Expected result",
    desc: "What is an expected result?",
    actions: [
      { l:'Observed behavior during execution', s:'Actual result', c:false, p:-50, f:'Wrong. That describes the actual result.' },
      { l:'Predicted behavior under specified conditions', s:'29119-2: Expected result', c:true, p:100, f:'Correct! Expected results define what should happen.' },
      { l:'A random output from the system', s:'Invalid result', c:false, p:-50, f:'Wrong. Expected results should be defined in advance.' },
      { l:'A user complaint after release', s:'User feedback', c:false, p:-40, f:'Wrong. User feedback is not the expected result.' }
    ]
  },

  {
    id: 104, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Actual result",
    desc: "During execution, the tester observes what the system really does. What is this called?",
    actions: [
      { l:'Expected result', s:'Expected behavior', c:false, p:-40, f:'Wrong. Expected result is predicted before execution.' },
      { l:'Actual result', s:'29119-2: Actual result', c:true, p:100, f:'Correct! Actual result is the observed behavior or condition.' },
      { l:'Test basis', s:'Test basis', c:false, p:-40, f:'Wrong. Test basis is used to design tests.' },
      { l:'Test policy', s:'Organizational level', c:false, p:-40, f:'Wrong. A test policy is organizational guidance.' }
    ]
  },

  {
    id: 105, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Dynamic testing",
    desc: "What makes dynamic testing different from static testing?",
    actions: [
      { l:'It evaluates the test item by executing it', s:'29119-2: Dynamic testing', c:true, p:100, f:'Correct! Dynamic testing requires execution of the test item.' },
      { l:'It only reviews documents', s:'Static testing', c:false, p:-50, f:'Wrong. Reviewing without execution is static testing.' },
      { l:'It only writes test plans', s:'Test planning', c:false, p:-40, f:'Wrong. Planning is not dynamic testing.' },
      { l:'It only fixes source code', s:'Development activity', c:false, p:-60, f:'Wrong. Fixing code is not testing.' }
    ]
  },

  {
    id: 106, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident meaning",
    desc: "A tester observes unexpected behavior during execution. What should it be treated as?",
    actions: [
      { l:'A planned feature', s:'Requirement', c:false, p:-50, f:'Wrong. Unexpected behavior is not automatically a feature.' },
      { l:'An incident', s:'29119-2: Incident', c:true, p:100, f:'Correct! An incident is an unexpected event or condition during the lifecycle.' },
      { l:'A test environment requirement', s:'Environment requirement', c:false, p:-40, f:'Wrong. This is not an environment requirement.' },
      { l:'A test objective', s:'Test objective', c:false, p:-40, f:'Wrong. A test objective is the reason for testing.' }
    ]
  },

  {
    id: 107, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident report",
    desc: "A defect is found during test execution. What should be created?",
    actions: [
      { l:'Incident report', s:'29119-2: Test Incident Reporting', c:true, p:100, f:'Correct! Incidents requiring further action should be reported to relevant stakeholders.' },
      { l:'Marketing report', s:'Business document', c:false, p:-50, f:'Wrong. This is not a marketing activity.' },
      { l:'Release note only', s:'Release communication', c:false, p:-40, f:'Wrong. A release note alone does not manage the incident.' },
      { l:'Nothing until release day', s:'Delayed reporting', c:false, p:-80, f:'Wrong. Delaying incident reporting increases risk.' }
    ]
  },

  {
    id: 108, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Regression testing",
    desc: "After a code change, tests are run to check that unchanged parts still work.",
    actions: [
      { l:'Retesting', s:'Confirmation testing', c:false, p:-40, f:'Wrong. Retesting checks whether a fix removed a fault.' },
      { l:'Regression testing', s:'29119-2: Regression testing', c:true, p:100, f:'Correct! Regression testing checks whether changes caused failures in unchanged parts.' },
      { l:'Static testing', s:'Static testing', c:false, p:-40, f:'Wrong. Static testing does not execute the test item.' },
      { l:'Acceptance planning', s:'Test planning', c:false, p:-40, f:'Wrong. This is an execution activity, not planning.' }
    ]
  },

  {
    id: 109, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Retesting",
    desc: "A defect was fixed. Which testing checks whether the fix actually removed the fault?",
    actions: [
      { l:'Performance testing', s:'Test type', c:false, p:-40, f:'Wrong. Performance testing evaluates behavior under resource/time constraints.' },
      { l:'Retesting', s:'29119-2: Retesting', c:true, p:100, f:'Correct! Retesting confirms that a modification fixed the fault.' },
      { l:'Exploratory testing only', s:'Exploratory testing', c:false, p:-40, f:'Wrong. Exploratory testing is not specifically confirmation of a fix.' },
      { l:'Test completion', s:'Management process', c:false, p:-40, f:'Wrong. Test completion summarizes and closes testing activities.' }
    ]
  },

  {
    id: 110, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test environment",
    desc: "Which option best describes a test environment?",
    actions: [
      { l:'Only the source code repository', s:'Incomplete environment', c:false, p:-40, f:'Wrong. A repository alone is not the full environment.' },
      { l:'Facilities, hardware, software, procedures, and data needed for testing', s:'29119-2: Test environment', c:true, p:100, f:'Correct! A test environment includes what is needed to conduct tests.' },
      { l:'Only the user interface', s:'Partial component', c:false, p:-40, f:'Wrong. The UI is only one possible part.' },
      { l:'Only the production server', s:'Production system', c:false, p:-50, f:'Wrong. Testing should use controlled test environments unless specifically planned.' }
    ]
  },

  {
    id: 111, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test data",
    desc: "What is test data used for?",
    actions: [
      { l:'To satisfy input requirements for executing test cases', s:'29119-2: Test data', c:true, p:100, f:'Correct! Test data supports the execution of one or more test cases.' },
      { l:'To replace test cases', s:'Invalid substitution', c:false, p:-40, f:'Wrong. Test data supports test cases; it does not replace them.' },
      { l:'To approve release automatically', s:'Release decision', c:false, p:-60, f:'Wrong. Test data alone cannot approve release.' },
      { l:'To hide failed tests', s:'Misuse of data', c:false, p:-80, f:'Wrong. Test data must not be used to hide results.' }
    ]
  },

  {
    id: 112, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test execution log",
    desc: "The tester records which test procedure was run and what happened. What is this record?",
    actions: [
      { l:'Test execution log', s:'29119-2: Test execution log', c:true, p:100, f:'Correct! A test execution log records execution of test procedures.' },
      { l:'Organizational test policy', s:'Organizational process', c:false, p:-40, f:'Wrong. A policy is organization-level guidance.' },
      { l:'Test strategy', s:'Planning artifact', c:false, p:-40, f:'Wrong. A strategy defines approach, not execution records.' },
      { l:'Risk register only', s:'Risk management', c:false, p:-40, f:'Wrong. A risk register is not an execution log.' }
    ]
  },

  {
    id: 113, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test plan",
    desc: "What does a test plan mainly describe?",
    actions: [
      { l:'Test objectives and means/schedule for achieving them', s:'29119-2: Test plan', c:true, p:100, f:'Correct! A test plan coordinates testing activities.' },
      { l:'Only source code changes', s:'Development artifact', c:false, p:-50, f:'Wrong. Source code changes are not the test plan.' },
      { l:'Only customer invoices', s:'Business artifact', c:false, p:-40, f:'Wrong. This is unrelated to testing.' },
      { l:'Only final leaderboard scores', s:'Game result', c:false, p:-40, f:'Wrong. Scores are not a test plan.' }
    ]
  },

  {
    id: 114, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test monitoring",
    desc: "Testing is behind schedule. Which process helps compare progress against the plan?",
    actions: [
      { l:'Test monitoring and control', s:'29119-2: Test Monitoring and Control', c:true, p:110, f:'Correct! Monitoring and control ensures testing is performed in line with the test plan.' },
      { l:'Only test design', s:'Dynamic test design', c:false, p:-40, f:'Wrong. Test design creates test cases and procedures.' },
      { l:'Only retesting', s:'Retesting', c:false, p:-40, f:'Wrong. Retesting checks fixes.' },
      { l:'Only deployment', s:'Release activity', c:false, p:-50, f:'Wrong. Deployment does not monitor test progress.' }
    ]
  },

  {
    id: 115, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test completion",
    desc: "Testing is ending and stakeholders need a summary of results and remaining risks.",
    actions: [
      { l:'Prepare a test completion report', s:'29119-2: Test Completion', c:true, p:110, f:'Correct! Test completion records and communicates test results to stakeholders.' },
      { l:'Delete test evidence', s:'Evidence loss', c:false, p:-90, f:'Wrong. Useful test assets and results should be preserved.' },
      { l:'Stop communication', s:'Poor reporting', c:false, p:-70, f:'Wrong. Results should be communicated.' },
      { l:'Ignore remaining risks', s:'Risk hidden', c:false, p:-80, f:'Wrong. Remaining risks should be visible.' }
    ]
  },

  {
    id: 116, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test basis",
    desc: "What is the test basis used for?",
    actions: [
      { l:'Designing and implementing test cases', s:'29119-2: Test basis', c:true, p:100, f:'Correct! The test basis provides information used to design and implement tests.' },
      { l:'Replacing the test environment', s:'Environment management', c:false, p:-40, f:'Wrong. Test basis is not an environment replacement.' },
      { l:'Approving invoices', s:'Business process', c:false, p:-40, f:'Wrong. This is unrelated.' },
      { l:'Deleting incidents', s:'Incident misuse', c:false, p:-60, f:'Wrong. Incidents should be managed, not deleted.' }
    ]
  },

  {
    id: 117, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test objective",
    desc: "What is a test objective?",
    actions: [
      { l:'The reason for performing testing', s:'29119-2: Test objective', c:true, p:100, f:'Correct! A test objective explains why testing is performed.' },
      { l:'A random tester preference', s:'Uncontrolled approach', c:false, p:-40, f:'Wrong. Objectives should be defined.' },
      { l:'A password rule only', s:'Requirement detail', c:false, p:-40, f:'Wrong. A password rule may be a requirement, not the overall objective.' },
      { l:'A bug severity label', s:'Incident classification', c:false, p:-40, f:'Wrong. Severity is not the test objective.' }
    ]
  },

  {
    id: 118, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test strategy",
    desc: "What does a test strategy describe?",
    actions: [
      { l:'The approach to testing for a project, level, or type', s:'29119-2: Test strategy', c:true, p:100, f:'Correct! A test strategy describes the testing approach.' },
      { l:'Only the final score', s:'Game result', c:false, p:-40, f:'Wrong. Scores are not a strategy.' },
      { l:'Only code formatting rules', s:'Development practice', c:false, p:-40, f:'Wrong. Code formatting is not test strategy.' },
      { l:'Only employee vacation days', s:'Resource information', c:false, p:-40, f:'Wrong. Staffing may matter, but this is not the strategy itself.' }
    ]
  },

  {
    id: 119, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Risk-based testing",
    desc: "A module handles payments and has high impact if it fails. What should guide testing priority?",
    actions: [
      { l:'Risk level and impact', s:'29119-2: Risk-based testing', c:true, p:110, f:'Correct! Risk-based testing prioritizes testing based on analyzed risk.' },
      { l:'Only which tests are easiest', s:'Poor prioritization', c:false, p:-50, f:'Wrong. Easy tests should not automatically come first.' },
      { l:'Only alphabetical order of modules', s:'Arbitrary order', c:false, p:-50, f:'Wrong. Testing should be risk-informed.' },
      { l:'Only developer preference', s:'Unsupported priority', c:false, p:-50, f:'Wrong. Priority should be based on risk and objectives.' }
    ]
  },

  {
    id: 120, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test design and implementation",
    desc: "The team needs to derive test cases and test procedures. Which process is this?",
    actions: [
      { l:'Test design and implementation process', s:'29119-2: Test Design and Implementation', c:true, p:110, f:'Correct! This process derives and specifies test cases and procedures.' },
      { l:'Test completion process', s:'Completion', c:false, p:-40, f:'Wrong. Completion happens when testing is closing.' },
      { l:'Incident reporting process', s:'Incident reporting', c:false, p:-40, f:'Wrong. Incident reporting handles incidents found during execution.' },
      { l:'Organizational test process only', s:'Organizational process', c:false, p:-40, f:'Wrong. Organizational process defines organization-level specifications.' }
    ]
  },

  {
    id: 121, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test environment readiness",
    desc: "Before execution, the environment should be checked and prepared. Which process is related?",
    actions: [
      { l:'Test environment and data management', s:'29119-2: Test Environment and Data Management', c:true, p:110, f:'Correct! This process establishes and maintains required test environment and data.' },
      { l:'Only test completion', s:'Completion process', c:false, p:-40, f:'Wrong. Completion is at the end of testing.' },
      { l:'Only release approval', s:'Release decision', c:false, p:-50, f:'Wrong. Environment readiness is a testing concern.' },
      { l:'Only UI design', s:'Design activity', c:false, p:-40, f:'Wrong. UI design is unrelated.' }
    ]
  },

  {
    id: 122, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test execution process",
    desc: "A tester runs prepared procedures in the prepared environment and records results.",
    actions: [
      { l:'Test execution process', s:'29119-2: Test Execution', c:true, p:110, f:'Correct! Test execution runs procedures and records results.' },
      { l:'Test policy creation', s:'Organizational process', c:false, p:-40, f:'Wrong. Policy creation is organization-level.' },
      { l:'Risk acceptance only', s:'Risk decision', c:false, p:-40, f:'Wrong. Risk acceptance is not execution.' },
      { l:'Marketing approval', s:'Business process', c:false, p:-40, f:'Wrong. This is unrelated to testing.' }
    ]
  },

  {
    id: 123, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test type",
    desc: "Security testing and performance testing are examples of what?",
    actions: [
      { l:'Test types', s:'29119-2: Test type', c:true, p:100, f:'Correct! A test type focuses on specific quality characteristics.' },
      { l:'Bug severities', s:'Incident classification', c:false, p:-40, f:'Wrong. They are not severities.' },
      { l:'Project roles', s:'Team structure', c:false, p:-40, f:'Wrong. They are testing categories.' },
      { l:'Deployment stages only', s:'Release process', c:false, p:-40, f:'Wrong. These are not deployment stages.' }
    ]
  },

  {
    id: 124, sev: 'info', tag: 'tag-info', tl: 'INFO',
    title: "Test level",
    desc: "Unit, integration, system, and acceptance testing are examples of what?",
    actions: [
      { l:'Test levels', s:'29119-2: Test level', c:true, p:100, f:'Correct! Test levels are stages with particular objectives.' },
      { l:'Test data values', s:'Test data', c:false, p:-40, f:'Wrong. They are not data values.' },
      { l:'Incident reports', s:'Incident reporting', c:false, p:-40, f:'Wrong. They are not reports.' },
      { l:'Risk treatments only', s:'Risk treatment', c:false, p:-40, f:'Wrong. They are testing stages.' }
    ]
  },

  {
    id: 125, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Completion criteria",
    desc: "What are completion criteria?",
    actions: [
      { l:'Conditions under which testing activities are considered complete', s:'29119-2: Completion criteria', c:true, p:110, f:'Correct! Completion criteria define when testing can be considered complete.' },
      { l:'A list of developer names', s:'Staffing list', c:false, p:-40, f:'Wrong. Staffing is not completion criteria.' },
      { l:'A random deadline without conditions', s:'Weak completion control', c:false, p:-60, f:'Wrong. Completion should be criteria-based.' },
      { l:'A defect title only', s:'Incident detail', c:false, p:-40, f:'Wrong. A defect title is not completion criteria.' }
    ]
  }
];
  /* ─── MEDIUM MODE ─── */
const MEDIUM_INCIDENTS = [
  {
    id: 201, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Missing Test Plan",
    desc: "The project has already started testing, but no approved Test Plan exists.",
    actions: [
      { l:'Continue testing and write the plan later', s:'Planning skipped', c:false, p:-70, f:'Wrong. Testing without an agreed plan creates uncontrolled scope and reporting risk.' },
      { l:'Create, agree, and communicate the Test Plan before continuing', s:'29119-2: Test Strategy and Planning', c:true, p:130, f:'Correct! The Test Plan should define scope, approach, resources, schedule, and responsibilities.' },
      { l:'Ask developers to decide the testing approach', s:'Wrong ownership', c:false, p:-50, f:'Wrong. Developers may contribute, but test planning must be managed as a testing activity.' },
      { l:'Only announce the plan verbally', s:'Informal planning', c:false, p:-60, f:'Wrong. A verbal plan is not enough for control and stakeholder agreement.' }
    ]
  },

  {
    id: 202, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Unclear Requirements",
    desc: "Requirements are ambiguous, and testers are unsure what behavior should be validated.",
    actions: [
      { l:'Assume expected behavior and test anyway', s:'Assumption-based testing', c:false, p:-80, f:'Wrong. Assumptions can lead to invalid test cases and misleading results.' },
      { l:'Clarify the test basis with stakeholders before designing tests', s:'29119-2: Test Basis / Test Design', c:true, p:130, f:'Correct! The test basis must be understood before reliable test cases can be designed.' },
      { l:'Skip unclear requirements silently', s:'Hidden coverage gap', c:false, p:-90, f:'Wrong. Skipped scope must be documented and communicated.' },
      { l:'Create random test cases to save time', s:'Uncontrolled design', c:false, p:-70, f:'Wrong. Test cases should be derived from the test basis and objectives.' }
    ]
  },

  {
    id: 203, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Critical Defect Before Release",
    desc: "A severe defect is discovered one day before release and affects user login.",
    actions: [
      { l:'Fix it silently without recording anything', s:'No incident record', c:false, p:-100, f:'Wrong. A critical defect must be formally recorded and tracked.' },
      { l:'Document the incident, classify severity, and escalate immediately', s:'29119-2: Test Incident Reporting', c:true, p:150, f:'Correct! Critical incidents require timely reporting, classification, and communication to stakeholders.' },
      { l:'Ignore it because release is tomorrow', s:'Risk ignored', c:false, p:-150, f:'Wrong. Ignoring a critical defect creates severe release risk.' },
      { l:'Mention it casually after the release', s:'Delayed reporting', c:false, p:-120, f:'Wrong. Incident reporting must happen while action is still possible.' }
    ]
  },

  {
    id: 204, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Environment Mismatch",
    desc: "The test environment has much less data than production, so performance results may be misleading.",
    actions: [
      { l:'Use the results because tests completed successfully', s:'Invalid evidence', c:false, p:-90, f:'Wrong. Results from an unsuitable environment may not support release decisions.' },
      { l:'Align the environment or document limitations and risk', s:'29119-2: Test Environment and Data Management', c:true, p:140, f:'Correct! The environment must support valid testing, and limitations must be visible.' },
      { l:'Delete the performance results', s:'Evidence removal', c:false, p:-100, f:'Wrong. Invalid or limited evidence should be documented, not hidden.' },
      { l:'Blame the infrastructure team only', s:'Blame response', c:false, p:-50, f:'Wrong. The priority is controlling the environment issue and reporting impact.' }
    ]
  },

  {
    id: 205, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Incomplete Test Coverage",
    desc: "Only 60% of planned test cases were executed before the deadline.",
    actions: [
      { l:'Mark testing complete to meet the deadline', s:'False completion', c:false, p:-120, f:'Wrong. Completion must be based on evidence and criteria, not pressure.' },
      { l:'Report coverage, remaining tests, and release risk', s:'29119-2: Test Monitoring and Control', c:true, p:140, f:'Correct! Progress, gaps, and risks must be communicated for informed decisions.' },
      { l:'Delete remaining tests from the plan', s:'Scope manipulation', c:false, p:-130, f:'Wrong. Removing tests to look complete misleads stakeholders.' },
      { l:'Hide missing tests from the report', s:'Misleading reporting', c:false, p:-140, f:'Wrong. Test reporting must include limitations and risks.' }
    ]
  },

  {
    id: 206, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Bug Report Without Steps",
    desc: "Developers cannot reproduce reported defects because tickets lack steps, expected results, and environment details.",
    actions: [
      { l:'Change the ticket tool immediately', s:'Tool blame', c:false, p:-40, f:'Wrong. The problem is report quality, not necessarily the tool.' },
      { l:'Define incident reporting rules and update weak reports', s:'29119-2: Incident Report Quality', c:true, p:120, f:'Correct! Incident reports should include enough information for analysis and reproduction.' },
      { l:'Tell developers to figure it out', s:'Poor collaboration', c:false, p:-70, f:'Wrong. Testers are responsible for clear and actionable incident reports.' },
      { l:'Close vague reports without review', s:'False closure', c:false, p:-90, f:'Wrong. Reports should be improved, not discarded.' }
    ]
  },

  {
    id: 207, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Unexpected Behavior Without Requirement",
    desc: "The system behaves strangely, but there is no clear requirement explaining expected behavior.",
    actions: [
      { l:'Log a critical defect immediately without checking', s:'Premature classification', c:false, p:-50, f:'Not enough. The expected behavior must first be clarified.' },
      { l:'Clarify expected behavior and update the test basis if needed', s:'29119-2: Test Basis / Test Design', c:true, p:120, f:'Correct! Testing requires a clear expected result based on a valid test basis.' },
      { l:'Ignore the behavior completely', s:'Risk ignored', c:false, p:-80, f:'Wrong. Unexpected behavior should be investigated.' },
      { l:'Fix the code yourself', s:'Wrong role', c:false, p:-70, f:'Wrong. The tester should report evidence, not directly modify product code.' }
    ]
  },

  {
    id: 208, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Management Pressure",
    desc: "Management asks the team to release even though several planned tests are not executed.",
    actions: [
      { l:'Agree to release without reporting gaps', s:'Hidden risk', c:false, p:-130, f:'Wrong. Release pressure does not remove the need for transparent test reporting.' },
      { l:'Document test status, risks, and escalate the decision', s:'29119-2: Test Completion / Monitoring', c:true, p:150, f:'Correct! The test manager reports evidence and risk; release authority decides.' },
      { l:'Block release alone without communication', s:'Authority issue', c:false, p:-50, f:'Wrong. The correct action is evidence-based escalation.' },
      { l:'Ignore management request', s:'Poor communication', c:false, p:-60, f:'Wrong. Stakeholders must receive clear testing status.' }
    ]
  },

  {
    id: 209, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Automation Pipeline Failure",
    desc: "The CI/CD test automation pipeline has been down for six hours before release testing.",
    actions: [
      { l:'Skip automated tests and approve release', s:'Missing evidence', c:false, p:-110, f:'Wrong. Missing automation evidence creates coverage risk.' },
      { l:'Open an infrastructure incident and assess manual fallback', s:'29119-2: Test Environment / Infrastructure', c:true, p:130, f:'Correct! Infrastructure problems should be recorded, coordinated, and assessed for impact.' },
      { l:'Pretend automation passed', s:'False reporting', c:false, p:-150, f:'Wrong. False reporting destroys test integrity.' },
      { l:'Blame the DevOps team and stop communication', s:'Blame response', c:false, p:-50, f:'Wrong. Coordination and risk control are needed.' }
    ]
  },

  {
    id: 210, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Outdated Test Plan",
    desc: "Project scope changed significantly, but the Test Plan still reflects the old scope.",
    actions: [
      { l:'Keep using the old plan because it was approved', s:'Outdated planning', c:false, p:-90, f:'Wrong. A plan must remain aligned with the current project scope.' },
      { l:'Update the Test Plan with changed scope, risks, and schedule', s:'29119-2: Test Strategy and Planning', c:true, p:130, f:'Correct! The Test Plan should be maintained when scope or risk changes.' },
      { l:'Only send a short email and continue', s:'Informal update', c:false, p:-50, f:'Wrong. Communication helps, but the formal plan should be updated.' },
      { l:'Delete old plan and test randomly', s:'Uncontrolled testing', c:false, p:-100, f:'Wrong. Testing still needs a controlled plan.' }
    ]
  },

  {
    id: 211, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Duplicate Defect Reports",
    desc: "The same defect has been reported by three testers with slightly different descriptions.",
    actions: [
      { l:'Delete all reports immediately', s:'Evidence loss', c:false, p:-90, f:'Wrong. At least one valid traceable record must remain.' },
      { l:'Merge duplicates and keep one traceable main record', s:'29119-2: Incident Management', c:true, p:120, f:'Correct! Duplicates should be consolidated without losing useful information.' },
      { l:'Ignore duplicates because they are harmless', s:'Poor control', c:false, p:-60, f:'Wrong. Duplicates distort metrics and tracking.' },
      { l:'Close the oldest report without review', s:'Uncontrolled closure', c:false, p:-70, f:'Wrong. Closure should be reviewed and justified.' }
    ]
  },

  {
    id: 212, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "High-Risk Feature Tested Last",
    desc: "Low-risk UI tests are complete, but payment and authentication tests remain unexecuted.",
    actions: [
      { l:'Continue with the original order no matter what', s:'Rigid execution', c:false, p:-70, f:'Wrong. Monitoring may require priority changes.' },
      { l:'Reprioritize remaining testing based on product risk', s:'29119-2: Risk-based Testing', c:true, p:140, f:'Correct! High-risk areas should receive priority.' },
      { l:'Skip payment tests to save time', s:'Coverage gap', c:false, p:-120, f:'Wrong. High-risk areas cannot be skipped silently.' },
      { l:'Report only completed UI tests', s:'Selective reporting', c:false, p:-90, f:'Wrong. Reporting must include remaining risks.' }
    ]
  },

  {
    id: 213, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Missing Execution Evidence",
    desc: "Several test cases are marked as passed, but there are no logs, screenshots, or execution notes.",
    actions: [
      { l:'Trust the tester’s memory', s:'No evidence', c:false, p:-70, f:'Wrong. Test execution should be auditable.' },
      { l:'Collect evidence or re-execute affected tests', s:'29119-2: Test Execution', c:true, p:120, f:'Correct! Passed results should be supported by execution evidence.' },
      { l:'Remove those tests from scope', s:'Scope manipulation', c:false, p:-90, f:'Wrong. Missing evidence must be corrected, not hidden.' },
      { l:'Mark them failed automatically without checking', s:'Incorrect conclusion', c:false, p:-30, f:'Not necessarily. First obtain evidence or re-execute.' }
    ]
  },

  {
    id: 214, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Requirement Changed After Test Design",
    desc: "A checkout requirement changed after the test cases were already designed.",
    actions: [
      { l:'Run the old test cases unchanged', s:'Outdated test basis', c:false, p:-80, f:'Wrong. Old tests may validate obsolete behavior.' },
      { l:'Assess impact and update affected test cases', s:'29119-2: Test Design and Implementation', c:true, p:130, f:'Correct! Test cases must stay aligned with the current test basis.' },
      { l:'Ignore the new requirement', s:'Scope miss', c:false, p:-100, f:'Wrong. Requirement changes affect test scope.' },
      { l:'Cancel all checkout testing', s:'Overreaction', c:false, p:-60, f:'Wrong. Update affected tests instead.' }
    ]
  },

  {
    id: 215, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Flaky Test Blocks Confidence",
    desc: "A test sometimes passes and sometimes fails without any code changes.",
    actions: [
      { l:'Count it as passed if it passed once', s:'False confidence', c:false, p:-90, f:'Wrong. One passing run does not prove reliability.' },
      { l:'Investigate instability and mark the test as unreliable until fixed', s:'29119-2: Test Maintenance', c:true, p:120, f:'Correct! Flaky tests reduce trust in results and must be investigated.' },
      { l:'Always ignore flaky failures', s:'Risk hidden', c:false, p:-80, f:'Wrong. Flakiness can hide real defects.' },
      { l:'Delete the test immediately', s:'Coverage loss', c:false, p:-70, f:'Wrong. Investigate before removing coverage.' }
    ]
  },

  {
    id: 216, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Completion Report Hides Limitations",
    desc: "The completion report shows pass rate but does not mention untested critical scenarios.",
    actions: [
      { l:'Keep the report positive for stakeholders', s:'Misleading report', c:false, p:-110, f:'Wrong. Reports must be accurate, not only positive.' },
      { l:'Add untested scope, limitations, and residual risks', s:'29119-2: Test Completion', c:true, p:140, f:'Correct! Test completion reporting must communicate remaining risk.' },
      { l:'Delete untested scenarios from the plan', s:'Scope manipulation', c:false, p:-130, f:'Wrong. Do not alter scope to hide gaps.' },
      { l:'Report only number of passed tests', s:'Incomplete reporting', c:false, p:-70, f:'Wrong. Pass rate alone is not enough.' }
    ]
  },

  {
    id: 217, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident Severity Disagreement",
    desc: "Developers classify a defect as minor, but testers believe it has high user impact.",
    actions: [
      { l:'Let developers decide alone', s:'One-sided decision', c:false, p:-60, f:'Wrong. Classification should follow agreed criteria.' },
      { l:'Use agreed severity criteria and document rationale', s:'29119-2: Incident Reporting', c:true, p:120, f:'Correct! Severity should be based on defined criteria and evidence.' },
      { l:'Let testers decide alone', s:'One-sided decision', c:false, p:-50, f:'Wrong. Shared severity rules should be used.' },
      { l:'Ignore severity and continue', s:'No prioritization', c:false, p:-70, f:'Wrong. Severity affects prioritization and risk.' }
    ]
  },

  {
    id: 218, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Production-Like Browser Not Tested",
    desc: "Most users use Safari, but all acceptance tests were executed only on Chrome.",
    actions: [
      { l:'Assume Chrome results are enough', s:'Unsupported assumption', c:false, p:-80, f:'Wrong. Browser differences can create real failures.' },
      { l:'Document the coverage gap and execute priority Safari tests', s:'29119-2: Test Planning and Execution', c:true, p:130, f:'Correct! Test coverage should reflect realistic user environments.' },
      { l:'Remove Safari from scope silently', s:'Hidden scope reduction', c:false, p:-100, f:'Wrong. Scope changes must be documented and approved.' },
      { l:'Tell users to avoid Safari', s:'Avoidance', c:false, p:-60, f:'Wrong. Testing should match expected usage.' }
    ]
  },

  {
    id: 219, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Test Data Privacy Concern",
    desc: "A tester copied real customer data into a shared test environment.",
    actions: [
      { l:'Continue because real data is more realistic', s:'Privacy risk ignored', c:false, p:-120, f:'Wrong. Realism does not justify unsafe data handling.' },
      { l:'Stop unsafe use, document issue, and replace with controlled test data', s:'29119-2: Test Environment and Data Management', c:true, p:130, f:'Correct! Test data must be controlled, especially when privacy risks exist.' },
      { l:'Delete evidence and move on', s:'Concealment', c:false, p:-130, f:'Wrong. The issue must be documented and corrected.' },
      { l:'Only warn the tester privately', s:'Insufficient response', c:false, p:-50, f:'Wrong. The data management process must be corrected.' }
    ]
  },

  {
    id: 220, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Misleading Pass Rate",
    desc: "The test report shows 95% pass rate, but high-risk scenarios were not executed.",
    actions: [
      { l:'Use pass rate alone to approve release', s:'Misleading metric', c:false, p:-130, f:'Wrong. A high pass rate can hide untested critical areas.' },
      { l:'Report pass rate together with coverage gaps and risk', s:'29119-2: Test Monitoring and Control', c:true, p:140, f:'Correct! Metrics must be interpreted with coverage and risk context.' },
      { l:'Hide unexecuted scenarios', s:'Concealment', c:false, p:-150, f:'Wrong. Gaps must be transparent.' },
      { l:'Delete critical scenarios from scope', s:'Scope manipulation', c:false, p:-140, f:'Wrong. Scope changes must be approved.' }
    ]
  },

  {
    id: 221, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Defect Lifecycle Unclear",
    desc: "Some defects move from Open to Closed without retesting or verification.",
    actions: [
      { l:'Trust closure without verification', s:'Weak control', c:false, p:-80, f:'Wrong. Closure should be supported by evidence.' },
      { l:'Define and enforce workflow with verification before closure', s:'29119-2: Incident Management', c:true, p:120, f:'Correct! Defect closure should be controlled and verified.' },
      { l:'Keep every defect open forever', s:'No lifecycle control', c:false, p:-50, f:'Wrong. Defects need controlled closure.' },
      { l:'Let anyone close defects anytime', s:'Uncontrolled workflow', c:false, p:-100, f:'Wrong. Roles and workflow should be clear.' }
    ]
  },

  {
    id: 222, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Late Requirement Change Affects Evidence",
    desc: "A tax calculation rule changed after related tests had already passed.",
    actions: [
      { l:'Keep old results because they passed', s:'Outdated evidence', c:false, p:-120, f:'Wrong. Results may no longer apply.' },
      { l:'Assess impact, update tests, and identify invalidated evidence', s:'29119-2: Test Planning and Design', c:true, p:150, f:'Correct! A changed test basis can invalidate previous test evidence.' },
      { l:'Ignore the rule because it changed late', s:'Scope miss', c:false, p:-130, f:'Wrong. Late changes still require impact assessment.' },
      { l:'Approve release if old tests passed', s:'Invalid decision', c:false, p:-140, f:'Wrong. The evidence may be invalid.' }
    ]
  },

  {
    id: 223, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Exploratory Testing Finds Issue",
    desc: "A tester finds a defect outside the scripted test cases.",
    actions: [
      { l:'Ignore it because it was not scripted', s:'Coverage blindness', c:false, p:-80, f:'Wrong. Real defects matter even outside scripted tests.' },
      { l:'Log the incident and consider adding coverage for that scenario', s:'29119-2: Incident Reporting + Test Design', c:true, p:110, f:'Correct! Unexpected findings should be recorded and can improve future coverage.' },
      { l:'Tell testers not to explore', s:'Poor testing practice', c:false, p:-60, f:'Wrong. Exploratory findings can be valuable.' },
      { l:'Fail the entire test suite', s:'Overreaction', c:false, p:-40, f:'Wrong. Log the specific incident.' }
    ]
  },

  {
    id: 224, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Release Readiness Lacks Evidence",
    desc: "Management asks whether release is ready, but test evidence is fragmented across tools.",
    actions: [
      { l:'Give only verbal opinion', s:'Unsupported opinion', c:false, p:-100, f:'Wrong. Release decisions need evidence.' },
      { l:'Prepare consolidated evidence: coverage, defects, risks, limitations', s:'29119-2: Test Completion', c:true, p:150, f:'Correct! Release readiness requires consolidated and understandable test evidence.' },
      { l:'Show only successful tests', s:'Selective evidence', c:false, p:-120, f:'Wrong. Risks and limitations must be included.' },
      { l:'Avoid the meeting', s:'Poor communication', c:false, p:-80, f:'Wrong. Test management must communicate status.' }
    ]
  },

  {
    id: 225, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    title: "Incident Report Missing Environment",
    desc: "A mobile defect appears only on Safari, but the incident report does not mention browser or device.",
    actions: [
      { l:'Ask developers to guess the environment', s:'Poor reporting', c:false, p:-80, f:'Wrong. Reports should be actionable.' },
      { l:'Update report with device, browser, environment, and reproduction details', s:'29119-2: Incident Report Quality', c:true, p:120, f:'Correct! Environment details are essential for reproduction and analysis.' },
      { l:'Close it as not reproducible immediately', s:'Premature closure', c:false, p:-90, f:'Wrong. Improve the report before closure.' },
      { l:'Lower severity because details are missing', s:'Wrong triage', c:false, p:-60, f:'Wrong. Missing details should be corrected, not used to reduce severity.' }
    ]
  }
];
/* ─── HARD MODE ─── */
const HARD_INCIDENTS = [
  {
    id: 301, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Conflicting Release Decision",
    desc: "Business demands release, security blocks it, and testing shows unresolved high-risk defects.",
    actions: [
      { l:'Approve release to satisfy business pressure', s:'Pressure-driven release', c:false, p:-220, f:'Wrong. Release pressure must not override unresolved critical risk.' },
      { l:'Prepare evidence-based risk report and escalate to release authority', s:'29119-2: Test Completion + Governance', c:true, p:220, f:'Correct! The test manager provides evidence and risk; the release authority makes the decision.' },
      { l:'Block release alone without communication', s:'Authority issue', c:false, p:-90, f:'Wrong. The correct action is structured escalation, not unilateral blocking.' },
      { l:'Hide the security objection from the report', s:'Concealment', c:false, p:-240, f:'Wrong. Hiding stakeholder risk concerns is a serious reporting failure.' }
    ]
  },

  {
    id: 302, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Invalid Performance Evidence",
    desc: "Performance tests passed, but later the team discovers the test environment had half the production capacity.",
    actions: [
      { l:'Use results because they passed', s:'Invalid evidence', c:false, p:-200, f:'Wrong. Passing results from an invalid environment cannot support release confidence.' },
      { l:'Invalidate affected results, document impact, and escalate release risk', s:'29119-2: Test Environment + Test Result Evaluation', c:true, p:210, f:'Correct! Invalid evidence must be identified, documented, and communicated.' },
      { l:'Hide environment difference to avoid delay', s:'Concealment', c:false, p:-230, f:'Wrong. Environment limitations must be reported.' },
      { l:'Retest only after release', s:'Deferred validation', c:false, p:-140, f:'Wrong. The release decision currently lacks valid evidence.' }
    ]
  },

  {
    id: 303, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Test Coverage Manipulated",
    desc: "The team marks unexecuted tests as passed to reach 100% coverage before the deadline.",
    actions: [
      { l:'Accept it because the deadline is fixed', s:'False completion', c:false, p:-220, f:'Wrong. Deadlines do not justify false test results.' },
      { l:'Correct the records, report the manipulation, and restore truthful status', s:'29119-2: Test Monitoring and Reporting Integrity', c:true, p:230, f:'Correct! Test status must reflect real execution evidence.' },
      { l:'Delete the unexecuted tests from scope', s:'Scope manipulation', c:false, p:-210, f:'Wrong. Removing tests to improve metrics is misleading.' },
      { l:'Keep the dashboard green and explain later', s:'Misleading reporting', c:false, p:-200, f:'Wrong. Stakeholders need truthful status now.' }
    ]
  },

  {
    id: 304, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Security Fix Breaks Usability",
    desc: "A security fix blocks SQL injection but makes login fail for some valid users.",
    actions: [
      { l:'Release because security is more important than usability', s:'Single-risk decision', c:false, p:-150, f:'Wrong. Security risk is important, but regression impact must also be evaluated.' },
      { l:'Evaluate both security fix verification and regression impact, then escalate residual risk', s:'29119-2: Retesting + Regression Testing', c:true, p:190, f:'Correct! A fix must be verified while also checking unintended side effects.' },
      { l:'Rollback the security fix immediately without analysis', s:'Overreaction', c:false, p:-130, f:'Wrong. Rolling back may reintroduce critical security risk.' },
      { l:'Hide the login regression to keep the security fix approved', s:'Concealment', c:false, p:-220, f:'Wrong. Known regressions must be reported.' }
    ]
  },

  {
    id: 305, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Fake Test Evidence Request",
    desc: "A manager asks the test team to adjust the completion report so the project looks ready.",
    actions: [
      { l:'Modify the report slightly to avoid conflict', s:'Misleading reporting', c:false, p:-200, f:'Wrong. Even small manipulation damages integrity.' },
      { l:'Refuse falsification and keep the report evidence-based', s:'29119-2: Test Reporting Integrity', c:true, p:230, f:'Correct! Test reports must accurately reflect evidence, risks, and limitations.' },
      { l:'Delete negative results from the report', s:'Evidence falsification', c:false, p:-260, f:'Wrong. Removing negative evidence is a severe violation.' },
      { l:'Ignore the manager without documenting the issue', s:'Poor escalation', c:false, p:-80, f:'Incomplete. The report must remain accurate and escalation may be needed.' }
    ]
  },

  {
    id: 306, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Unreproducible Critical Bug",
    desc: "A severe data-loss bug appears intermittently and cannot be consistently reproduced.",
    actions: [
      { l:'Close the bug because it is not always reproducible', s:'Premature closure', c:false, p:-170, f:'Wrong. Intermittent critical bugs still represent serious risk.' },
      { l:'Treat it as high-risk, collect evidence, and escalate uncertainty', s:'29119-2: Incident Evaluation', c:true, p:210, f:'Correct! Severity and uncertainty must be communicated with available evidence.' },
      { l:'Lower severity because reproduction is difficult', s:'Severity error', c:false, p:-160, f:'Wrong. Severity is based on impact, not convenience.' },
      { l:'Ignore until users report it after release', s:'Reactive testing', c:false, p:-200, f:'Wrong. Known serious risk must be managed before release.' }
    ]
  },

  {
    id: 307, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Untested Release Build",
    desc: "The final release build was created from a different branch than the tested candidate.",
    actions: [
      { l:'Use previous test results because changes look small', s:'Invalid configuration evidence', c:false, p:-200, f:'Wrong. Test evidence applies to the tested configuration.' },
      { l:'Invalidate previous evidence for final build and require targeted verification', s:'29119-2: Configuration + Test Control', c:true, p:220, f:'Correct! A different build requires verification before release confidence can be claimed.' },
      { l:'Approve if branch names are similar', s:'Assumption', c:false, p:-160, f:'Wrong. Branch similarity is not test evidence.' },
      { l:'Hide the mismatch to avoid delaying release', s:'Concealment', c:false, p:-230, f:'Wrong. Configuration mismatch must be reported.' }
    ]
  },

  {
    id: 308, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Compliance Test Skipped",
    desc: "A legally required compliance scenario was not executed before release.",
    actions: [
      { l:'Release because the deadline is contractual', s:'Compliance risk ignored', c:false, p:-240, f:'Wrong. A deadline does not remove compliance risk.' },
      { l:'Escalate compliance gap with evidence and obtain release authority decision', s:'29119-2: Risk-based Test Completion', c:true, p:230, f:'Correct! Compliance gaps require clear escalation and documented decision-making.' },
      { l:'Mark the compliance test as passed', s:'False evidence', c:false, p:-300, f:'Wrong. This is a severe integrity violation.' },
      { l:'Remove the compliance scenario from scope silently', s:'Scope manipulation', c:false, p:-240, f:'Wrong. Scope changes require approval and rationale.' }
    ]
  },

  {
    id: 309, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Defect Severity Manipulation",
    desc: "A critical defect is downgraded to medium so release criteria appear satisfied.",
    actions: [
      { l:'Accept the downgrade to avoid conflict', s:'Metric manipulation', c:false, p:-160, f:'Wrong. Severity must reflect real impact.' },
      { l:'Challenge classification using agreed severity criteria and document rationale', s:'29119-2: Incident Classification', c:true, p:190, f:'Correct! Classification should be evidence-based and consistent with agreed criteria.' },
      { l:'Delete the defect from the report', s:'Concealment', c:false, p:-230, f:'Wrong. Defect evidence must not be hidden.' },
      { l:'Escalate emotionally without evidence', s:'Poor escalation', c:false, p:-70, f:'Wrong. Escalation should be evidence-based.' }
    ]
  },

  {
    id: 310, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Post-Release Critical Failure",
    desc: "A critical production issue appears shortly after test completion and release.",
    actions: [
      { l:'Blame one tester and close the matter', s:'Blame culture', c:false, p:-110, f:'Wrong. Escaped defects require process analysis, not blame.' },
      { l:'Start incident review, analyze escaped defect, and improve test controls', s:'29119-2: Incident Management + Process Improvement', c:true, p:210, f:'Correct! The team should analyze why the issue escaped and improve the process.' },
      { l:'Delete old test records', s:'Evidence destruction', c:false, p:-240, f:'Wrong. Test evidence is needed for review.' },
      { l:'Claim testing was unrelated without analysis', s:'Accountability avoidance', c:false, p:-150, f:'Wrong. Testing effectiveness should be reviewed.' }
    ]
  },

  {
    id: 311, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Risk Acceptance Not Documented",
    desc: "Management verbally accepts release risk, but there is no written record of who accepted it and why.",
    actions: [
      { l:'Proceed because verbal approval is enough', s:'No audit trail', c:false, p:-140, f:'Wrong. Risk acceptance must be traceable and documented.' },
      { l:'Record decision owner, rationale, and residual risks', s:'29119-2: Test Completion + Risk Reporting', c:true, p:190, f:'Correct! Accepted risk is not resolved risk; it needs rationale and ownership.' },
      { l:'Close all accepted risks as resolved', s:'False risk closure', c:false, p:-180, f:'Wrong. Accepted risks still exist.' },
      { l:'Remove the risk from the report', s:'Concealment', c:false, p:-220, f:'Wrong. Removing known risk misleads stakeholders.' }
    ]
  },

  {
    id: 312, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Rollback Plan Untested",
    desc: "A risky database migration will be released tonight, but the rollback procedure has never been tested.",
    actions: [
      { l:'Assume rollback works because the script exists', s:'Unsupported assumption', c:false, p:-170, f:'Wrong. A rollback script is not evidence that rollback works.' },
      { l:'Report rollback test gap and execute priority rollback validation', s:'29119-2: Risk-based Test Planning', c:true, p:220, f:'Correct! Untested rollback creates severe operational risk.' },
      { l:'Release and test rollback later', s:'Deferred validation', c:false, p:-220, f:'Wrong. Rollback risk matters before release.' },
      { l:'Remove rollback from documentation', s:'Concealment', c:false, p:-230, f:'Wrong. Hiding missing rollback evidence is unacceptable.' }
    ]
  },

  {
    id: 313, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Outsourced Test Evidence Unreliable",
    desc: "A vendor reports 100% pass rate but provides no logs, screenshots, defect records, or execution evidence.",
    actions: [
      { l:'Accept the vendor report because it says 100%', s:'Blind trust', c:false, p:-150, f:'Wrong. External results still require evidence.' },
      { l:'Request evidence, assess confidence, and document limitations', s:'29119-2: Test Reporting + Evidence Control', c:true, p:190, f:'Correct! Vendor results must be supported by evidence and limitations must be visible.' },
      { l:'Reject all vendor testing without review', s:'Overreaction', c:false, p:-80, f:'Wrong. The right action is evidence assessment.' },
      { l:'Copy the pass rate into the final report only', s:'Incomplete reporting', c:false, p:-120, f:'Wrong. A pass rate without evidence is weak.' }
    ]
  },

  {
    id: 314, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Production Secrets in Test Environment",
    desc: "Production API keys are found inside the shared test environment configuration.",
    actions: [
      { l:'Share the keys with testers to continue testing', s:'Access control failure', c:false, p:-240, f:'Wrong. This increases exposure and security risk.' },
      { l:'Treat as security incident, revoke secrets, document impact, and fix controls', s:'29119-2: Environment Management + Incident Reporting', c:true, p:230, f:'Correct! Secret exposure requires containment, documentation, and preventive controls.' },
      { l:'Delete the keys silently', s:'Incomplete incident handling', c:false, p:-130, f:'Wrong. Revocation and incident documentation are also required.' },
      { l:'Ignore because the test environment is internal', s:'Security assumption', c:false, p:-180, f:'Wrong. Internal exposure can still be critical.' }
    ]
  },

  {
    id: 315, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Audit Asks for Traceability",
    desc: "An auditor asks for traceability from requirement to test case to execution result to defect record.",
    actions: [
      { l:'Create fake links quickly to satisfy audit', s:'False traceability', c:false, p:-230, f:'Wrong. Fabricating evidence is a serious integrity violation.' },
      { l:'Provide traceable evidence and identify documented gaps', s:'29119-2: Test Documentation', c:true, p:180, f:'Correct! Traceability supports auditability and confidence in test results.' },
      { l:'Provide only screenshots', s:'Partial evidence', c:false, p:-80, f:'Wrong. Screenshots alone do not show full traceability.' },
      { l:'Refuse the audit request', s:'Poor governance', c:false, p:-100, f:'Wrong. Test evidence should be available and reviewable.' }
    ]
  },

  {
    id: 316, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Privacy Breach During Testing",
    desc: "A tester exported personal customer data to a personal laptop to prepare test data faster.",
    actions: [
      { l:'Ask tester to delete it and move on', s:'Insufficient response', c:false, p:-170, f:'Wrong. The breach must be assessed, documented, and contained.' },
      { l:'Declare incident, secure data, notify responsible parties, and correct data process', s:'29119-2: Incident + Test Data Management', c:true, p:230, f:'Correct! Personal data exposure is a critical incident and requires formal handling.' },
      { l:'Ignore because it was for testing', s:'Privacy risk ignored', c:false, p:-220, f:'Wrong. Testing does not remove privacy obligations.' },
      { l:'Hide from management to protect the tester', s:'Concealment', c:false, p:-240, f:'Wrong. Concealment increases organizational risk.' }
    ]
  },

  {
    id: 317, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Completion Criteria Conflict",
    desc: "Coverage target is met, but two critical defects remain open.",
    actions: [
      { l:'Release because coverage target is met', s:'Single-criterion decision', c:false, p:-170, f:'Wrong. Meeting one criterion does not cancel critical defect risk.' },
      { l:'Report criteria conflict and escalate release decision with residual risk', s:'29119-2: Test Completion', c:true, p:200, f:'Correct! Completion decisions must consider all criteria and remaining risks.' },
      { l:'Close defects to satisfy criteria', s:'False closure', c:false, p:-230, f:'Wrong. Criteria must not be manipulated.' },
      { l:'Ignore coverage because defects exist', s:'Incomplete analysis', c:false, p:-80, f:'Wrong. Both coverage and defect status matter.' }
    ]
  },

  {
    id: 318, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Final Build Differs From Tested Build",
    desc: "The final release candidate was built from a different branch than the one used during testing.",
    actions: [
      { l:'Use previous test results because changes look small', s:'Invalid evidence', c:false, p:-210, f:'Wrong. Test evidence applies to the tested configuration.' },
      { l:'Invalidate prior evidence for final build and require targeted verification', s:'29119-2: Configuration + Test Control', c:true, p:230, f:'Correct! A different build invalidates confidence from previous test evidence.' },
      { l:'Approve if branch names are similar', s:'Assumption', c:false, p:-160, f:'Wrong. Configuration identity matters.' },
      { l:'Hide the branch mismatch', s:'Concealment', c:false, p:-240, f:'Wrong. Configuration mismatch must be reported.' }
    ]
  },

  {
    id: 319, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Coverage Dashboard Inaccurate",
    desc: "Dashboard shows 100% coverage, but several test cases are obsolete and no longer match requirements.",
    actions: [
      { l:'Trust dashboard blindly', s:'Metric misuse', c:false, p:-130, f:'Wrong. Metrics require interpretation and validation.' },
      { l:'Review coverage validity and update dashboard with limitations', s:'29119-2: Monitoring + Test Maintenance', c:true, p:180, f:'Correct! Coverage metrics must reflect valid and current test assets.' },
      { l:'Hide obsolete tests', s:'Concealment', c:false, p:-160, f:'Wrong. Test asset quality problems should be corrected.' },
      { l:'Delete the dashboard', s:'Overreaction', c:false, p:-70, f:'Wrong. Fix the data quality instead.' }
    ]
  },

  {
    id: 320, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Emergency Fix Lacks Test Record",
    desc: "A critical production hotfix was tested informally, but no execution evidence or test record exists.",
    actions: [
      { l:'Accept verbal confirmation only', s:'No evidence', c:false, p:-160, f:'Wrong. Verbal confirmation is weak evidence.' },
      { l:'Create formal test record, capture evidence, and assess residual risk', s:'29119-2: Test Execution + Incident Control', c:true, p:210, f:'Correct! Emergency context still requires traceable evidence.' },
      { l:'Skip documentation because it was emergency', s:'Process bypass', c:false, p:-190, f:'Wrong. Documentation is especially important under pressure.' },
      { l:'Mark all related tests as passed', s:'False evidence', c:false, p:-230, f:'Wrong. Only executed tests with evidence can pass.' }
    ]
  },

  {
    id: 321, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Different Teams Use Different Defect Workflows",
    desc: "One team closes defects after developer fix; another requires tester verification before closure.",
    actions: [
      { l:'Let each team do whatever they prefer', s:'Process inconsistency', c:false, p:-110, f:'Wrong. Inconsistent workflows distort defect status.' },
      { l:'Standardize defect workflow and define verification responsibility', s:'29119-2: Incident Management Process', c:true, p:180, f:'Correct! A clear workflow improves consistency and traceability.' },
      { l:'Remove verification step for speed', s:'Weak control', c:false, p:-150, f:'Wrong. Verification supports reliable closure.' },
      { l:'Block all defect closure forever', s:'No lifecycle control', c:false, p:-80, f:'Wrong. Defects need controlled closure, not no closure.' }
    ]
  },

  {
    id: 322, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Data Corruption Defect Is Rare But Severe",
    desc: "A defect corrupts financial records only under rare conditions, but the condition is realistic.",
    actions: [
      { l:'Release because it is rare', s:'Probability-only reasoning', c:false, p:-190, f:'Wrong. Severity depends on impact as well as likelihood.' },
      { l:'Escalate critical risk with evidence and prevent unsupported release decision', s:'29119-2: Critical Incident + Completion Risk', c:true, p:230, f:'Correct! Rare but severe defects can still block release readiness.' },
      { l:'Mention it only verbally', s:'No audit trail', c:false, p:-150, f:'Wrong. Critical risk must be documented.' },
      { l:'Lower severity to avoid blocking release', s:'Severity manipulation', c:false, p:-230, f:'Wrong. Severity should reflect real impact.' }
    ]
  },

  {
    id: 323, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Stakeholder Asks for Green Dashboard Only",
    desc: "Management wants a simplified report that excludes open risks and limitations.",
    actions: [
      { l:'Remove risks to make dashboard green', s:'Misleading reporting', c:false, p:-210, f:'Wrong. This hides release risk.' },
      { l:'Provide a clear summary while preserving risk and limitation visibility', s:'29119-2: Test Reporting', c:true, p:190, f:'Correct! Reports can be concise but must not hide known risks.' },
      { l:'Refuse to report anything', s:'Poor communication', c:false, p:-90, f:'Wrong. Communicate professionally with evidence.' },
      { l:'Change defect statuses to improve dashboard', s:'Metric manipulation', c:false, p:-230, f:'Wrong. Status must reflect reality.' }
    ]
  },

  {
    id: 324, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
    title: "Security Fix Bypasses Normal Test Process",
    desc: "A security fix is merged directly into release branch without impact analysis because the team is under pressure.",
    actions: [
      { l:'Approve because security fixes are always safe', s:'Unsafe assumption', c:false, p:-180, f:'Wrong. Security fixes can still create regressions.' },
      { l:'Assess change impact, define targeted regression, and document residual risk', s:'29119-2: Change Impact + Regression Control', c:true, p:220, f:'Correct! Even urgent security fixes need controlled verification.' },
      { l:'Skip regression to save time', s:'Untested change', c:false, p:-210, f:'Wrong. Late changes can introduce severe regression.' },
      { l:'Run unrelated smoke tests only', s:'Insufficient evidence', c:false, p:-100, f:'Wrong. Tests should match change impact.' }
    ]
  },

  {
    id: 325, sev: 'high', tag: 'tag-high', tl: 'HIGH',
    title: "Test Process Tailoring Not Justified",
    desc: "The team skips formal incident reporting and says the project is agile, but no tailoring rationale is documented.",
    actions: [
      { l:'Accept skipping because agile teams do not need documentation', s:'Misunderstood tailoring', c:false, p:-160, f:'Wrong. Tailoring does not mean ignoring process without rationale.' },
      { l:'Document tailoring decision, rationale, risks, and stakeholder agreement', s:'29119-2: Tailored Conformance', c:true, p:200, f:'Correct! Tailoring decisions should be justified, recorded, and agreed with stakeholders.' },
      { l:'Hide incidents in chat only', s:'No traceability', c:false, p:-180, f:'Wrong. Incident information still needs traceability.' },
      { l:'Claim full conformance without evidence', s:'False conformance', c:false, p:-220, f:'Wrong. Conformance claims must match actual process evidence.' }
    ]
  }
];
const INCIDENT_POOLS = {
  easy: EASY_INCIDENTS,
  medium: MEDIUM_INCIDENTS,
  hard: HARD_INCIDENTS
};

const ALL_INCIDENTS = EASY_INCIDENTS;