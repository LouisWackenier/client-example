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
     margin-top: 3%;
`;

const BlogPostTitle = styled.h2`
     margin-left: 45%;
`;

const BlogPostSub = styled.h4`
     margin-left: 40%;
`;

const Blog = () => {
  return (
    <div>
      <ContainerTitle>
         <Title>Welcome to the Blog page</Title>
         <TitleSub>On this page you can run your own blog posts</TitleSub>
         <BreakLine />
      </ContainerTitle>
           <BlogPost>
               <BlogPostTitle>Blog Post</BlogPostTitle>
               <BlogPostSub>Blog post context and some random text.
               </BlogPostSub>
           </BlogPost>
    </div>
  )
}

export default Blog