'use client'

import CardImage from '@/data/components/cardImage.js';
import CardBody from '@/data/components/cardBody.js';
import {default as StandardCardModel} from '@/data/components/card.js';
import { Container } from '@mantine/core';
import StandardCard from '@/ui/components/card/card.js';

export default function ChatTypesContainer() {
  // Cards content 
  const home_src = '/home'; 
  const chat_img = new CardImage(`${home_src}/chat.jpg`, 'One-to-one chat image'); 
  const group_chat_img = new CardImage(`${home_src}/group-chat.jpg`, 'Group chat image'); 
  const chatCardText = "A private messaging feature that enables direct, " +
    "real-time communication between two users in a secure and personalized environment."; 
  const groupChatCardText = "A collaborative messaging space where multiple users can communicate, " + 
    "share updates, and interact in real time within a shared conversation thread."; 
  const chatCardBody = new CardBody("One-To-One Chat", chatCardText, "Start a one-to-one chat now"); 
  const groupChatCardBody = new CardBody("Group Chat", groupChatCardText, "Start a group chat now"); 
  
  // Cards 
  const chatCard = new StandardCardModel(chat_img, chatCardBody); 
  const groupChatCard = new StandardCardModel(group_chat_img, groupChatCardBody); 
  const cards = [chatCard, groupChatCard]; 
  
  return (
    <Container mx="initial" >
        {cards.map((card, index) => (
            <StandardCard key={index} image={card.image} body={card.body}/>
        ))}
    </Container>
    )
}