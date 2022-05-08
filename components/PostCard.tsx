import { useRouter } from "next/router";
import { useCallback } from "react";

interface PostProps {
  id: string;
  thumbnail: string;
  title: string;
  description: string
}

export default function PostCard({ id, thumbnail, title, description }: PostProps) {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    router.push(`/post/${id}`)
  }, []);

  return (
    <div className="w-[27.75rem]" onClick={handlePostClick}>
      <img src={thumbnail} alt="Post thumbnail" className="w-full hover:opacity-90 mb-5 h-60 object-cover rounded-[1.25rem] cursor-pointer" />
      <h3 className="font-bold mb-2 text-2xl">{title}</h3>
      <span className="text-lg">{description}</span>
    </div>
  )
}