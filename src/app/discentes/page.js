"use client"
import Page from "../page";
import ProfileCard from "@/components/Profile/index";
import Container from "@/components/Container";
import discentes from "@/data/discentes";

const Discentes = () => {
  
    const defaultImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAe1BMVEX///8AAADy8vLe3t4vLy/8/PwEBATk5OTPz8/q6urz8/P29vZra2vS0tJJSUm1tbXGxsaXl5fQ0NB6enpZWVkNDQ2vr69MTEwzMzOIiIg6OjopKSmSkpK9vb3X19cgICBBQUFhYWGTk5Ojo6N/f39wcHAVFRVbW1sTExNWdNDzAAAEGUlEQVR4nO3bi3KiMBQGYAKEi1yEekG8gFZt+/5PuDkJVrcVKs5UafJ/7cxOiTtDTnNCSE4tCwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJ6Oyy84a6LBEZULfGRHFBAERRllr7t04S7TOA8QE8oVv3TZ2TK3jU+hqDxFw5PfjM32IiYmR6VaiUh4F+OEfkh9c6cVbo2bSGzXm6QKxuWi+TlTzcYR6TFXKXNwPi9WsRoqhgaFWxs5JqYyIvy0Zsu2FJRZZWJIxAOnpkFS8vNjRv47oqHCtrZxQaHuxhSS9ZXGmEbK2rSQUFAySpzjt46LC1FBTY5pQRHpMhXDZGV/77i44FD2HJ5xX88l+z2/NhbEpTWllf34m3qyV9FtN2pp9GkZN37o/QzBll2fYBWaf48PvJtBiGgaDVoaaTUnJpuH3tAAiOmE1WFnMxs98H6GgJ7Ey7bpxLLCN9HeHjI90bq+aF+A2CtDY5J2xKQW7f4D72cIXkSfF+0rEJ8ZOE5kp9sGArcCajZtbW+xzlVZThtND7ubodjRG2BbI087V3R6om1HsX4PW87+gq4Vnb5segecfL8uD76mNAMbNp1Qz0t22nf9v6XZpxXvzGahlAlnbcv7hHUvcjW2p+xZhhczitqYrWrae9yYts1GON9R9riB9VllIY//Nh80TErjtqgVeynPcsrLLfpwIg943o3MHOK78szrrayaCy8HTx6DFSMzD9Kpy3Z6OiYuJpPj9nRoHBtbsiS7nbMvPFbPDS7j4lSOk57rCZqYvAcjU0Miuh3mq6/DRBXm7M07x1BPXTuvWVOHQ6U4s/NIEQv7eWSZlkEiJNnyFJBpOU8c3/edYH5IT1EpElVrYBB+aPq+G4eXHef+vmjGS27Usk287BQqJBPnSvPLTs25sTkLN5ESjnylYdOq5SNNXqUGPYBESKjL+/bk4Gv5iaVtykTrU7Ejc6vW5Ttdz2ZypBiSPlFKIUl/WoI4LgUl1r9UljJhQnPJDQPAX6mnj/4xoZpYjy3sH3/9nM6APAO2qsVTeCU6OruhWI3LkjePFbpPKdw60O/+1hIk+dbc8XjSg8yH+NZPy7OvWvcXwknXOfFX8tzYo2lW54ESUh9vLQemx/BRhPBN44iILuYiJB99aigqGlebX7ulIXCvH4h2mPaZf/4eTqlDC44+uSDPSfV98KiD4EXUq4f+h+YlBnFX0UmLQm0vacu9o16A/ohy9yt3MwiyeDrp+Z/obwY1Lqmmwr63vtWMid7lftS9OnH6yWgnW9/lfXb1hOsW+pYPZ6fDmx7Ux69t7+shuXucaFtSza21e4/FQt96P6ojsO+h8THP/R3TNiQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwB/wDLiUhw/szk7EAAAAASUVORK5CYII=";


    return (
  
      <Page>

        <Container width="100%" height="100%" overflow_x="auto" padding="50px" gap="7px" justify="flex-start" mobile_padding="0px">

            {discentes.map((docente) => (
                <ProfileCard key={docente.name} name={docente.name} url={docente.url} image={docente.image ? docente.image : defaultImage} description={docente.description} />
            ))}

        </Container>

      </Page>
  
    );
  
};

export default Discentes;