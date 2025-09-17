import React from 'react';

export default function About({ mode }) {
    // Set style based on mode prop
    const mystyle = {
        color: mode === 'dark' ? 'white' : 'black',
        backgroundColor: mode === 'dark' ? '#212529' : 'white',
        border: mode === 'dark' ? '1px solid white' : undefined,
        transition: 'all 0.3s'
    };

    return (
        <div className='container' style={mystyle}>
            <h1 className='my-3'>About Us</h1>

            <div className="accordion" id="accordionExample" style={mystyle}>
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" style={mystyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            What is TextUtils ?
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>TextUtils is a React-App which is used to modify your text as you want</strong> ...
                        </div>
                    </div>
                </div>

                {/* Accordion Item #2 */}
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How can we use TextUtils ?
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>Just add the text in the box field and modify the text by clicking on given buttons below</strong> ...
                        </div>
                    </div>
                </div>

                {/* Accordion Item #3 */}
                <div className="accordion-item" style={mystyle}>
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={mystyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            On what stack TextUtils is Developed ?
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={mystyle}>
                            <strong>TextUtils is developed on React JS</strong> ...
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}