import TweetTemplate from "./TweetTemplate"
import pfp from '../assets/pfp1.jpg'
export default function Tweets({dummyTweets}) {
  return (
    <>
      {dummyTweets.map(({profile_img, name, username, content}) => {
        return  <TweetTemplate img={pfp} name={name} username={username} content={content}/>
      })}
    </>
  )
}