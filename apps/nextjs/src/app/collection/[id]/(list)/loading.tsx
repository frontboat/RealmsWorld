// This component is responsible for rendering a loading state.
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />;
}

// This component renders a loading message in the center of the screen.
export const LoadingSkeleton = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center py-20">
      loading....
    </div>
  );
};
