# 🏦 AllLife Bank Personal Loan Prediction

<div align="center">
  <h2>🎯 Machine Learning for Banking Intelligence</h2>
  <p><em>Predicting Personal Loan Acceptance through Data-Driven Customer Analysis</em></p>
</div>

## 📊 Project Overview

**Author:** Sourojit Dhua  
**Project Type:** Machine Learning Classification  
**Domain:** Banking & Financial Services  

This project focuses on building a predictive model to help AllLife Bank identify potential customers who are likely to accept personal loan offers. By analyzing customer demographics, financial behavior, and banking relationships, the model aims to improve the bank's marketing campaign effectiveness and increase loan conversion rates.

## 🎯 Business Problem

AllLife Bank, a US-based financial institution, has a substantial customer base primarily consisting of liability customers (depositors). However, the number of asset customers (borrowers) remains relatively small. The bank's management seeks to:

- **Convert liability customers to personal loan customers** while retaining their deposits
- **Improve targeting** for marketing campaigns beyond the previous 9% success rate
- **Identify high-potential customers** for personal loan products
- **Optimize marketing spend** by focusing on customers most likely to convert

## 🔍 Project Objectives

1. **Predict** whether a liability customer will purchase a personal loan
2. **Identify** the most significant customer attributes driving loan purchases  
3. **Segment** customers to determine optimal targeting strategies
4. **Provide actionable insights** for the marketing department

## 📈 Dataset Information

The dataset contains **5,000 customer records** with the following features:

| Feature | Description | Type |
|---------|-------------|------|
| `ID` | Customer unique identifier | Numeric |
| `Age` | Customer's age in years | Numeric |
| `Experience` | Years of professional experience | Numeric |
| `Income` | Annual income (in thousands USD) | Numeric |
| `ZIPCode` | Home address ZIP code | Numeric |
| `Family` | Family size | Numeric |
| `CCAvg` | Average monthly credit card spending (in thousands USD) | Numeric |
| `Education` | Education level (1: Undergrad, 2: Graduate, 3: Advanced/Professional) | Categorical |
| `Mortgage` | House mortgage value (in thousands USD) | Numeric |
| `Personal_Loan` | **Target Variable** - Loan acceptance (0: No, 1: Yes) | Binary |
| `Securities_Account` | Has securities account (0: No, 1: Yes) | Binary |
| `CD_Account` | Has certificate of deposit account (0: No, 1: Yes) | Binary |
| `Online` | Uses internet banking (0: No, 1: Yes) | Binary |
| `CreditCard` | Uses credit card from other banks (0: No, 1: Yes) | Binary |

## 🛠️ Technical Implementation

### Technologies Used
- **Python 3.8+**
- **Pandas** - Data manipulation and analysis
- **NumPy** - Numerical computations
- **Matplotlib & Seaborn** - Data visualization
- **Scikit-learn** - Machine learning algorithms
- **Jupyter Notebook** - Development environment

### Machine Learning Approach
- **Problem Type:** Binary Classification
- **Target Variable:** Personal_Loan (0/1)
- **Evaluation Metrics:** Accuracy, Precision, Recall, F1-Score, ROC-AUC
- **Models Implemented:** Multiple algorithms with performance comparison

## 📁 Project Structure

```
AllLife-Bank/
├── 📊 Loan_Modelling.csv                                              # Customer dataset
├── 📓 AllLifeBank_Sourojit_Dhua_AIML_ML_Project_full_code_notebook.ipynb  # Main Jupyter notebook
├── 🌐 AllLifeBank_Sourojit_Dhua_AIML_ML_Project_full_code_notebook.html   # Detailed HTML report
├── 🌐 index.html                                                      # Project overview page
└── 📖 README.md                                                       # Project documentation
```

## 🔬 Key Analysis Areas

### 1. Exploratory Data Analysis (EDA)
- **Distribution Analysis** of mortgage attributes and outlier detection
- **Credit Card Usage** patterns among customers
- **Correlation Analysis** between features and loan acceptance
- **Age Demographics** impact on loan interest
- **Education Level** influence on purchasing behavior

### 2. Data Preprocessing
- Missing value treatment
- Feature engineering and selection
- Outlier detection and handling
- Data normalization and scaling
- Train-test split preparation

### 3. Model Development
- Multiple algorithm implementation
- Hyperparameter tuning
- Cross-validation
- Performance optimization
- Model comparison and selection

### 4. Business Insights
- Customer segmentation strategies
- Feature importance analysis
- Actionable recommendations for marketing campaigns

## 🎯 Key Findings & Insights

*[This section would be populated based on the actual analysis results from the notebook]*

## 🚀 Getting Started

### Prerequisites
```bash
pip install numpy==1.25.2 pandas==1.5.3 matplotlib==3.7.1 seaborn==0.13.1 scikit-learn==1.2.2
```

### Running the Analysis
1. Clone this repository
2. Install required dependencies
3. Open the Jupyter notebook: `AllLifeBank_Sourojit_Dhua_AIML_ML_Project_full_code_notebook.ipynb`
4. Run all cells sequentially
5. View detailed results in: `AllLifeBank_Sourojit_Dhua_AIML_ML_Project_full_code_notebook.html`
6. Check project overview: `index.html`

## 📊 Model Performance

*[Performance metrics and comparison table would be added here based on results]*

## 💡 Business Recommendations

*[Strategic recommendations for AllLife Bank would be detailed here]*

## 🤝 Contributing

This project was developed as part of an AI/ML course module. For questions or suggestions, please reach out to Sourojit Dhua.

## 📄 License

This project is for educational purposes as part of Module 2 coursework.

---

<div align="center">
  <strong>Developed with ❤️ by Sourojit Dhua</strong><br>
  <em>Transforming Data into Banking Intelligence</em>
</div>
