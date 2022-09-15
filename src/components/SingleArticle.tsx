import { CardHeader, CardMedia, Typography, CardContent, Card } from "@mui/material"
import { useEffect, useState } from "react"
import { Button, Container } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import { Article } from "./MyMain"
import { myTime } from "./RecipeReviewCard"
import SimpleBackdrop from "./SimpleBackdrop"

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
                }} variant="success">GO HOME</Button>
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
                            height="194"
                            image={article.imageUrl}
                            alt="Paella dish"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                {article.summary}
                            </Typography>
                        </CardContent>
                    </Card>
                )
            }
        </>


    )
}

export default SingleArticle
