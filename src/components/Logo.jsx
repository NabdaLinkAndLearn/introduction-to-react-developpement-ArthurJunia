import React from 'react'

export default function Logo(props) {
  return (
    <a href={props.href} target="_blank">
      <img src={props.logo} className={props.className ? `logo ${props.className}`: `logo`} alt={props.alt} />
    </a>
  )
}
