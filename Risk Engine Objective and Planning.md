# RISK ANALYSIS BRIEFING

**Purpose of the Initiative:**

* We aim to advance beyond the basic Excel reports currently provided by our CFO, Jaap Spelt, and the Head of Risk. Currently, these Excel reports are limited by slow updates and a lack of automation, which hampers timely decision-making and efficient risk analysis.  
* Our goal is to leverage operational, static, and public data to identify unusual client behaviour and improve risk management. By harnessing these insights, our team expects to enhance daily risk analysis and decision-making, enabling faster responses to potential risks. The primary objective is to implement modern technologies such as machine learning and AI for our internal risk team. These tools are expected to streamline operations, quickly highlight anomalies, and support more informed decision-making. As a result, the team will anticipate practical changes such as reduced manual analysis and enhanced focus on strategic risk areas.

  **About StratCol:**

* StratCol operates a Debit Order System integrated with major banks in South Africa, Lesotho, Swaziland, and Namibia.  
* We process PASA-approved mandates, including voice, digital, and app-based options.  
* Clients can schedule collections on any banking day, and we disburse funds according to their preferences, accompanied by detailed reports.  
* We offer competitive fees and robust integration options, including System-to-System, SFTP, Mobile, and the INTEGRATOR platform.  
* Our client platform is available 24/7 and provides comprehensive data and statistics.  
* Our services include EFT, DebiCheck, E-Mandate, AVSR (account/ID verification), and BulkSMS.

## Project Objectives and Implementation Goals

The STRATCOL CEO has outlined my objectives for project implementation and facilitation.

StratCol maintains two categories of data.

**1\. StratCol Client Data (Static Data):**

* This includes client identity, place of employment, and director details.

**2\. Client Operational Data:**

This data captures the operational behaviour of StratCol clients, including metrics such as:

* Transaction amounts and volumes, including totals, monthly figures, and the largest single transaction.  
* Preferred collection days.  
* Number of bounced or disputed transactions.  
* Sudden changes in transaction volume, complaints, or unpaid amounts.

**3\. External Client Public Data (From a Risk Perspective):**

This process is currently manual and slow, requiring automation to improve efficiency and effectiveness. We aim to achieve automation through a series of strategic steps. First, we will implement data collection and monitoring tools that automatically gather and process relevant information. This will include the integration of APIs for real-time data retrieval. We will also install machine learning algorithms that can autonomously analyze and detect patterns or anomalies. Manual tasks such as data entry and initial analysis will be replaced with automated workflows, allowing the team to focus on more strategic initiatives. By transitioning to an automated system, we anticipate a significant decrease in processing time, error rates, and operational costs, paving the way for more informed and timely risk assessments.

* Fraud or suspicious behaviour identified through online news, social media, or platforms such as Trustpilot.  
* Liquidation rumours.  
* Whether the client is a Politically Exposed Person (PEP).  
* Connections to statutory inquiries, terrorist activities, or unusual organisations.  
* Recent takeovers or acquisitions may introduce new risks.

### Sidenote about current Stratcol reports that are used for flagging risks:

This is how a typical StratCol excel spreadsheet can highlight already,  the pieces of information included in the report, is as a short name, a business category (a number from 1 to 7), the overall industry, a unique identification number for the report and the user, the current status (Active, Cancelled, or Pre-Cancelled), the sub-industry code, the trading name, and various statistics over the last six months. These statistics cover the total count and value of transactions, paid transactions, unpaid transactions, and disputed transactions

* # BigQuery: Our central data warehouse for static, operational, and public data. Data preparation and transformation, such as calculating monthly totals, will be performed here.

* # Vertex AI platform: Used to build and train machine learning models to identify patterns, detect anomalies, and predict risk. It will also automatically generate risk flags. 

  * To ensure the effectiveness of these models, we aim for a precision rate of \[INSERT PRECISION\] and a recall rate of \[INSERT RECALL\] when identifying risk flags. Our stakeholders have indicated that a false positive rate of \[INSERT THRESHOLD\] is acceptable. These criteria will guide our resource allocation and help set expectations for accuracy and performance.

