import React from 'react';
import './Pages.css';

function FAQ(){
    return(
    <>
        <section className="question-header-ctn">
            <h1>FAQ page</h1>
            <p>JavaScript Interview Questions with Anwers</p>
        </section>

        <div className="containers">
            <section className="question-ctn">
                <h3>Why "use strict" is used in JavaScript?</h3>
                <p>'Use strict' is used in JavaScript to make sure that your code is written correctly.
                    <br />Strict mode enforces the following rules:
                </p>
                <ul>
                    <li>Variables must be declared before the are used</li>
                    <li>All comparisons must be done between literals values</li>
                    <li>No function calls can be made until the function has been defined</li>
                </ul>
                <p>This helps to catch errors early on in the development process and keeps your code more organised</p>
            </section>

            <section className="question-ctn">
                <h3>What is the hoisting in JavaScript</h3>
                <p>Hoisting simply means that all declarations are lifted to the top of the scope, 
                    which may have them declared before or after other code.</p>
                <p>
                    This means that even if you declare your variable after some other code, 
                    it will be available ath the top of that scope - making it accessible outside of its original location
                </p>
            </section>
        </div>
        
    </>
    );
}

export default FAQ;