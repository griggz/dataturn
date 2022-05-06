import React from "react";
import { required } from "../../components/Form/validations";
import { Field, Form, FormSpy } from "react-final-form";
import FormButton from "../../components/Form/FormButton";
import FormFeedback from "../../components/Form/FormFeedback";

import RFTextField from "../../components/Form/fields/RFTextField";
import { signIn, getCsrfToken, getProviders } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
// import Header from "./header";
import styles from "../../styles/Signin.module.css";
import Button from "../../components/Elements/Button";

const Signin = ({ csrfToken, providers }) => {
  const validate = (values) => {
    const errors = required(["email"], values);

    return errors;
  };
  return (
    <div style={{ overflow: "hidden", position: "relative", height: "100vh" }}>
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <p
            style={{ margin: 40, textDecoration: "none" }}
            className={styles.colorScale}
          >
            <Link href="/">
              <a style={{ textDecoration: "none" }}>DATATURN</a>
            </Link>
          </p>
          <div className={styles.cardContent}>
            <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
            <Form
              onSubmit={() => console.log("SUBMIT")}
              subscription={{ submitting: true, pristine: true }}
              validate={validate}
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
                  >
                    <Field
                      fullWidth
                      size="large"
                      component={RFTextField}
                      disabled={submitting}
                      required
                      placeholder="Email"
                      name="email"
                      autoComplete="email"
                      label={false}
                      margin="none"
                    />

                    <FormSpy subscription={{ submitError: true }}>
                      {({ submitError }) =>
                        submitError ? (
                          <FormFeedback sx={{ marginTop: 2 }} error>
                            {submitError}
                          </FormFeedback>
                        ) : null
                      }
                    </FormSpy>
                    <FormButton
                      sx={{
                        marginTop: 2,
                      }}
                      type="submit"
                      disabled={submitting}
                      size="large"
                      color="primary"
                      fullWidth
                    >
                      {submitting ? "In progress…" : "Submit"}
                    </FormButton>
                  </form>
                );
              }}
            </Form>
            <hr />
            {providers &&
              Object.values(providers).map((provider) => {
                return (
                  <div key={provider.name} style={{ marginBottom: 0 }}>
                    <Button color="primary" onClick={() => signIn(provider.id)}>
                      Sign in with {provider.name}
                    </Button>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
      <Image
        src="/images/sun-tornado.svg"
        alt="Pattern Background"
        layout="fill"
        className={styles.styledPattern}
      />
    </div>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}
