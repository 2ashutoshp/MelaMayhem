import { Button } from "@/components/ui/button";
import hero from "../../public/assets/images/hero2.gif";
import Image from "next/image";
import Link from "next/link";
import Collection from "@/components/shared/Collection";
import { getAllEvents } from "@/lib/actions/event.actions";

export default async function Home() {
  const events = await getAllEvents({
    query: '',
    category: '',
    page: 1,
    limit: 6
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">
              Host, Connect, Celebrate: Your South Asian Events Platform!
            </h1>
            <p className="p-regular-20 md:p-regular-24">
              Whether you're looking for cultural festivals, concerts, or
              community gatherings, Mela Mayhem makes it easy to find and enjoy
              the vibrancies of South Asian culture near you!
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>
          <Image
            src={hero}
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2x1:max-h-[50vh]"
          />
        </div>
      </section>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          {/* <Search />
          <CategoryFilter /> */}
        </div>

        <Collection 
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={1}
          totalPages={events?.totalPages}
        />
      </section>
    </>
  );
}
