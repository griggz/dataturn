import React, { useState } from "react";
import { Form, FormSpy } from "react-final-form";
import Grid from "@mui/material/Grid";
import Typography from "../../../components/Elements/Typography";
import AppForm from "../../../components/Form/views/AppForm";
import { required } from "../../../components/Form/validations";
import FormButton from "../../../components/Form/FormButton";
import FormFeedback from "../../../components/Form/FormFeedback";
import Snackbar from "../../../components/Elements/SnackBar";

function FormInput({
  handleSubmit,
  validateFields = [],
  title,
  submitText,
  initialState,
  formSpy,
  paper,
  preview,
  children,
}) {
  const [sent, setSent] = useState(false);
  const [snackMessage, setSnackMessage] = useState();
  const [snackOpen, setSnackOpen] = useState();

  const handleNotification = () => setSnackOpen(false);

  const scrollToTop = () => window.scrollTo(0, 0);

  const validate = (values) => {
    const errors = required(validateFields, values);

    return errors;
  };

  const onSubmit = async (values) => {
    setSent(true);
    let res;

    try {
      res = await handleSubmit(values);
      console.log("res", res);
      setSnackMessage(res);
      setSnackOpen(true);
      setSent(false);
    } catch (error) {
      // BUILD ERROR MESSAGE HANDLER
      setSnackMessage(`Something went wrong. ${error.response.data.message}`);
      setSnackOpen(true);
      setSent(false);
    }

    scrollToTop();
  };

  return (
    <>
      <AppForm maxWidth={"xl"} paper={paper}>
        <>
          <Typography variant="h3" gutterBottom marked="center" align="center">
            {title}
          </Typography>
        </>
        <Form
          onSubmit={onSubmit}
          subscription={{ submitting: true, pristine: true }}
          validate={validate}
          initialValues={initialState}
          preview={preview}
        >
          {({ handleSubmit, submitting, form }) => {
            return (
              <form
                onSubmit={async (event) => {
                  handleSubmit(event);
                  if (submitting) {
                    form.restart();
                  }
                }}
                sx={{ marginTop: 6 }}
                noValidate
              >
                <Grid
                  container
                  rowSpacing={0}
                  columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                >
                  {children}
                </Grid>

                <FormSpy subscription={{ submitError: true }}>
                  {({ submitError }) =>
                    submitError ? (
                      <FormFeedback sx={{ marginTop: 2 }} error>
                        {submitError}
                      </FormFeedback>
                    ) : null
                  }
                </FormSpy>

                {formSpy ? formSpy : null}

                <FormButton
                  sx={{
                    marginTop: 4,
                    marginBottom: 2,
                  }}
                  type="submit"
                  disabled={submitting || sent}
                  size="large"
                  color="secondary"
                  fullWidth
                >
                  {submitting || sent
                    ? "In progress…"
                    : submitText
                    ? submitText
                    : "Submit"}
                </FormButton>
              </form>
            );
          }}
        </Form>
      </AppForm>

      <Snackbar
        open={snackOpen}
        onClose={handleNotification}
        message={snackMessage}
      />
    </>
  );
}

export default FormInput;
