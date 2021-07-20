import React from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { data } from "../../config";
const Contact = () => {
  //   useEffect(() => {
  //     emailjs.init(process.env.USER_ID);
  //   }, []);
  return (
    <>
      {" "}
      <Section id='contact'>
        <Heading>Contact</Heading>
        <Wrapper>
          <Description>
            Send Me a Message and i will get back to you!
          </Description>
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              let button = document.getElementById("submit");
              button.innerText = "Email Sent";
              button.setAttribute("disabled", "true");
              emailjs.sendForm(
                data.serviceId,
                data.templateId,
                e.target,
                data.userId
              );
            }}
          >
            <div>
              <Input
                type='text'
                name='name'
                required
                placeholder='Your Name'
              ></Input>
              <Input
                type='email'
                name='email'
                required
                placeholder='Your Email'
              ></Input>
            </div>
            <TextBox name='message' placeholder='Your Message...' />
            <Button id='submit' type='submit'>
              {" "}
              Send
            </Button>
          </Form>
        </Wrapper>
      </Section>
    </>
  );
};

export default Contact;
const Section = styled.section`
  width: 100%;
  padding: 100px 150px 20px;
  @media (max-width: 767px) {
    padding: 50px 20px 20px;
  }
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 80px 40px 20px;
  }
`;
const Input = styled.input`
  background-color: #3a3b3c;

  border-radius: 8px;
  height: 40px;
  color: #fff;
  width: calc(49% - 6px);
  display: inline-block;
  transition: all 0.2s ease-in;
  padding: 12px 10px;
  border: 2px solid #3a3b3c;
  margin-bottom: 20px;
  &:focus {
    outline: none;
    border: 2px solid #02d463;
  }
`;
const TextBox = styled.textarea`
  width: 100%;
  transition: all 0.2s ease-in;
  padding: 12px 10px;
  resize: vertical;
  border: 2px solid #3a3b3c;
  background-color: #3a3b3c;

  border-radius: 8px;
  margin-bottom: 20px;
  color: #fff;
  &:focus {
    outline: none;
    border: 2px solid #02d463;
  }
`;
const Button = styled.button`
  width: 130px;
  padding: 10px 12px 8px;
  margin: 0 auto;
  border: 2px solid #02d463;
  border-radius: 4px;
  background-color: #02d463;
  color: #fff;
  align-self: center;
  &:hover,
  &:disabled {
    border: 2px solid #02d463;
    background-color: transparent;
    color: #02d463;
  }
  &:focus,
  &:active {
    outline: none;
  }
`;
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #2a2526;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;
const Description = styled.div`
  font-size: 24px;
  margin-bottom: 20px;
`;
const Form = styled.form`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 400px;
  & > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;
const Heading = styled.h3`
  font-size: clamp(32px, 5vw, 50px);
  line-height: clamp(32px, 5vw, 50px);
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  &::after {
    content: "";
    position: relative;
    display: inline-block;
    margin-left: 20px;
    top: -50%;
    width: 300px;
    height: 1px;
    background: linear-gradient(to right, #02d463, #fff);
    @media (max-width: 767px) {
      min-width: 120px;
      max-width: 180px;
    }
  }
`;
