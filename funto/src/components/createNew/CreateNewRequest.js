import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

import $ from "jquery";
window.jQuery = window.$ = $;
require("jquery-nice-select");

const CreateNewRequest = () => {
    const [inputTitle, setInputTitle] = useState('Ion Bird');
    const [inputPrice, setInputPrice] = useState('124.07 GBP');
    const [inputImage, setInputImage] = useState('img/bg-img/17.jpg');
    
    const ImagehandleChange = (event) => {
        setInputImage(URL.createObjectURL(event.target.files[0]));
    }

    const selectCata = useRef();

    useEffect(() => {
        $(selectCata.current).niceSelect();
    }, []);

    return(
        <div className="create-new-wrapper">
            <div className="container">
                <div className="row g-5 justify-content-center">
                    <div className="col-12 col-lg-8">
                        
                        {/* Create New Form */}
                        <div className="create-new-form border shadow-sm p-4 p-sm-5">
                            <h2 className="mb-4">Create new request</h2>
                            
                            <Form>
                                <div className="row align-items-center">
                                    {/* Upload Files */}
                                    <div className="col-12">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Upload Files</Form.Label>
                                            <Form.Control 
                                                className="bg-transparent" 
                                                id="formFileMultiple" 
                                                type="file" 
                                                multiple 
                                                onChange={ ImagehandleChange }
                                            />
                                        </Form.Group>
                                    </div>
                                    

                                    {/* Title */}
                                    <div className="col-12">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">What do you need?</Form.Label>
                                            <Form.Control id="title" type="text" value={inputTitle} onChange={e => setInputTitle(e.target.value)} />
                                        </Form.Group>
                                    </div>

                                    {/* Description */}
                                    <div className="col-12">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">Describe what should be done?</Form.Label>
                                            <Form.Control id="description" as="textarea" placeholder="Write short description" />
                                        </Form.Group>
                                    </div>

                                    {/* Price */}
                                    <div className="col-12 col-md-6">
                                        <Form.Group className="mb-4">
                                            <Form.Label className="mb-2 fz-16">What your budget?</Form.Label>
                                            <Form.Control id="price" type="text" value={inputPrice} onChange={e => setInputPrice(e.target.value)} />
                                        </Form.Group>
                                    </div>

                                    {/* Catagory */}
                                    <div className="col-12 col-md-6">
                                        <h5>Choose Category</h5>
                                        <select ref={selectCata} className="filter-select bg-gray w-100 mb-4">
                                            <option value={1}>Catagory1</option>
                                            <option value={2}>Catagory2</option>
                                            <option value={3}>Catagory3</option>
                                            <option value={4}>Catagory4</option>
                                            <option value={5}>Catagory5</option>
                                        </select>
                                    </div>

                                    {/* Agree with Terms */}
                                    <div className="col-12 col-md-8">
                                        <Form.Check
                                            className="mb-4 mb-md-0" 
                                            type="checkbox" 
                                            label="I agree to all terms & conditions." 
                                            id="rememberMe" 
                                            defaultChecked
                                        />
                                    </div>
                                    
                                    {/* Submit Button */}
                                    <div className="col-12 col-md-4">
                                        <button className="btn btn-primary w-100" type="submit">
                                            Create
                                        </button>
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

export default CreateNewRequest;