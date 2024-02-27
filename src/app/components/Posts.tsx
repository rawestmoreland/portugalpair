"use client";

export function Posts({ data }: { data: any }) {
  return (
    <div className="w-full mt-8">
      <h2 className="text-3xl">Posts</h2>
      <div className="w-full border-t border-border my-4" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {data.map((post: any) => (
          <p key={post.id}>{post.title}</p>
        ))}
      </div>
    </div>
  );
}
