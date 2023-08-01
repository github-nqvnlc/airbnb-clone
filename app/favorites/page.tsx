import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoriteClient";

const listingsPage = async () => {
  const currentUser = await getCurrentUser();
  const listings = await getFavoriteListings();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found!"
          subtitle="Looks like you don't have any favorites yet."
        />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <FavoriteClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};
export default listingsPage;
