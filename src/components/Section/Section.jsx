import { Box, Button, Grid, Tab, Tabs, Typography } from "@mui/material";
import AlbumCard from "../AlbumCard/AlbumCard";
import { useEffect, useState } from "react";
import CustomCarousel from "../CustomCarousel/CustomCarousel";
import styles from './Section.module.css';

const Section = ({ title, data, genres, isAlbum, handleSongClick }) => {
    const [value, setValue] = useState(0);

    const [collapsed, setCollapsed] = useState(true);
    const [filteredData, setFilteredData] = useState([]);

    const handleChange = (event, newValue) => {
        const selectedTabId = event.target.id;
        setValue(newValue);

        if (selectedTabId === 'all') {
            setFilteredData(data);
        } else {
            const newData = data.filter((item) => item.genre.key === selectedTabId);
            setFilteredData(newData);
        }
    }

    useEffect(() => {
        if (data && !isAlbum) {
            setFilteredData(data);
        }
    }, [data]);

    return <Box className={styles.container}>
        <Box className={styles.title}>
            <Typography>{title}</Typography>
            {isAlbum && <Button className={styles.collapseBtn} onClick={() => { setCollapsed(!collapsed) }}>{collapsed ? 'Show All' : 'Collapse'}</Button>}
        </Box>
        {isAlbum ?
            (data && collapsed ?
                (
                    <Box className={styles.carousel}>
                        <CustomCarousel data={data} isAlbum={isAlbum} />
                    </Box>
                ) :
                (
                    <Grid container spacing={4}>
                        {data.map((item) => {
                            return (
                                <Grid item key={item.id} xs={2} className={styles.gridItem}>
                                    <AlbumCard title={item.title} imgSrc={item.image}
                                        count={isAlbum ? item.follows : item.likes}
                                        isAlbum={isAlbum} />
                                </Grid>
                            )
                        })}
                    </Grid>
                )
            ) :
            (filteredData &&
                <Box className={styles.tabsContainer}>
                    <Tabs value={value} onChange={handleChange} className={styles.tabs}>
                        <Tab label="All" id="all" key='all' className={styles.tab} />
                        {genres && genres.map((genre) => {
                            return <Tab label={genre.label}
                                key={genre.key}
                                id={genre.key}
                                className={styles.tab} />

                        })}
                    </Tabs>

                    <Box className={styles.carousel}>
                        <CustomCarousel data={filteredData} isAlbum={isAlbum} handleSongClick={handleSongClick}/>
                    </Box>
                </Box>
            )
        }
    </Box>
}

export default Section;