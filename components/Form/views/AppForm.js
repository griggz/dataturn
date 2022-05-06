import React from "react";
import PropTypes from "prop-types";
import Container from "../../Elements/Container";
import Box from "@mui/material/Box";
import Paper from "../../Elements/Paper";

const styles = {
  padding: (theme) => theme.spacing(8, 6),
  backgroundImage: "url(" + "/images/SGrid.svg" + ")",
  backgroundColor: (theme) => theme.palette.secondary.light,
};

function AppForm(props) {
  const { children, paper } = props;
  return (
    <Box sx={{ overflow: "hidden", marginTop: 20, marginBottom: 20 }}>
      <Container>
        {paper ? (
          <Box mt={7} mb={12}>
            <Paper sx={styles}>{children}</Paper>
          </Box>
        ) : (
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            {children}
          </Box>
        )}
      </Container>
    </Box>
  );
}

AppForm.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppForm;
