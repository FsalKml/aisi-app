# Product Requirements Document (PRD)

## AISI – AI-Powered Istitabah Management System

---

## 1. Product Overview
**Product Name:** AISI – AI-Powered Istitabah Management System  
**Owner:** Jabatan Mufti  
**Stakeholders:** Jabatan Mufti, Mahkamah, Panel/Kaunselor, System Administrators  
**Target Users:** SuperAdmin, Jabatan Mufti/Admin, Panel/Kaunselor

AISI is an AI-powered case management system designed to support the end-to-end management of Istitabah cases (Plaintiffs requesting to leave Islam). The system streamlines administrative workflows, enhances decision support using AI, ensures compliance with SOPs, and maintains strict confidentiality and security standards.

---

## 2. Objectives & Goals

### 2.1 Primary Objectives
- Digitize and centralize Istitabah case management.
- Reduce manual workload for Jabatan Mufti through automation.
- Support fair and structured Panel/Kaunselor assignment.
- Improve monitoring, reporting, and compliance with court processes.

### 2.2 Success Metrics (KPIs)
- 90% reduction in manual scheduling effort.
- 100% traceability and audit logs for all cases.
- Zero unauthorized data access incidents.
- Average case processing time reduced by at least 30%.

---

## 3. Scope

### 3.1 In-Scope
- Court document intake and AI analysis.
- Automated Panel/Kaunselor matching.
- Multi-session (up to 10 sessions) counseling management.
- Scheduling, notifications, and official letter generation.
- Audio recording, transcription, and AI-assisted reporting.
- No-show detection, warnings, and escalation.
- Case archiving and historical access.

### 3.2 Out-of-Scope
- Court-side decision-making systems.
- Public-facing portals.
- Financial or payment processing.

---

## 4. User Roles & Permissions

### 4.1 SuperAdmin
- Create, update, and delete Admin accounts.
- Create, update, and delete Panel/Kaunselor profiles.
- Configure global system settings.

### 4.2 Jabatan Mufti / Admin
- Receive and upload court documents.
- Create and manage cases.
- Review, edit, and publish reports.
- Monitor attendance and issue warnings.
- Manage sessions, notifications, rooms, and archives.
- Approve and submit final reports to court.

### 4.3 Panel / Kaunselor
- Receive notifications for new cases.
- Select proposed session dates and times.
- Conduct counseling sessions.
- Access AI chatbot for guidance during sessions.
- Upload session recordings and provide comments.

---

## 5. Functional Requirements

### 5.1 Case Intake & Document Analysis
- Admin uploads scanned court documents.
- System creates a new case record.
- AI extracts Plaintiff information (e.g., name, IC, background, education).
- AI analyzes document content to support Panel assignment.

### 5.2 Panel / Kaunselor Assignment
- AI recommends suitable Panel based on:
  - Education level alignment.
  - Background compatibility.
  - Ethnic considerations (where applicable).
- One Panel is assigned per case.
- Plaintiff identity is partially anonymized at early stages.

### 5.3 Scheduling & Room Management
- System proposes 3 available date/time slots.
- Panel selects preferred slot via system or chatbot.
- Constraints:
  - Maximum 4 sessions per room per day.
  - Rooms are dynamically configurable.
- Automatic confirmation and booking.
- WhatsApp notifications and reminders sent to Panel and Plaintiff.
- System generates official letters (PDF) for Plaintiff.

### 5.4 Counseling Session Management
- One-to-one counseling sessions.
- Session audio recorded in MP3 format.
- Automatic speech-to-text transcription.
- MP3 files auto-deleted after 7 days.
- Panel may consult AI chatbot during session.
- AI generates an initial draft report from transcription.

### 5.5 Multi-Session Workflow
- Each case consists of up to 10 sessions.
- Scheduling, notifications, and reporting repeat after each session.

### 5.6 Reporting
- Draft report generated after each session.
- Admin and Panel collaboratively edit reports.
- Final report generated after session 10.
- Final report reviewed and sent to Court.

### 5.7 No-Show & Negative Cases
- System detects Plaintiff absence.
- Up to 3 automated warnings issued.
- Escalation to Jabatan Mufti and Court if unresolved.

### 5.8 Archiving
- Completed cases archived.
- Authorized users can search and view historical cases.

---

## 6. Non-Functional Requirements

### 6.1 Security & Privacy
- End-to-end encryption (data at rest & in transit).
- Role-based access control (RBAC).
- Full audit logging.

### 6.2 AI & Knowledge Base
- AI trained on approved Istitabah SOPs.
- AI outputs are advisory and reviewable.

### 6.3 Performance & Scalability
- Support concurrent sessions and multiple rooms.
- Scalable infrastructure.

### 6.4 Usability
- Web-based dashboards.
- Chatbot-assisted workflows.

### 6.5 File & Media Management
- Secure media storage.
- Automated retention and deletion policies.

---

## 7. High-Level System Workflow
1. Document upload → AI analysis → Panel assignment.
2. Scheduling → Confirmation → Notifications.
3. Counseling session → Recording → AI analysis → Draft report.
4. Repeat until session 10.
5. Final report → Mufti review → Court submission.
6. Case archived.

---

## 8. Assumptions & Constraints
- Existing court document workflows remain unchanged.
- WhatsApp API access is approved.
- Human oversight is mandatory for all AI decisions.

---

## 9. Risks & Mitigations

| Risk | Mitigation |
|-----|-----------|
| Sensitive data exposure | Encryption, RBAC, audits |
| AI bias | Transparent rules, human override |
| Plaintiff no-show | Automated warnings, escalation |
| Transcription errors | Manual review and edits |

---

## 10. Future Enhancements
- Advanced analytics dashboard.
- Multi-language transcription.
- Court-side access portal.
- National ID system integration (subject to approval).
