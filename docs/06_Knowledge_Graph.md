# INDUSMIND AI

# Industrial Knowledge Graph Ontology

---

# Purpose

The Knowledge Graph serves as the central intelligence layer of INDUSMIND AI.

Rather than storing documents as isolated files, the platform converts every document into interconnected entities and relationships.

This enables contextual reasoning, cross-document intelligence, explainable AI responses, and operational decision support.

---

# Core Entity Types

## Equipment

Represents any physical industrial asset.

Examples

- Pump
- Compressor
- Valve
- Heat Exchanger
- Cooling Tower
- Boiler
- Pipeline
- Tank

---

## Document

Represents every uploaded document.

Examples

- SOP
- Manual
- Maintenance Report
- Incident Report
- Inspection Report
- Audit Report
- OEM Manual

---

## Incident

Represents operational failures, accidents or abnormal events.

Examples

- Bearing Failure
- Leakage
- Overheating
- Shutdown
- Near Miss

---

## Maintenance Record

Represents preventive or corrective maintenance activities.

---

## Inspection

Represents inspection observations.

---

## Engineer

Represents personnel involved in operations.

---

## Department

Examples

- Maintenance
- Operations
- Safety
- Quality

---

## SOP

Standard Operating Procedure.

---

## Regulation

Examples

- Factory Act
- OISD
- PESO

---

## Failure Mode

Examples

- Corrosion
- Bearing Wear
- Lubrication Failure
- Misalignment
- Fatigue

---

## Corrective Action

Represents actions taken after incidents.

---

## Risk

Represents operational or compliance risks.

---

## Project

Industrial project or shutdown activity.

---

## Location

Plant

Area

Unit

Floor

Equipment Zone

# Relationships

Equipment

HAS_DOCUMENT

Document

---

Equipment

HAS_INCIDENT

Incident

---

Equipment

HAS_MAINTENANCE

Maintenance Record

---

Equipment

HAS_INSPECTION

Inspection

---

Equipment

LOCATED_IN

Location

---

Incident

CAUSED_BY

Failure Mode

---

Incident

RESOLVED_BY

Corrective Action

---

Engineer

PERFORMED

Maintenance Record

---

Engineer

CREATED

Document

---

Maintenance Record

FOLLOWS

SOP

---

SOP

COMPLIES_WITH

Regulation

---

Inspection

GENERATED

Risk

---

Risk

MITIGATED_BY

Corrective Action

---

Department

OWNS

Equipment

---

Project

INVOLVES

Equipment

# AI Usage

The Knowledge Graph enables

- Multi-hop reasoning
- Cross-document retrieval
- Asset history exploration
- Root Cause Analysis
- Lessons Learned discovery
- Compliance intelligence
- Knowledge gap detection
- Operational impact analysis