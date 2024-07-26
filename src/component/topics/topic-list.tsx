
import { db } from "@/db";
import { routePaths } from "@/routePath";
import { Chip } from "@nextui-org/react";
import { PathParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime";
import Link from "next/link";

export default async function TopicList() {
  const topics = await db.topic.findMany();


  const rendereredTopics = topics.map((topic) => {
    return (
      <div key={topic.id}>
        <Link href={routePaths.topicShow(topic.slug)}>
          <Chip color="warning" variant="shadow">
            {topic.slug}
          </Chip>
        </Link>
      </div>
    )
  })

  return (
    <div className="flex flex-row flex-wrap gap-2">
      {rendereredTopics}
    </div>
  )

}