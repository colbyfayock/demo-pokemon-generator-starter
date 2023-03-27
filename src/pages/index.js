import Head from 'next/head'

import Layout from '@/components/Layout';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Form from '@/components/Form';
import FormRow from '@/components/FormRow';
import FormInput from '@/components/FormInput';
import Button from '@/components/Button';
import Card from '@/components/Card';

import styles from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Pokémon Generator</title>
        <meta name="description" content="Create a new Pokémon with AI!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Section>
        <Container className={styles.cardContainer}>
          <div className={styles.card}>
            <Card image={{url: 'https://oaidalleapiprodscus.blob.core.windows.net/private/org-LDWnTv1cnI644pTk8Scf93rN/user-YCZGJl2Y3CW02JYTUrspGBbB/img-b2PGOCNXggHGP0o7ObHeCsFR.png?st=2023-03-26T22%3A14%3A07Z&se=2023-03-27T00%3A14%3A07Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-03-26T11%3A04%3A20Z&ske=2023-03-27T11%3A04%3A20Z&sks=b&skv=2021-08-06&sig=tp/88FMGW8NKtabPdHJjOYJp4tWwnFWYSkk%2B%2BCw8ONA%3D'}} />
            <h2>Backstory</h2>
            <p>
            Legend has it that Floramander was created when a rare Charmander encountered a magical garden. The garden infused the Charmander with the power of nature, creating Floramander.
            </p>
          </div>
          <Form className={styles.form}>
            <h2>Create a new Pokémon!</h2>
            {/* <FormRow>
              <label>Type</label>
              <FormInput name="type" />
            </FormRow> */}
            <FormRow>
              <Button>Generate</Button>
            </FormRow>
          </Form>
        </Container>
      </Section>
    </Layout>
  )
}
