<div align="center">

# ⚡ High Performance Data Processing

### HPC · Web Crawling · CUDA · Large-Scale Data Processing

**SECP3133 · Year 3 Semester 2 · Universiti Teknologi Malaysia**

</div>

---

## 📘 Course Overview

**High Performance Data Processing** introduced how large-scale data can be processed efficiently using high-performance computing concepts and modern data processing platforms.

Through this course, I learned about **high-performance computing, parallel processing, high-performance data processing architecture, GPU acceleration, big data workflows, and performance optimization techniques**.

This subject helped me understand how data systems can be designed to process large datasets faster, more efficiently, and at scale.

---

## 🛠️ Coursework

### 🧠 Research Paper: NVIDIA CUDA vs CPU Computing

For the research component, I studied the comparison between **NVIDIA CUDA-based GPU computing** and traditional **CPU computing**.

The paper explored:

* CUDA programming model
* GPU vs CPU architecture
* Parallel processing concepts
* Throughput-oriented GPU design
* Latency-oriented CPU design
* Workload suitability
* CUDA applications in deep learning and scientific computing

The key takeaway was that **CUDA provides strong performance benefits for highly parallel and arithmetic-intensive workloads**, while CPUs remain more suitable for sequential, irregular, and control-heavy tasks.

---

## 🚀 Group Project: High-Performance Web Crawler

For the main project, my team developed and optimized a **large-scale web crawler** for property listings from **Mudah.my**, a Malaysian online marketplace.

The project focused on collecting, cleaning, and processing a large property dataset while comparing the performance between a baseline crawler and an optimized crawler.

### Project Target

| Item          | Description                      |
| ------------- | -------------------------------- |
| Website       | Mudah.my                         |
| Domain        | Properties for Sale              |
| Data Source   | Public property listing data     |
| Final Dataset | 101,403 cleaned property records |

---

## 📊 Dataset

The cleaned dataset contains **13 columns**, including:

* Property ID
* Title
* Price in RM
* Region
* Subarea
* Property Type
* Title Type
* Size in sqft
* Bedrooms
* Bathrooms
* Agent / Firm
* Listing URL
* Scraped Timestamp

The raw dataset started with **120,257 rows**, and after removing duplicates, invalid values, and unreasonable records, the final cleaned dataset contained **101,403 valid property records**.

---

## ⚙️ Optimization Techniques

The project applied several performance optimization techniques:

| Technique                 | Purpose                                                                    |
| ------------------------- | -------------------------------------------------------------------------- |
| Asynchronous Crawling     | Used `aiohttp` and `asyncio` to send multiple requests concurrently        |
| Concurrency Control       | Used semaphore control to avoid excessive requests                         |
| Search Space Partitioning | Crawled by region and property type to expand coverage                     |
| Batch Data Writing        | Reduced unnecessary file operations during CSV writing                     |
| Data Cleaning Pipeline    | Removed duplicates, invalid prices, invalid sizes, and unreasonable values |

---

## 📈 Performance Result

A fair comparison was conducted using the same workload:

| Method              | Records | Total Time |         Throughput |
| ------------------- | ------: | ---------: | -----------------: |
| Baseline Sequential |   2,000 |     91.24s |  21.92 records/sec |
| Optimized Async     |   2,000 |      7.50s | 266.60 records/sec |

The optimized asynchronous crawler achieved:

* **12.17× faster speed**
* **12.16× higher throughput**

This showed how asynchronous processing can significantly improve large-scale data collection performance.

---

## 💡 Skills Demonstrated

<p>
  <img src="https://img.shields.io/badge/Python-blue?style=for-the-badge">
  <img src="https://img.shields.io/badge/AsyncIO-purple?style=for-the-badge">
  <img src="https://img.shields.io/badge/aiohttp-orange?style=for-the-badge">
  <img src="https://img.shields.io/badge/Pandas-green?style=for-the-badge">
  <img src="https://img.shields.io/badge/HPC-red?style=for-the-badge">
</p>

* High-performance data processing
* Parallel processing concepts
* Asynchronous programming
* Large-scale web crawling
* Python data processing
* Data cleaning and validation
* CSV data pipeline development
* Performance benchmarking
* Throughput analysis
* CPU and memory monitoring
* CUDA vs CPU architecture comparison
* Dataset visualization
* Technical documentation
* Team collaboration

---

## 🧠 Reflection

This course helped me understand that performance matters when data grows large.

Through the CUDA research paper, I learned that different workloads require different computing architectures. GPUs are powerful for highly parallel tasks, while CPUs are still important for general-purpose and sequential workloads.

Through the web crawler project, I experienced how optimization techniques such as asynchronous crawling, partitioning, batching, and proper data cleaning can turn a slow crawler into a much faster and more scalable data collection pipeline.

Overall, High Performance Data Processing strengthened my understanding of **scalable data pipelines, performance optimization, and system efficiency**, which directly supports my path toward **data engineering, cloud computing, and large-scale data systems**.

---

<div align="center">

> “Fast data processing is not only about powerful hardware — it is about designing the workflow correctly.”

</div>

