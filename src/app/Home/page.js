"use client"
import React, { useEffect, useState } from "react";
import Container from "@/components/Container";
import Card from "@/components/Card";
import localNews from "@/data/news";

const Home = () => {

    const [news, setNews] = useState([]) || [{}];

    const defaultImage = "https://www.multicoopersp.com.br/wp-content/uploads/2017/04/tecnologia-da-informa%C3%A7%C3%A3o.jpg"

    useEffect(() => {

        const getNews = async () => {
                
            try {
                const response = await fetch("https://newsapi.org/v2/top-headlines?country=br&category=technology&apiKey=41a25ae6fe1f44af82331f3b21df3de6");
            
                if (!response.ok) {
                    throw new Error("Erro ao executar a requisição, status " + response.status);
                }

                const data = await response.json();

                setNews(data.articles);

            } catch (error) {
                console.log(error.message);
            }

        }

        getNews();

    }, []);

    return (

        <Container padding="10px" gap="5px" mobile_direction="column">

            {/* Container das principais noticias */}
            <Container width="40%" mobile_width="100%" border="1px solid #205701" radius="10px" padding="10px">

                <img src="https://guiaderodas.com/wp-content/uploads/2020/06/tecnologia-assistiva-o-que-e.jpg" />

            </Container>

            <Container width="60%" direction="column" gap="5px" mobile_width="100%">

                {/* Container das noticias do curso de ADS */}
                <Container width="100%" height="50%" border="1px solid #205701" radius="10px" overflow_x="auto" padding="10px" gap="5px" justify="flex-start" mobile_padding="0px">

                    {localNews.map((item, key) => {
                        return <Card title={item.title} url={item.url} image={item.urlToImage ? item.urlToImage : defaultImage} key={key} />
                    })}

                </Container>

                {/* Container das noticias externas */}
                <Container width="100%" height="50%" border="1px solid #205701" radius="10px" overflow_x="auto" padding="10px" gap="5px" justify="flex-start" mobile_padding="0px">
                    
                    {news.map((item, key) => {
                        return <Card title={item.title} url={item.url} image={item.urlToImage ? item.urlToImage : defaultImage} key={key} />
                    })}

                </Container>

            </Container>

        </Container>
  
    );
  
  };
  
  export default Home;