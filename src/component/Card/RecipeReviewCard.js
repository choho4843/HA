import  {useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({card}) {
  const [expanded, setExpanded] = useState(false);
  const [board, setBoard] = useState([]);
  // const [writer , setWiter] = useState('');
  // const [title , setTitle] = useState('');
  // const [subtitle , setSubtitle] = useState('');
  // const [date , setDate] = useState('');
  

  const [imageUrl , setImageUrl] = useState('');
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  
  // useEffect(() => {
  //   axios.get('//localhost:8080/community')
  //   .then((response) => {
  //     // console.log(response.data);
  //   const excercise = response.data; 
  //   setBoard(response.data);
    
  //   setImageUrl('/img/' + excercise.tumbnail)
    
   
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   })
  // }, [])
  console.log(card.id);
  return (
    <div>
    

      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={card.title}
        writer={card.writer}
        date={card.date}
        
      />
               <Link to={"/DetailBoard/"+ card.id}>           

      {/*사진들어가는곳*/}
      <CardMedia
        component="img"
        height="194"
        image= {"http://localhost:8080/thumbnail/"+card.thumbnail}
        alt="Paella dish"
      />
       </Link>
      <CardContent>
      <Link to={`/detailboard/`}>
        <Typography variant="body2" color="text.secondary">
         
        </Typography>
        </Link>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>{card.subtitle}</Typography>
        </CardContent>
      </Collapse>
    </Card>

    </div>
  );
}