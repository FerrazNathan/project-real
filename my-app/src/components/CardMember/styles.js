import styled from 'styled-components'

export const ContentSearch = styled.div`
  width: 100%;
  max-width: 1250px;
  margin: 20px auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px){
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
`

export const ContentLabelInputSearch = styled.div`
@media (max-width: 768px){
  width: 90%;
  margin: 0 auto;
}`

export const LabelInputSearch = styled.div`
  font-family: 'Nunito Sans', sans-serif;
  color: #143d59;
  font-weight: 600;
  @media (max-width: 768px){
    margin-left: 1rem;
    margin-bottom: 1rem;
    text-align: center;
  }
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
  &:focus {
    background-color: #e8f0fe;
  }
  @media (max-width: 768px){
    width: 100%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
`

export const Button = styled.button`
  padding: 5px 10px;
  margin-top: 2rem;
  border-radius: 10px;
  margin-left: 20px;
  border: none;
  font-size: 0.7rem;
  background-color: #282c34;
  color: #fff9c7;
  text-transform: uppercase;
  font-weight: 600;
  height: 40px;
  cursor: pointer;
  @media (max-width: 768px){
    width: 90%;
    margin: 0.5rem auto;
  }
`

export const Container = styled.div`
  max-width: 1320px;
  width: 100%;
  margin: -20px auto 0;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
  }
`

export const Card = styled.div`
  width: 49%;
  margin-top: 30px;
  box-shadow: 1px 5px 8px 5px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  @media (max-width: 768px){
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`

export const BoxHeader = styled.div`
  & img {
    width: 340px;
    height: 305px;
    border-radius: 16px 0 0 16px;
    object-fit: cover;
    object-position: 100% 46%;
    @media (max-width: 768px){
    width: 100%;
    height: 200px;
    border-radius: 16px;
    object-fit: cover;
    object-position: 100% 30%;
  }
  }
`

export const BoxText = styled.div`
  padding: 10px;
  line-height: 0.8;
  width: 40%;
  margin: 4px 4px 0 0;
  & h2 {
    font-family: 'Great Vibes', cursive;
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    color: #143d59;
    text-decoration: underline;
    font-weight: 400;
    font-size: 40px;
    @media (max-width: 768px){
      text-align: center;
      margin-left: 5rem;
    }
  }
  & p {
    font-size: 1rem;
    font-family: 'Nunito Sans', sans-serif;
    color: #282c34;
    display: flex;
    flex-wrap: wrap;
    font-weight: 600;
  }
  & span {
    margin-left: 4px;
    font-weight: 500;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
  }
`
