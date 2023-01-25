import React from 'react'
import Tags from '../Tags'
import styles from './Galeria.module.scss'
import fotos from './fotos.json'
import Cards from './Cards'
import { useState } from 'react'

export default function Galeria() {
  const[itensFotos, setItensFotos] = useState(fotos)
  const tags =[ ...new Set(fotos.map(foto => foto.tag))]

  const filtraFotos = tag => {
    const novasFotos = fotos.filter(foto => {
      return foto.tag === tag;
    })

    setItensFotos(novasFotos);
  }

  return (
    <section className={styles.galeria}>
        <h2>Navegue pela galeria</h2>
        <Tags tags={tags} filtraFotos={filtraFotos} setItensFotos={setItensFotos}/>
        <Cards
          fotos={itensFotos}
          styles={styles}
        />
    </section>
  )
}
