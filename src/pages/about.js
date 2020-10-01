/* eslint jsx-a11y/label-has-for:0 */

import React from 'react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import styled from 'styled-components'
import { Layout, Wrapper, Header } from '../components'

import config from '../../config'

const Content = styled.div`
  grid-column: 2;
  box-shadow: 0 4px 120px rgba(0, 0, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem 4rem;
  background-color: ${props => props.theme.colors.bg};
  z-index: 9000;
  margin-top: -3rem;
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 3rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.phone}) {
    padding: 2rem 1.5rem;
  }
  form {
    p {
      label,
      input {
        display: block;
      }
      input {
        min-width: 275px;
      }
      textarea {
        resize: vertical;
        min-height: 150px;
        width: 100%;
      }
    }
  }
`

const Success = () => (
  <Layout>
    <Wrapper>
      <Helmet title={`Contact | ${config.siteTitle}`} />
      <Header>
        <Link to="/">{config.siteTitle}</Link>
      </Header>
      <Content>
      <h1>About me</h1>
    <p>I’m Jeremy Barkley. I am a Systems admin for OpenVMS and RedHat Linux systems and freelance web
       developer living in the Texas Panhandle. I have had an interest in web development and design since as far back as high school when I built a website with
       some friends. The technology has changed a lot and that actually makes me very happy.</p>

    <p>In my free time (when i can find it), I also enjoy creating objects in 3d using Blender 3d,
        as well as spending time with family and being outdoors.</p>
      </Content>
    </Wrapper>
  </Layout>
)

export default Success
