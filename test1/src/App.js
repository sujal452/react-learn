// src/App.js
import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import './App.css'; 
const App = () => {
<h1>Frequently Asked Questions</h1>
  const faqs = [
    { question: 'Why is CARS24 the best place to sell my car online?', answer: 'Not only do we offer a great price on each car we buy with Instant Payment, we ensure the entire car selling exeprience is a hassle-free. The entire process can be completed online, even the physical inspection of car is done at your home as per the date and time decided by you. We also offer full after sales support to ensure you have zero liability until the RC transfer is complete.' },
    { question: 'Can I sell a car that has an ongoing loan on it?', answer: 'Yes you can. Based on the valuation of your car, CARS24 will handle the loan closures on your behalf, and will transfer the remaining balance to your account.' },
    { question: 'Is the car owner required to be present at the time of car pick up & inspection?', answer: 'No. Anyone can be present during the inspection with the required documents and the car keys. The owner only needs to be present to sign documents at the time of sale.' },
    { question: 'Do I need to be present at the RTO for RC transfer?', answer: 'We take care of all documentation, including the free RC transfer. In case there is any mismatch in RC like signature mismatch, you may need to be present at the RTO. Some States also require the previous owner to be present at the RTO in order to register the car with the new owner, also known as . A CARS24 representative will be present with you throughout the process.' },
    { question: 'How long does the RC transfer take?', answer: 'The timeline of the RC transfer might vary depending on the availability of the prospective buyer and the RTO requirements. However, you don’t need to worry about it at all! All our customers are covered under the CARS24 Seller Protection Policy, which means until the RC transfer of your car is complete, we take full responsibility for the safety of your vehicle. Once the ownership has been transferred, we will send you an email with the proof of RC transfer.' },
    { question: 'Does CARS24 buy commercial cars?', answer: 'Unfortunately, we currently do not deal in commercial vehicles.' },
    { question: 'Will CARS24 handle/take care of the paperwork?', answer: 'Yes! From the initial documentation to the free RC transfer, we will take care of everything.' },
    { question: 'How long does it take during car inspection?', answer: 'The inspection usually takes 30-45 mins. During this time our car expert will check your car across 140 parameters, including bodywork, wheels and tyres, interiors, electricals etc. They will also take a short test drive of the vehicle to assess its running condition.' }
  ];

  return (
    <Container>
      {/* FAQ Section */}
      <Box component="section" sx={{ marginTop: '20px' }}>
        {faqs.map((faq, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold', color: '#465166' }}>
                {faq.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {faq.answer || 'Answer goes here...'}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Container>
  );
};

export default App;
