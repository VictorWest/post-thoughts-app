import React, {useState} from 'react'
import Header from './components/Header'
import MainInput from './components/MainInput'
import DUMMY_TWEET from './data'
import Tweets from './components/Tweets'

export default function App() {
  const [ dummyTweets, setDummyTweets ] = useState([...DUMMY_TWEET])
  const [ input, setInput ] = useState({
    'profile_img': '',
    'name': '',
    'username': '',
    'content': ''
  })
  function handleChange(e){
    setInput({
      'profile_img': '',
      'name': 'Victor',
      'username': 'officialv_west',
      'content': e.target.value
    })
  }
  function handleClick(){
    setDummyTweets(prevVal => [input, ...prevVal])
  }
  return (
    <>
      <Header/>
      <MainInput handleChange={handleChange} handleClick={handleClick}/>    
      <Tweets dummyTweets={dummyTweets}/>
    </>
  )
}
