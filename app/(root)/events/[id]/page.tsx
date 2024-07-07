import { SearchParamProps, Event } from "@/types";
import EventDetailsPage from "./EventDetailsPage";
import {
  getEventById,
  getRelatedEventsByCategory,
} from "@/lib/actions/event.actions";
import Collection from "@/components/shared/Collection";

const EventDetails = async ({
  params: { id },
  searchParams,
}: SearchParamProps) => {
  const event: Event = await getEventById(id);

  const relatedEvents = await getRelatedEventsByCategory({
    categoryId: event.category._id,
    eventId: event._id,
    page: searchParams.page as string,
  });

  return (
    <>
      <EventDetailsPage event={event} />;
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <h2 className="h2-bold">Related Events</h2>
      </section>
      <section className="wrapper my-8 flex flex-col gap-8 md:gap-12">
        <Collection
          data={relatedEvents?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={3}
          page={searchParams.page as string}
          totalPages={relatedEvents?.totalPages}
        />
      </section>
    </>
  );
};

export default EventDetails;
