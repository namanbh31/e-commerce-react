import React, {useState} from "react";
import axios from "axios";
import  Form  from "react-bootstrap/Form";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function SearchBar(){
    const [searchParams, setSearchParams] = useState("");
    const updateSearchPararm = (event)=>{
        setSearchParams(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
    }

    return(
        <Container>
            <Row className="justify-content-center">
                <Col xs={6} sm={6} className="justify-content-center">
                    <Form className="d-flex py-4" onSubmit={handleSubmit}>
                        <Form.Control
                        onChange={updateSearchPararm}
                        type="search"
                        placeholder="Search"
                        className="border-secondary rounded-pill pr-5 shadow-lg p-3 mb-5 bg-white rounded"
                        aria-label="Search"
                        />
                    </Form>
                </Col>
            </Row>
        </Container>
);

}
export default SearchBar;
