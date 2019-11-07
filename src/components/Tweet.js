import React, { Component } from 'react';
import Avatar from "./Avatar";
import Message from "./Message";
import Comment from "./Comment";
import Displayname from "./Displayname";
import Like from "./Like";
import Retweet from "./Retweet";
import Share from "./Share";
import Timestamp from "./Timestamp";
import Username from "./Username";
import More from './More';

function formatDate(date) {
    return date.toLocalDateString();
}

const testTweet ={
    message: "Something about cats.",
    gravatar:"xyz",
    author:{
        handle:"catdad",
        name:"I have to many cats at home!"
    },
    likes: 2,
    retweets: 0,
    Time: new Date()

};


class Tweet extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className='tweet'>
                <Avatar {...testTweet}/>
                 <div className="content">
                    <Displayname {...testTweet}/>
                    <Username {...testTweet}/>
                    <Timestamp {...testTweet}/> 
                    <Message {...testTweet}/>       
                        <div className="buttons">
                            <Comment {...testTweet}/>
                            <Retweet {...testTweet}/>
                            <Like {...testTweet}/>
                            <Share {...testTweet}/>
                            <More {...testTweet}/>
                        </div>
                </div>
            </div>
        );
    }
}

export default Tweet;