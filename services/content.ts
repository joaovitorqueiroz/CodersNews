import { Document } from "@contentful/rich-text-types";
import Contentful, { createClient, Entry } from "contentful";

export type Post = Entry<{
  title: Contentful.EntryFields.Text;
  description: Contentful.EntryFields.Text;
  thumbnail: Contentful.Asset;
  content: Document
}>

const client = createClient({
  space: '7hhr3qtj3v35',
  accessToken: 'iKl9le8hLDTqMDsHOafQDtVl-CxkIUPqjibniEeZG44'
});

export async function getPosts(): Promise<Contentful.Entry<Post>[]> {
  const { items } = await client.getEntries<Post>({
    content_type: 'post'
  })

  return items;
};

export async function getPost(postId: string): Promise<Contentful.Entry<Post>> {
  const post = await client.getEntry<Post>(postId)

  return post;
};