'use client'

import CardImage from '@/data/components/cardImage.js';
import CardBody from '@/data/components/cardBody.js';
import {default as StandardCardModel} from '@/data/components/card.js';
import { Grid, GridCol } from '@mantine/core';
import StandardCard from '@/ui/components/card/card.js';

export default function ChatTypesContainer() {
  // Cards content 
  const home_src = '/home'; 
  const chat_url = '/chat'; 
  const chat_img = new CardImage(`${home_src}/chat.jpg`, 'One-to-one chat image'); 
  const group_chat_img = new CardImage(`${home_src}/group-chat.jpg`, 'Group chat image'); 
  const chatCardText = "A private messaging feature that enables direct, " +
    "real-time communication between two users in a secure and personalized environment."; 
  const groupChatCardText = "A collaborative messaging space where multiple users can communicate, " + 
    "share updates, and interact in real time within a shared conversation thread."; 
  const chatCardBody = new CardBody("One-To-One Chat", chatCardText, "Start a one-to-one chat now"); 
  chatCardBody.buttonHref = `${chat_url}/one-to-one`; 
  const groupChatCardBody = new CardBody("Group Chat", groupChatCardText, "Start a group chat now"); 
  groupChatCardBody.buttonHref = `${chat_url}/group`; 
  
  // Cards 
  const chatCard = new StandardCardModel(chat_img, chatCardBody); 
  const groupChatCard = new StandardCardModel(group_chat_img, groupChatCardBody); 
  const cards = [chatCard, groupChatCard]; 

  return (
    <Grid gutter="xl">
        {cards.map((card, index) => (
          <GridCol key={index} span="content">
            <StandardCard image={card.image} body={card.body}/>
          </GridCol>
        ))}
    </Grid>
    )
}