import { PageLayout } from "../_components/PageLayout";
import CollectionsList from "./CollectionsList";

// Metadata for the page
export const metadata = {
  title: "Lootverse Collections",
  description:
    "Various collections of the Lootverse - Created for adventurers by Bibliotheca DAO",
};

// Page component
export default async function Page() {
  return (
    <>
      {/* Page layout with title */}
      <PageLayout title="Collections">
        {/* Component to render the collections list */}
        <CollectionsList />
      </PageLayout>
    </>
  );
}
