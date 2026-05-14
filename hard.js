const HARD_INCIDENTS = [
    {
        id: 301, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Conflicting Release Decision",
        desc: "Business demands release, security blocks it, and testing shows unresolved high-risk defects.",
        actions: [
            { l: 'Approve release to satisfy business pressure', s: 'Pressure-driven release', c: false, p: -220, f: 'Wrong. Release pressure must not override unresolved critical risk.' },
            { l: 'Prepare evidence-based risk report and escalate to release authority', s: '29119-2: Test Completion + Governance', c: true, p: 220, f: 'Correct! The test manager provides evidence and risk; the release authority makes the decision.' },
            { l: 'Block release alone without communication', s: 'Authority issue', c: false, p: -90, f: 'Wrong. The correct action is structured escalation, not unilateral blocking.' },
            { l: 'Hide the security objection from the report', s: 'Concealment', c: false, p: -240, f: 'Wrong. Hiding stakeholder risk concerns is a serious reporting failure.' }
        ]
    },

    {
        id: 302, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Invalid Performance Evidence",
        desc: "Performance tests passed, but later the team discovers the test environment had half the production capacity.",
        actions: [
            { l: 'Use results because they passed', s: 'Invalid evidence', c: false, p: -200, f: 'Wrong. Passing results from an invalid environment cannot support release confidence.' },
            { l: 'Invalidate affected results, document impact, and escalate release risk', s: '29119-2: Test Environment + Test Result Evaluation', c: true, p: 210, f: 'Correct! Invalid evidence must be identified, documented, and communicated.' },
            { l: 'Hide environment difference to avoid delay', s: 'Concealment', c: false, p: -230, f: 'Wrong. Environment limitations must be reported.' },
            { l: 'Retest only after release', s: 'Deferred validation', c: false, p: -140, f: 'Wrong. The release decision currently lacks valid evidence.' }
        ]
    },

    {
        id: 303, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Test Coverage Manipulated",
        desc: "The team marks unexecuted tests as passed to reach 100% coverage before the deadline.",
        actions: [
            { l: 'Accept it because the deadline is fixed', s: 'False completion', c: false, p: -220, f: 'Wrong. Deadlines do not justify false test results.' },
            { l: 'Correct the records, report the manipulation, and restore truthful status', s: '29119-2: Test Monitoring and Reporting Integrity', c: true, p: 230, f: 'Correct! Test status must reflect real execution evidence.' },
            { l: 'Delete the unexecuted tests from scope', s: 'Scope manipulation', c: false, p: -210, f: 'Wrong. Removing tests to improve metrics is misleading.' },
            { l: 'Keep the dashboard green and explain later', s: 'Misleading reporting', c: false, p: -200, f: 'Wrong. Stakeholders need truthful status now.' }
        ]
    },

    {
        id: 304, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Security Fix Breaks Usability",
        desc: "A security fix blocks SQL injection but makes login fail for some valid users.",
        actions: [
            { l: 'Release because security is more important than usability', s: 'Single-risk decision', c: false, p: -150, f: 'Wrong. Security risk is important, but regression impact must also be evaluated.' },
            { l: 'Evaluate both security fix verification and regression impact, then escalate residual risk', s: '29119-2: Retesting + Regression Testing', c: true, p: 190, f: 'Correct! A fix must be verified while also checking unintended side effects.' },
            { l: 'Rollback the security fix immediately without analysis', s: 'Overreaction', c: false, p: -130, f: 'Wrong. Rolling back may reintroduce critical security risk.' },
            { l: 'Hide the login regression to keep the security fix approved', s: 'Concealment', c: false, p: -220, f: 'Wrong. Known regressions must be reported.' }
        ]
    },

    {
        id: 305, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Fake Test Evidence Request",
        desc: "A manager asks the test team to adjust the completion report so the project looks ready.",
        actions: [
            { l: 'Modify the report slightly to avoid conflict', s: 'Misleading reporting', c: false, p: -200, f: 'Wrong. Even small manipulation damages integrity.' },
            { l: 'Refuse falsification and keep the report evidence-based', s: '29119-2: Test Reporting Integrity', c: true, p: 230, f: 'Correct! Test reports must accurately reflect evidence, risks, and limitations.' },
            { l: 'Delete negative results from the report', s: 'Evidence falsification', c: false, p: -260, f: 'Wrong. Removing negative evidence is a severe violation.' },
            { l: 'Ignore the manager without documenting the issue', s: 'Poor escalation', c: false, p: -80, f: 'Incomplete. The report must remain accurate and escalation may be needed.' }
        ]
    },

    {
        id: 306, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Unreproducible Critical Bug",
        desc: "A severe data-loss bug appears intermittently and cannot be consistently reproduced.",
        actions: [
            { l: 'Close the bug because it is not always reproducible', s: 'Premature closure', c: false, p: -170, f: 'Wrong. Intermittent critical bugs still represent serious risk.' },
            { l: 'Treat it as high-risk, collect evidence, and escalate uncertainty', s: '29119-2: Incident Evaluation', c: true, p: 210, f: 'Correct! Severity and uncertainty must be communicated with available evidence.' },
            { l: 'Lower severity because reproduction is difficult', s: 'Severity error', c: false, p: -160, f: 'Wrong. Severity is based on impact, not convenience.' },
            { l: 'Ignore until users report it after release', s: 'Reactive testing', c: false, p: -200, f: 'Wrong. Known serious risk must be managed before release.' }
        ]
    },

    {
        id: 307, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Untested Release Build",
        desc: "The final release build was created from a different branch than the tested candidate.",
        actions: [
            { l: 'Use previous test results because changes look small', s: 'Invalid configuration evidence', c: false, p: -200, f: 'Wrong. Test evidence applies to the tested configuration.' },
            { l: 'Invalidate previous evidence for final build and require targeted verification', s: '29119-2: Configuration + Test Control', c: true, p: 220, f: 'Correct! A different build requires verification before release confidence can be claimed.' },
            { l: 'Approve if branch names are similar', s: 'Assumption', c: false, p: -160, f: 'Wrong. Branch similarity is not test evidence.' },
            { l: 'Hide the mismatch to avoid delaying release', s: 'Concealment', c: false, p: -230, f: 'Wrong. Configuration mismatch must be reported.' }
        ]
    },

    {
        id: 308, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Compliance Test Skipped",
        desc: "A legally required compliance scenario was not executed before release.",
        actions: [
            { l: 'Release because the deadline is contractual', s: 'Compliance risk ignored', c: false, p: -240, f: 'Wrong. A deadline does not remove compliance risk.' },
            { l: 'Escalate compliance gap with evidence and obtain release authority decision', s: '29119-2: Risk-based Test Completion', c: true, p: 230, f: 'Correct! Compliance gaps require clear escalation and documented decision-making.' },
            { l: 'Mark the compliance test as passed', s: 'False evidence', c: false, p: -300, f: 'Wrong. This is a severe integrity violation.' },
            { l: 'Remove the compliance scenario from scope silently', s: 'Scope manipulation', c: false, p: -240, f: 'Wrong. Scope changes require approval and rationale.' }
        ]
    },

    {
        id: 309, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Defect Severity Manipulation",
        desc: "A critical defect is downgraded to medium so release criteria appear satisfied.",
        actions: [
            { l: 'Accept the downgrade to avoid conflict', s: 'Metric manipulation', c: false, p: -160, f: 'Wrong. Severity must reflect real impact.' },
            { l: 'Challenge classification using agreed severity criteria and document rationale', s: '29119-2: Incident Classification', c: true, p: 190, f: 'Correct! Classification should be evidence-based and consistent with agreed criteria.' },
            { l: 'Delete the defect from the report', s: 'Concealment', c: false, p: -230, f: 'Wrong. Defect evidence must not be hidden.' },
            { l: 'Escalate emotionally without evidence', s: 'Poor escalation', c: false, p: -70, f: 'Wrong. Escalation should be evidence-based.' }
        ]
    },

    {
        id: 310, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Post-Release Critical Failure",
        desc: "A critical production issue appears shortly after test completion and release.",
        actions: [
            { l: 'Blame one tester and close the matter', s: 'Blame culture', c: false, p: -110, f: 'Wrong. Escaped defects require process analysis, not blame.' },
            { l: 'Start incident review, analyze escaped defect, and improve test controls', s: '29119-2: Incident Management + Process Improvement', c: true, p: 210, f: 'Correct! The team should analyze why the issue escaped and improve the process.' },
            { l: 'Delete old test records', s: 'Evidence destruction', c: false, p: -240, f: 'Wrong. Test evidence is needed for review.' },
            { l: 'Claim testing was unrelated without analysis', s: 'Accountability avoidance', c: false, p: -150, f: 'Wrong. Testing effectiveness should be reviewed.' }
        ]
    },

    {
        id: 311, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Risk Acceptance Not Documented",
        desc: "Management verbally accepts release risk, but there is no written record of who accepted it and why.",
        actions: [
            { l: 'Proceed because verbal approval is enough', s: 'No audit trail', c: false, p: -140, f: 'Wrong. Risk acceptance must be traceable and documented.' },
            { l: 'Record decision owner, rationale, and residual risks', s: '29119-2: Test Completion + Risk Reporting', c: true, p: 190, f: 'Correct! Accepted risk is not resolved risk; it needs rationale and ownership.' },
            { l: 'Close all accepted risks as resolved', s: 'False risk closure', c: false, p: -180, f: 'Wrong. Accepted risks still exist.' },
            { l: 'Remove the risk from the report', s: 'Concealment', c: false, p: -220, f: 'Wrong. Removing known risk misleads stakeholders.' }
        ]
    },

    {
        id: 312, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Rollback Plan Untested",
        desc: "A risky database migration will be released tonight, but the rollback procedure has never been tested.",
        actions: [
            { l: 'Assume rollback works because the script exists', s: 'Unsupported assumption', c: false, p: -170, f: 'Wrong. A rollback script is not evidence that rollback works.' },
            { l: 'Report rollback test gap and execute priority rollback validation', s: '29119-2: Risk-based Test Planning', c: true, p: 220, f: 'Correct! Untested rollback creates severe operational risk.' },
            { l: 'Release and test rollback later', s: 'Deferred validation', c: false, p: -220, f: 'Wrong. Rollback risk matters before release.' },
            { l: 'Remove rollback from documentation', s: 'Concealment', c: false, p: -230, f: 'Wrong. Hiding missing rollback evidence is unacceptable.' }
        ]
    },

    {
        id: 313, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Outsourced Test Evidence Unreliable",
        desc: "A vendor reports 100% pass rate but provides no logs, screenshots, defect records, or execution evidence.",
        actions: [
            { l: 'Accept the vendor report because it says 100%', s: 'Blind trust', c: false, p: -150, f: 'Wrong. External results still require evidence.' },
            { l: 'Request evidence, assess confidence, and document limitations', s: '29119-2: Test Reporting + Evidence Control', c: true, p: 190, f: 'Correct! Vendor results must be supported by evidence and limitations must be visible.' },
            { l: 'Reject all vendor testing without review', s: 'Overreaction', c: false, p: -80, f: 'Wrong. The right action is evidence assessment.' },
            { l: 'Copy the pass rate into the final report only', s: 'Incomplete reporting', c: false, p: -120, f: 'Wrong. A pass rate without evidence is weak.' }
        ]
    },

    {
        id: 314, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Production Secrets in Test Environment",
        desc: "Production API keys are found inside the shared test environment configuration.",
        actions: [
            { l: 'Share the keys with testers to continue testing', s: 'Access control failure', c: false, p: -240, f: 'Wrong. This increases exposure and security risk.' },
            { l: 'Treat as security incident, revoke secrets, document impact, and fix controls', s: '29119-2: Environment Management + Incident Reporting', c: true, p: 230, f: 'Correct! Secret exposure requires containment, documentation, and preventive controls.' },
            { l: 'Delete the keys silently', s: 'Incomplete incident handling', c: false, p: -130, f: 'Wrong. Revocation and incident documentation are also required.' },
            { l: 'Ignore because the test environment is internal', s: 'Security assumption', c: false, p: -180, f: 'Wrong. Internal exposure can still be critical.' }
        ]
    },

    {
        id: 315, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Audit Asks for Traceability",
        desc: "An auditor asks for traceability from requirement to test case to execution result to defect record.",
        actions: [
            { l: 'Create fake links quickly to satisfy audit', s: 'False traceability', c: false, p: -230, f: 'Wrong. Fabricating evidence is a serious integrity violation.' },
            { l: 'Provide traceable evidence and identify documented gaps', s: '29119-2: Test Documentation', c: true, p: 180, f: 'Correct! Traceability supports auditability and confidence in test results.' },
            { l: 'Provide only screenshots', s: 'Partial evidence', c: false, p: -80, f: 'Wrong. Screenshots alone do not show full traceability.' },
            { l: 'Refuse the audit request', s: 'Poor governance', c: false, p: -100, f: 'Wrong. Test evidence should be available and reviewable.' }
        ]
    },

    {
        id: 316, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Privacy Breach During Testing",
        desc: "A tester exported personal customer data to a personal laptop to prepare test data faster.",
        actions: [
            { l: 'Ask tester to delete it and move on', s: 'Insufficient response', c: false, p: -170, f: 'Wrong. The breach must be assessed, documented, and contained.' },
            { l: 'Declare incident, secure data, notify responsible parties, and correct data process', s: '29119-2: Incident + Test Data Management', c: true, p: 230, f: 'Correct! Personal data exposure is a critical incident and requires formal handling.' },
            { l: 'Ignore because it was for testing', s: 'Privacy risk ignored', c: false, p: -220, f: 'Wrong. Testing does not remove privacy obligations.' },
            { l: 'Hide from management to protect the tester', s: 'Concealment', c: false, p: -240, f: 'Wrong. Concealment increases organizational risk.' }
        ]
    },

    {
        id: 317, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Completion Criteria Conflict",
        desc: "Coverage target is met, but two critical defects remain open.",
        actions: [
            { l: 'Release because coverage target is met', s: 'Single-criterion decision', c: false, p: -170, f: 'Wrong. Meeting one criterion does not cancel critical defect risk.' },
            { l: 'Report criteria conflict and escalate release decision with residual risk', s: '29119-2: Test Completion', c: true, p: 200, f: 'Correct! Completion decisions must consider all criteria and remaining risks.' },
            { l: 'Close defects to satisfy criteria', s: 'False closure', c: false, p: -230, f: 'Wrong. Criteria must not be manipulated.' },
            { l: 'Ignore coverage because defects exist', s: 'Incomplete analysis', c: false, p: -80, f: 'Wrong. Both coverage and defect status matter.' }
        ]
    },

    {
        id: 318, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Final Build Differs From Tested Build",
        desc: "The final release candidate was built from a different branch than the one used during testing.",
        actions: [
            { l: 'Use previous test results because changes look small', s: 'Invalid evidence', c: false, p: -210, f: 'Wrong. Test evidence applies to the tested configuration.' },
            { l: 'Invalidate prior evidence for final build and require targeted verification', s: '29119-2: Configuration + Test Control', c: true, p: 230, f: 'Correct! A different build invalidates confidence from previous test evidence.' },
            { l: 'Approve if branch names are similar', s: 'Assumption', c: false, p: -160, f: 'Wrong. Configuration identity matters.' },
            { l: 'Hide the branch mismatch', s: 'Concealment', c: false, p: -240, f: 'Wrong. Configuration mismatch must be reported.' }
        ]
    },

    {
        id: 319, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Coverage Dashboard Inaccurate",
        desc: "Dashboard shows 100% coverage, but several test cases are obsolete and no longer match requirements.",
        actions: [
            { l: 'Trust dashboard blindly', s: 'Metric misuse', c: false, p: -130, f: 'Wrong. Metrics require interpretation and validation.' },
            { l: 'Review coverage validity and update dashboard with limitations', s: '29119-2: Monitoring + Test Maintenance', c: true, p: 180, f: 'Correct! Coverage metrics must reflect valid and current test assets.' },
            { l: 'Hide obsolete tests', s: 'Concealment', c: false, p: -160, f: 'Wrong. Test asset quality problems should be corrected.' },
            { l: 'Delete the dashboard', s: 'Overreaction', c: false, p: -70, f: 'Wrong. Fix the data quality instead.' }
        ]
    },

    {
        id: 320, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Emergency Fix Lacks Test Record",
        desc: "A critical production hotfix was tested informally, but no execution evidence or test record exists.",
        actions: [
            { l: 'Accept verbal confirmation only', s: 'No evidence', c: false, p: -160, f: 'Wrong. Verbal confirmation is weak evidence.' },
            { l: 'Create formal test record, capture evidence, and assess residual risk', s: '29119-2: Test Execution + Incident Control', c: true, p: 210, f: 'Correct! Emergency context still requires traceable evidence.' },
            { l: 'Skip documentation because it was emergency', s: 'Process bypass', c: false, p: -190, f: 'Wrong. Documentation is especially important under pressure.' },
            { l: 'Mark all related tests as passed', s: 'False evidence', c: false, p: -230, f: 'Wrong. Only executed tests with evidence can pass.' }
        ]
    },

    {
        id: 321, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Different Teams Use Different Defect Workflows",
        desc: "One team closes defects after developer fix; another requires tester verification before closure.",
        actions: [
            { l: 'Let each team do whatever they prefer', s: 'Process inconsistency', c: false, p: -110, f: 'Wrong. Inconsistent workflows distort defect status.' },
            { l: 'Standardize defect workflow and define verification responsibility', s: '29119-2: Incident Management Process', c: true, p: 180, f: 'Correct! A clear workflow improves consistency and traceability.' },
            { l: 'Remove verification step for speed', s: 'Weak control', c: false, p: -150, f: 'Wrong. Verification supports reliable closure.' },
            { l: 'Block all defect closure forever', s: 'No lifecycle control', c: false, p: -80, f: 'Wrong. Defects need controlled closure, not no closure.' }
        ]
    },

    {
        id: 322, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Data Corruption Defect Is Rare But Severe",
        desc: "A defect corrupts financial records only under rare conditions, but the condition is realistic.",
        actions: [
            { l: 'Release because it is rare', s: 'Probability-only reasoning', c: false, p: -190, f: 'Wrong. Severity depends on impact as well as likelihood.' },
            { l: 'Escalate critical risk with evidence and prevent unsupported release decision', s: '29119-2: Critical Incident + Completion Risk', c: true, p: 230, f: 'Correct! Rare but severe defects can still block release readiness.' },
            { l: 'Mention it only verbally', s: 'No audit trail', c: false, p: -150, f: 'Wrong. Critical risk must be documented.' },
            { l: 'Lower severity to avoid blocking release', s: 'Severity manipulation', c: false, p: -230, f: 'Wrong. Severity should reflect real impact.' }
        ]
    },

    {
        id: 323, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Stakeholder Asks for Green Dashboard Only",
        desc: "Management wants a simplified report that excludes open risks and limitations.",
        actions: [
            { l: 'Remove risks to make dashboard green', s: 'Misleading reporting', c: false, p: -210, f: 'Wrong. This hides release risk.' },
            { l: 'Provide a clear summary while preserving risk and limitation visibility', s: '29119-2: Test Reporting', c: true, p: 190, f: 'Correct! Reports can be concise but must not hide known risks.' },
            { l: 'Refuse to report anything', s: 'Poor communication', c: false, p: -90, f: 'Wrong. Communicate professionally with evidence.' },
            { l: 'Change defect statuses to improve dashboard', s: 'Metric manipulation', c: false, p: -230, f: 'Wrong. Status must reflect reality.' }
        ]
    },

    {
        id: 324, sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Security Fix Bypasses Normal Test Process",
        desc: "A security fix is merged directly into release branch without impact analysis because the team is under pressure.",
        actions: [
            { l: 'Approve because security fixes are always safe', s: 'Unsafe assumption', c: false, p: -180, f: 'Wrong. Security fixes can still create regressions.' },
            { l: 'Assess change impact, define targeted regression, and document residual risk', s: '29119-2: Change Impact + Regression Control', c: true, p: 220, f: 'Correct! Even urgent security fixes need controlled verification.' },
            { l: 'Skip regression to save time', s: 'Untested change', c: false, p: -210, f: 'Wrong. Late changes can introduce severe regression.' },
            { l: 'Run unrelated smoke tests only', s: 'Insufficient evidence', c: false, p: -100, f: 'Wrong. Tests should match change impact.' }
        ]
    },

    {
        id: 325, sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Test Process Tailoring Not Justified",
        desc: "The team skips formal incident reporting and says the project is agile, but no tailoring rationale is documented.",
        actions: [
            { l: 'Accept skipping because agile teams do not need documentation', s: 'Misunderstood tailoring', c: false, p: -160, f: 'Wrong. Tailoring does not mean ignoring process without rationale.' },
            { l: 'Document tailoring decision, rationale, risks, and stakeholder agreement', s: '29119-2: Tailored Conformance', c: true, p: 200, f: 'Correct! Tailoring decisions should be justified, recorded, and agreed with stakeholders.' },
            { l: 'Hide incidents in chat only', s: 'No traceability', c: false, p: -180, f: 'Wrong. Incident information still needs traceability.' },
            { l: 'Claim full conformance without evidence', s: 'False conformance', c: false, p: -220, f: 'Wrong. Conformance claims must match actual process evidence.' }
        ]
    }
    ,
    {
        id: 326, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Residual risk hidden from stakeholders",
        desc: "The release report removes known residual risks to avoid delaying approval.",
        actions: [
            { l: 'Restore residual risks to the report and escalate transparently', s: '29119-2: Test completion reporting', c: true, p: 220, f: 'Correct! Residual risk visibility is essential for informed release decisions.' },
            { l: 'Keep the report simplified and positive', s: 'Misleading reporting', c: false, p: -240, f: 'Wrong. Hiding residual risk creates dangerous false confidence.' },
            { l: 'Delete risk records permanently', s: 'Evidence destruction', c: false, p: -260, f: 'Wrong. Risk evidence must remain traceable.' },
            { l: 'Approve release silently', s: 'Unsupported approval', c: false, p: -210, f: 'Wrong. Approval decisions should be evidence-based.' }
        ]
    },

    {
        id: 327, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation results unreliable",
        desc: "Automation scripts pass locally but fail randomly in CI/CD with inconsistent timing issues.",
        actions: [
            { l: 'Investigate instability and classify affected tests as unreliable until fixed', s: '29119-2: Test execution control', c: true, p: 190, f: 'Correct! Flaky automation reduces confidence and must be investigated.' },
            { l: 'Ignore CI failures if local runs pass', s: 'False confidence', c: false, p: -180, f: 'Wrong. CI instability may reveal real environmental or timing risks.' },
            { l: 'Delete all unstable tests immediately', s: 'Coverage loss', c: false, p: -140, f: 'Wrong. Investigate before removing coverage.' },
            { l: 'Mark unstable runs as passed', s: 'False reporting', c: false, p: -220, f: 'Wrong. Execution status must reflect real evidence.' }
        ]
    },

    {
        id: 328, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Sensitive customer data exposed in logs",
        desc: "Production user passwords appear in exported test execution logs.",
        actions: [
            { l: 'Contain exposure, sanitize logs, revoke affected credentials, and document the incident', s: '29119-2: Incident and data management', c: true, p: 240, f: 'Correct! Sensitive data exposure requires immediate containment and reporting.' },
            { l: 'Delete logs quietly and continue testing', s: 'Concealment', c: false, p: -260, f: 'Wrong. Exposure impact must still be assessed and documented.' },
            { l: 'Ignore because logs are internal', s: 'Security misunderstanding', c: false, p: -230, f: 'Wrong. Internal exposure can still be critical.' },
            { l: 'Share logs only with developers', s: 'Unsafe handling', c: false, p: -180, f: 'Wrong. Sensitive data should be protected and minimized.' }
        ]
    },

    {
        id: 329, category: 'planning', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Critical dependencies not tested",
        desc: "Third-party integrations were excluded from testing because vendor documentation claimed compatibility.",
        actions: [
            { l: 'Assess integration risk and execute targeted validation tests', s: '29119-2: Risk-based testing', c: true, p: 190, f: 'Correct! Vendor claims do not replace integration testing evidence.' },
            { l: 'Trust vendor documentation completely', s: 'Unsupported assumption', c: false, p: -170, f: 'Wrong. External integrations can still fail in real environments.' },
            { l: 'Remove integration scope permanently', s: 'Coverage manipulation', c: false, p: -220, f: 'Wrong. Critical integrations require verification.' },
            { l: 'Approve release without evidence', s: 'Unsupported decision', c: false, p: -210, f: 'Wrong. Decisions should rely on test evidence.' }
        ]
    },

    {
        id: 330, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Known defect intentionally hidden",
        desc: "A severe defect is intentionally omitted from stakeholder reports to avoid project escalation.",
        actions: [
            { l: 'Restore the defect to official reporting and escalate appropriately', s: '29119-2: Incident reporting integrity', c: true, p: 250, f: 'Correct! Intentional concealment violates testing ethics and governance.' },
            { l: 'Keep the omission secret', s: 'Concealment', c: false, p: -300, f: 'Wrong. Hiding severe defects creates major organizational risk.' },
            { l: 'Lower severity to avoid attention', s: 'Severity manipulation', c: false, p: -260, f: 'Wrong. Severity should reflect actual impact.' },
            { l: 'Delete related evidence', s: 'Evidence destruction', c: false, p: -320, f: 'Wrong. Destroying evidence is a severe integrity violation.' }
        ]
    }
    ,
    {
        id: 331, category: 'completion', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Release approved without completion review",
        desc: "A release was approved even though the formal test completion evaluation meeting never happened.",
        actions: [
            { l: 'Conduct the completion evaluation and reassess release readiness formally', s: '29119-2: Test completion control', c: true, p: 220, f: 'Correct! Formal completion evaluation ensures evidence, risks, and criteria are reviewed properly.' },
            { l: 'Assume approval already means testing is complete', s: 'Unsupported assumption', c: false, p: -180, f: 'Wrong. Release approval should rely on formal completion evidence.' },
            { l: 'Skip documentation to save time', s: 'Missing governance', c: false, p: -220, f: 'Wrong. Completion evidence must remain traceable.' },
            { l: 'Delete unfinished reports', s: 'Evidence destruction', c: false, p: -250, f: 'Wrong. Incomplete evidence should be finalized, not destroyed.' }
        ]
    },

    {
        id: 332, category: 'traceability', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Traceability matrix outdated",
        desc: "Requirements changed two weeks ago, but traceability links were never updated.",
        actions: [
            { l: 'Update traceability links and identify invalidated evidence', s: '29119-3: Traceability maintenance', c: true, p: 190, f: 'Correct! Requirement changes may invalidate old coverage and evidence.' },
            { l: 'Keep the old matrix unchanged', s: 'Invalid traceability', c: false, p: -170, f: 'Wrong. Outdated traceability creates false confidence.' },
            { l: 'Delete changed requirements', s: 'Scope concealment', c: false, p: -230, f: 'Wrong. Requirement changes should remain visible and controlled.' },
            { l: 'Ignore traceability after execution starts', s: 'Weak governance', c: false, p: -150, f: 'Wrong. Traceability remains important throughout the lifecycle.' }
        ]
    },

    {
        id: 333, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Unauthorized production access during testing",
        desc: "A tester accidentally receives administrator access to live production systems.",
        actions: [
            { l: 'Revoke access immediately, investigate exposure, and document the incident', s: '29119-2: Security and incident management', c: true, p: 240, f: 'Correct! Unauthorized production access is a critical operational and security incident.' },
            { l: 'Ignore because no damage occurred', s: 'Security negligence', c: false, p: -230, f: 'Wrong. Unauthorized access itself is already a serious issue.' },
            { l: 'Share the access with the team', s: 'Severe security violation', c: false, p: -300, f: 'Wrong. Unauthorized privileges must never spread further.' },
            { l: 'Hide the event from management', s: 'Concealment', c: false, p: -280, f: 'Wrong. Critical access issues require escalation and documentation.' }
        ]
    },

    {
        id: 334, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation maintenance ignored",
        desc: "Hundreds of automation scripts fail because UI changes were never reflected in the framework.",
        actions: [
            { l: 'Prioritize maintenance and restore automation reliability systematically', s: '29119-2: Test maintenance', c: true, p: 190, f: 'Correct! Testware maintenance is essential for sustainable automation.' },
            { l: 'Ignore failures and trust historical results', s: 'False confidence', c: false, p: -180, f: 'Wrong. Old passing results do not validate current behavior.' },
            { l: 'Delete all failing automation scripts', s: 'Coverage loss', c: false, p: -200, f: 'Wrong. Coverage should be repaired, not abandoned blindly.' },
            { l: 'Mark all failed scripts as passed', s: 'False reporting', c: false, p: -240, f: 'Wrong. Reporting must reflect actual execution evidence.' }
        ]
    },

    {
        id: 335, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Critical risk accepted without evidence",
        desc: "Management accepts a severe availability risk without reviewing test results or supporting evidence.",
        actions: [
            { l: 'Require evidence-based risk review and document the acceptance decision', s: '29119-2: Risk communication', c: true, p: 230, f: 'Correct! Accepted risks should still be evidence-based and traceable.' },
            { l: 'Proceed because management accepted it verbally', s: 'Weak governance', c: false, p: -200, f: 'Wrong. Verbal acceptance alone is insufficient.' },
            { l: 'Delete failed availability results', s: 'Evidence manipulation', c: false, p: -270, f: 'Wrong. Removing evidence destroys transparency.' },
            { l: 'Mark the risk resolved automatically', s: 'False closure', c: false, p: -220, f: 'Wrong. Acceptance does not eliminate the risk itself.' }
        ]
    },

    {
        id: 336, category: 'documentation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Test evidence stored inconsistently",
        desc: "Execution screenshots, logs, and reports are spread across personal devices and chats.",
        actions: [
            { l: 'Centralize and control evidence storage with defined access and retention', s: '29119-3: Test documentation management', c: true, p: 180, f: 'Correct! Controlled evidence storage improves auditability and traceability.' },
            { l: 'Allow everyone to store evidence anywhere', s: 'Weak evidence governance', c: false, p: -150, f: 'Wrong. Distributed uncontrolled evidence creates loss and integrity risk.' },
            { l: 'Delete old evidence to reduce storage', s: 'Evidence destruction', c: false, p: -220, f: 'Wrong. Retention should follow controlled policy.' },
            { l: 'Keep evidence only in private chats', s: 'Poor traceability', c: false, p: -170, f: 'Wrong. Private communication is not reliable evidence management.' }
        ]
    },

    {
        id: 337, category: 'metrics', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Pass rate used incorrectly",
        desc: "A dashboard shows 98% passed tests, but critical workflows were never executed.",
        actions: [
            { l: 'Interpret pass rate together with scope, coverage, and residual risks', s: '29119-2: Metrics interpretation', c: true, p: 190, f: 'Correct! High pass percentages can still hide serious gaps.' },
            { l: 'Approve release immediately because pass rate is high', s: 'Metric misuse', c: false, p: -210, f: 'Wrong. Pass percentage alone does not prove readiness.' },
            { l: 'Hide unexecuted scenarios', s: 'Concealment', c: false, p: -240, f: 'Wrong. Missing coverage must remain visible.' },
            { l: 'Delete failed critical tests from reporting', s: 'False reporting', c: false, p: -260, f: 'Wrong. Metrics should reflect reality.' }
        ]
    },

    {
        id: 338, category: 'environment', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Environment reset corrupted data",
        desc: "A reset script accidentally deletes valid testing evidence and databases.",
        actions: [
            { l: 'Treat the event as an operational incident and assess recovery options immediately', s: '29119-2: Environment and incident management', c: true, p: 230, f: 'Correct! Evidence and environment corruption require immediate containment and recovery analysis.' },
            { l: 'Ignore because backups may exist', s: 'Unsupported assumption', c: false, p: -190, f: 'Wrong. Recovery capability must be verified.' },
            { l: 'Hide the deletion from stakeholders', s: 'Concealment', c: false, p: -260, f: 'Wrong. Data and evidence loss must be reported.' },
            { l: 'Continue testing on corrupted data', s: 'Invalid execution basis', c: false, p: -210, f: 'Wrong. Corrupted environments reduce confidence in results.' }
        ]
    },

    {
        id: 339, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Severity intentionally downgraded",
        desc: "A project lead lowers multiple critical incidents to medium severity before governance review.",
        actions: [
            { l: 'Restore evidence-based classification and escalate integrity concerns', s: '29119-2: Incident classification governance', c: true, p: 240, f: 'Correct! Severity should reflect actual impact, not political pressure.' },
            { l: 'Accept the downgrade to avoid conflict', s: 'Integrity failure', c: false, p: -230, f: 'Wrong. Misclassification distorts release decisions.' },
            { l: 'Delete the original classifications', s: 'Evidence manipulation', c: false, p: -280, f: 'Wrong. Historical incident evidence should remain traceable.' },
            { l: 'Ignore severity because all bugs are equal', s: 'Poor prioritization', c: false, p: -180, f: 'Wrong. Severity affects risk prioritization and planning.' }
        ]
    },

    {
        id: 340, category: 'process', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Testing process bypassed under pressure",
        desc: "Emergency changes are repeatedly deployed without normal testing workflow or approvals.",
        actions: [
            { l: 'Implement controlled emergency procedures with documented approvals and evidence', s: '29119-2: Controlled process tailoring', c: true, p: 200, f: 'Correct! Emergency processes still require governance and traceability.' },
            { l: 'Allow unlimited bypasses for speed', s: 'Uncontrolled process', c: false, p: -220, f: 'Wrong. Repeated uncontrolled bypasses increase operational risk.' },
            { l: 'Skip all documentation during emergencies', s: 'Loss of traceability', c: false, p: -230, f: 'Wrong. Emergency situations increase the need for evidence.' },
            { l: 'Hide emergency releases from audit records', s: 'Concealment', c: false, p: -260, f: 'Wrong. Auditability should remain intact.' }
        ]
    }
    ,
    {
        id: 341, category: 'completion', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Residual defects omitted from sign-off",
        desc: "The final sign-off document excludes several unresolved high-severity incidents.",
        actions: [
            { l: 'Update the sign-off with unresolved incidents and residual risk details', s: '29119-2: Test completion reporting', c: true, p: 230, f: 'Correct! Residual defects must remain visible for informed release decisions.' },
            { l: 'Keep the sign-off simplified and positive', s: 'Misleading reporting', c: false, p: -240, f: 'Wrong. Hiding unresolved issues creates false confidence.' },
            { l: 'Delete unresolved incidents before sign-off', s: 'Evidence manipulation', c: false, p: -290, f: 'Wrong. Incident records should remain traceable.' },
            { l: 'Approve release without reviewing defect status', s: 'Unsupported approval', c: false, p: -210, f: 'Wrong. Completion decisions require evidence review.' }
        ]
    },

    {
        id: 342, category: 'traceability', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Requirement coverage falsely duplicated",
        desc: "One executed test case is linked to many unrelated requirements to inflate coverage metrics.",
        actions: [
            { l: 'Correct traceability links and reassess actual coverage', s: '29119-3: Traceability integrity', c: true, p: 190, f: 'Correct! Traceability should reflect real evidence and valid relationships.' },
            { l: 'Keep duplicated links to improve metrics', s: 'False coverage reporting', c: false, p: -220, f: 'Wrong. Artificially inflated coverage hides testing gaps.' },
            { l: 'Remove uncovered requirements silently', s: 'Concealment', c: false, p: -240, f: 'Wrong. Missing coverage should be visible.' },
            { l: 'Ignore the issue because tests passed', s: 'Weak governance', c: false, p: -170, f: 'Wrong. Traceability quality matters for trustworthy reporting.' }
        ]
    },

    {
        id: 343, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Security fix untested in production-like conditions",
        desc: "A late encryption fix passed unit tests only and skipped integration and environment validation.",
        actions: [
            { l: 'Execute targeted integration and environment validation before release', s: '29119-2: Risk-based verification', c: true, p: 230, f: 'Correct! Security changes require validation in realistic conditions.' },
            { l: 'Release because unit tests passed', s: 'Insufficient evidence', c: false, p: -220, f: 'Wrong. Unit success alone cannot validate system-level security behavior.' },
            { l: 'Skip additional testing to save time', s: 'Uncontrolled risk', c: false, p: -250, f: 'Wrong. Late critical changes increase release risk.' },
            { l: 'Hide missing integration coverage', s: 'Concealment', c: false, p: -280, f: 'Wrong. Missing evidence should remain visible.' }
        ]
    },

    {
        id: 344, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation reports generated incorrectly",
        desc: "The reporting tool marks skipped automation scripts as successful executions.",
        actions: [
            { l: 'Correct report logic and distinguish skipped, blocked, failed, and passed tests', s: '29119-2: Test status reporting', c: true, p: 190, f: 'Correct! Accurate execution state classification supports reliable reporting.' },
            { l: 'Treat skipped tests as passed to simplify dashboards', s: 'False reporting', c: false, p: -230, f: 'Wrong. Skipped tests are not execution success.' },
            { l: 'Delete skipped scripts from reports', s: 'Coverage concealment', c: false, p: -210, f: 'Wrong. Missing execution scope should remain visible.' },
            { l: 'Ignore the incorrect status mapping', s: 'Weak quality control', c: false, p: -180, f: 'Wrong. Reporting integrity is critical for decision-making.' }
        ]
    },

    {
        id: 345, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Business-critical workflow never executed",
        desc: "The most important financial workflow was excluded from execution due to lack of test data.",
        actions: [
            { l: 'Escalate the missing coverage and assess release impact immediately', s: '29119-2: Risk and coverage management', c: true, p: 240, f: 'Correct! Untested critical workflows create major residual risk.' },
            { l: 'Release because other workflows passed', s: 'Coverage misconception', c: false, p: -240, f: 'Wrong. Passing unrelated workflows does not reduce untested critical risk.' },
            { l: 'Mark the workflow tested anyway', s: 'False evidence', c: false, p: -300, f: 'Wrong. Unexecuted scope cannot be reported as covered.' },
            { l: 'Delete the workflow from scope', s: 'Scope manipulation', c: false, p: -270, f: 'Wrong. Critical scope changes require visibility and approval.' }
        ]
    },

    {
        id: 346, category: 'documentation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Audit trail incomplete",
        desc: "Execution timestamps, reviewer approvals, and environment identifiers are missing from records.",
        actions: [
            { l: 'Restore traceable audit information and improve record controls', s: '29119-3: Test documentation and auditability', c: true, p: 190, f: 'Correct! Auditability depends on controlled and complete records.' },
            { l: 'Ignore missing metadata', s: 'Weak traceability', c: false, p: -170, f: 'Wrong. Missing context reduces confidence in execution evidence.' },
            { l: 'Invent missing timestamps manually', s: 'False documentation', c: false, p: -240, f: 'Wrong. Records must remain accurate and trustworthy.' },
            { l: 'Delete incomplete records', s: 'Evidence destruction', c: false, p: -250, f: 'Wrong. Incomplete evidence should be corrected, not destroyed.' }
        ]
    },

    {
        id: 347, category: 'metrics', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Coverage metrics contradict reality",
        desc: "Reports claim 100% execution, but many planned tests were never implemented.",
        actions: [
            { l: 'Correct reporting to reflect implementation and execution gaps accurately', s: '29119-2: Metrics integrity', c: true, p: 200, f: 'Correct! Coverage metrics should reflect real implementation and execution evidence.' },
            { l: 'Keep the 100% value because stakeholders expect success', s: 'False metrics', c: false, p: -240, f: 'Wrong. Misleading metrics distort release decisions.' },
            { l: 'Delete unimplemented test cases from plans', s: 'Scope concealment', c: false, p: -220, f: 'Wrong. Missing implementation should remain visible.' },
            { l: 'Ignore implementation gaps', s: 'Weak planning control', c: false, p: -180, f: 'Wrong. Unimplemented scope represents real testing risk.' }
        ]
    },

    {
        id: 348, category: 'environment', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Environment configuration undocumented",
        desc: "A critical failure occurs, but nobody can determine which configuration version was used during execution.",
        actions: [
            { l: 'Implement strict configuration identification and execution traceability', s: '29119-2: Configuration and environment control', c: true, p: 230, f: 'Correct! Environment traceability is essential for reproducibility and investigation.' },
            { l: 'Guess which configuration was probably used', s: 'Unsupported assumption', c: false, p: -190, f: 'Wrong. Investigations require evidence, not assumptions.' },
            { l: 'Ignore configuration tracking', s: 'Weak governance', c: false, p: -220, f: 'Wrong. Missing configuration traceability creates severe analysis problems.' },
            { l: 'Delete inconsistent environment records', s: 'Evidence destruction', c: false, p: -270, f: 'Wrong. Evidence should remain traceable.' }
        ]
    },

    {
        id: 349, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Defect reopened after production outage",
        desc: "A defect marked as resolved causes a major outage immediately after release.",
        actions: [
            { l: 'Reopen the incident, analyze root cause, and review verification effectiveness', s: '29119-2: Incident lifecycle and verification review', c: true, p: 240, f: 'Correct! Reappearing failures require root-cause and verification analysis.' },
            { l: 'Blame operations immediately', s: 'Premature blame', c: false, p: -150, f: 'Wrong. Evidence and analysis should come first.' },
            { l: 'Delete the original incident history', s: 'Evidence manipulation', c: false, p: -280, f: 'Wrong. Historical traceability is critical for investigation.' },
            { l: 'Ignore the reopened failure', s: 'Severe governance failure', c: false, p: -300, f: 'Wrong. Production-impacting defects require immediate response.' }
        ]
    },

    {
        id: 350, category: 'process', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Testing integrity compromised",
        desc: "A senior stakeholder pressures testers to alter results to avoid delaying launch.",
        actions: [
            { l: 'Maintain evidence integrity and escalate unethical pressure appropriately', s: '29119-2: Professional and reporting integrity', c: true, p: 250, f: 'Correct! Testing evidence must remain objective and trustworthy under all conditions.' },
            { l: 'Adjust results slightly to reduce conflict', s: 'Integrity violation', c: false, p: -260, f: 'Wrong. Altering evidence compromises the entire decision process.' },
            { l: 'Delete negative results entirely', s: 'Severe misconduct', c: false, p: -320, f: 'Wrong. Destroying evidence is a critical violation.' },
            { l: 'Approve release without evidence review', s: 'Unsupported release decision', c: false, p: -240, f: 'Wrong. Release confidence should depend on objective evidence.' }
        ]
    }
    ,
    {
        id: 351, category: 'completion', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Critical scenarios excluded from summary",
        desc: "The executive summary highlights successful testing but excludes failed disaster recovery scenarios.",
        actions: [
            { l: 'Include failed recovery scenarios and explain residual operational risk', s: '29119-2: Completion reporting transparency', c: true, p: 230, f: 'Correct! Executive summaries must still reflect critical unresolved risks.' },
            { l: 'Keep only positive outcomes for executives', s: 'Misleading reporting', c: false, p: -240, f: 'Wrong. Stakeholders require balanced and truthful reporting.' },
            { l: 'Delete disaster recovery evidence', s: 'Evidence destruction', c: false, p: -290, f: 'Wrong. Critical failure evidence must remain traceable.' },
            { l: 'Mark recovery tests as passed manually', s: 'False reporting', c: false, p: -310, f: 'Wrong. Test status must reflect actual execution results.' }
        ]
    },

    {
        id: 352, category: 'traceability', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Safety requirement lacks verification",
        desc: "A safety-critical requirement exists in specifications but has no linked test cases or execution evidence.",
        actions: [
            { l: 'Escalate the missing verification gap and create traceable coverage immediately', s: '29119-3: Traceability and coverage assurance', c: true, p: 240, f: 'Correct! Safety-related requirements require explicit and traceable verification evidence.' },
            { l: 'Assume developers already validated it', s: 'Unsupported assumption', c: false, p: -220, f: 'Wrong. Verification should rely on objective evidence.' },
            { l: 'Remove the requirement from the matrix', s: 'Concealment', c: false, p: -280, f: 'Wrong. Removing requirements hides major risk exposure.' },
            { l: 'Approve release because similar areas were tested', s: 'Invalid equivalence', c: false, p: -240, f: 'Wrong. Similar coverage does not replace direct verification.' }
        ]
    },

    {
        id: 353, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Known exploit left unresolved",
        desc: "A known exploit path exists in production, but mitigation was postponed to the next release cycle.",
        actions: [
            { l: 'Document exposure, escalate severity, and reassess release readiness immediately', s: '29119-2: Security incident escalation', c: true, p: 250, f: 'Correct! Known exploitable vulnerabilities require formal reassessment and escalation.' },
            { l: 'Ignore because no attacks happened yet', s: 'Risk minimization', c: false, p: -240, f: 'Wrong. Lack of exploitation does not eliminate vulnerability risk.' },
            { l: 'Hide the exploit from customers and auditors', s: 'Concealment', c: false, p: -320, f: 'Wrong. Concealing known security exposure creates severe risk.' },
            { l: 'Lower severity to medium temporarily', s: 'Severity manipulation', c: false, p: -280, f: 'Wrong. Severity should reflect actual impact and exploitability.' }
        ]
    },

    {
        id: 354, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation environment differs from production",
        desc: "Automated suites run only on lightweight containers while production uses distributed infrastructure.",
        actions: [
            { l: 'Assess infrastructure differences and add representative validation coverage', s: '29119-2: Environment representativeness', c: true, p: 200, f: 'Correct! Environment differences can invalidate assumptions about scalability and behavior.' },
            { l: 'Assume automation results fully represent production', s: 'Unsupported assumption', c: false, p: -190, f: 'Wrong. Production-like conditions matter for confidence.' },
            { l: 'Remove infrastructure concerns from reports', s: 'Concealment', c: false, p: -230, f: 'Wrong. Stakeholders should understand environment limitations.' },
            { l: 'Disable production monitoring instead', s: 'Incorrect response', c: false, p: -160, f: 'Wrong. Monitoring does not replace representative testing.' }
        ]
    },

    {
        id: 355, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Risk register intentionally incomplete",
        desc: "Several severe risks were omitted from the register because leadership feared escalation.",
        actions: [
            { l: 'Restore omitted risks and escalate governance concerns transparently', s: '29119-2: Risk management integrity', c: true, p: 250, f: 'Correct! Risk visibility is essential for informed decision-making.' },
            { l: 'Keep the register simplified for executives', s: 'Misleading governance', c: false, p: -250, f: 'Wrong. Hiding risks compromises planning and release quality.' },
            { l: 'Delete remaining risk evidence', s: 'Evidence destruction', c: false, p: -320, f: 'Wrong. Risk evidence should remain traceable.' },
            { l: 'Mark omitted risks as resolved automatically', s: 'False closure', c: false, p: -260, f: 'Wrong. Hidden risks still exist operationally.' }
        ]
    },

    {
        id: 356, category: 'documentation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Test evidence cannot be reproduced",
        desc: "Months later, nobody can reproduce how a major release approval decision was justified.",
        actions: [
            { l: 'Improve evidence retention, traceability, and decision documentation practices', s: '29119-3: Evidence and auditability', c: true, p: 200, f: 'Correct! Release justification should remain reproducible and auditable.' },
            { l: 'Rely on team memory only', s: 'Weak auditability', c: false, p: -170, f: 'Wrong. Memory is not reliable evidence.' },
            { l: 'Delete historical approvals to reduce confusion', s: 'Evidence destruction', c: false, p: -250, f: 'Wrong. Historical traceability is essential.' },
            { l: 'Ignore reproducibility concerns', s: 'Weak governance', c: false, p: -190, f: 'Wrong. Long-term evidence retention matters for audits and investigations.' }
        ]
    },

    {
        id: 357, category: 'metrics', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Metrics optimized instead of quality",
        desc: "Teams prioritize improving dashboard numbers instead of addressing underlying defect trends.",
        actions: [
            { l: 'Refocus metrics on decision support and underlying quality risks', s: '29119-2: Metrics interpretation and governance', c: true, p: 220, f: 'Correct! Metrics should support quality understanding, not become targets themselves.' },
            { l: 'Reward only higher pass percentages', s: 'Metric misuse', c: false, p: -220, f: 'Wrong. Optimizing numbers alone can hide serious issues.' },
            { l: 'Remove failed trends from dashboards', s: 'Concealment', c: false, p: -270, f: 'Wrong. Trends should remain visible for analysis.' },
            { l: 'Delete historical metric data', s: 'Evidence loss', c: false, p: -230, f: 'Wrong. Historical metrics support continuous improvement.' }
        ]
    },

    {
        id: 358, category: 'environment', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Production outage caused by test artifact",
        desc: "A forgotten test configuration accidentally activates in production after deployment.",
        actions: [
            { l: 'Treat as a critical operational incident and review environment separation controls', s: '29119-2: Environment and configuration management', c: true, p: 250, f: 'Correct! Test artifacts leaking into production indicate serious control failures.' },
            { l: 'Remove evidence of the test configuration', s: 'Concealment', c: false, p: -310, f: 'Wrong. Evidence is required for investigation and prevention.' },
            { l: 'Blame one tester and move on', s: 'Weak root-cause analysis', c: false, p: -170, f: 'Wrong. Systemic process weaknesses should also be analyzed.' },
            { l: 'Ignore because the outage was temporary', s: 'Risk minimization', c: false, p: -240, f: 'Wrong. Temporary outages can still reveal major governance issues.' }
        ]
    },

    {
        id: 359, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Critical defect closed without verification",
        desc: "A severe incident was marked resolved based only on developer comments without tester confirmation.",
        actions: [
            { l: 'Reopen the incident and require verification evidence before closure', s: '29119-2: Incident lifecycle verification', c: true, p: 240, f: 'Correct! Closure should depend on verified evidence, not assumptions.' },
            { l: 'Trust developer comments alone', s: 'Unsupported closure', c: false, p: -220, f: 'Wrong. Verification requires objective testing evidence.' },
            { l: 'Delete the incident history', s: 'Evidence manipulation', c: false, p: -290, f: 'Wrong. Historical incident records should remain intact.' },
            { l: 'Ignore verification gaps', s: 'Weak governance', c: false, p: -210, f: 'Wrong. Closure integrity is critical for reliable reporting.' }
        ]
    },

    {
        id: 360, category: 'process', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Quality gates repeatedly bypassed",
        desc: "Mandatory testing quality gates are skipped in every release because deadlines are aggressive.",
        actions: [
            { l: 'Escalate repeated governance failures and redesign the release process realistically', s: '29119-2: Process control and continuous improvement', c: true, p: 250, f: 'Correct! Repeated bypasses indicate systemic process and planning problems.' },
            { l: 'Accept bypasses as normal practice', s: 'Normalization of risk', c: false, p: -250, f: 'Wrong. Repeated uncontrolled bypasses weaken overall quality governance.' },
            { l: 'Remove quality gates permanently', s: 'Loss of control', c: false, p: -300, f: 'Wrong. Gates exist to manage risk and readiness.' },
            { l: 'Hide skipped gates from reports', s: 'Concealment', c: false, p: -320, f: 'Wrong. Governance failures should remain visible.' }
        ]
    }
    ,
    {
        id: 361, category: 'completion', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Release recommendation changed without evidence",
        desc: "The release recommendation changed from 'Not Ready' to 'Ready' even though no additional testing occurred.",
        actions: [
            { l: 'Restore evidence-based recommendation and document justification changes formally', s: '29119-2: Completion recommendation integrity', c: true, p: 240, f: 'Correct! Release recommendations should change only with supporting evidence or documented rationale.' },
            { l: 'Approve because management requested it', s: 'Unsupported decision', c: false, p: -240, f: 'Wrong. Pressure should not replace evidence.' },
            { l: 'Delete previous recommendation history', s: 'Evidence manipulation', c: false, p: -300, f: 'Wrong. Recommendation history should remain traceable.' },
            { l: 'Ignore the inconsistency', s: 'Weak governance', c: false, p: -220, f: 'Wrong. Recommendation integrity is critical for auditability.' }
        ]
    },

    {
        id: 362, category: 'traceability', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Compliance requirement not testable",
        desc: "A regulatory requirement was approved without defining measurable verification conditions.",
        actions: [
            { l: 'Clarify measurable acceptance and verification conditions before approval', s: '29119-3: Requirement and testability analysis', c: true, p: 230, f: 'Correct! Requirements should be testable and objectively verifiable.' },
            { l: 'Approve anyway and let testers interpret it later', s: 'Ambiguous verification', c: false, p: -220, f: 'Wrong. Ambiguous requirements create inconsistent testing.' },
            { l: 'Mark the requirement as automatically covered', s: 'False traceability', c: false, p: -270, f: 'Wrong. Coverage requires real verification evidence.' },
            { l: 'Remove the requirement from scope', s: 'Concealment', c: false, p: -290, f: 'Wrong. Regulatory requirements cannot simply disappear.' }
        ]
    },

    {
        id: 363, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Security evidence tampered with",
        desc: "Penetration testing screenshots were edited before inclusion in the final report.",
        actions: [
            { l: 'Treat as a serious integrity incident and restore trustworthy evidence immediately', s: '29119-2: Evidence integrity and incident management', c: true, p: 260, f: 'Correct! Tampering with evidence compromises governance, trust, and auditability.' },
            { l: 'Keep edited screenshots because the issue is already fixed', s: 'Evidence manipulation', c: false, p: -320, f: 'Wrong. Historical evidence must remain accurate.' },
            { l: 'Delete the original findings', s: 'Severe misconduct', c: false, p: -340, f: 'Wrong. Destroying original evidence is unacceptable.' },
            { l: 'Ignore the edits because release is urgent', s: 'Integrity failure', c: false, p: -280, f: 'Wrong. Urgency does not justify falsifying evidence.' }
        ]
    },

    {
        id: 364, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation coverage misunderstood",
        desc: "Stakeholders believe automated tests fully replace exploratory and risk-based testing.",
        actions: [
            { l: 'Explain coverage limitations and combine automation with other testing approaches', s: '29119-2: Test strategy and coverage balance', c: true, p: 190, f: 'Correct! Automation is powerful but does not replace all forms of testing.' },
            { l: 'Remove exploratory testing entirely', s: 'Coverage reduction', c: false, p: -200, f: 'Wrong. Exploratory testing can uncover risks automation misses.' },
            { l: 'Claim automation guarantees defect-free software', s: 'False assurance', c: false, p: -230, f: 'Wrong. Testing reduces risk but cannot prove perfection.' },
            { l: 'Ignore stakeholder misunderstanding', s: 'Weak communication', c: false, p: -170, f: 'Wrong. Expectations should be managed clearly.' }
        ]
    },

    {
        id: 365, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Critical dependency unmonitored",
        desc: "A third-party payment API changes behavior in production, but no monitoring or regression process exists.",
        actions: [
            { l: 'Establish dependency monitoring and targeted regression coverage immediately', s: '29119-2: Risk monitoring and regression control', c: true, p: 240, f: 'Correct! External dependencies require ongoing monitoring and regression assessment.' },
            { l: 'Assume vendors will notify all changes', s: 'Unsupported assumption', c: false, p: -210, f: 'Wrong. Vendor communication alone is insufficient risk control.' },
            { l: 'Ignore external changes because tests already passed once', s: 'Static confidence error', c: false, p: -250, f: 'Wrong. Previous success does not guarantee future compatibility.' },
            { l: 'Remove dependency risk from reports', s: 'Concealment', c: false, p: -280, f: 'Wrong. Dependency risks should remain visible.' }
        ]
    },

    {
        id: 366, category: 'documentation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Review approvals unverifiable",
        desc: "Critical review approvals were given verbally and never recorded in the system.",
        actions: [
            { l: 'Introduce traceable review approval recording and audit controls', s: '29119-3: Review and documentation traceability', c: true, p: 190, f: 'Correct! Review decisions should remain traceable and auditable.' },
            { l: 'Trust verbal approvals completely', s: 'Weak governance', c: false, p: -180, f: 'Wrong. Verbal approvals are difficult to audit or verify later.' },
            { l: 'Invent approval timestamps later', s: 'False documentation', c: false, p: -240, f: 'Wrong. Records should reflect real historical events.' },
            { l: 'Delete incomplete review records', s: 'Evidence destruction', c: false, p: -250, f: 'Wrong. Incomplete records should be corrected, not destroyed.' }
        ]
    },

    {
        id: 367, category: 'metrics', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Coverage metric intentionally inflated",
        desc: "Managers instruct teams to count duplicated executions multiple times to improve dashboards.",
        actions: [
            { l: 'Correct metric calculation and report actual execution coverage transparently', s: '29119-2: Metrics governance and integrity', c: true, p: 240, f: 'Correct! Metrics should support truthful project visibility and decisions.' },
            { l: 'Inflate execution counts to satisfy leadership', s: 'False metrics', c: false, p: -300, f: 'Wrong. Artificially inflated metrics destroy trust and governance quality.' },
            { l: 'Delete failed executions from totals', s: 'Concealment', c: false, p: -270, f: 'Wrong. Failures should remain visible in reporting.' },
            { l: 'Ignore metric manipulation concerns', s: 'Weak quality governance', c: false, p: -220, f: 'Wrong. Metric integrity is essential.' }
        ]
    },

    {
        id: 368, category: 'environment', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Test environment secretly reused for production",
        desc: "Operations temporarily routes live customer traffic through a test environment during peak load.",
        actions: [
            { l: 'Escalate the operational risk and restore strict environment separation immediately', s: '29119-2: Environment governance and operational control', c: true, p: 260, f: 'Correct! Production and testing boundaries should remain strictly controlled.' },
            { l: 'Allow it temporarily because performance improved', s: 'Operational risk ignored', c: false, p: -280, f: 'Wrong. Test environments may lack required security and controls.' },
            { l: 'Hide the routing change from audit logs', s: 'Concealment', c: false, p: -330, f: 'Wrong. Hidden operational changes create severe governance risk.' },
            { l: 'Delete related monitoring evidence', s: 'Evidence destruction', c: false, p: -340, f: 'Wrong. Monitoring evidence is critical for investigation.' }
        ]
    },

    {
        id: 369, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Production incident linked to ignored warning",
        desc: "A major outage occurs after a medium-severity warning was repeatedly ignored during testing.",
        actions: [
            { l: 'Investigate root cause, reassess classification practices, and improve escalation rules', s: '29119-2: Incident analysis and process improvement', c: true, p: 240, f: 'Correct! Missed escalation signals should trigger process learning and improvement.' },
            { l: 'Blame testers only', s: 'Weak root-cause analysis', c: false, p: -170, f: 'Wrong. Systemic process weaknesses should also be analyzed.' },
            { l: 'Delete historical warning records', s: 'Evidence manipulation', c: false, p: -300, f: 'Wrong. Historical evidence is important for investigation.' },
            { l: 'Ignore the previous warning trend', s: 'Risk blindness', c: false, p: -250, f: 'Wrong. Historical indicators matter for future prevention.' }
        ]
    },

    {
        id: 370, category: 'process', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Testing reduced to checkbox activity",
        desc: "Teams focus only on completing mandatory templates instead of analyzing actual product risks.",
        actions: [
            { l: 'Refocus testing activities on risk understanding, evidence quality, and decision support', s: '29119-2: Purpose-driven testing process', c: true, p: 250, f: 'Correct! Testing should support informed quality and risk decisions, not just paperwork completion.' },
            { l: 'Continue optimizing only for process compliance numbers', s: 'Process misuse', c: false, p: -240, f: 'Wrong. Compliance without meaningful analysis reduces testing value.' },
            { l: 'Remove all documentation completely', s: 'Loss of governance', c: false, p: -260, f: 'Wrong. Documentation still supports traceability and auditability.' },
            { l: 'Ignore product risk discussions', s: 'Weak quality focus', c: false, p: -280, f: 'Wrong. Risk analysis is central to effective testing.' }
        ]
    }
    ,
    {
        id: 371, category: 'completion', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Release criteria changed after failures",
        desc: "Exit criteria were relaxed only after the project failed to meet the original quality targets.",
        actions: [
            { l: 'Document the rationale, reassess risks, and obtain formal stakeholder approval', s: '29119-2: Test completion governance', c: true, p: 240, f: 'Correct! Exit criteria changes must be transparent, justified, and risk-assessed.' },
            { l: 'Lower criteria quietly to meet deadlines', s: 'Governance manipulation', c: false, p: -280, f: 'Wrong. Quietly weakening quality gates hides real risk.' },
            { l: 'Delete previous criteria records', s: 'Evidence destruction', c: false, p: -310, f: 'Wrong. Historical criteria should remain traceable.' },
            { l: 'Ignore the impact of changing criteria', s: 'Weak risk analysis', c: false, p: -220, f: 'Wrong. Criteria changes directly affect release confidence.' }
        ]
    },

    {
        id: 372, category: 'traceability', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Defects cannot be traced to requirements",
        desc: "Incident reports exist, but nobody can determine which requirements are affected.",
        actions: [
            { l: 'Improve bidirectional traceability between requirements, tests, and incidents', s: '29119-3: Traceability management', c: true, p: 200, f: 'Correct! Effective traceability supports impact analysis and governance.' },
            { l: 'Ignore requirement linkage because defects are already logged', s: 'Incomplete analysis', c: false, p: -180, f: 'Wrong. Traceability helps assess business and release impact.' },
            { l: 'Delete unrelated requirements', s: 'Scope concealment', c: false, p: -240, f: 'Wrong. Missing linkage should be corrected, not hidden.' },
            { l: 'Close incidents without analysis', s: 'Weak governance', c: false, p: -220, f: 'Wrong. Impact analysis requires proper linkage.' }
        ]
    },

    {
        id: 373, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Sensitive logs shared externally",
        desc: "Detailed production error logs containing customer information were shared with an external vendor without approval.",
        actions: [
            { l: 'Treat as a security and privacy incident, contain exposure, and notify responsible parties', s: '29119-2: Security and incident handling', c: true, p: 260, f: 'Correct! Unauthorized external sharing of sensitive information is a serious incident.' },
            { l: 'Ignore because the vendor is trusted', s: 'Security assumption', c: false, p: -240, f: 'Wrong. Trust does not remove governance and privacy obligations.' },
            { l: 'Delete evidence of sharing', s: 'Concealment', c: false, p: -320, f: 'Wrong. Exposure events require investigation and documentation.' },
            { l: 'Continue sharing logs informally', s: 'Unsafe process', c: false, p: -290, f: 'Wrong. Sensitive data sharing should be controlled and approved.' }
        ]
    },

    {
        id: 374, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation success interpreted incorrectly",
        desc: "Stakeholders assume all functionality is validated because automation suites completed successfully overnight.",
        actions: [
            { l: 'Clarify automation scope, limitations, and remaining risks explicitly', s: '29119-2: Reporting and communication', c: true, p: 190, f: 'Correct! Successful automation runs do not automatically prove full product readiness.' },
            { l: 'Allow stakeholders to assume full coverage', s: 'False assurance', c: false, p: -220, f: 'Wrong. Misunderstood coverage creates dangerous confidence gaps.' },
            { l: 'Hide manual testing gaps', s: 'Concealment', c: false, p: -240, f: 'Wrong. Coverage limitations should remain visible.' },
            { l: 'Disable exploratory testing entirely', s: 'Coverage reduction', c: false, p: -210, f: 'Wrong. Automation complements rather than replaces all testing.' }
        ]
    },

    {
        id: 375, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Critical assumptions never validated",
        desc: "A major release depends on assumptions about customer traffic patterns that were never tested.",
        actions: [
            { l: 'Identify assumption risk and perform targeted validation or simulation testing', s: '29119-2: Risk-based validation', c: true, p: 240, f: 'Correct! Untested assumptions can create severe operational surprises.' },
            { l: 'Trust business assumptions completely', s: 'Unsupported confidence', c: false, p: -230, f: 'Wrong. Important assumptions require evidence-based validation.' },
            { l: 'Remove assumption details from reports', s: 'Concealment', c: false, p: -280, f: 'Wrong. Assumptions should remain visible to stakeholders.' },
            { l: 'Approve release without assessment', s: 'Weak governance', c: false, p: -250, f: 'Wrong. Release readiness depends on validated expectations.' }
        ]
    },

    {
        id: 376, category: 'documentation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Critical meeting decisions undocumented",
        desc: "Important release and testing decisions were made during calls but never formally recorded.",
        actions: [
            { l: 'Document decisions, rationale, actions, and ownership formally', s: '29119-3: Governance documentation', c: true, p: 200, f: 'Correct! Decision traceability supports accountability and future analysis.' },
            { l: 'Rely on memory and chat messages', s: 'Weak auditability', c: false, p: -180, f: 'Wrong. Informal records are unreliable and fragmented.' },
            { l: 'Invent meeting summaries later', s: 'False documentation', c: false, p: -240, f: 'Wrong. Historical records should reflect actual decisions accurately.' },
            { l: 'Delete partial notes', s: 'Evidence destruction', c: false, p: -220, f: 'Wrong. Partial records should be improved, not removed.' }
        ]
    },

    {
        id: 377, category: 'metrics', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Metrics hide increasing instability",
        desc: "Pass percentages stay high while production incidents steadily increase after every release.",
        actions: [
            { l: 'Reevaluate metric effectiveness and include operational quality indicators', s: '29119-2: Continuous monitoring and improvement', c: true, p: 230, f: 'Correct! Metrics should reflect real product quality outcomes, not just execution counts.' },
            { l: 'Ignore operational incidents because dashboards are green', s: 'Metric blindness', c: false, p: -260, f: 'Wrong. Stable metrics can still hide worsening real-world quality.' },
            { l: 'Remove production incident tracking', s: 'Concealment', c: false, p: -300, f: 'Wrong. Operational feedback is valuable testing input.' },
            { l: 'Increase pass thresholds only', s: 'Misguided optimization', c: false, p: -220, f: 'Wrong. Raising targets alone does not improve quality insight.' }
        ]
    },

    {
        id: 378, category: 'environment', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Shared environments create hidden interference",
        desc: "Multiple teams execute tests simultaneously in the same environment, causing unpredictable failures.",
        actions: [
            { l: 'Improve environment isolation, scheduling, and usage control', s: '29119-2: Environment management', c: true, p: 230, f: 'Correct! Shared uncontrolled environments reduce confidence in execution results.' },
            { l: 'Ignore interference because failures are temporary', s: 'Weak environment governance', c: false, p: -220, f: 'Wrong. Temporary interference still invalidates confidence.' },
            { l: 'Delete failed execution records', s: 'Evidence manipulation', c: false, p: -280, f: 'Wrong. Failures should remain visible and analyzed.' },
            { l: 'Continue execution without coordination', s: 'Operational instability', c: false, p: -240, f: 'Wrong. Environment control is essential for reliable execution.' }
        ]
    },

    {
        id: 379, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Repeated defect reopened multiple times",
        desc: "The same defect repeatedly reappears across releases despite multiple 'fix verified' closures.",
        actions: [
            { l: 'Perform root-cause analysis and review verification effectiveness systematically', s: '29119-2: Incident lifecycle improvement', c: true, p: 240, f: 'Correct! Repeated reopenings indicate deeper process or verification weaknesses.' },
            { l: 'Close the defect permanently to avoid reporting noise', s: 'False closure', c: false, p: -290, f: 'Wrong. Repeated failures should not be hidden.' },
            { l: 'Ignore reopening trends', s: 'Weak learning process', c: false, p: -240, f: 'Wrong. Historical defect behavior provides valuable insight.' },
            { l: 'Delete previous incident history', s: 'Evidence destruction', c: false, p: -310, f: 'Wrong. Historical traceability is important for investigation.' }
        ]
    },

    {
        id: 380, category: 'process', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Testing culture discourages bad news",
        desc: "Teams fear reporting severe risks because previous escalations were punished by leadership.",
        actions: [
            { l: 'Promote transparent risk communication and strengthen objective reporting culture', s: '29119-2: Governance and reporting integrity', c: true, p: 260, f: 'Correct! Effective testing requires psychological safety and honest reporting.' },
            { l: 'Encourage quieter reporting to avoid conflict', s: 'Risk concealment culture', c: false, p: -280, f: 'Wrong. Fear-driven silence increases organizational risk.' },
            { l: 'Remove escalation processes entirely', s: 'Loss of governance', c: false, p: -320, f: 'Wrong. Escalation processes are essential for risk management.' },
            { l: 'Ignore reporting culture issues', s: 'Weak leadership response', c: false, p: -240, f: 'Wrong. Organizational culture strongly affects testing effectiveness.' }
        ]
    }
    ,
    {
        id: 381, category: 'completion', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Release sign-off uses outdated evidence",
        desc: "The final approval meeting uses reports generated before the latest critical fixes were deployed.",
        actions: [
            { l: 'Regenerate evidence using the current build and reassess release readiness', s: '29119-2: Configuration-aware completion review', c: true, p: 240, f: 'Correct! Release decisions should rely on evidence matching the actual release candidate.' },
            { l: 'Use old reports because most functionality is unchanged', s: 'Outdated evidence', c: false, p: -230, f: 'Wrong. Even small late changes can invalidate previous conclusions.' },
            { l: 'Hide the build mismatch from stakeholders', s: 'Concealment', c: false, p: -300, f: 'Wrong. Stakeholders should understand evidence limitations.' },
            { l: 'Approve release without retesting', s: 'Unsupported approval', c: false, p: -260, f: 'Wrong. Evidence must align with the released configuration.' }
        ]
    },

    {
        id: 382, category: 'traceability', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Critical defects lack business linkage",
        desc: "Several severe incidents exist, but nobody knows which customer workflows are affected.",
        actions: [
            { l: 'Improve business traceability and perform impact analysis immediately', s: '29119-3: Requirement and impact traceability', c: true, p: 230, f: 'Correct! Business linkage supports prioritization and release risk understanding.' },
            { l: 'Treat all defects as technically equal', s: 'Poor prioritization', c: false, p: -220, f: 'Wrong. Business impact influences severity and release decisions.' },
            { l: 'Remove affected workflows from reports', s: 'Concealment', c: false, p: -280, f: 'Wrong. Stakeholders require visibility into affected business areas.' },
            { l: 'Ignore business impact completely', s: 'Weak governance', c: false, p: -240, f: 'Wrong. Technical and business perspectives should both be considered.' }
        ]
    },

    {
        id: 383, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Temporary security workaround became permanent",
        desc: "A temporary bypass added during emergency maintenance remained active in production for months.",
        actions: [
            { l: 'Treat as a governance and security incident, reassess controls, and remove the bypass safely', s: '29119-2: Security control and incident management', c: true, p: 260, f: 'Correct! Temporary exceptions should be tracked, reviewed, and removed formally.' },
            { l: 'Keep the workaround because it still functions', s: 'Weak security governance', c: false, p: -250, f: 'Wrong. Long-term bypasses can create severe hidden exposure.' },
            { l: 'Delete records of the workaround', s: 'Concealment', c: false, p: -320, f: 'Wrong. Security exceptions require traceability.' },
            { l: 'Ignore because no incidents occurred yet', s: 'Risk minimization', c: false, p: -270, f: 'Wrong. Lack of visible incidents does not remove security risk.' }
        ]
    },

    {
        id: 384, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation scripts no longer reflect requirements",
        desc: "Automated checks still validate workflows removed from the latest product requirements.",
        actions: [
            { l: 'Review and align automation assets with the current test basis', s: '29119-2: Test maintenance and alignment', c: true, p: 200, f: 'Correct! Automation should remain synchronized with current requirements and risks.' },
            { l: 'Keep obsolete scripts because they still pass', s: 'Irrelevant coverage', c: false, p: -190, f: 'Wrong. Obsolete tests distort quality visibility.' },
            { l: 'Report obsolete tests as valuable coverage', s: 'False reporting', c: false, p: -230, f: 'Wrong. Coverage metrics should reflect meaningful validation.' },
            { l: 'Delete requirement changes instead', s: 'Scope manipulation', c: false, p: -250, f: 'Wrong. Requirements should not be changed to preserve metrics.' }
        ]
    },

    {
        id: 385, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Operational fallback never validated",
        desc: "The organization assumes customer support can manually recover failed transactions, but the process was never tested.",
        actions: [
            { l: 'Validate operational fallback procedures through realistic scenario testing', s: '29119-2: Operational risk validation', c: true, p: 240, f: 'Correct! Recovery assumptions should be validated with evidence.' },
            { l: 'Assume support teams will adapt during incidents', s: 'Unsupported assumption', c: false, p: -230, f: 'Wrong. Critical recovery processes require validation.' },
            { l: 'Hide fallback limitations from stakeholders', s: 'Concealment', c: false, p: -290, f: 'Wrong. Operational limitations should remain visible.' },
            { l: 'Remove fallback references from documentation', s: 'Governance weakness', c: false, p: -260, f: 'Wrong. Recovery procedures require traceability.' }
        ]
    },

    {
        id: 386, category: 'documentation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Test records inconsistent across teams",
        desc: "Different testing teams record execution results using incompatible formats and terminology.",
        actions: [
            { l: 'Standardize reporting structure, terminology, and evidence expectations', s: '29119-3: Documentation consistency', c: true, p: 190, f: 'Correct! Standardization improves comparability and governance quality.' },
            { l: 'Allow unlimited format differences', s: 'Weak governance', c: false, p: -180, f: 'Wrong. Inconsistent records reduce auditability and analysis quality.' },
            { l: 'Delete older incompatible records', s: 'Evidence destruction', c: false, p: -240, f: 'Wrong. Historical records should remain preserved and understandable.' },
            { l: 'Ignore terminology differences', s: 'Communication risk', c: false, p: -170, f: 'Wrong. Shared terminology improves collaboration and traceability.' }
        ]
    },

    {
        id: 387, category: 'metrics', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Dashboard optimized instead of risk reduced",
        desc: "Teams prioritize improving visible metrics while critical operational risks remain unresolved.",
        actions: [
            { l: 'Refocus governance discussions on actual risk exposure and evidence quality', s: '29119-2: Metrics interpretation and governance', c: true, p: 240, f: 'Correct! Metrics should support decision-making rather than become the goal themselves.' },
            { l: 'Continue improving dashboard appearance only', s: 'Metric-driven dysfunction', c: false, p: -260, f: 'Wrong. Attractive dashboards do not guarantee real quality improvement.' },
            { l: 'Hide unresolved risks from reports', s: 'Concealment', c: false, p: -310, f: 'Wrong. Stakeholders should understand remaining operational exposure.' },
            { l: 'Delete failed metrics history', s: 'Evidence manipulation', c: false, p: -280, f: 'Wrong. Historical trends support continuous improvement.' }
        ]
    },

    {
        id: 388, category: 'environment', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Environment cloning exposed production secrets",
        desc: "A cloned production environment accidentally copied live credentials and confidential data into testing systems.",
        actions: [
            { l: 'Contain exposure, sanitize environments, rotate credentials, and review cloning controls', s: '29119-2: Environment and security governance', c: true, p: 270, f: 'Correct! Production cloning requires strict sanitization and access controls.' },
            { l: 'Ignore because the environment is internal only', s: 'Security misunderstanding', c: false, p: -260, f: 'Wrong. Internal environments can still create severe exposure.' },
            { l: 'Share copied credentials with testers', s: 'Severe security violation', c: false, p: -340, f: 'Wrong. Sensitive credentials should never spread unnecessarily.' },
            { l: 'Delete evidence of the cloning process', s: 'Concealment', c: false, p: -320, f: 'Wrong. Exposure events require traceable investigation.' }
        ]
    },

    {
        id: 389, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Incident backlog ignored for months",
        desc: "Critical and high-severity incidents accumulated for months without reassessment or escalation.",
        actions: [
            { l: 'Review backlog systematically, reassess risk, and escalate unresolved critical exposure', s: '29119-2: Incident lifecycle governance', c: true, p: 250, f: 'Correct! Long-unresolved incidents may indicate severe governance weaknesses.' },
            { l: 'Ignore old incidents because teams adapted', s: 'Normalization of risk', c: false, p: -250, f: 'Wrong. Adaptation does not eliminate actual exposure.' },
            { l: 'Bulk-close old incidents without review', s: 'False closure', c: false, p: -310, f: 'Wrong. Closure requires evidence and reassessment.' },
            { l: 'Delete backlog reports', s: 'Evidence destruction', c: false, p: -330, f: 'Wrong. Historical incident records remain important.' }
        ]
    },

    {
        id: 390, category: 'process', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Quality process exists only on paper",
        desc: "The organization claims compliance with testing standards, but actual project practices bypass most controls.",
        actions: [
            { l: 'Align operational practices with documented governance and assess real conformance honestly', s: '29119-2: Process conformance and governance', c: true, p: 270, f: 'Correct! Claimed compliance should reflect real operational behavior and evidence.' },
            { l: 'Continue claiming compliance without verification', s: 'False conformance', c: false, p: -320, f: 'Wrong. Unsupported compliance claims damage governance credibility.' },
            { l: 'Hide operational deviations from auditors', s: 'Concealment', c: false, p: -350, f: 'Wrong. Audit transparency is essential.' },
            { l: 'Delete process records to simplify audits', s: 'Evidence destruction', c: false, p: -340, f: 'Wrong. Governance evidence should remain preserved.' }
        ]
    }
    ,
    {
        id: 391, category: 'completion', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Release approved despite failed rollback test",
        desc: "Rollback validation failed during final testing, but management still wants immediate deployment.",
        actions: [
            { l: 'Escalate rollback failure risk and reassess deployment readiness formally', s: '29119-2: Release and risk evaluation', c: true, p: 250, f: 'Correct! Failed rollback capability creates major operational risk.' },
            { l: 'Deploy because rollback is rarely needed', s: 'Risk minimization', c: false, p: -260, f: 'Wrong. Rollback exists specifically for high-risk failures.' },
            { l: 'Remove rollback results from reports', s: 'Concealment', c: false, p: -320, f: 'Wrong. Critical operational limitations must remain visible.' },
            { l: 'Mark rollback tests as passed manually', s: 'False reporting', c: false, p: -340, f: 'Wrong. Test status must reflect actual execution evidence.' }
        ]
    },

    {
        id: 392, category: 'traceability', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Customer complaints cannot be traced",
        desc: "Production complaints exist, but no linkage connects them to requirements, incidents, or test evidence.",
        actions: [
            { l: 'Establish operational traceability between customer impact, requirements, and testing artifacts', s: '29119-3: End-to-end traceability', c: true, p: 240, f: 'Correct! Operational feedback should connect back to testing and requirements.' },
            { l: 'Treat complaints separately from testing', s: 'Disconnected governance', c: false, p: -220, f: 'Wrong. Production feedback provides valuable quality evidence.' },
            { l: 'Delete unresolved complaint records', s: 'Evidence destruction', c: false, p: -310, f: 'Wrong. Customer-impact evidence should remain traceable.' },
            { l: 'Ignore complaint trends completely', s: 'Weak operational learning', c: false, p: -260, f: 'Wrong. Trends help identify systemic weaknesses.' }
        ]
    },

    {
        id: 393, category: 'security', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Unauthorized test tool installed",
        desc: "A tester installs an unapproved third-party tool that uploads execution data externally.",
        actions: [
            { l: 'Treat as a security governance incident and review tool approval controls', s: '29119-2: Security and tool governance', c: true, p: 260, f: 'Correct! Unauthorized tooling may expose sensitive project and customer information.' },
            { l: 'Ignore because the tool improves productivity', s: 'Security risk ignored', c: false, p: -250, f: 'Wrong. Productivity does not override governance and security controls.' },
            { l: 'Allow all testers to use the tool', s: 'Expanded exposure', c: false, p: -320, f: 'Wrong. Unreviewed tools should not spread further.' },
            { l: 'Delete evidence of the installation', s: 'Concealment', c: false, p: -340, f: 'Wrong. Security incidents require traceable investigation.' }
        ]
    },

    {
        id: 394, category: 'automation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Automation maintenance deprioritized",
        desc: "Automation debt grows every sprint because teams focus only on new feature delivery.",
        actions: [
            { l: 'Allocate planned maintenance effort and monitor automation reliability trends', s: '29119-2: Testware maintenance strategy', c: true, p: 200, f: 'Correct! Sustainable automation requires continuous maintenance investment.' },
            { l: 'Ignore automation debt until total failure occurs', s: 'Reactive governance', c: false, p: -210, f: 'Wrong. Accumulated instability reduces long-term confidence.' },
            { l: 'Delete unstable automation suites permanently', s: 'Coverage loss', c: false, p: -240, f: 'Wrong. Valuable coverage should be repaired when possible.' },
            { l: 'Report all outdated scripts as active coverage', s: 'False metrics', c: false, p: -270, f: 'Wrong. Metrics should reflect real usable coverage.' }
        ]
    },

    {
        id: 395, category: 'risk', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Risk ownership undefined",
        desc: "Major unresolved risks exist, but nobody is formally responsible for monitoring or mitigation.",
        actions: [
            { l: 'Assign clear ownership, escalation paths, and monitoring responsibilities', s: '29119-2: Risk governance and accountability', c: true, p: 240, f: 'Correct! Effective risk management requires clear accountability.' },
            { l: 'Assume teams will manage risks informally', s: 'Weak governance', c: false, p: -230, f: 'Wrong. Undefined ownership often leads to unmanaged exposure.' },
            { l: 'Remove ownership fields from reports', s: 'Governance concealment', c: false, p: -290, f: 'Wrong. Ownership supports accountability and follow-up.' },
            { l: 'Ignore unresolved risks if release proceeds', s: 'Risk blindness', c: false, p: -260, f: 'Wrong. Release approval does not eliminate operational exposure.' }
        ]
    },

    {
        id: 396, category: 'documentation', sev: 'high', tag: 'tag-high', tl: 'HIGH',
        title: "Historical evidence overwritten",
        desc: "Older execution evidence is overwritten every sprint instead of being versioned and preserved.",
        actions: [
            { l: 'Introduce controlled evidence retention and versioning practices', s: '29119-3: Evidence retention and auditability', c: true, p: 210, f: 'Correct! Historical evidence supports audits, investigations, and learning.' },
            { l: 'Keep overwriting records to save storage', s: 'Loss of traceability', c: false, p: -220, f: 'Wrong. Storage efficiency should not destroy auditability.' },
            { l: 'Delete older releases entirely', s: 'Evidence destruction', c: false, p: -300, f: 'Wrong. Historical release evidence remains valuable.' },
            { l: 'Ignore retention concerns', s: 'Weak governance', c: false, p: -190, f: 'Wrong. Evidence retention is part of quality governance.' }
        ]
    },

    {
        id: 397, category: 'metrics', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Metrics encourage hiding failures",
        desc: "Teams are rewarded only for high pass rates, leading people to avoid reporting difficult defects.",
        actions: [
            { l: 'Redesign metrics to reward transparency, learning, and risk visibility', s: '29119-2: Healthy metrics governance', c: true, p: 250, f: 'Correct! Metrics should encourage truthful reporting and continuous improvement.' },
            { l: 'Increase pass-rate targets further', s: 'Perverse incentives', c: false, p: -270, f: 'Wrong. Pressure-based metrics can encourage concealment behavior.' },
            { l: 'Hide difficult defects from dashboards', s: 'Concealment', c: false, p: -320, f: 'Wrong. Stakeholders require accurate risk visibility.' },
            { l: 'Punish teams for reporting critical issues', s: 'Toxic governance', c: false, p: -340, f: 'Wrong. Fear-driven cultures reduce quality transparency.' }
        ]
    },

    {
        id: 398, category: 'environment', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Production monitoring disabled during release",
        desc: "Monitoring alerts were turned off temporarily to prevent noise during deployment validation.",
        actions: [
            { l: 'Restore monitoring immediately and assess the hidden operational exposure', s: '29119-2: Operational monitoring and risk control', c: true, p: 260, f: 'Correct! Monitoring visibility is critical during high-risk deployment windows.' },
            { l: 'Keep alerts disabled until customers complain', s: 'Operational blindness', c: false, p: -280, f: 'Wrong. Hidden failures may grow undetected.' },
            { l: 'Delete monitoring outage records', s: 'Concealment', c: false, p: -330, f: 'Wrong. Monitoring gaps should remain traceable.' },
            { l: 'Ignore the monitoring gap because deployment succeeded', s: 'False confidence', c: false, p: -250, f: 'Wrong. Lack of alerts does not prove absence of issues.' }
        ]
    },

    {
        id: 399, category: 'incident', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Critical incidents normalized over time",
        desc: "Teams gradually accept recurring severe failures as 'normal operational behavior.'",
        actions: [
            { l: 'Reassess recurring incidents systematically and challenge normalization of risk', s: '29119-2: Incident trend analysis and governance', c: true, p: 250, f: 'Correct! Repeated severe failures should trigger deeper corrective action.' },
            { l: 'Accept recurring incidents as unavoidable', s: 'Normalization of deviance', c: false, p: -290, f: 'Wrong. Acceptance without improvement increases long-term exposure.' },
            { l: 'Stop reporting recurring failures', s: 'Concealment', c: false, p: -320, f: 'Wrong. Trend visibility is essential for governance.' },
            { l: 'Lower severity classifications automatically', s: 'Severity manipulation', c: false, p: -300, f: 'Wrong. Severity should reflect real operational impact.' }
        ]
    },

    {
        id: 400, category: 'process', sev: 'critical', tag: 'tag-crit', tl: 'CRITICAL',
        title: "Testing seen as approval ritual only",
        desc: "Leadership treats testing merely as a formality required before release rather than a risk evaluation activity.",
        actions: [
            { l: 'Reinforce testing as evidence-based risk evaluation and decision support', s: '29119-2: Purpose and governance of testing', c: true, p: 270, f: 'Correct! Testing exists to support informed quality and risk decisions.' },
            { l: 'Continue treating testing as paperwork only', s: 'Governance failure', c: false, p: -280, f: 'Wrong. Ritualized testing reduces real quality visibility.' },
            { l: 'Remove risk discussions from test reviews', s: 'Weak decision-making', c: false, p: -320, f: 'Wrong. Risk analysis is central to effective testing.' },
            { l: 'Approve all releases automatically after execution', s: 'False assurance', c: false, p: -340, f: 'Wrong. Execution alone does not guarantee readiness.' }
        ]
    }
];
window.HARD_INCIDENTS = HARD_INCIDENTS;
