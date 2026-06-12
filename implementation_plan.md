# NextHire 2.0 — AI Hiring Intelligence Operating System Implementation Plan

We will transform NextHire into a fully integrated, state-of-the-art **AI Hiring Intelligence Operating System**. We will implement high-fidelity dashboard views, recruiter workspaces, and detailed backend decision-making components to enable candidate twin profiling, war room committee evaluation, early termination, skill verification, career roadmap navigation, and global market comparisons.

## User Review Required

We are introducing the following major upgrades:
1. **Database Schema Enhancements**: We will extend the `Evaluation` model to store rich metrics including `company_mode` weightages, `success_predictions`, `market_benchmarks`, `hiring_risks`, `learning_velocity`, and `war_room_evaluations` as JSON objects.
2. **Company-Specific Rules**: We will support specialized mock interviews mimicking Google, Amazon, Microsoft, Meta, Stripe, Netflix, Uber, and Atlassian. Each company will dynamically skew the adaptive prompt generation and evaluation weightage.
3. **AI Hiring War Room**: Multiple AI evaluator panels will simulate Technical Lead, Engineering Manager, Recruiter, and VP Engineering, returning distinct opinions, recommendations, and concerns.

## Open Questions

> [!NOTE]
> * **API Key Verification**: Are you using your own Google Gemini API key in the `.env` file, or should we continue to support the high-fidelity mock fallback mechanism seamlessly? *(Note: The current system has an elegant schema-compliant fallback in `base_agent.py` which we will preserve and expand to keep everything fully functional either way).*

---

## Proposed Changes

# NextHire Advanced AI Hiring Intelligence Upgrade

## Component 1: Database & Backend Schemas

### [MODIFY] backend/app/models/evaluation.py

Extend the evaluation model to support advanced hiring intelligence features while maintaining backward compatibility.

Add JSON fields for:

- company_context
  - Company name
  - Interview type
  - Scoring weightages

- war_room
  - Tech Lead evaluation
  - Engineering Manager evaluation
  - Recruiter evaluation
  - VP Engineering evaluation

- predictions
  - Offer Probability
  - 90-Day Success Probability
  - Retention Probability
  - Leadership Potential

- risks
  - Skill Inflation Risk
  - Communication Risk
  - Technical Depth Risk
  - Cultural Fit Risk

- benchmarks
  - React Percentile
  - System Design Percentile
  - Problem Solving Percentile

- learning_velocity
  - Historical Learning Rate
  - Projected Growth Rate

---

### [MODIFY] backend/app/models/interview.py

Add:

```python
company: str