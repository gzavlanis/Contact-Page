import styled from 'styled-components';

export const Box2= styled.div`
    display: block;
    width: 100%;
    text-align: center;
`;

export const Frame= styled.iframe`
    width: 80%;
    height: 400px;
    loading: lazy;
    transform: translateY(30%);
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: transparent;
    border-radius: 20px;
`;