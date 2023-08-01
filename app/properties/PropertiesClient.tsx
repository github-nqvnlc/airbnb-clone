"use client";

import React from "react";
import { SafeListing, SafeUser } from "../types";
import ClientOnly from "../components/ClientOnly";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";
import ListingCard from "../components/listings/ListingCard";

interface PropertiesClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
  listings,
  currentUser,
}) => {
  const router = useRouter();
  const [deleteId, setDeleteId] = React.useState("");

  const onCancel = React.useCallback(
    (id: string) => {
      setDeleteId(id);

      axios
        .delete(`/api/listings/${id}`)
        .then(() => {
          toast.success("Listings deleted!");
          router.refresh();
        })
        .catch((error) => {
          toast.error("Something went wrong!");
        })
        .finally(() => {
          setDeleteId("");
        });
    },
    [router]
  );

  return (
    <ClientOnly>
      <Container>
        <Heading
          title="Properties"
          subtitle="Manage your properties and view your upcoming reservations."
        />
        <div
          className="
            mt-10
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            gap-8
          "
        >
          {listings.map((listing) => (
            <ListingCard
              key={listing.id}
              data={listing}
              actionId={listing.id}
              onAction={onCancel}
              disabled={deleteId === listing.id}
              actionLabel="Delete Property"
              currentUser={currentUser}
            />
          ))}
        </div>
      </Container>
    </ClientOnly>
  );
};

export default PropertiesClient;
