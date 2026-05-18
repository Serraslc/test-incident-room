const EASY_INCIDENTS = [
  {
    id: 101, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "What is testing?",
    desc: "According to ISO 29119-2, what is the main idea of testing?",
    actions: [
      { l: 'Executing and evaluating a test item', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Testing includes execution, observation, and evaluation of results.' },
      { l: 'Only fixing defects in code', s: 'Development activity', c: false, p: -60, f: 'Wrong. Testing identifies or evaluates defects; fixing is development work.' },
      { l: 'Only writing documentation', s: 'Documentation only', c: false, p: -40, f: 'Wrong. Documentation supports testing but is not the whole process.' },
      { l: 'Only deploying software', s: 'Release activity', c: false, p: -50, f: 'Wrong. Deployment is separate from testing.' }
    ]
  },

  {
    id: 102, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test case meaning",
    desc: "Which option best describes a test case?",
    actions: [
      { l: 'A defect report', s: 'Incident report', c: false, p: -50, f: 'Wrong. A defect report records an incident, not a test case.' },
      { l: 'A set of preconditions, inputs, and expected results', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test case defines what is needed to execute and evaluate a test.' },
      { l: 'A project schedule', s: 'Project planning', c: false, p: -40, f: 'Wrong. A schedule is not a test case.' },
      { l: 'A software release note', s: 'Release documentation', c: false, p: -40, f: 'Wrong. Release notes are not test cases.' }
    ]
  },

  {
    id: 103, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Expected result",
    desc: "What is an expected result?",
    actions: [
      { l: 'Observed behavior during execution', s: 'Actual result', c: false, p: -50, f: 'Wrong. That describes the actual result.' },
      { l: 'Predicted behavior under specified conditions', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Expected results define what should happen.' },
      { l: 'A random output from the system', s: 'Invalid result', c: false, p: -50, f: 'Wrong. Expected results should be defined in advance.' },
      { l: 'A user complaint after release', s: 'User feedback', c: false, p: -40, f: 'Wrong. User feedback is not the expected result.' }
    ]
  },

  {
    id: 104, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Actual result",
    desc: "During execution, the tester observes what the system really does. What is this called?",
    actions: [
      { l: 'Expected result', s: 'Expected behavior', c: false, p: -40, f: 'Wrong. Expected result is predicted before execution.' },
      { l: 'Actual result', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Actual result is the observed behavior or condition.' },
      { l: 'Test basis', s: 'Test basis', c: false, p: -40, f: 'Wrong. Test basis is used to design tests.' },
      { l: 'Test policy', s: 'Organizational level', c: false, p: -40, f: 'Wrong. A test policy is organizational guidance.' }
    ]
  },

  {
    id: 105, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Dynamic testing",
    desc: "What makes dynamic testing different from static testing?",
    actions: [
      { l: 'It evaluates the test item by executing it', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Dynamic testing requires execution of the test item.' },
      { l: 'It only reviews documents', s: 'Static testing', c: false, p: -50, f: 'Wrong. Reviewing without execution is static testing.' },
      { l: 'It only writes test plans', s: 'Test planning', c: false, p: -40, f: 'Wrong. Planning is not dynamic testing.' },
      { l: 'It only fixes source code', s: 'Development activity', c: false, p: -60, f: 'Wrong. Fixing code is not testing.' }
    ]
  },

  {
    id: 106, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Incident meaning",
    desc: "A tester observes unexpected behavior during execution. What should it be treated as?",
    actions: [
      { l: 'A planned feature', s: 'Requirement', c: false, p: -50, f: 'Wrong. Unexpected behavior is not automatically a feature.' },
      { l: 'An incident', s: 'ISO-based action', c: true, p: 100, f: 'Correct! An incident is an unexpected event or condition during the lifecycle.' },
      { l: 'A test environment requirement', s: 'Environment requirement', c: false, p: -40, f: 'Wrong. This is not an environment requirement.' },
      { l: 'A test objective', s: 'Test objective', c: false, p: -40, f: 'Wrong. A test objective is the reason for testing.' }
    ]
  },

  {
    id: 107, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-1 — Concepts & Fundamentals', 'ISO 29119-3 — Test Documentation'],
    title: "Incident report",
    desc: "A defect is found during test execution. What should be created?",
    actions: [
      { l: 'Incident report', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Incidents requiring further action should be reported to relevant stakeholders.' },
      { l: 'Marketing report', s: 'Business document', c: false, p: -50, f: 'Wrong. This is not a marketing activity.' },
      { l: 'Release note only', s: 'Release communication', c: false, p: -40, f: 'Wrong. A release note alone does not manage the incident.' },
      { l: 'Nothing until release day', s: 'Delayed reporting', c: false, p: -80, f: 'Wrong. Delaying incident reporting increases risk.' }
    ]
  },

  {
    id: 108, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Regression testing",
    desc: "After a code change, tests are run to check that unchanged parts still work.",
    actions: [
      { l: 'Retesting', s: 'Confirmation testing', c: false, p: -40, f: 'Wrong. Retesting checks whether a fix removed a fault.' },
      { l: 'Regression testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Regression testing checks whether changes caused failures in unchanged parts.' },
      { l: 'Static testing', s: 'Static testing', c: false, p: -40, f: 'Wrong. Static testing does not execute the test item.' },
      { l: 'Acceptance planning', s: 'Test planning', c: false, p: -40, f: 'Wrong. This is an execution activity, not planning.' }
    ]
  },

  {
    id: 109, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Retesting",
    desc: "A defect was fixed. Which testing checks whether the fix actually removed the fault?",
    actions: [
      { l: 'Performance testing', s: 'Test type', c: false, p: -40, f: 'Wrong. Performance testing evaluates behavior under resource/time constraints.' },
      { l: 'Retesting', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Retesting confirms that a modification fixed the fault.' },
      { l: 'Exploratory testing only', s: 'Exploratory testing', c: false, p: -40, f: 'Wrong. Exploratory testing is not specifically confirmation of a fix.' },
      { l: 'Test completion', s: 'Management process', c: false, p: -40, f: 'Wrong. Test completion summarizes and closes testing activities.' }
    ]
  },

  {
    id: 110, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test environment",
    desc: "Which option best describes a test environment?",
    actions: [
      { l: 'Only the source code repository', s: 'Incomplete environment', c: false, p: -40, f: 'Wrong. A repository alone is not the full environment.' },
      { l: 'Facilities, hardware, software, procedures, and data needed for testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test environment includes what is needed to conduct tests.' },
      { l: 'Only the user interface', s: 'Partial component', c: false, p: -40, f: 'Wrong. The UI is only one possible part.' },
      { l: 'Only the production server', s: 'Production system', c: false, p: -50, f: 'Wrong. Testing should use controlled test environments unless specifically planned.' }
    ]
  },

  {
    id: 111, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test data",
    desc: "What is test data used for?",
    actions: [
      { l: 'To satisfy input requirements for executing test cases', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Test data supports the execution of one or more test cases.' },
      { l: 'To replace test cases', s: 'Invalid substitution', c: false, p: -40, f: 'Wrong. Test data supports test cases; it does not replace them.' },
      { l: 'To approve release automatically', s: 'Release decision', c: false, p: -60, f: 'Wrong. Test data alone cannot approve release.' },
      { l: 'To hide failed tests', s: 'Misuse of data', c: false, p: -80, f: 'Wrong. Test data must not be used to hide results.' }
    ]
  },

  {
    id: 112, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-1 — Concepts & Fundamentals', 'ISO 29119-3 — Test Documentation'],
    title: "Test execution log",
    desc: "The tester records which test procedure was run and what happened. What is this record?",
    actions: [
      { l: 'Test execution log', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test execution log records execution of test procedures.' },
      { l: 'Organizational test policy', s: 'Organizational process', c: false, p: -40, f: 'Wrong. A policy is organization-level guidance.' },
      { l: 'Test strategy', s: 'Planning artifact', c: false, p: -40, f: 'Wrong. A strategy defines approach, not execution records.' },
      { l: 'Risk register only', s: 'Risk management', c: false, p: -40, f: 'Wrong. A risk register is not an execution log.' }
    ]
  },

  {
    id: 113, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals', 'ISO 29119-2 — Test Processes'],
    title: "Test plan",
    desc: "What does a test plan mainly describe?",
    actions: [
      { l: 'Test objectives and means/schedule for achieving them', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test plan coordinates testing activities.' },
      { l: 'Only source code changes', s: 'Development artifact', c: false, p: -50, f: 'Wrong. Source code changes are not the test plan.' },
      { l: 'Only customer invoices', s: 'Business artifact', c: false, p: -40, f: 'Wrong. This is unrelated to testing.' },
      { l: 'Only final leaderboard scores', s: 'Game result', c: false, p: -40, f: 'Wrong. Scores are not a test plan.' }
    ]
  },

  {
    id: 114, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test monitoring",
    desc: "Testing is behind schedule. Which process helps compare progress against the plan?",
    actions: [
      { l: 'Test monitoring and control', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Monitoring and control ensures testing is performed in line with the test plan.' },
      { l: 'Only test design', s: 'Dynamic test design', c: false, p: -40, f: 'Wrong. Test design creates test cases and procedures.' },
      { l: 'Only retesting', s: 'Retesting', c: false, p: -40, f: 'Wrong. Retesting checks fixes.' },
      { l: 'Only deployment', s: 'Release activity', c: false, p: -50, f: 'Wrong. Deployment does not monitor test progress.' }
    ]
  },

  {
    id: 115, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test completion",
    desc: "Testing is ending and stakeholders need a summary of results and remaining risks.",
    actions: [
      { l: 'Prepare a test completion report', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test completion records and communicates test results to stakeholders.' },
      { l: 'Delete test evidence', s: 'Evidence loss', c: false, p: -90, f: 'Wrong. Useful test assets and results should be preserved.' },
      { l: 'Stop communication', s: 'Poor reporting', c: false, p: -70, f: 'Wrong. Results should be communicated.' },
      { l: 'Ignore remaining risks', s: 'Risk hidden', c: false, p: -80, f: 'Wrong. Remaining risks should be visible.' }
    ]
  },

  {
    id: 116, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test basis",
    desc: "What is the test basis used for?",
    actions: [
      { l: 'Designing and implementing test cases', s: 'ISO-based action', c: true, p: 100, f: 'Correct! The test basis provides information used to design and implement tests.' },
      { l: 'Replacing the test environment', s: 'Environment management', c: false, p: -40, f: 'Wrong. Test basis is not an environment replacement.' },
      { l: 'Approving invoices', s: 'Business process', c: false, p: -40, f: 'Wrong. This is unrelated.' },
      { l: 'Deleting incidents', s: 'Incident misuse', c: false, p: -60, f: 'Wrong. Incidents should be managed, not deleted.' }
    ]
  },

  {
    id: 117, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test objective",
    desc: "What is a test objective?",
    actions: [
      { l: 'The reason for performing testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test objective explains why testing is performed.' },
      { l: 'A random tester preference', s: 'Uncontrolled approach', c: false, p: -40, f: 'Wrong. Objectives should be defined.' },
      { l: 'A password rule only', s: 'Requirement detail', c: false, p: -40, f: 'Wrong. A password rule may be a requirement, not the overall objective.' },
      { l: 'A bug severity label', s: 'Incident classification', c: false, p: -40, f: 'Wrong. Severity is not the test objective.' }
    ]
  },

  {
    id: 118, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test strategy",
    desc: "What does a test strategy describe?",
    actions: [
      { l: 'The approach to testing for a project, level, or type', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test strategy describes the testing approach.' },
      { l: 'Only the final score', s: 'Game result', c: false, p: -40, f: 'Wrong. Scores are not a strategy.' },
      { l: 'Only code formatting rules', s: 'Development practice', c: false, p: -40, f: 'Wrong. Code formatting is not test strategy.' },
      { l: 'Only employee vacation days', s: 'Resource information', c: false, p: -40, f: 'Wrong. Staffing may matter, but this is not the strategy itself.' }
    ]
  },

  {
    id: 119, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Risk-based testing",
    desc: "A module handles payments and has high impact if it fails. What should guide testing priority?",
    actions: [
      { l: 'Risk level and impact', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Risk-based testing prioritizes testing based on analyzed risk.' },
      { l: 'Only which tests are easiest', s: 'Poor prioritization', c: false, p: -50, f: 'Wrong. Easy tests should not automatically come first.' },
      { l: 'Only alphabetical order of modules', s: 'Arbitrary order', c: false, p: -50, f: 'Wrong. Testing should be risk-informed.' },
      { l: 'Only developer preference', s: 'Unsupported priority', c: false, p: -50, f: 'Wrong. Priority should be based on risk and objectives.' }
    ]
  },

  {
    id: 120, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test design and implementation",
    desc: "The team needs to derive test cases and test procedures. Which process is this?",
    actions: [
      { l: 'Test design and implementation process', s: 'ISO-based action', c: true, p: 110, f: 'Correct! This process derives and specifies test cases and procedures.' },
      { l: 'Test completion process', s: 'Completion', c: false, p: -40, f: 'Wrong. Completion happens when testing is closing.' },
      { l: 'Incident reporting process', s: 'Incident reporting', c: false, p: -40, f: 'Wrong. Incident reporting handles incidents found during execution.' },
      { l: 'Organizational test process only', s: 'Organizational process', c: false, p: -40, f: 'Wrong. Organizational process defines organization-level specifications.' }
    ]
  },

  {
    id: 121, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test environment readiness",
    desc: "Before execution, the environment should be checked and prepared. Which process is related?",
    actions: [
      { l: 'Test environment and data management', s: 'ISO-based action', c: true, p: 110, f: 'Correct! This process establishes and maintains required test environment and data.' },
      { l: 'Only test completion', s: 'Completion process', c: false, p: -40, f: 'Wrong. Completion is at the end of testing.' },
      { l: 'Only release approval', s: 'Release decision', c: false, p: -50, f: 'Wrong. Environment readiness is a testing concern.' },
      { l: 'Only UI design', s: 'Design activity', c: false, p: -40, f: 'Wrong. UI design is unrelated.' }
    ]
  },

  {
    id: 122, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test execution process",
    desc: "A tester runs prepared procedures in the prepared environment and records results.",
    actions: [
      { l: 'Test execution process', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test execution runs procedures and records results.' },
      { l: 'Test policy creation', s: 'Organizational process', c: false, p: -40, f: 'Wrong. Policy creation is organization-level.' },
      { l: 'Risk acceptance only', s: 'Risk decision', c: false, p: -40, f: 'Wrong. Risk acceptance is not execution.' },
      { l: 'Marketing approval', s: 'Business process', c: false, p: -40, f: 'Wrong. This is unrelated to testing.' }
    ]
  },

  {
    id: 123, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test type",
    desc: "Security testing and performance testing are examples of what?",
    actions: [
      { l: 'Test types', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test type focuses on specific quality characteristics.' },
      { l: 'Bug severities', s: 'Incident classification', c: false, p: -40, f: 'Wrong. They are not severities.' },
      { l: 'Project roles', s: 'Team structure', c: false, p: -40, f: 'Wrong. They are testing categories.' },
      { l: 'Deployment stages only', s: 'Release process', c: false, p: -40, f: 'Wrong. These are not deployment stages.' }
    ]
  },

  {
    id: 124, sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test level",
    desc: "Unit, integration, system, and acceptance testing are examples of what?",
    actions: [
      { l: 'Test levels', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Test levels are stages with particular objectives.' },
      { l: 'Test data values', s: 'Test data', c: false, p: -40, f: 'Wrong. They are not data values.' },
      { l: 'Incident reports', s: 'Incident reporting', c: false, p: -40, f: 'Wrong. They are not reports.' },
      { l: 'Risk treatments only', s: 'Risk treatment', c: false, p: -40, f: 'Wrong. They are testing stages.' }
    ]
  },

  {
    id: 125, sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Completion criteria",
    desc: "What are completion criteria?",
    actions: [
      { l: 'Conditions under which testing activities are considered complete', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Completion criteria define when testing can be considered complete.' },
      { l: 'A list of developer names', s: 'Staffing list', c: false, p: -40, f: 'Wrong. Staffing is not completion criteria.' },
      { l: 'A random deadline without conditions', s: 'Weak completion control', c: false, p: -60, f: 'Wrong. Completion should be criteria-based.' },
      { l: 'A defect title only', s: 'Incident detail', c: false, p: -40, f: 'Wrong. A defect title is not completion criteria.' }
    ]
  },
  {
    id: 126, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Static testing",
    desc: "The team reviews a requirements document without executing the software.",
    actions: [
      { l: 'Classify it as static testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Static testing evaluates work products without running the software.' },
      { l: 'Classify it as dynamic testing', s: 'Dynamic testing', c: false, p: -40, f: 'Wrong. Dynamic testing requires execution of the test item.' },
      { l: 'Ignore it because no code is executed', s: 'Testing misconception', c: false, p: -50, f: 'Wrong. Testing can be static or dynamic.' },
      { l: 'Treat it as deployment testing', s: 'Release activity', c: false, p: -40, f: 'Wrong. Reviewing requirements is not deployment.' }
    ]
  },

  {
    id: 127, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Dynamic testing",
    desc: "A tester runs the application and compares the actual output with the expected output.",
    actions: [
      { l: 'Classify it as dynamic testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Dynamic testing involves executing the test item and evaluating the result.' },
      { l: 'Classify it as static testing', s: 'Static testing', c: false, p: -40, f: 'Wrong. Static testing does not execute the software.' },
      { l: 'Call it only documentation', s: 'Documentation', c: false, p: -40, f: 'Wrong. Execution and result evaluation are dynamic testing activities.' },
      { l: 'Treat it as automatic release approval', s: 'Release decision', c: false, p: -60, f: 'Wrong. Test execution provides evidence; it does not automatically approve release.' }
    ]
  },

  {
    id: 128, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test oracle",
    desc: "A tester cannot decide whether the actual result is correct.",
    actions: [
      { l: 'Use a test oracle to determine the expected result', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test oracle is a source used to determine expected outcomes.' },
      { l: 'Accept every output as correct', s: 'False confidence', c: false, p: -60, f: 'Wrong. Actual results must be compared with expected behavior.' },
      { l: 'Skip pass/fail evaluation', s: 'Invalid evaluation', c: false, p: -60, f: 'Wrong. Without expected results, test evaluation is weak.' },
      { l: 'Ask a random user every time', s: 'Uncontrolled oracle', c: false, p: -40, f: 'Wrong. User input can help, but expected results need a reliable source.' }
    ]
  },

  {
    id: 129, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test basis",
    desc: "The team needs to design tests for a new feature.",
    actions: [
      { l: 'Use requirements, user stories, or models as the test basis', s: 'ISO-based action', c: true, p: 100, f: 'Correct! The test basis provides information used to design and implement tests.' },
      { l: 'Design tests only from guesses', s: 'Uncontrolled design', c: false, p: -60, f: 'Wrong. Guessing weakens traceability and expected results.' },
      { l: 'Use only leaderboard scores', s: 'Irrelevant artifact', c: false, p: -40, f: 'Wrong. Game scores are not a product test basis.' },
      { l: 'Wait for production incidents first', s: 'Reactive approach', c: false, p: -70, f: 'Wrong. Tests should be designed before relying on production failures.' }
    ]
  },

  {
    id: 130, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test item",
    desc: "Before testing starts, the team must define exactly what is being tested.",
    actions: [
      { l: 'Identify the work product or component under test', s: 'ISO-based action', c: true, p: 100, f: 'Correct! A test item can be a system, component, document, or other work product being tested.' },
      { l: 'Identify only the tester name', s: 'Role confusion', c: false, p: -40, f: 'Wrong. A tester is a role, not the test item.' },
      { l: 'Avoid defining it to stay flexible', s: 'Unclear scope', c: false, p: -50, f: 'Wrong. Undefined test items create scope and coverage confusion.' },
      { l: 'Use only the final report as the test item', s: 'Documentation confusion', c: false, p: -40, f: 'Wrong. A report documents testing but is not necessarily the item under test.' }
    ]
  },

  {
    id: 131, category: 'risk', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Exhaustive testing",
    desc: "A student says the team should test every possible input combination.",
    actions: [
      { l: 'Explain that exhaustive testing is usually impractical', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Testing normally uses selected samples guided by risk, strategy, and coverage goals.' },
      { l: 'Agree and test every possible value', s: 'Impractical testing', c: false, p: -70, f: 'Wrong. Exhaustive testing is usually impossible for real systems.' },
      { l: 'Skip testing because full coverage is impossible', s: 'Invalid conclusion', c: false, p: -60, f: 'Wrong. Testing is still valuable even when exhaustive testing is not possible.' },
      { l: 'Test only the first input value', s: 'Weak sampling', c: false, p: -40, f: 'Wrong. Sampling should be planned and justified.' }
    ]
  },

  {
    id: 132, category: 'risk', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Risk-based testing",
    desc: "Payment processing and profile color settings both need testing, but there is limited time.",
    actions: [
      { l: 'Prioritize testing based on risk and impact', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Risk-based testing focuses effort on areas where failure would matter most.' },
      { l: 'Test only the easiest screens first', s: 'Poor prioritization', c: false, p: -50, f: 'Wrong. Ease should not override product risk.' },
      { l: 'Ignore payment because it is complex', s: 'Risk ignored', c: false, p: -80, f: 'Wrong. Complexity can increase risk and may require more testing.' },
      { l: 'Randomly choose features', s: 'Uncontrolled priority', c: false, p: -50, f: 'Wrong. Prioritization should be justified.' }
    ]
  },

  {
    id: 133, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test objective",
    desc: "A test activity starts, but no one can explain why it is being performed.",
    actions: [
      { l: 'Define the objective of the testing activity', s: 'ISO-based action', c: true, p: 110, f: 'Correct! A test objective explains the purpose of testing and guides evaluation.' },
      { l: 'Start testing randomly', s: 'Uncontrolled testing', c: false, p: -50, f: 'Wrong. Testing should be guided by objectives.' },
      { l: 'Use only developer preference', s: 'Unsupported priority', c: false, p: -40, f: 'Wrong. Objectives should be meaningful and agreed.' },
      { l: 'Skip objectives to save time', s: 'Weak planning', c: false, p: -50, f: 'Wrong. Lack of objective weakens test value.' }
    ]
  },

  {
    id: 134, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test case specification",
    desc: "A test case contains input data but no expected result.",
    actions: [
      { l: 'Add expected results and preconditions where needed', s: 'ISO-based action', c: true, p: 110, f: 'Correct! A useful test case must allow the tester to execute and evaluate the result.' },
      { l: 'Execute without expected result', s: 'Invalid evaluation', c: false, p: -60, f: 'Wrong. Without expected results, pass/fail judgment is weak.' },
      { l: 'Delete the test case', s: 'Coverage loss', c: false, p: -50, f: 'Wrong. Improve the test case instead of deleting coverage.' },
      { l: 'Ask developers to guess later', s: 'Poor documentation', c: false, p: -50, f: 'Wrong. Test cases should be clear before execution.' }
    ]
  },

  {
    id: 135, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test execution log",
    desc: "A manager asks what happened during yesterday’s test execution.",
    actions: [
      { l: 'Use the test execution log to show what was run and observed', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Execution logs record test execution information and observed results.' },
      { l: 'Use only memory', s: 'No evidence', c: false, p: -60, f: 'Wrong. Memory is not reliable audit evidence.' },
      { l: 'Delete old logs', s: 'Evidence loss', c: false, p: -80, f: 'Wrong. Logs support traceability and analysis.' },
      { l: 'Use only the project logo', s: 'Irrelevant artifact', c: false, p: -40, f: 'Wrong. A logo does not record execution evidence.' }
    ]
  },

  {
    id: 136, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Actual result",
    desc: "During execution, the tester observes that the system displays an error message.",
    actions: [
      { l: 'Record it as the actual result', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Actual results are what is observed during test execution.' },
      { l: 'Record it as the test basis', s: 'Test basis', c: false, p: -40, f: 'Wrong. Test basis is used to design tests, not to record observed output.' },
      { l: 'Ignore it if the tester remembers it', s: 'No evidence', c: false, p: -60, f: 'Wrong. Observed behavior should be recorded.' },
      { l: 'Automatically mark all tests failed', s: 'Overreaction', c: false, p: -40, f: 'Wrong. Evaluate the specific test result against expected behavior.' }
    ]
  },

  {
    id: 137, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Incident report content",
    desc: "A defect report only says: “It does not work.”",
    actions: [
      { l: 'Add steps, expected result, actual result, context, severity, and priority', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Incident reports should contain enough information for analysis and prioritization.' },
      { l: 'Close it immediately as invalid', s: 'Premature closure', c: false, p: -70, f: 'Wrong. The report should first be improved.' },
      { l: 'Ask developers to guess the problem', s: 'Poor reporting', c: false, p: -60, f: 'Wrong. Reports should be actionable.' },
      { l: 'Lower severity because the report is vague', s: 'Wrong classification', c: false, p: -60, f: 'Wrong. Missing details should be corrected, not used to hide impact.' }
    ]
  },

  {
    id: 138, category: 'environment', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test data readiness",
    desc: "Testing starts, but required test data has not been prepared.",
    actions: [
      { l: 'Prepare or confirm test data before relying on results', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test data readiness supports valid and repeatable execution.' },
      { l: 'Execute anyway and hope the data is correct', s: 'Unsupported assumption', c: false, p: -70, f: 'Wrong. Poor data can invalidate test results.' },
      { l: 'Use random production data without control', s: 'Privacy and control risk', c: false, p: -90, f: 'Wrong. Test data must be controlled and appropriate.' },
      { l: 'Delete failed results caused by data issues', s: 'Evidence loss', c: false, p: -80, f: 'Wrong. Data issues should be documented and corrected.' }
    ]
  },

  {
    id: 139, category: 'environment', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test environment readiness",
    desc: "The test environment version does not match the version planned for execution.",
    actions: [
      { l: 'Confirm environment readiness before trusting results', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Environment readiness helps ensure results are valid and repeatable.' },
      { l: 'Ignore the mismatch', s: 'Environment risk', c: false, p: -70, f: 'Wrong. Environment mismatch can invalidate results.' },
      { l: 'Mark environment issues as product defects', s: 'Misclassification', c: false, p: -60, f: 'Wrong. Environment issues should be distinguished from product defects.' },
      { l: 'Delete setup logs', s: 'Evidence loss', c: false, p: -80, f: 'Wrong. Logs help diagnose readiness problems.' }
    ]
  },

  {
    id: 140, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Boundary value analysis",
    desc: "A field accepts values from 1 to 100.",
    actions: [
      { l: 'Test values at and near 1 and 100', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Boundary values often reveal input validation defects.' },
      { l: 'Test only 50', s: 'Weak coverage', c: false, p: -40, f: 'Wrong. A middle value does not exercise the limits.' },
      { l: 'Ignore numeric limits', s: 'Coverage gap', c: false, p: -50, f: 'Wrong. Limits are important input conditions.' },
      { l: 'Remove edge case tests', s: 'Coverage loss', c: false, p: -60, f: 'Wrong. Edge cases are valuable in input testing.' }
    ]
  },

  {
    id: 141, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Equivalence partitioning",
    desc: "A form accepts many similar valid email addresses.",
    actions: [
      { l: 'Group similar inputs and test representative values', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Equivalent inputs can be sampled using representative test cases.' },
      { l: 'Test every possible email address', s: 'Inefficient testing', c: false, p: -50, f: 'Wrong. Exhaustive input testing is usually impractical.' },
      { l: 'Test only one random value with no logic', s: 'Weak sampling', c: false, p: -40, f: 'Wrong. Sampling should be based on partitions.' },
      { l: 'Remove all input tests', s: 'Coverage loss', c: false, p: -60, f: 'Wrong. Input behavior still needs testing.' }
    ]
  },

  {
    id: 142, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Decision table testing",
    desc: "A discount depends on membership status and coupon validity.",
    actions: [
      { l: 'Use decision table testing for combinations of conditions', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Decision tables help test business rules with multiple condition combinations.' },
      { l: 'Test only one successful discount case', s: 'Weak coverage', c: false, p: -50, f: 'Wrong. One happy path does not cover rule combinations.' },
      { l: 'Ignore invalid combinations', s: 'Coverage gap', c: false, p: -50, f: 'Wrong. Invalid or negative combinations can reveal defects.' },
      { l: 'Use only UI color checks', s: 'Wrong focus', c: false, p: -40, f: 'Wrong. UI color checks do not validate decision logic.' }
    ]
  },

  {
    id: 143, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "State transition testing",
    desc: "An order can move from Created to Paid, Shipped, Cancelled, and Returned.",
    actions: [
      { l: 'Use state transition testing for valid and invalid transitions', s: 'ISO-based action', c: true, p: 100, f: 'Correct! State transition testing is useful when behavior depends on states and transitions.' },
      { l: 'Test only the Created state', s: 'Insufficient coverage', c: false, p: -40, f: 'Wrong. The risk is in transitions between states.' },
      { l: 'Ignore invalid transitions', s: 'Coverage gap', c: false, p: -50, f: 'Wrong. Invalid transitions can reveal workflow defects.' },
      { l: 'Use only boundary values', s: 'Wrong technique', c: false, p: -40, f: 'Wrong. Boundary testing is not the best fit for workflow states.' }
    ]
  },

  {
    id: 144, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test monitoring",
    desc: "The team is behind schedule and stakeholders need current progress information.",
    actions: [
      { l: 'Use test monitoring and control to compare progress against the plan', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Monitoring and control tracks progress, deviations, blockers, and risks.' },
      { l: 'Wait until the end to report everything', s: 'Late reporting', c: false, p: -70, f: 'Wrong. Stakeholders need timely progress information.' },
      { l: 'Report only completed tests', s: 'Incomplete status', c: false, p: -60, f: 'Wrong. Blockers and remaining risks also matter.' },
      { l: 'Hide schedule delay', s: 'Misleading reporting', c: false, p: -80, f: 'Wrong. Delays should be visible for decision-making.' }
    ]
  },

  {
    id: 145, category: 'completion', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test completion",
    desc: "Testing is ending and stakeholders need a summary of what was tested and what risk remains.",
    actions: [
      { l: 'Prepare a test completion report', s: 'ISO-based action', c: true, p: 110, f: 'Correct! A completion report summarizes testing performed, deviations, measures, residual risks, and deliverables.' },
      { l: 'Delete all test evidence', s: 'Evidence loss', c: false, p: -90, f: 'Wrong. Test evidence should be preserved as needed.' },
      { l: 'Communicate only the final score', s: 'Incomplete reporting', c: false, p: -60, f: 'Wrong. Stakeholders need more than a score.' },
      { l: 'Ignore residual risks', s: 'Risk hidden', c: false, p: -80, f: 'Wrong. Remaining risks must be visible.' }
    ]
  },

  {
    id: 146, category: 'metrics', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Pass rate metric",
    desc: "The pass rate is high, but only low-risk tests were executed.",
    actions: [
      { l: 'Explain pass rate together with coverage and risk context', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Metrics can mislead if they are not interpreted with coverage and risk context.' },
      { l: 'Approve release using pass rate alone', s: 'Metric misuse', c: false, p: -80, f: 'Wrong. High pass rate does not prove high-risk areas were tested.' },
      { l: 'Hide unexecuted high-risk tests', s: 'Concealment', c: false, p: -100, f: 'Wrong. Gaps must be visible.' },
      { l: 'Delete low-value tests after reporting', s: 'Poor asset control', c: false, p: -50, f: 'Wrong. Test assets should be managed, not randomly deleted.' }
    ]
  },

  {
    id: 147, category: 'traceability', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Traceability",
    desc: "A requirement cannot be linked to any test case.",
    actions: [
      { l: 'Create or restore traceability from requirement to test case', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Traceability helps show whether requirements are covered by tests.' },
      { l: 'Assume it was tested', s: 'Unsupported coverage', c: false, p: -70, f: 'Wrong. Coverage claims need evidence.' },
      { l: 'Remove the requirement silently', s: 'Scope manipulation', c: false, p: -90, f: 'Wrong. Scope changes need agreement and documentation.' },
      { l: 'Create fake links quickly', s: 'False traceability', c: false, p: -120, f: 'Wrong. Fabricating traceability is unacceptable.' }
    ]
  },

  {
    id: 148, category: 'automation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Automation is not enough",
    desc: "A team says that because automated tests passed, no manual or exploratory testing is needed.",
    actions: [
      { l: 'Assess whether automation covers the relevant risks and gaps', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Automation is valuable, but coverage and risk still need evaluation.' },
      { l: 'Accept automation as complete proof', s: 'False confidence', c: false, p: -70, f: 'Wrong. Passing automation does not prove all risks are covered.' },
      { l: 'Delete manual test cases', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Manual or exploratory testing may still be useful.' },
      { l: 'Ignore failed exploratory findings', s: 'Evidence ignored', c: false, p: -70, f: 'Wrong. Valid findings matter even if automation passed.' }
    ]
  },

  {
    id: 149, category: 'incident', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Severity vs priority",
    desc: "A defect has low technical complexity but affects many users.",
    actions: [
      { l: 'Assess severity by impact and priority by urgency/planning need', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Severity describes impact; priority helps plan when it should be handled.' },
      { l: 'Treat severity and priority as the same thing', s: 'Classification error', c: false, p: -60, f: 'Wrong. They are related but not identical.' },
      { l: 'Lower severity because it is easy to fix', s: 'Wrong severity logic', c: false, p: -70, f: 'Wrong. Ease of fixing does not reduce user impact.' },
      { l: 'Ignore priority completely', s: 'Poor planning', c: false, p: -50, f: 'Wrong. Priority supports scheduling and resolution decisions.' }
    ]
  },

  {
    id: 150, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Tailored conformance",
    desc: "An agile team wants to use lighter documentation but still follow the standard.",
    actions: [
      { l: 'Document the tailoring decision, rationale, and stakeholder agreement', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Tailoring is allowed when the level of tailoring and rationale are described and agreed.' },
      { l: 'Skip all documentation because the team is agile', s: 'Misunderstood tailoring', c: false, p: -80, f: 'Wrong. Agile does not mean no evidence or no rationale.' },
      { l: 'Claim full conformance without evidence', s: 'False conformance', c: false, p: -90, f: 'Wrong. Conformance claims should match actual practice.' },
      { l: 'Hide incidents in chat only', s: 'No traceability', c: false, p: -70, f: 'Wrong. Incident information still needs appropriate traceability.' }
    ]
  },
  {
    id: 151, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Testware",
    desc: "The team stores test scripts, test cases, test data, and expected results in a repository.",
    actions: [
      { l: 'Classify these artifacts as testware', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Testware includes the work products produced or used during testing.' },
      { l: 'Classify them only as source code', s: 'Development confusion', c: false, p: -40, f: 'Wrong. Testware is broader than source code.' },
      { l: 'Delete them after execution', s: 'Evidence loss', c: false, p: -60, f: 'Wrong. Testware often supports reuse and traceability.' },
      { l: 'Treat them only as deployment files', s: 'Wrong classification', c: false, p: -40, f: 'Wrong. These are testing artifacts.' }
    ]
  },

  {
    id: 152, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Confirmation testing",
    desc: "A developer fixes a bug and the tester reruns the failed test.",
    actions: [
      { l: 'Classify this as confirmation testing (retesting)', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Confirmation testing checks whether a specific defect fix works.' },
      { l: 'Classify it as deployment testing', s: 'Release activity', c: false, p: -40, f: 'Wrong. This activity verifies a bug fix.' },
      { l: 'Call it exploratory testing only', s: 'Technique confusion', c: false, p: -30, f: 'Wrong. Exploratory testing is different from confirmation testing.' },
      { l: 'Ignore the rerun because the fix was approved', s: 'Weak verification', c: false, p: -60, f: 'Wrong. Fixes should be verified through testing.' }
    ]
  },

  {
    id: 153, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Entry criteria",
    desc: "The environment and test data are incomplete, but execution is about to start.",
    actions: [
      { l: 'Check whether entry criteria are satisfied before execution', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Entry criteria help determine whether testing can begin reliably.' },
      { l: 'Ignore readiness and start anyway', s: 'Execution risk', c: false, p: -70, f: 'Wrong. Missing prerequisites can invalidate results.' },
      { l: 'Delete failing tests caused by setup issues', s: 'Evidence manipulation', c: false, p: -80, f: 'Wrong. Setup problems should be corrected and documented.' },
      { l: 'Treat setup issues as production defects immediately', s: 'Misclassification', c: false, p: -50, f: 'Wrong. Environment issues should first be analyzed correctly.' }
    ]
  },

  {
    id: 154, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Exit criteria",
    desc: "Stakeholders ask how the team will decide whether testing can stop.",
    actions: [
      { l: 'Define measurable exit criteria in the test plan', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Exit criteria can include coverage, defect levels, risk thresholds, and schedule considerations.' },
      { l: 'Stop whenever the team feels done', s: 'Subjective completion', c: false, p: -60, f: 'Wrong. Completion should be based on agreed criteria.' },
      { l: 'Use only developer opinion', s: 'One-sided decision', c: false, p: -50, f: 'Wrong. Test completion should use objective information.' },
      { l: 'Hide unmet criteria from management', s: 'Misleading reporting', c: false, p: -90, f: 'Wrong. Remaining gaps and risks must be visible.' }
    ]
  },

  {
    id: 155, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test summary report",
    desc: "At the end of testing, management wants a concise overview of results and remaining risk.",
    actions: [
      { l: 'Prepare a test summary or completion report', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Completion reports summarize scope, execution, defects, deviations, and residual risk.' },
      { l: 'Provide only verbal feedback', s: 'No formal evidence', c: false, p: -60, f: 'Wrong. Important project information should be documented.' },
      { l: 'Delete old incident reports before reporting', s: 'Evidence loss', c: false, p: -80, f: 'Wrong. Incident records support reporting and traceability.' },
      { l: 'Report only successful tests', s: 'Selective reporting', c: false, p: -70, f: 'Wrong. Remaining risk and limitations also matter.' }
    ]
  },

  {
    id: 156, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Error guessing",
    desc: "An experienced tester predicts where failures are likely to occur based on past defects.",
    actions: [
      { l: 'Use error guessing as an experience-based technique', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Error guessing uses tester knowledge and experience to target likely problem areas.' },
      { l: 'Ignore tester experience completely', s: 'Lost expertise', c: false, p: -40, f: 'Wrong. Experience can provide valuable insight.' },
      { l: 'Replace all systematic techniques with guessing', s: 'Weak strategy', c: false, p: -50, f: 'Wrong. Error guessing complements, not replaces, structured techniques.' },
      { l: 'Treat every guess as a confirmed defect', s: 'Incorrect conclusion', c: false, p: -40, f: 'Wrong. Guesses still require execution and evidence.' }
    ]
  },

  {
    id: 157, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Use case testing",
    desc: "The team designs tests around how users interact with the system.",
    actions: [
      { l: 'Use use case testing based on user interactions and flows', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Use case testing derives tests from user scenarios and system interactions.' },
      { l: 'Test only isolated database values', s: 'Coverage mismatch', c: false, p: -40, f: 'Wrong. Use case testing focuses on interactions and workflows.' },
      { l: 'Ignore user behavior completely', s: 'User risk ignored', c: false, p: -50, f: 'Wrong. User workflows are important testing targets.' },
      { l: 'Use only UI colors as evidence', s: 'Weak validation', c: false, p: -40, f: 'Wrong. Workflow behavior must also be validated.' }
    ]
  },

  {
    id: 158, category: 'risk', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Residual risk",
    desc: "Testing is ending, but some low-priority defects remain unresolved.",
    actions: [
      { l: 'Document and communicate residual risk', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Residual risk refers to risk that remains after testing and mitigation activities.' },
      { l: 'Pretend all risk is removed', s: 'False assurance', c: false, p: -80, f: 'Wrong. Testing reduces risk but does not prove absence of defects.' },
      { l: 'Delete unresolved defects from reports', s: 'Concealment', c: false, p: -100, f: 'Wrong. Remaining issues should stay visible.' },
      { l: 'Ignore unresolved low-priority defects completely', s: 'Risk blindness', c: false, p: -60, f: 'Wrong. Even low-priority issues may contribute to residual risk.' }
    ]
  },

  {
    id: 159, category: 'metrics', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Defect density",
    desc: "A project manager wants to understand how many defects are found relative to software size.",
    actions: [
      { l: 'Use defect density as a quality-related metric', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Defect density helps relate defect counts to product size or scope.' },
      { l: 'Use only the tester count', s: 'Irrelevant metric', c: false, p: -40, f: 'Wrong. Tester count alone does not describe defect concentration.' },
      { l: 'Ignore metrics completely', s: 'No measurement', c: false, p: -50, f: 'Wrong. Metrics can support monitoring and decisions when interpreted correctly.' },
      { l: 'Treat metrics as absolute truth', s: 'Metric misuse', c: false, p: -60, f: 'Wrong. Metrics require interpretation and context.' }
    ]
  },

  {
    id: 160, category: 'incident', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Duplicate incidents",
    desc: "Three testers report the same issue using slightly different wording.",
    actions: [
      { l: 'Link or merge duplicate incident reports carefully', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Duplicate incidents should be managed without losing traceability or useful details.' },
      { l: 'Delete every duplicate report immediately', s: 'Evidence loss', c: false, p: -70, f: 'Wrong. At least one valid report should remain.' },
      { l: 'Ignore duplicates because they do not matter', s: 'Poor control', c: false, p: -60, f: 'Wrong. Duplicates affect metrics and tracking.' },
      { l: 'Close incidents randomly', s: 'Uncontrolled process', c: false, p: -70, f: 'Wrong. Incident handling should follow a defined process.' }
    ]
  },

  {
    id: 161, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Version identification",
    desc: "A tester cannot determine which software build was tested yesterday.",
    actions: [
      { l: 'Record configuration and version information during execution', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Version identification supports traceability and repeatability.' },
      { l: 'Rely only on memory', s: 'No reliable evidence', c: false, p: -60, f: 'Wrong. Build information should be recorded formally.' },
      { l: 'Ignore build differences', s: 'Configuration risk', c: false, p: -70, f: 'Wrong. Different builds can invalidate previous results.' },
      { l: 'Delete execution logs after testing', s: 'Evidence loss', c: false, p: -80, f: 'Wrong. Logs support future analysis.' }
    ]
  },

  {
    id: 162, category: 'environment', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Browser compatibility",
    desc: "The system works in Chrome but fails in Safari.",
    actions: [
      { l: 'Document the environment and reproduce across supported browsers', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Environment information is essential for reproducibility and compatibility testing.' },
      { l: 'Ignore Safari because Chrome passed', s: 'Coverage gap', c: false, p: -70, f: 'Wrong. Supported user environments should be considered.' },
      { l: 'Remove Safari from support silently', s: 'Hidden scope change', c: false, p: -90, f: 'Wrong. Scope changes require agreement and visibility.' },
      { l: 'Close the issue without analysis', s: 'Premature closure', c: false, p: -70, f: 'Wrong. Failures should be analyzed and documented.' }
    ]
  },

  {
    id: 163, category: 'automation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Automation maintenance",
    desc: "Many automated tests fail because the UI changed slightly.",
    actions: [
      { l: 'Maintain and update affected automated tests', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Automated tests require maintenance as systems evolve.' },
      { l: 'Delete all automated tests', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Maintaining useful automation is usually better than deleting it.' },
      { l: 'Ignore failing scripts permanently', s: 'False confidence', c: false, p: -70, f: 'Wrong. Broken automation reduces trust in results.' },
      { l: 'Treat automation failures as always product defects', s: 'Misclassification', c: false, p: -60, f: 'Wrong. Some failures originate in the testware itself.' }
    ]
  },

  {
    id: 164, category: 'traceability', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Requirement coverage",
    desc: "A stakeholder asks whether all critical requirements were tested.",
    actions: [
      { l: 'Use traceability and coverage information to answer', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Traceability helps connect requirements, tests, execution, and defects.' },
      { l: 'Guess based on memory', s: 'Unsupported claim', c: false, p: -60, f: 'Wrong. Coverage claims should be evidence-based.' },
      { l: 'Answer without checking evidence', s: 'Weak reporting', c: false, p: -60, f: 'Wrong. Reliable reporting requires supporting information.' },
      { l: 'Delete uncovered requirements', s: 'Scope manipulation', c: false, p: -90, f: 'Wrong. Coverage gaps should be visible.' }
    ]
  },

  {
    id: 165, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test control action",
    desc: "The project is behind schedule and many high-risk tests are still pending.",
    actions: [
      { l: 'Reprioritize and adjust testing through test control activities', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test control involves taking corrective action based on monitoring information.' },
      { l: 'Ignore delays completely', s: 'No control', c: false, p: -70, f: 'Wrong. Delays and risks require management action.' },
      { l: 'Hide the remaining work', s: 'Misleading reporting', c: false, p: -90, f: 'Wrong. Stakeholders need accurate status information.' },
      { l: 'Delete high-risk tests to finish faster', s: 'Coverage manipulation', c: false, p: -100, f: 'Wrong. High-risk testing is especially important.' }
    ]
  },

  {
    id: 166, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Checklist-based testing",
    desc: "The team uses a predefined list of quality concerns during review.",
    actions: [
      { l: 'Use checklist-based testing to guide evaluation', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Checklists help ensure important concerns are considered consistently.' },
      { l: 'Ignore the checklist entirely', s: 'Lost guidance', c: false, p: -40, f: 'Wrong. Checklists can improve consistency and completeness.' },
      { l: 'Treat the checklist as the product itself', s: 'Artifact confusion', c: false, p: -40, f: 'Wrong. A checklist guides testing activities.' },
      { l: 'Use checklists only for deployment', s: 'Scope confusion', c: false, p: -30, f: 'Wrong. Checklists can support many testing activities.' }
    ]
  },

  {
    id: 167, category: 'risk', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Probability vs impact",
    desc: "A rare defect could corrupt customer payment data.",
    actions: [
      { l: 'Consider both likelihood and impact when evaluating risk', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Risk is influenced by both probability and consequence.' },
      { l: 'Ignore it because it is rare', s: 'Risk misunderstanding', c: false, p: -80, f: 'Wrong. Rare but severe issues may still represent high risk.' },
      { l: 'Lower severity automatically', s: 'Incorrect classification', c: false, p: -70, f: 'Wrong. Severity depends on impact.' },
      { l: 'Hide the issue from reports', s: 'Concealment', c: false, p: -100, f: 'Wrong. Risks should be communicated clearly.' }
    ]
  },

  {
    id: 168, category: 'incident', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Incident lifecycle",
    desc: "A defect moves directly from Open to Closed without verification.",
    actions: [
      { l: 'Require verification before closure when appropriate', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Verification supports reliable closure decisions.' },
      { l: 'Allow anyone to close defects randomly', s: 'Uncontrolled workflow', c: false, p: -80, f: 'Wrong. Defect handling should follow a defined process.' },
      { l: 'Keep all defects open forever', s: 'No lifecycle management', c: false, p: -40, f: 'Wrong. Defects need controlled progression and closure.' },
      { l: 'Delete old incidents silently', s: 'Evidence loss', c: false, p: -70, f: 'Wrong. Records support traceability and analysis.' }
    ]
  },

  {
    id: 169, category: 'completion', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Untested scope",
    desc: "Some features were not tested before release due to time limits.",
    actions: [
      { l: 'Document untested scope and associated risk', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Untested scope should remain visible to stakeholders.' },
      { l: 'Pretend everything was tested', s: 'False reporting', c: false, p: -100, f: 'Wrong. Misleading reports damage trust and decision quality.' },
      { l: 'Delete skipped tests from the plan', s: 'Scope manipulation', c: false, p: -90, f: 'Wrong. Historical traceability matters.' },
      { l: 'Ignore the missing coverage', s: 'Risk blindness', c: false, p: -70, f: 'Wrong. Coverage gaps affect confidence.' }
    ]
  },

  {
    id: 170, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Expected result quality",
    desc: "A test case says only: “System should work correctly.”",
    actions: [
      { l: 'Replace vague expectations with measurable expected results', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Expected results should be specific enough to support pass/fail evaluation.' },
      { l: 'Leave it vague for flexibility', s: 'Weak evaluation', c: false, p: -60, f: 'Wrong. Vague expectations reduce reliability.' },
      { l: 'Execute without evaluation', s: 'Invalid testing', c: false, p: -70, f: 'Wrong. Testing requires result evaluation.' },
      { l: 'Use only developer intuition', s: 'Unsupported oracle', c: false, p: -50, f: 'Wrong. Expected behavior should be documented.' }
    ]
  },

  {
    id: 171, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Communication with stakeholders",
    desc: "Stakeholders ask why a release recommendation changed from yesterday.",
    actions: [
      { l: 'Provide updated evidence, risks, and rationale transparently', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Recommendations should be evidence-based and traceable.' },
      { l: 'Hide new risks to avoid concern', s: 'Misleading communication', c: false, p: -90, f: 'Wrong. Stakeholders need accurate information.' },
      { l: 'Blame another team immediately', s: 'Unprofessional response', c: false, p: -40, f: 'Wrong. Focus on evidence and impact.' },
      { l: 'Refuse to explain the change', s: 'Poor reporting', c: false, p: -50, f: 'Wrong. Decisions should be explainable.' }
    ]
  },

  {
    id: 172, category: 'environment', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test isolation",
    desc: "One test changes shared data and causes unrelated tests to fail.",
    actions: [
      { l: 'Improve test isolation and reset shared state where needed', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Poor isolation can reduce repeatability and reliability.' },
      { l: 'Ignore cascading failures', s: 'Weak control', c: false, p: -70, f: 'Wrong. Shared-state issues should be addressed.' },
      { l: 'Delete unrelated tests', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Fix the environment or data dependency instead.' },
      { l: 'Treat every failure as a product defect', s: 'Misclassification', c: false, p: -60, f: 'Wrong. Environment and data dependencies also matter.' }
    ]
  },

  {
    id: 173, category: 'metrics', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Meaningful metrics",
    desc: "A report shows many numbers but stakeholders cannot understand project risk.",
    actions: [
      { l: 'Use metrics that support decisions and explain their context', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Metrics should support understanding and decision-making.' },
      { l: 'Add random metrics to look detailed', s: 'Metric misuse', c: false, p: -60, f: 'Wrong. More numbers do not automatically improve reporting.' },
      { l: 'Hide limitations of the metrics', s: 'Misleading reporting', c: false, p: -80, f: 'Wrong. Metric limitations should be understood.' },
      { l: 'Use only color themes as indicators', s: 'Insufficient information', c: false, p: -40, f: 'Wrong. Visuals alone are not enough.' }
    ]
  },

  {
    id: 174, category: 'automation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "False positive automation result",
    desc: "An automated test reports failure, but investigation shows the product works correctly.",
    actions: [
      { l: 'Investigate and correct the automated test or environment issue', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Automated tests themselves can fail incorrectly and require maintenance.' },
      { l: 'Always trust automation blindly', s: 'False confidence', c: false, p: -70, f: 'Wrong. Automation results still require evaluation.' },
      { l: 'Ignore all future automation failures', s: 'Overreaction', c: false, p: -80, f: 'Wrong. Reliability should be improved, not abandoned.' },
      { l: 'Delete all automated tests immediately', s: 'Coverage loss', c: false, p: -90, f: 'Wrong. Improve and maintain useful automation assets.' }
    ]
  },

  {
    id: 175, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Testing and quality",
    desc: "A stakeholder says testing alone guarantees software quality.",
    actions: [
      { l: 'Explain that testing reduces risk but cannot guarantee defect-free software', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Testing provides information and reduces uncertainty, but cannot prove the absence of all defects.' },
      { l: 'Agree that testing guarantees perfection', s: 'Testing misconception', c: false, p: -70, f: 'Wrong. Testing can reveal defects, not prove perfection.' },
      { l: 'Stop testing because quality cannot be guaranteed', s: 'Invalid conclusion', c: false, p: -50, f: 'Wrong. Testing still provides valuable evidence.' },
      { l: 'Ignore quality discussions completely', s: 'Poor communication', c: false, p: -40, f: 'Wrong. Stakeholders should understand the purpose and limits of testing.' }
    ]
  }
  ,
  {
    id: 176, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Test independence",
    desc: "A developer says only the person who wrote the code should test it.",
    actions: [
      { l: 'Explain that independent testing can reduce bias', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Independent testing can provide a different perspective and reduce confirmation bias.' },
      { l: 'Agree that only the coder should test', s: 'Low independence', c: false, p: -50, f: 'Wrong. Developers can test, but independence often improves defect detection.' },
      { l: 'Ban developers from all testing', s: 'Overreaction', c: false, p: -40, f: 'Wrong. Developer testing is useful; it just should not be the only perspective.' },
      { l: 'Skip testing if independent testers are unavailable', s: 'Invalid conclusion', c: false, p: -60, f: 'Wrong. Some testing is still valuable, even if independence is limited.' }
    ]
  },

  {
    id: 177, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Scripted testing",
    desc: "A tester follows predefined test procedures step by step.",
    actions: [
      { l: 'Classify it as scripted testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Scripted testing follows predefined test cases or procedures.' },
      { l: 'Classify it as completely random testing', s: 'Random testing', c: false, p: -40, f: 'Wrong. Scripted testing is planned and documented.' },
      { l: 'Ignore results because it is scripted', s: 'Evidence misuse', c: false, p: -50, f: 'Wrong. Scripted execution can produce valid evidence.' },
      { l: 'Call it only exploratory testing', s: 'Exploratory testing', c: false, p: -40, f: 'Wrong. Exploratory testing is less predefined and more adaptive.' }
    ]
  },

  {
    id: 178, category: 'concept', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-1 — Concepts & Fundamentals'],
    title: "Exploratory testing",
    desc: "A tester learns about the product while designing and executing tests at the same time.",
    actions: [
      { l: 'Classify it as exploratory testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Exploratory testing combines learning, test design, and execution.' },
      { l: 'Reject it because it has no value', s: 'Testing misconception', c: false, p: -50, f: 'Wrong. Exploratory testing can reveal important defects when guided by objectives.' },
      { l: 'Treat it as scripted testing only', s: 'Scripted testing', c: false, p: -40, f: 'Wrong. Scripted testing follows predefined steps.' },
      { l: 'Use it to avoid all documentation', s: 'Misuse of exploratory testing', c: false, p: -60, f: 'Wrong. Exploratory testing can still produce useful notes, logs, and incident reports.' }
    ]
  },

  {
    id: 179, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test model",
    desc: "The team creates a model of states and transitions to derive test cases.",
    actions: [
      { l: 'Use the model as a basis for identifying coverage items and deriving tests', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test models represent testable aspects and can guide coverage and test case derivation.' },
      { l: 'Ignore the model after drawing it', s: 'Unused artifact', c: false, p: -50, f: 'Wrong. A test model should support test design and coverage.' },
      { l: 'Treat the model as the final test result', s: 'Artifact confusion', c: false, p: -40, f: 'Wrong. A model helps design tests; it is not the execution result.' },
      { l: 'Use the model to hide failed tests', s: 'Misuse', c: false, p: -80, f: 'Wrong. Models should improve transparency, not hide evidence.' }
    ]
  },

  {
    id: 180, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Scenario testing",
    desc: "The team wants to test a realistic end-to-end user journey.",
    actions: [
      { l: 'Use scenario testing based on realistic interaction sequences', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Scenario testing exercises sequences of interactions between the user and the system.' },
      { l: 'Test only one isolated input field', s: 'Narrow input testing', c: false, p: -40, f: 'Wrong. Scenario testing focuses on flows and interactions.' },
      { l: 'Ignore user journeys', s: 'User risk ignored', c: false, p: -50, f: 'Wrong. Realistic journeys can reveal integration and workflow issues.' },
      { l: 'Use only source code branch coverage', s: 'Wrong technique focus', c: false, p: -40, f: 'Wrong. Branch coverage is structure-based, not scenario-based.' }
    ]
  },

  {
    id: 181, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Random testing",
    desc: "The team generates input values randomly to exercise the system.",
    actions: [
      { l: 'Use random testing with a defined purpose and evaluation method', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Random testing can be useful when generation and evaluation are controlled.' },
      { l: 'Use random inputs without expected results', s: 'Invalid evaluation', c: false, p: -60, f: 'Wrong. Random tests still need a way to evaluate behavior.' },
      { l: 'Replace all planned testing with random testing', s: 'Weak strategy', c: false, p: -50, f: 'Wrong. Random testing should complement a strategy, not replace all planning.' },
      { l: 'Ignore any failures from random tests', s: 'Evidence ignored', c: false, p: -60, f: 'Wrong. Failures found by random testing still require analysis.' }
    ]
  },

  {
    id: 182, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Unique identifiers",
    desc: "Several test cases have the same name, making results hard to trace.",
    actions: [
      { l: 'Assign unique identifiers to test documentation items', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Unique identifiers improve traceability and prevent confusion across test artifacts.' },
      { l: 'Leave duplicate names unchanged', s: 'Traceability risk', c: false, p: -60, f: 'Wrong. Duplicate names make analysis and reporting harder.' },
      { l: 'Delete all duplicated test cases', s: 'Coverage loss', c: false, p: -70, f: 'Wrong. Rename or identify them properly instead of deleting coverage.' },
      { l: 'Use only tester initials as IDs', s: 'Weak identification', c: false, p: -40, f: 'Wrong. Identifiers should uniquely distinguish artifacts.' }
    ]
  },

  {
    id: 183, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Change history",
    desc: "The test plan was changed, but no one knows what changed or who approved it.",
    actions: [
      { l: 'Maintain change history and approval information', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Change history and approval authority help control test documentation.' },
      { l: 'Ignore document changes', s: 'Uncontrolled documentation', c: false, p: -70, f: 'Wrong. Uncontrolled changes reduce trust in the plan.' },
      { l: 'Overwrite the old plan without record', s: 'Lost history', c: false, p: -80, f: 'Wrong. Changes should be traceable.' },
      { l: 'Let anyone edit without responsibility', s: 'Weak governance', c: false, p: -60, f: 'Wrong. Ownership and approval matter for important documents.' }
    ]
  },

  {
    id: 184, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test status report period",
    desc: "A status report does not state which dates or sprint it covers.",
    actions: [
      { l: 'Add the reporting period to the status report', s: 'ISO-based action', c: true, p: 110, f: 'Correct! The reporting period helps stakeholders interpret progress and measures correctly.' },
      { l: 'Leave it unclear', s: 'Ambiguous reporting', c: false, p: -60, f: 'Wrong. Without a period, progress data can be misunderstood.' },
      { l: 'Use only the current date as all context', s: 'Incomplete context', c: false, p: -40, f: 'Wrong. A report should show what period it covers.' },
      { l: 'Remove progress measures', s: 'Worse reporting', c: false, p: -50, f: 'Wrong. Measures are useful when clearly contextualized.' }
    ]
  },

  {
    id: 185, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Test deliverables",
    desc: "At completion, stakeholders ask which test artifacts are available for reuse or audit.",
    actions: [
      { l: 'List relevant test deliverables in the completion report', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test deliverables help stakeholders understand what evidence and assets were produced.' },
      { l: 'Delete deliverables after the meeting', s: 'Evidence loss', c: false, p: -80, f: 'Wrong. Useful deliverables may be needed for audit, maintenance, or reuse.' },
      { l: 'Mention only the final grade', s: 'Incomplete completion', c: false, p: -50, f: 'Wrong. A grade alone does not describe available test evidence.' },
      { l: 'Hide reusable assets', s: 'Poor asset management', c: false, p: -50, f: 'Wrong. Reusable assets can improve future testing efficiency.' }
    ]
  },

  {
    id: 186, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Requirements-based testing",
    desc: "A tester derives tests directly from atomic requirements.",
    actions: [
      { l: 'Classify this as requirements-based testing', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Requirements-based testing derives tests from requirements and checks their implementation.' },
      { l: 'Classify it as random testing', s: 'Random testing', c: false, p: -40, f: 'Wrong. These tests come from requirements, not random selection.' },
      { l: 'Ignore requirement traceability', s: 'Traceability gap', c: false, p: -50, f: 'Wrong. Requirements-based testing benefits from traceability.' },
      { l: 'Use only production incidents as requirements', s: 'Reactive approach', c: false, p: -50, f: 'Wrong. Incidents can inform improvement but are not the primary requirements basis.' }
    ]
  },

  {
    id: 187, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Classification tree method",
    desc: "Inputs can be grouped into classifications and classes for systematic test design.",
    actions: [
      { l: 'Use the classification tree method', s: 'ISO-based action', c: true, p: 100, f: 'Correct! This method models input classifications and classes to design systematic test cases.' },
      { l: 'Choose values with no structure', s: 'Weak sampling', c: false, p: -40, f: 'Wrong. The classification tree method is structured.' },
      { l: 'Delete input categories', s: 'Coverage loss', c: false, p: -50, f: 'Wrong. Categories help identify coverage items.' },
      { l: 'Use only final pass rate', s: 'Metric confusion', c: false, p: -40, f: 'Wrong. Pass rate is not a test design technique.' }
    ]
  },

  {
    id: 188, category: 'technique', sev: 'info', tag: 'tag-info', tl: 'INFO',
    standards: ['ISO 29119-4 — Test Techniques'],
    title: "Combinatorial testing",
    desc: "A configuration has browser, device, language, and account type combinations.",
    actions: [
      { l: 'Use combinatorial testing to cover selected parameter-value combinations', s: 'ISO-based action', c: true, p: 100, f: 'Correct! Combinatorial techniques help test interactions among parameter-value pairs efficiently.' },
      { l: 'Test only one browser and one device', s: 'Weak combination coverage', c: false, p: -50, f: 'Wrong. Important combinations may be missed.' },
      { l: 'Test every possible combination without considering risk', s: 'Inefficient testing', c: false, p: -40, f: 'Wrong. Combinatorial methods help reduce excessive combinations.' },
      { l: 'Ignore configuration testing', s: 'Coverage gap', c: false, p: -60, f: 'Wrong. Configuration combinations can cause defects.' }
    ]
  },

  {
    id: 189, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test strategy",
    desc: "The team needs a high-level approach for how testing will be performed.",
    actions: [
      { l: 'Define a test strategy covering approach, risks, levels, types, and techniques', s: 'ISO-based action', c: true, p: 110, f: 'Correct! A test strategy describes the testing approach and guides detailed planning.' },
      { l: 'Start execution without an approach', s: 'Uncontrolled testing', c: false, p: -60, f: 'Wrong. Strategy helps align testing with risks and objectives.' },
      { l: 'Use only one random technique for everything', s: 'Weak strategy', c: false, p: -50, f: 'Wrong. Strategy should consider the context and risks.' },
      { l: 'Hide the strategy from the team', s: 'Poor communication', c: false, p: -50, f: 'Wrong. The team needs a shared approach.' }
    ]
  },

  {
    id: 190, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test levels",
    desc: "The project includes component, integration, system, and acceptance testing.",
    actions: [
      { l: 'Treat them as different test levels with different objectives', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test levels organize testing stages with specific objectives.' },
      { l: 'Treat all levels as identical', s: 'Level confusion', c: false, p: -50, f: 'Wrong. Different levels focus on different risks and evidence.' },
      { l: 'Skip integration because component tests passed', s: 'Coverage gap', c: false, p: -70, f: 'Wrong. Integration can reveal interface and interaction defects.' },
      { l: 'Use acceptance tests as unit tests', s: 'Wrong level', c: false, p: -50, f: 'Wrong. Acceptance and component testing have different purposes.' }
    ]
  },

  {
    id: 191, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test types",
    desc: "The system needs usability, performance, security, and functional testing.",
    actions: [
      { l: 'Recognize these as different test types targeting quality characteristics', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test types focus testing on particular objectives or quality characteristics.' },
      { l: 'Run only functional tests and ignore the rest', s: 'Quality gap', c: false, p: -70, f: 'Wrong. Non-functional risks can be critical.' },
      { l: 'Treat security as only a UI concern', s: 'Wrong focus', c: false, p: -60, f: 'Wrong. Security testing targets security-related risks.' },
      { l: 'Remove performance tests if UI passes', s: 'Coverage gap', c: false, p: -70, f: 'Wrong. UI success does not prove performance.' }
    ]
  },

  {
    id: 192, category: 'risk', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Risk treatment through testing",
    desc: "A high-risk feature cannot be removed from scope.",
    actions: [
      { l: 'Use focused testing as a risk treatment activity', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Testing is a primary way to gather evidence and reduce uncertainty around risk.' },
      { l: 'Ignore the feature because it is risky', s: 'Risk ignored', c: false, p: -80, f: 'Wrong. High-risk features usually need more attention.' },
      { l: 'Hide the risk from stakeholders', s: 'Concealment', c: false, p: -90, f: 'Wrong. Risks should be communicated.' },
      { l: 'Test only unrelated low-risk features', s: 'Poor prioritization', c: false, p: -60, f: 'Wrong. Testing effort should focus on the risk.' }
    ]
  },

  {
    id: 193, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Assumptions and constraints",
    desc: "The team assumes the staging environment will be available every night, but this is not documented.",
    actions: [
      { l: 'Document assumptions and constraints in the test plan', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Assumptions and constraints help stakeholders understand planning dependencies.' },
      { l: 'Leave assumptions unstated', s: 'Planning risk', c: false, p: -60, f: 'Wrong. Hidden assumptions can cause later misunderstandings.' },
      { l: 'Ignore environment availability', s: 'Execution risk', c: false, p: -70, f: 'Wrong. Environment constraints affect execution.' },
      { l: 'Blame testers if the assumption fails', s: 'Poor management', c: false, p: -50, f: 'Wrong. Planning dependencies should be visible.' }
    ]
  },

  {
    id: 194, category: 'documentation', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes', 'ISO 29119-3 — Test Documentation'],
    title: "Stakeholders in test plan",
    desc: "The test plan does not identify who needs testing information.",
    actions: [
      { l: 'Identify stakeholders and communication needs in the test plan', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Stakeholder identification supports proper communication and reporting.' },
      { l: 'Report only to the test team', s: 'Incomplete communication', c: false, p: -50, f: 'Wrong. Other stakeholders may need test status and risk information.' },
      { l: 'Avoid naming stakeholders', s: 'Weak planning', c: false, p: -50, f: 'Wrong. Lack of stakeholders weakens communication planning.' },
      { l: 'Send all reports to random recipients', s: 'Poor communication', c: false, p: -60, f: 'Wrong. Communication should be planned.' }
    ]
  },

  {
    id: 195, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Testing communication",
    desc: "A critical defect is found, but the team does not know who should be informed.",
    actions: [
      { l: 'Use the planned testing communication path', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test planning should define how testing information is communicated.' },
      { l: 'Tell nobody until the end', s: 'Delayed reporting', c: false, p: -90, f: 'Wrong. Critical information must be communicated in time.' },
      { l: 'Post only a vague chat message', s: 'Weak communication', c: false, p: -60, f: 'Wrong. Critical issues need clear, traceable communication.' },
      { l: 'Delete the defect to avoid escalation', s: 'Concealment', c: false, p: -100, f: 'Wrong. Hiding defects is unacceptable.' }
    ]
  },

  {
    id: 196, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test design activity",
    desc: "The team needs to derive test cases from a test model.",
    actions: [
      { l: 'Perform test design and implementation activities', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Test design uses models and coverage items to derive test cases and procedures.' },
      { l: 'Jump directly to release', s: 'Skipped testing', c: false, p: -80, f: 'Wrong. Test cases should be designed before execution and release evidence.' },
      { l: 'Use only production feedback', s: 'Reactive testing', c: false, p: -60, f: 'Wrong. Testing should be planned before production use.' },
      { l: 'Avoid documenting test cases', s: 'Poor repeatability', c: false, p: -60, f: 'Wrong. Documentation supports repeatability and traceability.' }
    ]
  },

  {
    id: 197, category: 'execution', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Test execution result",
    desc: "A test procedure is executed and the actual result differs from the expected result.",
    actions: [
      { l: 'Record the result and consider raising an incident', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Differences between expected and actual results should be recorded and analyzed.' },
      { l: 'Ignore the difference', s: 'Evidence ignored', c: false, p: -80, f: 'Wrong. Differences are important test evidence.' },
      { l: 'Change the expected result after the fact', s: 'Result manipulation', c: false, p: -90, f: 'Wrong. Expected results should not be altered to force a pass.' },
      { l: 'Delete the failed test', s: 'Coverage loss', c: false, p: -80, f: 'Wrong. Failures should be investigated.' }
    ]
  },

  {
    id: 198, category: 'security', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Security testing need",
    desc: "The system handles passwords and personal data.",
    actions: [
      { l: 'Include security-focused testing in the test strategy', s: 'ISO-based action', c: true, p: 110, f: 'Correct! Security-related risks should influence test types and strategy.' },
      { l: 'Test only visual layout', s: 'Wrong focus', c: false, p: -70, f: 'Wrong. Layout testing does not address security risks.' },
      { l: 'Ignore password behavior if login works once', s: 'Weak security evidence', c: false, p: -80, f: 'Wrong. Security requires more than one happy path.' },
      { l: 'Store test passwords in public notes', s: 'Security risk', c: false, p: -90, f: 'Wrong. Test data and credentials must be controlled.' }
    ]
  },

  {
    id: 199, category: 'compliance', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Using multiple standards",
    desc: "The team wants to connect process, documentation, and test techniques in one project.",
    actions: [
      { l: 'Use 29119-2 for process, 29119-3 for documentation, and 29119-4 for techniques', s: 'ISO-based action', c: true, p: 110, f: 'Correct! The standards complement each other: process, documentation, and techniques work together.' },
      { l: 'Use only techniques and ignore process', s: 'Process gap', c: false, p: -70, f: 'Wrong. Techniques need to fit inside a managed test process.' },
      { l: 'Use only process names without documentation', s: 'Evidence gap', c: false, p: -60, f: 'Wrong. Documentation provides traceability and evidence.' },
      { l: 'Avoid standards completely', s: 'No standard alignment', c: false, p: -60, f: 'Wrong. The project goal is to teach standard-based testing.' }
    ]
  },

  {
    id: 200, category: 'process', sev: 'medium', tag: 'tag-med', tl: 'MEDIUM',
    standards: ['ISO 29119-2 — Test Processes'],
    title: "Process-centered simulator",
    desc: "The game must stay focused on Test Processes while also referencing other parts of 29119.",
    actions: [
      { l: 'Keep 29119-2 as the core and use 29119-1/3/4 as supporting context', s: 'ISO-based action', c: true, p: 110, f: 'Correct! The strongest academic design keeps Test Processes central while connecting concepts, documentation, and techniques.' },
      { l: 'Turn the game into only a technique quiz', s: 'Wrong project focus', c: false, p: -80, f: 'Wrong. Techniques are useful, but the main learning objective is Test Processes.' },
      { l: 'Remove all documentation questions', s: 'Documentation gap', c: false, p: -60, f: 'Wrong. Documentation is part of process evidence.' },
      { l: 'Use only definitions without scenarios', s: 'Weak simulation', c: false, p: -50, f: 'Wrong. Scenario-based decisions make the game more realistic and educational.' }
    ]
  }
];

window.EASY_INCIDENTS = EASY_INCIDENTS;
