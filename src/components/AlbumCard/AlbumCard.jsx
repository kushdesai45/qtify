import { Box, Card, CardContent, CardMedia, Chip, Typography } from "@mui/material";
import styles from './AlbumCard.module.css';

const AlbumCard = ({ title, imgSrc, count, isAlbum }) => {
    return (
        <Box className={styles.container}>
            <Card className={styles.card}>
                <CardMedia
                    className={styles.cardImg}
                    component="img"
                    alt={title}
                    image={imgSrc}
                />
                <CardContent className={styles.cardContent} >
                    <Chip label={`${count} ${isAlbum ? 'follows' : 'likes'}`} className={styles.cardChip} />
                </CardContent>
            </Card>
            <Typography>{title}</Typography>
        </Box>)
}

export default AlbumCard;