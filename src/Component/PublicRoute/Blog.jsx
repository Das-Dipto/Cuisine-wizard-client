import React from 'react'
import Button from 'react-bootstrap/Button';
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";


const Blog = () => {

    const downloadPdfDocument = () => {
        const input = document.getElementById('blog-content');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                pdf.addImage(imgData, 'JPEG', 0, 0);
                pdf.save(`$download.pdf`);
            })
    }

  return (
    <>
        <div className="blog-banner">
            <div className="blog-banner-content w-75 mx-auto d-flex flex-wrap justify-content-between py-3">
                <h1>Blog</h1>
                <Button onClick={downloadPdfDocument} className='bg-primary'>Download</Button>
            </div>
        </div>

        <div id="blog-content" className="blog-container py-5">
            <div className="question-one   q-and-a w-75 mx-auto py-3 px-5 my-4 bg-light">
                <h3 className='font-weight-bold'>i.Tell us the differences between uncontrolled and controlled components.</h3>
                <p>Ans: The DOM controls uncontrolled components, while React controls regulated components. Although controlled components require more code, they provide more flexibility and control. You must store a controlled component's state in a React component and update it with event handlers in order to use it. Although they are simpler to use, uncontrolled components provide less control. Uncontrolled components can be used by simply adding an event handler to them and letting the DOM regulate their state. When you need more control, use controlled components; when you require simplicity, use uncontrolled components.</p>
            </div>
            <div className="question-two   q-and-a w-75 mx-auto py-3 px-5 my-4 bg-light">
                <h3 className='font-weight-bold'>ii.How to validate React props using PropTypes</h3>
                <p>Ans: Import the PropTypes package from the 'prop-types' library and provide the expected type and shape of each prop in the component's propTypes object to validate React props using PropTypes. For instance, you might add 'name: PropTypes.string' to the propTypes object to verify that a prop with the name 'name' is a string. Additionally, PropTypes supports shape validation for complex objects and lets you set default prop values using defaultProps. Simply pass the props object to the component to use PropTypes. If the props object does not match the expected type or shape, PropTypes will validate the props at runtime and issue a warning in the console. PropTypes is a potent tool that can help you detect errors early and make sure that your React components get the right props.</p>
            </div>
            <div className="question-three q-and-a w-75 mx-auto py-3 px-5 my-4 bg-light">
                <h3 className='font-weight-bold'>iii. Tell us the difference between nodejs and express js.</h3>
                <p>Ans: Express.js is a web framework built on top of Node.js that offers a set of features and tools for creating online apps, whereas Node.js is a runtime environment for executing JavaScript code outside of a web browser. While Express.js offers a quick and flexible way to build web applications and APIs, Node.js is used for server-side development and can be used to build various types of applications. Express.js adds middleware, routing, and templating to Node.js, which provides essential functionality like file system access, network connectivity, and operating system interfaces. Express.js is targeted at creating web apps and APIs, but Node.js is a basis for building different kinds of applications. </p>
            </div>
            <div className="question-four  q-and-a w-75 mx-auto py-3 px-5 my-4 bg-light">
                <h3 className='font-weight-bold'>iv. What is a custom hook, and why will you create a custom hook?</h3>
                <p>Ans: In a React application, a custom hook is a reusable function that contains common logic. It enables the extraction of stateful logic from a component and its reuse in other components. The 'use' prefix is used to construct unique hooks that may be used to functional components. They adhere to the same guidelines as built-in React hooks like "useState" and "useEffect." In order to eliminate code duplication, make your code more modular, and make it simpler to maintain, you would construct a custom hook to encapsulate functionality that is utilized by several components. By abstracting complicated logic into a straightforward function call, custom hooks can also aid in improving the readability of your code. You may increase the maintainability and scalability of your React application by adding custom hooks.
               </p>
            </div>
        </div>
    </>
  )
}

export default Blog