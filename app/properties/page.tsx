import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";

const PropertiesPage = async () => {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return (
      <ClientOnly>
        <EmptyState
          title="You aren't logged in!"
          subtitle="Log in or sign up to see your trips."
        />
      </ClientOnly>
    );
  }

  const listing = await getListings({ userId: currentUser.id });

  if (listing.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="You don't have any properties yet!"
          subtitle="Book a listing to get started."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <PropertiesClient listings={listing} currentUser={currentUser} />
    </ClientOnly>
  );
};

export default PropertiesPage;
