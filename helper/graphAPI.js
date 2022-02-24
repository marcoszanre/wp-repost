// Initial Config
const axios = require('axios').default;
const apiKey = process.env.ACCESS_TOKEN;
const config = {
    headers: {
        Authorization: `Bearer ${apiKey}`
    }
};
const scimEndpoint = "https://scim.workplace.com/Users";
const graphEndpoint = "https://graph.facebook.com";

// Post to group
const postGroup = async (content, link, groupId) => {
    const contentBody = {
        "message": content,
        "link": link
    }
    const res = await axios.post(
        `${graphEndpoint}/${groupId}/feed`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("content was posted successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Comment a post
const postComment = async (content, postId) => {
    const contentBody = {
        "message": content
    }
    const res = await axios.post(
        `${graphEndpoint}/${postId}/comments`,
        contentBody,
        config
    );
    if (res.status == 200) {
        // Post was created successfully
        console.log("comment was posted successfully");
        return true;
    }
    else {
        // Post wasn't created yet
        console.log("an error happened");
        return false;
    }
}

// Export call
module.exports = {
    postGroup,
    postComment
};
