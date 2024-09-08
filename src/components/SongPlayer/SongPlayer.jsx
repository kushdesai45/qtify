import { Box, Typography } from "@mui/material";
import styles from './SongPlayer.module.css';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from '../../assets/audio/sample.mp3';
import { useEffect, useRef, useState } from "react";

const SongPlayer = ({ currentSong }) => {
    const [currentSongSrc, setCurrentSongSrc] = useState('');
    const audioPlayer = useRef(null);

    useEffect(() => {
        if (audioPlayer.current?.audio.current) {
            setCurrentSongSrc(song);

            audioPlayer.current.audio.current.pause();
            audioPlayer.current.audio.current.load();
            audioPlayer.current.audio.current.autoplay = true;
        }
    }, [currentSong]);

    return (
        <Box className={styles.container}>
            {currentSong && <>
                <Box className={styles.songDetails}>
                    <img src={currentSong.image} width={52} height={52} alt={currentSong.title} />
                    <Box>
                        <Typography className={styles.songName}>{currentSong.title}</Typography>
                        <Typography className={styles.songArtist}>{currentSong.artists[0]}</Typography>
                    </Box>
                </Box>
                <Box className={styles.audioPlayerContainer}>
                    <AudioPlayer
                        ref={audioPlayer}
                        style={{
                            backgroundColor: "inherit",
                            width: "80%",
                            paddingRight: "20rem",
                            marginLeft: "auto",
                            marginRight: "auto",
                            color: "primary"
                        }}
                        src={currentSongSrc}
                        layout="stacked-reverse"
                    />
                </Box>
            </>}
        </Box>
    );
}

export default SongPlayer;