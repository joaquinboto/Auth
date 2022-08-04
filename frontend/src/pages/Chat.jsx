import React from 'react'
import styled from 'styled-components';
import axios from 'axios';

function Chat() {


  return (
    <>
    
      <Container>
        {/* <form action="" onSubmit={handleSubmit}>
          <input type="text" onChange={e => setMessage(e.target.value) } value={message} placeholder="Type a message..." />
          <button type="submit">Send</button>
        </form> */}
        </Container>
        <div id='message'>
            <div>

            </div>
        </div>
    </>
  )
}

const Container = styled.div`
form {
  background: #000;
  padding: 3px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

form input {
  border: 0;
  padding: 10px;
  width: 90%;
  margin-right: 0.5%;
}

form button {
  width: 9%;
  background: white;
  border: none;
  padding: 10px;
}

#messages {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

#messages div {
  padding: 5px 10px;
}

#messages div:nth-child(odd) {
  background: #eee;
}
`



export default Chat