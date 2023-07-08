# healthifyMe_fullStack

Summary of Fitness Tracking App:

I have developed a comprehensive fitness tracking app that offers users a wide range of features to enhance their fitness journey. The app incorporates various technologies and APIs to provide a seamless user experience.

The app includes a user-friendly homepage where users can easily navigate through the different sections. To ensure a secure environment, I have implemented a robust signup and login system with input validation using Express Validator and I'm sending verification/confirmation mails using Nodemailer. Additionally, for protection against cross-site request forgery (CSRF), the app employs CSRF tokens.

User logins are managed through sessions and cookies, ensuring seamless access to their data. To enable personalized experiences, the app allows users to edit and delete their profiles. The app leverages the Leaflet library to render an interactive map where users can map their workouts, incorporating different icons to represent various activities such as running, cycling, and swimming. Users have the ability to edit or delete their workouts, allowing them to track their progress accurately. Whether they want to make adjustments to existing workout entries or remove them entirely, the app provides a seamless workflow to manage their workout history.

The app features a comprehensive dashboard that provides users with real-time tracking of their current goals, past workouts, upcoming workouts, and progress. Users are awarded badges based on their achievements, motivating them to stay active and reach their fitness milestones. To visualize data effectively, I have utilized the Chart.js library to create visually appealing charts. 

The app seamlessly integrates with browser APIs, enabling the retrieval of the current temperature through the Weatherbit API. Additionally, I have implemented reverse geocoding using the Leaflet API to provide users with their current addresses and workout locations based on their coordinates.

To create dynamic and responsive front-end interfaces, I have employed EJS as a dynamic templating engine supported by Node.js, HTML, CSS, and JavaScript. Express is used for efficient routing of incoming requests and parsing request bodies. The JavaScript code has been written in an object-oriented manner, following best practices to ensure maintainability and extensibility. By utilizing object-oriented programming principles, the code structure promotes modularity and reusability, making it easier to add new features or make modifications in the future.

For data storage, the app utilizes MongoDB, a scalable and flexible NoSQL database. To facilitate seamless access and efficient management of user profiles, workouts, sessions, and associated data, I have leveraged the power of Mongoose ODM for seamless integration with MongoDB.

In conclusion, the fitness tracking app I have developed offers a comprehensive set of features designed to enhance the user's fitness journey. The app leverages various technologies, APIs, and libraries to provide a secure, dynamic, and personalized experience. By utilizing interactive maps, charts, and badges, the app motivates users to stay active and achieve their fitness goals.

HOMEPAGE

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/29b9f53a-7ddb-4ce9-805e-73a5a19d7fa1)

SIGNUP (with input validation)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/4e1e2de2-9763-4d1c-9463-176d373f48f9)

Sending verification emails using Nodemailer

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/ab9995fe-71fe-4173-9e29-02c959d877f5)

LOGIN (with input validation, using sessions & cookies)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/cf78b05e-e4e6-40b4-bd88-59a3cbfd8400)

VALIDATION (using express-validator)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/0c8e5872-5499-40f8-96b4-051e03a83bda)

CONTACT-US

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/21f7c39f-89da-49ae-aebb-2a80b7ea74be)

USER-DETAILS

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/09b348e0-42b6-44c9-87af-b0935bacbaa4)

RESET-PASSWORD (advanced authentication & input validation)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/cb9cdb09-3892-4c42-b5ef-6ed247dfa82f)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/85ed06a8-3559-43f6-9790-e6f048b4c89e)

DASHBOARD (using Chart.js for pie chart and bar chart, dynamically upgrading badge on user's progress ratio)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/023b5640-644b-4738-9d7b-4a9c97006789)

MAPs user's location 

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/d69f20a8-7789-4183-b494-4c1bea068fcb)

MAP (using Weatherbit API and reverse geocoding via leaflet API for temperature and location respectively)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/8292d9ed-7183-40e2-92f3-fe3260005d15)

SORT OPTIONS

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/18f1f350-89b9-49a1-bfc0-47dfea4a42e1)

FILTER MENU

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/a1afbd5e-6778-4243-b29f-671f7a128297)

USER RESET 

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/d4b70a05-697a-4e46-bfda-54bd5e8c0b53)

STORAGE (using MongoDB as a database to store documents in various collections)

![image](https://github.com/pratikflies/healthifyMe_fullStack/assets/76919061/14f54f99-61a0-4eea-a0c1-326595a8b29f)
