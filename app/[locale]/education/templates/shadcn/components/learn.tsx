import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { videos } from "../../../data/videos";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function LearnComponent() {
    return (
      <div className="bg-gradient-to-t py-24 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl font-mono">
          AIGC作品展示
          </h2>
          <p className="mt-4 text-lg leading-8 text-[#878787]">
          经过短短9天培训，每一位学生都可以做出自己的AIGC短片
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <Card key={video.url}>
              <CardHeader>
                <iframe
                  src={video.url}
                  width="100%"
                  height="auto"
                  className="aspect-video pb-4"
                  allowFullScreen
                  loading="lazy"
                  title={video.title}
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage
                      src={video.author.image}
                      className="size-6 rounded-full"
                    />
                    <AvatarFallback className="size-6 rounded-full bg-accent flex items-center justify-center text-xs font-medium uppercase">
                      {video.author.name.charAt(0)}
                      {video.author.name.charAt(1)}
                    </AvatarFallback>
                  </Avatar>
                  <span className="text-sm text-[#878787]">
                    {video.author.name}
                  </span>
                </div>
                <CardTitle className="text-md font-semibold font-mono pt-2">
                  {video.title}
                </CardTitle>
                <CardDescription className="text-sm text-[#878787]">
                  {video.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    );
  }