* # Looker: The visual interface that connects to BigQuery to display client behaviour, transaction trends, and AI-generated risk flags in interactive dashboards.

* # Cloud Logging and Cloud Monitoring: Monitor the system to ensure BigQuery and Vertex AI operate smoothly and securely.

* # VPC and Cloud Identity: Ensure network security and restrict access to sensitive data and reports to authorised personnel.

### The proposed technology stack

The proposed technology stack will use BigQuery as its central data warehouse for all static, operational, and public data, where data preparation and transformation occur. The Vertex AI platform is crucial for building and training machine learning models to identify patterns, detect anomalies, and automatically generate risk flags, while meeting stakeholders' precision, recall, and false-positive rate targets. Looker can provide a visual interface that connects to BigQuery to display client behaviour, transaction trends, and AI-generated risk flags through interactive dashboards. Alternatively, you can build a customised NextJS dashboard. Finally, Cloud Logging and Cloud Monitoring ensure smooth operation of the core systems, while VPC and Cloud Identity enforce network security and restrict access to sensitive data and reports.

To effectively leverage modern technology and enhance our risk management processes, we have chosen to implement a comprehensive Google Cloud Stack. This selection enables us to seamlessly integrate advanced technologies to improve data handling while ensuring enhanced security and scalability.

* **Ingest and Store Data in BigQuery**: Consolidate operational, static, and third-party/public data sources (e.g., legal and ethical standing information) into BigQuery. This will serve as the central, scalable data warehouse for all client-related information.

* **Transform and Prepare Data** in BigQuery: Utilise BigQuery's capabilities to transform and prepare the ingested data. This includes calculating the total number of transactions and the total value per month, and identifying the single most significant transaction value for each period.

* **Develop and Deploy Risk Prediction Models** with Vertex AI platform: Use the Vertex AI platform to build and train machine learning models that analyse client behaviour patterns, anomalies, and risks. These models will leverage the prepared data from BigQuery to identify deviations and predict potential risks.

* **Automate Flagging with the Vertex AI platform:** Configure it to automatically generate flags for identified deviations and predicted risks. These flags can be integrated back into BigQuery or directly consumed by Looker. Used to build and train machine learning models to identify patterns, detect anomalies, and predict risk. It will also automatically generate risk flags. To ensure the effectiveness of these models, we w aim for a specific precision rate\] and a recall rate of \[INSERT RECALL\] when identifying risk flags. Our stakeholders have indicated that a false positive rate of \[INSERT THRESHOLD\] is acceptable. These criteria will guide our resource allocation and help set expectations for accuracy and performance.

* **Connect Looker to BigQuery**: Establish a connection to access processed data, including transaction summaries, significant transaction values, and AI-generated risk flags.

* **Create Dashboards and Reports in Looker**: Design and build interactive dashboards and reports to visualise client behaviour patterns, transaction trends, and AI-driven risk flags. This will enable users to analyse existing client behaviour, identify anomalies, and monitor risks.

* **Monitor and Manage** with **Cloud** **Logging** and **Cloud** **Monitoring**: Utilise Cloud Logging to collect and analyse audit and operational logs from Looker and other integrated services. Use Cloud Monitoring to track the performance and health of the BigQuery and Vertex AI platform services, ensuring the solution operates efficiently.

* **Secure Network and Access** with **Virtual Private Cloud (VPC)** and **Cloud Identity**: Configure a Virtual Private Cloud (VPC) to ensure secure, private network connectivity between Looker and BigQuery. Manage user access and authentication for Looker and other Google Cloud resources using Cloud Identity.

## Privacy and Security: Approach for Acquiring Public Data:

* We can use a Search and Retrieval Augmented Generation (RAG) strategy rather than scraping the entire internet. This involves using the Google Custom Search JSON API to retrieve client-specific links and snippets. Then build and train the machine learning models for risk prediction. To connect to our Data Lake and provide the visual interface (dashboards) for the results, client behaviour, and AI-generated risk flags.
