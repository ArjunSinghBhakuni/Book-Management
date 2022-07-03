import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { editBook } from "../Redux/AppReducer/action";

const EditBook = () => {
  const [formData, setFormData] = useState({});
  const dispatch = useDispatch();
  const { id } = useParams();
const navigate = useNavigate();
  const handleChange = (e) => {
    let { name, value, type, files } = e.target;

    if (type === "file") {
      setFormData({
        ...formData,
        [name]: files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(editBook(id,formData))
    navigate(`/books/${id}`)
      
    
  };

  return (
    <DivWrapper onSubmit={handleSubmit}>
      <center>
        <h1>Edit Here</h1>
      </center>
      <form action="">
        <INputWrapper>
          <label htmlFor="">Author Name :</label>
          <input
            name="author"
            onChange={handleChange}
            type="text"
            placeholder="Author"
          />
        </INputWrapper>
        <INputWrapper>
          <label htmlFor="">Release Year :</label>
          <input
            name="release_year"
            onChange={handleChange}
            type="text"
            placeholder="year"
          />
        </INputWrapper>
        <INputWrapper>
          <label htmlFor="">Category :</label>
          <input
            name="category"
            onChange={handleChange}
            type="text"
            placeholder="category"
          />
        </INputWrapper>
        <INputWrapper>
          <label htmlFor="">Image: </label>
          <input
            name="cover_photo"
            onChange={handleChange}
            type="file"
            accept="image/png, image/jpeg, application/pdf"
          />
        </INputWrapper>

        <Button
          style={{
            border: "1px solid teal",
            width: "90%",
            padding: "2px",
            margin: "auto",
            cursor: "pointer",
          }}
        >
          Edit confirm
        </Button>
      </form>
    </DivWrapper>
  );
};

export default EditBook;
const DivWrapper = styled.div`
  width: 350px;
  margin: auto;
  margin-top: 20px;
  padding: 2px 0px 20px 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
const INputWrapper = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin: 15px;
`;

const Button = styled.button`
border:1px solid teal;
width : 300px
padding:10px;
margin:auto;
cursor:pointer;

`;
