// import { BGShapeCircle } from "@/components/bg-shape-circle";
import { Button } from "@/components/ui/button";
import { Hero } from "@/types/landing";
import Link from "next/link";
import { isDateInPast } from "@/helper/helper";
import CountdownTimer from "@/templates/shadcn/components/ContdownTimer";

const countdownDate = new Date("2024-10-06T14:00:00+08:00");

export default function ({ hero }: { hero: Hero }) {
  if (hero.disabled) {
    return;
  }

  return (
    <div className="bg-gradient-to-t from-zinc-50 to-white dark:from-zinc-950 dark:to-black relative">
      <div className="absolute bg-[url('/_convertfast/gradient-bg-0.svg')] bg-auto bg-no-repeat z-0 inset-0 top-0 bottom-0 left-0 right-0 grayscale"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-primary mb-6 drop-shadow-md">
            {hero.title}
          </h2>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8">
            {hero.description}
          </p>
          <div className="flex flex-col justify-between items-center mb-8">
            {!isDateInPast(countdownDate) && (
              <CountdownTimer
                deadline={countdownDate}
                title={"More than 19,000 people have signed up to watch the film."}
              />
            )}
          </div>
          <div className="flex flex-row justify-center gap-4">
            {hero.buttons?.map((v, idx) => (
              <Link key={idx} href={v.url || ""} target={v.target || "_self"}>
                <Button
                  key={idx}
                  size="lg"
                  variant={v.theme === "outline" ? "outline" : "default"}
                  className={`
                    ${v.theme === "outline"
                      ? "bg-transparent text-red-600 border-2 border-red-600 hover:bg-red-600 hover:text-white"
                      : "bg-red-600 hover:bg-red-700 text-white"
                    }
                    text-xl py-6 px-8 h-auto w-48 transition-colors duration-300
                  `}
                >
                  {v.title}
                </Button>
              </Link>
            ))}
          </div>
          {hero.tip && <p className="mt-4 text-sm text-gray-500">{hero.tip}</p>}
        </div>
      </div>
    </div>
  );
}
