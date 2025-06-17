import { Container, Title } from '@mantine/core';
import StandardCard from '@/components/card/card.js';

export default function Home() {
  // Cards content 
  const home_src = '/home'; 
  const chat_img = {
    src: `${home_src}/chat.jpg`,
    alt: 'One-to-one chat image'
  }; 
  const group_chat_img = {
    src: `${home_src}/group-chat.jpg`,
    alt: 'Group chat image'
  }; 
  const chatCardBody = {
    title: "One-To-One Chat",
    text: "A private messaging feature that enables direct, " +
    "real-time communication between two users in a secure and personalized environment.",
    buttonText: "Start a one-to-one chat now"
  }; 
  const groupChatCardBody = {
    title: "Group Chat",
    text: "A collaborative messaging space where multiple users can communicate, " + 
    "share updates, and interact in real time within a shared conversation thread.",
    buttonText: "Start a group chat now"
  }; 

  // Cards
  const chatCard = {
    image: chat_img, 
    body: chatCardBody
  };
  const groupChatCard = {
    image: group_chat_img,
    body: groupChatCardBody
  }; 
  const cards = [chatCard, groupChatCard]; 

  return (
  <Container mx="initial" mt="sm">
    <Title order={2}>Welcome to the best chat app!</Title>
    {cards.map((card, index) => (
      <StandardCard key={index} image={card.image} body={card.body}/>
    ))}
  </Container>
  )
}
