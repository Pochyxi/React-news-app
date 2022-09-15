import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import RecipeReviewCard from "./RecipeReviewCard";
import SimpleBackdrop from "./SimpleBackdrop"

export interface Article {

    id: number;
    title: string;
    url: string;
    imageUrl: string;
    newsSite: string;
    summary: string;
    publishedAt: string;
    updatedAt: string;
    featured: boolean;
    launches: any[];
    events: any[];

}

const MyMain = () => {
    const [articles, setArticles] = useState<Article[]>([])
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        fetchArticle()
        setToggle(true)
    }, [])

    const fetchArticle = async () => {
        try {
            const response = await fetch("https://api.spaceflightnewsapi.net/v3/articles")
            if (response.ok) {
                const json = await response.json()
                console.log(json)
                setArticles(json)
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
            <SimpleBackdrop toggle={toggle} />
            <Container fluid>
                <Row className="justify-content-center">
                    {
                        articles.map((article, index) => (
                            <Col
                                className="d-flex justify-content-center"
                                key={article.id}
                                xs={12}
                                md={6}
                                lg={4}
                            >
                                <RecipeReviewCard article={article} />
                            </Col>
                        ))
                    }
                </Row>

            </Container>
        </>
    )
}

export default MyMain