import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import localNews from "@/data/news";

const Home = () => {

    const [news, setNews] = useState([]);

    const defaultImage = "https://static.todamateria.com.br/upload/pa/is/paisagem-natural-og.jpg"

    useEffect(() => {

        const getNews = async () => {
                
            const response = await fetch("https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=41a25ae6fe1f44af82331f3b21df3de6");
            const data = await response.json();

            setNews(data.articles);

        }

        getNews();

    }, []);

    return (

        <Container padding="10px" gap="5px" mobile_direction="column">

            {/* Container das principais noticias */}
            <Container width="40%" mobile_width="100%" border="1px solid #205701" radius="10px">

            </Container>

            <Container width="60%" direction="column" gap="5px" mobile_width="100%">

                {/* Container das noticias do curso de ADS */}
                <Container width="100%" height="50%" border="1px solid #205701" radius="10px" overflow_x="auto" padding="10px" gap="5px" justify="flex-start">

                    {localNews.map((item) => {
                        return <Card title={item.title} url={item.url} image={item.urlToImage} />
                    })}

                </Container>

                {/* Container das noticias externas */}
                <Container width="100%" height="50%" border="1px solid #205701" radius="10px" overflow_x="auto" padding="10px" gap="5px" justify="flex-start">
                    
                    {news.map((item) => {
                        return <Card title={item.title} url={item.url} image={item.urlToImage ? item.urlToImage : defaultImage} />
                    })}

                </Container>

            </Container>

        </Container>
  
    );
  
  };
  
  export default Home;