import styled from "styled-components";

const ContainerTitle = styled.div`
     display: block;
`;

const Title = styled.h1`
    font-size: 30px;
    margin-left: 37%;
`;

const TitleSub = styled.h2`
    margin-left: 32%;
`;

const BreakLine = styled.div`
      margin-left: 31%;
      width: 35%;
      height: 2px; /* Set the height of the separate line */
      background-color: rgba(255, 255, 255, 0.5); /* Color of the separate line */
`;


const BlogPost = styled.div`
     align-items: center;
     margin-top: 3%;
     text-align: center;
`;

const BlogPostTitle = styled.h2`
`;

const BlogPostSub = styled.h4`
`;

const Blog = () => {
  return (
    <div>
      <ContainerTitle>
         <Title>Welcome to the Blog page</Title>
         <TitleSub>On this page you can run your own blog posts</TitleSub>
         <BreakLine />
      </ContainerTitle>
          {/*First Blog post*/}
           <BlogPost>
               <BlogPostTitle>Lorem.</BlogPostTitle>
               <BlogPostSub>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum vero, quod incidunt eaque doloribus qui?
               </BlogPostSub>
           </BlogPost>
          {/*Second Blog post*/}
           <BlogPost>
               <BlogPostTitle>Lorem ipsum dolor sit.</BlogPostTitle>
               <BlogPostSub>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, dolor.
               </BlogPostSub>
           </BlogPost>
          {/*Third Blog post*/}
           <BlogPost>
               <BlogPostTitle>Lorem, ipsum dolor.</BlogPostTitle>
               <BlogPostSub>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </BlogPostSub>
           </BlogPost>
           <BlogPost>
               <BlogPostTitle>Lorem ipsum dolor sit amet consectetur.</BlogPostTitle>
               <BlogPostSub>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
               </BlogPostSub>
           </BlogPost>
           <BlogPost>
               <BlogPostTitle>Lorem, ipsum dolor.</BlogPostTitle>
               <BlogPostSub>Lorem ipsum dolor sit amet consectetur adipisicing elit.
               </BlogPostSub>
           </BlogPost>
    </div>
  )
}

export default Blog