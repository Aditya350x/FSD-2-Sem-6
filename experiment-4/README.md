# 📘 Full Stack Development 2 – Experiment 4  
## IMPLEMENT STATE MANAGEMENT USING LOCAL STATE, CONTEXT API & REDUX

---

## 👤 Student Details  
Name: Aditya Vardhan Singh  
UID: 23BDA70124  
Section: 23BDA-1B  
Subject: Full Stack Development-2 (FSD)  
Semester: 6  

---

## 🧪 Experiment Title  
Implement State Management using Local State, Context API, and Redux in React

---

## 🎯 Aim of the Experiment  
To implement and compare different state management techniques in React by using Local State, Context API, and Redux, and to understand how global and local state can be efficiently managed across multiple components.

---

## 🛠️ Tools & Technologies Required  
Visual Studio Code  
Node.js and npm  
React.js  
Redux  
React-Redux  
Context API  
Vite  
HTML5 & CSS3  
Git and GitHub  

---

## 🧩 Project Structure  
experiment-4/  
│── node_modules/  
│── public/  
│── src/  
│   ├── assets/  
│   ├── components/  
│   │   ├── context/  
│   │   │   └── CounterGlobalContextParent.jsx  
│   │   ├── CounterGlobalReduxParent.jsx  
│   │   └── CounterLocalState.jsx  
│   ├── store/  
│   │   ├── CounterReducer.jsx  
│   │   └── Store.jsx  
│   ├── App.jsx  
│   ├── App.css  
│   ├── index.css  
│   └── main.jsx  
│── .gitignore  
│── eslint.config.js  
│── index.html  
│── package.json  
│── package-lock.json  
│── vite.config.js  
│── README.md  

---

## ⚙️ Procedure  
1. Created a new React project using Vite for faster development and build optimization.  
2. Implemented a counter application using React Local State with useState.  
3. Created a global state using Context API and wrapped the application with Context Provider.  
4. Developed a Redux store and reducer to manage global counter state.  
5. Connected Redux to the React application using Provider.  
6. Used useSelector and useDispatch hooks to access and update Redux state.  
7. Implemented separate components to demonstrate Local State, Context API, and Redux state management.  
8. Verified correct state updates and synchronization across components.  
9. Organized the project structure for clarity and scalability.  
10. Uploaded the completed project to GitHub with proper version control.

---

## ✅ Result  
The experiment was successfully completed. State management was implemented using Local State, Context API, and Redux. Each approach worked correctly, demonstrating different methods of managing and sharing state in React applications.

---

## 📚 Learning Outcomes  
After completing this experiment, the student is able to:  
- Understand the difference between local and global state  
- Implement Local State using useState  
- Use Context API for global state management  
- Implement Redux for scalable state management  
- Compare Redux and Context API use cases  
- Reduce prop drilling in React applications  

---

## 📌 Conclusion  
This experiment demonstrates multiple state management approaches in React. Local State is suitable for component-specific data, Context API is effective for simple global state sharing, and Redux provides a structured and scalable solution for complex applications requiring predictable state management.

