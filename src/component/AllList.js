import {useState, useEffect} from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import RecipeReviewCard from './Card/RecipeReviewCard';
import axios from "axios";
import { Component } from 'react';
import ToastuiEditor, { EditorOptions, ViewerOptions, EventMap } from '@toast-ui/editor';
import ToastuiEditorViewer from '@toast-ui/editor/dist/toastui-editor-viewer';
import { Link } from 'react-router-dom';



export default function AllList() {

   const [cards, setCards] = useState([]);
   useEffect(()=> {
    axios.get("http://localhost:8080/community")
    .then(res=> {
      setCards(res.data)
    })
    .catch(err=> {
      console.log(err);
    })

   }, [])
    
    return (
       <div>                   
                <Box
                    sx={{
                        bgcolor: 'background.paper',
                        pt: 8,
                        pb: 6,
                    }}
                >
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card) => (
                            <Grid item key={card.id} xs={12} sm={6} md={4}>
                                <RecipeReviewCard  card={card}/>
                            </Grid>
                        ))}
                    </Grid>
                </Container>  
                
              
 </div>

    );
}