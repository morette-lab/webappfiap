import React from 'react';
// import styles from './Home.module.css'
import { BottomBar } from './../../components'
import { googleIcon } from './../../assets/images'

function HomeLayout({ }) {
  return (
    <>
      <div style={{}}>
        <BottomBar icons={[{
          key: "1", source: googleIcon, alt: "Foto de olho"
        }, {
          key: "2", source: googleIcon, alt: "Foto de olho"
        }, {
          key: "3", source: googleIcon, alt: "Foto de olho"
        }]} />
      </div>
    </>
  )
}

export default HomeLayout;
