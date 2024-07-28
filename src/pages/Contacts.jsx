import React from "react";
import Hero from "./Contacts/Hero";
import styled from "styled-components";

export const ContactsContainer = styled.div``;

function Contacts() {
  return (
    <ContactsContainer>
      <Hero />
    </ContactsContainer>
  );
}

export default Contacts;
