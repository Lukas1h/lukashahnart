import { query } from '$app/server';


const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds



let instagramPostsCache: any[] = [];
let instagramPostsCacheTimestamp: number | null = null;

async function getMediaById(token: string, id: string) {
    const url = `https://graph.instagram.com/${id}?fields=media_url,media_type&access_token=${token}`;

    try {
        const res = await fetch(url);
        const data = await res.json();

        return data;
    } catch (e) {
        console.error(`Failed to fetch media by id ${id}:`, e);
        throw e;
    }
}

async function _getInstagramPosts(token: string) {
    const now = Date.now();

    if (
        instagramPostsCache.length > 0 &&
        instagramPostsCacheTimestamp &&
        now - instagramPostsCacheTimestamp < CACHE_DURATION
    ) {
        console.log("returning cache")
        return instagramPostsCache;
    }

    const url = `https://graph.instagram.com/me/media?fields=id,caption,media_url,permalink,children,media_type,thumbnail_url,timestamp,username&access_token=${token}`;


    try {
        const res = await fetch(url);
        const data = await res.json();

        if (!res.ok || !data.data) {
            throw "No instagram posts found.";
        }

        let posts = data.data


        posts = await Promise.all(posts.map(async (post: any) => {
            if (post.children) {
                let newPost = post

                newPost.children = await Promise.all(post.children.data.map(async (item: { id: string }) => {
                    return await getMediaById(token, item.id)
                }))

                return newPost

            } else {
                return post
            }
        }))

        instagramPostsCache = posts
        instagramPostsCacheTimestamp = now

        return posts
    } catch (e) {
        console.error('Failed to fetch Instagram posts:', e);
        throw e;
    }
}


export const getInstagramPosts = query(async () => {
    let token =
        'IGAAPZCoqVFCT9BZAFRQZAEFMUlpRa0tHTDRzeXI5WEw5aG5UZAk53ZADZAPaWFYS3lHeFN5VVBGS3ptb2I2QmQ3YzBIdDQyRUpXaFBVREZA6MFlibTFCdl90a2VBOXZAzYm9VSlJzcjRvNERIVEZAzeGtmQmV0RFk0N0pzZAWZAYejRSMkp3awZDZD';

    let posts = await _getInstagramPosts(token);

    return posts
});