import React from 'react';

const PostItem = ({match})=>{

       return<div>{match.params.id}</div>

}

export default PostItem;