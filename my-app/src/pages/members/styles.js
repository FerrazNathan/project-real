import styled from 'styled-components'

export const Container = styled.section`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;  
`

export const ContentBanner = styled.section`
  width: 100%;
  background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
`

export const Banner = styled.div`
  max-width: 1240px;
  width: 100%;
  margin: 0 auto;
  & img{
    width: 100%;
    height: 50vh;
    margin-bottom: -3px;
  }
`

export const BoxText = styled.div`

`