import { useSelector } from "react-redux";
import { getContacts } from "../../redux/contacts/selector";
import { getFilter } from "../../redux/filter/selector";
import { PhonebookForm } from "components/PhonebookForm/PhonebookForm";
import { Filter } from "components/Filter/Filter";
import { PhonebookList } from "components/PhonebookList/PhonebookList";
import { Container, Stack } from "react-bootstrap";

export const ContactPage = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contact => {
    return (contact.name.toLowerCase().includes(normalizedFilter) || contact.number.includes(normalizedFilter))
    }      
  );
    return (
      <Container>          
          <Stack direction="horizontal">
          <div className="me-auto" style={{ width: '30rem' }} >
            <Stack direction="horizontal" gap={5}>
          <Filter/>
          </Stack>
          <PhonebookList
            contacts={filteredContacts}
            />
          </div>
          <PhonebookForm/>
        </Stack>      
        </Container>
    )
}