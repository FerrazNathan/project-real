import styled from 'styled-components'

export const ContentSearch = styled.div`
  width: 100%;
  max-width: 1260px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
`

export const ContentLabelInputSearch = styled.div`

`

export const LabelInputSearch = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  color: #143D59;
  font-weight: 600;
`

export const InputSearch = styled.input`
  width: 39rem;
  padding: 12px;
  border-radius: 10px;
  border: none;
  margin: 10px 0;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  outline: 0;
  cursor: pointer;
  &:focus{
    background-color: #e8f0fe;
  }
`

export const Button = styled.button`
  padding: 5px;
  margin-top: 2rem;
  border-radius: 10px;
  margin-left: 20px;
  border: none;
  font-size: 0.8rem;
  background-color: #282c34;
  color: #fff9c7;
  text-transform: uppercase;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
`

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: -20px auto 0;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Card = styled.div`
  width: 49%;
  margin-top: 30px;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
`

export const BoxHeader = styled.div`
  & img{
    width: 340px;
    height: 305px;
    border-radius: 16px 0 0 16px;
    object-fit: cover;
    object-position: 100% 46%;
  }
`

export const BoxText = styled.div`
  padding: 10px;
  line-height: 0.8;
  width: 40%;
  margin: 4px 4px 0 0;
  & h2{
    font-family: 'Great Vibes', cursive;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    color: #143D59;
    text-decoration: underline;
    font-weight: 400;
    font-size: 40px;
  }
  & p {
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    color: #282c34;
    display: flex;
    flex-wrap: wrap;
    font-weight: 600;
  }
  & span{
    margin-left: 4px;
    font-weight: 500;
  }
`

