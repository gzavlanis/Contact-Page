import styled from 'styled-components';

export const Body= styled.div`
    display: block;
    padding-top: 20px;
    background: #DCDCDC;
    width: 80%;
    height: 450px;
    loading: lazy;
    transform: translate(12%, 20%);
    box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border: transparent;
    border-radius: 20px;
`;

export const Form= styled.div`
    text-align: center;
    margin: 0 auto;
`;

export const P= styled.p`
    color: black;
    text-align: center;
`;

export const Input= styled.input`
    color: black;
    display: block;
    box-sizing: border-box;
    width: 85%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    font-size: 14px;
    color: black;
    transform: translate(9%, 50%);
    &:hover{
        color: white;
        opacity: 0.9;
    }
    margin-bottom: 15px;
    font-size: 16px;
`;

export const Select= styled.select`
    display: block;
    box-sizing: border-box;
    width: 85%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    font-size: 16px;
    transform: translate(9%, 50%);
    color: black;
`;





