import React from 'react';
import { IoHomeSharp} from "react-icons/io5";

function HomePage() {
    return (
        <>
            <h2><i><IoHomeSharp/> </i>Welcome to my Web Development Portfolio</h2>
            <article>
                <h3>About Me</h3>
                    <p> With over ten years of experience in nursing, primarily within a high-risk antepartum unit but also within public health, I'm embarking on a career transition that merges my well-honed clinical skills with the burgeoning field of computer science to drive impactful change in healthcare technology. I'm inspired by the potential of machine learning to reshape healthcare—my goal is to leverage advanced algorithms to streamline physician and caregiver workflows while minimizing medical errors through predictive models and decision-support tools. Furthermore, I am intrigued by the potential of machine learning to positively impact patients directly, particularly in the realm of proactive healthcare. I am interested in exploring how machine learning algorithms can effectively identify high-risk patients by analyzing complex medical data, historical trends, and lifestyle factors. This data-driven approach can lead to early detection and personalized intervention, enabling healthcare providers to offer tailored support and mitigate potential medical complications, thus enhancing the lives of their patients. Ultimately, I am committed to interdisciplinary collaboration and strive to contribute to comprehensive, ethical, and future-oriented solutions that elevate healthcare technology.</p>
                <h3>About this app</h3>
                    <p> This is a full stack demonstration website that uses <strong>MERN</strong> framework.</p>
                    <ul>
                        <li><strong>M: MongoDB</strong> A NoSQL database that stores data in a flexible, JSON-like format.</li>
                        <li><strong>E: Express.js</strong> A minimal and flexible Node.js web application framework that simplifies the process of building robust and scalable server-side applications.</li>
                        <li><strong>R: React</strong> A JavaScript library widely used for creating dynamic and interactive frontends. It focuses on component-based architecture, allowing developers to create reusable UI components that efficiently update when data changes.</li>
                        <li><strong>N: Node.js</strong>  A runtime environment that allows developers to run JavaScript for both frontend and backend development. it is known for asynchronous, event-driven architecture. </li>
                    </ul>
                    <p> The purpose of this app is to add, delete, and edit favorite roses to a list, tracking characteristics such as: color, fragrance, type, breeder, and year of introduction. </p>
            </article>
        </>
    );
}
export default HomePage