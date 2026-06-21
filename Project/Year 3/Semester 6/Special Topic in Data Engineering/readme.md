<div align="center">

# 🏭 Special Topic in Data Engineering

### PPG Inventory Risk Management · Azure · Power BI

**SECP37843 · Year 3 Semester 2 · Universiti Teknologi Malaysia**

</div>

---

## 📘 Course Overview

**Special Topic in Data Engineering** focused on applying data engineering concepts to a real industry-based problem.

Through this project, I worked on building an end-to-end cloud data pipeline that transforms raw operational inventory data into structured, analytics-ready insights for business decision-making.

This subject strengthened my practical understanding of **Azure data engineering, Medallion Architecture, Star Schema modelling, business rule transformation, and dashboard-based reporting**.

---

## 🚀 Industry Project: PPG Recoverable Assets & Inventory Risk Management

For the main project, my team developed a cloud-based data engineering solution for **PPG** to support **Recoverable Assets (RA)** and **Inventory Risk Management (IRM)**.

The problem focused on inventory risks such as:

* Overstocked materials
* Expired materials
* Dead stock
* Materials below reorder level
* Unfulfilled production orders
* Customer orders affected by stock shortages
* Financial provision for risky inventory

The goal was to replace manual spreadsheet-based inventory review with an automated, auditable, and scalable data pipeline.

---

## 🏗️ Pipeline Architecture

The project followed a **Medallion-inspired architecture**:

| Layer   | Purpose                                                                            |
| ------- | ---------------------------------------------------------------------------------- |
| Bronze  | Store raw uploaded CSV files                                                       |
| Silver  | Clean, standardize, deduplicate, and validate data                                 |
| Gold    | Apply business rules for RA, MC, stockout, production fulfilment, and sales impact |
| Curated | Organize final outputs into Star Schema and Synapse SQL views                      |

The pipeline used six source datasets:

* Materials
* Inventory Snapshot
* Purchase Orders
* Suppliers
* Production Orders
* Sales Orders

---

## 🧩 Technology Stack

<p>
  <img src="https://img.shields.io/badge/Azure%20Data%20Lake-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Azure%20Databricks-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Azure%20Synapse-purple?style=for-the-badge">
  <img src="https://img.shields.io/badge/Power%20BI-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/Star%20Schema-green?style=for-the-badge">
</p>

| Tool                         | Role                                                  |
| ---------------------------- | ----------------------------------------------------- |
| Azure Data Lake Storage Gen2 | Store Bronze, Silver, Gold, and Curated layer outputs |
| Azure Data Factory           | Ingestion and data quality pipeline                   |
| Azure Databricks             | Data cleaning, transformation, and business logic     |
| Azure Synapse Analytics      | Serve curated tables as SQL views                     |
| Microsoft Power BI           | Build interactive inventory risk dashboards           |

---

## 📊 Business Questions Answered

The dashboard was designed to answer seven key inventory questions:

| Question | Output                                      |
| -------- | ------------------------------------------- |
| Q1       | Which materials are below reorder level?    |
| Q2       | Which materials are Recoverable Assets?     |
| Q3       | Which materials are Magna Carta Dead Stock? |
| Q4       | Which materials are Magna Carta Expired?    |
| Q5       | What is the total MC provision amount?      |
| Q6       | Which production orders are unfulfilled?    |
| Q7       | Which customer sales orders are affected?   |

---

## 🔍 Key Results

The final pipeline successfully produced actionable inventory insights:

| Metric                         |       Result |
| ------------------------------ | -----------: |
| Materials below reorder level  |  9 materials |
| Recoverable Assets             | 11 materials |
| MC Dead Stock                  |  0 materials |
| MC Expired Materials           |  3 materials |
| Total MC Provision             |     RM29,720 |
| Unfulfilled Production Orders  |   183 orders |
| Affected Customer Sales Orders |   192 orders |

The dashboard also showed that Recoverable Assets carried an excess stock value of **RM92,770**, while expired materials created direct financial provision risk.

---

## 💡 Skills Demonstrated

* Azure cloud data engineering
* End-to-end batch pipeline design
* Medallion Architecture implementation
* Data cleaning and validation
* PySpark transformation in Databricks
* Business rule implementation
* Star Schema / dimensional modelling
* Azure Synapse SQL views
* Power BI dashboard development
* Inventory risk analytics
* Financial provision calculation
* Production and sales order impact tracing
* Industry-based documentation and teamwork

---

## 🧠 Reflection

This project was one of the most practical data engineering experiences in my degree.

It showed me that data engineering is not only about moving data from one place to another. A good pipeline must preserve raw data, clean it properly, apply business rules accurately, structure it for reporting, and deliver insights that business users can act on.

The most valuable part was connecting technical pipeline design with real business impact. By tracing stockout risk from raw materials to production orders and customer sales orders, I learned how data engineering can support operational decisions, financial reporting, and risk management.

Overall, this subject strengthened my confidence in building **cloud-based data pipelines, Azure analytics solutions, and business-focused data products**.

---

<div align="center">

> “A strong data pipeline turns operational data into business action.”

</div>

