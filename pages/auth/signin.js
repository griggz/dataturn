import React from "react";
import { required } from "../../components/Form/validations";
import { Field, Form, FormSpy } from "react-final-form";
import FormButton from "../../components/Form/FormButton";
import FormFeedback from "../../components/Form/FormFeedback";

import RFTextField from "../../components/Form/fields/RFTextField";
import { signIn, getCsrfToken, getProviders } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/Signin.module.css";
import Button from "../../components/Elements/Button";
import TextField from "../../components/Elements/TextField";

function Signin({ csrfToken, providers }) {
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
            {providers &&
              Object.values(providers).map((provider) => (
                <>
                  {provider.id === "email" && (
                    <>
                      <TextField
                        fullWidth
                        size="large"
                        placeholder="Email"
                        name="email"
                        autoComplete="email"
                        label={false}
                        margin="none"
                      />
                      <hr />
                    </>
                  )}
                  {provider.id === "github" && (
                    <div key={provider.name} style={{ marginBottom: 0 }}>
                      <Button
                        color="primary"
                        onClick={() => signIn(provider.id)}
                      >
                        Sign in with {provider.name}
                      </Button>
                    </div>
                  )}
                </>
              ))}
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
}

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
