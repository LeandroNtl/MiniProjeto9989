
const images = ["https://decisaosistemas.com.br/wp-content/uploads/2021/06/tecnologia-na-gestao-das-empresas.jpg", "https://orizonvr.com.br/novo_site/wp-content/uploads/2023/03/Alinhando-tecnologia-e-sustentabilidade-1024x429.jpg", "https://multivix.edu.br/wp-content/uploads/2019/06/tecnologia-da-informa%C3%A7%C3%A3o-multivix.jpg", "https://classic.exame.com/wp-content/uploads/2020/10/tokenizacao-ofuturodosecuritytoken.jpg?quality=70&strip=info&w=1024"]

const sortImages = () => {
    
        const index = Math.floor(Math.random() * images.length);
    
        return images[index];
    
    }

const localNews = [

    {
        'title': 'Título da notícia 1',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

    {
        'title': 'Título da notícia 2',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

    {
        'title': 'Título da notícia 3',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

    {
        'title': 'Título da notícia 4',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },
    {
        'title': 'Título da notícia 5',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

    {
        'title': 'Título da notícia 6',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

    {
        'title': 'Título da notícia 7',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

    {
        'title': 'Título da notícia 8',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

    {
        'title': 'Título da notícia 9',
        'url': 'https://www.google.com.br',
        'urlToImage': sortImages()
    },

];

export default localNews;