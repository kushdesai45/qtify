import { Accordion, AccordionDetails, AccordionSummary, Box } from "@mui/material";
import styles from './FAQs.module.css';
import { ReactComponent as ArrowDown } from '../../assets/ArrowDown.svg';
import { useEffect, useState } from "react";
import axios from "axios";

const FAQs = () => {
    const [faqs, setFaqs] = useState([]);

    const fetchFaqs = async () => {
        try {
            const res = await axios.get('https://qtify-backend-labs.crio.do/faq');

            return res.data.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    }

    useEffect(() => {
        (async () => {
            const data = await fetchFaqs();

            if (data)
                setFaqs(data);
        })();
    }, []);

    return (
        <Box className={styles.container}>
            <Box className={styles.title}>FAQs</Box>
            {faqs && faqs.map((faq, idx) => {
                return (
                    <Accordion key={idx} className={styles.accordion}>
                        <AccordionSummary className={styles.accordionSummary} expandIcon={<ArrowDown />}>{faq.question}</AccordionSummary>
                        <AccordionDetails className={styles.accordionDetails}>{faq.answer}</AccordionDetails>
                    </Accordion>
                )
            })}
        </Box>
    );
}

export default FAQs;