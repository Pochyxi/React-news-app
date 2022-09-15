import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Article } from './MyMain';
import { useNavigate } from 'react-router-dom';

interface myFunctionalComponentProps {
    article: Article
}
export const myTime = (string: string): string => {
    let date = new Date(string);
    return date.toLocaleDateString('en-US', {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
    })
}

export default function RecipeReviewCard(props: myFunctionalComponentProps) {

    const navigate = useNavigate()

    return (
        <Card sx={{ maxWidth: 345, marginTop: 16, overflow: 'auto' }}>
            <CardHeader
                className='textoo'
                onClick={() => {
                    navigate('/detail/' + props.article.id)
                }}
                title={props.article.title}
                subheader={myTime(props.article.publishedAt)}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.article.imageUrl}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.article.summary}
                </Typography>
            </CardContent>
        </Card>
    );
}
