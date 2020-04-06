import snoowrap from 'snoowrap';
import moment from 'moment';

const r = new snoowrap({
  userAgent: process.env.REACT_APP_USER_AGENT,
  clientId: process.env.REACT_APP_CLIENT_ID,
  clientSecret: process.env.REACT_APP_CLIENT_SECRET,
  refreshToken: process.env.REACT_APP_REFRESH_TOKEN
});

export async function getPosts() {

  const subreddit = await r.getSubreddit('AkhbarMasr');
  const topPosts = await subreddit.getTop({time: 'all', limit: 3});
  console.log(topPosts)
  let data = [];    

  topPosts.forEach((post) => {
    let utcMoment = moment.utc();
    post.created = post.created * 1000
    let duration = moment.duration(utcMoment.diff(post.created));
    let hours = Math.floor(duration.asHours())
    data.push({
      id: post.id,
      link: post.url, 
      title: post.title,
      description: post.selftext,
      score: post.score,
      numComments: post.num_comments,
      author: post.author.name,
      createdDate: hours
    })
  });
  console.log(data)
  return data
};

export async function getComments(postID) {
  if(!postID)
    return
  const comments = await (await r.getSubmission(postID)).comments
  let data = []
  comments.forEach((comment)=>{
    data.push({
      id: comment.id,
      ups: comment.ups, 
      downs: comment.downs,
      description: comment.body,
      score: comment.score,
      numComments: comment.num_comments,
      author: comment.author.name
    })
  })
  console.log("Hii",comments)

  return data
};