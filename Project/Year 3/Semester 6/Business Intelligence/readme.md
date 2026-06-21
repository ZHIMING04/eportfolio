<div align="center">

# 📊 Business Intelligence

### Olist E-Commerce Analytics · Alteryx · Power BI

**SECP3213 · Year 3 Semester 2 · Universiti Teknologi Malaysia**

</div>

---

## 📘 Course Overview

**Business Intelligence** introduced how raw business data can be transformed into meaningful insights for decision-making.

Through this course, I learned about **BI concepts, data warehousing, ETL workflows, dashboard design, data visualization, predictive analytics, storytelling, and data-driven decision support**.

This subject gave me hands-on exposure to BI tools such as **Alteryx Designer, Power BI, and Tableau**, while also strengthening my understanding of how data quality and governance affect business decisions.

---

## 🛠️ Coursework

### 🧾 Retail Case Study: Star Schema Design

For the retail case study, my team designed a **Retail Star Schema** for business intelligence analysis.

The schema included a central **Retail_Sales_Fact** table connected to several dimension tables:

* Date Dimension
* Product Dimension
* Store Dimension
* Promotion Dimension
* Customer Dimension
* Cashier Dimension

This helped me understand how dimensional modelling supports analytical queries, reporting, and dashboard development.

---

## 🚀 Main Project: Olist E-Commerce BI Dashboard

For the group project, my team developed a BI solution for **Olist**, a Brazilian e-commerce platform.

The project aimed to analyze:

* Sales performance
* Customer distribution
* Payment behavior
* Order status
* Delivery efficiency

We used three main datasets:

| Dataset        | Purpose                                                |
| -------------- | ------------------------------------------------------ |
| Customers      | Analyze customer location by city and state            |
| Orders         | Analyze order status, trends, and delivery performance |
| Order Payments | Analyze revenue, payment method, and installment usage |

The project used **Alteryx Designer** to prepare the data and **Microsoft Power BI** to build interactive dashboards.

---

## 🔄 ETL Workflow

In Phase 2, we implemented the ETL pipeline using **Alteryx Designer**.

The workflow included:

* Importing raw Olist CSV datasets
* Cleaning null values and whitespace
* Standardizing city and state formats
* Summarizing payment records by `order_id`
* Joining orders, customers, and payments datasets
* Creating calculated fields for delivery and sales analysis
* Performing data quality checks
* Exporting a cleaned dataset for Power BI

Key engineered fields included:

| Field                | Purpose                                         |
| -------------------- | ----------------------------------------------- |
| Order_Year_Month     | Monthly trend analysis                          |
| Delivery_Time_Days   | Actual delivery duration                        |
| Delivery_Delay_Days  | Delay calculation                               |
| Delivery_Status      | Early, On Time, Late, Missing, or Not Delivered |
| Order_Value_Category | Low, Medium, or High value order                |
| Is_Delivered         | Delivery rate calculation                       |
| Is_Late              | Late delivery percentage calculation            |

---

## 📈 Power BI Dashboard

In Phase 3, we created an interactive **Power BI dashboard** with two dashboards and one storyboard.

### Dashboard 1: Sales & Customer Overview

Focused on:

* Total revenue
* Total orders
* Average order value
* Total customers
* Monthly revenue trend
* Top states by revenue
* Order status distribution

### Dashboard 2: Payment & Delivery Performance

Focused on:

* Delivered orders
* Average delivery days
* Late orders
* Late order percentage
* Revenue by payment type
* Payment category comparison
* Average delivery time by state
* Late orders by state

The dashboard included slicers for customer state, order status, payment type, payment category, delivery status, and order month.

---

## 🔍 Key Insights

The dashboard showed that Olist generated approximately **$16.01M revenue**, with around **99K orders**, **99K customers**, and an average order value of about **$161**. Most orders were successfully delivered, with about **96K delivered orders** and an estimated delivery success rate of **97.02%**.

Revenue was highly concentrated in **São Paulo, Rio de Janeiro, and Minas Gerais**, while credit card was the strongest payment method. Installment payment was also slightly more common than single payment.

---

## 🧠 Industry Talk Reflection

The industry talk on **Data Governance and Data Management in Modern Business Intelligence** helped me understand that BI is not only about creating dashboards.

A good BI solution depends on:

* Accurate data
* Data quality
* Metadata
* Data lineage
* Access control
* Security
* Compliance
* Clear ownership

The biggest takeaway was that dashboards are only useful when the data behind them is reliable, governed, and trusted.

---

## 💡 Skills Demonstrated

<p>
  <img src="https://img.shields.io/badge/Business%20Intelligence-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/Alteryx-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Power%20BI-yellow?style=for-the-badge">
  <img src="https://img.shields.io/badge/ETL-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/Data%20Visualization-purple?style=for-the-badge">
</p>

* Business Intelligence analysis
* ETL workflow design
* Data cleaning and transformation
* Data integration
* Feature engineering
* Data quality checking
* Dimensional modelling
* Star schema design
* Power BI dashboard development
* KPI design
* Interactive slicers and filters
* Dashboard storytelling
* Business recommendation writing
* Data governance awareness

---

## 🧠 Reflection

This course helped me understand how business intelligence connects data preparation, dashboard design, and decision-making.

The Olist project taught me that good dashboards do not start in Power BI. They start with clean data, correct joins, meaningful features, and strong data quality checks.

I also learned that BI is not just visual reporting. It is about helping users understand business performance, detect problems, and make better decisions.

Overall, Business Intelligence strengthened my skills in **ETL, data visualization, dashboard storytelling, and business-driven analytics**.

---

<div align="center">

> “A dashboard is only powerful when the data behind it is trusted.”

</div>

