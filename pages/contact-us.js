import ContactUsForm from "../components/Layout/forms/ContactUsForm";
import Container from "../components/Elements/Container";
import WithNav from "../components/Layout/WithNav";
import Box from "@mui/material/Box";

function ContactUsPage() {
  return (
    <Container>
      <Box
        sx={{
          flexGrow: 1,
          marginLeft: { xs: 5, sm: 5, lg: 20 },
          marginRight: { xs: 5, sm: 5, lg: 20 },
          marginBottom: 15,
          marginTop: 15,
        }}
      >
        <ContactUsForm />
      </Box>
    </Container>
  );
}

export default WithNav(ContactUsPage);
