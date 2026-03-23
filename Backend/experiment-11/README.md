# 📘 Full Stack Development 2 – Experiment 11  
## DEVELOP MICROSERVICE-BASED BACKEND MODULE

## 👤 Student Details  
Name: Aditya Vardhan Singh  
UID: 23BDA70124  
Section: 23BDA-1B  
Subject: Full Stack Development-2 (FSD-II)  
Semester: 6  


## 🧪 Experiment Title  
Develop Microservice-Based Backend Modules


## 🎯 Aim of the Experiment  
To design and implement a microservice-based backend architecture using Flask by creating two independent services (Customer Service and Order Service), enabling inter-service communication, and managing data using in-memory storage.


## 🛠️ Tools & Technologies Required  
Visual Studio Code  
Python 3.x  
Flask  
Postman  
Render (Cloud Deployment Platform)  
Git & GitHub  
REST API  


## 🧩 Project Structure  

experiment-11/  
│── customer-service/  
│   ├── app.py  
│   ├── requirements.txt  
│── order-service/  
│   ├── app.py  
│   ├── requirements.txt  
│── README.md  
│── screenshots/  


## ⚙️ Backend Implementation  

The system consists of two independent microservices:

### 🔹 1. Customer Service  
- Stores customer data in-memory  
- Fetches customer details along with their orders  
- Communicates with Order Service to retrieve order data  

### 🔹 2. Order Service  
- Stores order data in-memory  
- Updates order status  
- Provides order details based on customer ID  

Both services run independently and communicate through HTTP APIs.

## 🧪 Testing

Both microservices were tested using Postman.

Testing included:

- Fetching customer orders via Customer Service  
- Updating order status via Order Service  
- Verifying inter-service communication  

Screenshots of successful API requests and responses are included in the submission zip file.


## 🚀 Deployment on Render

Both services were deployed separately on Render as independent web services.

Steps followed:

- Uploaded both services to GitHub  
- Created two Web Services on Render  
- Connected each service to its respective repository/folder  
- Configured build and start commands

## ✅ Result

The microservice-based backend system was successfully implemented using Flask. Customer Service and Order Service were developed independently and communicated effectively through APIs. All functionalities were tested using Postman and deployed successfully on Render.


## 📚 Learning Outcomes

After completing this experiment, the student is able to:

- Understand microservice architecture  
- Develop independent backend services  
- Implement inter-service communication using APIs  
- Handle in-memory data storage  
- Test APIs using Postman  
- Deploy multiple services on cloud platforms  
- Understand service separation and scalability  


## 📌 Conclusion

This experiment demonstrates the implementation of a microservice-based backend architecture using Flask. By separating functionality into Customer and Order services, the system becomes modular, scalable, and easier to maintain. The experiment provided practical experience in backend service design, communication, and deployment.
