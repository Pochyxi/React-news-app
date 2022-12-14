import { CardHeader, CardMedia, Typography, CardContent, Card } from "@mui/material"
import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { Article } from "./MyMain"
import { myTime } from "./RecipeReviewCard"
import SimpleBackdrop from "./SimpleBackdrop"
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon'



function HomeIcon(props: SvgIconProps) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}

const SingleArticle = () => {
    const [article, setArticle] = useState<Article | null>(null)
    const [toggle, setToggle] = useState(false)

    const params = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        setToggle(true)
        fetchSingleArticle()
    }, [])

    const fetchSingleArticle = async () => {
        try {
            const response = await fetch(`https://api.spaceflightnewsapi.net/v3/articles/${params.articleId}`)
            if (response.ok) {
                const json = await response.json()
                console.log(json)
                setArticle(json)
                setTimeout(() => {
                    setToggle(false)
                }, 500)
            }


        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <Container>
                <SimpleBackdrop toggle={toggle} />
                <Button onClick={() => {
                    navigate('/')
                }} variant="dark"><HomeIcon /></Button>
            </Container>
            {
                article && (
                    <Card sx={{ maxWidth: '80%', marginTop: 16, overflow: 'auto' }}>
                        <CardHeader
                            title={article.title}
                            subheader={(myTime(article.publishedAt))}
                        />
                        <CardMedia
                            component="img"
                            height="auto"
                            image={article.imageUrl}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {article.summary}
                            </Typography>
                        </CardContent>
                        <Container>
                            <a className="b-a" href={article.url} target='_blank' rel='noreferrer'>details</a>
                        </Container>
                    </Card>
                )
            }
        </>


    )
}

export default SingleArticle
