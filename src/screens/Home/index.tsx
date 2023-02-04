import React from 'react';
import * as RB from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

function Home() {
  return (
    <div>
      <h1>Hello World!</h1>
      <RB.Button variant="primary">Avançar</RB.Button>
      <div style={{ width: "30%" }}>
        <RB.Modal.Dialog>
          <RB.Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </RB.Modal.Header>

          <RB.Modal.Body>
            <p>Modal body text goes here.</p>
          </RB.Modal.Body>

          <RB.Modal.Footer>
            <RB.Button variant="secondary">Close</RB.Button>
            <RB.Button variant="primary" href="/navbar">Save changes</RB.Button>
          </RB.Modal.Footer>
        </RB.Modal.Dialog>
      </div>
    </div>
  )
}

export default Home;
