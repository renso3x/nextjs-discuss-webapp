import Link from "next/link";

import { routePaths } from "@/routePath";
import CommentCreateForm from "@/components/comments/comment-create-form";
import PostShow from "@/components/posts/post-show";
import CommentList from "@/components/comments/comment-list";

interface PostShowPageProps {
  params: {
    slug: string;
    postId: string;
  };
}

export default async function PostShowPage({ params }: PostShowPageProps) {
  const { slug, postId } = params;

  return (
    <div className="space-y-3">
      <Link
        className="underline decoration-solid"
        href={routePaths.topicShow(slug)}
      >
        {"< "}Back to {slug}
      </Link>
      <PostShow postId={postId} />
      <CommentCreateForm postId={postId} />
      <CommentList postId={postId} />
    </div>
  );
}
