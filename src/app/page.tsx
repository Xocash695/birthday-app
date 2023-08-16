"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <>
      <Container maxWidth="sm">
        <Stack>

        
        <h1 id={styles.fork}>Welcome to the Birthday App</h1>
        <img src="/photos/adi-goldstein-Hli3R6LKibo-unsplash.jpg" alt=" Welcome" width="50%" height="40%"></img>

        <Button variant="text" size="medium" >Contact me</Button>
        <Alert severity="warning">This app is still in development</Alert>
      </Stack>
    </Container >
    </>
  )
}
