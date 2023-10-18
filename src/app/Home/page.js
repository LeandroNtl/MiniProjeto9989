import Container from "@/components/Container";

const Home = () => {

    return (

        <Container padding="10px" gap="5px" mobile_direction="column">

            {/* Container das principais noticias */}
            <Container width="40%" mobile_width="100%" border="1px solid #205701" radius="10px">

            </Container>

            <Container width="60%" direction="column" gap="5px" mobile_width="100%">

                {/* Container das noticias do curso de ADS */}
                <Container width="100%" height="50%" border="1px solid #205701" radius="10px">
                </Container>

                {/* Container das noticias externas */}
                <Container width="100%" height="50%" border="1px solid #205701" radius="10px">
                </Container>

            </Container>

        </Container>
  
    );
  
  };
  
  export default Home;