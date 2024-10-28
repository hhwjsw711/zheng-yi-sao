import { Item, Section } from "@/types/landing";

export default function ({ section }: { section: Section }) {
  if (section.disabled) {
    return;
  }

  return (
    <div className="bg-gradient-to-t py-12 px-4 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div className="mx-auto max-w-2xl text-center mb-8">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {section.title}
        </h2>
        {section.tip && (
          <p className="mt-4 text-lg leading-8 text-muted-foreground">
            {section.tip}
          </p>
        )}
      </div>
      <div className="mt-4 flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.items?.map((item: Item, idx: number) => (
            <div
              key={idx}
              className="text-left p-6 border border-gray-200 rounded-lg shadow-sm"
            >
              {item.avatar && item.avatar.src && (
                <div className="mb-3 text-primary-500">
                  <img
                    src={item.avatar?.src}
                    alt={item.avatar?.title}
                    className="w-full h-auto block"
                  />
                </div>
              )}
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}