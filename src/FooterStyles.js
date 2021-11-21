import styled from 'styled-components';

export const Box= styled.div`
    padding-top: 140px;
    padding-bottom: 5px;
    background: #120632;
    bottom: 0;
    width: 100%;
    @media (max-width: 1000px){
        padding: 70px 30px;
    }
`;

export const Container= styled.div`
     display: flex;
     flex-direction: column;
     justify-content: center;
     max-width: 1000px;
     margin: 0 auto;
     padding-bottom: 60px;
`;

export const Column= styled.div`
     display: flex;
     flex-direction: column;
     text-align: left;
`;

export const Row= styled.div`
     display: grid;
     grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
     grid-gap: 30px;
     padding-left: 80px;
     @media (max-width: 1000px){
         grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
     }
`;

export const FooterLink= styled.a`
     color: #fff;
     margin-bottom: 20px;
     font-size: 18px;
     text-decoration: none;
     &:hover{
          color: #6BD0FF;
          transition: 200ms ease-in;
      }
`;

export const Heading= styled.p`
     font-size: 24px;
     color: #fff;
     margin-bottom: 40px;
     font-weight: bold
`;

export const Div= styled.div`
     border-top: white;
     padding: 25px 50px;
     border-top: 2px solid white;
`;

export const A= styled.a`
     margin: 0 1rem;
     transition: transform 250ms;
     display: inline-block;
     &:hover{
          color: #6BD0FF;
          transition: 200ms ease-in;
          transform: translateY(-5px);
     }
     color: #fff;
`;

export const Icons= styled.div`
     text-align: center;
`;



     






