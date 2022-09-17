import Phonebook from "./PhonebookForm/PhonebookForm";
import PhonebookList from "./PhonebookList/PhonebookList";
import Filter from "./Filter/Filter";
import styled from '@emotion/styled';

export function App() {
    return (
      <Container>
        <Phonebook/>
        <Filter/>
        <PhonebookList />
        </Container>
    )
};


const Container = styled.div`
    text-align: center;
    padding: 40px;
`;