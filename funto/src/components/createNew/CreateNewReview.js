import Form from 'react-bootstrap/Form';

const Review = (props) => {
    const { contactTitle, contactSubTitle } = props;

    return(
        <div className="contact-wrapper">
            <div className="container">
                <div className="row g-5 align-items-center">
                    {/* Contact Form */}
                    <div className="col-12 col-lg-6">
                        <div className="contact-form">
                            {/* Heading Info */}
                            <h1 className="mb-3">{contactTitle}</h1>
                            <p className="mb-5">{contactSubTitle}</p>
                            
                            {/* Form */}
                            <Form>
                                <div className="row g-4">
                                    
                                    <div className="col-12">
                                        <p>How would you rate the overall quality of this delivery?</p>
                                        <Form.Group className="mb-4">
                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Poor" 
                                                id="poor" 
                                                name="inlineRadioOptions" 
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Below Average" 
                                                id="belowAverage" 
                                                name="inlineRadioOptions"
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Average" 
                                                id="average" 
                                                name="inlineRadioOptions"
                                                
                                            />
                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Above Average" 
                                                id="aboveAverage" 
                                                name="inlineRadioOptions"
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Perfect" 
                                                id="perfect" 
                                                name="inlineRadioOptions"
                                            />
                                        </Form.Group>
                                    </div>
                                    
                                    <br />
                                    <div className="col-12">
                                        <p>How closely did this delivery meet your expectations?</p>
                                        <Form.Group className="mb-4">
                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Poor" 
                                                id="poor" 
                                                name="inlineRadioOptions" 
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Below Average" 
                                                id="belowAverage" 
                                                name="inlineRadioOptions"
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Average" 
                                                id="average" 
                                                name="inlineRadioOptions"
                                                
                                            />
                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Above Average" 
                                                id="aboveAverage" 
                                                name="inlineRadioOptions"
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Perfect" 
                                                id="perfect" 
                                                name="inlineRadioOptions"
                                            />
                                        </Form.Group>
                                    </div>
                                    
                                    <br />
                                    <div className="col-12">
                                        <p>Was this delivery useful for your needs?</p>
                                        <Form.Group className="mb-4">
                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Yes" 
                                                id="yes" 
                                                name="inlineRadioOptions" 
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="No" 
                                                id="no" 
                                                name="inlineRadioOptions"
                                                
                                            />

                                            <Form.Check
                                                inline 
                                                type="radio" 
                                                label="Not sure" 
                                                id="notSure" 
                                                name="inlineRadioOptions"
                                            />
                                        </Form.Group>
                                    </div>

                                    <br />
                                    <p>Overall, how would you rate this seller?</p>
                                    <p>***Add star functionality***</p>

                                    <br />
                                    <p>In more details ...</p>
                                    <div className="col-12">
                                        <Form.Control as="textarea" id="message" name="message" placeholder="Write in details" />
                                    </div>

                                    <div className="col-12">
                                        <button className="btn btn-primary" type="submit">Send now</button>
                                    </div>
                                </div>
                            </Form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review;